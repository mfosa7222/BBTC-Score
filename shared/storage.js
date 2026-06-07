/* ─────────────────────────────────────────
   Seduh Score — Shared Storage Wrapper
   Usage: Store('key').save(obj) / .load() / .clear()
───────────────────────────────────────── */
const Store = key => ({
  save: obj => { try { localStorage.setItem(key, JSON.stringify(obj)); } catch(e) {} },
  load: ()  => { try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : null; } catch(e) { return null; } },
  clear: ()  => { try { localStorage.removeItem(key); } catch(e) {} },
});
