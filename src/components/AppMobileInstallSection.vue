<template>
  <!-- Desktop only — hidden entirely on mobile via CSS -->
  <section
    id="prevest-section-mobile-install"
    data-prevest-section="mobile-install"
    class="mi" :class="isDark ? 'mi--dark' : 'mi--light'">

    <div class="mi__bg" aria-hidden="true">
      <div class="mi__bg-line" />
    </div>

    <div class="mi__inner">
      <div class="mi__layout" ref="sectionRef">

        <!-- ── LEFT: copy + 3-step tutorial ──────────────────────────── -->
        <div class="mi__left">

          <div class="mi__eyebrow mi__reveal" :class="{ 'is-visible': visible }">
            <span class="mi__pill">
              <span class="mi__pill-dot" aria-hidden="true" />
              L'application mobile
            </span>
          </div>

          <h2 class="mi__h2 mi__reveal mi__reveal--d1" :class="{ 'is-visible': visible }">
            <span class="mi__h2-line">PREVEST AI,</span>
            <span class="mi__h2-line mi__h2-accent">dans votre poche</span>
          </h2>

          <p class="mi__intro mi__reveal mi__reveal--d2" :class="{ 'is-visible': visible }">
            Accédez à vos simulations et suivez l'évolution de vos projets où que vous soyez. Installez PREVEST sur votre téléphone en quelques secondes et gardez le contrôle à tout moment.
          </p>

          <div class="mi__steps-section mi__reveal mi__reveal--d2" :class="{ 'is-visible': visible }">
            <p class="mi__steps-title">
              <span class="mi__steps-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 18 22" fill="none" width="13" height="16">
                  <rect x="2" y="1" width="14" height="20" rx="3" stroke="currentColor" stroke-width="1.5"/>
                  <circle cx="9" cy="17.5" r="1.1" fill="currentColor"/>
                </svg>
              </span>
              Installez l'app PREVEST en 3 étapes
            </p>

            <div class="mi__steps">
              <div
                v-for="(step, i) in STEPS"
                :key="step.id"
                class="mi__step mi__reveal"
                :class="[`mi__reveal--d${i + 3}`, { 'is-visible': visible }]"
              >
                <!-- Number + connector line -->
                <div class="mi__step-spine" aria-hidden="true">
                  <div class="mi__step-num">{{ step.id }}</div>
                  <div v-if="i < STEPS.length - 1" class="mi__step-vline" />
                </div>

                <!-- Card -->
                <div class="mi__step-card">
                  <div class="mi__step-icn" aria-hidden="true">
                    <!-- Camera -->
                    <svg v-if="step.icon === 'camera'" viewBox="0 0 20 18" fill="none" width="16" height="14">
                      <path d="M7 2H13L15.5 5H18a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1H4.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
                      <circle cx="10" cy="10.5" r="3" stroke="currentColor" stroke-width="1.4"/>
                    </svg>
                    <!-- QR scan -->
                    <svg v-else-if="step.icon === 'qrscan'" viewBox="0 0 20 20" fill="none" width="16" height="16">
                      <path d="M2 7V3h4M14 3h4v4M14 17h4v-4M2 13v4h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                      <rect x="5" y="5" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.2"/>
                      <rect x="11" y="5" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.2"/>
                      <rect x="5" y="11" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.2"/>
                      <rect x="12" y="12" width="2" height="2" fill="currentColor"/>
                      <rect x="14" y="14" width="2" height="2" fill="currentColor"/>
                    </svg>
                    <!-- Share/Add-to-home -->
                    <svg v-else viewBox="0 0 18 20" fill="none" width="14" height="16">
                      <rect x="1" y="7" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.4"/>
                      <path d="M9 1v10M6 4l3-3 3 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="mi__step-text">
                    <p class="mi__step-label">{{ step.title }}</p>
                    <p v-if="step.sub" class="mi__step-sub">{{ step.sub }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- /left -->

        <!-- ── CENTER: phone mockup ───────────────────────────────────── -->
        <div
          class="mi__phone-wrap mi__reveal mi__reveal--d2"
          :class="{ 'is-visible': visible }"
          ref="phoneRef"
        >
          <div class="mi__phone-glow" aria-hidden="true" />
          <div class="mi__phone" role="img" aria-label="Écran de l'application PREVEST mobile">
            <div class="mi__phone-notch" aria-hidden="true" />
            <div class="mi__phone-screen">

              <!-- Screenshot (CDN default or prop override) -->
              <img
                :src="resolvedScreenUrl"
                alt="Écran de l'application PREVEST mobile"
                class="mi__phone-img"
              />
            </div>
          </div>
        </div><!-- /phone-wrap -->

        <!-- ── RIGHT: QR card ─────────────────────────────────────────── -->
        <div
          class="mi__qr-outer mi__reveal mi__reveal--d3"
          :class="{ 'is-visible': visible }"
        >
          <div class="mi__qr-card">
            <!-- Corner brackets decoration -->
            <span class="mi__br mi__br--tl" aria-hidden="true"/>
            <span class="mi__br mi__br--tr" aria-hidden="true"/>
            <span class="mi__br mi__br--bl" aria-hidden="true"/>
            <span class="mi__br mi__br--br" aria-hidden="true"/>

            <!-- QR graphic — local SVG as CSS mask, theme-driven fill -->
            <div class="mi__qr-img-wrap">
              <div
                class="mi__qr-graphic"
                :style="qrMaskStyle"
                role="img"
                aria-label="QR code ouvrant https://www.prevest.ai/"
              />
            </div>

            <!-- Footer label -->
            <div class="mi__qr-foot">
              <div class="mi__qr-scan-icn" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                  <path d="M2 7V3h4M14 3h4v4M14 17h4v-4M2 13v4h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                  <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <p class="mi__qr-label">Scannez pour accéder à PREVEST sur mobile</p>
            </div>
          </div>
        </div><!-- /qr-outer -->

      </div><!-- /layout -->
    </div><!-- /inner -->
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import prevestQrCodeSvg from '../assets/prevest-qr-code.svg'

function _getWin() {
  try { return (typeof wwLib !== 'undefined' ? wwLib?.getFrontWindow?.() : null) ?? window } catch { return window }
}
function _prefersReducedMotion() {
  try { return _getWin().matchMedia('(prefers-reduced-motion: reduce)').matches } catch { return false }
}

const DEFAULT_SCREEN_URL = "https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/screen-mobile-app.png?_wwcv=1780995431595"

const STEPS = [
  {
    id: 1,
    icon: 'camera',
    title: "Ouvrez l\u2019appareil photo",
    sub: "de votre t\u00e9l\u00e9phone.",
  },
  {
    id: 2,
    icon: 'qrscan',
    title: "Scannez le QR code.",
    sub: null,
  },
  {
    id: 3,
    icon: 'share',
    title: "Ouvrez PREVEST puis utilisez \u00ab\u00a0Ajouter \u00e0 l\u2019\u00e9cran d\u2019accueil\u00a0\u00bb",
    sub: "pour installer l\u2019app.",
  },
]

export default {
  name: 'AppMobileInstallSection',

  props: {
    isDark:                 { type: Boolean, default: true },
    mobileQrCodeUrl:        { type: String,  default: '' },
    mobileAppScreenshotUrl: { type: String,  default: '' },
  },

  setup(props) {
    const visible    = ref(false)
    const sectionRef = ref(null)
    const phoneRef   = ref(null)

    let _io = null

    onMounted(() => {
      if (_prefersReducedMotion()) { visible.value = true; return }
      try {
        const win = _getWin()
        if (typeof win.IntersectionObserver !== 'undefined' && sectionRef.value) {
          _io = new win.IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { visible.value = true; _io?.disconnect() } },
            { threshold: 0.08 }
          )
          _io.observe(sectionRef.value)
        } else {
          visible.value = true
        }
      } catch { visible.value = true }
    })

    onUnmounted(() => { try { _io?.disconnect() } catch { /* noop */ } })

    const resolvedScreenUrl = computed(() => props.mobileAppScreenshotUrl || DEFAULT_SCREEN_URL)

    const qrMaskStyle = computed(() => ({
      maskImage: `url(${prevestQrCodeSvg})`,
      WebkitMaskImage: `url(${prevestQrCodeSvg})`,
    }))

    return { STEPS, visible, sectionRef, phoneRef, prevestQrCodeSvg, qrMaskStyle, resolvedScreenUrl }
  },
}
</script>

