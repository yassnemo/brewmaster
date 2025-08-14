# BrewMaster (Next.js + Tailwind)

A sleek, responsive coffee shop landing site built with Next.js, React, Tailwind CSS, and Radix UI components.

## Tech Stack
- Next.js 15
- React 19
- Tailwind CSS 3
- Radix UI + shadcn/ui-style components
- TypeScript

## Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Start the dev server
npm run dev

# 3) Build and run production
npm run build
npm start
```

App runs on http://localhost:3000 by default.

## Project Scripts
- `npm run dev` – Start Next.js in development mode
- `npm run build` – Build the production bundle
- `npm start` – Start the production server
- `npm run lint` – Run Next.js ESLint

## Troubleshooting
- "next is not recognized": Ensure dependencies are installed (`node_modules`) by running `npm install`.
- Peer dependency conflicts: We pin compatible versions in `package.json`. If you see install errors, try `npm install --legacy-peer-deps` or update the conflicting package.
- Port in use: Change the port via `PORT=3001 npm run dev` (on Windows PowerShell: `$env:PORT=3001; npm run dev`).

## License
MIT
