<template>
  <section
    id="prevest-section-concept"
    data-prevest-section="concept"
    class="concept"
    :class="isDark ? 'concept--dark' : 'concept--light'"
  >
    <!-- Top separator glow line (same pattern as Story) -->
    <div class="concept__bg" aria-hidden="true">
      <div class="concept__bg-line" />
    </div>

    <div class="concept__inner">

      <!-- ── Section header ──────────────────────────────────────────────── -->
      <div class="concept__header" ref="headerRef">
        <div
          class="concept__badge concept__reveal"
          :class="{ 'is-visible': headerVisible }"
        >
          <span class="concept__badge-dot" aria-hidden="true" />
          <span>Le concept ?</span>
        </div>
        <h2
          class="concept__h2 concept__reveal concept__reveal--d1"
          :class="{ 'is-visible': headerVisible }"
        >
          Comprendre <span class="concept__h2-accent">avant de décider.</span>
        </h2>
        <p
          class="concept__sub concept__reveal concept__reveal--d2"
          :class="{ 'is-visible': headerVisible }"
        >
          PREVEST analyse, simule et explique vos options d'épargne avant toute recommandation.
        </p>
      </div>

      <!-- ── Body — 2 cols desktop / 1 col mobile ─────────────────────────── -->
      <div class="concept__body" ref="bodyRef">

        <!-- LEFT col — feature cards (mobile: below engine, via CSS order) -->
        <div class="concept__features">
          <div
            v-for="(feat, idx) in FEATURES"
            :key="feat.id"
            class="concept__feat concept__reveal"
            :class="[`concept__reveal--f${idx}`, { 'is-visible': bodyVisible }]"
          >
            <!-- Icon ring -->
            <div class="concept__feat-ring" aria-hidden="true">
              <!-- Chart / trend icon -->
              <svg v-if="feat.id === 'a'" viewBox="0 0 22 22" fill="none" width="20" height="20" aria-hidden="true">
                <path d="M2 16l5-5.5 4 2.5 4.5-6 4-2.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 19.5h18" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity=".4"/>
              </svg>
              <!-- Person / user icon -->
              <svg v-else-if="feat.id === 'b'" viewBox="0 0 22 22" fill="none" width="20" height="20" aria-hidden="true">
                <circle cx="11" cy="7.5" r="3.5" stroke="currentColor" stroke-width="1.6"/>
                <path d="M3.5 20c0-4 3.36-7 7.5-7s7.5 3 7.5 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
              <!-- Shield / check icon -->
              <svg v-else viewBox="0 0 22 22" fill="none" width="20" height="20" aria-hidden="true">
                <path d="M11 2L3 5.5V11c0 4.5 3.5 8.5 8 9.5 4.5-1 8-5 8-9.5V5.5L11 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <!-- Text body -->
            <div class="concept__feat-body">
              <div class="concept__feat-title">{{ feat.title }}</div>
              <div class="concept__feat-text">{{ feat.desc }}</div>
            </div>
          </div>
        </div>

        <!-- RIGHT col — engine card (mobile: shown first, via CSS order) -->
        <div
          class="concept__engine concept__reveal concept__reveal--eng"
          :class="{ 'is-visible': bodyVisible }"
        >
          <div class="concept__eng-head">Comment ça marche ?</div>

          <!-- ── Orbital visual ──────────────────────────────────────── -->
          <div class="concept__orbit" aria-label="Moteur de décision PREVEST">

            <svg
              class="concept__orbit-svg"
              viewBox="0 0 320 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <!-- Motion paths — centred at 160,100 with larger orbits -->
                <path id="cpt-po" d="M 308,100 A 148,82 0 0,1 12,100 A 148,82 0 0,1 308,100"/>
                <path id="cpt-pi" d="M 258,100 A 98,52 0 0,1 62,100 A 98,52 0 0,1 258,100"/>
                <!-- Orb gradients — stronger halo -->
                <radialGradient id="cpt-gh" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stop-color="#E78A2E" stop-opacity="0.42"/>
                  <stop offset="100%" stop-color="#E78A2E" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="cpt-gf" cx="38%" cy="32%" r="68%">
                  <stop offset="0%"   stop-color="#F5AC4C"/>
                  <stop offset="100%" stop-color="#C56B0A"/>
                </radialGradient>
              </defs>

              <!-- Orbit ring ellipses (stroke colour driven by CSS class) -->
              <ellipse class="cpt-ro" cx="160" cy="100" rx="148" ry="82" stroke-width="1.2"/>
              <ellipse class="cpt-ri" cx="160" cy="100" rx="98"  ry="52" stroke-width="0.9"/>

              <!-- Central orb: halo glow + core sphere — significantly enlarged -->
              <g class="cpt-halo">
                <circle cx="160" cy="100" r="68" fill="url(#cpt-gh)"/>
              </g>
              <circle cx="160" cy="100" r="44" fill="url(#cpt-gf)"/>

              <!-- Animated orbital dots (SMIL animateMotion) -->
              <template v-if="!reducedMotion">
                <!-- Outer orbit: orange leading dot -->
                <circle r="7" :fill="isDark ? '#E78A2E' : '#CC6D0E'" opacity="0.95">
                  <animateMotion dur="14s" repeatCount="indefinite">
                    <mpath href="#cpt-po"/>
                  </animateMotion>
                </circle>
                <!-- Outer orbit: trailing muted dot — 180° phase offset -->
                <circle r="5.5" :fill="isDark ? 'rgba(255,255,255,0.28)' : 'rgba(11,16,32,0.22)'">
                  <animateMotion dur="14s" begin="-7s" repeatCount="indefinite">
                    <mpath href="#cpt-po"/>
                  </animateMotion>
                </circle>
                <!-- Inner orbit: muted accent -->
                <circle r="5" :fill="isDark ? 'rgba(255,255,255,0.20)' : 'rgba(11,16,32,0.16)'">
                  <animateMotion dur="9s" begin="-1.5s" repeatCount="indefinite">
                    <mpath href="#cpt-pi"/>
                  </animateMotion>
                </circle>
                <!-- Inner orbit: orange accent — opposite phase -->
                <circle r="4.5" :fill="isDark ? 'rgba(231,138,46,0.62)' : 'rgba(200,107,10,0.65)'">
                  <animateMotion dur="9s" begin="-4.5s" repeatCount="indefinite">
                    <mpath href="#cpt-pi"/>
                  </animateMotion>
                </circle>
              </template>

              <!-- Static fallback (prefers-reduced-motion) -->
              <template v-else>
                <circle cx="308" cy="100" r="7"   :fill="isDark ? '#E78A2E' : '#CC6D0E'" opacity="0.95"/>
                <circle cx="12"  cy="100" r="5.5" :fill="isDark ? 'rgba(255,255,255,0.28)' : 'rgba(11,16,32,0.22)'"/>
                <circle cx="258" cy="100" r="5"   :fill="isDark ? 'rgba(255,255,255,0.20)' : 'rgba(11,16,32,0.16)'"/>
                <circle cx="62"  cy="100" r="4.5" :fill="isDark ? 'rgba(231,138,46,0.62)' : 'rgba(200,107,10,0.65)'"/>
              </template>

            </svg>

            <!-- Central icon — absolutely centred over the orb: PREVEST icon mark -->
            <div class="concept__orb-icon" aria-hidden="true">
              <!--
                PREVEST icon mark extracted from PrevestUnifiedHeader.vue
                (original viewBox="0 0 417.92 56.7", icon occupies 0 0 94 57)
              -->
              <svg viewBox="0 0 94 57" width="54" height="33" aria-hidden="true">
                <path fill="white"
                  d="M78.65,0H14.94C6.69,0,0,6.69,0,14.94v26.82c0,8.25,6.69,14.94,14.94,14.94h7.39v-6.14c0-3.76,3.05-6.8,6.8-6.8h26.53c1.22,0,2.2-.99,2.2-2.2v-4.04H3.03l.24-.65c.34-.9.7-1.81,1.08-2.69l.13-.29h14.61l-7.57-11.95.21-.27c.58-.75,1.19-1.49,1.79-2.2l.43-.5,9.45,14.92h8.31l-10.76-10.6,1.97-3.17,13.98,13.78h15.84l-28.03-16.68,1.92-3.1,21.43,12.75,10.02-6.17,2.66,2.64-9.15,5.63,8.18,4.87,10.2-10.18c.87-.87,2.33-.67,2.94.4l2.9,5.08-17.04,27.59h19.89c8.25,0,14.94-6.69,14.94-14.94V14.94c0-8.25-6.69-14.94-14.94-14.94ZM81.77,17.62l-4.84-4.65-6.36,2.14,4.65-4.84-2.14-6.36,4.84,4.65,6.36-2.14-4.65,4.84,2.14,6.36Z"
                />
              </svg>
            </div>
          </div><!-- /orbit -->

          <!-- ── Process steps ──────────────────────────────────────── -->
          <div class="concept__steps">
            <button
              v-for="(step, idx) in STEPS"
              :key="step.num"
              type="button"
              class="concept__step"
              :class="{ 'concept__step--on': activeStep === idx }"
              :aria-pressed="activeStep === idx ? 'true' : 'false'"
              @click="activeStep = idx"
            >
              <div class="concept__step-num" :aria-label="`Étape ${step.num}`">{{ step.num }}</div>
              <div class="concept__step-copy">
                <div class="concept__step-title">{{ step.title }}</div>
                <div class="concept__step-desc">{{ step.desc }}</div>
              </div>
            </button>
          </div>

        </div><!-- /engine -->

      </div><!-- /body -->

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

