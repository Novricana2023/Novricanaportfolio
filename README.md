# Novricana Viola Lungu — Portfolio

Personal portfolio for **Novricana Viola Lungu**: full-stack developer, AI engineer, digital trainer, and tech-for-impact leader.

## Live site structure

| Route | Page |
|-------|------|
| `/` | Home (full single-page portfolio) |
| `/about` | About |
| `/projects` | Projects |
| `/leadership` | Leadership & HealingTech |
| `/contact` | Contact |

## Tech stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4 + shadcn/ui
- Express (production server + SPA routing)
- Wouter (client routing)

## Local development

Requires **Node.js 22.13+** and **pnpm 10.4+**.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production build (local)

```bash
pnpm install
pnpm build
pnpm start
```

## Deploy on Render

This repo includes a [`render.yaml`](render.yaml) Blueprint. No extra env vars are required — all images are bundled in `client/public/images/`.

### Option A: Blueprint (recommended)

1. Push this repo to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com) → **New** → **Blueprint**
3. Connect the GitHub repo **Novricanaportfolio**
4. Render reads `render.yaml` and deploys as a **Static Site**

### Option B: Manual Static Site

If you already created a Static Site on Render, set these in **Settings**:

| Setting | Value |
|---------|-------|
| **Build command** | `npm install -g pnpm@10.4.1 && pnpm install --frozen-lockfile && pnpm run build:static` |
| **Publish directory** | `dist/public` |
| **Node version** | 22.13.0 |

Add a rewrite rule so routes like `/about` work: **Redirects/Rewrites** → `/*` → `/index.html` (Rewrite).

### Option C: Manual Web Service (Node + Express)

1. **New Web Service** → connect GitHub repo
2. **Runtime:** Node
3. **Build command:** `npm install -g pnpm@10.4.1 && pnpm install --frozen-lockfile && pnpm build`
4. **Start command:** `pnpm start`
5. **Node version:** 22.13.0
6. Do **not** set a publish directory (that is for Static Sites only)

### Troubleshooting

**`Publish directory dist/public does not exist`** — the build step did not run. Fix either:

1. **Update Build command** in Render Settings to:
   `npm install -g pnpm@10.4.1 && pnpm install --frozen-lockfile && pnpm run build:static`

2. Or **redeploy latest commit** — this repo includes a `postinstall` hook that auto-builds on Render when only `pnpm install` runs.

**Still failing?** In Render → your Static Site → **Settings** → confirm **Publish directory** is exactly `dist/public` (not `./dist` or `client/dist`).

## Project scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Vite dev server |
| `pnpm build` | Build frontend + server |
| `pnpm build:static` | Build frontend only (Render Static Site) |
| `pnpm start` | Run production server |
| `pnpm check` | TypeScript check |

## Author

**Novricana Viola Lungu**  
[LinkedIn](https://linkedin.com/in/novricana-viola-lungu-b5607212) · [GitHub](https://github.com/Novricana2023) · [Medium](https://medium.com/@novielungu)
