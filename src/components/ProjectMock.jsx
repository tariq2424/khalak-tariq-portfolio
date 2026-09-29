import WinTitleBar from "./WinTitleBar";

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

export default function ProjectMock({
  name,
  liveUrl,
  image,
  index = 0,
  compact = false,
}) {
  const titleText = hostname(liveUrl) || `${slug(name)}.web`;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-t-xl2 border border-border bg-ink/90 ${
        compact ? "aspect-[16/11]" : "aspect-[16/10]"
      }`}
    >
      <WinTitleBar title={titleText} icon="globe" />

      {/* Actual project screenshot */}
      <div className="w-full h-full bg-white">
        {image ? (
          <img
            src={image}
            alt={`${name} project preview`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            No preview available
          </div>
        )}
      </div>
    </div>
  );
}