const FEATURES = [
  {
    id: 'a',
    title: 'Analyse continue',
    desc: "PREVEST surveille les produits d'épargne et d'investissement pour détecter les options les plus pertinentes.",
  },
  {
    id: 'b',
    title: 'Simulation personnalisée',
    desc: "Chaque recommandation est simulée selon votre profil, votre horizon et vos objectifs.",
  },
  {
    id: 'c',
    title: 'Décision éclairée',
    desc: "Vous comprenez les scénarios, les risques et les compromis avant d'agir.",
  },
]

const STEPS = [
  { num: '1', title: 'Définissez votre profil',       desc: 'Objectifs, horizon, risque, situation.' },
  { num: '2', title: 'PREVEST analyse votre épargne', desc: 'Lecture de votre situation et des solutions pertinentes.' },
  { num: '3', title: 'Compare les scénarios',         desc: 'Simulations, projections et arbitrages lisibles.' },
  { num: '4', title: 'Décidez en confiance',          desc: 'Une recommandation expliquée, pas juste affichée.' },
]

export default {
  name: 'AppConceptSection',
  props: {
    isDark: { type: Boolean, default: true },
  },
  emits: ['concept-step-click'],

  setup(props, { emit }) {
    const reducedMotion  = ref(false)
    const headerRef      = ref(null)
    const bodyRef        = ref(null)
    const headerVisible  = ref(false)
    const bodyVisible    = ref(false)
    const activeStep     = ref(0)

    let _ioH = null
    let _ioB = null

    onMounted(() => {
      reducedMotion.value = _prefersReducedMotion()
      if (reducedMotion.value) {
        headerVisible.value = true
        bodyVisible.value   = true
        return
      }
      try {
        const win = _getWin()
        if (typeof win.IntersectionObserver === 'undefined') {
          headerVisible.value = true; bodyVisible.value = true; return
        }
        _ioH = new win.IntersectionObserver(
          ([e]) => { if (e.isIntersecting) { headerVisible.value = true; _ioH?.disconnect() } },
          { threshold: 0.18 }
        )
        _ioB = new win.IntersectionObserver(
          ([e]) => { if (e.isIntersecting) { bodyVisible.value = true; _ioB?.disconnect() } },
          { threshold: 0.08 }
        )
        if (headerRef.value) _ioH.observe(headerRef.value)
        if (bodyRef.value)   _ioB.observe(bodyRef.value)
      } catch {
        headerVisible.value = true; bodyVisible.value = true
      }
    })

    onUnmounted(() => {
      try { _ioH?.disconnect(); _ioB?.disconnect() } catch { /* noop */ }
    })

    return {
      FEATURES,
      STEPS,
      reducedMotion,
      headerRef,
      bodyRef,
      headerVisible,
      bodyVisible,
      activeStep,
    }
  },
}
</script>

