import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, ArrowDownIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-pad section-gap">
      <Reveal className="content-wrap">
        <div className="rounded-xl2 border border-line/15 bg-surface px-5 py-10 sm:px-10 md:px-16 md:py-12 text-center relative overflow-hidden shadow-card">
          <span aria-hidden="true" className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-accent/30 blur-[90px]" />
          <span aria-hidden="true" className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-cyan2/20 blur-[90px]" />

          <div className="relative">
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="text-[1.7rem] sm:text-4xl font-semibold tracking-tight max-w-xl mx-auto leading-tight">
              Looking for a <span className="gradient-text">full-stack developer</span>? Let's talk.
            </h2>
            <p className="mt-4 text-[15px] text-body max-w-md mx-auto">
              Open to full-stack roles and project work. The fastest way to reach me is email or phone.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary break-all">
                <MailIcon /> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="btn-ghost">
                <PhoneIcon /> {profile.phone}
              </a>
              <a href={profile.resumeFile} download="Khalak_Tariq_Full_Stack_Resume.pdf" className="btn-ghost">
                Resume <ArrowDownIcon className="opacity-70" />
              </a>
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 text-muted">
              <a href={profile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub profile" className="inline-flex items-center justify-center w-11 h-11 rounded-xl hover:text-fg hover:bg-fg/5 transition-colors">
                <GitHubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile" className="inline-flex items-center justify-center w-11 h-11 rounded-xl hover:text-fg hover:bg-fg/5 transition-colors">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
