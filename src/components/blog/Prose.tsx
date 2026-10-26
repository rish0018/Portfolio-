import ReactMarkdown, { type Components } from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** react-markdown passes a hast `node` prop to every component; it must not reach the DOM. */
function dom<T extends object>(props: T): Omit<T, "node"> {
  const rest = { ...props } as Record<string, unknown>;
  delete rest.node;
  return rest as Omit<T, "node">;
}

const components: Components = {
  h2: (props) => (
    <h2 className="mb-3 mt-12 scroll-mt-24 font-display text-2xl font-semibold text-paper" {...dom(props)} />
  ),
  h3: (props) => (
    <h3 className="mb-2 mt-8 scroll-mt-24 font-display text-xl font-semibold text-paper" {...dom(props)} />
  ),
  p: (props) => <p className="my-5 leading-[1.8] text-cream/90" {...dom(props)} />,
  a: (props) => {
    const external = typeof props.href === "string" && /^https?:/.test(props.href);
    return (
      <a
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-mint-300 underline decoration-mint-400/40 underline-offset-4 hover:text-ember hover:decoration-ember"
        {...dom(props)}
      />
    );
  },
  ul: (props) => <ul className="my-5 list-disc space-y-2 pl-6 marker:text-ember" {...dom(props)} />,
  ol: (props) => <ol className="my-5 list-decimal space-y-2 pl-6 marker:text-mint-300" {...dom(props)} />,
  li: (props) => <li className="leading-[1.8] text-cream/90" {...dom(props)} />,
  blockquote: (props) => (
    <blockquote className="my-6 rounded-r-xl border-l-2 border-ember bg-ink-800 px-5 py-3 text-sand" {...dom(props)} />
  ),
  hr: () => <hr className="my-10 border-ink-600" />,
  img: (props) => (
    <img alt="" loading="lazy" className="my-6 w-full rounded-xl border border-ink-600" {...dom(props)} />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl border border-ink-600 bg-ink-950 p-4 font-mono text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-cream"
      {...dom(props)}
    />
  ),
  code: (props) => (
    <code
      {...dom(props)}
      className={`rounded bg-ink-700 px-1.5 py-0.5 font-mono text-[0.88em] text-mint-300 ${props.className ?? ""}`}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-ink-600">
      <table className="w-full border-collapse text-left text-sm" {...dom(props)} />
    </div>
  ),
  th: (props) => (
    <th className="border-b border-ink-600 bg-ink-800 px-4 py-2 font-mono text-xs text-mint-300" {...dom(props)} />
  ),
  td: (props) => <td className="border-b border-ink-700 px-4 py-2 text-cream/90" {...dom(props)} />,
};

export function Prose({ children }: { children: string }) {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug, rehypeHighlight]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
