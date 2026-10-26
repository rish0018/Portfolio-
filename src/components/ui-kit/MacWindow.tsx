import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface MacWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

/** Mac-style window chrome: traffic lights, mono title, matte body. */
export function MacWindow({ title = "~/rishit", children, className }: MacWindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-ink-600 bg-ink-800 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-ink-600 bg-ink-700/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#e0685c]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#e0b04c]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#5fa86a]" aria-hidden="true" />
        <span className="ml-3 truncate font-mono text-xs text-sand">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
