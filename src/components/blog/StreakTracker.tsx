import { cn } from "../../lib/utils";
import { formatDate, getStreak } from "../../lib/blog";

export function StreakTracker({ className }: { className?: string }) {
  const { weeks, streak } = getStreak();

  return (
    <div className={cn("rounded-[20px] border border-ink-600 bg-ink-800 p-5", className)}>
      <div className="flex items-baseline justify-between gap-4 font-mono text-xs">
        <span className="text-mint-300">[ weekly streak ]</span>
        <span className="text-cream">
          {streak > 0 ? `${streak} week${streak === 1 ? "" : "s"} in a row` : "start the streak"}
        </span>
      </div>
      <ul className="mt-4 flex items-center gap-2" aria-label={`Posting history, last ${weeks.length} weeks`}>
        {weeks.map((w) => (
          <li
            key={w.start}
            title={`Week of ${formatDate(w.start)}: ${w.posted ? "posted" : "no post"}`}
            className={cn(
              "h-4 w-4 flex-1 rounded-md border transition-transform hover:scale-125",
              w.posted ? "border-ember bg-ember" : "border-ink-600 bg-ink-700",
              w.current && !w.posted && "border-dashed border-mint-400"
            )}
          >
            <span className="sr-only">
              {formatDate(w.start)}: {w.posted ? "posted" : "no post"}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 font-mono text-[11px] text-sand">One post a week. Last 12 weeks.</p>
    </div>
  );
}
