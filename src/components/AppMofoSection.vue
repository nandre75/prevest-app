<template>
  <section
    class="mofo"
    :class="isDark ? 'mofo--dark' : 'mofo--light'"
  >
    <!-- Top separator line -->
    <div class="mofo__bg" aria-hidden="true">
      <div class="mofo__bg-line" />
    </div>

    <div class="mofo__inner">

      <!-- ── Header ──────────────────────────────────────────────────────── -->
      <div class="mofo__header" ref="headerRef">
        <!-- Eyebrow pills -->
        <div
          class="mofo__eyebrow mofo__reveal"
          :class="{ 'is-visible': visible }"
        >
          <span class="mofo__pill mofo__pill--orange">
            <span class="mofo__pill-dot" aria-hidden="true" />
            MOFO
          </span>
          <span class="mofo__pill mofo__pill--muted">
            <svg viewBox="0 0 16 16" fill="none" width="13" height="13" aria-hidden="true">
              <rect x="1.5" y="3" width="13" height="11.5" rx="2" stroke="currentColor" stroke-width="1.35"/>
              <path d="M5 1.5v3M11 1.5v3M1.5 8h13" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
            </svg>
            Fonctionnalité à venir
          </span>
        </div>

        <h2
          class="mofo__h2 mofo__reveal mofo__reveal--d1"
          :class="{ 'is-visible': visible }"
        >
          Toute l'offre, scannée en <span class="mofo__h2-accent">continu</span>
        </h2>

        <p
          class="mofo__sub mofo__reveal mofo__reveal--d2"
          :class="{ 'is-visible': visible }"
        >
          PREVEST AI surveille banques, assureurs et sociétés de gestion pour détecter
          les nouvelles opportunités dès qu'elles correspondent à vos critères.
        </p>
      </div><!-- /header -->

      <!-- ── Main: feat-left + radar + feat-right ───────────────────────── -->
      <div
        class="mofo__main mofo__reveal mofo__reveal--d3"
        :class="{ 'is-visible': visible }"
      >

        <!-- Feat card — Détection -->
        <article class="mofo__feat mofo__feat--left">
          <div class="mofo__feat-icon-ring" aria-hidden="true">
            <svg viewBox="0 0 28 28" fill="none" width="22" height="22" aria-hidden="true">
              <circle cx="14" cy="14" r="11" stroke="currentColor" stroke-width="1.3" opacity=".35"/>
              <circle cx="14" cy="14" r="6.5" stroke="currentColor" stroke-width="1.2" opacity=".55"/>
              <circle cx="14" cy="14" r="2.5" fill="currentColor" opacity=".9"/>
              <path d="M5 14h3l2-3.5 2.5 7 2-3.5 1.5 2.5H19" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="mofo__feat-body">
            <h3 class="mofo__feat-title">
              Détection en temps réel
              <span class="mofo__feat-dot" aria-hidden="true" />
            </h3>
            <p class="mofo__feat-desc">
              Le radar PREVEST repère les nouveautés en continu dès leur apparition.
            </p>
          </div>
        </article>

        <!-- ── Radar ──────────────────────────────────────────────────────── -->
        <div class="mofo__radar-wrap" ref="radarRef">

          <!-- SVG: background rings + tick marks + crosshairs -->
          <svg
            class="mofo__radar-svg"
            viewBox="0 0 500 500"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="mf-center-glow-d" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stop-color="rgba(231,138,46,0.28)"/>
                <stop offset="60%"  stop-color="rgba(231,138,46,0.08)"/>
                <stop offset="100%" stop-color="transparent"/>
              </radialGradient>
              <radialGradient id="mf-center-glow-l" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stop-color="rgba(231,138,46,0.22)"/>
                <stop offset="60%"  stop-color="rgba(231,138,46,0.05)"/>
                <stop offset="100%" stop-color="transparent"/>
              </radialGradient>
              <radialGradient id="mf-bg-d" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stop-color="rgba(231,138,46,0.05)"/>
                <stop offset="100%" stop-color="transparent"/>
              </radialGradient>
            </defs>

            <!-- Ambient background glow -->
            <circle cx="250" cy="250" r="240"
              :fill="isDark ? 'url(#mf-bg-d)' : 'none'"
            />

            <!-- Concentric inner rings -->
            <circle cx="250" cy="250" r="192" class="mf-ring mf-ring--inner"/>
            <circle cx="250" cy="250" r="144" class="mf-ring mf-ring--inner"/>
            <circle cx="250" cy="250" r="96"  class="mf-ring mf-ring--inner"/>
            <circle cx="250" cy="250" r="54"  class="mf-ring mf-ring--center"/>

            <!-- Main outer border ring -->
            <circle cx="250" cy="250" r="240" class="mf-ring mf-ring--outer"/>

            <!-- Tick marks: 72 ticks × 5° = 360° -->
            <g transform="translate(250,250)">
              <line
                v-for="i in 72" :key="`tk${i}`"
                x1="0" y1="-233"
                :x2="0" :y2="(i % 6 === 0) ? -220 : -228"
                :transform="`rotate(${(i-1)*5})`"
                class="mf-tick"
                :class="{ 'mf-tick--long': i % 6 === 0 }"
              />
            </g>

            <!-- Crosshairs (very faint) -->
            <line x1="250" y1="12"  x2="250" y2="488" class="mf-crosshair"/>
            <line x1="12"  y1="250" x2="488" y2="250" class="mf-crosshair"/>

            <!-- Center ambient glow disc -->
            <circle cx="250" cy="250" r="90"
              :fill="isDark ? 'url(#mf-center-glow-d)' : 'url(#mf-center-glow-l)'"
            />
          </svg><!-- /radar-svg -->

          <!-- ── Sweep beam (JS-driven rotation) ── -->
          <div
            class="mofo__sweep"
            :style="sweepStyle"
            aria-hidden="true"
          />

          <!-- ── Radar center: PREVEST AI ── -->
          <div class="mofo__radar-center" aria-label="PREVEST AI">
            <svg
              viewBox="0 0 94 57"
              width="40" height="25"
              aria-hidden="true"
              class="mofo__center-mark"
            >
              <path
                fill="currentColor"
                d="M78.65,0H14.94C6.69,0,0,6.69,0,14.94v26.82c0,8.25,6.69,14.94,14.94,14.94h7.39v-6.14c0-3.76,3.05-6.8,6.8-6.8h26.53c1.22,0,2.2-.99,2.2-2.2v-4.04H3.03l.24-.65c.34-.9.7-1.81,1.08-2.69l.13-.29h14.61l-7.57-11.95.21-.27c.58-.75,1.19-1.49,1.79-2.2l.43-.5,9.45,14.92h8.31l-10.76-10.6,1.97-3.17,13.98,13.78h15.84l-28.03-16.68,1.92-3.1,21.43,12.75,10.02-6.17,2.66,2.64-9.15,5.63,8.18,4.87,10.2-10.18c.87-.87,2.33-.67,2.94.4l2.9,5.08-17.04,27.59h19.89c8.25,0,14.94-6.69,14.94-14.94V14.94c0-8.25-6.69-14.94-14.94-14.94ZM81.77,17.62l-4.84-4.65-6.36,2.14,4.65-4.84-2.14-6.36,4.84,4.65,6.36-2.14-4.65,4.84,2.14,6.36Z"
              />
            </svg>
            <div class="mofo__center-label">
              <span class="mofo__center-name">PREVEST</span>
              <span class="mofo__center-ai">AI</span>
            </div>
          </div><!-- /center -->

          <!-- ── Badges ── -->
          <div
            v-for="badge in processedBadges"
            :key="badge.id"
            class="mofo__badge"
            :class="{ 'mofo__badge--active': badge.active }"
            :style="badge.posStyle"
            :aria-label="badge.label"
          >
            <div class="mofo__badge-card">
              <!-- Logo area: real image OR brand-color logo block placeholder -->
              <div class="mofo__badge-logo-area">
                <img
                  v-if="badge.logoUrl"
                  :src="badge.logoUrl"
                  :alt="badge.label"
                  class="mofo__badge-img"
                  loading="lazy"
                />
                <!-- TODO: replace with real logo URL in DEFAULT_BADGES.logoUrl once assets are ready -->
                <div
                  v-else
                  class="mofo__badge-logo-block"
                  :style="{ background: badge.brandColor || '#1a2540' }"
                  aria-hidden="true"
                >
                  <span class="mofo__badge-initials">{{ badge.initials }}</span>
                </div>
              </div>
              <!-- Brand label -->
              <span class="mofo__badge-name">{{ badge.labelShort || badge.label }}</span>
            </div>
          </div><!-- /badges -->

        </div><!-- /radar-wrap -->

        <!-- Feat card — Alerte -->
        <article class="mofo__feat mofo__feat--right">
          <div class="mofo__feat-icon-ring" aria-hidden="true">
            <svg viewBox="0 0 28 28" fill="none" width="22" height="22" aria-hidden="true">
              <path d="M14 4a6 6 0 0 1 6 6v4.5l2 2.5H6l2-2.5V10a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
              <path d="M11.5 22c.45 1.1 1.25 1.7 2.5 1.7s2.05-.6 2.5-1.7" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
              <path d="M14 4V2.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="mofo__feat-body">
            <h3 class="mofo__feat-title">
              Alerte selon vos critères
              <span class="mofo__feat-dot" aria-hidden="true" />
            </h3>
            <p class="mofo__feat-desc">
              Vous êtes informé dès qu'un produit correspond à votre profil.
            </p>
          </div>
        </article>

      </div><!-- /main -->

      <!-- ── Footer ──────────────────────────────────────────────────────── -->
      <div
        class="mofo__footer mofo__reveal mofo__reveal--d4"
        :class="{ 'is-visible': visible }"
      >
        <svg viewBox="0 0 26 12" fill="none" width="22" height="10" aria-hidden="true" class="mofo__footer-icon">
          <path d="M1 6h3.5l2-4 3 8 2-4 2 4 2-8 2 4H25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Analyse continue du marché, 24h/24, 7j/7</span>
      </div>

    </div><!-- /inner -->
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