<style scoped>
/* ── Desktop-only gate ───────────────────────────────────────────────────── */
.mi { display: none; }
@media (min-width: 1024px) { .mi { display: block; } }

/* ── Scroll reveal ───────────────────────────────────────────────────────── */
.mi__reveal {
  opacity: 0;
  transform: translateY(20px) scale(0.992);
  transition:
    opacity   0.72s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.72s cubic-bezier(0.16, 1, 0.3, 1);
}
.mi__reveal.is-visible { opacity: 1; transform: none; }
.mi__reveal--d1 { transition-delay: 100ms; }
.mi__reveal--d2 { transition-delay: 200ms; }
.mi__reveal--d3 { transition-delay: 320ms; }
.mi__reveal--d4 { transition-delay: 380ms; }
.mi__reveal--d5 { transition-delay: 450ms; }
@media (prefers-reduced-motion: reduce) {
  .mi__reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
  .mi__phone  { animation: none !important; }
  .mi__pill-dot { animation: none !important; }
}

/* ── Root ────────────────────────────────────────────────────────────────── */
.mi { position: relative; width: 100%; box-sizing: border-box; overflow: hidden; }
.mi--dark  { background: #0b1020; color: rgba(226,232,240,0.9); }
.mi--light { background: #f9fafc; color: rgba(11,16,32,0.88); }

.mi__bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.mi__bg-line {
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 65%; max-width: 640px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(231,138,46,0.28), transparent);
}

/* ── Inner ───────────────────────────────────────────────────────────────── */
.mi__inner {
  position: relative; z-index: 1;
  max-width: 1280px; margin: 0 auto;
  padding: 88px 24px 104px;
}

/* ── 3-column layout ─────────────────────────────────────────────────────── */
.mi__layout {
  display: grid;
  grid-template-columns: 5fr 3.5fr 2.8fr;
  gap: 40px;
  align-items: center;
}

/* ── Left column ─────────────────────────────────────────────────────────── */
.mi__left { display: flex; flex-direction: column; gap: 24px; }

/* Eyebrow */
.mi__eyebrow { display: flex; }
.mi__pill {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 16px 6px 12px; border-radius: 999px;
  font-size: 12.5px; font-weight: 600;
  background: rgba(231,138,46,0.09);
  border: 1px solid rgba(231,138,46,0.28);
  color: #E78A2E;
}
.mi__pill-dot {
  width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
  background: #E78A2E; box-shadow: 0 0 7px rgba(231,138,46,0.75);
  animation: mi-dot-pulse 2.2s ease-in-out infinite;
}
@keyframes mi-dot-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.4); opacity: 0.60; }
}

