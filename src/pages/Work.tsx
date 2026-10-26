import { PageHeader } from "../components/layout/PageHeader";
import { RevealCard } from "../components/ui-kit/RevealCard";
import { education, experience } from "../data/portfolio";

export default function Work() {
  return (
    <div>
      <PageHeader
        index="01"
        label="work"
        title="Where I've built things"
        intro="Hover or tap a card for the details."
      />

      <ol className="relative space-y-4 border-l border-ink-600 pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.org + job.title} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[31px] top-8 h-3 w-3 rounded-full border-2 border-ink-900 sm:-left-[39px] ${
                job.kind === "work" ? "bg-ember" : "bg-mint-400"
              }`}
            />
            <RevealCard
              className="min-h-[190px]"
              front={
                <>
                  <p className="font-mono text-xs text-mint-300">{job.period}</p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-paper">{job.title}</h2>
                  <p className="text-ember">{job.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-sand">{job.summary}</p>
                </>
              }
              details={
                <>
                  <p className="font-mono text-xs text-mint-300">{job.org}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-cream">
                    {job.details.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </>
              }
            />
          </li>
        ))}
      </ol>

      <h2 className="mb-5 mt-16 font-mono text-xs uppercase tracking-[0.2em] text-sand">[ education ]</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <div key={e.school} className="rounded-[20px] border border-ink-600 bg-ink-800 p-6">
            <p className="font-mono text-xs text-mint-300">{e.period}</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-paper">{e.school}</h3>
            <p className="text-sm text-cream">{e.degree}</p>
            <p className="mt-1 text-sm text-ember">{e.note}</p>
            {e.detail && <p className="mt-3 text-sm leading-relaxed text-sand">{e.detail}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
