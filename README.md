# DELURA Events — Vercel Project (Vite + React + Tailwind)

### Quick Start
```bash
npm i
npm run dev
```

### Deploy (Vercel)
1) Push to GitHub:
```bash
git init
git add -A
git commit -m "Delura initial"
git branch -M main
git remote add origin https://github.com/<you>/deluraevents.git
git push -u origin main
```
2) Vercel → **New Project** → import `deluraevents` repo  
   - Framework Preset: **Vite**  
   - Build Command: `npm run build`  
   - Output Directory: `dist`

3) Environment Variables (Project → Settings → Environment Variables):
- `RESEND_API_KEY` — from Resend
- `FROM_EMAIL` — `delura@onresend.com`
- `TO_EMAIL` — your inbox (e.g., hello@deluraevents.com)
- *(optional)* `SHEETS_WEBHOOK_URL` — Google Apps Script / Zapier / Make

4) Buy Domain in Vercel: Settings → Domains → **Buy** `deluraevents.com` → Add to project → Make Primary → Add `www` and set Redirect.

### Scripts
- `npm run dev` — local dev
- `npm run build` — production build
- `npm run preview` — local preview of the dist build