/* H2 */
.mi__h2 {
  font-size: clamp(26px, 3.2vw, 44px);
  font-weight: 800; line-height: 1.10;
  letter-spacing: -0.024em; margin: 0;
}
.mi--dark  .mi__h2 { color: rgba(248,250,252,0.97); }
.mi--light .mi__h2 { color: rgba(11,16,32,0.96); }
.mi__h2-accent { color: #E78A2E; }
.mi__h2-line   { display: block; }

/* Intro */
.mi__intro {
  font-size: clamp(13.5px, 1.4vw, 15px);
  line-height: 1.70; margin: 0; max-width: 480px;
}
.mi--dark  .mi__intro { color: rgba(148,163,184,0.80); }
.mi--light .mi__intro { color: rgba(71,85,105,0.82); }

/* Steps section */
.mi__steps-section { display: flex; flex-direction: column; gap: 18px; }

.mi__steps-title {
  display: flex; align-items: center; gap: 9px;
  font-size: 14px; font-weight: 700; margin: 0;
}
.mi--dark  .mi__steps-title { color: rgba(248,250,252,0.90); }
.mi--light .mi__steps-title { color: rgba(11,16,32,0.88); }
.mi__steps-icon-wrap {
  display: flex; align-items: center; justify-content: center;
  width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0;
  color: #E78A2E;
}
.mi--dark  .mi__steps-icon-wrap { background: rgba(231,138,46,0.12); }
.mi--light .mi__steps-icon-wrap { background: rgba(231,138,46,0.10); }

.mi__steps { display: flex; flex-direction: column; gap: 0; }

.mi__step { display: flex; gap: 16px; align-items: flex-start; }

/* Spine: number circle + connector line */
.mi__step-spine {
  display: flex; flex-direction: column; align-items: center;
  flex-shrink: 0; width: 34px;
}
.mi__step-num {
  width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 800;
  background: transparent;
  color: #E78A2E;
  border: 2px solid rgba(231,138,46,0.45);
}
.mi__step-vline {
  flex: 1; width: 2px; min-height: 24px; margin: 4px 0;
  background: rgba(231,138,46,0.20); border-radius: 1px;
}

/* Card */
.mi__step-card {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 16px; border-radius: 14px; flex: 1; margin-bottom: 8px;
}
.mi--dark  .mi__step-card {
  background: rgba(255,255,255,0.045);
  border: 1px solid rgba(255,255,255,0.09);
}
.mi--light .mi__step-card {
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(11,16,32,0.08);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.mi__step-icn {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
  color: #E78A2E;
}
.mi--dark  .mi__step-icn { background: rgba(231,138,46,0.12); }
.mi--light .mi__step-icn { background: rgba(231,138,46,0.10); }
.mi__step-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.mi__step-label {
  font-size: 13px; font-weight: 700; margin: 0; line-height: 1.4;
}
.mi--dark  .mi__step-label { color: rgba(248,250,252,0.94); }
.mi--light .mi__step-label { color: rgba(11,16,32,0.92); }
.mi__step-sub { font-size: 11.5px; margin: 0; }
.mi--dark  .mi__step-sub { color: rgba(148,163,184,0.60); }
.mi--light .mi__step-sub { color: rgba(71,85,105,0.62); }

/* ── Phone mockup ────────────────────────────────────────────────────────── */
.mi__phone-wrap {
  display: flex; align-items: center; justify-content: center;
  position: relative; padding: 24px;
}
.mi__phone-glow {
  position: absolute; inset: -20px; border-radius: 60px;
  background: radial-gradient(ellipse at center, rgba(231,138,46,0.18) 0%, transparent 70%);
  pointer-events: none; z-index: 0;
  animation: mi-glow-pulse 3.5s ease-in-out infinite;
}
@keyframes mi-glow-pulse {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 1; }
}
.mi__phone {
  position: relative; z-index: 1;
  width: 248px; height: 510px;
  border-radius: 44px;
  overflow: hidden;
  background: #09090f;
  border: 2px solid rgba(255,255,255,0.16);
  box-shadow:
    0 0 0 6px rgba(255,255,255,0.04),
    0 40px 80px rgba(0,0,0,0.60),
    0 0 80px rgba(231,138,46,0.14);
  animation: mi-phone-float 4.5s ease-in-out infinite;
}
@keyframes mi-phone-float {
  0%, 100% { transform: translateY(0) rotate(-0.5deg); }
  50%       { transform: translateY(-10px) rotate(0.5deg); }
}
.mi__phone-notch {
  position: absolute; top: 14px; left: 50%; transform: translateX(-50%);
  width: 90px; height: 26px; border-radius: 14px;
  background: #09090f; z-index: 3;
  box-shadow: 0 0 0 2px rgba(255,255,255,0.08);
}
.mi__phone-screen {
  position: absolute; inset: 0;
  background: #0b1220;
  overflow: hidden;
}
.mi__phone-img {
  width: 100%; height: 100%; object-fit: cover; object-position: top;
  display: block;
}

/* ── CSS phone screen mockup ─────────────────────────────────────────────── */
.mi__pm {
  width: 100%; height: 100%;
  display: flex; flex-direction: column; gap: 0;
  padding: 48px 12px 12px;
  box-sizing: border-box;
  background: #0d1428;
  overflow: hidden;
}
.mi__pm-tabs {
  display: flex; gap: 6px; margin-bottom: 10px;
}
.mi__pm-tab {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 4px 8px; border-radius: 8px; font-size: 8px; font-weight: 600;
  color: rgba(255,255,255,0.45);
  background: transparent;
}
.mi__pm-tab--on {
  color: rgba(248,250,252,0.90);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.10);
}
.mi__pm-title {
  font-size: 9px; font-weight: 700;
  color: rgba(248,250,252,0.90); margin: 0 0 3px;
}
.mi__pm-caption {
  font-size: 7px; color: rgba(148,163,184,0.60); margin: 0 0 6px; line-height: 1.4;
}
.mi__pm-legend {
  display: flex; gap: 10px; margin-bottom: 6px; font-size: 7.5px;
  color: rgba(148,163,184,0.70);
}
.mi__pm-dot {
  display: inline-block; width: 6px; height: 6px; border-radius: 50%;
  margin-right: 3px; vertical-align: middle;
}
.mi__pm-dot--g { background: #10B981; }
.mi__pm-dot--b { background: #60B8D4; }
.mi__pm-chart { width: 100%; flex: 1; display: block; }
.mi__pm-disclaimer {
  font-size: 6.5px; color: rgba(148,163,184,0.42); margin: 4px 0 0; line-height: 1.4;
}
.mi__pm-info-card {
  display: flex; gap: 5px; align-items: flex-start;
  margin-top: 6px; padding: 6px 8px; border-radius: 6px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06);
  font-size: 6.5px; line-height: 1.4;
  color: rgba(148,163,184,0.55);
}

/* ── QR card ─────────────────────────────────────────────────────────────── */
.mi__qr-outer {
  display: flex; align-items: center; justify-content: center;
}
.mi__qr-card {
  position: relative;
  display: flex; flex-direction: column; align-items: center; gap: 16px;
  padding: 20px 20px 18px;
  border-radius: 20px;
}
.mi--dark  .mi__qr-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(231,138,46,0.22);
  box-shadow: 0 0 40px rgba(231,138,46,0.08), 0 8px 32px rgba(0,0,0,0.30);
}
.mi--light .mi__qr-card {
  background: rgba(255,255,255,0.95);
  border: 1px solid rgba(231,138,46,0.22);
  box-shadow: 0 4px 24px rgba(0,0,0,0.09);
}

