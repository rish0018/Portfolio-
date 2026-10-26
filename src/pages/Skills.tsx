import { PageHeader } from "../components/layout/PageHeader";
import { certifications, languages, skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <div>
      <PageHeader index="03" label="skills" title="What I work with" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="cursor-target rounded-[20px] border border-ink-600 bg-ink-800 p-6 transition hover:border-mint-400/50"
          >
            <h2 className="font-display text-lg font-semibold text-paper">{g.title}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-ink-600 bg-ink-700 px-3 py-1 font-mono text-xs text-cream"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mb-5 mt-16 font-mono text-xs uppercase tracking-[0.2em] text-sand">[ certifications ]</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((c) => (
          <div key={c.title} className="rounded-[20px] border border-ink-600 bg-ink-800 p-6">
            <p className="font-display text-base font-semibold text-paper">{c.title}</p>
            {c.note && <p className="mt-1 text-sm text-ember">{c.note}</p>}
          </div>
        ))}
      </div>

      <p className="mt-10 font-mono text-xs text-sand">Languages: {languages.join(" · ")}</p>
    </div>
  );
}
