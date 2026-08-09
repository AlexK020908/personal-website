import { education, site } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10"
    >
      <SectionHeading id="about" label="about-me" />

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <Reveal>
          <div className="h-full border border-line bg-panel">
            <p className="border-b border-line px-5 py-3 text-xs text-dim">
              <span className="text-violet">$</span> cat about.md
            </p>
            <div className="space-y-4 px-5 py-6 text-[13px] leading-relaxed text-muted sm:px-6 sm:text-sm">
              <p>
                Hey — I&apos;m Alex.{" "}
                <span className="text-fg">Zixuan Kang</span> is my legal name,
                so that&apos;s what shows up on my email and paperwork. I just
                finished my CS degree at UBC and start my Master&apos;s at
                Columbia this September. Most of what I build lands in{" "}
                <span className="text-fg">fintech, crypto and AI</span> —
                systems where being fast and being correct are the same
                requirement.
              </p>
              <p>
                So far that&apos;s meant co-founding a crypto trading company,
                data science at Siemens, systems work at LMI, and LLM reasoning
                research. The receipts are{" "}
                <a href="#experience" className="sweep text-violet">
                  up in experience
                </a>
                .
              </p>
              <p>
                Right now I&apos;m building{" "}
                <a
                  href={site.buildingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="sweep text-violet"
                >
                  Fizz.bot
                </a>{" "}
                — all of crypto on your fingertips. Spot, perps, memecoins and
                prediction markets in one place, with a social layer that puts
                real skin in the game. The web app is live today; we&apos;re
                pivoting to mobile next.
              </p>
              <p>
                I keep coming back because I genuinely love this — I trade
                crypto myself and can sit with it for hours without noticing.
                Years of that add up to real domain knowledge and a network of
                people in the space, and neither is something you can cram for.
              </p>
              <p className="text-muted">
                When I&apos;m not shipping, I&apos;m in the gym or on a
                basketball or tennis court. Staying fit comes above all else.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="h-full border border-line bg-panel">
            <p className="border-b border-line px-5 py-3 text-xs text-dim">
              <span className="text-violet">$</span> cat education.txt
            </p>
            <ul className="divide-y divide-line">
              {education.map((e) => (
                <li key={e.school} className="px-5 py-5">
                  <p className="text-sm font-medium text-fg">{e.school}</p>
                  <p className="mt-1 text-[13px] text-lav">{e.degree}</p>
                  <p className="mt-2 text-xs text-muted">
                    {e.where} <span className="text-dim">·</span> {e.when}
                  </p>
                  {e.note && (
                    <p className="mt-1.5 text-xs text-dim">{e.note}</p>
                  )}
                </li>
              ))}
            </ul>

            <div className="border-t border-line px-5 py-5">
              <p className="text-xs text-dim">relevant coursework</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                Advanced Algorithm Design · Advanced Machine Learning · Parallel
                Computation · Computer Hardware &amp; Operating Systems ·
                Advanced Relational Databases · Software Engineering
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
