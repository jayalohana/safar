# Safar

A one-page Pakistani road-journey music player built with Next.js and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Required production assets

The supplied illustrated truck scene is stored at `public/assets/safar-main-background.png` and is used as the default scene and the graceful fallback when a route-specific image is unavailable.

Replace the centralized placeholder paths in `lib/safar-data.ts` with supplied production assets:

- Route backgrounds: `public/assets/routes/<route-id>.webp`
- Optional isolated brand lockup and truck layers can replace the typographic fallback and subtle CSS road movement.

Playback uses the official YouTube IFrame Player API. Track video IDs live in the centralized `songbook` inside `lib/safar-data.ts`; replace or expand those IDs to change the soundtrack. The embedded player remains visibly at least 200×200 px to comply with YouTube's embedded-player requirements.

Set `NEXT_PUBLIC_SAFAR_SPOTIFY_URL` to the final Safar Spotify destination.
