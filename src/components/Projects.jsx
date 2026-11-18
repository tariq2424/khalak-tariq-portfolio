import { projects } from "../data/profile";
import ProjectMock from "./ProjectMock";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GitHubIcon, ExternalLinkIcon, CheckIcon } from "./Icons";

function TechTag({ children }) {
  return <span className="tag-chip">{children}</span>;
}

function Links({ project }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={project.live} target="_blank" rel="noreferrer noopener" className="btn-primary">
        <ExternalLinkIcon /> Live Demo
      </a>
      <a href={project.github} target="_blank" rel="noreferrer noopener" className="btn-ghost">
        <GitHubIcon /> GitHub
      </a>
    </div>
  );
}

function FeaturedProject({ project, flip }) {
  // Left column: screenshot + tech + links. Right column: story. Keeps both columns balanced.
  const imageCol = flip ? "lg:col-start-2" : "lg:col-start-1";
  const textCol = flip ? "lg:col-start-1" : "lg:col-start-2";
  return (
    <Reveal as="article" className="card overflow-hidden min-w-0">
      <div className="p-5 sm:p-7 lg:p-8 grid lg:grid-cols-2 gap-x-10 gap-y-5">
        <div className={`min-w-0 lg:row-start-1 ${imageCol}`}>
          <ProjectMock name={project.name} liveUrl={project.live} image={project.image} />
        </div>

        <div className={`min-w-0 lg:row-start-1 lg:row-span-2 ${textCol}`}>
          <span className="eyebrow">{project.badge}</span>
          <h3 className="mt-2 text-[1.35rem] sm:text-2xl font-semibold tracking-tight text-fg leading-snug">{project.name}</h3>
          <p className="mt-3 text-[15px] text-body leading-relaxed">{project.summary}</p>

          <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-surface2 border border-line/15 p-4">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1.5">Problem</p>
              <p className="text-body leading-relaxed">{project.problem}</p>
            </div>
            <div className="rounded-xl bg-surface2 border border-line/15 p-4">
              <p className="font-mono text-[11px] uppercase tracking-wider text-accenttext mb-1.5">Solution</p>
              <p className="text-body leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm text-body leading-relaxed">
                <CheckIcon className="text-ok flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`min-w-0 lg:row-start-2 ${imageCol} flex flex-col justify-between gap-5`}>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>
          <Links project={project} />
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <Reveal as="article" delay={delay} className="card flex flex-col overflow-hidden min-w-0 hover:border-accenttext/30 transition-colors">
      <div className="p-4 pb-0">
        <ProjectMock name={project.name} liveUrl={project.live} image={project.image} />
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <span className="eyebrow">{project.badge}</span>
        <h3 className="mt-2 text-lg font-semibold text-fg tracking-tight leading-snug">{project.name}</h3>
        <p className="mt-2.5 text-sm text-body leading-relaxed">{project.summary}</p>

        {project.problem && (
          <p className="mt-3 text-sm text-body leading-relaxed">
            <span className="text-fg font-medium">Solves: </span>
            {project.solution}
          </p>
        )}

        <ul className="mt-3 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2 text-[13px] text-body leading-relaxed">
              <CheckIcon className="text-ok flex-shrink-0 mt-0.5" width="14" height="14" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>

        <div className="mt-auto pt-5 flex flex-wrap gap-3">
          <a href={project.live} target="_blank" rel="noreferrer noopener" className="btn-primary !min-h-[42px]">
            <ExternalLinkIcon /> Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer noopener" className="btn-ghost !min-h-[42px]">
            <GitHubIcon /> Code
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function CompactProject({ project }) {
  return (
    <Reveal as="article" className="card overflow-hidden min-w-0 md:col-span-2 lg:col-span-3 hover:border-accenttext/30 transition-colors">
      <div className="p-4 sm:p-5 grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] gap-5 md:gap-8 items-center">
        <ProjectMock name={project.name} liveUrl={project.live} image={project.image} />
        <div className="min-w-0">
          <span className="eyebrow">{project.badge}</span>
          <h3 className="mt-2 text-lg font-semibold text-fg tracking-tight leading-snug">{project.name}</h3>
          <p className="mt-2.5 text-sm text-body leading-relaxed">{project.summary}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2 text-[13px] text-body">
                <CheckIcon className="text-ok flex-shrink-0 mt-0.5" width="14" height="14" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={project.live} target="_blank" rel="noreferrer noopener" className="btn-primary !min-h-[42px]">
              <ExternalLinkIcon /> Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noreferrer noopener" className="btn-ghost !min-h-[42px]">
              <GitHubIcon /> Code
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured && p.problem);
  const compactOnes = projects.filter((p) => !p.featured && !p.problem);

  return (
    <section id="work" className="section-pad section-gap">
      <div className="content-wrap">
        <SectionHeading
          eyebrow="Selected Work"
          title="Full-stack projects, live and deployed"
          description="Each project solves a real problem, ships with a live demo, and links to its source code."
        />

        <div className="space-y-5 md:space-y-6">
          {featured.map((p, i) => (
            <FeaturedProject key={p.slug} project={p} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-5 md:mt-6 grid md:grid-cols-2 gap-5 md:gap-6">
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 80} />
          ))}
          {compactOnes.map((p) => (
            <CompactProject key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
