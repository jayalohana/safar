# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js with TypeScript and Tailwind CSS, confirmed by the user.

## Users

Listeners seeking a calm, culturally grounded road-trip music experience, especially for Pakistani long-distance journeys and nostalgic listening.

## Product Purpose

Safar is a one-page music journey. Visitors can immediately play a default playlist or select a Pakistani road route, which changes the soundtrack and surrounding environment while the interface stays fixed.

## Positioning

Safar treats the route as the environment and music as its soundtrack: playlist listening progress becomes an atmospheric simulation of physical journey progress.

## Operating Context

The product is used as a full-screen, desktop-first listening experience with responsive tablet and mobile layouts. Playback remains on one page and route selection is always visible.

## Capabilities and Constraints

- One shared cover-led player with play, pause, previous, next, seek, and timeline controls; playback progress is local until an audio source is connected.
- A default non-route playlist plus route-specific playlists.
- Route progress derived from completed track durations and current playback time, not GPS.
- Route backgrounds change only when the route changes, never when the track changes.
- No accounts, search, menus, modals, tabs, feeds, maps, or playlist-management interface.
- Browsers must not autoplay audible media on load.
- Route image libraries are explicitly incomplete; missing files use graceful fallbacks and named replacement paths.
- The cover-led player must remain visible and must not be obscured.

## Brand Commitments

- Product name: Safar (سفر).
- The supplied screenshot is the visual source of truth.
- Pakistani truck culture, regional landscapes, highways, and road-trip nostalgia are represented with restraint.
- The central Urdu wordmark remains dominant and stationary.
- The experience must feel like a Pakistani road journey containing a music player, not a generic music app with cultural decoration.

## Evidence on Hand

- Supplied reference screenshot: the only visual asset currently available.
- No production route backgrounds, isolated logos, truck layers, or final Spotify destination were supplied.
- Track metadata remains centralized in the data layer; the current cover-led player uses local optimistic progress until an audio source is connected.

## Product Principles

- The interface stays still while the journey changes around it.
- Playback must be immediate, legible, and genuinely functional.
- Negative space and cinematic atmosphere are product features.
- Route information remains subordinate to the Safar identity.
- Missing media should degrade quietly without breaking the experience.

## Accessibility & Inclusion

Keyboard-operable controls, clear focus states, sufficient contrast, correctly shaped Urdu text, accessible labels, touch-friendly controls, and reduced-motion support are required.