function _getWin() {
  try { return (typeof wwLib !== 'undefined' ? wwLib?.getFrontWindow?.() : null) ?? window } catch { return window }
}
function _prefersReducedMotion() {
  try { return _getWin().matchMedia('(prefers-reduced-motion: reduce)').matches } catch { return false }
}

// ── Radar configuration ──────────────────────────────────────────────────────
const SWEEP_MS  = 18000  // one full rotation — slow premium scan (~18 s)
const SWEEP_ARC = 115    // degrees of the active beam sector

// angle: degrees from top (0 = 12 o'clock), clockwise
// radius: fraction of radar radius; max 0.76 keeps badge inside the circle
// brandColor: placeholder accent color (used until real logo URLs are provided)
const DEFAULT_BADGES = [
  { id: 'bnp',    label: 'BNP PARIBAS',     labelShort: 'BNP\nPARIBAS',      angle: 355, radius: 0.57, initials: 'BNP',  brandColor: '#00966C', logoUrl: '' },
  { id: 'sl',     label: 'Swiss Life',       labelShort: 'Swiss Life',         angle:  40, radius: 0.63, initials: 'SL',   brandColor: '#D40D14', logoUrl: '' },
  { id: 'corum',  label: 'CORUM',            labelShort: 'CORUM',              angle:  63, radius: 0.74, initials: 'CR',   brandColor: '#1C3F5E', logoUrl: '' },
  { id: 'ig',     label: 'Inter Gestion',    labelShort: 'Inter Gestion\nREIM', angle: 87, radius: 0.69, initials: 'IG',   brandColor: '#2D4E8C', logoUrl: '' },
  { id: 'ce',     label: "Caisse d'Épargne", labelShort: "CAISSE\nD'ÉPARGNE",  angle: 116, radius: 0.66, initials: 'CE',   brandColor: '#00843D', logoUrl: '' },
  { id: 'perial', label: 'PERIAL',           labelShort: 'PERIAL',             angle: 138, radius: 0.70, initials: 'PRL',  brandColor: '#7B5C1E', logoUrl: '' },
  { id: 'oddo',   label: 'ODDO BHF',         labelShort: 'ODDO BHF',           angle: 162, radius: 0.59, initials: 'OB',   brandColor: '#003870', logoUrl: '' },
  { id: 'amundi', label: 'Amundi',           labelShort: 'Amundi',             angle: 192, radius: 0.63, initials: 'AM',   brandColor: '#005B35', logoUrl: '' },
  { id: 'axa',    label: 'AXA',              labelShort: 'AXA',                angle: 221, radius: 0.59, initials: 'AXA',  brandColor: '#00008F', logoUrl: '' },
  { id: 'lf',     label: 'La Française',     labelShort: 'LA\nFRANÇAISE',      angle: 262, radius: 0.64, initials: 'LF',   brandColor: '#1B3F7C', logoUrl: '' },
  { id: 'sg',     label: 'Société Générale', labelShort: 'SOCIÉTÉ\nGÉNÉRALE',  angle: 308, radius: 0.61, initials: 'SG',   brandColor: '#E4001B', logoUrl: '' },
]

