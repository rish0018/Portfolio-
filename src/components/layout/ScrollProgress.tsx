import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Slim right-edge rail that fills as the page scrolls. Replaces the native page scrollbar. */
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.2 });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-24 right-2 top-20 z-50 w-[3px] overflow-hidden rounded-full bg-ink-600/60"
    >
      <motion.div
        className="h-full w-full origin-top rounded-full bg-ember"
        style={{ scaleY: reduceMotion ? scrollYProgress : smooth }}
      />
    </div>
  );
}
