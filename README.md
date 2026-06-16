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
3. Connect the GitHub repo
4. Render reads `render.yaml` and deploys automatically

### Option B: Manual Web Service

1. **New Web Service** → connect GitHub repo
2. **Runtime:** Node
3. **Build command:** `npm install -g pnpm@10.4.1 && pnpm install --frozen-lockfile && pnpm build`
4. **Start command:** `pnpm start`
5. **Node version:** 22.13.0
6. Deploy

Render sets `PORT` automatically. The Express server binds to `0.0.0.0` and serves the built app from `dist/public/`.

## Project scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Vite dev server |
| `pnpm build` | Build frontend + server |
| `pnpm start` | Run production server |
| `pnpm check` | TypeScript check |

## Author

**Novricana Viola Lungu**  
[LinkedIn](https://linkedin.com/in/novricana-viola-lungu-b5607212) · [GitHub](https://github.com/Novricana2023) · [Medium](https://medium.com/@novielungu)
