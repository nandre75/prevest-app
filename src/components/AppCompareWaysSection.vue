<template>
  <section
    id="prevest-section-compare"
    data-prevest-section="compare"
    class="cw"
    :class="isDark ? 'cw--dark' : 'cw--light'"
  >
    <!-- Top separator glow line -->
    <div class="cw__bg" aria-hidden="true">
      <div class="cw__bg-line" />
    </div>

    <div class="cw__inner">

      <!-- ── Section header ──────────────────────────────────────────── -->
      <div class="cw__header" ref="headerRef">
        <div
          class="cw__badge cw__reveal"
          :class="{ 'is-visible': headerVisible }"
        >
          <span class="cw__badge-dot" aria-hidden="true" />
          <span>Comment comparer ?</span>
        </div>

        <h2
          class="cw__h2 cw__reveal cw__reveal--d1"
          :class="{ 'is-visible': headerVisible }"
        >
          Deux façons d'<span class="cw__h2-accent">explorer</span> votre épargne
        </h2>

        <p
          class="cw__sub cw__reveal cw__reveal--d2"
          :class="{ 'is-visible': headerVisible }"
        >
          Commencez simplement. Approfondissez ensuite, à votre rythme.
        </p>
      </div>

      <!-- ── Cards ───────────────────────────────────────────────────── -->
      <div class="cw__cards" ref="cardsRef">

        <!-- ── Card 1 — IRIS (primary / recommended) ───────────────── -->
        <article
          class="cw__card cw__card--iris cw__reveal cw__reveal--c0"
          :class="{ 'is-visible': cardsVisible }"
          tabindex="0"
          role="button"
          aria-label="Commencer avec IRIS"
          @click="handleCompareClick"
          @keydown.enter.prevent="handleCompareClick"
          @keydown.space.prevent="handleCompareClick"
        >
          <!-- Top label + recommended badge -->
          <header class="cw__card-top">
            <span class="cw__card-label">LE MEILLEUR POINT DE DÉPART</span>
            <span class="cw__rec-badge">RECOMMANDÉ</span>
          </header>

          <!-- IRIS avatar -->
          <div class="cw__iris-area">
            <div class="cw__iris-wrap">
              <img
                :src="irisAvatarUrl"
                alt="IRIS — assistant financier PREVEST"
                class="cw__iris-avatar"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Body: name + sub + features -->
          <div class="cw__card-body">
            <div class="cw__card-name">IRIS</div>
            <p class="cw__card-sub">Quelques questions. Une direction claire.</p>

            <ul class="cw__feats" aria-label="Fonctionnalités IRIS">
              <li v-for="feat in IRIS_FEATURES" :key="feat" class="cw__feat">
                <span class="cw__feat-icon cw__feat-icon--iris" aria-hidden="true">
                  <svg viewBox="0 0 14 14" fill="none" width="10" height="10">
                    <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <!-- CTA primary -->
          <button
            type="button"
            class="cw__cta cw__cta--primary"
            @click.stop="handleCompareClick"
          >
            <span>Commencer avec IRIS</span>
            <span class="cw__cta-arrow" aria-hidden="true">→</span>
          </button>
        </article>

        <!-- ── Card 2 — Recherche libre (secondary) ─────────────────── -->
        <article
          class="cw__card cw__card--search cw__reveal cw__reveal--c1"
          :class="{ 'is-visible': cardsVisible }"
          tabindex="0"
          role="button"
          aria-label="Explorer les placements"
          @click="handleExploreClick"
          @keydown.enter.prevent="handleExploreClick"
          @keydown.space.prevent="handleExploreClick"
        >
          <!-- Top label -->
          <header class="cw__card-top">
            <span class="cw__card-label">POUR LES UTILISATEURS AUTONOMES</span>
          </header>

          <!-- Search visual -->
          <div class="cw__search-area">
            <div class="cw__search-wrap" aria-hidden="true">
              <svg viewBox="0 0 96 96" fill="none" width="84" height="84" aria-hidden="true">
                <!-- Ambient outer ring -->
                <circle cx="48" cy="48" r="44" class="cw-srch-ring-outer" stroke-width="1"/>
                <!-- Inner ring -->
                <circle cx="48" cy="48" r="32" class="cw-srch-ring-inner" stroke-width="1"/>
                <!-- Magnify glass circle -->
                <circle cx="44" cy="44" r="17" stroke="currentColor" stroke-width="2.2" opacity="0.88"/>
                <!-- Magnify handle -->
                <path d="M57 57l10 10" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
                <!-- Inner cross: explorer metaphor -->
                <path d="M44 35v18M35 44h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.42"/>
              </svg>
            </div>
          </div>

          <!-- Body: name + sub + features -->
          <div class="cw__card-body">
            <div class="cw__card-name">Recherche libre</div>
            <p class="cw__card-sub">Comparer librement, en toute autonomie.</p>

            <ul class="cw__feats" aria-label="Fonctionnalités recherche libre">
              <li v-for="feat in SEARCH_FEATURES" :key="feat" class="cw__feat">
                <span class="cw__feat-icon cw__feat-icon--search" aria-hidden="true">
                  <svg viewBox="0 0 14 14" fill="none" width="10" height="10">
                    <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <!-- CTA secondary -->
          <button
            type="button"
            class="cw__cta cw__cta--secondary"
            @click.stop="handleExploreClick"
          >
            <span>Explorer les placements</span>
            <span class="cw__cta-arrow" aria-hidden="true">→</span>
          </button>
        </article>

      </div><!-- /cards -->
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

