import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface RevealCardProps {
  front: ReactNode;
  details: ReactNode;
  className?: string;
  hasDetails?: boolean;
}

/**
 * Bento tile that reveals more detail on hover (desktop) or tap / keyboard
 * focus (touch, keyboard). Front content stays in layout so the grid never shifts.
 */
export function RevealCard({ front, details, className, hasDetails = true }: RevealCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "cursor-target group relative overflow-hidden rounded-[20px] border border-ink-600 bg-ink-800 p-6 transition-colors duration-300 hover:border-mint-400/50 focus-within:border-mint-400/50",
        className
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
      onClick={() => hasDetails && setOpen((v) => !v)}
      tabIndex={hasDetails ? 0 : undefined}
    >
      <div className={cn("transition-opacity duration-300", open && hasDetails && "opacity-0")}>{front}</div>
      <AnimatePresence>
        {open && hasDetails && (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 overflow-y-auto bg-ink-800 p-6"
          >
            {details}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
