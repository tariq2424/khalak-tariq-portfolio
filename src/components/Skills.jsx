import { skills, languages } from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section-pad section-gap">
      <div className="content-wrap">
        <SectionHeading
          eyebrow="Technical Skills"
          title="The stack I build with"
          description="Frontend, backend, databases, integrations and deployment — grouped by what I actually use."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 70} className={`card p-5 sm:p-6 hover:border-accenttext/30 transition-colors ${i === skills.length - 1 && skills.length % 3 === 2 ? "lg:col-span-2" : ""}`}>
              <h3 className="font-display font-semibold text-fg text-[15px] tracking-tight flex items-center gap-2">
                <span aria-hidden="true" className="w-1.5 h-4 rounded-full bg-gradient-to-b from-accenttext to-cyan2" />
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="tag-chip">{item}</span>
                ))}
              </div>
              {group.note && <p className="mt-3 text-xs text-muted leading-relaxed">{group.note}</p>}
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted">
          Languages: <span className="text-body">{languages.join(" · ")}</span>
        </p>
      </div>
    </section>
  );
}
