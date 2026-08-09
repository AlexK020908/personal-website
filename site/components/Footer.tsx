import { site } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const socials = [
  { href: site.github, label: "GitHub", Icon: GithubIcon },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div>
          <p className="flex items-center gap-2 text-sm">
            <span className="text-violet">{"</>"}</span>
            <span className="text-fg">{site.name}</span>
            <span className="text-dim">/ {site.legalName}</span>
          </p>
        </div>

        <ul className="-m-2 flex items-center gap-1">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="block p-2.5 text-muted transition-colors hover:text-violet"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