<style scoped>
/* ── Scroll reveal (same system as Hero / Story) ────────────────────────── */
.concept__reveal {
  opacity: 0;
  transform: translateY(22px) scale(0.988);
  transition:
    opacity  0.72s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.72s cubic-bezier(0.16, 1, 0.3, 1);
}
.concept__reveal.is-visible { opacity: 1; transform: none; }

.concept__reveal--d1  { transition-delay: 100ms; }
.concept__reveal--d2  { transition-delay: 200ms; }
.concept__reveal--f0  { transition-delay: 0ms; }
.concept__reveal--f1  { transition-delay: 130ms; }
.concept__reveal--f2  { transition-delay: 260ms; }
.concept__reveal--eng { transition-delay: 80ms; }

@media (prefers-reduced-motion: reduce) {
  .concept__reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

/* ── Root ────────────────────────────────────────────────────────────────── */
.concept {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.concept--dark  { background: #0b1020; color: rgba(226,232,240,0.9); }
.concept--light { background: #f9fafc; color: rgba(11,16,32,0.88); }

/* ── Top separator line ──────────────────────────────────────────────────── */
.concept__bg {
  position: absolute; inset: 0;
  pointer-events: none; z-index: 0;
}
.concept__bg-line {
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 65%; max-width: 640px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(231,138,46,0.28), transparent);
}

/* ── Inner container ─────────────────────────────────────────────────────── */
.concept__inner {
  position: relative; z-index: 1;
  max-width: 1280px; margin: 0 auto;
  padding: 64px 24px 80px;
  display: flex; flex-direction: column; gap: 64px;
}
@media (min-width: 1024px) { .concept__inner { padding: 80px 24px 96px; gap: 72px; } }
@media (min-width: 1280px) { .concept__inner { padding: 88px 24px 104px; } }

/* ── Section header (centred) ───────────────────────────────────────────── */
.concept__header {
  display: flex; flex-direction: column;
  align-items: center; gap: 16px; text-align: center;
}

.concept__badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 16px 7px 12px; border-radius: 999px;
  border: 1px solid rgba(231,138,46,0.28);
  background: rgba(231,138,46,0.09);
  font-size: 13px; font-weight: 600; color: #E78A2E;
}
.concept__badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #E78A2E; box-shadow: 0 0 7px rgba(231,138,46,0.70);
  flex-shrink: 0;
  animation: cpt-dot-pulse 2.2s ease-in-out infinite;
}
@keyframes cpt-dot-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.35); opacity: 0.65; }
}
@media (prefers-reduced-motion: reduce) { .concept__badge-dot { animation: none; } }

