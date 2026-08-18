import { profile, education, certifications } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-pad py-20 md:py-28">
      <div className="content-wrap grid lg:grid-cols-[1.2fr_1fr] gap-14 min-w-0">
        <div>
          <SectionHeading eyebrow="About" title="A quick summary" />
          <p className="text-body leading-relaxed text-[15px]">{profile.about}</p>

          <div className="mt-8">
            <h3 className="font-display font-semibold text-ink text-[15px] mb-3">Education</h3>
            <div className="rounded-xl2 border border-border bg-surface p-5">
              <p className="font-medium text-ink text-sm">{education.degree}</p>
              <p className="text-sm text-body mt-1">{education.school}</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted font-mono">
                <span>{education.dates}</span>
                <span>{education.detail}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-ink text-[15px] mb-4">Certifications & Achievements</h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-body leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
