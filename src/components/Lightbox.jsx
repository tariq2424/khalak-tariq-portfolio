import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, ExternalLinkIcon } from "./Icons";

// Full-screen image viewer: Esc / backdrop click / close button to dismiss.
export default function Lightbox({ image, name, liveUrl, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prevFocus = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${name} — full preview`}
      className="fixed inset-0 z-[90] flex flex-col bg-canvas/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 h-14 flex-shrink-0 border-b border-line/[0.15]" onClick={(e) => e.stopPropagation()}>
        <p className="font-display text-sm sm:text-base text-fg truncate">{name}</p>
        <div className="flex items-center gap-2 flex-shrink-0">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer noopener" className="btn-primary !min-h-[40px] !px-3.5 hidden sm:inline-flex">
              <ExternalLinkIcon /> Live Demo
            </a>
          )}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-line/[0.15] text-fg hover:bg-fg/5"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-auto p-3 sm:p-6 flex items-start sm:items-center justify-center">
        <img
          src={image}
          alt={`${name} homepage, full size`}
          className="max-w-full w-auto h-auto sm:max-h-full rounded-lg border border-line/[0.15] shadow-card"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <p className="text-center text-xs text-muted pb-3 flex-shrink-0">Tap outside or press Esc to close</p>
    </div>,
    document.body
  );
}
