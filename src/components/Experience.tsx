import { Section } from "@/components/Section";
import { site } from "@/content/site";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      lead={`Professional since ${site.professionalSince}, Java backend since ${site.backendSince}. Newest first.`}
    >
      <ol className="relative ml-2 border-l border-border pl-8 sm:ml-4 sm:pl-12">
        {site.experience.map((job) => {
          const current = job.end === null;
          return (
            <li
              key={job.id}
              id={`exp-${job.id}`}
              tabIndex={-1}
              className="relative scroll-mt-24 pb-12 last:pb-0 focus:outline-none"
            >
              {/* Marker on the line */}
              <span
                aria-hidden
                className={`absolute -left-8 top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-bg sm:-left-12 ${
                  current ? "border-signal" : "border-accent"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${current ? "bg-signal signal-dot" : "bg-accent"}`}
                />
              </span>

              <p className="font-mono text-sm text-muted">
                <time dateTime={job.start}>{job.startLabel}</time>
                {" – "}
                {current ? (
                  <span className="text-signal">{job.endLabel}</span>
                ) : (
                  <time dateTime={job.end ?? undefined}>{job.endLabel}</time>
                )}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">
                {job.role}
                <span className="font-normal text-muted"> · {job.company}</span>
              </h3>
              <p className="mt-0.5 text-sm text-muted">{job.location}</p>

              {job.summary.length > 0 && (
                <ul className="mt-3 max-w-[65ch] list-disc space-y-1.5 pl-5 text-text">
                  {job.summary.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}

              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies at ${job.company}`}>
                {job.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-text"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
