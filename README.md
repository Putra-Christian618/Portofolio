# Christian Putra — Technical Portfolio

Personal portfolio website showcasing machine learning research, deep learning systems, data engineering pipelines, and data analytics projects.

**Live Site:** [https://christianputra-portfolio.pages.dev](https://christianputra-portfolio.pages.dev)

## Preview

![Portfolio Preview](./public/og-image.png)
*(Placeholder: replace `public/og-image.png` with a `1200x630` screenshot of the homepage)*

## Tech Stack

- **Framework:** Next.js (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Graphics:** Custom HTML5 Canvas (`TopologicalMesh`)
- **Hosting:** Cloudflare Pages

## Project Structure

```text
├── app/
│   ├── about/              # Personal background & technical focus
│   ├── projects/           # Project archive & dynamic [slug] case studies
│   ├── resume/             # Education, projects, and tiered skills
│   ├── globals.css         # Theme tokens & dark-mode base styles
│   ├── layout.tsx          # Root layout, fonts, and global metadata
│   ├── page.tsx            # Homepage (hero & 3 featured projects)
│   ├── robots.ts           # Static robots.txt generator
│   └── sitemap.ts          # Static sitemap.xml generator
├── components/
│   ├── Navbar.tsx          # Responsive navigation with active route state
│   ├── ProjectCard.tsx     # Project summary card & status badge
│   └── TopologicalMesh.tsx # Lightweight HTML5 Canvas cluster animation
├── lib/
│   ├── projectsData.ts     # Structured project & case study data
│   └── siteConfig.ts       # Single source of truth for identity & links
├── public/                 # Static assets (cv-christian.pdf, og-image.png)
└── types/
    └── index.ts            # TypeScript interfaces for project models