function getBadgePosStyle(angle, radius) {
  const rad = (angle - 90) * Math.PI / 180
  const x   = 50 + radius * 50 * Math.cos(rad)
  const y   = 50 + radius * 50 * Math.sin(rad)
  return {
    position:  'absolute',
    left:      `${x.toFixed(2)}%`,
    top:       `${y.toFixed(2)}%`,
    transform: 'translate(-50%, -50%)',
  }
}

export default {
  name: 'AppMofoSection',

  props: {
    isDark:      { type: Boolean, default: true },
    radarBadges: { type: Array,   default: () => [] },
    // ── Flat badge props — BNP ─────────────────────────────────────────────
    mofoBadgeBnpLabel:   { type: String,  default: 'BNP PARIBAS' },
    mofoBadgeBnpLogoUrl: { type: String,  default: '' },
    mofoBadgeBnpDisplay: { type: Boolean, default: true },
    // ── Swiss Life ─────────────────────────────────────────────────────────
    mofoBadgeSlLabel:    { type: String,  default: 'Swiss Life' },
    mofoBadgeSlLogoUrl:  { type: String,  default: '' },
    mofoBadgeSlDisplay:  { type: Boolean, default: true },
    // ── CORUM ──────────────────────────────────────────────────────────────
    mofoBadgeCorumLabel:   { type: String,  default: 'CORUM' },
    mofoBadgeCorumLogoUrl: { type: String,  default: '' },
    mofoBadgeCorumDisplay: { type: Boolean, default: true },
    // ── Inter Gestion ──────────────────────────────────────────────────────
    mofoBadgeIgLabel:   { type: String,  default: 'Inter Gestion' },
    mofoBadgeIgLogoUrl: { type: String,  default: '' },
    mofoBadgeIgDisplay: { type: Boolean, default: true },
    // ── Caisse d'Épargne ───────────────────────────────────────────────────
    mofoBadgeCeLabel:   { type: String,  default: "Caisse d'Épargne" },
    mofoBadgeCeLogoUrl: { type: String,  default: '' },
    mofoBadgeCeDisplay: { type: Boolean, default: true },
    // ── PERIAL ─────────────────────────────────────────────────────────────
    mofoBadgePerialLabel:   { type: String,  default: 'PERIAL' },
    mofoBadgePerialLogoUrl: { type: String,  default: '' },
    mofoBadgePerialDisplay: { type: Boolean, default: true },
    // ── ODDO BHF ───────────────────────────────────────────────────────────
    mofoBadgeOddoLabel:   { type: String,  default: 'ODDO BHF' },
    mofoBadgeOddoLogoUrl: { type: String,  default: '' },
    mofoBadgeOddoDisplay: { type: Boolean, default: true },
    // ── Amundi ─────────────────────────────────────────────────────────────
    mofoBadgeAmundiLabel:   { type: String,  default: 'Amundi' },
    mofoBadgeAmundiLogoUrl: { type: String,  default: '' },
    mofoBadgeAmundiDisplay: { type: Boolean, default: true },
    // ── AXA ────────────────────────────────────────────────────────────────
    mofoBadgeAxaLabel:   { type: String,  default: 'AXA' },
    mofoBadgeAxaLogoUrl: { type: String,  default: '' },
    mofoBadgeAxaDisplay: { type: Boolean, default: true },
    // ── La Française ───────────────────────────────────────────────────────
    mofoBadgeLfLabel:   { type: String,  default: 'La Française' },
    mofoBadgeLfLogoUrl: { type: String,  default: '' },
    mofoBadgeLfDisplay: { type: Boolean, default: true },
    // ── Société Générale ───────────────────────────────────────────────────
    mofoBadgeSgLabel:   { type: String,  default: 'Société Générale' },
    mofoBadgeSgLogoUrl: { type: String,  default: '' },
    mofoBadgeSgDisplay: { type: Boolean, default: true },
  },

  setup(props) {
    const reducedMotion = ref(false)
    const visible       = ref(false)
    const headerRef     = ref(null)
    const radarRef      = ref(null)
    const sweepAngle    = ref(0)

    let _ioH      = null
    let _ioR      = null
    let _interval = null
    let _startMs  = null

    // ── Badges ────────────────────────────────────────────────────────────
    // Priority: radarBadges array prop (WeWeb binding) > flat badge props > DEFAULT_BADGES
    const badges = computed(() => {
      const ov = props.radarBadges
      if (Array.isArray(ov) && ov.length > 0) return ov

      // Build from flat props, then filter display === false
      return DEFAULT_BADGES.map(b => {
        const key = b.id.charAt(0).toUpperCase() + b.id.slice(1)
        const label   = props[`mofoBadge${key}Label`]   ?? b.label
        const logoUrl = props[`mofoBadge${key}LogoUrl`] ?? b.logoUrl
        const display = props[`mofoBadge${key}Display`] ?? true
        return { ...b, label, logoUrl, display }
      }).filter(b => b.display !== false)
    })

    const processedBadges = computed(() => {
      const angle = sweepAngle.value
      return badges.value.map(b => ({
        ...b,
        // Badge is ACTIVE when its polar angle is within SWEEP_ARC degrees
        // AHEAD of the beam leading edge (i.e. the beam is currently on top of it).
        // Formula: (badge.angle - beamAngle + 360) % 360 ≤ SWEEP_ARC
        // This is the correct direction: beam leading edge is at `angle`,
        // and the swept sector covers angle → angle + SWEEP_ARC (clockwise).
        active:   !reducedMotion.value && ((b.angle - angle + 360) % 360) <= SWEEP_ARC,
        posStyle: getBadgePosStyle(b.angle, b.radius),
      }))
    })

    // ── Sweep visual style (JS-driven for sync with badge states) ─────────
    const sweepStyle = computed(() => {
      if (reducedMotion.value) return { display: 'none' }
      return { transform: `rotate(${sweepAngle.value.toFixed(1)}deg)` }
    })

    onMounted(() => {
      reducedMotion.value = _prefersReducedMotion()
      if (reducedMotion.value) { visible.value = true; return }

      // Scroll-reveal on header
      try {
        const win = _getWin()
        if (typeof win.IntersectionObserver !== 'undefined') {
          _ioH = new win.IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { visible.value = true; _ioH?.disconnect() } },
            { threshold: 0.10 }
          )
          if (headerRef.value) _ioH.observe(headerRef.value)
        } else {
          visible.value = true
        }
      } catch { visible.value = true }

      // Radar sweep: drive sweepAngle via setInterval (~20fps badge state updates)
      _startMs  = Date.now()
      _interval = setInterval(() => {
        sweepAngle.value = ((Date.now() - _startMs) % SWEEP_MS) / SWEEP_MS * 360
      }, 50)
    })

    onUnmounted(() => {
      try { _ioH?.disconnect(); _ioR?.disconnect() } catch { /* noop */ }
      if (_interval) clearInterval(_interval)
    })

    return {
      visible,
      headerRef,
      radarRef,
      sweepAngle,
      sweepStyle,
      processedBadges,
    }
  },
}
</script>

