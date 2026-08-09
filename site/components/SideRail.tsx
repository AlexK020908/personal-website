import { site } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const socials = [
  { href: site.github, label: "GitHub", Icon: GithubIcon },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon },
];

export default function SideRail() {
  return (
    <aside
      aria-label="Social links"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-screen w-14 flex-col items-center justify-center gap-6 lg:flex"
    >
      <span aria-hidden className="w-px flex-1 bg-line" />
      <ul className="pointer-events-auto flex flex-col items-center gap-5">
        {socials.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="block text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-violet"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        ))}
      </ul>
      <span aria-hidden className="w-px flex-1 bg-line" />
    </aside>
  );
}
