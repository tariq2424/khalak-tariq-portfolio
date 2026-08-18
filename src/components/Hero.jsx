import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowDownIcon } from "./Icons";
import WinTitleBar from "./WinTitleBar";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 section-pad overflow-hidden">
      {/* faint corner frame marks — ties dev + design identity together */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block content-wrap mx-auto">
        <div className="relative h-full max-w-content mx-auto">
          <span className="absolute -left-2 top-24 w-6 h-6 border-l-2 border-t-2 border-accent/25 rounded-tl-sm" />
          <span className="absolute -right-2 bottom-10 w-6 h-6 border-r-2 border-b-2 border-signal/30 rounded-br-sm" />
        </div>
      </div>

      <div className="content-wrap grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-center min-w-0">
        {/* Left: identity */}
        <div className="animate-rise min-w-0">
          <p className="eyebrow mb-5 break-words">Full Stack Web Development + UI/UX Design</p>
          <h1 className="text-[2.5rem] leading-[1.08] sm:text-5xl md:text-[3.4rem] md:leading-[1.06] font-semibold tracking-tight text-ink">
            Building full-stack products
            <br />
            and the interfaces on top.
          </h1>
          <p className="mt-6 text-lg text-body max-w-[46ch] leading-relaxed">{profile.pitch}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-ink text-white text-sm font-medium px-5 py-3 rounded-lg hover:bg-accent-dark transition-colors no-underline"
            >
              View My Work
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 border border-border bg-surface text-ink text-sm font-medium px-5 py-3 rounded-lg hover:border-accent/40 hover:text-accent-dark transition-colors no-underline"
            >
              Download Resume
              <ArrowDownIcon className="opacity-60" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="hover:text-ink transition-colors"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="hover:text-ink transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="hover:text-ink transition-colors"
            >
              <MailIcon />
            </a>
            <span className="w-px h-4 bg-border" />
            <span className="text-sm">{profile.location}</span>
          </div>
        </div>

        {/* Right: signature editor panel */}
        <div className="relative animate-rise [animation-delay:120ms] min-w-0">
          <div className="relative w-full min-w-0 rounded-xl2 border border-border bg-ink shadow-cardHover overflow-hidden">
            <WinTitleBar title="developer.js" />
            <pre className="font-mono text-[13px] leading-[1.85] p-6 overflow-x-auto text-white/80 w-full min-w-0">
<code>{`const developer = {
  name: "Khalak Tariq",
  role: "Full Stack + UI/UX",
  stack: ["React", "Node.js", "Express",
          "MongoDB", "SQL", "Python"],
  design: ["Figma", "Typography",
           "Visual Hierarchy"],
  status: "open to opportunities",
};`}</code>
            </pre>
          </div>
          {/* design-frame corner accent behind the panel */}
          <div
            aria-hidden="true"
            className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 border-2 border-signal/40 rounded-xl2 hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}
