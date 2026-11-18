import { experience } from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-pad section-gap bg-surface/50 border-y border-line/15">
      <div className="content-wrap">
        <SectionHeading
          eyebrow="Experience"
          title="Internships in MERN, Django and full-stack"
          description="Hands-on training and team work across the MERN stack and Python Django."
        />

        <ol className="relative border-l border-line/15 ml-2 sm:ml-3 space-y-6">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${job.role}`} delay={i * 70} className="relative pl-6 sm:pl-9">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-7 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-canvas"
              />
              <article className="card p-5 sm:p-6 min-w-0 grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] gap-4 lg:gap-8">
                <div className="min-w-0">
                  <h3 className="font-semibold text-fg text-lg tracking-tight leading-snug">{job.role}</h3>
                  <p className="text-accenttext text-sm font-medium mt-1">{job.company}</p>
                  <p className="font-mono text-xs text-muted mt-1.5">{job.dates}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <span key={t} className="tag-chip">{t}</span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2.5 min-w-0">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-body leading-relaxed">
                      <span aria-hidden="true" className="mt-[9px] w-1.5 h-1.5 rounded-full bg-gradient-to-br from-accenttext to-cyan2 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
