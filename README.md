# Personal Portfolio

A fast, minimal personal portfolio built with [Astro](https://astro.build).
Minimal & clean aesthetic, light/dark mode, and a single config file for all
your content.

## Getting started

```bash
npm install      # already done
npm run dev      # start the dev server → http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Customizing

Everything you need to edit lives in **one file**:

- **`src/data/site.ts`** — your name, role, email, bio, projects, resume
  entries, skills, and social links. Edit this and every page updates.

Other useful spots:

- **`src/styles/global.css`** — design tokens at the top (`:root`): colors,
  fonts, spacing, accent color. Change `--accent` to re-skin the site. Dark mode
  values are under `@media (prefers-color-scheme: dark)`.
- **`public/resume.pdf`** — drop your resume PDF here so the "Download PDF"
  button on the Resume page works. (Set the path via `resume.pdf` in
  `site.ts`, or set it to `''` to hide the button.)
- **`astro.config.mjs`** — set `site` to your real deployed URL.
- **`src/layouts/BaseLayout.astro`** — the favicon emoji (currently 👋) and
  `<head>` meta tags.

## Pages

| Route        | File                        | Purpose                     |
| ------------ | --------------------------- | --------------------------- |
| `/`          | `src/pages/index.astro`     | About / hero + selected work |
| `/projects`  | `src/pages/projects.astro`  | All projects                |
| `/resume`    | `src/pages/resume.astro`    | Experience, education, skills |
| `/contact`   | `src/pages/contact.astro`   | Email + social links        |

Add or reorder nav links in the `nav` array in `src/data/site.ts`.

## Deploying (Vercel + Cloudflare DNS)

This site is deployed on **Vercel** at **https://elliezer.dev**.

Vercel auto-detects Astro (build: `npm run build`, output: `dist`) — no adapter
or extra config needed. Every push to `main` triggers a production deploy; other
branches get preview URLs.

### Custom domain (elliezer.dev)

The domain is registered/managed at **Cloudflare**. In the Vercel project add
both `elliezer.dev` and `www.elliezer.dev`, then add these records in the
Cloudflare DNS dashboard — set to **DNS only** (grey cloud, _not_ proxied) so
Vercel can issue the TLS certificate:

| Type  | Name          | Value                  | Proxy    |
| ----- | ------------- | ---------------------- | -------- |
| A     | `@`           | `76.76.21.21`          | DNS only |
| CNAME | `www`         | `cname.vercel-dns.com` | DNS only |

Always follow the exact values Vercel shows for your project — they can change.
