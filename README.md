# harrydo.dev — Personal Portfolio

> A fast, modern portfolio built to get me hired. Clean design, real projects, zero fluff.

[![Live](https://img.shields.io/badge/Live-harrydo.dev-blue?style=flat-square&logo=vercel)](https://harrydo-personal-site.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

---

## Overview

Single-page portfolio for **Harry Do** — Software Engineering graduate (WAM 81/100, La Trobe High Achiever Scholar) seeking graduate/junior engineering roles across Australia.

Sections: Hero → About → Experience → Projects → Testimonials → Education → Contact

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter + JetBrains Mono |
| Deployment | Vercel |

---

## Features

- **Single-page SPA** — smooth scroll with active nav highlight
- **Framer Motion animations** — scroll-triggered fade-ups, stagger children
- **Metric badges** — inline callouts for quantified achievements (↓ ~20% latency, ↑ 3× throughput)
- **Optimized images** — `next/image` with WebP + lazy loading
- **Downloadable resume** — always in sync with site content
- **Fully responsive** — mobile-first, tested across breakpoints

---

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata
    page.tsx          # Single page — all sections
    globals.css       # Tailwind base + CSS vars
  components/
    layout/           # Navbar, Footer
    sections/         # Hero, About, Experience, Projects, Testimonial, Education, Contact
    ui/               # CustomCursor, reusable primitives
  lib/
    data.ts           # All CV content (single source of truth)
  types/
    index.ts          # Shared TypeScript interfaces
public/
  images/             # Company logos, profile photo
  resume.pdf          # Downloadable CV
```

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run lint      # ESLint
```

---

## Content Updates

All personal data lives in [`src/lib/data.ts`](src/lib/data.ts) — edit there and changes propagate across the entire site automatically.

---

## License

MIT — feel free to fork and adapt for your own portfolio.
