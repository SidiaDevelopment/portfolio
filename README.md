# Portfolio — Marvin Fischer

Personal portfolio site. Built as a static export with Next.js, deployed via Docker + nginx on port `3339`.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- React 19, TypeScript 5
- [Tailwind CSS v4](https://tailwindcss.com) with custom theme tokens
- [lucide-react](https://lucide.dev) for icons

## Local development

```bash
npm install
npm run dev
```

Site is served at `http://localhost:3000`.

## Production build

```bash
npm run build
```

Outputs a static site to `out/`. The repo has `output: "export"` in `next.config.ts`, so there's no Node runtime — the build is just HTML/CSS/JS that any static host (nginx, S3, GitHub Pages) can serve.

## Docker

```bash
docker compose up -d --build
```

This runs a multi-stage build (Node builder → nginx runner) and exposes the site on `http://localhost:3339`.

For a one-off run without Compose:

```bash
docker build -t portfolio .
docker run -d -p 3339:3339 portfolio
```

## Project layout

```
src/
├─ app/
│  ├─ globals.css        # design tokens, theme variables, custom utilities
│  ├─ icon.svg           # favicon (neon→magenta gradient M)
│  ├─ layout.tsx         # root layout + theme FOUC-prevention script
│  └─ page.tsx           # section composition
├─ components/
│  ├─ Navbar.tsx
│  ├─ HeroSection.tsx
│  ├─ AboutSection.tsx
│  ├─ SkillsSection.tsx
│  ├─ ExperienceSection.tsx
│  ├─ ProjectsSection.tsx
│  ├─ ContactSection.tsx
│  ├─ Footer.tsx
│  └─ ui/                # Button, Card, Reveal, Section, etc.
└─ hooks/
   └─ useInView.ts       # IntersectionObserver hook for scroll reveals
```

## Customising content

All copy and data lives directly in the section components — no CMS.

- **Skills**: edit the `groups` array in `src/components/SkillsSection.tsx`.
- **Experience**: edit the `experience` array in `src/components/ExperienceSection.tsx`. Each job has a `projects` array of foldout entries with images, tags and store links.
- **Projects** (side projects): edit the `projects` array in `src/components/ProjectsSection.tsx`.
- **Contact**: edit `socialLinks` in `src/components/ContactSection.tsx`. To enable the form-submit flow, set a real Web3Forms access key in the `WEB3FORMS_KEY` constant.
- **Stats** (Years of Experience etc.): edit the `stats` array in `src/components/AboutSection.tsx`. The years value is auto-computed from `CAREER_START_YEAR`.

## Theming

Two themes (dark default, light). Both share a single set of CSS variables in `src/app/globals.css`; the light overrides live under `html[data-theme="light"]`. The toggle (bottom-left fixed button) writes to `localStorage`, and a small inline script in `layout.tsx` applies the saved theme before paint to avoid FOUC.

Add a new accent colour by adding the variable to both the `@theme` block and the light-mode override.

## Images

Project thumbnails are in `public/` as JPG/PNG. Reference them in the section data as `image: "/your-image.jpg"`. Large source images should be downscaled to roughly 2× the display size before being committed.
