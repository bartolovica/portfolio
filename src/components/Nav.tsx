"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { CloseIcon, DownloadIcon, MenuIcon } from "@/components/Icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/lib/useActiveSection";

export type NavItem = { id: string; label: string };

type Props = {
  name: string;
  items: NavItem[];
  cvUrl: string | null;
};

export function Nav({ name, items, cvUrl }: Props) {
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Close the mobile menu on Escape and when the viewport grows past the breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const media = window.matchMedia("(min-width: 768px)");
    const onMedia = () => media.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onMedia);
    return () => {
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onMedia);
    };
  }, [open]);

  const linkClass = (id: string) =>
    `rounded-md px-2.5 py-1.5 text-sm transition-colors hover:text-text ${
      active === id ? "text-accent font-medium" : "text-muted"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <a href="#top" className="mr-auto truncate font-semibold tracking-tight">
          {name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={linkClass(item.id)}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        {cvUrl && (
          <a
            href={cvUrl}
            download
            className="hidden items-center gap-2 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </a>
        )}

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted hover:text-text md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </button>
      </nav>

      <div id={menuId} hidden={!open} className="border-t border-border bg-bg md:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block py-2.5 text-base ${active === item.id ? "text-accent font-medium" : "text-text"}`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
          {cvUrl && (
            <li>
              <a
                href={cvUrl}
                download
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-accent-fg"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
