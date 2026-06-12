# Seduh Score — Design System

A warm, competition-room design system for **Seduh Score**, a coffee-competition management platform built and owned by **Firdaus Omar of Grey Matter Coffee Werks**, Brunei. Seduh Score runs live scoring, knockout brackets, round-robin leagues, timers and audience displays across multiple competition formats — for organisers in Brunei and Southeast Asia.

The system is tuned to read **under pressure in a competition room**, not to decorate a marketing site. The closest reference point is a well-designed independent coffee publication — warm, precise, technical — not a SaaS dashboard.

---

## Sources

This system was reconstructed from the live platform. Future sessions should explore these to build with higher fidelity:

- **GitHub — production codebase:** [`mfosa7222/Seduh-Score`](https://github.com/mfosa7222/Seduh-Score)
  - `shared/theme.css` — the v4.0 production design tokens & component classes (the contract this system mirrors)
  - `index.html` — the platform dashboard (hero layouts, module grid, "Make it your own" sheet)
  - `throwdown/index.html` — the 1v1 knockout module (recreated as a UI kit here)
  - `timer/index.html`, `shared/timer.js`, `shared/audience.js` — projector overlays (timer + audience)
- **Uploaded brand assets** (`uploads/`, copied into `assets/`): Seduh bean mark (colour + greyscale), Grey Matter Coffee Werks lockup.

> The receiving reader may not have access to the repo — links are stored here in case they do. Diff any `theme.css` integration against the production `shared/theme.css`.

---

## Content fundamentals

How Seduh Score writes copy — match this voice in every surface.

- **Tone:** warm but not soft, confident, plain. Built by the coffee community, for it. Never corporate, never hype.
- **Casing:** sentence case everywhere — headings, buttons, labels. Mono eyebrows/labels are the only UPPERCASE (e.g. `QUARTER FINALS · MATCH 3`).
- **Person:** second person to the organiser — "Your changes save to this device", "Add at least 2 participants". First person is avoided.
- **Punctuation:** em-dashes for rhythm — "Sixteen baristas, one bracket, last cup standing." Mid-sentence dashes, not semicolons.
- **Emoji:** used sparingly and functionally as wayfinding glyphs on module/tool cards and status lines (☕ ⚡ 🏆 ⏱ 📺 ▶ 🔄 🎫), never decoratively in body copy.
- **Vibe:** competition-room clarity. Tell the organiser exactly what's happening and what to do next.

**Sounds like Seduh:** "Last cup standing." · "Ready to score" · "Your changes save to this device."
**Not Seduh:** "Leverage our platform to optimise…" · "OOPS! Something went wrong 😬" · "CLICK HERE TO GET STARTED NOW!!"

---

## Visual foundations

- **Colour:** warm coffee neutrals, never cold grey. Paper background `--bg #f3efe8`, espresso ink `--ink/--txt #211a14`, white surfaces. The house accent is **Seduh Amber `--am #b45309`** — a brand constant, not a default orange. Semantic colours are **functional, not decorative**: blue = rounds, green = completion/winners, purple = redemption, red = destructive/ties. The "Make it your own" layer lets an organiser override `--accent`, but amber is the default identity.
- **Type:** three Google Fonts — **Bricolage Grotesque** (display/headings, tight `-.03em`, weights 700/800), **Hanken Grotesk** (body/UI, 400–700), **Space Mono** (eyebrows, labels, numeric scores; UPPERCASE with `.12–.20em` tracking, tabular numerals). Craft + precision.
- **Spacing & radius:** 4px base scale. Soft warm corners — `--rad 14px` for cards/modules, `--rad-s 9px` for inputs/buttons, pills for chips/badges.
- **Backgrounds:** flat warm paper. No gradients on content (one subtle accent-tint band on the dashboard hero only), no photographic full-bleeds, no repeating patterns. Imagery is the organiser's own logo/poster, dropped into dashed logo slots.
- **Shadows:** **brown-tinted**, never neutral grey — `rgba(60–70,40–45,20,…)` — so cards sit on warm paper. `--shadow-sm` (cards), `--shadow-md` (hover lift), `--shadow-lg` (sheets/overlays).
- **Borders:** warm hairlines `--border #e5ddd0`. Status is communicated with a coloured **left rail** (`border-left:4px`) on match cards and leaderboard rows.
- **Cards:** white surface, 1px warm hairline, 14px radius, small brown shadow, optional mono-uppercase header strip on a faint fill.
- **Animation:** restrained. A single `rise` entrance (14px up, .55s, cubic-bezier(.2,.7,.3,1)) staggered on dashboard sections; the live-status dot pulses; the customise sheet slides over. All gated behind `prefers-reduced-motion`. No bounces, no infinite decorative loops.
- **Hover:** lift + deepen shadow (module cards translateY(-4px)); buttons darken to the `-h` token. **Press:** subtle `scale(.99)`.
- **Transparency/blur:** only the sticky platform header (`rgba(255,255,255,.86)` + `backdrop-filter: blur(12px)`) and modal scrims.
- **Projector overlays:** invert to dark (`#1c1510`) for the timer, with huge Bricolage tabular digits; the audience overlay stays on warm paper for legibility from the back of the room.

---

## Iconography

- **The Seduh mark — “brew waves”.** Seduh Score has its **own** primary mark: a pour radiating outward in three concentric arcs above a drop, reading as an **S** for *seduh* (Malay, “to brew”). Single-colour, uses `currentColor`, and replaces the old amber rail in the platform header lockup. Master vector **`assets/seduh-mark.svg`**; favicons in `assets/` (`favicon.svg`, `favicon-32.png`, `favicon-16.png`, `apple-touch-icon.png`). Recolour by setting `color:` on the parent. Exploration: `guidelines/brand-bean.card.html` (five brewing concepts, tweakable); finalised spec: `guidelines/brand-seduh-mark.card.html`. **The Grey Matter coffee-bean is the *parent brand’s* mark — never use it as the Seduh mark.**
- **No icon font or sprite** ships in the production codebase. Iconography is a small set of **inline stroke SVGs** (1.5–2px stroke, round caps/joins, `currentColor`) — used for hero metadata (calendar, pin), nav arrows, and the customise sliders/close. These are inlined in the UI-kit JS (`SD_ICONS` in `DashboardScreen.jsx`); reuse that style for any new icon (Lucide is the closest CDN match if you need more — flag the substitution).
- **Emoji as functional glyphs:** module and tool cards use single emoji as recognisable category marks (☕ BBTC, ⚡ Throwdown, 🏆 Liga, ⏱ Timer, 📺 Audience, 💾 Auto-save) and status lines use ▶ 🔄 🎫 🏆. This is intentional brand vocabulary — keep it sparing and consistent; never use emoji in running body copy.
- **Logos** (`assets/`): `seduh-mark.svg` (the Seduh brew-waves mark — platform identity); `logo-bean-colour.png` / `logo-bean-greyscale.png` (the Grey Matter coffee-bean) and `logo-gmcw-full.png` (Grey Matter Coffee Werks parent lockup — teal `#3197a7`, ink `#333333`, grey `#4d4d4d`).

---

## Index / manifest

**Foundations**
- `styles.css` — entry point (`@import` list only).
- `theme.css` — flattened single-file build for production hand-off / diffing.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `patterns/` — `components.css` (buttons, cards, badges, tabs, chips, leaderboard, platform header), `dashboard.css` (hero layouts, module grid, customise sheet, footer), `overlays.css` (`#tmr-overlay` / `#aud-overlay` — runtime contract, do not rename).

**Foundation specimen cards** (`guidelines/*.card.html`) — Colors, Type, Spacing, Brand groups in the Design System tab.

**Components** (React, namespace `SeduhScoreDesignSystem_adbec7`)
- `components/core/` — `Button`, `Badge`, `Card`, `Tabs`, `Field`.
- `components/competition/` — `BracketSlot`, `LeaderboardRow`, `MetaChip`, `StatusPill`.
- Each ships `<Name>.jsx` + `.d.ts` + `.prompt.md`; one `*.card.html` per directory.

**UI kits** (`ui_kits/*/index.html`)
- `dashboard/` — the platform landing view: lockup header, event hero (Band / Editorial / Ticket), competition-format module grid, tools strip, footer, live "Make it your own" customise sheet.
- `throwdown/` — interactive 1v1 knockout module: tabs (Setup / Bracket / History / Standings), the bracket of match cards, a vote-entry modal, computed standings, and the projector audience overlay. Preloaded with the "Girls Got Drip Vol. 0" demo.

**Assets** (`assets/`)
- `seduh-mark.svg` — the brew-waves Seduh mark (recolour via `currentColor`); `favicon.svg` / `favicon-32.png` / `favicon-16.png` / `apple-touch-icon.png` — favicon set.
- `logo-gmcw-full.png`, `logo-bean-colour.png`, `logo-bean-greyscale.png` — Grey Matter Coffee Werks parent brand.

**Hand-off** — `HANDOFF.md` (token diff guidance for integrating into production).

---

## Using this system

- **Throwaway artifacts** (slides, mocks, prototypes): copy assets out of `assets/`, link `styles.css`, and build static HTML using the token + pattern classes.
- **Production work:** read the tokens and `HANDOFF.md`, then diff `theme.css` against the live `shared/theme.css` before integrating. The contract tokens (`--txt*`, `--am*`, `--bl/gn/rd/pu*`, `--accent*`) and the `.tmr-*` / `.aud-*` overlay classes must never be renamed.
