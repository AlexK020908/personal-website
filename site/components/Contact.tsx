import { site } from "@/lib/data";
import {
  ArrowUpRight,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
} from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const channels = [
  { label: "email", value: site.email, href: `mailto:${site.email}`, Icon: MailIcon },
  { label: "github", value: "AlexK020908", href: site.github, Icon: GithubIcon },
  { label: "linkedin", value: "alex-k", href: site.linkedin, Icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10"
    >
      <SectionHeading id="contact" label="contact-me" />

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <Reveal>
          <div className="h-full border border-line bg-panel p-6 sm:p-7">
            <p className="text-sm leading-relaxed text-muted">
              I&apos;m open to summer 2027 internships, research
              collaborations, and anything at the intersection of ML and
              low-latency systems — and if you&apos;re building in crypto,
              I&apos;d love to compare notes. The fastest way to reach me is
              email — I reply to everything.
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">
              Heads up: my email is under{" "}
              <span className="text-muted">{site.legalName}</span> — my legal
              name. Same person as Alex.
            </p>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-2.5 border border-line2 px-5 py-2.5 text-sm text-fg transition-colors hover:border-violet hover:text-violet"
            >
              Download résumé
              <DownloadIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="h-full border border-line bg-panel">
            <p className="border-b border-line px-5 py-3 text-xs text-dim">
              <span className="text-violet">$</span> contact --list
            </p>
            <ul className="divide-y divide-line">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label} className="min-w-0">
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-panel2"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-violet" />
                    <span className="w-16 shrink-0 text-xs text-dim sm:w-20">
                      {label}
                    </span>
                    <span className="min-w-0 flex-1 break-words text-[13px] text-fg transition-colors group-hover:text-violet">
                      {value}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 px-5 py-4">
                <PinIcon className="h-4 w-4 shrink-0 text-muted" />
                <span className="w-16 shrink-0 text-xs text-dim sm:w-20">
                  based in
                </span>
                <span className="min-w-0 flex-1 text-[13px] text-muted">
                  New York, NY{" "}
                  <span className="text-dim">(from Vancouver, BC)</span>
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