.concept__h2 {
  font-size: clamp(28px, 5vw, 52px);
  font-weight: 800; line-height: 1.08;
  letter-spacing: -0.026em; margin: 0;
}
.concept--dark  .concept__h2 { color: rgba(248,250,252,0.97); }
.concept--light .concept__h2 { color: rgba(11,16,32,0.96); }
.concept__h2-accent { color: #E78A2E; }

.concept__sub {
  font-size: clamp(14px, 1.6vw, 16px);
  line-height: 1.68; margin: 0; max-width: 540px;
}
.concept--dark  .concept__sub { color: rgba(148,163,184,0.80); }
.concept--light .concept__sub { color: rgba(71,85,105,0.82); }

/* ── Body — flex layout ──────────────────────────────────────────────────── */
.concept__body {
  display: flex; flex-direction: column; gap: 12px;
}
@media (min-width: 1024px) {
  .concept__body { flex-direction: row; align-items: stretch; gap: 18px; }
}

/* ── Feature cards (LEFT on desktop, BOTTOM on mobile) ─────────────────── */
.concept__features {
  display: flex; flex-direction: column; gap: 16px;
  order: 2;
}
@media (min-width: 1024px) {
  .concept__features { order: 0; width: 38%; flex-shrink: 0; }
}

.concept__feat {
  display: flex; align-items: center; gap: 18px;
  padding: 28px 22px; border-radius: 16px;
  cursor: default;
  transition: border-color 0.22s ease, box-shadow 0.22s ease;
}
@media (min-width: 1024px) {
  .concept__feat { flex: 1; padding: 30px 24px; }
}
.concept--dark .concept__feat {
  background: rgba(255,255,255,0.040);
  border: 1px solid rgba(255,255,255,0.08);
}
.concept--light .concept__feat {
  background: rgba(255,255,255,0.94);
  border: 1px solid rgba(11,16,32,0.09);
  box-shadow: 0 1px 16px rgba(0,0,0,0.05);
}
.concept--dark .concept__feat:hover  {
  border-color: rgba(231,138,46,0.22);
  box-shadow: 0 6px 24px rgba(231,138,46,0.10);
}
.concept--light .concept__feat:hover {
  border-color: rgba(231,138,46,0.26);
  box-shadow: 0 4px 20px rgba(231,138,46,0.10);
}

/* Icon ring */
.concept__feat-ring {
  flex-shrink: 0;
  width: 52px; height: 52px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.concept--dark .concept__feat-ring {
  background: rgba(11,16,32,0.75);
  border: 1.5px solid rgba(231,138,46,0.42);
  color: #E78A2E;
}
.concept--light .concept__feat-ring {
  background: rgba(231,138,46,0.07);
  border: 1.5px solid rgba(231,138,46,0.32);
  color: #C56B0A;
}

.concept__feat-body { flex: 1; min-width: 0; }
.concept__feat-title {
  font-size: 14.5px; font-weight: 700; line-height: 1.25; margin-bottom: 5px;
}
.concept--dark  .concept__feat-title { color: rgba(248,250,252,0.94); }
.concept--light .concept__feat-title { color: rgba(11,16,32,0.90); }
.concept__feat-text { font-size: 13px; line-height: 1.60; }
.concept--dark  .concept__feat-text { color: rgba(148,163,184,0.76); }
.concept--light .concept__feat-text { color: rgba(71,85,105,0.84); }

/* ── Engine card (RIGHT on desktop, TOP on mobile) ──────────────────────── */
.concept__engine {
  flex: 1; min-width: 0;
  display: flex; flex-direction: column; gap: 24px;
  padding: 32px 24px 32px; border-radius: 20px;
  order: 1;
}
.concept--dark .concept__engine {
  background: rgba(255,255,255,0.038);
  border: 1px solid rgba(255,255,255,0.09);
}
.concept--light .concept__engine {
  background: rgba(255,255,255,0.96);
  border: 1px solid rgba(11,16,32,0.08);
  box-shadow: 0 2px 24px rgba(0,0,0,0.06);
}
@media (min-width: 1024px) {
  .concept__engine { order: 0; padding: 36px 32px 36px; gap: 28px; }
}

.concept__eng-head {
  font-size: 18px; font-weight: 800;
  text-align: center; letter-spacing: -0.025em;
  line-height: 1.2;
}
@media (min-width: 1024px) {
  .concept__eng-head { font-size: 22px; }
}
.concept--dark  .concept__eng-head { color: rgba(248,250,252,0.96); }
.concept--light .concept__eng-head { color: rgba(11,16,32,0.88); }

/* ── Orbital visual — balanced with process strip ─────────────────────── */
.concept__orbit {
  position: relative;
  width: 100%; max-width: 300px;
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .concept__orbit { max-width: 420px; }
}
.concept__orbit-svg {
  width: 100%; height: auto; display: block;
  overflow: visible;
}

/* Orbit ring stroke colours — CSS overrides SVG attribute defaults */
.concept--dark  .cpt-ro { stroke: rgba(255,255,255,0.13); fill: none; }
.concept--light .cpt-ro { stroke: rgba(11,16,32,0.17);    fill: none; }
.concept--dark  .cpt-ri { stroke: rgba(255,255,255,0.08); fill: none; }
.concept--light .cpt-ri { stroke: rgba(11,16,32,0.12);    fill: none; }

/* Orb halo breathing animation */
.cpt-halo { animation: cpt-halo-breathe 3.5s ease-in-out infinite; }
@keyframes cpt-halo-breathe {
  0%, 100% { opacity: 0.88; }
  50%       { opacity: 0.34; }
}
@media (prefers-reduced-motion: reduce) { .cpt-halo { animation: none; } }

/* Central icon overlay — anchored to centre of the orbit container */
.concept__orb-icon {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  display: flex; align-items: center; justify-content: center;
  pointer-events: none;
}

/* ── Process steps ───────────────────────────────────────────────────────── */
.concept__steps {
  display: flex; flex-direction: column; gap: 8px;
  position: relative;
}
@media (min-width: 1024px) {
  .concept__steps {
    flex-direction: row; align-items: flex-start; gap: 0;
  }
  /* Horizontal connector line — aligned to centre of 36px step-num circles */
  .concept__steps::before {
    content: '';
    position: absolute;
    top: 18px;
    left: 18px; right: 18px;
    height: 1px;
    pointer-events: none;
  }
  .concept--dark  .concept__steps::before { background: rgba(255,255,255,0.11); }
  .concept--light .concept__steps::before { background: rgba(11,16,32,0.09); }
}

.concept__step {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 8px 6px;
  /* reset button styles */
  appearance: none; -webkit-appearance: none;
  background: none; border: none;
  text-align: inherit; font: inherit; color: inherit;
  cursor: pointer;
  transition: opacity 0.18s ease;
}
.concept__step:focus-visible { outline: 2px solid #E78A2E; outline-offset: 2px; border-radius: 8px; }
@media (min-width: 1024px) {
  .concept__step {
    flex: 1;
    flex-direction: column; align-items: center;
    gap: 10px; text-align: center; padding: 0 6px;
    position: relative; z-index: 1;
  }
}

.concept__step-num {
  flex-shrink: 0;
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 800; line-height: 1;
  transition: background 0.22s ease, border-color 0.22s ease, color 0.22s ease, box-shadow 0.22s ease;
}
.concept--dark .concept__step-num {
  border: 2px solid rgba(255,255,255,0.16);
  color: rgba(255,255,255,0.45);
  background: rgba(11,16,32,0.70);
}
.concept--light .concept__step-num {
  border: 2px solid rgba(11,16,32,0.14);
  color: rgba(11,16,32,0.42);
  background: rgba(249,250,252,0.92);
}
/* Active step */
.concept__step--on .concept__step-num {
  background: #E78A2E !important;
  border-color: #E78A2E !important;
  color: #0b1020 !important;
  box-shadow: 0 0 14px rgba(231,138,46,0.52);
}
/* Hover preview — inactive steps only */
.concept__step:not(.concept__step--on):hover .concept__step-num {
  background: rgba(231,138,46,0.15) !important;
  border-color: rgba(231,138,46,0.55) !important;
  color: #E78A2E !important;
  box-shadow: 0 0 10px rgba(231,138,46,0.28);
  transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;
}

.concept__step-copy { flex: 1; min-width: 0; }
@media (min-width: 1024px) { .concept__step-copy { flex: 0 1 auto; } }

.concept__step-title {
  font-size: 13.5px; font-weight: 700; line-height: 1.3; margin-bottom: 5px;
  transition: color 0.18s ease, font-weight 0.18s ease;
}
.concept--dark  .concept__step-title { color: rgba(226,232,240,0.78); }
.concept--light .concept__step-title { color: rgba(11,16,32,0.70); }
.concept--dark  .concept__step--on .concept__step-title { color: rgba(248,250,252,0.97); font-weight: 800; }
.concept--light .concept__step--on .concept__step-title { color: rgba(11,16,32,0.94); font-weight: 800; }
/* Hover preview for inactive steps */
.concept--dark  .concept__step:not(.concept__step--on):hover .concept__step-title { color: rgba(248,250,252,0.88); }
.concept--light .concept__step:not(.concept__step--on):hover .concept__step-title { color: rgba(11,16,32,0.84); }

.concept__step-desc {
  font-size: 12px; line-height: 1.58;
}
.concept--dark  .concept__step-desc { color: rgba(148,163,184,0.65); }
.concept--light .concept__step-desc { color: rgba(71,85,105,0.76); }

@media (prefers-reduced-motion: reduce) {
  .concept__step-num,
  .concept__step-title { transition: none !important; }
}
</style>
