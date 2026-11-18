import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from "./Icons";

const links = [
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(getTheme());
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY < 300) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "dark" ? "#090E1A" : "#F8FAFD");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage can be unavailable (private mode) — theme still switches for this visit */
    }
    setTheme(next);
  };

  const ThemeBtn = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-line/15 text-body hover:text-fg hover:border-accenttext/40 transition-colors"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled || open
          ? "bg-canvas/85 backdrop-blur-lg border-b border-line/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="content-wrap section-pad flex items-center justify-between h-16" aria-label="Primary">
        <a href="#top" className="font-display font-semibold text-fg text-[16px] tracking-tight no-underline">
          Khalak<span className="gradient-text">.</span>Tariq
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`px-3.5 py-2 rounded-lg text-sm no-underline transition-colors ${
                  active === l.id ? "text-fg bg-fg/5" : "text-body hover:text-fg"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {ThemeBtn}
          <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer" className="btn-primary !min-h-[40px] !px-4">
            Resume
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {ThemeBtn}
          <button
            type="button"
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-line/15 text-fg"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-canvas border-t border-line/15 h-[calc(100dvh-4rem)] overflow-y-auto">
          <ul className="flex flex-col px-5 py-5 gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center min-h-[52px] px-3 rounded-xl text-lg font-display no-underline ${
                    active === l.id ? "text-fg bg-fg/5" : "text-body"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                View Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
