# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev        # Start dev server (Next.js, localhost:3000)
npm run build      # Production build
npm run lint       # ESLint
```

There are no automated tests. `playwright` is installed but no test files exist yet.

## Architecture

This is a **Next.js 16 / React 19 / Tailwind CSS v4** marketing site for Xiliherb Naturals Pvt Ltd — a biotech startup producing bio-based xylitol from agricultural biomass.

### App router pages

| Route | File |
|---|---|
| `/` | [app/page.tsx](app/page.tsx) |
| `/about` | [app/about/page.tsx](app/about/page.tsx) |
| `/team` | [app/team/page.tsx](app/team/page.tsx) |
| `/xylitol-technology` | [app/xylitol-technology/page.tsx](app/xylitol-technology/page.tsx) |
| `/sustainability` | [app/sustainability/page.tsx](app/sustainability/page.tsx) |
| `/innovation` | [app/innovation/page.tsx](app/innovation/page.tsx) |
| `/contact` | [app/contact/page.tsx](app/contact/page.tsx) |

The root layout ([app/layout.tsx](app/layout.tsx)) wraps every page with `<Navbar>`, `<ProgressBar>`, `<ChatBot>`, and `<Footer>`.

### Key conventions

- **Brand palette** is defined in [app/globals.css](app/globals.css) as CSS variables (`--color-navy: #1E3F6E`, `--color-xili-green: #5BAC2E`, `--color-teal: #1A9BA0`). Inline `style` props are used extensively for brand colors — this is intentional, not a lint issue.
- **`@/*` path alias** maps to the repo root (`tsconfig.json`), so `@/components/...`, `@/lib/...`, etc.
- **Tailwind v4** is configured via `postcss.config.mjs` and `@import "tailwindcss"` in globals.css. Theme tokens are extended inside `@theme { … }` — not in a `tailwind.config.*` file.
- Server components are the default; add `"use client"` only when browser APIs or hooks are needed.
- `GRAIN` (SVG noise texture) is exported from [lib/constants.ts](lib/constants.ts) and applied as an `opacity-[0.05]` overlay on dark sections.
- `cn()` in [lib/utils.ts](lib/utils.ts) combines `clsx` + `tailwind-merge`.
- `useScrollReveal` hook ([lib/useScrollReveal.ts](lib/useScrollReveal.ts)) provides IntersectionObserver-based fade-in — used by many section components.

### Component organisation

- **[components/](components/)** — page-level and layout components (Navbar, Footer, section blocks).
- **[components/ui/](components/ui/)** — lower-level UI primitives (accordion, badge, button, card, flip-card, particles, etc.) built on Radix UI primitives where applicable.
- Animations (Framer Motion / `motion`) are used in several components; import from `"motion/react"` not `"framer-motion"` directly.

### Contact form / email

[app/actions/sendEmail.ts](app/actions/sendEmail.ts) is a Next.js Server Action that uses **Nodemailer + Gmail**. Required env vars in `.env.local`:

```
GMAIL_USER=...
GMAIL_APP_PASSWORD=...
```

### SEO

- Per-page `metadata` exports handle title/description/OG tags.
- [app/sitemap.ts](app/sitemap.ts) and [app/robots.ts](app/robots.ts) are auto-generated routes.
- [components/JsonLd.tsx](components/JsonLd.tsx) injects structured data (Organization + Product schemas) on the homepage.
- `next.config.ts` adds a permanent redirect from `xiliherb.com` → `www.xiliherb.com`.

### Fonts

Montserrat (`--font-display`, headings) and Inter (`--font-body`, body) are loaded via Google Fonts in [app/globals.css](app/globals.css).
