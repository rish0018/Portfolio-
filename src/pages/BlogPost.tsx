import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Prose } from "../components/blog/Prose";
import { PostCover } from "../components/blog/PostCover";
import { adjacentPosts, formatDate, getPost, type Post } from "../lib/blog";
import { usePageMeta } from "../hooks/use-page-meta";
import { cn } from "../lib/utils";
import NotFound from "./NotFound";

interface Heading {
  id: string;
  text: string;
  level: number;
}

function Article({ post }: { post: Post }) {
  usePageMeta(`${post.title} | Rishit Kohli`, post.summary || undefined);
  const articleRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const { newer, older } = adjacentPosts(post.slug);

  useEffect(() => {
    const nodes = Array.from(articleRef.current?.querySelectorAll<HTMLElement>("h2[id], h3[id]") ?? []);
    setHeadings(nodes.map((n) => ({ id: n.id, text: n.textContent ?? "", level: n.tagName === "H2" ? 2 : 3 })));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -65% 0px" }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [post.slug]);

  return (
    <div>
      <Link
        to="/blog"
        className="cursor-target mb-6 inline-flex items-center gap-2 font-mono text-xs text-sand transition hover:text-ember"
      >
        <ArrowLeft className="h-4 w-4" /> all posts
      </Link>

      <div className="aspect-[16/8] overflow-hidden rounded-[24px] border border-ink-600">
        <PostCover post={post} />
      </div>

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-x-12 lg:grid-cols-[minmax(0,720px)_220px] lg:justify-center">
      <header className="lg:col-start-1">
        <p className="font-mono text-xs text-mint-300">
          {post.draft ? "draft (only visible in dev)" : `week ${post.issue}`} · {formatDate(post.date)} ·{" "}
          {post.readingMinutes} min read
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-paper sm:text-5xl">{post.title}</h1>
        {post.summary && <p className="mt-4 text-lg leading-relaxed text-sand">{post.summary}</p>}
        {post.tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <li key={t} className="rounded-full bg-ink-700 px-3 py-1 font-mono text-xs text-cream">
                {t}
              </li>
            ))}
          </ul>
        )}
      </header>

        <div ref={articleRef} className="mt-10 min-w-0 lg:col-start-1">
          <Prose>{post.body}</Prose>
        </div>

        {headings.length > 1 && (
          <nav aria-label="On this page" className="mt-10 hidden lg:col-start-2 lg:row-start-2 lg:block">
            <div className="sticky top-24">
              <p className="mb-3 font-mono text-xs text-mint-300">[ on this page ]</p>
              <ul className="space-y-2 border-l border-ink-600">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className={cn(
                        "-ml-px block border-l py-0.5 text-sm transition",
                        h.level === 3 ? "pl-6" : "pl-4",
                        active === h.id
                          ? "border-ember text-ember"
                          : "border-transparent text-sand hover:text-cream"
                      )}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}

        {(newer || older) && (
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:col-start-1">
          {older ? (
            <Link
              to={`/blog/${older.slug}`}
              className="cursor-target rounded-[20px] border border-ink-600 bg-ink-800 p-5 transition hover:border-mint-400/60"
            >
              <span className="flex items-center gap-2 font-mono text-xs text-sand">
                <ArrowLeft className="h-4 w-4" /> earlier
              </span>
              <span className="mt-2 block font-display text-paper">{older.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link
              to={`/blog/${newer.slug}`}
              className="cursor-target rounded-[20px] border border-ink-600 bg-ink-800 p-5 text-right transition hover:border-mint-400/60"
            >
              <span className="flex items-center justify-end gap-2 font-mono text-xs text-sand">
                newer <ArrowRight className="h-4 w-4" />
              </span>
              <span className="mt-2 block font-display text-paper">{newer.title}</span>
            </Link>
          )}
        </div>
        )}
      </div>
    </div>
  );
}

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  return post ? <Article key={post.slug} post={post} /> : <NotFound />;
}
