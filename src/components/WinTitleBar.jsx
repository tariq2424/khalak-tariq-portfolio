import { WinMinimizeIcon, WinMaximizeIcon, WinCloseIcon } from "./Icons";

function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5Z" />
    </svg>
  );
}

export default function WinTitleBar({ title, dark = true, icon }) {
  const iconColor = dark ? "text-white/50" : "text-ink/50";
  const hoverBg = dark ? "hover:bg-white/10" : "hover:bg-ink/5";
  const hoverClose = dark ? "hover:bg-[#E81123] hover:text-white" : "hover:bg-[#E81123] hover:text-white";

  return (
    <div className={`flex items-center justify-between pl-3 pr-0 h-9 ${dark ? "bg-[#141B2E]" : "bg-surfacealt"} border-b ${dark ? "border-white/10" : "border-border"}`}>
      <span className={`flex items-center gap-1.5 min-w-0 ${dark ? "text-white/45" : "text-muted"}`}>
        {icon === "globe" && <GlobeIcon className="flex-shrink-0" />}
        <span className="font-mono text-[11px] truncate">{title}</span>
      </span>
      <div className="flex items-center h-full flex-shrink-0">
        <span className={`inline-flex items-center justify-center w-10 h-full ${iconColor} ${hoverBg} transition-colors`}>
          <WinMinimizeIcon />
        </span>
        <span className={`inline-flex items-center justify-center w-10 h-full ${iconColor} ${hoverBg} transition-colors`}>
          <WinMaximizeIcon />
        </span>
        <span className={`inline-flex items-center justify-center w-10 h-full ${iconColor} ${hoverClose} transition-colors`}>
          <WinCloseIcon />
        </span>
      </div>
    </div>
  );
}
