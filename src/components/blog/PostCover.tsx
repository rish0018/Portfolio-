import { cn } from "../../lib/utils";
import type { Post } from "../../lib/blog";

type CoverPost = Pick<Post, "slug" | "title" | "cover" | "issue">;

function seeded(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const FILLS = ["#3e948c", "#5fa89c", "#8ab8ae", "#e8823c", "#f3e4d1"];

/** An image cover if the post has one, otherwise generated flat artwork seeded by the slug. */
export function PostCover({ post, className }: { post: CoverPost; className?: string }) {
  if (post.cover) {
    return <img src={post.cover} alt="" loading="lazy" className={cn("h-full w-full object-cover object-[center_40%]", className)} />;
  }

  const rand = seeded(post.slug);
  const shapes = Array.from({ length: 4 }, (_, i) => {
    const kind = Math.floor(rand() * 3);
    const size = 70 + rand() * 120;
    return {
      i,
      kind,
      size,
      x: 40 + rand() * 520,
      y: 30 + rand() * 280,
      fill: FILLS[Math.floor(rand() * FILLS.length)],
      outline: rand() > 0.5,
      rot: Math.floor(rand() * 60) - 30,
    };
  });
  const apple = { x: 80 + rand() * 440, y: 60 + rand() * 220 };
  const patternId = `dots-${post.slug}`;

  return (
    <svg
      viewBox="0 0 600 340"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <rect width="600" height="340" fill="#171d19" />
      <defs>
        <pattern id={patternId} width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#f3e4d1" opacity="0.14" />
        </pattern>
      </defs>
      <rect width="600" height="340" fill={`url(#${patternId})`} />
      {shapes.map((s) => {
        const common = {
          fill: s.outline ? "none" : s.fill,
          stroke: s.fill,
          strokeWidth: s.outline ? 3 : 0,
          opacity: s.outline ? 0.7 : 0.85,
        };
        if (s.kind === 0) return <circle key={s.i} cx={s.x} cy={s.y} r={s.size / 2} {...common} />;
        if (s.kind === 1) {
          return (
            <rect
              key={s.i}
              x={s.x - s.size / 2}
              y={s.y - s.size / 2}
              width={s.size}
              height={s.size}
              rx={s.size * 0.28}
              transform={`rotate(${s.rot} ${s.x} ${s.y})`}
              {...common}
            />
          );
        }
        return (
          <path
            key={s.i}
            d={`M ${s.x - s.size / 2} ${s.y + s.size / 2} A ${s.size} ${s.size} 0 0 1 ${s.x + s.size / 2} ${s.y - s.size / 2} L ${s.x + s.size / 2} ${s.y + s.size / 2} Z`}
            {...common}
          />
        );
      })}
      <rect x={apple.x - 9} y={apple.y - 9} width="18" height="18" rx="5" fill="#e8823c" />
      <text x="64" y="304" fontFamily="JetBrains Mono, monospace" fontSize="15" fill="#f3e4d1" opacity="0.7">
        {post.issue > 0 ? `WEEK ${String(post.issue).padStart(2, "0")}` : "DRAFT"}
      </text>
    </svg>
  );
}
