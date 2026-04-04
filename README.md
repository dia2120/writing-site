# diamanoj.com

Personal writing site built with [Astro](https://astro.build).

## Setup

```bash
npm install
npm run dev       # localhost:4321
```

## Writing

```bash
npm run new-poem "Poem Title Here"
npm run new-essay "Essay Title Here"
```

This creates a new `.md` file in `src/content/poetry/` or `src/content/essays/`, prefilled with frontmatter, and opens it in your editor.

### Frontmatter fields

**Poems:**
```yaml
---
title: "Poem Title"
date: 2025-03-20
tags: ["optional", "tags"]
draft: false        # set true to hide from site
---
```

**Essays:**
```yaml
---
title: "Essay Title"
date: 2025-03-20
description: "One-sentence description (shows on essay page)"
tags: ["optional", "tags"]
draft: false
---
```

### Poetry formatting

Line breaks are preserved automatically (`breaks: true` in Astro config).
Use a blank line between stanzas. Use `---` for section breaks.

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework: **Astro** (Vercel auto-detects)
4. Deploy

## Connect diamanoj.com

1. Buy domain on [Namecheap](https://namecheap.com) (~$12/yr)
2. In Vercel: Project → Settings → Domains → Add `diamanoj.com`
3. Vercel gives you two DNS records to add
4. In Namecheap: Domain → Advanced DNS → add those records
5. Wait ~10 min → done

---

## Project structure

```
src/
  content/
    poetry/        ← your poems (.md)
    essays/        ← your essays (.md)
  pages/
    index.astro    ← homepage
    poetry/
      [slug].astro ← individual poem pages
    essays/
      [slug].astro ← individual essay pages
  layouts/
    BaseLayout.astro
scripts/
  new-post.js      ← CLI for creating posts
```
