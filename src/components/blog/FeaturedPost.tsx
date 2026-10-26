import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate, isNewPost, type Post } from "../../lib/blog";
import { PostCover } from "./PostCover";

export function FeaturedPost({ post, label = "latest post" }: { post: Post; label?: string }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="cursor-target group grid overflow-hidden rounded-[24px] border border-ink-600 bg-ink-800 transition duration-300 hover:border-ember/60 focus-visible:border-ember md:grid-cols-[1.1fr_1fr]"
    >
      <div className="relative min-h-[220px] overflow-hidden md:min-h-[320px]">
        <div className="absolute inset-0 transition duration-700 group-hover:-rotate-1 group-hover:scale-105">
          <PostCover post={post} />
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-mint-300">[ {label} ]</span>
          <span className="text-sand">{post.draft ? "draft" : `week ${post.issue}`}</span>
          {isNewPost(post) && (
            <span className="rounded-full bg-ember px-2 py-0.5 text-[10px] font-medium text-ink-950">new</span>
          )}
        </div>
        <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-paper sm:text-3xl">
          {post.title}
        </h2>
        {post.summary && <p className="mt-3 leading-relaxed text-sand">{post.summary}</p>}
        <p className="mt-4 font-mono text-xs text-sand">
          {formatDate(post.date)} · {post.readingMinutes} min read
        </p>
        <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-ink-950 transition group-hover:brightness-110">
          Read the post
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
