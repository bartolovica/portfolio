import { Section } from "@/components/Section";
import { site, type Credential } from "@/content/site";

function CredentialList({ heading, items }: { heading: string; items: Credential[] }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-muted">{heading}</h3>
      <ul className="mt-3 space-y-4">
        {items.map((c) => (
          <li key={c.title} className="rounded-lg border border-border bg-surface p-5">
            <p className="font-medium">{c.title}</p>
            <p className="mt-1 text-sm text-muted">
              {c.org} · {c.period}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education & certifications">
      <div className="grid gap-8 sm:grid-cols-2">
        <CredentialList heading="Education" items={site.education} />
        <CredentialList heading="Certifications" items={site.certifications} />
      </div>
    </Section>
  );
}
