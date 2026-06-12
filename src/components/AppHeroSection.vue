<template>
  <section
    id="prevest-section-hero"
    data-prevest-section="hero"
    class="hero" :class="{ 'hero--dark': isDark, 'hero--light': !isDark }">

    <!-- Atmospheric glow — pure radial-gradient, zero hard edges -->
    <div class="hero__glows" aria-hidden="true" />

    <div class="hero__inner">

      <!-- ── Left column — copy ─────────────────────────────────────────── -->
      <div class="hero__copy">

        <!-- Badge -->
        <div class="hero__badge hero__anim" style="--ad:0ms">
          <span class="hero__badge-dot" aria-hidden="true" />
          <span>Simulation financière intelligente</span>
        </div>

        <!-- H1 -->
        <h1 class="hero__h1 hero__anim" style="--ad:90ms">
          Comparez. Simulez.<br>
          <span class="hero__h1-orange">Investissez mieux.</span>
        </h1>

        <!-- Subtext -->
        <p class="hero__sub hero__anim" style="--ad:190ms">
          PREVEST, avec IRIS, vous aide à comparer les meilleurs produits d'épargne et d'investissement, à simuler différents scénarios et à choisir l'option la plus adaptée à vos objectifs.
        </p>

        <!-- ── CTA unique IRIS ── (remonté avant les benefits) -->
        <div class="hero__actions hero__anim" style="--ad:290ms">
          <button type="button" class="hero__cta-primary" @click="onCompareClick" aria-label="Commencer à comparer avec IRIS">
            <span class="hero__cta-avatar-slot">
              <span class="hero__iris-ring">
                <img
                  v-if="irisAvatarUrl"
                  :src="irisAvatarUrl"
                  alt="IRIS"
                  class="hero__iris-img"
                  loading="eager"
                  referrerpolicy="no-referrer"
                />
                <span v-else class="hero__iris-fallback" aria-hidden="true">I</span>
              </span>
            </span>
            <span class="hero__cta-text">Commencer à comparer avec IRIS</span>
            <span class="hero__cta-arrow" aria-hidden="true">→</span>
          </button>
        </div>

        <!-- ── Social proof + security ── (juste après le CTA) -->
        <div class="hero__trust hero__anim" style="--ad:380ms">

          <!-- Avatars + count -->
          <div class="hero__proof">
            <div class="hero__avatars" aria-label="Utilisateurs">
              <div class="hero__av hero__av--1" aria-hidden="true">A</div>
              <div class="hero__av hero__av--2" aria-hidden="true">M</div>
              <div class="hero__av hero__av--3" aria-hidden="true">J</div>
              <div class="hero__av hero__av--4" aria-hidden="true">S</div>
              <div class="hero__av hero__av--more" aria-hidden="true">+</div>
            </div>
            <div class="hero__proof-text">
              <span class="hero__proof-count">
                <svg viewBox="0 0 14 14" fill="none" width="13" height="13" aria-hidden="true"><rect x="1.5" y="8.5" width="2.5" height="4" rx=".5" stroke="currentColor" stroke-width="1.2"/><rect x="5.75" y="5" width="2.5" height="7.5" rx=".5" stroke="currentColor" stroke-width="1.2"/><rect x="10" y="1.5" width="2.5" height="11" rx=".5" stroke="currentColor" stroke-width="1.2"/></svg>
                10 000+
              </span>
              <span class="hero__proof-label">simulations réalisées</span>
              <span class="hero__proof-sub">Comparaisons anonymisées, sans engagement</span>
            </div>
          </div>

          <!-- Security -->
          <div class="hero__trust-sep" aria-hidden="true" />
          <div class="hero__security" aria-label="Sécurité des données">
            <div class="hero__security-icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none" width="15" height="15"><path d="M8 1.5L2 4v3.8c0 3.4 2.5 6.5 6 7.2 3.5-.7 6-3.8 6-7.2V4L8 1.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M5.5 8l2 2 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <span>Données sécurisées et privées</span>
          </div>

        </div>

        <!-- Benefits row — after CTA + trust (justification complémentaire) -->
        <div class="hero__benefits hero__anim" style="--ad:490ms">
          <div class="hero__benefit">
            <span class="hero__benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 18 18" fill="none"><rect x="2" y="10" width="3" height="6" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="7.5" y="6" width="3" height="10" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="13" y="2" width="3" height="14" rx="1" stroke="currentColor" stroke-width="1.5"/></svg>
            </span>
            <div>
              <div class="hero__benefit-title">Simulations avancées</div>
              <div class="hero__benefit-desc">Modélisez vos stratégies</div>
            </div>
          </div>
          <div class="hero__benefit">
            <span class="hero__benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 18 18" fill="none"><path d="M9 1.5l1.8 5.4H16l-4.4 3.2 1.7 5.2-4.3-3.2-4.3 3.2 1.7-5.2L2 6.9h5.2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
            </span>
            <div>
              <div class="hero__benefit-title">Comparaisons impartiales</div>
              <div class="hero__benefit-desc">Évaluez les meilleures options</div>
            </div>
          </div>
          <div class="hero__benefit">
            <span class="hero__benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 7.5C6.5 6.1 7.6 5 9 5s2.5 1.1 2.5 2.5c0 1.8-2.5 2-2.5 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="9" cy="13.5" r="1" fill="currentColor"/></svg>
            </span>
            <div>
              <div class="hero__benefit-title">Hypothèses transparentes</div>
              <div class="hero__benefit-desc">Gardez le contrôle</div>
            </div>
          </div>
        </div>
      </div><!-- /copy -->

      <!-- ── Right column — illustration ──────────────────────────────────── -->
      <div class="hero__visual" aria-hidden="true">

        <img
          :src="heroImageUrl"
          alt=""
          class="hero__deer hero__anim"
          style="--ad:110ms"
          loading="eager"
          draggable="false"
          referrerpolicy="no-referrer"
        />

      </div><!-- /visual -->

    </div><!-- /inner -->

    <!-- ── Scroll cue — centered, premium, animée ─────────────────────────── -->
    <div class="hero__scroll-cue hero__anim" style="--ad:900ms" aria-label="Défiler vers le bas">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-dot" />
      </div>
      <!-- Subtle orange chevron below the mouse -->
      <svg class="hero__scroll-chevron" viewBox="0 0 16 10" fill="none" width="16" height="10" aria-hidden="true">
        <path d="M1 1.5 L8 8.5 L15 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

  </section>
