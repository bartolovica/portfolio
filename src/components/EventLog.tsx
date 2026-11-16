"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Experience } from "@/content/site";

type Props = { events: Experience[] };

const ROW_DELAY = 0.22;

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/**
 * The hero's "topic log": the career as a stream of events, printed once on load.
 * Each row links to its entry in the Experience timeline.
 */
export function EventLog({ events }: Props) {
  const reduce = useReducedMotion();
  const rows = events.map((e) => ({
    id: e.id,
    offset: e.start,
    topic: slug(e.company.replace(/\b(GmbH|Group|Croatia)\b/g, "")),
    role: slug(e.role.replace(/\(.*\)/, "")),
    current: e.end === null,
  }));

  const jump = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(`exp-${id}`);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    target.focus({ preventScroll: true });
    history.replaceState(null, "", `#exp-${id}`);
  };

  return (
    <div
      className="w-full overflow-hidden rounded-lg border border-border bg-surface font-mono text-[13px] leading-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]"
      role="region"
      aria-label="Career events"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5 text-xs text-muted">
        <span>
          <span className="text-accent">$</span> tail -f career.events
        </span>
        <span aria-hidden>{rows.length} msgs</span>
      </div>
      <ol className="px-4 py-3" aria-label="Career timeline, newest first">
        {rows.map((row, i) => (
          <motion.li
            key={row.id}
            initial={reduce ? false : { opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: reduce ? 0 : 0.3 + i * ROW_DELAY, duration: 0.25, ease: "easeOut" }}
          >
            <a
              href={`#exp-${row.id}`}
              onClick={jump(row.id)}
              className="group -mx-2 flex items-baseline gap-3 rounded px-2 py-0.5 text-text transition-colors hover:bg-surface-2"
              aria-label={`${row.offset} ${row.topic}: go to this position in Experience`}
            >
              <span className="shrink-0 text-muted">{row.offset}</span>
              <span className="truncate text-accent group-hover:underline">{row.topic}</span>
              <span className="hidden truncate text-muted sm:inline">{row.role}</span>
              {row.current && (
                <span className="ml-auto flex shrink-0 items-center gap-2 text-signal">
                  <span className="sr-only">current</span>
                  <span
                    aria-hidden
                    className={`inline-block h-2 w-2 rounded-full bg-signal ${reduce ? "" : "signal-dot"}`}
                  />
                </span>
              )}
            </a>
          </motion.li>
        ))}
        <motion.li
          aria-hidden
          className="mt-1 text-muted"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 0.3 + rows.length * ROW_DELAY, duration: 0.3 }}
        >
          <span className="text-accent">$</span>{" "}
          <span className="inline-block h-[1.1em] w-[0.55em] translate-y-[2px] bg-muted/70" />
        </motion.li>
      </ol>
    </div>
  );
}
