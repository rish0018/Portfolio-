import { useCallback, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MacWindow } from "../ui-kit/MacWindow";
import { SnakeGame } from "../ui-kit/SnakeGame";
import { skillGroups } from "../../data/portfolio";

const ALL_SKILLS = Array.from(new Set(skillGroups.flatMap((g) => [...g.items])));
const BEST_KEY = "snake-best";

function readBest(): number {
  try {
    return Number(window.localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    return 0;
  }
}

export function SnakeSection() {
  const reduceMotion = useReducedMotion();
  const [collected, setCollected] = useState(0);
  const [best, setBest] = useState(readBest);

  const handleStart = useCallback(() => setCollected(0), []);
  const handleEat = useCallback((score: number) => setCollected(score), []);
  const handleOver = useCallback((score: number) => {
    setBest((prev) => {
      if (score <= prev) return prev;
      try {
        window.localStorage.setItem(BEST_KEY, String(score));
      } catch {
        // storage unavailable (private mode); best score just isn't persisted
      }
      return score;
    });
  }, []);

  const chips = Array.from({ length: collected }, (_, i) => ({
    id: i,
    label: ALL_SKILLS[i % ALL_SKILLS.length],
  })).reverse();

  return (
    <section aria-label="Snake game" className="mt-20">
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-sand">[ play ]</p>
      <div className="w-full">
        <MacWindow title="~/snake.exe">
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="mx-auto w-full max-w-[400px] shrink-0">
              <SnakeGame onStart={handleStart} onEat={handleEat} onGameOver={handleOver} />
              <p className="mt-3 text-center font-mono text-[11px] text-sand">
                Arrow keys / WASD · swipe on mobile · Esc to pause
              </p>
            </div>

            <div className="flex min-h-[200px] min-w-0 flex-1 flex-col sm:max-h-[425px]">
              <div className="mb-3 flex items-baseline justify-between font-mono text-xs">
                <span className="text-mint-300" aria-live="polite">
                  skills collected {collected} / {ALL_SKILLS.length}
                </span>
                <span className="text-sand">best {best}</span>
              </div>
              <ul className="flex flex-wrap content-start gap-2 overflow-y-auto">
                <li className="rounded-full border border-dashed border-ink-600 px-3 py-1 font-mono text-xs text-sand">
                  {collected === 0 ? "eat an apple…" : "next?"}
                </li>
                <AnimatePresence initial={false}>
                  {chips.map((c) => (
                    <motion.li
                      key={c.id}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-full border border-mint-400/40 bg-ink-700 px-3 py-1 font-mono text-xs text-cream"
                    >
                      {c.label}
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </div>
        </MacWindow>
      </div>
    </section>
  );
}
