# SonicRx — Next.js Website

A responsive, editable SonicRx company website built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Quick start

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Editing the website

- **Company copy, founder, awards, focus areas, email:** `src/data/site.ts`
- **Sections and layout:** `src/app/page.tsx`
- **Navigation:** `src/components/header.tsx`
- **Styles and responsive behavior:** `src/app/globals.css`
- **Browser title and SEO:** `src/app/layout.tsx`
- **Hero image:** `public/images/ultrasound-hero.webp`
- **Design concept reference:** `public/images/design-reference.png`

### Before publishing

1. Replace `contact@sonicrx.com` in `src/data/site.ts` with your verified contact email (the included email is a placeholder).
2. Add an authorized real founder photo if desired; the current founder panel deliberately uses a graphic placeholder rather than an AI-invented likeness.
3. Verify company claims, founder honors, and affiliation text before public launch. Awards listed are **founder awards**, not awards earned by SonicRx.
4. Add privacy policy and any required legal disclosures before collecting information through third-party services.
5. The illustration is AI-generated and **conceptual**, not evidence of experimental or clinical outcomes.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, select **Add New → Project** and import the repository.
3. Vercel detects Next.js automatically. Leave build command as `next build`.
4. Select **Deploy**. No environment variables are needed.
5. Connect your custom domain in Vercel's project settings when ready.

## Build locally

```bash
npm run build
npm run start
```

No backend, database, or API keys are required. The Contact button opens an email client (`mailto:`). This is a starter website, not a deployed production site.