</template>

<script>
import { computed, onMounted } from 'vue'

function _getWin() {
  try { return (typeof wwLib !== 'undefined' ? wwLib?.getFrontWindow?.() : null) ?? window } catch { return window }
}
function _getDoc() {
  try { return (typeof wwLib !== 'undefined' ? wwLib?.getFrontDocument?.() : null) ?? document } catch { return document }
}

export default {
  name: 'AppHeroSection',
  props: {
    isDark:        { type: Boolean, default: true },
    compareUrl:    { type: String,  default: '/start' },
    exploreUrl:    { type: String,  default: '#placements' },
    heroDarkUrl:   { type: String,  default: '' },
    heroLightUrl:  { type: String,  default: '' },
    irisAvatarUrl: { type: String,  default: '' },
  },
  emits: ['compare-click', 'explore-click', 'hero-mounted'],

  setup(props, { emit }) {
    const heroImageUrl = computed(() => props.isDark ? props.heroDarkUrl : props.heroLightUrl)

    onMounted(() => emit('hero-mounted'))

    function onCompareClick() {
      emit('compare-click')
      try { _getWin().location.href = props.compareUrl } catch { /* noop */ }
    }
    function onExploreClick() {
      emit('explore-click')
      try {
        const url = props.exploreUrl ?? '#placements'
        if (url.startsWith('#')) {
          const el = _getDoc()?.getElementById(url.slice(1))
          if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return }
        }
        _getWin().location.href = url
      } catch { /* noop */ }
    }

    return { heroImageUrl, onCompareClick, onExploreClick }
  },
}
</script>

<style scoped>
/* ═══ Entrance animation ═══════════════════════════════════════════════════ */
.hero__anim {
  animation: hero-fade-up 0.72s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: var(--ad, 0ms);
}
@keyframes hero-fade-up {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .hero__anim { animation: none !important; opacity: 1 !important; transform: none !important; }
}

