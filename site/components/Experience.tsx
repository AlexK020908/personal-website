import { experience, research, type Role } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function RoleCard({ role }: { role: Role }) {
  return (
    <article className="group relative border border-line bg-panel p-5 transition-colors duration-300 hover:border-line2 sm:p-6">
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-px bg-violet/0 transition-colors duration-300 group-hover:bg-violet"
      />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="text-base font-medium tracking-tight text-fg">
          {role.title}{" "}
          <span className="text-violet">@ {role.company}</span>
        </h3>
        <p className="shrink-0 text-xs text-dim">{role.when}</p>
      </div>

      <p className="mt-1.5 text-xs text-muted">
        {role.where} <span className="text-dim">·</span> {role.stack}
      </p>

      {role.award && (
        <p className="mt-4 flex w-fit items-start gap-2 border border-violet/40 bg-violet/[0.07] px-3 py-2 text-xs leading-relaxed text-lav">
          <span aria-hidden className="shrink-0 text-violet">
            ★
          </span>
          {role.award}
        </p>
      )}

      <ul className="mt-4 space-y-2.5">
        {role.points.map((pt) => (
          <li
            key={pt}
            className="flex gap-2.5 text-[13px] leading-relaxed text-muted"
          >
            <span aria-hidden className="mt-[3px] shrink-0 text-violet">
              ▸
            </span>
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10"
    >
      <SectionHeading id="experience" label="experience" />

      <div className="mt-10 grid gap-6">
        {experience.map((role, i) => (
          <Reveal key={role.company} delay={i * 80}>
            <RoleCard role={role} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mt-14 flex items-center gap-4 text-sm text-muted">
          <span className="shrink-0">
            <span className="text-violet">#</span>research
          </span>
          <span aria-hidden className="h-px flex-1 bg-line" />
        </h3>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {research.map((role, i) => (
          <Reveal key={role.company} delay={i * 80}>
            <RoleCard role={role} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
