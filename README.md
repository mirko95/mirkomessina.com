# Mirko Messina Site

Marketing site for selling custom websites, AI tools, and automations. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available scripts

- `npm run dev` starts the local dev server
- `npm run build` builds the production app
- `npm run start` runs the production server locally
- `npm run lint` runs a TypeScript validation pass
- `npm run typecheck` runs the same TypeScript validation explicitly

## Main files

- `app/` app router entry files
- `components/` landing page sections and shared UI
- `lib/site.ts` central site branding and contact config
- `public/icon.svg` SVG site icon

## Customization

Update `lib/site.ts` to change:

- name and role
- metadata title and description
- contact email
- LinkedIn and GitHub URLs

## Notes

- Interactive elements now use the hand cursor.
- The site branding has been switched from `Alex Chen` to `Mirko Messina`.
- Raster favicon references were removed in favor of SVG.
- The contact form currently opens a pre-filled email draft using `mailto:`. If you want real form delivery, connect it to Formspree, Resend, or a custom backend/API route.

## Deployment

This is a standard Next.js app. The simplest production path is a platform that supports Next.js directly, such as Vercel.

Build command:

- `npm run build`

Start command:

- `npm run start`

If you deploy elsewhere, keep the same commands and use the platform's recommended Node version for Next.js 16.
