import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PageHeader } from "../components/layout/PageHeader";
import { FeaturedPost } from "../components/blog/FeaturedPost";
import { PostCard } from "../components/blog/PostCard";
import { StreakTracker } from "../components/blog/StreakTracker";
import { allTags, posts } from "../lib/blog";
import { usePageMeta } from "../hooks/use-page-meta";
import { cn } from "../lib/utils";

export default function Blog() {
  usePageMeta("Blog | Rishit Kohli", "A new post every week: what I'm building, learning and breaking.");
  const reduceMotion = useReducedMotion();
  const [tag, setTag] = useState<string | null>(null);

  const [latest, ...rest] = posts;
  const visible = tag ? rest.filter((p) => p.tags.includes(tag)) : rest;

  return (
    <div>
      <PageHeader
        index="05"
        label="blog"
        title="A new post every week"
        intro="What I'm building, learning and breaking. One post a week, written by me."
      />

      {latest ? (
        <FeaturedPost post={latest} />
      ) : (
        <div className="rounded-[24px] border border-dashed border-ink-600 bg-ink-800 p-10 text-center">
          <p className="font-display text-2xl font-semibold text-paper">The first post is on its way</p>
          <p className="mt-2 text-sand">Check back soon. A new one lands every week.</p>
        </div>
      )}

      <StreakTracker className="mt-4" />

      {rest.length > 0 && (
        <>
          <div className="mb-5 mt-14 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-sand">[ earlier posts ]</h2>
            {allTags.length > 0 && (
              <ul className="flex flex-wrap gap-2" aria-label="Filter by tag">
                {[null, ...allTags].map((t) => (
                  <li key={t ?? "all"}>
                    <button
                      type="button"
                      onClick={() => setTag(t)}
                      aria-pressed={tag === t}
                      className={cn(
                        "cursor-target rounded-full border px-3 py-1 font-mono text-xs transition",
                        tag === t
                          ? "border-ember bg-ember text-ink-950"
                          : "border-ink-600 text-cream hover:border-mint-400"
                      )}
                    >
                      {t ?? "all"}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <motion.ul layout={!reduceMotion} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((p) => (
                <motion.li
                  key={p.slug}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <PostCard post={p} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
          {visible.length === 0 && <p className="mt-6 text-sand">No posts with that tag yet.</p>}
        </>
      )}
    </div>
  );
}