<style scoped>
/* ── Scroll reveal ───────────────────────────────────────────────────────── */
.mofo__reveal {
  opacity: 0;
  transform: translateY(20px) scale(0.990);
  transition:
    opacity  0.72s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.72s cubic-bezier(0.16, 1, 0.3, 1);
}
.mofo__reveal.is-visible { opacity: 1; transform: none; }
.mofo__reveal--d1 { transition-delay: 100ms; }
.mofo__reveal--d2 { transition-delay: 200ms; }
.mofo__reveal--d3 { transition-delay: 280ms; }
.mofo__reveal--d4 { transition-delay: 380ms; }

@media (prefers-reduced-motion: reduce) {
  .mofo__reveal {
    opacity: 1 !important; transform: none !important; transition: none !important;
  }
}

/* ── Root ────────────────────────────────────────────────────────────────── */
.mofo {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.mofo--dark  { background: #0b1020; color: rgba(226,232,240,0.9); }
.mofo--light { background: #f9fafc; color: rgba(11,16,32,0.88); }

/* ── Top separator ───────────────────────────────────────────────────────── */
.mofo__bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.mofo__bg-line {
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 65%; max-width: 640px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(231,138,46,0.28), transparent);
}

/* ── Inner ───────────────────────────────────────────────────────────────── */
.mofo__inner {
  position: relative; z-index: 1;
  max-width: 1280px; margin: 0 auto;
  padding: 64px 24px 80px;
  display: flex; flex-direction: column; gap: 60px;
}
@media (min-width: 1024px) { .mofo__inner { padding: 80px 24px 96px; gap: 68px; } }
@media (min-width: 1280px) { .mofo__inner { padding: 88px 24px 104px; } }

/* ── Header ──────────────────────────────────────────────────────────────── */
.mofo__header {
  display: flex; flex-direction: column;
  align-items: center; gap: 18px; text-align: center;
}

/* Eyebrow pills row */
.mofo__eyebrow {
  display: flex; align-items: center; justify-content: center;
  gap: 10px; flex-wrap: wrap;
}
.mofo__pill {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 6px 14px 6px 10px; border-radius: 999px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.04em;
  border: 1px solid transparent;
}
.mofo__pill--orange {
  background: rgba(231,138,46,0.10);
  border-color: rgba(231,138,46,0.32);
  color: #E78A2E;
}
.mofo__pill-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #E78A2E; box-shadow: 0 0 7px rgba(231,138,46,0.75);
  flex-shrink: 0;
  animation: mofo-dot-pulse 2.2s ease-in-out infinite;
}
@keyframes mofo-dot-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.4); opacity: 0.60; }
}
@media (prefers-reduced-motion: reduce) { .mofo__pill-dot { animation: none; } }

