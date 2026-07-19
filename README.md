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

## Deploying (Cloudflare Pages)

This site is deployed on **Cloudflare Pages** at **https://elliezer.dev**.

Because the domain is managed in the same Cloudflare account, adding it as a
custom domain wires up DNS + TLS automatically — no manual records, and the apex
(`elliezer.dev`) works natively via CNAME flattening.

### Build settings

| Setting               | Value           |
| --------------------- | --------------- |
| Framework preset      | Astro           |
| Build command         | `npm run build` |
| Build output dir      | `dist`          |
| `NODE_VERSION` (env)  | `22`            |

> Set `NODE_VERSION=22` as a build environment variable — Astro 5 needs
> Node ≥ 18.20.8 and Cloudflare's default build image ships an older Node.

### Custom domain

In the Pages project → **Custom domains → Set up a domain** → add `elliezer.dev`
(and `www.elliezer.dev`). Cloudflare creates the DNS records and certificate for
you. Every push to `main` triggers a production deploy; other branches get
preview URLs.
