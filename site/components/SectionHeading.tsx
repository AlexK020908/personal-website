import Link from "next/link";
import { ArrowUpRight } from "./icons";

export default function SectionHeading({
  id,
  label,
  action,
}: {
  id: string;
  label: string;
  action?: { text: string; href: string };
}) {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <h2
        id={`${id}-heading`}
        className="shrink-0 text-xl sm:text-2xl font-medium tracking-tight"
      >
        <span className="text-violet">#</span>
        <span className="text-fg">{label}</span>
      </h2>
      <span aria-hidden className="h-px flex-1 bg-line" />
      {action && (
        <Link
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel={action.href.startsWith("http") ? "noreferrer" : undefined}
          className="group hidden shrink-0 items-center gap-1.5 text-xs sm:text-sm text-muted transition-colors hover:text-violet sm:flex"
        >
          {action.text}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </div>
  );
}
