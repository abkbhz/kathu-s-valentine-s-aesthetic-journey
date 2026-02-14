# Deploy to Vercel (automated)

## Option A: Vercel dashboard (easiest – auto-deploy on every push)

1. Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
2. Click **Add New…** → **Project**.
3. **Import** this repo (e.g. `kathu-s-valentine-s-aesthetic-journey`).
4. Leave **Framework Preset**: Next.js and **Build Command**: `npm run build` as-is → **Deploy**.
5. From now on, every push to `main` (or the branch you chose) will deploy automatically.

No GitHub Actions or tokens needed.

---

## Option B: GitHub Actions (deploy on push via workflow)

Use this if you want the deploy to run from GitHub Actions instead of Vercel’s built-in Git integration.

### One-time setup

1. **Create a Vercel project** (if you haven’t):
   - [vercel.com/new](https://vercel.com/new) → Import this repo → Deploy once.
   - Or run locally: `npx vercel link` and follow the prompts (then you can use `npm run deploy`).

2. **Get IDs and token**:
   - **Org & Project ID**: In the project folder run `npx vercel link`, then open `.vercel/project.json`. Use `orgId` as `VERCEL_ORG_ID` and `projectId` as `VERCEL_PROJECT_ID`.
   - **Token**: [vercel.com/account/tokens](https://vercel.com/account/tokens) → Create Token → copy it.

3. **Add GitHub secrets** (repo → Settings → Secrets and variables → Actions):
   - `VERCEL_TOKEN` = your token  
   - `VERCEL_ORG_ID` = from `.vercel/project.json`  
   - `VERCEL_PROJECT_ID` = from `.vercel/project.json`

After this, every push to `main` or `master` will run the workflow and deploy to Vercel.

---

## Manual deploy from your machine

```bash
npx vercel login    # once
npm run deploy      # or: npx vercel --prod
```

Your site will be live at the URL Vercel prints (e.g. `https://your-project.vercel.app`).
