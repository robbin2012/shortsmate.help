Help Center docs site built with [Next.js](https://nextjs.org) + [Nextra](https://nextra.site/). Content lives in `content/` with locale folders for Chinese and English.

## Quick start

```bash
npm run dev
```

Visit http://localhost:3000 to view the docs (the homepage redirects to `/zh-CN`). English is available at `/en`.

## Where to edit

- `content/zh-CN/` and `content/en/` — add `.mdx` files to create new pages. Navigation order is defined in `_meta.ts`.
- `app/[lang]/layout.tsx` — configure logo, search placeholder, footer text, and other theme options.

## Build & deploy

```bash
npm run build
npm run start
```

The site can be deployed on any Next.js-compatible platform (e.g., Vercel) using the default build command.
