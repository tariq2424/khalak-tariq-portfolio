import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="section-pad py-20 md:py-28">
      <div className="content-wrap">
        <div className="rounded-xl2 border border-border bg-ink px-8 py-14 md:px-16 md:py-16 text-center relative overflow-hidden">
          <span
            aria-hidden="true"
            className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
            style={{ background: "#2554C7" }}
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
            style={{ background: "#0EA5A6" }}
          />

          <p className="eyebrow mb-4 text-accent">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-xl mx-auto">
            Have an opportunity or project in mind? Let's connect.
          </h2>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-white text-ink text-sm font-medium px-5 py-3 rounded-lg hover:bg-accent-light transition-colors no-underline"
            >
              <MailIcon /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-5 py-3 rounded-lg hover:border-white/40 transition-colors no-underline"
            >
              <PhoneIcon /> {profile.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-white/60 hover:text-white transition-colors"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-white/60 hover:text-white transition-colors"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
