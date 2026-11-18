export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center";
  return (
    <div className={`mb-8 md:mb-10 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-[1.75rem] sm:text-4xl font-semibold tracking-tight text-fg leading-tight">{title}</h2>
      {description && <p className="mt-4 text-[15px] sm:text-base text-body leading-relaxed">{description}</p>}
    </div>
  );
}