/* Corner brackets */
.mi__br {
  position: absolute; width: 18px; height: 18px; pointer-events: none;
  border-color: #E78A2E; border-style: solid; border-width: 0;
}
.mi__br--tl { top: 8px;  left: 8px;  border-top-width: 2.5px; border-left-width: 2.5px;  border-top-left-radius: 4px; }
.mi__br--tr { top: 8px;  right: 8px; border-top-width: 2.5px; border-right-width: 2.5px; border-top-right-radius: 4px; }
.mi__br--bl { bottom: 8px; left: 8px;  border-bottom-width: 2.5px; border-left-width: 2.5px;  border-bottom-left-radius: 4px; }
.mi__br--br { bottom: 8px; right: 8px; border-bottom-width: 2.5px; border-right-width: 2.5px; border-bottom-right-radius: 4px; }

.mi__qr-img-wrap {
  border-radius: 8px; overflow: hidden; line-height: 0;
}
.mi--dark  { --qr-color: #ffffff; }
.mi--light { --qr-color: #000000; }
.mi__qr-graphic {
  width: 170px;
  aspect-ratio: 1 / 1;
  opacity: 1;
  background-color: var(--qr-color);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

/* QR footer */
.mi__qr-foot {
  display: flex; align-items: center; gap: 9px; padding: 0 4px;
  max-width: 200px;
}
.mi__qr-scan-icn {
  display: flex; align-items: center; justify-content: center;
  width: 34px; height: 34px; border-radius: 9px; flex-shrink: 0;
  color: #E78A2E;
  animation: mi-scan-pulse 2.5s ease-in-out infinite;
}
.mi--dark  .mi__qr-scan-icn { background: rgba(231,138,46,0.12); }
.mi--light .mi__qr-scan-icn { background: rgba(231,138,46,0.10); }
@keyframes mi-scan-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.60; }
}
.mi__qr-label {
  font-size: 12px; font-weight: 600; line-height: 1.45; margin: 0;
}
.mi--dark  .mi__qr-label { color: rgba(226,232,240,0.80); }
.mi--light .mi__qr-label { color: rgba(11,16,32,0.78); }
</style>
