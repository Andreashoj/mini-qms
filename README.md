# Mini QMS

Simple deployment setup - no GitHub Actions needed!

## Structure
- `/api` - Rails API backend
- `/client` - SvelteKit frontend

## Deployment

### Frontend (Netlify)
1. Go to Netlify dashboard
2. "Add new site" → "Import from GitHub"
3. Select this repo
4. Netlify will auto-detect settings from `netlify.toml`

### Backend (Render)
1. Go to Render dashboard
2. "New" → "Blueprint"
3. Select this repo
4. It will use `render.yaml` configuration