const IRIS_FEATURES = [
  'Profil & objectifs',
  'Horizon & impacts',
  'Une pré-orientation cohérente',
]

const SEARCH_FEATURES = [
  'Explorer tous les placements',
  'Filtrer selon vos critères',
  'Comparer plusieurs options',
]

export default {
  name: 'AppCompareWaysSection',

  props: {
    isDark:        { type: Boolean, default: true },
    irisAvatarUrl: { type: String,  default: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/iris-avatar_1.png?_wwcv=1779660586361' },
    compareUrl:    { type: String,  default: '/start/' },
    exploreUrl:    { type: String,  default: '' },
  },

  emits: ['compare-click', 'explore-click'],

  setup(props, { emit }) {
    const reducedMotion = ref(false)
    const headerRef     = ref(null)
    const cardsRef      = ref(null)
    const headerVisible = ref(false)
    const cardsVisible  = ref(false)

    let _ioH = null
    let _ioC = null

    onMounted(() => {
      reducedMotion.value = _prefersReducedMotion()
      if (reducedMotion.value) {
        headerVisible.value = true
        cardsVisible.value  = true
        return
      }
      try {
        const win = _getWin()
        if (typeof win.IntersectionObserver === 'undefined') {
          headerVisible.value = true; cardsVisible.value = true; return
        }
        _ioH = new win.IntersectionObserver(
          ([e]) => { if (e.isIntersecting) { headerVisible.value = true; _ioH?.disconnect() } },
          { threshold: 0.18 }
        )
        _ioC = new win.IntersectionObserver(
          ([e]) => { if (e.isIntersecting) { cardsVisible.value = true; _ioC?.disconnect() } },
          { threshold: 0.08 }
        )
        if (headerRef.value) _ioH.observe(headerRef.value)
        if (cardsRef.value)  _ioC.observe(cardsRef.value)
      } catch {
        headerVisible.value = true; cardsVisible.value = true
      }
    })

    onUnmounted(() => {
      try { _ioH?.disconnect(); _ioC?.disconnect() } catch { /* noop */ }
    })

    function handleCompareClick() {
      emit('compare-click')
      try { _getWin().location.href = props.compareUrl || '/start/' } catch { /* noop */ }
    }

    function handleExploreClick() {
      emit('explore-click', { source: 'compare_ways_free_search', target: 'pcs_placements' })
    }

    return {
      IRIS_FEATURES,
      SEARCH_FEATURES,
      reducedMotion,
      headerRef,
      cardsRef,
      headerVisible,
      cardsVisible,
      handleCompareClick,
      handleExploreClick,
    }
  },
}
</script>

<style scoped>
/* ── Scroll reveal ───────────────────────────────────────────────────────── */
.cw__reveal {
  opacity: 0;
  transform: translateY(22px) scale(0.988);
  transition:
    opacity  0.72s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.72s cubic-bezier(0.16, 1, 0.3, 1);
}
.cw__reveal.is-visible { opacity: 1; transform: none; }

.cw__reveal--d1 { transition-delay: 100ms; }
.cw__reveal--d2 { transition-delay: 200ms; }
.cw__reveal--c0 { transition-delay: 60ms; }
.cw__reveal--c1 { transition-delay: 180ms; }

@media (prefers-reduced-motion: reduce) {
  .cw__reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

/* ── Root ────────────────────────────────────────────────────────────────── */
.cw {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.cw--dark  { background: #0b1020; color: rgba(226,232,240,0.9); }
.cw--light { background: #f9fafc; color: rgba(11,16,32,0.88); }

/* ── Top separator line ──────────────────────────────────────────────────── */
.cw__bg {
  position: absolute; inset: 0;
  pointer-events: none; z-index: 0;
}
.cw__bg-line {
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 65%; max-width: 640px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(231,138,46,0.28), transparent);
}

/* ── Inner container ─────────────────────────────────────────────────────── */
.cw__inner {
  position: relative; z-index: 1;
  max-width: 1280px; margin: 0 auto;
  padding: 64px 24px 80px;
  display: flex; flex-direction: column; gap: 64px;
}
@media (min-width: 1024px) { .cw__inner { padding: 80px 24px 96px; gap: 72px; } }
@media (min-width: 1280px) { .cw__inner { padding: 88px 24px 104px; } }

/* ── Section header ──────────────────────────────────────────────────────── */
.cw__header {
  display: flex; flex-direction: column;
  align-items: center; gap: 16px; text-align: center;
}

.cw__badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 16px 7px 12px; border-radius: 999px;
  border: 1px solid rgba(231,138,46,0.28);
  background: rgba(231,138,46,0.09);
  font-size: 13px; font-weight: 600; color: #E78A2E;
}
.cw__badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #E78A2E; box-shadow: 0 0 7px rgba(231,138,46,0.70);
  flex-shrink: 0;
  animation: cw-dot-pulse 2.2s ease-in-out infinite;
}
@keyframes cw-dot-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.35); opacity: 0.65; }
}
@media (prefers-reduced-motion: reduce) { .cw__badge-dot { animation: none; } }

