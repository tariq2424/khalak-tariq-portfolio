import { useState } from "react";
import WinTitleBar from "./WinTitleBar";
import Lightbox from "./Lightbox";

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

// Browser-window frame around the project's homepage screenshot. Click to view full size.
export default function ProjectMock({ name, liveUrl, image }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-line/[0.15] bg-surface shadow-card">
      <WinTitleBar title={hostname(liveUrl) || name} icon="globe" />
      {image ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`View ${name} preview in full size`}
          className="group relative block w-full aspect-[16/9] bg-surface2 overflow-hidden cursor-zoom-in"
        >
          <img
            src={image}
            alt={`${name} homepage preview`}
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute right-2.5 bottom-2.5 inline-flex items-center gap-1.5 rounded-lg bg-canvas/85 backdrop-blur px-2.5 py-1.5 text-[11px] font-medium text-fg border border-line/[0.15]">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
            View full
          </span>
        </button>
      ) : (
        <div className="w-full aspect-[16/9] flex items-center justify-center text-muted text-sm">No preview available</div>
      )}
      {open && <Lightbox image={image} name={name} liveUrl={liveUrl} onClose={() => setOpen(false)} />}
    </div>
  );
}
