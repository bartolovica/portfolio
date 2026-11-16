# Antun Bartolović – portfolio

Single-page portfolio for a Java / Spring Boot backend engineer. Static export of a
Next.js App Router site, deployed on Netlify.

- **Stack:** Next.js 16 (App Router, static export), TypeScript, Tailwind CSS 4, Framer Motion, next-themes
- **Content:** everything lives in [`src/content/site.ts`](src/content/site.ts). Components contain no hard-coded text.
- **Contact form:** Netlify Forms (no backend). The static form definition is in `public/__forms.html`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static site in ./out
```

## Deploy (Netlify)

Live site: **https://antunbartolovic.netlify.app** (Netlify project `antunbartolovic`, team `bartolovica`).
`netlify.toml` sets the build command (`npm run build`) and the publish directory (`out`).

Manual deploy from this folder (the site is already linked, see `.netlify/`):

```bash
npx netlify-cli deploy --build --prod
```

One-time steps left in the Netlify UI:

1. **Continuous deploys from GitHub:** *Site configuration → Build & deploy → Continuous deployment →
   Link repository → GitHub → bartolovica/portfolio*. After that every push to `main` deploys.
2. **Forms:** *Forms → Enable form detection*, then trigger one more deploy. Submissions of the
   `contact` form appear there; add an email notification under *Forms → Notifications*.
3. Optional: set `NEXT_PUBLIC_SITE_URL` if the site moves to a custom domain (used for the canonical
   link, Open Graph and the sitemap).

## Content TODOs (`TODO(antun)` in `site.ts`)

Sections stay hidden until these are filled in:

- `about`: 3–5 sentences for the About section
- `availability`: "Open to work / freelance" badge (or leave `null`)
- `cvUrl`: public CV PDF without phone number and date of birth, placed in `public/` (enables the "Download CV" button)
- `experience[].summary`: 2–3 sentences per position
- Projects: add a description and README to each GitHub repository and pin them on the profile