/* ═══ Root ══════════════════════════════════════════════════════════════════ */
.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
/* Dark: same as global PRE background → seamless with header */
.hero--dark  { background: #0b1020; color: rgba(226, 232, 240, 0.92); }
.hero--light { background: #f9fafc; color: rgba(11, 16, 32, 0.88); }

/* ═══ Glow — pure CSS radial-gradient, organic, zero hard edges ═════════ */
/* Bottom-left indigo glow removed (visible "blue square" artifact).       */
/* Orange glow repositioned at center-right of illustration area.          */
.hero__glows {
  position: absolute; inset: 0;
  pointer-events: none; overflow: hidden; z-index: 0;
  background-image:
    radial-gradient(ellipse 48% 52% at 70% 45%, rgba(231, 138, 46, 0.076) 0%, transparent 74%);
}
.hero--light .hero__glows {
  background-image:
    radial-gradient(ellipse 48% 52% at 70% 45%, rgba(231, 138, 46, 0.052) 0%, transparent 74%);
}

/* ═══ Layout ════════════════════════════════════════════════════════════════ */
/* Horizontal padding fixed at 24px across all breakpoints to align with   */
/* the PRE header container. max-width + margin:auto handles centering.    */
.hero__inner {
  position: relative; z-index: 1;
  max-width: 1280px; margin: 0 auto;
  padding: 44px 24px 64px;      /* mobile: tighter top, enough bottom */
  display: flex; flex-direction: column;
}
@media (min-width: 1024px) {
  .hero__inner {
    flex-direction: row;
    align-items: flex-start;
    padding: 80px 24px 72px;
    min-height: 820px;           /* desktop only */
  }
}
@media (min-width: 1280px) {
  .hero__inner { padding: 88px 24px 80px; }
}

/* ═══ Copy column ═══════════════════════════════════════════════════════════ */
.hero__copy {
  position: relative; z-index: 2;
  display: flex; flex-direction: column; gap: 18px;  /* mobile: tighter */
  width: 100%;
}
@media (min-width: 1024px) {
  .hero__copy { width: 48%; flex-shrink: 0; padding-right: 48px; gap: 28px; padding-top: 8px; }
}

/* Badge */
.hero__badge {
  display: inline-flex; align-items: center; gap: 8px;
  align-self: flex-start;
  padding: 6px 14px 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(231,138,46,0.30);
  background: rgba(231,138,46,0.10);
  font-size: 13px; font-weight: 600; color: #E78A2E;
  letter-spacing: 0.01em;
}
.hero--light .hero__badge {
  background: rgba(231,138,46,0.09);
  border-color: rgba(231,138,46,0.26);
}
.hero__badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #E78A2E;
  box-shadow: 0 0 7px rgba(231,138,46,0.75);
  flex-shrink: 0;
  animation: pulse-dot 2.2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.35); opacity: 0.65; }
}
@media (prefers-reduced-motion: reduce) { .hero__badge-dot { animation: none; } }

/* H1 */
.hero__h1 {
  font-size: clamp(28px, 7.5vw, 54px);
  font-weight: 800; line-height: 1.10; letter-spacing: -0.026em; margin: 0;
}
.hero--dark  .hero__h1 { color: rgba(248, 250, 252, 0.97); }
.hero--light .hero__h1 { color: rgba(11, 16, 32, 0.96); }
.hero__h1-orange { color: #E78A2E; }
@media (min-width: 1024px) { .hero__h1 { font-size: clamp(38px, 4.0vw, 56px); } }

/* Subtext */
.hero__sub {
  font-size: clamp(13.5px, 1.7vw, 16px);
  line-height: 1.68; margin: 0; max-width: 520px;
}
.hero--dark  .hero__sub { color: rgba(226,232,240,0.65); }
.hero--light .hero__sub { color: rgba(11,16,32,0.60); }

/* ═══ Benefits ══════════════════════════════════════════════════════════════ */
/* Compact group — must not exceed CTA width visually */
.hero__benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-self: flex-start;    /* prevents stretching to full column width */
}
@media (min-width: 1024px) { .hero__benefits { flex-wrap: nowrap; gap: 8px; } }

.hero__benefit {
  display: flex; align-items: center; gap: 7px;
  padding: 7px 10px 7px 7px;  /* reduced horizontal padding */
  border-radius: 10px;
  transition: border-color 0.16s, background 0.16s;
}
.hero--dark  .hero__benefit {
  border: 1px solid rgba(255,255,255,0.055);   /* more subtle */
  background: rgba(255,255,255,0.026);
  backdrop-filter: blur(6px);
}
.hero--light .hero__benefit {
  border: 1px solid rgba(11,16,32,0.07);
  background: rgba(255,255,255,0.60);
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}
.hero__benefit:hover {
  border-color: rgba(231,138,46,0.18);
  background: rgba(231,138,46,0.055);
}
.hero__benefit-icon {
  display: flex; align-items: center; justify-content: center;
  width: 26px; height: 26px; flex-shrink: 0;
  border-radius: 8px;
  background: rgba(231,138,46,0.09);  /* lighter icon bg */
  color: #E78A2E;
}
.hero__benefit-icon svg { width: 13px; height: 13px; display: block; }
.hero__benefit-title { font-size: 11.5px; font-weight: 700; line-height: 1.25; white-space: nowrap; }
.hero--dark  .hero__benefit-title { color: rgba(255,255,255,0.80); }  /* slightly dimmer */
.hero--light .hero__benefit-title { color: rgba(11,16,32,0.78); }
.hero__benefit-desc { font-size: 10.5px; line-height: 1.25; white-space: nowrap; }
.hero--dark  .hero__benefit-desc { color: rgba(255,255,255,0.32); }
.hero--light .hero__benefit-desc { color: rgba(11,16,32,0.38); }

