# Changelog — Seduh Score

All notable changes to the Seduh Score coffee competition platform are documented here.

---

## [3.0.0] — Platform Launch: Seduh Score

### Changed
- **Project renamed** from BBTC-Score to **Seduh Score** — a multi-module coffee competition platform.
- Architecture restructured into modular layout:
  ```
  seduh-score/
  ├── index.html          ← dashboard launcher
  ├── bbtc/index.html     ← BBTC module (unchanged)
  ├── throwdown/index.html← Throwdown 1v1 module (new)
  └── shared/
      ├── theme.css       ← unified design system
      ├── timer.js        ← shared timer component
      ├── audience.js     ← shared audience overlay
      └── storage.js      ← localStorage wrapper
  ```
- Shared components extracted so timer, audience view, and storage are reusable across all modules with no code duplication.

### Added
- **Dashboard landing page** (`index.html`) — module selector with BBTC, Throwdown 1v1, and Liga Seduh (coming soon).
- **Throwdown 1v1 module** — individual competitor knockout bracket with:
  - 3–5 judges per match (configurable via slider; odd number recommended to avoid ties)
  - Randomized bracket generation with automatic bye assignment for odd participant counts
  - **Redemption round** — optional, configurable per round (Round 1, Round 2). Losers from selected rounds compete in a redemption bracket. Winners are randomized back into the main bracket. No redemption from QF and above.
  - Score entry via judge vote count (0 to N per competitor, constrained to total judges)
  - Auto-advance winners and auto-trigger redemption rounds
  - Champion display when bracket is complete
  - Audience view, standings, history, and timer — all shared components
  - Full localStorage persistence with reset option
  - Event name, date, and venue fields

---

## [2.0.0] — Bracket Engine, Timer & Design Overhaul (BBTC)

### Changed
- Colour system redesigned for WCAG AA contrast. Font switched to system-ui.
- Standings tab shows Preliminary round only (`calcPrelimLB()`).
- Tabs reorganised: Setup · Prelims · Bracket · History · Standings.
- localStorage key updated to `bbtc_v3`.

### Added
- Bracket engine with flexible seeding (8+ → QF, 4–7 → SF, 2–3 → Final).
- Bracket tab with visual slots and inline judge picking.
- ⏱ Timer overlay with 5/10/15 min presets and fullscreen mode.
- Auto-advancement of bracket winners after match finalisation.

---

## [1.6.0] — Audience View Refresh & CSV Export

### Changed
- Audience view redesigned to light theme.

### Added
- CSV export with leaderboard, match summary, and cup-by-cup data.

---

## [1.5.0] — Auto Winner Bonus & Event Info

### Changed
- Round winner bonus (+5) awarded automatically to team with more tokens.

### Added
- Event date and venue in Setup. Both appear in PDF export.

---

## [1.4.0] — PDF Export & localStorage Persistence

### Added
- A4 PDF export. localStorage persistence. Reset button. Audience overlay fix.

---

## [1.3.0] — Scoring Logic Overhaul

### Changed
- 0/1/2/3 button scoring with shared token constraint per cup.

### Added
- Token counter, finish time fields.

---

## [1.2.0] — Audience View

### Added
- Audience overlay for projector display. QF highlight contrast fix.

---

## [1.1.0] — Manual Match Creation

### Changed
- Removed auto match generation. Manual match creation with judge pool.

### Added
- History tab, Leaderboard with QF cutline.

---

## [1.0.0] — Initial Release (BBTC)

### Added
- BBTC team scoring: setup, manual matches, cup-by-cup scoring, bonuses.

---

## Modules

| Module | Status | Description |
|---|---|---|
| BBTC | ✅ Live | Brunei Barista Team Championship — team head-to-head with seeded bracket |
| Throwdown 1v1 | ✅ Live | Individual knockout bracket with optional redemption round |
| Liga Seduh | 🔜 Planned | Round robin league — full season standings and scheduling |
