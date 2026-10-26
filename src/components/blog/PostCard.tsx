import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate, type Post } from "../../lib/blog";
import { PostCover } from "./PostCover";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="cursor-target group flex h-full flex-col overflow-hidden rounded-[20px] border border-ink-600 bg-ink-800 transition duration-300 hover:-translate-y-1 hover:border-mint-400/60 focus-visible:border-mint-400"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <div className="h-full w-full transition duration-500 group-hover:-rotate-1 group-hover:scale-105">
          <PostCover post={post} />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-ink-950/80 px-2.5 py-1 font-mono text-[11px] text-cream">
          {post.draft ? "draft" : `week ${post.issue}`}
        </span>
        <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-ember text-ink-950 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs text-mint-300">
          {formatDate(post.date)} · {post.readingMinutes} min read
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-paper">{post.title}</h3>
        {post.summary && <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-sand">{post.summary}</p>}
        {post.tags.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
            {post.tags.map((t) => (
              <li key={t} className="rounded-full bg-ink-700 px-2.5 py-0.5 font-mono text-[11px] text-cream">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