/* ═══ CTAs ══════════════════════════════════════════════════════════════════ */
/* Single IRIS CTA — 3-column grid: avatar slot | text | arrow */
.hero__actions {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  width: 100%;
  overflow: visible;
}

/* ── Desktop: extra breathing room between the main copy groups ──────────── */
@media (min-width: 1024px) {
  .hero__actions  { margin-top: 16px; }
  .hero__trust    { margin-top: 14px; }
  .hero__benefits { margin-top: 10px; }
}

@media (max-width: 1023px) {
  .hero__actions { margin-top:  8px; }
  .hero__trust   { margin-top: 10px; }
}

.hero__cta-primary {
  --hero-avatar-size: 77px;
  --hero-avatar-slot: 77px;
  --hero-arrow-slot: 48px;
  --hero-cta-gap: 20px;

  position: relative;
  display: grid;
  grid-template-columns:
    var(--hero-avatar-slot)
    minmax(0, 1fr)
    var(--hero-arrow-slot);
  align-items: center;
  column-gap: var(--hero-cta-gap);
  width: 100%;
  max-width: none;
  min-height: 70px;
  padding: 12px 28px 12px 0;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #E78A2E 0%, #d4751e 100%);
  color: #0b1020;
  font-size: 15.5px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.01em;
  box-shadow: 0 4px 32px rgba(231,138,46,0.40);
  transition: transform 0.18s cubic-bezier(0.16,1,0.3,1), box-shadow 0.18s ease;
  overflow: visible;
  animation: cta-glow-once 1.4s ease-out 1.0s both;
}
.hero__cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 48px rgba(231,138,46,0.60);
}
.hero__cta-primary:active { transform: translateY(0); }
.hero__cta-primary:focus-visible { outline: 2px solid #E78A2E; outline-offset: 3px; }
@keyframes cta-glow-once {
  0%   { box-shadow: 0 4px 32px rgba(231,138,46,0.40); }
  50%  { box-shadow: 0 4px 64px rgba(231,138,46,0.74); }
  100% { box-shadow: 0 4px 32px rgba(231,138,46,0.40); }
}
.hero__cta-primary::after {
  content: '';
  position: absolute; inset: 0;
  border-radius: inherit;
  background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%);
  background-size: 250% 100%;
  background-position: -200% center;
  animation: cta-shimmer 1.2s ease-out 0.7s 1 both;
  pointer-events: none;
}
@keyframes cta-shimmer {
  from { background-position: -200% center; }
  to   { background-position: 300% center; }
}
@media (prefers-reduced-motion: reduce) {
  .hero__cta-primary { animation: none; }
  .hero__cta-primary::after { animation: none; }
}

.hero__cta-avatar-slot {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: var(--hero-avatar-slot);
  min-width: var(--hero-avatar-slot);
  overflow: visible;
}

.hero__iris-ring {
  display: block;
  width: var(--hero-avatar-size);
  height: var(--hero-avatar-size);
  margin-block: -8px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 2.5px solid rgba(255,255,255,0.55);
  background: rgba(252, 220, 168, 0.92);
  overflow: hidden;
  box-shadow:
    0 0 0 3px rgba(231,138,46,0.32),
    0 0 16px rgba(231,138,46,0.45);
  transition: box-shadow 0.2s ease;
  z-index: 2;
}
.hero__cta-primary:hover .hero__iris-ring {
  box-shadow:
    0 0 0 3px rgba(231,138,46,0.55),
    0 0 28px rgba(231,138,46,0.75);
}
.hero__iris-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  image-rendering: auto;
}
.hero__iris-fallback {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 20px;
  color: rgba(60,30,0,0.80);
}

.hero__cta-text {
  position: relative;
  z-index: 1;
  min-width: 0;
  overflow: visible;
  white-space: nowrap;
  line-height: 1.15;
  text-align: left;
}

