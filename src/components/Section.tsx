import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
};

/** Shared section shell: consistent spacing, heading order and max width. */
export function Section({ id, title, lead, children, className = "" }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-20 border-t border-border/60 py-16 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {lead && <p className="mt-3 max-w-[65ch] text-muted">{lead}</p>}
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}