.mofo--dark  .mofo__pill--muted { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.10); color: rgba(148,163,184,0.72); }
.mofo--light .mofo__pill--muted { background: rgba(11,16,32,0.04);    border-color: rgba(11,16,32,0.10);    color: rgba(71,85,105,0.72); }

/* Titles */
.mofo__h2 {
  font-size: clamp(28px, 5vw, 52px);
  font-weight: 800; line-height: 1.08;
  letter-spacing: -0.026em; margin: 0;
}
.mofo--dark  .mofo__h2 { color: rgba(248,250,252,0.97); }
.mofo--light .mofo__h2 { color: rgba(11,16,32,0.96); }
.mofo__h2-accent { color: #E78A2E; }

.mofo__sub {
  font-size: clamp(14px, 1.6vw, 16px);
  line-height: 1.70; margin: 0; max-width: 560px;
}
.mofo--dark  .mofo__sub { color: rgba(148,163,184,0.80); }
.mofo--light .mofo__sub { color: rgba(71,85,105,0.82); }

/* ── Main layout ─────────────────────────────────────────────────────────── */
.mofo__main {
  display: flex; flex-direction: column;
  align-items: center; gap: 24px;
}
@media (min-width: 1024px) {
  .mofo__main {
    flex-direction: row;
    align-items: center;
    justify-content: center; /* keeps radar centered between the two feat cards */
    gap: 32px;
  }
}

/* ── Feat cards ──────────────────────────────────────────────────────────── */
.mofo__feat {
  display: flex; flex-direction: column; gap: 14px;
  padding: 22px 20px; border-radius: 20px;
  width: 100%;
}
@media (min-width: 640px)  { .mofo__feat { max-width: 400px; } }
@media (min-width: 1024px) {
  .mofo__feat { flex: 0 0 auto; width: 210px; max-width: 210px; }
}

.mofo--dark  .mofo__feat {
  background: rgba(255,255,255,0.034);
  border: 1px solid rgba(255,255,255,0.08);
}
.mofo--light .mofo__feat {
  background: rgba(255,255,255,0.95);
  border: 1px solid rgba(11,16,32,0.09);
  box-shadow: 0 2px 20px rgba(0,0,0,0.05);
}

.mofo__feat-icon-ring {
  width: 44px; height: 44px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  color: #E78A2E;
}
.mofo--dark  .mofo__feat-icon-ring { background: rgba(231,138,46,0.12); }
.mofo--light .mofo__feat-icon-ring { background: rgba(231,138,46,0.10); }

.mofo__feat-body { display: flex; flex-direction: column; gap: 8px; }

.mofo__feat-title {
  font-size: 15px; font-weight: 700; line-height: 1.35;
  margin: 0; display: flex; align-items: center; gap: 8px;
}
.mofo--dark  .mofo__feat-title { color: rgba(248,250,252,0.95); }
.mofo--light .mofo__feat-title { color: rgba(11,16,32,0.94); }

.mofo__feat-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #E78A2E; flex-shrink: 0;
  box-shadow: 0 0 6px rgba(231,138,46,0.65);
}

