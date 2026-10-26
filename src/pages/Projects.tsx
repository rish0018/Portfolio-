import { ArrowUpRight, Github } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { RevealCard } from "../components/ui-kit/RevealCard";
import { projects, type Project } from "../data/portfolio";

function Links({ p }: { p: Project }) {
  return (
    <div className="mt-4 flex gap-4 text-sm">
      {p.code && (
        <a
          href={p.code}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-cream hover:text-mint-300"
        >
          <Github className="h-4 w-4" /> Code
        </a>
      )}
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-ember hover:brightness-110"
        >
          Live <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function ProjectCard({ p, className }: { p: Project; className?: string }) {
  return (
    <RevealCard
      className={className}
      hasDetails={p.details.length > 0}
      front={
        <div className="flex h-full min-h-[170px] flex-col">
          {p.period && <p className="font-mono text-xs text-mint-300">{p.period}</p>}
          <h3 className="mt-1 font-display text-xl font-semibold text-paper">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-sand">{p.blurb}</p>
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
            {p.stack.map((s) => (
              <li key={s} className="rounded-full bg-ink-700 px-2.5 py-0.5 font-mono text-[11px] text-cream">
                {s}
              </li>
            ))}
          </ul>
          <Links p={p} />
        </div>
      }
      details={
        <>
          <p className="font-mono text-xs text-mint-300">{p.title}</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-cream">
            {p.details.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
          <Links p={p} />
        </>
      }
    />
  );
}

export default function Projects() {
  const flagship = projects.filter((p) => p.tier === "flagship");
  const featured = projects.filter((p) => p.tier === "featured");
  const client = projects.filter((p) => p.tier === "client");
  const more = projects.filter((p) => p.tier === "more");

  return (
    <div>
      <PageHeader
        index="02"
        label="projects"
        title="Things I've built"
        intro="Hover or tap a card for the details."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {flagship.map((p) => (
          <ProjectCard key={p.title} p={p} className="min-h-[300px]" />
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.title} p={p} className="min-h-[260px]" />
        ))}
      </div>

      <h2 className="mb-5 mt-16 font-mono text-xs uppercase tracking-[0.2em] text-sand">
        [ client &amp; freelance ]
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {client.map((p) => (
          <ProjectCard key={p.title} p={p} className="min-h-[230px]" />
        ))}
      </div>

      <h2 className="mb-5 mt-16 font-mono text-xs uppercase tracking-[0.2em] text-sand">[ more work ]</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {more.map((p) => (
          <ProjectCard key={p.title} p={p} className="min-h-[210px]" />
        ))}
      </div>
    </div>
  );
}