.cw__h2 {
  font-size: clamp(28px, 5vw, 52px);
  font-weight: 800; line-height: 1.08;
  letter-spacing: -0.026em; margin: 0;
}
.cw--dark  .cw__h2 { color: rgba(248,250,252,0.97); }
.cw--light .cw__h2 { color: rgba(11,16,32,0.96); }
.cw__h2-accent { color: #E78A2E; }

.cw__sub {
  font-size: clamp(14px, 1.6vw, 16px);
  line-height: 1.68; margin: 0; max-width: 500px;
}
.cw--dark  .cw__sub { color: rgba(148,163,184,0.80); }
.cw--light .cw__sub { color: rgba(71,85,105,0.82); }

/* ── Cards grid ──────────────────────────────────────────────────────────── */
.cw__cards {
  display: flex; flex-direction: column; gap: 16px;
}
@media (min-width: 1024px) {
  .cw__cards { flex-direction: row; align-items: stretch; gap: 20px; }
}

/* ── Card base ───────────────────────────────────────────────────────────── */
.cw__card {
  cursor: pointer;
  display: flex; flex-direction: column;
  border-radius: 24px; padding: 28px 24px 28px;
  transition:
    box-shadow 0.28s ease,
    border-color 0.28s ease,
    transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}
.cw__card:focus-visible {
  outline: 2px solid rgba(231, 138, 46, 0.85);
  outline-offset: 3px;
}
@media (min-width: 1024px) { .cw__card { flex: 1; } }

/* ── IRIS card — primary ─────────────────────────────────────────────────── */
.cw--dark .cw__card--iris {
  background: rgba(231,138,46,0.03);
  border: 1px solid rgba(231,138,46,0.52);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
}
.cw--light .cw__card--iris {
  background: rgba(255,252,248,0.98);
  border: 1px solid rgba(231,138,46,0.45);
  box-shadow: 0 2px 18px rgba(231,138,46,0.08), 0 1px 3px rgba(0,0,0,0.04);
}
.cw--dark .cw__card--iris:hover {
  box-shadow: 0 4px 28px rgba(231,138,46,0.12), inset 0 1px 0 rgba(255,255,255,0.08);
  border-color: rgba(231,138,46,0.72);
  transform: translateY(-3px);
}
.cw--light .cw__card--iris:hover {
  box-shadow: 0 4px 24px rgba(231,138,46,0.14);
  border-color: rgba(231,138,46,0.68);
  transform: translateY(-3px);
}

/* ── Search card — secondary ─────────────────────────────────────────────── */
.cw--dark .cw__card--search {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(231,138,46,0.20);
  box-shadow: 0 2px 14px rgba(0,0,0,0.14);
}
.cw--light .cw__card--search {
  background: rgba(255,255,255,0.96);
  border: 1px solid rgba(231,138,46,0.22);
  box-shadow: 0 2px 18px rgba(0,0,0,0.05);
}
.cw--dark .cw__card--search:hover {
  border-color: rgba(231,138,46,0.38);
  box-shadow: 0 4px 22px rgba(0,0,0,0.20);
  transform: translateY(-2px);
}
.cw--light .cw__card--search:hover {
  border-color: rgba(231,138,46,0.40);
  box-shadow: 0 4px 22px rgba(0,0,0,0.09);
  transform: translateY(-2px);
}

/* ── Card top: label + badge ─────────────────────────────────────────────── */
.cw__card-top {
  display: flex; align-items: center; justify-content: space-between;
  gap: 10px; margin-bottom: 24px; flex-wrap: wrap;
}
.cw__card-label {
  font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
  text-transform: uppercase;
}
.cw--dark  .cw__card-label { color: rgba(148,163,184,0.68); }
.cw--light .cw__card-label { color: rgba(71,85,105,0.68); }
.cw__card--iris .cw__card-label { color: #E78A2E !important; }

.cw__rec-badge {
  font-size: 10px; font-weight: 800; letter-spacing: 0.06em;
  text-transform: uppercase; padding: 4px 10px; border-radius: 999px;
  background: #E78A2E; color: #0b1020;
  white-space: nowrap; flex-shrink: 0;
}

/* ── IRIS avatar area ────────────────────────────────────────────────────── */
.cw__iris-area {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  padding: 16px 0 24px;
}

.cw__iris-wrap {
  position: relative; z-index: 1;
  width: 128px; height: 128px; border-radius: 50%;
  flex-shrink: 0;
}
@media (min-width: 1024px) { .cw__iris-wrap { width: 144px; height: 144px; } }

.cw__iris-avatar {
  width: 100%; height: 100%; border-radius: 50%;
  object-fit: cover; object-position: center top;
  display: block;
  box-shadow: 0 0 0 3px #E78A2E, 0 0 32px rgba(231,138,46,0.52);
}

/* ── Search visual area ──────────────────────────────────────────────────── */
.cw__search-area {
  display: flex; align-items: center; justify-content: center;
  padding: 16px 0 24px;
}
.cw__search-wrap {
  width: 128px; height: 128px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
@media (min-width: 1024px) { .cw__search-wrap { width: 144px; height: 144px; } }

.cw--dark  .cw__search-wrap {
  background: rgba(255,255,255,0.038);
  border: 1.5px solid rgba(255,255,255,0.10);
  color: rgba(148,163,184,0.65);
}
.cw--light .cw__search-wrap {
  background: rgba(11,16,32,0.04);
  border: 1.5px solid rgba(11,16,32,0.10);
  color: rgba(71,85,105,0.65);
}

/* SVG orbit ring colours inside search wrap */
.cw-srch-ring-outer { fill: none; }
.cw--dark  .cw-srch-ring-outer { stroke: rgba(255,255,255,0.08); }
.cw--light .cw-srch-ring-outer { stroke: rgba(11,16,32,0.10); }
.cw-srch-ring-inner { fill: none; }
.cw--dark  .cw-srch-ring-inner { stroke: rgba(255,255,255,0.05); }
.cw--light .cw-srch-ring-inner { stroke: rgba(11,16,32,0.07); }

/* ── Card body ───────────────────────────────────────────────────────────── */
.cw__card-body {
  display: flex; flex-direction: column; flex: 1;
}

.cw__card-name {
  font-size: 30px; font-weight: 800; line-height: 1.1; letter-spacing: -0.022em;
  margin-bottom: 8px;
}
.cw--dark  .cw__card-name { color: rgba(248,250,252,0.97); }
.cw--light .cw__card-name { color: rgba(11,16,32,0.95); }

.cw__card-sub {
  font-size: 15px; line-height: 1.60;
  margin: 0 0 20px;
}
.cw--dark  .cw__card-sub { color: rgba(148,163,184,0.80); }
.cw--light .cw__card-sub { color: rgba(71,85,105,0.82); }

/* ── Features list ───────────────────────────────────────────────────────── */
.cw__feats {
  list-style: none; margin: 0; padding: 0;
  display: flex; flex-direction: column; gap: 11px;
  flex: 1;
}
.cw__feat {
  display: flex; align-items: center; gap: 10px;
  font-size: 14px; line-height: 1.4;
}
.cw--dark  .cw__feat { color: rgba(226,232,240,0.82); }
.cw--light .cw__feat { color: rgba(11,16,32,0.78); }

.cw__feat-icon {
  flex-shrink: 0;
  width: 20px; height: 20px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.cw__feat-icon--iris {
  background: rgba(231,138,46,0.16);
  color: #E78A2E;
}
.cw__feat-icon--search {
  color: rgba(90,200,140,0.92);
}
.cw--dark  .cw__feat-icon--search { background: rgba(90,200,140,0.12); }
.cw--light .cw__feat-icon--search { background: rgba(90,200,140,0.14); }

/* ── CTAs ────────────────────────────────────────────────────────────────── */
.cw__cta {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; width: 100%;
  margin-top: 24px; padding: 15px 20px;
  border-radius: 14px; border: none;
  font-size: 15px; font-weight: 700;
  cursor: pointer;
  transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.18s ease;
  text-decoration: none;
}

.cw__cta--primary {
  background: #E78A2E;
  color: #0b1020;
  box-shadow: 0 4px 20px rgba(231,138,46,0.32);
}
.cw__cta--primary:hover {
  background: #F09C40;
  box-shadow: 0 6px 30px rgba(231,138,46,0.48);
  transform: translateY(-1px);
}

.cw--dark .cw__cta--secondary {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.13);
  color: rgba(248,250,252,0.90);
}
.cw--dark .cw__cta--secondary:hover {
  background: rgba(255,255,255,0.10);
  border-color: rgba(255,255,255,0.24);
  transform: translateY(-1px);
}
.cw--light .cw__cta--secondary {
  background: rgba(11,16,32,0.05);
  border: 1px solid rgba(11,16,32,0.13);
  color: rgba(11,16,32,0.88);
}
.cw--light .cw__cta--secondary:hover {
  background: rgba(11,16,32,0.09);
  border-color: rgba(11,16,32,0.22);
  transform: translateY(-1px);
}

.cw__cta-arrow {
  font-size: 18px; line-height: 1;
  transition: transform 0.18s ease;
  flex-shrink: 0;
}
.cw__cta:hover .cw__cta-arrow { transform: translateX(4px); }

@media (prefers-reduced-motion: reduce) {
  .cw__cta,
  .cw__cta-arrow,
  .cw__card { transition: none !important; transform: none !important; }
}
</style>