.mofo__feat-desc {
  font-size: 13px; line-height: 1.60; margin: 0;
}
.mofo--dark  .mofo__feat-desc { color: rgba(148,163,184,0.78); }
.mofo--light .mofo__feat-desc { color: rgba(71,85,105,0.80); }

/* Mobile: radar first, feat-left before feat-right */
@media (max-width: 1023px) {
  .mofo__feat--left  { order: 1; }
  .mofo__radar-wrap  { order: 0; }
  .mofo__feat--right { order: 2; }
}

/* ── Radar container ─────────────────────────────────────────────────────── */
.mofo__radar-wrap {
  position: relative;
  width: 100%; max-width: 494px;   /* +30% from 380 */
  aspect-ratio: 1;
  flex-shrink: 0;
}
@media (min-width: 640px)  { .mofo__radar-wrap { max-width: 520px; } }
@media (min-width: 1024px) { .mofo__radar-wrap { flex: 1 1 auto; max-width: 624px; } } /* +30% from 480 */

/* Radar SVG — fills the container */
.mofo__radar-svg {
  position: absolute;
  inset: 0; width: 100%; height: 100%;
  display: block;
}

/* SVG element styles — dark mode */
.mofo--dark .mf-ring--outer    { fill: none; stroke: rgba(231,138,46,0.38); stroke-width: 1.4; }
.mofo--dark .mf-ring--inner    { fill: none; stroke: rgba(231,138,46,0.09); stroke-width: 0.7; }
.mofo--dark .mf-ring--center   { fill: none; stroke: rgba(231,138,46,0.22); stroke-width: 1.0; }
.mofo--dark .mf-tick           { stroke: rgba(231,138,46,0.13); stroke-width: 0.65; }
.mofo--dark .mf-tick--long     { stroke: rgba(231,138,46,0.25); stroke-width: 0.9; }
.mofo--dark .mf-crosshair      { stroke: rgba(231,138,46,0.05); stroke-width: 0.5; fill: none; }