.hero__cta-arrow {
  display: grid;
  place-items: center;
  min-width: var(--hero-arrow-slot);
  width: var(--hero-arrow-slot);
  height: 100%;
  align-self: stretch;
  border-left: 1px solid rgba(11, 16, 32, 0.12);
  font-size: 20px;
  line-height: 1;
  white-space: nowrap;
  transition: transform 0.18s ease;
}

@media (min-width: 1024px) {
  .hero__cta-primary {
    --hero-avatar-size: 88px;
    --hero-avatar-slot: 88px;
    --hero-arrow-slot: 52px;
    --hero-cta-gap: 22px;
    min-height: 74px;
    font-size: 17px;
    padding: 14px 28px 14px 0;
  }
  .hero__cta-primary:hover .hero__cta-arrow { transform: translateX(3px); }
}

@media (max-width: 1023px) {
  .hero__cta-primary {
    --hero-avatar-size: 64px;
    --hero-avatar-slot: 64px;
    --hero-arrow-slot: 44px;
    --hero-cta-gap: 14px;
    min-height: auto;
    padding: 12px 20px 12px 0;
    font-size: clamp(14px, 4vw, 17px);
  }
  .hero__cta-text {
    white-space: normal;
    text-wrap: balance;
    line-height: 1.15;
  }
  .hero__cta-arrow { font-size: 18px; }
}

@media (max-width: 390px) {
  .hero__cta-primary {
    --hero-avatar-size: 56px;
    --hero-avatar-slot: 56px;
    --hero-arrow-slot: 40px;
    --hero-cta-gap: 12px;
    padding: 11px 18px 11px 0;
  }
}

/* ═══ Trust row ═════════════════════════════════════════════════════════════ */
.hero__trust {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 20px;
}
@media (min-width: 640px) {
  .hero__trust {
    flex-wrap: nowrap;   /* single line on desktop */
    gap: 0;
  }
}

