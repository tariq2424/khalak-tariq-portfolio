// import { experience } from "../data/profile";
// import SectionHeading from "./SectionHeading";

// export default function Experience() {
//   return (
//     <section id="experience" className="section-pad py-20 md:py-28 bg-surfacealt/60">
//       <div className="content-wrap">
//         <SectionHeading eyebrow="Experience" title="Where I've worked" />

//         <div className="grid md:grid-cols-2 gap-6">
//           {experience.map((job) => (
//             <article
//               key={job.company}
//               className="rounded-xl2 border border-border bg-surface p-7 shadow-card"
//             >
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <h3 className="font-semibold text-ink text-lg tracking-tight">{job.role}</h3>
//                   <p className="text-accent-dark text-sm font-medium mt-0.5">{job.company}</p>
//                 </div>
//                 <span className="font-mono text-xs text-muted whitespace-nowrap pt-1">{job.dates}</span>
//               </div>

//               <ul className="mt-4 space-y-2">
//                 {job.points.map((p) => (
//                   <li key={p} className="flex gap-2.5 text-sm text-body leading-relaxed">
//                     <span className="mt-2 w-1 h-1 rounded-full bg-signal flex-shrink-0" />
//                     {p}
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-5 flex flex-wrap gap-1.5">
//                 {job.tech.map((t) => (
//                   <span key={t} className="tag-chip">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { experience } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad py-20 md:py-28 bg-surfacealt/60"
    >
      <div className="content-wrap">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="grid lg:grid-cols-2 gap-6">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="rounded-xl2 border border-border bg-surface p-7 shadow-card min-w-0"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="font-semibold text-ink text-lg tracking-tight leading-snug">
                    {job.role}
                  </h3>

                  <p className="text-accent-dark text-sm font-medium mt-1">
                    {job.company}
                  </p>
                </div>

                <span className="font-mono text-xs text-muted sm:text-right sm:max-w-[180px] leading-relaxed">
                  {job.dates}
                </span>
              </div>

              <ul className="mt-5 space-y-2">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2.5 text-sm text-body leading-relaxed"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-signal flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <span key={t} className="tag-chip">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}