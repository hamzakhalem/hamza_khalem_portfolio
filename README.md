# Hamza Khalem | Software Engineer

Modern, responsive developer portfolio built with React, Vite, and TypeScript.

## About Me

I'm a Software Engineer building web platforms, APIs and AI-powered features.

I have experience developing and customizing enterprise-scale platforms, building RESTful APIs, and integrating AI capabilities into existing systems.

## Areas of Expertise

- **Software Engineering:** Python, Django, React, TypeScript, JavaScript, PHP.
- **Artificial Intelligence:** AI integrations, Deep Learning, Speech Recognition, OpenAI API.
- **Learning Management Systems:** Moodle Development, Plugin Development, Core Customization, LMS Integrations.

## Tech Stack

- React
- Vite
- TypeScript
- CSS3
- JavaScript
- Git & GitHub

## Résumé

The hero section includes a downloadable résumé. To update it, replace `public/resume.pdf`.

## Editing content

All copy (English, French, Arabic) lives in `src/content.ts`: hero, experience, projects, education, curated repositories, about and contact.

- **Articles:** add a Medium URL to `articleConfig.pinned` to show it first, or to `articleConfig.hidden` to hide it. At most three are shown, newest first.
- **SEO:** title, description, Open Graph, Twitter Card and JSON-LD tags are built in `src/seo.ts`. The share image is `public/og-image.png` (1200×630).

## Prerendering

`npm run build` builds the client, then renders static HTML for `/`, `/fr/` and `/ar/` (`scripts/prerender.mjs`), so every page's full content is in the initial response without JavaScript. The Medium feed is fetched at build time and refreshed in the browser.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/hamzakhalem/hamza-khalem-portfolio.git
cd hamza-khalem-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Contact

- **LinkedIn:** https://linkedin.com/in/hamza-khalem-436b29201
- **GitHub:** https://github.com/hamzakhalem
- **LeetCode:** https://leetcode.com/u/hamzakhalem97
- **Medium:** https://medium.com/@hoh_112/

## License

This project is personal portfolio software. All rights reserved.