/* SVG element styles — light mode */
.mofo--light .mf-ring--outer   { fill: none; stroke: rgba(231,138,46,0.42); stroke-width: 1.4; }
.mofo--light .mf-ring--inner   { fill: none; stroke: rgba(11,16,32,0.10);   stroke-width: 0.7; }
.mofo--light .mf-ring--center  { fill: none; stroke: rgba(11,16,32,0.18);   stroke-width: 1.0; }
.mofo--light .mf-tick          { stroke: rgba(11,16,32,0.10);  stroke-width: 0.65; }
.mofo--light .mf-tick--long    { stroke: rgba(11,16,32,0.20);  stroke-width: 0.9; }
.mofo--light .mf-crosshair     { stroke: rgba(11,16,32,0.04);  stroke-width: 0.5; fill: none; }

/* ── Sweep beam ──────────────────────────────────────────────────────────── */
.mofo__sweep {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  /* Leading edge at 0°, fading over ~120° toward trailing edge */
  background: conic-gradient(
    from 0deg,
    rgba(231,138,46,0.55) 0deg,
    rgba(231,138,46,0.30) 40deg,
    rgba(231,138,46,0.12) 82deg,
    rgba(231,138,46,0.03) 108deg,
    transparent           122deg,
    transparent           360deg
  );
  pointer-events: none;
  z-index: 1;
  transform-origin: center;
}

/* ── Radar center badge ──────────────────────────────────────────────────── */
.mofo__radar-center {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  display: flex; flex-direction: column; align-items: center;
  gap: 5px; z-index: 3;
}

.mofo__center-mark {
  flex-shrink: 0;
}
/* Icon in PREVEST orange with matching glow — dark mode */
.mofo--dark  .mofo__center-mark {
  color: #E78A2E;
  filter: drop-shadow(0 0 8px rgba(231,138,46,0.65));
}
/* Icon in PREVEST orange — light mode (slightly toned glow) */
.mofo--light .mofo__center-mark {
  color: #E78A2E;
  filter: drop-shadow(0 0 5px rgba(231,138,46,0.42));
}

.mofo__center-label {
  display: flex; flex-direction: column; align-items: center; gap: 0;
  line-height: 1.15;
}
.mofo__center-name {
  font-size: clamp(10px, 1.8vw, 13px);
  font-weight: 800; letter-spacing: 0.06em;
}
.mofo__center-ai {
  font-size: clamp(8px, 1.4vw, 10px);
  font-weight: 600; letter-spacing: 0.08em; opacity: 0.7;
}
.mofo--dark  .mofo__center-name,
.mofo--dark  .mofo__center-ai  { color: rgba(248,250,252,0.95); }
.mofo--light .mofo__center-name,
.mofo--light .mofo__center-ai  { color: rgba(11,16,32,0.92); }

