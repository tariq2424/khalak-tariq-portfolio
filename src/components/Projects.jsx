import { projects } from "../data/profile";
import ProjectMock from "./ProjectMock";
import SectionHeading from "./SectionHeading";
import { GitHubIcon, ExternalLinkIcon } from "./Icons";

function TechTag({ children }) {
  return <span className="tag-chip">{children}</span>;
}

function LinkButton({ href, icon, children, primary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-lg no-underline transition-colors ${
        primary
          ? "bg-ink text-white hover:bg-accent-dark"
          : "border border-border text-ink hover:border-accent/40 hover:text-accent-dark"
      }`}
    >
      {icon}
      {children}
    </a>
  );
}

function FeaturedProject({ project, index }) {
  return (
    <article className="grid lg:grid-cols-2 gap-0 rounded-xl2 border border-border bg-surface shadow-card overflow-hidden min-w-0">
      <div className="p-8 md:p-10 flex flex-col justify-center order-2 lg:order-1 min-w-0">
        <span className="eyebrow mb-3">Featured Project</span>
        <h3 className="text-2xl md:text-[1.7rem] font-semibold text-ink tracking-tight">{project.name}</h3>
        <p className="mt-4 text-body leading-relaxed">{project.summary}</p>

        <div className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <div>
            <p className="text-muted mb-1">Problem</p>
            <p className="text-body leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="text-muted mb-1">Solution</p>
            <p className="text-body leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <ul className="mt-5 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-body">
              <span className="text-signal mt-1.5 block w-1 h-1 rounded-full bg-signal flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <LinkButton href={project.live} icon={<ExternalLinkIcon />} primary>
            Live Demo
          </LinkButton>
          <LinkButton href={project.github} icon={<GitHubIcon />}>
            GitHub
          </LinkButton>
        </div>
      </div>

      <div className="order-1 lg:order-2 min-w-0">
        <ProjectMock name={project.name} liveUrl={project.live} image={project.image} index={index} />
      </div>
    </article>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="group flex flex-col rounded-xl2 border border-border bg-surface shadow-card hover:shadow-cardHover transition-shadow overflow-hidden">
      <ProjectMock name={project.name} liveUrl={project.live} image={project.image} index={index} compact />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-ink tracking-tight">{project.name}</h3>
        <p className="mt-2.5 text-sm text-body leading-relaxed flex-1">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 text-sm">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 font-medium text-accent-dark hover:text-accent no-underline"
          >
            Live Demo <ExternalLinkIcon />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 font-medium text-ink hover:text-accent-dark no-underline"
          >
            <GitHubIcon /> Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section-pad py-20 md:py-28">
      <div className="content-wrap">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects worth a closer look"
          description="A mix of full-stack builds and standalone UI work — chosen for what they actually demonstrate, not for how many there are."
        />

        {featured && <FeaturedProject project={featured} index={0} />}

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