/* Social proof */
.hero__proof { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.hero__avatars { display: flex; }
.hero__av {
  width: 32px; height: 32px; border-radius: 50%;
  margin-left: -8px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 11.5px; font-weight: 700;
}
.hero--dark  .hero__av { border: 2.5px solid #0b1020; }
.hero--light .hero__av { border: 2.5px solid #f6f8fc; }
.hero__av:first-child { margin-left: 0; }

/* Credible face-tone gradients */
.hero__av--1 { background: linear-gradient(145deg, #f5c5a3, #dc8f60); color: rgba(0,0,0,0.60); }
.hero__av--2 { background: linear-gradient(145deg, #d4a070, #a86e3a); color: rgba(255,255,255,0.88); }
.hero__av--3 { background: linear-gradient(145deg, #f8e0d0, #e2aa88); color: rgba(0,0,0,0.55); }
.hero__av--4 { background: linear-gradient(145deg, #6e5448, #4a3428); color: rgba(255,255,255,0.92); }
.hero__av--more {
  background: rgba(231,138,46,0.14);
  border-color: rgba(231,138,46,0.28) !important;
  color: #E78A2E; font-size: 12px;
}
.hero__avatars:hover .hero__av {
  transform: translateY(-2px);
  transition: transform 0.18s ease;
}
@media (prefers-reduced-motion: reduce) { .hero__avatars:hover .hero__av { transform: none; } }

.hero__proof-text { display: flex; flex-direction: column; gap: 1px; }
.hero__proof-count {
  display: flex; align-items: center; gap: 5px;
  font-size: 13px; font-weight: 700;
}
.hero--dark  .hero__proof-count { color: rgba(248,250,252,0.90); }
.hero--light .hero__proof-count { color: rgba(11,16,32,0.88); }
.hero__proof-label { font-size: 11px; }
.hero--dark  .hero__proof-label { color: rgba(255,255,255,0.40); }
.hero--light .hero__proof-label { color: rgba(11,16,32,0.46); }
/* proof-sub: hidden by default, never affects trust row layout */
.hero__proof-sub { display: none; }

/* Separator between proof and security */
.hero__trust-sep {
  flex-shrink: 0;
  width: 1px; height: 28px;
  margin: 0 16px;
}
.hero--dark  .hero__trust-sep { background: rgba(255,255,255,0.10); }
.hero--light .hero__trust-sep { background: rgba(11,16,32,0.12); }
@media (max-width: 639px) { .hero__trust-sep { display: none; } }

/* Security — green */
.hero__security {
  display: flex; align-items: center; gap: 7px;
  padding: 6px 12px 6px 8px;
  border-radius: 999px;
  border: 1px solid rgba(16, 185, 129, 0.20);
  background: rgba(16, 185, 129, 0.08);
  font-size: 12px; font-weight: 600;
  color: #10B981;
  flex-shrink: 0;
  white-space: nowrap;
}
.hero__security-icon {
  display: flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; flex-shrink: 0;
  color: #10B981;
}
.hero__security-icon svg { display: block; }

/* ═══ Visual column ═════════════════════════════════════════════════════════ */
.hero__visual {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  /* no background — the illustration is transparent PNG on #0b1020 */
}

/* Deer */
.hero__deer {
  display: block;
  object-fit: contain;
  /* no background fallback — transparent PNG */
  animation: deer-float 7s ease-in-out infinite;
}
@keyframes deer-float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
}
@media (prefers-reduced-motion: reduce) { .hero__deer { animation: none; } }

/* Mobile: decorative bottom accent — anchored to hero bottom, character visible */
@media (max-width: 1023px) {
  .hero__visual {
    position: absolute;
    top: auto;
    bottom: 8px;             /* anchored near hero bottom — minimal gap */
    right: -8px;             /* barely off-edge so character isn't cut off */
    width: 90vw;
    max-width: 360px;
    opacity: 0.18;           /* ghost-level: atmospheric only */
    pointer-events: none;
    z-index: 0;              /* behind copy z-index: 2 */
  }
  .hero__deer { width: 100%; height: auto; animation: none; }
  .hero__perf-card { display: none; }
  .hero__copy { padding-bottom: 0; }

  /* Trust row: allow wrap on narrow screens */
  .hero__trust { flex-wrap: wrap; gap: 8px 12px; }
  .hero__trust-sep { display: none; }  /* hide separator on mobile — they wrap */

  /* Benefits: more compact on mobile */
  .hero__benefits { gap: 6px; flex-wrap: wrap; }
  .hero__benefit  { padding: 6px 9px 6px 6px; }


  /* Scroll cue: hidden on mobile (dock handles navigation awareness) */
  .hero__scroll-cue { display: none; }
}
/* Desktop: fills right column */
@media (min-width: 1024px) {
  .hero__visual { width: 52%; overflow: visible; margin-top: -16px; }
  .hero__deer { width: 100%; max-width: 680px; margin-left: auto; }
}
@media (min-width: 1280px) {
  .hero__deer { max-width: 760px; }
}

/* ═══ Scroll cue ════════════════════════════════════════════════════════════ */
.hero__scroll-cue {
  position: absolute;
  bottom: 72px;                /* raised — clear of dock and bottom edge */
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: default;
}
/* Hide on mobile — not needed when hero stacks vertically */
@media (max-width: 1023px) { .hero__scroll-cue { display: none; } }

.hero__scroll-mouse {
  width: 22px; height: 34px;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  padding-top: 7px;
  box-sizing: border-box;
}
.hero--dark  .hero__scroll-mouse { border: 1.5px solid rgba(255,255,255,0.24); }
.hero--light .hero__scroll-mouse { border: 1.5px solid rgba(11,16,32,0.22); }

.hero__scroll-dot {
  width: 3.5px; height: 7px;
  border-radius: 2px;
  animation: scroll-dot-drop 2s ease-in-out 2.6s infinite;
}
.hero--dark  .hero__scroll-dot { background: rgba(255,255,255,0.40); }
.hero--light .hero__scroll-dot { background: rgba(11,16,32,0.32); }

@keyframes scroll-dot-drop {
  0%         { transform: translateY(0);   opacity: 1; }
  60%        { transform: translateY(8px); opacity: 0.20; }
  100%       { transform: translateY(0);   opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .hero__scroll-dot { animation: none; }
}

/* Chevron below the mouse */
.hero__scroll-chevron {
  display: block;
  color: rgba(231, 138, 46, 0.55);  /* soft orange */
  animation: scroll-chevron-pulse 2s ease-in-out 3.0s infinite;
}
.hero--light .hero__scroll-chevron { color: rgba(231, 138, 46, 0.45); }
@keyframes scroll-chevron-pulse {
  0%, 100% { opacity: 0.55; transform: translateY(0); }
  50%       { opacity: 0.90; transform: translateY(3px); }
}
@media (prefers-reduced-motion: reduce) {
  .hero__scroll-chevron { animation: none; }
}
</style>
