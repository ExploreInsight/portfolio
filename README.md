# Chirag Chandel · Portfolio

A Next.js portfolio with eight project pages and a print-friendly résumé.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run build` to compile for production and `npm run start` to serve the build.

Vercel production builds use the project's production domain for canonical links and the sitemap when system environment variables are available. Set `NEXT_PUBLIC_SITE_URL` in the production environment to override that domain. Leave it empty for local builds and previews so those pages remain unindexed. The app does not require a database or API keys.

Portfolio content lives in `content.ts`. Project covers use repository artwork or screenshots of the app with demo data. Live app links come from the corresponding GitHub repositories. Employer contributions use general descriptions. Exact employment dates, degree details, and a public email can be added once confirmed.
