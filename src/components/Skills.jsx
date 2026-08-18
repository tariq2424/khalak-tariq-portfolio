import { skills, languages } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-pad py-20 md:py-28">
      <div className="content-wrap">
        <SectionHeading
          eyebrow="Technical Skills"
          title="What I work with"
          description="Organized by category, not by invented proficiency percentages."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => (
            <div key={group.category} className="rounded-xl2 border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-ink text-[15px] tracking-tight">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="tag-chip">
                    {item}
                  </span>
                ))}
              </div>
              {group.note && <p className="mt-3 text-xs text-muted leading-relaxed">{group.note}</p>}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
          <span className="text-muted">Languages:</span>
          {languages.map((l) => (
            <span key={l} className="text-body">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
