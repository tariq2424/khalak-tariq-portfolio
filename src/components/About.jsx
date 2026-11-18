import { profile, education, certifications } from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-pad section-gap bg-surface/50 border-y border-line/15">
      <div className="content-wrap grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 min-w-0">
        <Reveal className="min-w-0">
          <SectionHeading eyebrow="About" title="Developer, builder, problem solver" />
          <div className="space-y-4 text-[15px] text-body leading-relaxed">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-display font-semibold text-fg text-[15px] mb-3">Education</h3>
            <div className="card p-5">
              <p className="font-medium text-fg text-sm">{education.degree}</p>
              <p className="text-sm text-body mt-1">{education.school}</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted font-mono">
                <span>{education.dates}</span>
                <span>{education.detail}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90} className="min-w-0">
          <h3 className="font-display font-semibold text-fg text-[15px] mb-4 lg:mt-[4.1rem]">Certifications & Achievements</h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-body leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-accenttext to-cyan2 flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
