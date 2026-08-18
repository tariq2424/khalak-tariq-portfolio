export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center";
  return (
    <div className={`mb-12 md:mb-14 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">{title}</h2>
      {description && <p className="mt-4 text-base text-body leading-relaxed">{description}</p>}
    </div>
  );
}
