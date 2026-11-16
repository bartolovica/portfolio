import { ArrowUpRightIcon, GitHubIcon } from "@/components/Icons";
import { Section } from "@/components/Section";
import { site } from "@/content/site";

export function Projects() {
  const projects = site.projects.filter((p) => p.description.trim().length > 0);
  if (projects.length === 0) return null;

  return (
    <Section
      id="projects"
      title="Projects"
      lead="Public Spring Boot repositories on GitHub. Descriptions reflect what the code actually does."
    >
      <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <li
            key={p.repo}
            className="flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <h3 className="font-mono text-base font-medium">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.repo} on GitHub (opens in a new tab)`}
                className="inline-flex items-center gap-1.5 text-accent hover:underline"
              >
                {p.repo}
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text">{p.description}</p>

            <ul className="mt-4 space-y-2 text-sm text-muted" aria-label="Key features">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded border border-border bg-bg px-1.5 py-0.5 text-xs text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${p.repo} source on GitHub (opens in a new tab)`}
              className="mt-6 inline-flex items-center gap-2 self-start text-sm text-muted transition-colors hover:text-text"
            >
              <GitHubIcon className="h-4 w-4" />
              Source on GitHub
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
