import Image from "next/image";
import { site } from "@/lib/data";
import { ArrowDown, DownloadIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36 lg:px-10"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        {/* ---- copy ---- */}
        <div>
          <div className="mb-5 space-y-1 text-xs text-dim">
            <p className="tracking-widest">
              <span className="text-violet">$</span> whoami
            </p>
            <p>
              <span className="text-violet">→</span> alex kang{" "}
              <span className="text-dim">·</span> governments call me{" "}
              <span className="text-muted">
                &quot;{site.legalName.split(" ")[0].toLowerCase()}&quot;
              </span>
            </p>
          </div>

          <h1
            id="hero-heading"
            className="text-[clamp(1.9rem,5.2vw,3.1rem)] font-medium leading-[1.22] tracking-tight"
          >
            Hi, I&apos;m Alex — a{" "}
            <span className="text-violet">software engineer</span>
            <br className="hidden sm:block" /> and{" "}
            <span className="text-lav">ML researcher</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            MS CS student at Columbia on the machine learning track, CS grad
            from UBC. I build systems that move money, models and
            infrastructure — low-latency Rust trading engines, transformer
            fine-tuning, data pipelines over 50M+ records, and agents that ship
            real work.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 border border-line2 px-5 py-2.5 text-sm text-fg transition-colors hover:border-violet hover:text-violet"
            >
              Scroll Down
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 border border-line px-5 py-2.5 text-sm text-muted transition-colors hover:border-line2 hover:text-fg"
            >
              Résumé
              <DownloadIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* ---- portrait + decor ---- */}
        <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
          {/* decorative outlined squares */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 left-0 hidden gap-2 lg:flex"
          >
            <div className="h-12 w-12 border border-line2" />
            <div className="h-12 w-12 border border-violet/40" />
          </div>
          <div
            aria-hidden
            className="dotgrid pointer-events-none absolute -bottom-6 -right-2 hidden h-20 w-24 opacity-70 sm:block"
          />

          <div className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-line bg-panel">
              <Image
                src="/profile.png"
                alt="Alex Kang"
                fill
                priority
                sizes="(max-width: 1024px) 340px, 420px"
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-violet/10 mix-blend-overlay"
              />
            </div>

            {/* corner ticks */}
            <span
              aria-hidden
              className="absolute -left-px -top-px h-3 w-3 border-l border-t border-violet"
            />
            <span
              aria-hidden
              className="absolute -right-px -top-px h-3 w-3 border-r border-t border-violet"
            />
            <span
              aria-hidden
              className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-violet"
            />
            <span
              aria-hidden
              className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-violet"
            />
          </div>

          {/* availability badge */}
          <a
            href="#contact"
            className="group relative z-10 mx-auto -mt-5 flex w-fit items-center gap-2.5 border border-line2 bg-panel px-4 py-2.5 text-xs text-muted transition-colors hover:border-violet sm:text-sm"
          >
            <span className="inline-block h-2.5 w-2.5 shrink-0 bg-pink" />
            Open to
            <span className="text-fg transition-colors group-hover:text-violet">
              summer 2027 internships
            </span>
            <span className="cursor-blink text-violet">_</span>
          </a>
        </div>
      </div>
    </section>
  );
}
