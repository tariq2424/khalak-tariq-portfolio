// A stylized "browser window" preview used in place of real screenshots.
// No fake product screenshots are fabricated — this is an intentional
// abstract representation keyed to each project's initials + stack.

import WinTitleBar from "./WinTitleBar";

const palettes = [
  ["#2554C7", "#5B7FE0"],
  ["#0EA5A6", "#38C6C7"],
  ["#7C3AED", "#A385F0"],
  ["#DB6B2E", "#EA9A5F"],
  ["#0B1220", "#33435E"],
];

function initials(name) {
  return name
    .split(/[\s&—-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function slug(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .split("-")
    .slice(0, 3)
    .join("-");
}

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export default function ProjectMock({ name, liveUrl, index = 0, compact = false }) {
  const [c1, c2] = palettes[index % palettes.length];
  const gid = `pg-${index}`;
  const titleText = hostname(liveUrl) || `${slug(name)}.web`;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-t-xl2 border border-border bg-ink/90 ${
        compact ? "aspect-[16/11]" : "aspect-[16/10]"
      }`}
    >
      <WinTitleBar title={titleText} icon="globe" />

      {/* canvas */}
      <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill={`url(#${gid})`} />
        <g opacity="0.14" stroke="#FFFFFF" strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="220" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 44} x2="400" y2={i * 44} />
          ))}
        </g>
        <text
          x="200"
          y="122"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="700"
          fontSize="72"
          fill="#FFFFFF"
          opacity="0.92"
        >
          {initials(name)}
        </text>
      </svg>
    </div>
  );
}
