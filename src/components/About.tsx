import { Section } from "@/components/Section";
import { site } from "@/content/site";

/** Hidden until `site.about` is filled in (TODO(antun)). */
export function About() {
  if (!site.about || site.about.length === 0) return null;
  return (
    <Section id="about" title="About">
      <div className="max-w-[65ch] space-y-4 text-lg leading-relaxed text-text">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <dl className="mt-8 grid max-w-[65ch] grid-cols-1 gap-4 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-muted">Based in</dt>
          <dd className="mt-1">{site.location}</dd>
        </div>
        <div>
          <dt className="text-muted">Languages</dt>
          <dd className="mt-1">{site.languages.join(", ")}</dd>
        </div>
        <div>
          <dt className="text-muted">Backend since</dt>
          <dd className="mt-1">{site.backendSince}</dd>
        </div>
      </dl>
    </Section>
  );
}
