# alex kang — portfolio

Terminal-themed personal site. Static, no backend, no database. Built with Next.js 16 (App Router) + Tailwind v4, deployed on Vercel.

## Run locally

```bash
cd site
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Deploy to Vercel

The app lives in the `site/` subfolder, so Vercel needs to know that.

**Option A — Vercel dashboard (recommended)**

1. Push this repo to GitHub.
2. vercel.com → *Add New Project* → import the repo.
3. Under **Root Directory**, click *Edit* and select `site`.
4. Framework preset auto-detects as Next.js. Leave build settings as-is. Deploy.

**Option B — CLI**

```bash
npm i -g vercel
cd site
vercel          # preview deploy
vercel --prod   # production deploy
```

Run from inside `site/` and Vercel treats it as the project root automatically.

### Custom domain

Vercel dashboard → Project → **Settings → Domains** → add your domain, then point your registrar's nameservers (or an `A` / `CNAME` record) at Vercel as instructed there.

After the domain is live, set one env var so canonical URLs, `sitemap.xml`, `robots.txt` and social preview images resolve correctly:

**Settings → Environment Variables**

| Key | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` |

Redeploy after adding it. Until then it falls back to `https://alexkang.vercel.app`.

## Editing content

Almost everything you'll want to change lives in one file: [`lib/data.ts`](lib/data.ts).

| What | Where in `lib/data.ts` |
| --- | --- |
| Name, email, socials, résumé path, "currently building" | `site` |
| Featured project cards (blurb, stack, links, terminal preview) | `projects` |
| Jobs | `experience` |
| Research roles | `research` |
| Skill tiles (token, label, colour) | `skills` |
| The `cat skills.txt` panel | `skillGroups` |
| Degrees | `education` |

Prose that isn't in `data.ts`:

- About-me paragraphs → [`components/About.tsx`](components/About.tsx)
- The quote → [`components/Quote.tsx`](components/Quote.tsx)
- Contact intro copy and the "based in" row → [`components/Contact.tsx`](components/Contact.tsx)
- Hero headline → [`components/Hero.tsx`](components/Hero.tsx)

### Terminal previews

Each project card renders a fake shell session from `project.terminal`:

```ts
terminal: {
  cmd: "clawlet buy --item 'groceries' --usdc 60",
  out: [
    "→ wallet CLaW7f…q4CLaW · 214.30 USDC",   // muted grey
    "✓ settled in 1 block · card redeemed",   // green (leading ✓)
    "! drift: rds.class m5.large ≠ t3.medium", // amber (leading !)
  ],
}
```

Lines are single-line and clipped with an ellipsis — **keep them under ~42 characters** or they'll truncate on desktop.

### Swapping assets

- Photo → replace `public/profile.png`
- Résumé → replace `public/Alex_Kang_Resume.pdf` (keep the filename, or update `site.resume`)
- Favicon → edit `app/icon.svg`

### Theme colours

All colours are CSS variables in the `@theme` block of [`app/globals.css`](app/globals.css) — `--color-violet` is the main accent.

## Structure

```
site/
├── app/
│   ├── layout.tsx      # metadata, OG tags, Fira Code font
│   ├── page.tsx        # section order
│   ├── globals.css     # theme tokens + animations
│   ├── icon.svg        # favicon
│   ├── robots.ts
│   └── sitemap.ts
├── components/         # one file per section
├── lib/data.ts         # all content
└── public/             # photo + résumé
```
