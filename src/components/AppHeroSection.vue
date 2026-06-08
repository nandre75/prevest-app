<template>
  <section class="hero" :class="{ 'hero--dark': isDark, 'hero--light': !isDark }">
    <!-- Atmospheric background glow -->
    <div class="hero__bg-glow" aria-hidden="true">
      <div class="hero__glow-orb hero__glow-orb--1" />
      <div class="hero__glow-orb hero__glow-orb--2" />
    </div>

    <div class="hero__inner">

      <!-- ── Left column — copy ─────────────────────────────────────────── -->
      <div class="hero__copy">

        <!-- Badge -->
        <div class="hero__badge">
          <span class="hero__badge-dot" aria-hidden="true" />
          <span><strong>IRIS</strong> · votre agent d'aide à la décision</span>
        </div>

        <!-- H1 -->
        <h1 class="hero__h1">
          Comparez. Simulez.<br>
          <span class="hero__h1-orange">Investissez mieux,</span><br>
          en toute confiance.
        </h1>

        <!-- Subtext -->
        <p class="hero__subtext">
          PREVEST, avec IRIS, vous aide à comparer les meilleurs produits d'épargne et d'investissement, à simuler différents scénarios et à choisir l'option la plus adaptée à vos objectifs.
        </p>

        <!-- Benefits chips -->
        <div class="hero__benefits">
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
              <svg viewBox="0 0 18 18" fill="none"><path d="M9 2l1.4 4h3.8l-3.1 2.3 1.2 3.7L9 10 5.7 12l1.2-3.7L3.8 6h3.8z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
            </span>
            <div>
              <div class="hero__benefit-title">Comparaisons impartiales</div>
              <div class="hero__benefit-desc">Évaluez les meilleures options</div>
            </div>
          </div>
          <div class="hero__benefit">
            <span class="hero__benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6.5" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 7C6.5 5.9 7.6 5 9 5s2.5.9 2.5 2c0 1.5-2.5 2-2.5 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="9" cy="13" r=".9" fill="currentColor"/></svg>
            </span>
            <div>
              <div class="hero__benefit-title">Hypothèses transparentes</div>
              <div class="hero__benefit-desc">Gardez le contrôle</div>
            </div>
          </div>
        </div>

        <!-- CTAs -->
        <div class="hero__ctas">
          <!-- Primary CTA -->
          <button type="button" class="hero__cta-primary" @click="onCompareClick" aria-label="Commencer à comparer avec IRIS">
            <img
              v-if="irisAvatarUrl"
              :src="irisAvatarUrl"
              alt="IRIS"
              class="hero__cta-iris"
              loading="eager"
              referrerpolicy="no-referrer"
            />
            <div v-else class="hero__cta-iris-fallback" aria-hidden="true">I</div>
            <span>Commencer à comparer avec IRIS</span>
          </button>

          <!-- Secondary CTA -->
          <button type="button" class="hero__cta-secondary" @click="onExploreClick">
            Explorer les placements
          </button>
        </div>

        <!-- Social proof + security -->
        <div class="hero__proof-row">
          <!-- Avatars -->
          <div class="hero__proof">
            <div class="hero__avatars">
              <div class="hero__avatar hero__avatar--1" aria-hidden="true">A</div>
              <div class="hero__avatar hero__avatar--2" aria-hidden="true">B</div>
              <div class="hero__avatar hero__avatar--3" aria-hidden="true">C</div>
              <div class="hero__avatar hero__avatar--4" aria-hidden="true">D</div>
              <div class="hero__avatar hero__avatar--plus" aria-hidden="true">+</div>
            </div>
            <div class="hero__proof-text">
              <span class="hero__proof-count">
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true"><rect x="2" y="9" width="2.5" height="5" rx=".5" stroke="currentColor" stroke-width="1.3"/><rect x="6.75" y="5" width="2.5" height="9" rx=".5" stroke="currentColor" stroke-width="1.3"/><rect x="11.5" y="1" width="2.5" height="13" rx=".5" stroke="currentColor" stroke-width="1.3"/></svg>
                10 000+
              </span>
              <span class="hero__proof-label">simulations réalisées</span>
            </div>
          </div>
          <!-- Security -->
          <div class="hero__security">
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16" aria-hidden="true"><path d="M8 1.5L2 4v4c0 3.3 2.4 6.4 6 7.1 3.6-.7 6-3.8 6-7.1V4L8 1.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M5.5 8l2 2 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Données sécurisées et privées</span>
          </div>
        </div>

      </div><!-- /copy -->

      <!-- ── Right column — illustration ───────────────────────────────── -->
      <div class="hero__visual">
        <!-- Performance card -->
        <div class="hero__perf-card">
          <div class="hero__perf-badge">Performance 12 mois</div>
          <div class="hero__perf-value">+8,42 %</div>
          <div class="hero__perf-category">Marchés actions · Monde</div>
          <div class="hero__perf-chart" aria-hidden="true">
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 35 L15 28 L30 32 L45 20 L60 22 L75 14 L90 8 L105 5 L120 2" stroke="#E78A2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <path d="M0 35 L15 28 L30 32 L45 20 L60 22 L75 14 L90 8 L105 5 L120 2 L120 40 L0 40Z" fill="url(#perfGrad)" opacity="0.25"/>
              <defs>
                <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#E78A2E" stop-opacity="0.6"/>
                  <stop offset="100%" stop-color="#E78A2E" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <!-- Deer illustration — eager on desktop -->
        <picture class="hero__deer-wrap">
          <source
            v-if="isMobile"
            :srcset="isDark ? heroMobileDarkUrl : heroMobileLightUrl"
            media="(max-width: 1023px)"
          />
          <img
            :src="isDark ? heroDesktopDarkUrl : heroDesktopLightUrl"
            alt=""
            class="hero__deer"
            loading="eager"
            draggable="false"
          />
        </picture>
      </div><!-- /visual -->

    </div><!-- /inner -->
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

