import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {site.name}
        </p>
        <ul className="flex items-center gap-1">
          <li>
            <a
              href={site.links.email.href}
              aria-label={site.links.email.ariaLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-text"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={site.links.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={site.links.linkedin.ariaLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-text"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={site.links.github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={site.links.github.ariaLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-text"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
