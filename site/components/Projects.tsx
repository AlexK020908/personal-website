import { courseProjects, projects, site, type Project } from "@/lib/data";
import { ArrowUpRight, GithubIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TerminalPreview from "./TerminalPreview";

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden border border-line bg-panel transition-colors duration-300 hover:border-line2">
      <TerminalPreview name={p.name} terminal={p.terminal} />

      <div className="flex min-w-0 flex-1 flex-col p-5">
        <p className="min-h-9 text-[11px] leading-relaxed text-dim">{p.stack}</p>

        {p.context && (
          <p className="mt-2 text-[11px] leading-relaxed text-lav">
            {p.context}
          </p>
        )}

        <h3 className="mt-2 text-lg font-medium tracking-tight text-fg transition-colors group-hover:text-violet">
          {p.name}
        </h3>

        <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-muted">
          {p.blurb}
        </p>

        {(p.live || p.repo) && (
          <div className="mt-6 flex flex-wrap gap-2.5">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-line2 px-3.5 py-2.5 text-xs text-fg transition-colors hover:border-violet hover:text-violet"
              >
                Live
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-line px-3.5 py-2.5 text-xs text-muted transition-colors hover:border-line2 hover:text-fg"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10"
    >
      <SectionHeading
        id="projects"
        label="projects"
        action={{ text: "View all", href: site.github }}
      />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90} className="min-w-0">
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mt-14 flex items-center gap-4 text-sm text-muted">
          <span className="shrink-0">
            <span className="text-violet">#</span>at-columbia
          </span>
          <span aria-hidden className="h-px flex-1 bg-line" />
        </h3>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courseProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90} className="min-w-0">
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
