import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { SnakeSection } from "../components/home/SnakeSection";
import { MacWindow } from "../components/ui-kit/MacWindow";
import { PhoneFrame } from "../components/ui-kit/PhoneFrame";
import { experience, profile, projects, skillGroups } from "../data/portfolio";

const TERMINAL: { cmd: string; out: string }[] = [
  { cmd: "whoami", out: profile.name },
  { cmd: "role", out: profile.role },
  { cmd: "education", out: "B.Tech CS · GPA 8.9" },
  { cmd: "now", out: experience[0].org },
];

const LAUNCHERS = [
  { to: "/work", index: "01", title: "Work", body: `${experience.length} roles, incl. ${experience[0].org}`, span: "sm:col-span-1" },
  {
    to: "/projects",
    index: "02",
    title: "Projects",
    body: `${projects.length} things built, from RL tutors to client sites`,
    span: "sm:col-span-2",
  },
  { to: "/skills", index: "03", title: "Skills", body: `${skillGroups.length} areas, 3 certifications`, span: "sm:col-span-1" },
  { to: "/contact", index: "04", title: "Contact", body: "Say hi, I reply fast", span: "sm:col-span-1" },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <section className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-mint-300">[ 00 / hello ]</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-paper sm:text-6xl">
            Hi, I&apos;m Rishit<span className="text-ember">.</span>
          </h1>
          <p className="mt-3 font-display text-xl text-mint-300 sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sand">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="cursor-target inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-medium text-ink-950 transition hover:brightness-110"
            >
              See my projects <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="cursor-target rounded-full border border-ink-600 px-6 py-3 font-medium text-cream transition hover:border-mint-400"
            >
              Get in touch
            </Link>
            <a
              href={profile.links.resume}
              download
              className="cursor-target inline-flex items-center gap-2 rounded-full border border-ink-600 px-6 py-3 font-medium text-cream transition hover:border-mint-400"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg pb-8 sm:min-h-[490px] sm:pb-0 lg:max-w-none">
          <div className="sm:absolute sm:inset-x-0 sm:top-[80px]">
          <MacWindow title="~/rishit (zsh)">
            <ul className="space-y-3 font-mono text-sm sm:pr-[190px]">
              {TERMINAL.map((row, i) => (
                <motion.li
                  key={row.cmd}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.18 }}
                >
                  <span className="text-mint-400">$</span> <span className="text-sand">{row.cmd}</span>
                  <br />
                  <span className="pl-4 text-cream">{row.out}</span>
                </motion.li>
              ))}
              <li>
                <span className="text-mint-400">$</span>{" "}
                <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-ember" aria-hidden="true" />
              </li>
            </ul>
          </MacWindow>
          </div>

          <motion.div
            className="relative mx-auto mt-8 w-[200px] sm:absolute sm:right-6 sm:top-2 sm:mt-0 sm:w-[210px]"
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneFrame className="!w-full">
              <div className="flex h-full flex-col items-center px-4 pt-4 text-center">
                <img
                  src="/picture.jpg"
                  alt="Rishit Kohli"
                  className="h-16 w-16 rounded-full border border-ink-600 object-cover"
                />
                <p className="mt-3 font-display text-sm font-semibold text-paper">{profile.name}</p>
                <p className="text-[10px] text-sand">Mobile · Full-stack · AI</p>
                <div className="mt-4 grid w-full grid-cols-1 gap-2">
                  {["React Native", "Expo", "Reanimated"].map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-ink-600 bg-ink-800 py-1.5 font-mono text-[10px] text-mint-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-4 rounded-full bg-ember px-3 py-1 text-[10px] font-medium text-ink-950">
                  Open to chat
                </span>
              </div>
            </PhoneFrame>
          </motion.div>
        </div>
      </section>

      <SnakeSection />

      <section aria-label="Explore" className="mt-20">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-sand">[ explore ]</p>
        <div className="grid gap-4 sm:grid-cols-4">
          {LAUNCHERS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`cursor-target group rounded-[20px] border border-ink-600 bg-ink-800 p-6 transition hover:-translate-y-1 hover:border-mint-400/60 ${l.span}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-mint-300">{l.index}</span>
                <ArrowUpRight className="h-5 w-5 text-sand transition group-hover:text-ember" />
              </div>
              <h2 className="mt-8 font-display text-2xl font-semibold text-paper">{l.title}</h2>
              <p className="mt-1 text-sm text-sand">{l.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
