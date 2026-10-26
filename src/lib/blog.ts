import fm from "front-matter";

export interface Post {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  summary: string;
  tags: string[];
  cover?: string;
  body: string;
  /** 1-based issue number in publish order; 0 for drafts. */
  issue: number;
  readingMinutes: number;
  draft: boolean;
}

interface Attributes {
  title?: unknown;
  date?: unknown;
  summary?: unknown;
  tags?: unknown;
  cover?: unknown;
}

// Vite requires the glob options to be an inline object literal.
const published = import.meta.glob("/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;
// Drafts are only loaded by the dev server, so they can never ship in a production build.
const drafts = (import.meta.env.DEV
  ? import.meta.glob("/content/drafts/*.md", { query: "?raw", import: "default", eager: true })
  : {}) as Record<string, string>;

const FILE_DATE = /^(\d{4}-\d{2}-\d{2})-(.+)$/;

function toIsoDate(value: unknown): string | null {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
  return null;
}

function parsePost(path: string, raw: string, draft: boolean): Omit<Post, "issue"> | null {
  const file = path.split("/").pop()!.replace(/\.md$/, "");
  const match = FILE_DATE.exec(file);
  const slug = match ? match[2] : file;

  let parsed: { attributes: Attributes; body: string };
  try {
    parsed = fm<Attributes>(raw);
  } catch (error) {
    console.error(`[blog] Could not parse front matter in ${path}`, error);
    return null;
  }

  const { attributes, body } = parsed;
  const date = toIsoDate(attributes.date) ?? (match ? match[1] : null);
  if (typeof attributes.title !== "string" || !attributes.title.trim() || !date) {
    console.error(`[blog] Skipping ${path}: needs a "title" and a "date" (YYYY-MM-DD) in its front matter.`);
    return null;
  }

  const tags = Array.isArray(attributes.tags)
    ? attributes.tags.map(String)
    : typeof attributes.tags === "string"
      ? attributes.tags.split(",").map((t) => t.trim()).filter(Boolean)
      : [];
  const words = body.trim().split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title: attributes.title.trim(),
    date,
    summary: typeof attributes.summary === "string" ? attributes.summary : "",
    tags,
    cover: typeof attributes.cover === "string" && attributes.cover ? attributes.cover : undefined,
    body,
    readingMinutes: Math.max(1, Math.ceil(words / 200)),
    draft,
  };
}

function load(): Post[] {
  const parsedPublished = Object.entries(published)
    .map(([path, raw]) => parsePost(path, raw, false))
    .filter((p): p is Omit<Post, "issue"> => p !== null)
    .sort((a, b) => a.date.localeCompare(b.date));

  const withIssues: Post[] = parsedPublished.map((p, i) => ({ ...p, issue: i + 1 }));
  const draftPosts: Post[] = Object.entries(drafts)
    .map(([path, raw]) => parsePost(path, raw, true))
    .filter((p): p is Omit<Post, "issue"> => p !== null)
    .map((p) => ({ ...p, issue: 0 }));

  const seen = new Set<string>();
  return [...withIssues, ...draftPosts]
    .filter((p) => {
      if (seen.has(p.slug)) {
        console.error(`[blog] Duplicate slug "${p.slug}" ignored.`);
        return false;
      }
      seen.add(p.slug);
      return true;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** All posts, newest first. Drafts are included in dev only. */
export const posts: Post[] = load();

export const getPost = (slug: string): Post | undefined => posts.find((p) => p.slug === slug);

export const allTags: string[] = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

export function adjacentPosts(slug: string): { newer?: Post; older?: Post } {
  const i = posts.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return { newer: posts[i - 1], older: posts[i + 1] };
}

const DAY = 86_400_000;

/** Monday (UTC) of the week containing the given ISO date, as YYYY-MM-DD. */
function weekStart(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  const offset = (d.getUTCDay() + 6) % 7;
  return new Date(d.getTime() - offset * DAY).toISOString().slice(0, 10);
}

export const isNewPost = (post: Post, now = new Date()): boolean => {
  if (post.draft) return false;
  const age = now.getTime() - new Date(`${post.date}T00:00:00Z`).getTime();
  return age >= 0 && age < 7 * DAY;
};

export interface StreakInfo {
  weeks: { start: string; posted: boolean; current: boolean }[];
  streak: number;
}

/** One entry per week for the last `count` weeks (oldest first) plus the current consecutive-week streak. */
export function getStreak(list: Post[] = posts, count = 12, now = new Date()): StreakInfo {
  const postedWeeks = new Set(list.filter((p) => !p.draft).map((p) => weekStart(p.date)));
  const thisWeek = weekStart(now.toISOString().slice(0, 10));
  const thisWeekMs = new Date(`${thisWeek}T00:00:00Z`).getTime();

  const weeks = Array.from({ length: count }, (_, i) => {
    const start = new Date(thisWeekMs - (count - 1 - i) * 7 * DAY).toISOString().slice(0, 10);
    return { start, posted: postedWeeks.has(start), current: start === thisWeek };
  });

  // The current week doesn't break a streak until it has ended without a post.
  let streak = 0;
  let cursor = thisWeekMs;
  if (!postedWeeks.has(thisWeek)) cursor -= 7 * DAY;
  while (postedWeeks.has(new Date(cursor).toISOString().slice(0, 10))) {
    streak += 1;
    cursor -= 7 * DAY;
  }
  return { weeks, streak };
}

export const formatDate = (iso: string): string =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
