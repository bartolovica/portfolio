import { ContactForm } from "@/components/ContactForm";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { Section } from "@/components/Section";
import { site } from "@/content/site";

const channels = [
  { ...site.links.email, Icon: MailIcon, display: site.email, external: false },
  { ...site.links.linkedin, Icon: LinkedInIcon, display: "linkedin.com/in/antunbartolovic", external: true },
  { ...site.links.github, Icon: GitHubIcon, display: "github.com/bartolovica", external: true },
];

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      lead="Email is the fastest way to reach me. LinkedIn works too."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        <ul className="space-y-3">
          {channels.map(({ label, href, ariaLabel, Icon, display, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={ariaLabel}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/60"
              >
                <Icon className="h-5 w-5 shrink-0 text-muted group-hover:text-accent" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block truncate font-mono text-xs text-muted">{display}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="max-w-xl">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
