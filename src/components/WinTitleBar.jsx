function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5Z" />
    </svg>
  );
}

// Browser/editor style title bar with three window dots.
export default function WinTitleBar({ title, icon }) {
  return (
    <div className="flex items-center gap-3 px-3.5 h-9 bg-surface2 border-b border-line/15">
      <span className="flex items-center gap-1.5 flex-shrink-0" aria-hidden="true">
        <i className="block w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <i className="block w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <i className="block w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </span>
      <span className="flex items-center gap-1.5 min-w-0 text-muted">
        {icon === "globe" && <GlobeIcon className="flex-shrink-0" />}
        <span className="font-mono text-[11px] truncate">{title}</span>
      </span>
    </div>
  );
}
