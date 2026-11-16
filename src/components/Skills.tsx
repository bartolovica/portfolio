import { Section } from "@/components/Section";
import { site } from "@/content/site";

export function Skills() {
  return (
    <Section id="skills" title="Skills" lead="Grouped by where they are used. No ratings, no progress bars.">
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {site.skills.map((group) => (
          <div key={group.group} className="border-t border-border pt-4">
            <dt className="text-sm font-medium text-muted">{group.group}</dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
