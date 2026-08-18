import { designWork } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { DesignIcon } from "./Icons";

const palettes = [
  ["#7C3AED", "#B39CF0"],
  ["#DB6B2E", "#F0B182"],
  ["#0B1220", "#33435E"],
];

export default function DesignShowcase() {
  return (
    <section id="design" className="section-pad py-20 md:py-28 bg-surfacealt/60">
      <div className="content-wrap">
        <SectionHeading
          eyebrow="UI/UX Design"
          title="Design work, in Figma"
          description="Layout, typography, and visual hierarchy — the design side of the same person who builds the front end."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designWork.map((d, i) => {
            const [c1, c2] = palettes[i % palettes.length];
            return (
              <a
                key={d.name}
                href={d.figma}
                target="_blank"
                rel="noreferrer noopener"
                className="group rounded-xl2 border border-border bg-surface overflow-hidden shadow-card hover:shadow-cardHover transition-shadow no-underline"
              >
                <div
                  className="aspect-[4/3] flex items-center justify-center relative"
                  style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                >
                  <DesignIcon className="text-white/85 w-8 h-8" />
                  <span className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-white/50" />
                  <span className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-white/50" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-ink text-[15px] tracking-tight group-hover:text-accent-dark transition-colors">
                    {d.name}
                  </h3>
                  <p className="mt-2 text-sm text-body leading-relaxed">{d.description}</p>
                  <span className="mt-3 inline-flex text-xs font-mono text-accent-dark">View in Figma →</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
