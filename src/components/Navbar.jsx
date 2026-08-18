import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { MenuIcon, CloseIcon } from "./Icons";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#design", label: "Design" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow ${
        scrolled ? "bg-canvas/90 backdrop-blur border-b border-border shadow-sm" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="content-wrap section-pad flex items-center justify-between h-16">
        <a href="#top" className="font-display font-semibold text-ink text-[15px] tracking-tight">
          Khalak<span className="text-accent">.</span>Tariq
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-body hover:text-ink transition-colors no-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-ink hover:bg-accent-dark transition-colors px-4 py-2 rounded-lg no-underline"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-canvas border-t border-border">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] text-body hover:text-ink no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-ink px-4 py-2.5 rounded-lg no-underline"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
