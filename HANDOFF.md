# Seduh Score — Design → Code Handoff

_Status: dashboard redesign + refreshed shared theme, smoke-tested against
BBTC & Throwdown. Pulled from `mfosa7222/Seduh-Score@main`, ready to push back._

This project is now a **clean mirror of the repo** plus this handoff note. When
in doubt, these files are the source of truth.

```
index.html            ← REDESIGNED dashboard (was the simple .ds-* list)
shared/theme.css      ← REFRESHED v4.0 design system (superset — see below)
shared/timer.js       ← unchanged from repo
shared/audience.js    ← unchanged from repo
shared/storage.js     ← unchanged from repo
bbtc/index.html       ← unchanged from repo (inherits new theme)
throwdown/index.html  ← unchanged from repo (inherits new theme)
README.md  CHANGELOG.md  .gitignore
HANDOFF.md            ← this file
```

Only **two files changed** vs. repo `main`: `index.html` and `shared/theme.css`.
Everything else is byte-for-byte the repo. No build step, no dependencies.

---

## What changed

### 1. `index.html` — redesigned dashboard
- Permanent **Seduh Score / Grey Matter** platform lockup (header) + permanent
  Firdaus credit (footer) — roadmap **v4.1 IP**, cannot be customized away.
- New **"Make it your own"** slide-over: competition name, subtitle, date,
  venue, **accent colour** (6 coffee tones, amber default), **logo upload**,
  and **3 cover layouts** (Band / Editorial / Ticket).
- Vanilla JS, persists to `localStorage` key `seduh_event_v1` (logo as dataURL).

### 2. `shared/theme.css` — refreshed v4.0 (IMPORTANT: it's a SUPERSET)
The refresh is a **strict superset** of the v2.0 theme, so the modules inherit
the new look with **zero markup changes** (roadmap **v3.4 cohesion**). What was
preserved on purpose, because BBTC/Throwdown + the shared JS depend on it:

- **Token NAMES kept**: `--txt / --txt2 / --txt3`, `--border / --border2`,
  `--am* / --bl* / --gn* / --rd* / --pu*`, `--rad / --rad-s`. Only the *values*
  were warmed up. (New tokens were ADDED for the dashboard: `--ink*`,
  `--surface2/3`, `--border3`, `--am-soft`, `--accent*`, `--rad-xs`, font vars.)
- **Shared overlay classes kept verbatim** (their class/ID names are generated
  at runtime by `timer.js` / `audience.js`):
  - Timer: `#tmr-overlay`, `#tmr-display`, `[data-secs].on`, `.tmr-extras`,
    `.tmr-presets`, `.tmr-preset`, `.tmr-controls`, `.tmr-btn`,
    `.tmr-start/pause/reset`, `.tmr-footer`, `.show/.running/.done/.fs`.
  - Audience: `#aud-overlay`, `.aud-banner`, `.aud-ac`, `.aud-title-block`,
    `.aud-title/.aud-sub`, `.aud-module-tag`, `.aud-ts`, `.aud-close`,
    `.aud-body`, `.aud-panel`, `.aud-sec-title`, `.show`.
- `.plat-hdr` is **shared** between the dashboard and Throwdown's module header —
  the refreshed style serves both.

> ⚠️ **Regression guard for future theme edits:** never rename `--txt*` or any
> `.tmr-*` / `.aud-*` class, and never drop the timer/audience overlay blocks.
> Renaming text tokens silently kills module text colour; dropping overlay
> classes breaks the projector timer and audience view. Both were caught and
> fixed during this pass — keep them.

### Smoke test (done this pass)
✅ BBTC renders (text colour, amber accents, cards, tabs)
✅ Throwdown renders (shared `.plat-hdr`, tabs, slider)
✅ Timer overlay (presets, start/pause/reset, fullscreen)
✅ Audience overlay (two-panel standings/results, one-line title)
✅ Dashboard (hero, 3 layouts, accent switch, logo upload, persistence)

### Known follow-up (module-level, not theme)
- Throwdown's audience banner shows a tiny empty module-tag pill — it's set by
  Throwdown's own `showAudience()` passing an empty tag, not a theme issue.
- BBTC & Throwdown still use `font-family:system-ui` in their own `<style>`
  blocks, so their body text isn't Bricolage/Hanken yet. Colours/tokens are
  unified; swapping their inner font is an optional later cohesion step.

---

## How to push back to GitHub
Claude's GitHub link here is **read-only** (pull/import only — no commit/push).
So the loop is: **Claude pulls + edits → you commit + push.**

1. Download the zip Claude provides (or pull these files from the project).
2. Drop into your local clone, preserving paths:
   - `index.html` → repo root `index.html`
   - `shared/theme.css` → `shared/theme.css`
   - (the rest are unchanged — no need to copy)
3. `git add index.html shared/theme.css && git commit -m "Redesign dashboard + refresh shared theme (v3.4 cohesion)" && git push`

Suggested CHANGELOG entry: a `[4.0]` "Platform refresh" note — new dashboard,
warm design system, Make-it-your-own event layer.

---

## Two-conversation workflow
- **Design thread** (the other chat): look, layout, customization flow, future
  module visuals. Output = files in this project.
- **Code thread** (Chat › Projects › Project Seduh): wiring, Liga Seduh logic,
  Seduh ID, deploys. Start it with: _"use the files in the project root —
  see HANDOFF.md."_
- The bridge is the **project filesystem**, which both threads share. The
  Roadmap.pdf is best pinned in **Project knowledge** for always-on context.

## Forward-compat seams
- **Liga Seduh (v4.0)**: add a 4th entry to the `MODULES` array in `index.html`,
  set `live:true`, point `href` at `liga/index.html`.
- **Seduh ID (v5.0)**: event/participant data are plain objects — the registry's
  shared name pool can populate them later.
