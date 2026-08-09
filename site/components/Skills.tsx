import { skillGroups, skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10"
    >
      <SectionHeading id="skills" label="skills" />

      <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 35}>
            <div className="group flex aspect-square flex-col items-center justify-center gap-1.5 border border-line bg-panel transition-colors duration-300 hover:border-line2">
              <span
                className="text-lg font-semibold tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-xl"
                style={{ color: s.color }}
              >
                {s.token}
              </span>
              <span className="px-1 text-center text-[10px] leading-tight text-muted sm:text-[11px]">
                {s.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 border border-line bg-panel">
          <p className="border-b border-line px-5 py-3 text-xs text-dim">
            <span className="text-violet">$</span> cat skills.txt
          </p>
          <dl className="divide-y divide-line">
            {skillGroups.map((g) => (
              <div
                key={g.label}
                className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:gap-6"
              >
                <dt className="w-40 shrink-0 text-[13px] text-lav">
                  {g.label}
                </dt>
                <dd className="text-[13px] leading-relaxed text-muted">
                  {g.items}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
