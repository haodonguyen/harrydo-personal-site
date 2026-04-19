# Harry Do — Personal Portfolio

Personal portfolio and CV website for Harry Do (Nguyen Hao Do), Graduate Software Engineer based in Melbourne, Victoria.

**Live site:** [harrydo.vercel.app](https://harrydo.vercel.app)

---

## Tech Stack

- **Framework** — [Next.js 14](https://nextjs.org) (App Router)
- **Language** — TypeScript
- **Styling** — [Tailwind CSS](https://tailwindcss.com)
- **Animations** — [Framer Motion](https://www.framer.com/motion)
- **Icons** — [Lucide React](https://lucide.dev)
- **Deployment** — [Vercel](https://vercel.com)

## Sections

- **Hero** — Name, title, availability status, CTA buttons
- **About** — Bio and quick stats
- **Skills** — Tech stack grouped by category
- **Experience** — Work history (SEEDSoft, Groove Technology)
- **Projects** — Personal projects with stack and links
- **Education** — Degrees and certifications
- **Contact** — Email, LinkedIn, GitHub, phone

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Root layout, page, global styles
├── components/
│   ├── layout/       # Navbar, Footer
│   └── sections/     # One component per page section
├── lib/
│   ├── data.ts       # All CV content — edit here to update the site
│   └── utils.ts
└── types/            # Shared TypeScript types
public/
└── resume.pdf        # Downloadable CV
```

## Updating Content

All personal data lives in [`src/lib/data.ts`](src/lib/data.ts) — update that single file to change anything on the site (bio, experience, projects, skills, etc.).

## Deployment

Linked to Vercel — every push to `main` triggers an automatic deployment.

To deploy manually:

```bash
vercel --prod
```

## Contact

- **Email** — nguyenhao.do@gmail.com
- **LinkedIn** — [linkedin.com/in/nguyenhaodo](https://linkedin.com/in/nguyenhaodo)
- **GitHub** — [github.com/haodonguyen](https://github.com/haodonguyen)
