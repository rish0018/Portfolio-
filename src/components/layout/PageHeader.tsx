interface PageHeaderProps {
  index: string;
  label: string;
  title: string;
  intro?: string;
}

export function PageHeader({ index, label, title, intro }: PageHeaderProps) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-mint-300">
        [ {index} / {label} ]
      </p>
      <h1 className="font-display text-4xl font-semibold leading-tight text-paper sm:text-5xl">{title}</h1>
      {intro && <p className="mt-4 text-base leading-relaxed text-sand">{intro}</p>}
    </header>
  );
}
