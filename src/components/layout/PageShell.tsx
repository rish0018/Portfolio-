import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Briefcase, FolderKanban, Home, Mail, Wrench } from "lucide-react";
import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import { Dock, DockIcon, DockItem, DockLabel } from "../ui-kit/Dock";
import { TargetCursor } from "../ui-kit/TargetCursor";
import { cn } from "../../lib/utils";
import { profile } from "../../data/portfolio";

const NAV = [
  { path: "/", label: "Home", icon: Home },
  { path: "/work", label: "Work", icon: Briefcase },
  { path: "/projects", label: "Projects", icon: FolderKanban },
  { path: "/skills", label: "Skills", icon: Wrench },
  { path: "/contact", label: "Contact", icon: Mail },
] as const;

export default function PageShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  return (
    <div className="grain relative min-h-screen bg-ink-900 text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(243,228,209,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%)",
        }}
      />
      <TargetCursor />

      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 pt-6 sm:px-8">
        <Link to="/" className="cursor-target font-display text-lg font-semibold text-paper">
          rishit<span className="text-ember">.</span>
        </Link>
        <span className="flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800 px-3 py-1.5 font-mono text-xs text-sand">
          <span className="h-2 w-2 rounded-full bg-ember" aria-hidden="true" />
          {profile.status}
        </span>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-40 pt-10 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <nav aria-label="Primary" className="fixed inset-x-0 bottom-4 z-40 flex justify-center">
        <Dock panelHeight={64} magnification={72}>
          {NAV.map(({ path, label, icon: Icon }) => {
            const active = location.pathname === path;
            return (
              <DockItem key={path} onClick={() => navigate(path)} className="cursor-target">
                <DockLabel>{label}</DockLabel>
                <DockIcon
                  className={cn(
                    "rounded-xl border",
                    active ? "border-ember/60 bg-ember/15 text-ember" : "border-ink-600 bg-ink-700 text-cream"
                  )}
                >
                  <Icon className="h-1/2 w-1/2" aria-label={label} />
                </DockIcon>
              </DockItem>
            );
          })}
        </Dock>
      </nav>
    </div>
  );
}
