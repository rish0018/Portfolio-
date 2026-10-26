# Rishit Kohli's Portfolio

Personal portfolio website for Rishit Kohli: CS undergraduate (AI & ML) at VIT-AP, Software and Mobile Developer. It showcases experience, skills, projects and a working contact form.

Live: https://rishit-portfolio18.netlify.app/  
Source: https://github.com/rish0018/Portfolio-

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion + GSAP (page transitions, dock, cursor)
- Radix UI / shadcn-style components (`src/components/ui`)
- React Router 7
- EmailJS (contact form)

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm (ships with Node)

### 1. Install

```bash
git clone https://github.com/rish0018/Portfolio-.git
cd Portfolio-
npm install
```

### 2. Configure environment variables

The contact form sends email through [EmailJS](https://www.emailjs.com/). Copy the example file and fill in your own values:

```bash
cp .env.example .env      # Windows PowerShell: Copy-Item .env.example .env
```

| Variable | Where to find it |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS dashboard → Email Services |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS dashboard → Email Templates |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS dashboard → Account → API Keys |

The template should use the form fields `name`, `email`, `subject` and `message`.

If these are missing, the site still runs, but submitting the contact form shows "Contact form is not configured".

> `.env` is gitignored. Never commit it. Note that `VITE_*` values are bundled into the browser build, so they are visible to anyone using the site. In the EmailJS dashboard, restrict allowed domains to your site and set a monthly send limit.

### 3. Run

```bash
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  main.tsx                    App bootstrap
  App.tsx                     Routes: / /work /projects /skills /contact, * → NotFound
  data/portfolio.ts           All content (experience, projects, skills, links); edit here
  pages/                      Home, Work, Projects, Skills, Contact, NotFound
  components/layout/          PageShell (dock nav, page transitions), PageHeader
  components/ui-kit/          MacWindow, PhoneFrame, Dock, TargetCursor, RevealCard
  components/ui/              shadcn-style primitives
public/                       Static assets, resume PDF
```

To update the site's content, edit `src/data/portfolio.ts`. To replace the resume, overwrite `public/Rishit_Kohli_Resume.pdf`.

## Writing a blog post

Posts are markdown files in the repo. There is no CMS and no database.

1. Create a draft: `npm run new-post "My post title"`. This makes `content/drafts/YYYY-MM-DD-my-post-title.md`.
2. Write it. The top of the file (front matter) looks like this:

   ```md
   ---
   title: "My post title"
   date: 2026-11-02
   summary: One sentence that shows on the card.
   tags: [learning, react]
   cover: /blog/my-cover.png   # optional; omit for generated artwork
   ---
   ```

   `title` and `date` are required. The rest is optional. Use `##` and `###` headings; they build the "on this page" menu. Images go in `public/` and are referenced like `/blog/pic.png`.
3. Preview it with `npm run dev`. Drafts show up on `/blog` in dev only, marked "draft".
4. Publish: move the file from `content/drafts/` to `content/blog/`, commit, and push. Netlify redeploys and the post goes live. The issue number ("week N") and the weekly streak update themselves.

Drafts are never included in a production build, so unpublished writing cannot leak.

## Deployment

Build with `npm run build` and deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages). Add the three `VITE_EMAILJS_*` variables in your host's environment settings, since `.env` is not deployed.
