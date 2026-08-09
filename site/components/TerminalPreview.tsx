import type { Project } from "@/lib/data";

function lineColor(line: string) {
  if (line.startsWith("✓")) return "text-[#5ddc9a]";
  if (line.startsWith("!")) return "text-[#ffb454]";
  return "text-muted";
}

export default function TerminalPreview({
  name,
  terminal,
}: {
  name: string;
  terminal: Project["terminal"];
}) {
  return (
    <div className="min-w-0 border-b border-line bg-panel2">
      <div className="flex min-w-0 items-center gap-2 border-b border-line px-3.5 py-2.5">
        <span className="h-2 w-2 shrink-0 rounded-full bg-line2" />
        <span className="h-2 w-2 shrink-0 rounded-full bg-line2" />
        <span className="h-2 w-2 shrink-0 rounded-full bg-line2" />
        <span className="ml-1.5 min-w-0 truncate text-[11px] text-dim">
          {name.toLowerCase()} — zsh
        </span>
      </div>
      <div className="min-w-0 space-y-1.5 px-3.5 py-4 text-[11px] leading-relaxed sm:text-[12px]">
        <p className="truncate text-fg">
          <span className="text-violet">$ </span>
          {terminal.cmd}
        </p>
        {terminal.out.map((line) => (
          <p key={line} className={`truncate ${lineColor(line)}`}>
            {line}
          </p>
        ))}
        <p aria-hidden className="text-violet">
          <span className="cursor-blink">▮</span>
        </p>
      </div>
    </div>
  );
}
