import { profile, stats, heroStack } from "../data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowDownIcon } from "./Icons";
import WinTitleBar from "./WinTitleBar";

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-10 sm:pt-32 md:pt-36 md:pb-14 section-pad overflow-hidden">
      {/* ambient glow + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-24 w-[22rem] h-[22rem] rounded-full bg-accent/30 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-24 -right-24 w-[20rem] h-[20rem] rounded-full bg-cyan2/20 blur-[110px]" />

      <div className="content-wrap relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center min-w-0">
        <div className="animate-rise min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-line/15 bg-surface/70 px-3.5 py-1.5 text-xs text-body">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-ok animate-pulseDot" />
              <span className="relative w-2 h-2 rounded-full bg-ok" />
            </span>
            Open to full-stack opportunities
          </span>

          <h1 className="mt-6 text-[2.35rem] leading-[1.08] sm:text-5xl md:text-[3.6rem] md:leading-[1.05] font-semibold tracking-tight">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
            <span className="block mt-1 text-fg">Full Stack Web Developer</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-body max-w-[52ch] leading-relaxed">{profile.pitch}</p>

          <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <a href="#work" className="btn-primary">View My Projects</a>
            <a href={profile.resumeFile} download="Khalak_Tariq_Full_Stack_Resume.pdf" className="btn-ghost">
              Download Resume
              <ArrowDownIcon className="opacity-70" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-muted">
            <div className="flex items-center gap-1">
              <a href={profile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub profile" className="inline-flex items-center justify-center w-11 h-11 rounded-xl hover:text-fg hover:bg-fg/5 transition-colors">
                <GitHubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile" className="inline-flex items-center justify-center w-11 h-11 rounded-xl hover:text-fg hover:bg-fg/5 transition-colors">
                <LinkedInIcon />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Send email" className="inline-flex items-center justify-center w-11 h-11 rounded-xl hover:text-fg hover:bg-fg/5 transition-colors">
                <MailIcon />
              </a>
            </div>
            <span className="hidden sm:block w-px h-4 bg-line/15" />
            <span className="text-sm">{profile.location}</span>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line/15 bg-surface/70 px-3.5 py-3.5 sm:px-4">
                <p className="font-display text-2xl sm:text-3xl font-semibold text-fg">{s.value}</p>
                <p className="mt-1 text-[11px] sm:text-xs leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* signature code card */}
        <div className="relative animate-rise [animation-delay:140ms] min-w-0">
          <div className="relative w-full min-w-0 rounded-xl2 border border-line/15 bg-surface shadow-card overflow-hidden">
            <WinTitleBar title="developer.js" />
            <pre className="font-mono text-[12px] sm:text-[13px] leading-[1.85] p-5 sm:p-6 overflow-x-auto w-full min-w-0 text-body">
<code>
<span className="text-accenttext">const</span> developer = {"{"}{"\n"}
{"  "}name: <span className="text-ok">"{profile.name}"</span>,{"\n"}
{"  "}role: <span className="text-ok">"Full Stack Web Developer"</span>,{"\n"}
{"  "}stack: [{heroStack.map((t, i) => (<span key={t}><span className="text-ok">"{t}"</span>{i < heroStack.length - 1 ? ", " : ""}{i === 2 ? "\n          " : ""}</span>))}],{"\n"}
{"  "}deployed: [<span className="text-ok">"Render"</span>],{"\n"}
{"  "}status: <span className="text-ok">"open to opportunities"</span>,{"\n"}
{"}"};
</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
