# Vedanco Project

This repository contains the Vedanco website and related app setup.

## Project structure

- `index.html` — static landing page
- `styles.css` — styling for the landing page
- `script.js` — front-end interactivity
- `assets/` — static visual assets
- `frontend/` — React + Vite frontend app
- `backend/` — Express + MongoDB backend API

## Run locally

### 1) Frontend

```bash
cd frontend
npm install
npm run dev
```

### 2) Backend

```bash
cd backend
npm install
npm run dev
```

### 3) Static landing page

```bash
cd ..
py -m http.server 8000
```

Then open:

- http://localhost:8000

## GitHub setup

```bash
git add .
git commit -m "Initial commit"
```

Then create a GitHub repo and push:

```bash
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Notes

- Add your environment variables in `.env` files for the backend/frontend if required.
- Do not commit `node_modules`, build output, or `.env` files.