/* ── Badge position wrapper ──────────────────────────────────────────────── */
.mofo__badge {
  position: absolute;
  z-index: 2;    /* above SVG rings (z-index implicit) and below beam (z-index 1) — see active override */
  /* scales with radar: clamp ensures readable min/max in absolute pixels */
  width: clamp(72px, 13.5%, 96px);
  /* transform only — opacity/glow handled by .mofo__badge-card */
  transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Inactive: centered on anchor, normal scale */
.mofo__badge        { transform: translate(-50%, -50%) scale(1.00); }
/* Active: lift above sweep beam (z-index: 1) + scale up */
.mofo__badge--active {
  transform: translate(-50%, -50%) scale(1.12);
  z-index: 4;   /* above sweep beam (z-index: 1) — active badges pop above orange glow */
}

/* ── Badge visual card ── */
.mofo__badge-card {
  width: 100%;
  display: flex; flex-direction: column; align-items: center;
  gap: 5px; padding: 8px 6px 6px;
  border-radius: 11px; border: 1px solid transparent;
  box-sizing: border-box;
  overflow: hidden;
  /* 750ms smooth transitions — no snap between states */
  transition:
    background     0.75s cubic-bezier(0.16, 1, 0.3, 1),
    border-color   0.75s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow     0.75s cubic-bezier(0.16, 1, 0.3, 1),
    opacity        0.75s cubic-bezier(0.22, 1, 0.36, 1);  /* slightly longer opacity ease-out */
}

/* ── Inactive (default) — nearly invisible / dormant ── */
.mofo--dark  .mofo__badge .mofo__badge-card {
  background:   rgba(11,16,32,0.70);
  border-color: rgba(255,255,255,0.05);
  opacity: 0.18;
}
.mofo--light .mofo__badge .mofo__badge-card {
  background:   rgba(215,220,232,0.50);
  border-color: rgba(11,16,32,0.05);
  opacity: 0.20;
}

/* ── Active (in beam) — clearly lit up / above beam ── */
.mofo--dark  .mofo__badge--active .mofo__badge-card {
  background:   rgba(14,20,38,0.92);   /* solid-ish so beam doesn't bleed through */
  border-color: rgba(231,138,46,0.82);
  box-shadow:
    0 0 0 1px rgba(231,138,46,0.38),
    0 6px 28px rgba(231,138,46,0.50),
    inset 0 1px 0 rgba(255,255,255,0.08);
  opacity: 1;
}
.mofo--light .mofo__badge--active .mofo__badge-card {
  background:   rgba(255,255,255,0.98);
  border-color: rgba(231,138,46,0.65);
  box-shadow:
    0 0 0 1px rgba(231,138,46,0.22),
    0 4px 20px rgba(231,138,46,0.30);
  opacity: 1;
}

/* ── Logo area ── */
.mofo__badge-logo-area {
  width: 100%; height: 28px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.mofo__badge-img {
  max-width: 100%; max-height: 26px;
  object-fit: contain; display: block;
}

/* Placeholder: colored brand block (mimics a real logo card) */
.mofo__badge-logo-block {
  width: 40px; height: 24px;
  border-radius: 5px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}
.mofo__badge-initials {
  font-size: 8px; font-weight: 900;
  letter-spacing: 0.04em; line-height: 1;
  color: rgba(255,255,255,0.92);
  text-align: center;
  white-space: nowrap;
}

/* ── Brand name label ── */
.mofo__badge-name {
  font-size: 8px; font-weight: 700;
  letter-spacing: 0.03em; text-align: center;
  line-height: 1.25; white-space: pre-line;
  max-width: 100%; overflow: hidden;
}
.mofo--dark  .mofo__badge .mofo__badge-name         { color: rgba(148,163,184,0.60); }
.mofo--dark  .mofo__badge--active .mofo__badge-name { color: rgba(248,250,252,0.95); }
.mofo--light .mofo__badge .mofo__badge-name         { color: rgba(71,85,105,0.60); }
.mofo--light .mofo__badge--active .mofo__badge-name { color: rgba(11,16,32,0.92); }

@media (prefers-reduced-motion: reduce) {
  .mofo__badge,
  .mofo__badge-card {
    transition: none !important;
    transform: translate(-50%, -50%) !important;
  }
  /* Keep badges readable but all at full opacity when motion is reduced */
  .mofo--dark  .mofo__badge .mofo__badge-card,
  .mofo--light .mofo__badge .mofo__badge-card {
    opacity: 0.55 !important;
  }
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
.mofo__footer {
  display: flex; align-items: center; justify-content: center;
  gap: 10px;
  font-size: 13px; font-weight: 600;
}
.mofo--dark  .mofo__footer { color: rgba(148,163,184,0.70); }
.mofo--light .mofo__footer { color: rgba(71,85,105,0.72); }

.mofo__footer-icon {
  flex-shrink: 0;
  color: #E78A2E;
  opacity: 0.85;
}
</style>