function _getWin() {
  try { return (typeof wwLib !== 'undefined' ? wwLib?.getFrontWindow?.() : null) ?? window } catch { return window }
}
function _getDoc() {
  try { return (typeof wwLib !== 'undefined' ? wwLib?.getFrontDocument?.() : null) ?? document } catch { return document }
}

export default {
  name: 'AppHeroSection',
  props: {
    isDark:               { type: Boolean, default: true },
    compareUrl:           { type: String,  default: '/start' },
    exploreUrl:           { type: String,  default: '#placements' },
    heroDesktopDarkUrl:   { type: String,  default: '' },
    heroDesktopLightUrl:  { type: String,  default: '' },
    heroMobileDarkUrl:    { type: String,  default: '' },
    heroMobileLightUrl:   { type: String,  default: '' },
    irisAvatarUrl:        { type: String,  default: '' },
  },
  emits: ['compare-click', 'explore-click', 'hero-mounted'],

  setup(props, { emit }) {
    const isMobile = ref(false)
    let _resizeH = null
    function _checkMobile() { try { isMobile.value = _getWin().innerWidth < 1024 } catch { /* noop */ } }
    onMounted(() => {
      _checkMobile()
      _resizeH = () => _checkMobile()
      try { _getWin().addEventListener('resize', _resizeH, { passive: true }) } catch { /* noop */ }
      emit('hero-mounted')
    })
    onUnmounted(() => { try { _getWin().removeEventListener('resize', _resizeH) } catch { /* noop */ } })

    function onCompareClick() {
      emit('compare-click')
      try { _getWin().location.href = props.compareUrl } catch { /* noop */ }
    }

    function onExploreClick() {
      emit('explore-click')
      try {
        const url = props.exploreUrl ?? '#placements'
        if (url.startsWith('#')) {
          const anchor = url.slice(1)
          const doc = _getDoc()
          const el = doc?.getElementById(anchor) ?? doc?.querySelector(`[data-anchor="${anchor}"]`)
          if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return }
        }
        _getWin().location.href = url
      } catch { /* noop */ }
    }

    return { isMobile, onCompareClick, onExploreClick }
  },
}
</script>

<style scoped>
/* ── Root ──────────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

/* ── Backgrounds ─────────────────────────────────────────────────────────── */
.hero--dark  { background: #06091a; color: rgba(226,232,240,0.9); }
.hero--light { background: #f4f6fb; color: rgba(15,23,42,0.88); }

.hero__bg-glow { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 0; }
.hero__glow-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
.hero__glow-orb--1 {
  width: 600px; height: 600px;
  top: -200px; right: -100px;
  background: rgba(231, 138, 46, 0.10);
}
.hero__glow-orb--2 {
  width: 400px; height: 400px;
  bottom: -100px; left: -80px;
  background: rgba(99, 102, 241, 0.07);
}
.hero--light .hero__glow-orb--1 { background: rgba(231, 138, 46, 0.07); }
.hero--light .hero__glow-orb--2 { background: rgba(99, 102, 241, 0.05); }

/* ── Inner — 2 columns desktop ───────────────────────────────────────────── */
.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 64px 24px 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (min-width: 1024px) {
  .hero__inner {
    flex-direction: row;
    align-items: center;
    padding: 96px 48px 100px;
    gap: 40px;
    min-height: 800px;
  }
}

@media (min-width: 1280px) {
  .hero__inner { padding: 100px 64px 108px; }
}

/* ── Copy column ─────────────────────────────────────────────────────────── */
.hero__copy {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
}

@media (min-width: 1024px) {
  .hero__copy { width: 46%; flex-shrink: 0; gap: 32px; }
}

/* Badge */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  align-self: flex-start;
  padding: 7px 14px 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(231, 138, 46, 0.28);
  background: rgba(231, 138, 46, 0.10);
  font-size: 13px;
  font-weight: 600;
  color: #E78A2E;
  letter-spacing: 0.01em;
  animation: badge-shimmer 3s ease-in-out infinite;
}
.hero--light .hero__badge { background: rgba(231, 138, 46, 0.08); }

.hero__badge-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #E78A2E;
  box-shadow: 0 0 8px rgba(231, 138, 46, 0.7);
  flex-shrink: 0;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes badge-shimmer {
  0%, 100% { box-shadow: 0 0 0 0 rgba(231,138,46,0); }
  50% { box-shadow: 0 0 20px 2px rgba(231,138,46,0.12); }
}
@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}
@media (prefers-reduced-motion: reduce) {
  .hero__badge, .hero__badge-dot { animation: none; }
}

