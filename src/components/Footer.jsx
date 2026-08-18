import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="section-pad py-8 border-t border-border">
      <div className="content-wrap flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind CSS.</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer noopener" className="hover:text-ink no-underline">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-ink no-underline">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink no-underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
