import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: npm run new-post "My post title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");
if (!slug) {
  console.error("Title must contain letters or numbers.");
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
const dir = join(process.cwd(), "content", "drafts");
const file = join(dir, `${date}-${slug}.md`);

if (existsSync(file)) {
  console.error(`Already exists: ${file}`);
  process.exit(1);
}

mkdirSync(dir, { recursive: true });
writeFileSync(
  file,
  `---
title: ${JSON.stringify(title)}
date: ${date}
summary: One sentence that shows on the card.
tags: []
---

Write here.
`
);
console.log(`Created ${file}\nWhen it's ready, move it to content/blog/ and push.`);
