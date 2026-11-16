import { EventLog } from "@/components/EventLog";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center lg:gap-16 lg:pb-24 lg:pt-24">
        <div className="max-w-[60ch]">
          <p className="font-mono text-sm text-muted">
            {site.location} · since {site.professionalSince}
          </p>
          <h1 id="hero-title" className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-2 text-xl text-muted sm:text-2xl">{site.title}</p>
          <p className="mt-6 text-lg leading-relaxed">{site.tagline}</p>

          {site.availability && (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-signal/40 px-3 py-1 text-sm text-signal">
              <span aria-hidden className="h-2 w-2 rounded-full bg-signal" />
              {site.availability}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent"
            >
              Get in touch
            </a>
            <span className="ml-1 flex items-center gap-1">
              <a
                href={site.links.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={site.links.linkedin.ariaLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:text-text"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={site.links.github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={site.links.github.ariaLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:text-text"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            </span>
          </div>
        </div>

        <EventLog events={site.experience} />
      </div>
    </section>
  );
}
