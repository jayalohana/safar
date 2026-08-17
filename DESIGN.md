---
name: Safar
description: Music for the road between places.
colors:
  midnight-road: "#08090f"
  smoked-ink: "#111018"
  journey-cream: "#f7eddb"
  muted-cream: "#d9cab4"
  road-brass: "#d9a83f"
  bright-brass: "#f2c75f"
  deep-brass: "#9e6922"
typography:
  display:
    fontFamily: "Noto Nastaliq Urdu, Noto Sans Arabic, Segoe UI, Georgia, serif"
    fontSize: "clamp(7.2rem, 10vw, 10rem)"
    fontWeight: 700
    lineHeight: 0.7
    letterSpacing: "-0.1em"
  body:
    fontFamily: "Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(14px, 1.08vw, 18px)"
    fontWeight: 500
    lineHeight: 1.35
  label:
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  artwork: "8px"
  player: "28px"
  control: "50%"
spacing:
  xs: "8px"
  sm: "14px"
  md: "22px"
  lg: "28px"
components:
  player-surface:
    backgroundColor: "rgba(19, 17, 24, 0.79)"
    textColor: "{colors.journey-cream}"
    rounded: "{rounded.player}"
    padding: "14px 16px 12px"
  play-control:
    backgroundColor: "{colors.journey-cream}"
    textColor: "{colors.smoked-ink}"
    rounded: "{rounded.control}"
    size: "56px"
  route-active:
    textColor: "{colors.bright-brass}"
    typography: "{typography.body}"
---

# Design System: Safar

## Overview

**Creative North Star: "The Living Motorway"**

Safar is a cinematic listening surface in which the interface remains calm and fixed while the road environment changes around it. The visual world comes from midnight asphalt, brass ornament, cream sign-painting, Pakistani truck detail, and the glow of a long journey after dusk. Negative space carries as much weight as the controls.

The system is restrained rather than decorative: cultural character appears through the central Urdu identity, selective brass geometry, route language, and environmental photography. It explicitly avoids generic streaming dashboards, dense card systems, and novelty truck-art collage.

**Key Characteristics:**

- Full-bleed road atmosphere with one stationary interface.
- Brass is rare, directional, and meaningful.
- Large Urdu identity; small editorial English labels.
- One integrated smoked player surface, not a family of cards.
- Motion is slow, environmental, and disabled for reduced-motion users.

## Colors

The palette is a near-black night field illuminated by cream type and weathered brass.

### Primary

- **Bright Road Brass** (#f2c75f): active routes, Urdu identity, progress, focus, and small wayfinding marks.
- **Road Brass** (#d9a83f): rules, dividers, and quieter ornament.

### Neutral

- **Midnight Road** (#08090f): page and fallback scene ground.
- **Smoked Ink** (#111018): player interiors and deep tonal layering.
- **Journey Cream** (#f7eddb): primary text and the play control.
- **Muted Cream** (#d9cab4): artists, labels, and secondary controls.

**The Brass Rarity Rule.** Brass marks identity, active state, progress, and direction; it never becomes a broad decorative fill.

## Typography

**Display Font:** Noto Nastaliq Urdu / Arabic-capable fallbacks  
**Body Font:** Avenir Next with Helvetica fallbacks  
**Label/Mono Font:** SFMono-Regular with Consolas and Liberation Mono fallbacks

**Character:** Urdu is gestural and dominant. English is quiet, widely tracked, and editorial; measurement labels use tabular numerals and compact mono type.

### Hierarchy

- **Display** (700, `clamp(7.2rem, 10vw, 10rem)`, 0.7): the single central سفر identity.
- **Title** (600, `clamp(22px, 1.72vw, 29px)`, 1.12): current track title.
- **Body** (500, `clamp(14px, 1.08vw, 18px)`, 1.35): route names and artist metadata.
- **Label** (500, 8–12px, 0.10–0.32em, uppercase): route heading, tagline, timing, and player status.

**The Two-Voices Rule.** Expressive Urdu leads; English supports through clean small-scale typography and never competes at display size.

## Layout

The surface fills `100vw × 100dvh` and normally does not scroll. Brand and routes float at the left, Spotify sits top-right, the identity and route statistics share a centered vertical band, and the player anchors low and compact. The desktop player is a short pill roughly 500–590px wide and 122px tall, with a 92px cover-led animated artwork, inline controls, and a thin timeline rail; mobile remains full-width with a 112px cover and stacked controls.

Breakpoints at 1180, 900, 640, and 390px progressively tighten the composition. At mobile width, routes become a plain horizontally scrollable text rail with 44px targets, journey stats become a 2×2 grid, and the compact player stacks its controls beneath the cover/media row. The player remains within the first viewport at 390×844.

## Elevation & Depth

Depth is atmospheric: dark tonal masks preserve legibility over photography, while the player uses a smoked translucent surface, warm edge, deep offset shadow, and restrained backdrop blur. Small controls remain flat until hover; the play button receives the only concentrated lift.

### Shadow Vocabulary

- **Player separation** (`0 0 0 14px rgba(5,6,11,.72), 0 22px 58px rgba(0,0,0,.5)`): separates the single player from the road without turning it into a dashboard card.
- **Control lift** (`0 4px 19px rgba(241,195,95,.17)`): reserved for the central play/pause control.

**The One-Surface Rule.** The player may float; route items, journey metrics, and identity remain typographic and unboxed.

## Shapes

The player uses one modest 28px cinematic enclosure. Video/artwork corners are 8px. Circular geometry is reserved for playback, route dots, pins, and timeline thumbs. Hairline brass rules and vertical dividers echo roadside markers without becoming ornamental frames.

## Components

### Playback Controls

- **Shape:** circular, 44px minimum targets; central control is 56px across desktop and mobile.
- **Primary:** cream fill with near-black icon.
- **Hover / Focus:** slight lift, warm tint, and a 2px bright-brass focus ring.
- **Secondary:** transparent seek/previous/next controls in muted cream.

### Player Surface

- **Corner Style:** 28px desktop, 19px mobile.
- **Background:** smoked near-black translucent gradient.
- **Border:** one low-contrast warm 1px edge.
- **Media:** cover artwork remains visible and unobscured, with a slow road-mark animation that becomes static under reduced motion.

### Navigation

Routes are plain text with a thin brass indicator and small dot only in the active state. Desktop routes form a quiet vertical rail. Mobile routes stay unboxed and scroll horizontally with 44px hit areas.

### Journey Progress

Four values use tabular numerals, small brass line icons, and hairline vertical separators. They are never enclosed in a card and render only for an active route.

## Do's and Don'ts

### Do:

- **Do** preserve the stationary brand, identity, routes, and player while backgrounds change.
- **Do** keep route imagery full-bleed and dark enough for cream text.
- **Do** use route progress from real playback time and declared playlist durations.
- **Do** keep the cover artwork visible and unobscured.
- **Do** maintain 44px touch targets and visible focus rings.

### Don't:

- **Don't** add generic music navigation, search, accounts, modal browsers, tabs, or card grids.
- **Don't** change the environment when a track changes; only route changes move the world.
- **Don't** use brass as a broad background or bright-white streaming-app chrome.
- **Don't** let playback controls obscure the cover artwork or use generic streaming-app chrome.
- **Don't** make road/truck motion fast, playful, or arcade-like.
