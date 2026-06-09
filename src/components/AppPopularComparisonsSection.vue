<template>
  <section
    id="prevest-section-popular-comparisons"
    data-prevest-section="popular-comparisons"
    class="pc"
    :class="isDark ? 'pc--dark' : 'pc--light'"
  >
    <!-- Top separator line -->
    <div class="pc__bg" aria-hidden="true">
      <div class="pc__bg-line" />
    </div>

    <div class="pc__inner">

      <!-- ── Header ─────────────────────────────────────────────────────── -->
      <div class="pc__header" ref="headerRef">
        <div class="pc__eyebrow pc__reveal" :class="{ 'is-visible': visible }">
          <span class="pc__pill pc__pill--orange">
            <span class="pc__pill-dot" aria-hidden="true" />
            Par quoi commencer ?
          </span>
        </div>

        <h2 class="pc__h2 pc__reveal pc__reveal--d1" :class="{ 'is-visible': visible }">
          Les comparatifs les plus <span class="pc__h2-accent">populaires</span>
        </h2>

        <p class="pc__sub pc__reveal pc__reveal--d2" :class="{ 'is-visible': visible }">
          Explorez les comparaisons les plus consultées entre SCPI, ETF, livrets réglementés et
          assurance vie pour identifier plus rapidement le placement le plus adapté à votre horizon
          d'investissement.
        </p>
      </div>

      <!-- ── Cards ─────────────────────────────────────────────────────── -->
      <div class="pc__cards" ref="cardsRef">
        <div
          v-for="(col, ci) in COLUMNS"
          :key="col.id"
          class="pc__card pc__reveal"
          :class="[`pc__reveal--c${ci}`, { 'is-visible': cardsVisible }]"
        >
          <!-- Card header -->
          <div class="pc__card-head">
            <div class="pc__card-icon" aria-hidden="true">
              <svg v-if="col.icon === 'savings'" viewBox="0 0 22 22" fill="none" width="18" height="18">
                <rect x="2" y="5" width="18" height="13" rx="2.5" stroke="currentColor" stroke-width="1.5"/>
                <path d="M6 5V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="1.5"/>
                <line x1="6" y1="10" x2="16" y2="10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
                <line x1="6" y1="14" x2="12" y2="14" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
              </svg>
              <svg v-else-if="col.icon === 'shield'" viewBox="0 0 22 22" fill="none" width="18" height="18">
                <path d="M11 2L3.5 5.5v5.75C3.5 15.38 6.8 19.1 11 20c4.2-.9 7.5-4.62 7.5-8.75V5.5L11 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else viewBox="0 0 22 22" fill="none" width="18" height="18">
                <rect x="2" y="13" width="4" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <rect x="9" y="8"  width="4" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <rect x="16" y="3" width="4" height="17" rx="1" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="pc__card-meta">
              <div class="pc__card-title">{{ col.title }}</div>
            </div>
            <div class="pc__card-badge" aria-label="Top consulté">
              <svg viewBox="0 0 12 12" fill="none" width="10" height="10" aria-hidden="true">
                <path d="M6 1l1.24 2.52L10 4.09l-2 1.95.47 2.76L6 7.52l-2.47 1.28.47-2.76-2-1.95 2.76-.57z" fill="currentColor"/>
              </svg>
              Top consulté
            </div>
          </div>

          <!-- Links list -->
          <ul class="pc__links" role="list">
            <li
              v-for="(lnk, li) in col.links"
              :key="lnk.url"
              class="pc__link-item"
              :class="{ 'pc__link-item--featured': li === 0 }"
            >
              <a
                :href="lnk.url"
                class="pc__link"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Comparatif : ${lnk.label}`"
              >
                <span class="pc__link-dot" aria-hidden="true" />
                <span class="pc__link-label">{{ lnk.label }}</span>
                <span class="pc__link-chevron" aria-hidden="true">
                  <svg viewBox="0 0 10 16" fill="none" width="7" height="11">
                    <path d="M2 2l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- ── Footer ────────────────────────────────────────────────────── -->
      <div class="pc__footer pc__reveal pc__reveal--d5" :class="{ 'is-visible': cardsVisible }">
        <svg viewBox="0 0 26 12" fill="none" width="20" height="9" aria-hidden="true" class="pc__footer-icon">
          <path d="M1 6h3.5l2-4 3 8 2-4 2 4 2-8 2 4H25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Accédez rapidement aux duels les plus recherchés</span>
      </div>

    </div><!-- /inner -->
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

function _getWin() {
  try { return (typeof wwLib !== 'undefined' ? wwLib?.getFrontWindow?.() : null) ?? window } catch { return window }
}
function _prefersReducedMotion() {
  try { return _getWin().matchMedia('(prefers-reduced-motion: reduce)').matches } catch { return false }
}

const COLUMNS = [
  {
    id: 'livrets-scpi',
    icon: 'savings',
    title: 'Livrets vs SCPI',
    links: [
      { label: 'Livret A vs SCPI Cristal Life',    url: 'https://www.prevest.ai/results/livret-a-vs-scpi-cristal-life' },
      { label: 'LEP vs SCPI Cristal Life',          url: 'https://www.prevest.ai/results/lep-vs-scpi-cristal-life' },
      { label: 'PEL vs SCPI Cristal Life',          url: 'https://www.prevest.ai/results/pel-vs-scpi-cristal-life' },
      { label: 'Livret A vs PEL',                   url: 'https://www.prevest.ai/results/livret-a-vs-pel' },
      { label: 'LEP vs Livret A',                   url: 'https://www.prevest.ai/results/livret-a-vs-pel' },
    ],
  },
  {
    id: 'av-alternatives',
    icon: 'shield',
    title: 'Assurance vie vs alternatives',
    links: [
      { label: 'Assurance vie Boursorama vs Livret A',             url: 'https://www.prevest.ai/results/av-boursorama-vie-vs-livret-a' },
      { label: 'Assurance vie Boursorama vs SCPI Cristal Life',    url: 'https://www.prevest.ai/results/av-boursorama-vie-vs-scpi-cristal-life' },
      { label: 'Assurance vie Xaelidia vs Livret A',               url: 'https://www.prevest.ai/results/av-xaelidia-vs-livret-a' },
      { label: 'Assurance vie Actépargne 2 vs SCPI Cristal Life',  url: 'https://www.prevest.ai/results/av-actepargne-2-vs-scpi-cristal-life' },
    ],
  },
  {
    id: 'etf-traditionnels',
    icon: 'chart',
    title: 'ETF vs placements traditionnels',
    links: [
      { label: 'ETF monétaire vs Livret A',                        url: 'https://www.prevest.ai/results/etf-amundi-eur-overnight-return-ucits-etf-acc-vs-livret-a' },
      { label: 'ETF monétaire vs SCPI Cristal Life',               url: 'http://prevest.ai/results/etf-amundi-eur-overnight-return-ucits-etf-acc-vs-scpi-cristal-life' },
      { label: 'ETF MSCI World vs SCPI Cristal Life',              url: 'https://www.prevest.ai/results/etf-ishares-core-msci-world-ucits-etf-usd-acc-vs-scpi-cristal-life' },
      { label: 'SCPI Corum Eurion vs SCPI Cristal Life',           url: 'https://www.prevest.ai/results/scpi-corum-eurion-vs-scpi-cristal-life' },
      { label: 'SCPI Cristal Life vs SCPI Cristal Rente',          url: 'https://www.prevest.ai/results/scpi-cristal-life-vs-scpi-cristal-rente' },
    ],
  },
]

export default {
  name: 'AppPopularComparisonsSection',

  props: {
    isDark: { type: Boolean, default: true },
  },

  setup() {
    const visible     = ref(false)
    const cardsVisible = ref(false)
    const headerRef   = ref(null)
    const cardsRef    = ref(null)

    let _ioH = null
    let _ioC = null

    onMounted(() => {
      if (_prefersReducedMotion()) {
        visible.value = true; cardsVisible.value = true; return
      }
      try {
        const win = _getWin()
        if (typeof win.IntersectionObserver === 'undefined') {
          visible.value = true; cardsVisible.value = true; return
        }
        _ioH = new win.IntersectionObserver(
          ([e]) => { if (e.isIntersecting) { visible.value = true; _ioH?.disconnect() } },
          { threshold: 0.10 }
        )
        if (headerRef.value) _ioH.observe(headerRef.value)

        _ioC = new win.IntersectionObserver(
          ([e]) => { if (e.isIntersecting) { cardsVisible.value = true; _ioC?.disconnect() } },
          { threshold: 0.06 }
        )
        if (cardsRef.value) _ioC.observe(cardsRef.value)
      } catch { visible.value = true; cardsVisible.value = true }
    })

    onUnmounted(() => {
      try { _ioH?.disconnect(); _ioC?.disconnect() } catch { /* noop */ }
    })

    return { COLUMNS, visible, cardsVisible, headerRef, cardsRef }
  },
}
</script>

<style scoped>
/* ── Scroll reveal ───────────────────────────────────────────────────────── */
.pc__reveal {
  opacity: 0;
  transform: translateY(20px) scale(0.990);
  transition:
    opacity   0.72s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.72s cubic-bezier(0.16, 1, 0.3, 1);
}
.pc__reveal.is-visible { opacity: 1; transform: none; }
.pc__reveal--d1 { transition-delay: 100ms; }
.pc__reveal--d2 { transition-delay: 200ms; }
.pc__reveal--d5 { transition-delay: 400ms; }
.pc__reveal--c0 { transition-delay:  60ms; }
.pc__reveal--c1 { transition-delay: 170ms; }
.pc__reveal--c2 { transition-delay: 280ms; }
@media (prefers-reduced-motion: reduce) {
  .pc__reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
}

/* ── Root ────────────────────────────────────────────────────────────────── */
.pc {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.pc--dark  { background: #0b1020; color: rgba(226,232,240,0.9); }
.pc--light { background: #f9fafc; color: rgba(11,16,32,0.88); }

/* ── Top separator ───────────────────────────────────────────────────────── */
.pc__bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.pc__bg-line {
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 65%; max-width: 640px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(231,138,46,0.28), transparent);
}

/* ── Inner ───────────────────────────────────────────────────────────────── */
.pc__inner {
  position: relative; z-index: 1;
  max-width: 1280px; margin: 0 auto;
  padding: 64px 24px 80px;
  display: flex; flex-direction: column; gap: 56px;
}
@media (min-width: 1024px) { .pc__inner { padding: 80px 24px 96px; gap: 64px; } }
@media (min-width: 1280px) { .pc__inner { padding: 88px 24px 104px; } }

/* ── Header ──────────────────────────────────────────────────────────────── */
.pc__header {
  display: flex; flex-direction: column;
  align-items: center; gap: 18px; text-align: center;
}

.pc__eyebrow {
  display: flex; align-items: center; justify-content: center;
  gap: 10px; flex-wrap: wrap;
}
.pc__pill {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 16px 6px 12px; border-radius: 999px;
  font-size: 13px; font-weight: 600;
  border: 1px solid transparent;
}
.pc__pill--orange {
  background: rgba(231,138,46,0.09);
  border-color: rgba(231,138,46,0.28);
  color: #E78A2E;
}
.pc__pill-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #E78A2E;
  box-shadow: 0 0 7px rgba(231,138,46,0.75);
  flex-shrink: 0;
  animation: pc-dot-pulse 2.2s ease-in-out infinite;
}
@keyframes pc-dot-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.4); opacity: 0.60; }
}
@media (prefers-reduced-motion: reduce) { .pc__pill-dot { animation: none; } }

.pc__h2 {
  font-size: clamp(28px, 5vw, 52px);
  font-weight: 800; line-height: 1.08;
  letter-spacing: -0.026em; margin: 0;
}
.pc--dark  .pc__h2 { color: rgba(248,250,252,0.97); }
.pc--light .pc__h2 { color: rgba(11,16,32,0.96); }
.pc__h2-accent { color: #E78A2E; }

.pc__sub {
  font-size: clamp(14px, 1.6vw, 16px);
  line-height: 1.70; margin: 0; max-width: 640px;
}
.pc--dark  .pc__sub { color: rgba(148,163,184,0.80); }
.pc--light .pc__sub { color: rgba(71,85,105,0.82); }

/* ── Cards grid ──────────────────────────────────────────────────────────── */
.pc__cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (min-width: 1024px) {
  .pc__cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }
}

/* ── Card ────────────────────────────────────────────────────────────────── */
.pc__card {
  display: flex; flex-direction: column;
  gap: 20px;
  padding: 22px 20px 20px;
  border-radius: 20px;
  transition: transform 0.22s cubic-bezier(0.16,1,0.3,1), box-shadow 0.22s ease;
}
.pc--dark .pc__card {
  background: rgba(255,255,255,0.048);
  border: 1px solid rgba(255,255,255,0.09);
  box-shadow: 0 4px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.04);
}
.pc--light .pc__card {
  background: rgba(255,255,255,0.94);
  border: 1px solid rgba(11,16,32,0.08);
  box-shadow: 0 2px 20px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(11,16,32,0.04);
}
.pc__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(231,138,46,0.12), 0 0 0 1px rgba(231,138,46,0.18);
}
.pc--dark .pc__card:hover { border-color: rgba(231,138,46,0.28); }
.pc--light .pc__card:hover { border-color: rgba(231,138,46,0.30); box-shadow: 0 12px 40px rgba(0,0,0,0.10), 0 0 0 1px rgba(231,138,46,0.20); }

@media (min-width: 1024px) {
  .pc__card { padding: 26px 24px 22px; gap: 22px; }
}

/* ── Card header ─────────────────────────────────────────────────────────── */
.pc__card-head {
  display: flex; align-items: center; gap: 12px;
}
.pc__card-meta { flex: 1; min-width: 0; }
.pc__card-icon {
  width: 42px; height: 42px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  color: #E78A2E;
}
.pc--dark  .pc__card-icon { background: rgba(231,138,46,0.12); }
.pc--light .pc__card-icon { background: rgba(231,138,46,0.10); }

.pc__card-title {
  font-size: 15px; font-weight: 700; line-height: 1.30;
  overflow: hidden; text-overflow: ellipsis;
  /* allow wrap so long titles don't stretch the card width */
  white-space: normal;
  word-break: break-word;
}
.pc--dark  .pc__card-title { color: rgba(248,250,252,0.95); }
.pc--light .pc__card-title { color: rgba(11,16,32,0.93); }

/* "Top consulté" badge */
.pc__card-badge {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 10px 4px 8px; border-radius: 999px;
  font-size: 11px; font-weight: 700; letter-spacing: 0.03em;
  white-space: nowrap; flex-shrink: 0;
}
.pc--dark  .pc__card-badge {
  background: rgba(231,138,46,0.10);
  border: 1px solid rgba(231,138,46,0.26);
  color: #E78A2E;
}
.pc--light .pc__card-badge {
  background: rgba(231,138,46,0.08);
  border: 1px solid rgba(231,138,46,0.22);
  color: #C96E10;
}

/* ── Links list ──────────────────────────────────────────────────────────── */
.pc__links {
  list-style: none; margin: 0; padding: 0;
  display: flex; flex-direction: column; gap: 2px;
}

.pc__link-item { display: flex; }

.pc__link {
  flex: 1;
  display: flex; align-items: center; gap: 10px;
  padding: 10px 10px 10px 12px;
  border-radius: 10px;
  border: 1px solid transparent;
  text-decoration: none;
  transition:
    background     0.18s ease,
    border-color   0.18s ease;
}
.pc--dark  .pc__link { color: rgba(226,232,240,0.78); }
.pc--light .pc__link { color: rgba(11,16,32,0.72); }

/* Featured first link */
.pc--dark  .pc__link-item--featured .pc__link {
  background: rgba(231,138,46,0.07);
  border-color: rgba(231,138,46,0.20);
  color: rgba(248,250,252,0.92);
}
.pc--light .pc__link-item--featured .pc__link {
  background: rgba(231,138,46,0.05);
  border-color: rgba(231,138,46,0.18);
  color: rgba(11,16,32,0.88);
}

/* Hover state */
.pc--dark  .pc__link:hover {
  background: rgba(231,138,46,0.10);
  border-color: rgba(231,138,46,0.28);
  color: rgba(248,250,252,0.96);
}
.pc--light .pc__link:hover {
  background: rgba(231,138,46,0.08);
  border-color: rgba(231,138,46,0.24);
  color: rgba(11,16,32,0.92);
}
.pc__link:focus-visible { outline: 2px solid #E78A2E; outline-offset: 2px; }

/* Dot */
.pc__link-dot {
  width: 5px; height: 5px; border-radius: 50%;
  flex-shrink: 0;
  transition: background 0.18s ease;
}
.pc--dark  .pc__link-dot { background: rgba(231,138,46,0.45); }
.pc--light .pc__link-dot { background: rgba(231,138,46,0.55); }
.pc--dark  .pc__link-item--featured .pc__link-dot { background: #E78A2E; box-shadow: 0 0 5px rgba(231,138,46,0.55); }
.pc--light .pc__link-item--featured .pc__link-dot { background: #E78A2E; }
.pc__link:hover .pc__link-dot { background: #E78A2E; }

/* Label */
.pc__link-label {
  flex: 1; font-size: 13px; font-weight: 500; line-height: 1.40;
}
.pc--dark  .pc__link-item--featured .pc__link-label { font-weight: 600; }
.pc--light .pc__link-item--featured .pc__link-label { font-weight: 600; }

/* Chevron */
.pc__link-chevron {
  flex-shrink: 0; display: flex; align-items: center;
  transition: transform 0.18s ease, color 0.18s ease;
}
.pc--dark  .pc__link-chevron { color: rgba(148,163,184,0.45); }
.pc--light .pc__link-chevron { color: rgba(71,85,105,0.45); }
.pc--dark  .pc__link-item--featured .pc__link-chevron { color: rgba(231,138,46,0.65); }
.pc--light .pc__link-item--featured .pc__link-chevron { color: rgba(231,138,46,0.60); }
.pc__link:hover .pc__link-chevron {
  transform: translateX(3px);
  color: #E78A2E;
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
.pc__footer {
  display: flex; align-items: center; justify-content: center;
  gap: 10px;
  font-size: 13px; font-weight: 600;
}
.pc--dark  .pc__footer { color: rgba(148,163,184,0.70); }
.pc--light .pc__footer { color: rgba(71,85,105,0.72); }
.pc__footer-icon {
  flex-shrink: 0;
  color: #E78A2E;
  opacity: 0.85;
}
</style>
