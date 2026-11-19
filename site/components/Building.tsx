import { fizz, fizzLesson } from "@/lib/data";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Building() {
  return (
    <section
      id="building"
      aria-labelledby="building-heading"
      className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10"
    >
      <SectionHeading
        id="building"
        label="building"
        action={{ text: "fizz.bot", href: fizz.url }}
      />

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        {/* ---- the product ---- */}
        <Reveal>
          <article className="flex h-full flex-col border border-line bg-panel">
            <p className="border-b border-line px-5 py-3 text-xs text-dim">
              <span className="text-violet">$</span> cat fizz.md
            </p>

            <div className="flex flex-1 flex-col px-5 py-6 sm:px-6">
              <h3 className="text-xl font-medium tracking-tight text-fg">
                {fizz.name}
              </h3>
              <p className="mt-1 text-[13px] text-lav">{fizz.tagline}</p>

              <p className="mt-4 text-[13px] leading-relaxed text-muted sm:text-sm">
                {fizz.pitch}
              </p>

              <dl className="mt-6 divide-y divide-line border-y border-line">
                {fizz.features.map((f) => (
                  <div
                    key={f.label}
                    className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-5"
                  >
                    <dt className="w-24 shrink-0 text-[13px] text-violet">
                      {f.label}
                    </dt>
                    <dd className="text-[13px] leading-relaxed text-muted">
                      {f.text}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-5 text-[11px] leading-relaxed text-dim">
                {fizz.stack}
              </p>

              <div className="mt-auto pt-7">
                <a
                  href={fizz.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 border border-line2 px-4 py-2.5 text-xs text-fg transition-colors hover:border-violet hover:text-violet sm:text-sm"
                >
                  Visit fizz.bot
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ---- the lesson ---- */}
        <Reveal delay={90}>
          <article className="flex h-full flex-col border border-line bg-panel">
            <p className="border-b border-line px-5 py-3 text-xs text-dim">
              <span className="text-violet">$</span> cat notes/{fizzLesson.file}
            </p>

            <div className="flex flex-1 flex-col px-5 py-6 sm:px-6">
              <h3 className="text-base font-medium leading-snug tracking-tight text-fg">
                {fizzLesson.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {fizzLesson.intro}
              </p>

              <p className="mt-6 flex gap-2.5 text-[13px] leading-relaxed text-muted">
                <span aria-hidden className="shrink-0 text-[#5ddc9a]">
                  ✓
                </span>
                <span>
                  <span className="text-fg">What worked: </span>
                  {fizzLesson.worked}
                </span>
              </p>

              <p className="mt-4 flex gap-2.5 text-[13px] leading-relaxed text-muted">
                <span aria-hidden className="shrink-0 text-[#ffb454]">
                  !
                </span>
                <span>
                  <span className="text-fg">What was missing: </span>
                  {fizzLesson.missing}
                </span>
              </p>

              <ol className="mt-5 space-y-3 border-l border-line pl-4">
                {fizzLesson.questions.map((q, i) => (
                  <li
                    key={q.label}
                    className="text-[13px] leading-relaxed text-muted"
                  >
                    <span className="text-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>{" "}
                    <span className="text-lav">{q.label}</span>{" "}
                    <span className="text-dim">—</span> {q.text}
                  </li>
                ))}
              </ol>

              <div className="mt-auto pt-7">
                <p className="border-t border-line pt-5 text-[13px] leading-relaxed text-fg">
                  <span aria-hidden className="text-violet">
                    →{" "}
                  </span>
                  {fizzLesson.takeaway}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
