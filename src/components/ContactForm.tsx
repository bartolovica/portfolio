"use client";

import { useId, useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const FORM_NAME = "contact";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please write at least a short message (10+ characters).";
  return errors;
}

/**
 * Posts to Netlify Forms. The matching static form lives in public/__forms.html so the
 * build-time form detection picks it up; this component only needs to POST the fields.
 */
export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = (name: keyof Errors) => ({
    id: `${id}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
    onChange: () => errors[name] && setErrors((e) => ({ ...e, [name]: undefined })),
    className:
      "mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2 text-text placeholder:text-muted/70 focus:border-accent",
  });

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-lg border border-border bg-surface p-6"
      >
        <p className="font-medium">Message sent.</p>
        <p className="mt-1 text-sm text-muted">Thanks, I will get back to you by email.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      action="/__forms.html"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      noValidate
      onSubmit={onSubmit}
      className="space-y-4"
      aria-describedby={status === "error" ? `${id}-form-error` : undefined}
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Honeypot: hidden from people, filled in by bots. */}
      <p className="hidden" aria-hidden>
        <label>
          Leave this field empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor={`${id}-name`} className="text-sm font-medium">
          Name
        </label>
        <input type="text" autoComplete="name" required {...field("name")} />
        {errors.name && (
          <p id={`${id}-name-error`} className="mt-1 text-sm text-signal">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${id}-email`} className="text-sm font-medium">
          Email
        </label>
        <input type="email" autoComplete="email" required {...field("email")} />
        {errors.email && (
          <p id={`${id}-email-error`} className="mt-1 text-sm text-signal">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="text-sm font-medium">
          Message
        </label>
        <textarea rows={5} required {...field("message")} />
        {errors.message && (
          <p id={`${id}-message-error`} className="mt-1 text-sm text-signal">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p id={`${id}-form-error`} role="alert" className="text-sm text-signal">
          Sending failed. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