/* H1 */
.hero__h1 {
  font-size: clamp(32px, 6vw, 56px);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin: 0;
  color: inherit;
}
.hero--dark  .hero__h1 { color: rgba(248,250,252,0.96); }
.hero--light .hero__h1 { color: rgba(15,23,42,0.94); }
.hero__h1-orange { color: #E78A2E; }

@media (min-width: 1024px) {
  .hero__h1 { font-size: clamp(40px, 4.5vw, 58px); line-height: 1.1; }
}

/* Subtext */
.hero__subtext {
  font-size: clamp(14px, 2.2vw, 17px);
  line-height: 1.7;
  margin: 0;
  opacity: 0.72;
  max-width: 540px;
}

/* Benefits chips */
.hero__benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero__benefit {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 14px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(10px);
  transition: background 0.15s, border-color 0.15s;
}
.hero--light .hero__benefit {
  border-color: rgba(15,23,42,0.08);
  background: rgba(255,255,255,0.7);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.hero__benefit:hover { border-color: rgba(231,138,46,0.24); background: rgba(231,138,46,0.06); }

.hero__benefit-icon {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; flex-shrink: 0;
  border-radius: 10px;
  background: rgba(231,138,46,0.12);
  color: #E78A2E;
}
.hero__benefit-icon svg { width: 16px; height: 16px; display: block; }

.hero__benefit-title {
  font-size: 12.5px; font-weight: 700;
  color: rgba(255,255,255,0.88); line-height: 1.2;
  white-space: nowrap;
}
.hero--light .hero__benefit-title { color: rgba(15,23,42,0.84); }
.hero__benefit-desc {
  font-size: 11.5px; font-weight: 400;
  color: rgba(255,255,255,0.42); line-height: 1.2;
  white-space: nowrap;
}
.hero--light .hero__benefit-desc { color: rgba(15,23,42,0.42); }

/* CTAs */
.hero__ctas { display: flex; flex-direction: column; gap: 12px; }

@media (min-width: 480px) {
  .hero__ctas { flex-direction: row; flex-wrap: wrap; gap: 12px; }
}

.hero__cta-primary {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 420px;
  height: 60px;
  padding: 0 28px 0 10px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #E78A2E, #d4751e);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.01em;
  box-shadow: 0 4px 24px rgba(231,138,46,0.36), 0 0 0 0 rgba(231,138,46,0);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.hero__cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 36px rgba(231,138,46,0.52);
}
.hero__cta-primary:active { transform: translateY(0); }
.hero__cta-primary:focus-visible { outline: 2px solid #E78A2E; outline-offset: 3px; }

@media (max-width: 479px) {
  .hero__cta-primary { max-width: 100%; justify-content: center; height: 56px; font-size: 15px; }
}

.hero__cta-iris {
  width: 40px; height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: rgba(255,255,255,0.2);
  flex-shrink: 0;
}
.hero__cta-iris-fallback {
  width: 40px; height: 40px; border-radius: 50%;
  background: rgba(255,255,255,0.25);
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 16px; flex-shrink: 0;
}

.hero__cta-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 420px;
  height: 60px;
  padding: 0 28px;
  border-radius: 999px;
  border: 1.5px solid rgba(255,255,255,0.16);
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  color: rgba(255,255,255,0.84);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
}
.hero--light .hero__cta-secondary {
  border-color: rgba(15,23,42,0.18);
  background: rgba(255,255,255,0.6);
  color: rgba(15,23,42,0.78);
}
.hero__cta-secondary:hover {
  color: #E78A2E;
  border-color: rgba(231,138,46,0.40);
  background: rgba(231,138,46,0.06);
}
.hero__cta-secondary:focus-visible { outline: 2px solid #E78A2E; outline-offset: 2px; }

@media (max-width: 479px) {
  .hero__cta-secondary { max-width: 100%; height: 56px; font-size: 15px; }
}

/* Social proof row */
.hero__proof-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 24px;
}

.hero__proof { display: flex; align-items: center; gap: 10px; }

.hero__avatars { display: flex; }
.hero__avatar {
  width: 32px; height: 32px;
  border-radius: 50%;
  border: 2px solid rgba(10,15,30,0.7);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; color: #fff;
  flex-shrink: 0; background: #1e3050;
  margin-left: -8px;
}
.hero__avatar:first-child { margin-left: 0; }
.hero__avatar--1 { background: linear-gradient(135deg,#4e7cbf,#3357a0); }
.hero__avatar--2 { background: linear-gradient(135deg,#7c5ebf,#5c3da0); }
.hero__avatar--3 { background: linear-gradient(135deg,#bf7c5e,#a05c3d); }
.hero__avatar--4 { background: linear-gradient(135deg,#5ebfac,#3da08f); }
.hero__avatar--plus { background: rgba(231,138,46,0.15); color: #E78A2E; border-color: rgba(231,138,46,0.3); font-size: 14px; }

.hero__proof-text { display: flex; flex-direction: column; gap: 1px; }
.hero__proof-count { display: flex; align-items: center; gap: 5px; font-size: 14px; font-weight: 700; color: rgba(255,255,255,0.9); }
.hero--light .hero__proof-count { color: rgba(15,23,42,0.88); }
.hero__proof-label { font-size: 11.5px; color: rgba(255,255,255,0.44); }
.hero--light .hero__proof-label { color: rgba(15,23,42,0.44); }

.hero__security {
  display: flex; align-items: center; gap: 7px;
  font-size: 12.5px; font-weight: 500;
  color: rgba(255,255,255,0.44);
}
.hero--light .hero__security { color: rgba(15,23,42,0.48); }

/* ── Visual column ───────────────────────────────────────────────────────── */
.hero__visual {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Deer */
.hero__deer-wrap {
  display: block;
  position: relative;
  z-index: 1;
}

.hero__deer {
  width: 100%;
  max-width: 480px;
  height: auto;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 0 40px rgba(231,138,46,0.2));
  animation: deer-float 6s ease-in-out infinite;
}

@media (max-width: 1023px) {
  .hero__visual {
    position: absolute;
    top: 0; right: -20px;
    width: 55%;
    max-width: 280px;
    opacity: 0.55;
    pointer-events: none;
    z-index: 0;
  }
  .hero__deer { max-width: 100%; }
  .hero__copy { position: relative; z-index: 1; }
}

@media (min-width: 1024px) {
  .hero__visual { width: 54%; }
  .hero__deer { max-width: 560px; }
}

@media (prefers-reduced-motion: reduce) {
  .hero__deer { animation: none; }
}

@keyframes deer-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

/* Performance card */
.hero__perf-card {
  position: absolute;
  bottom: 32px;
  left: 0px;
  z-index: 2;
  padding: 16px 20px;
  border-radius: 20px;
  border: 1px solid rgba(231,138,46,0.20);
  background: rgba(10,15,30,0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  min-width: 200px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.36), 0 0 0 0.5px rgba(231,138,46,0.15);
}
.hero--light .hero__perf-card {
  background: rgba(255,255,255,0.88);
  border-color: rgba(231,138,46,0.16);
  box-shadow: 0 8px 28px rgba(0,0,0,0.12);
}

.hero__perf-badge {
  font-size: 10.5px; font-weight: 600;
  color: rgba(255,255,255,0.44);
  text-transform: uppercase; letter-spacing: 0.08em;
  margin-bottom: 6px;
}
.hero--light .hero__perf-badge { color: rgba(15,23,42,0.44); }

.hero__perf-value {
  font-size: 28px; font-weight: 800;
  color: #22c55e; letter-spacing: -0.03em;
  line-height: 1;
}
.hero__perf-category {
  font-size: 11px; font-weight: 500;
  color: rgba(255,255,255,0.36);
  margin-top: 4px;
}
.hero--light .hero__perf-category { color: rgba(15,23,42,0.42); }

.hero__perf-chart {
  margin-top: 10px;
  overflow: hidden;
}
.hero__perf-chart svg { width: 100%; height: 40px; display: block; }

@media (max-width: 1023px) {
  .hero__perf-card { display: none; }
}
</style>
