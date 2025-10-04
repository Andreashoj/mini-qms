# Mini QMS

Simple deployment setup - no GitHub Actions needed!

## Structure
- `/api` - Rails API backend
- `/client` - SvelteKit frontend

## Local Development

### Backend (Rails API)
```bash
cd api
bundle install
rails server
```
API runs at `http://localhost:3000`

### Frontend (SvelteKit)
```bash
cd client
cp .env.example .env  # First time only
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`

### Environment Variables

**Local Development (.env):**
```
PUBLIC_API_URL=http://localhost:3000
```

**Production (Netlify Dashboard):**
- Add environment variable: `PUBLIC_API_URL=https://mini-qms-1.onrender.com`

## Deployment

### Frontend (Netlify)
1. Go to Netlify dashboard
2. "Add new site" → "Import from GitHub"
3. Select this repo
4. Netlify will auto-detect settings from `netlify.toml`
5. Add environment variable `PUBLIC_API_URL` in Site Settings

### Backend (Render)
1. Go to Render dashboard
2. "New" → "Blueprint"
3. Select this repo
4. It will use `render.yaml` configuration
5. Add `RAILS_MASTER_KEY` environment variable

## Live URLs
- Frontend: https://mini-qms.netlify.app/
- Backend: https://mini-qms-1.onrender.com
