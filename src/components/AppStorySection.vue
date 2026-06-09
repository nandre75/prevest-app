<template>
  <section
    id="prevest-section-story"
    data-prevest-section="story"
    class="story" :class="{ 'story--dark': isDark, 'story--light': !isDark }">

    <!-- Top glow separator -->
    <div class="story__bg" aria-hidden="true">
      <div class="story__bg-line" />
    </div>

    <div class="story__inner">

      <!-- ── Header zone ── reveal via IntersectionObserver ─────────────── -->
      <div class="story__header" ref="headerRef">
        <div class="story__badge story__reveal" :class="{ 'is-visible': headerVisible }">
          <span class="story__badge-dot" aria-hidden="true" />
          <span>Pourquoi investir est si complexe ?</span>
        </div>
        <h2 class="story__title story__reveal story__reveal--delay-1" :class="{ 'is-visible': headerVisible }">
          De la confusion <span class="story__title-accent">à la clarté.</span>
        </h2>
        <p class="story__subtitle story__reveal story__reveal--delay-2" :class="{ 'is-visible': headerVisible }">
          PREVEST met en perspective les options, les risques et les impacts pour rendre la décision plus lisible.
        </p>
      </div>

      <!-- ── Cards ─────────────────────────────────────────────────────── -->
      <div class="story__cards" ref="cardsRef">
        <button
          v-for="(card, idx) in cards"
          :key="card.num"
          type="button"
          class="story__card story__reveal"
          :class="[`story__reveal--card-${idx}`, { 'is-visible': cardsVisible }]"
          @click="onCardClick(idx, card)"
          :aria-label="`Carte ${card.num} : ${card.title}`"
        >
          <!-- Number badge — absolute top-left -->
          <div class="story__card-num" aria-hidden="true">{{ card.num }}</div>

          <!-- Illustration -->
          <div class="story__card-img-wrap">
            <img
              :src="isDark ? card.imgDark : card.imgLight"
              :alt="card.imgAlt"
              class="story__card-img"
              loading="lazy"
              referrerpolicy="no-referrer"
            />
          </div>

          <!-- Text -->
          <div class="story__card-body">
            <div class="story__card-title">{{ card.title }}</div>
            <div class="story__card-text">{{ card.text }}</div>
          </div>
        </button>
      </div>

    </div>
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

export default {
  name: 'AppStorySection',
  props: {
    isDark:              { type: Boolean, default: true },
    storyImage1DarkUrl:  { type: String, default: '' },
    storyImage1LightUrl: { type: String, default: '' },
    storyImage2DarkUrl:  { type: String, default: '' },
    storyImage2LightUrl: { type: String, default: '' },
    storyImage3DarkUrl:  { type: String, default: '' },
    storyImage3LightUrl: { type: String, default: '' },
    storyImage4DarkUrl:  { type: String, default: '' },
    storyImage4LightUrl: { type: String, default: '' },
  },
  emits: ['story-card-click'],

  setup(props, { emit }) {
    const cards = computed(() => [
      {
        num: '01',
        title: 'Trop de choix, aucun point de départ',
        text: 'Mon épargne pourrait faire mieux, mais je ne sais pas par où commencer.',
        imgDark: props.storyImage1DarkUrl, imgLight: props.storyImage1LightUrl,
        imgAlt: 'Illustration — Trop de choix',
      },
      {
        num: '02',
        title: 'Comparer sans comprendre',
        text: 'Je regarde des chiffres sans savoir ce que ça signifie pour moi.',
        imgDark: props.storyImage2DarkUrl, imgLight: props.storyImage2LightUrl,
        imgAlt: 'Illustration — Comparer sans comprendre',
      },
      {
        num: '03',
        title: 'PREVEST apporte de la clarté',
        text: "Une analyse adaptée à mon profil, pour comprendre l'essentiel.",
        imgDark: props.storyImage3DarkUrl, imgLight: props.storyImage3LightUrl,
        imgAlt: 'Illustration — PREVEST apporte de la clarté',
      },
      {
        num: '04',
        title: 'Décider en confiance',
        text: 'Je comprends mes choix et je peux avancer sereinement.',
        imgDark: props.storyImage4DarkUrl, imgLight: props.storyImage4LightUrl,
        imgAlt: 'Illustration — Décider en confiance',
      },
    ])

    // ── IntersectionObserver ───────────────────────────────────────────────
    const headerRef   = ref(null)
    const cardsRef    = ref(null)
    const headerVisible = ref(false)
    const cardsVisible  = ref(false)

    let _ioHeader = null
    let _ioCards  = null

    onMounted(() => {
      // If reduced motion — reveal immediately
      if (_prefersReducedMotion()) {
        headerVisible.value = true
        cardsVisible.value  = true
        return
      }

      try {
        const win = _getWin()
        if (typeof win.IntersectionObserver === 'undefined') {
          headerVisible.value = true; cardsVisible.value = true; return
        }

        const opts = { threshold: 0.12 }

        if (headerRef.value) {
          _ioHeader = new win.IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              headerVisible.value = true
              _ioHeader?.disconnect()
            }
          }, opts)
          _ioHeader.observe(headerRef.value)
        }

        if (cardsRef.value) {
          _ioCards = new win.IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              cardsVisible.value = true
              _ioCards?.disconnect()
            }
          }, { threshold: 0.08 })
          _ioCards.observe(cardsRef.value)
        }
      } catch { headerVisible.value = true; cardsVisible.value = true }
    })

    onUnmounted(() => {
      try { _ioHeader?.disconnect(); _ioCards?.disconnect() } catch { /* noop */ }
    })

    function onCardClick(idx, card) {
      emit('story-card-click', { index: idx, title: card.title })
    }

    return { cards, headerRef, cardsRef, headerVisible, cardsVisible, onCardClick }
  },
}
</script>

<style scoped>
/* ── Scroll reveal system ───────────────────────────────────────────────── */
.story__reveal {
  opacity: 0;
  transform: translateY(24px) scale(0.985);
  transition:
    opacity  0.72s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.72s cubic-bezier(0.16, 1, 0.3, 1);
}
.story__reveal.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Stagger for header */
.story__reveal--delay-1 { transition-delay: 100ms; }
.story__reveal--delay-2 { transition-delay: 200ms; }

/* Stagger for cards */
.story__reveal--card-0 { transition-delay: 0ms; }
.story__reveal--card-1 { transition-delay: 110ms; }
.story__reveal--card-2 { transition-delay: 220ms; }
.story__reveal--card-3 { transition-delay: 330ms; }

@media (prefers-reduced-motion: reduce) {
  .story__reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

/* ── Root ──────────────────────────────────────────────────────────────── */
.story {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
/* Dark: same #0b1020 as hero → seamless with the whole page */
.story--dark  { background: #0b1020; color: rgba(226,232,240,0.9); }
.story--light { background: #f9fafc; color: rgba(11,16,32,0.88); }

/* Top separator — glow line that ties Story to Hero */
.story__bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.story__bg-line {
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 65%; max-width: 640px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(231,138,46,0.35), transparent);
}

/* ── Inner ─────────────────────────────────────────────────────────────── */
.story__inner {
  position: relative; z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 24px 64px;     /* mobile: closer to hero */
  display: flex;
  flex-direction: column;
  gap: 48px;
}
@media (min-width: 1024px) { .story__inner { padding: 64px 24px 88px; gap: 60px; } }
@media (min-width: 1280px) { .story__inner { padding: 72px 24px 96px; } }

/* ── Header ────────────────────────────────────────────────────────────── */
.story__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
}

.story__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px 7px 12px;
  border-radius: 999px;
  border: 1px solid rgba(231,138,46,0.26);
  background: rgba(231,138,46,0.09);
  font-size: 13px; font-weight: 600;
  color: #E78A2E;
}
.story__badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #E78A2E;
  box-shadow: 0 0 7px rgba(231,138,46,0.7);
  flex-shrink: 0;
}

.story__title {
  font-size: clamp(28px, 5vw, 52px);  /* harmonisé avec la section Concept suivante */
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.026em;
  margin: 0;
}
.story--dark  .story__title { color: rgba(248,250,252,0.97); }
.story--light .story__title { color: rgba(11,16,32,0.95); }
.story__title-accent { color: #E78A2E; }

.story__subtitle {
  font-size: clamp(14px, 1.8vw, 16.5px);
  line-height: 1.65;
  margin: 0;
  opacity: 0.56;
  max-width: 500px;
}
.story--light .story__subtitle { opacity: 0.62; }

/* ── Cards grid ────────────────────────────────────────────────────────── */
/* Wrapper is a pure layout container — no visible surface */
.story__cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (min-width: 1024px) {
  .story__cards {
    flex-direction: row;
    gap: 18px;
    align-items: stretch;
  }
}

/* ── Card ──────────────────────────────────────────────────────────────── */
.story__card {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 14px;
  padding: 18px 16px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.09);
  background: rgba(255,255,255,0.055);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.22s cubic-bezier(0.16,1,0.3,1),
    box-shadow 0.22s ease,
    border-color 0.22s ease;
}
.story--dark .story__card {
  box-shadow: 0 4px 28px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.05);
}
.story--light .story__card {
  border-color: rgba(11,16,32,0.08);
  background: rgba(255,255,255,0.92);
  box-shadow: 0 2px 20px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(11,16,32,0.04);
}
.story__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 48px rgba(231,138,46,0.14), 0 0 0 1px rgba(231,138,46,0.20);
  border-color: rgba(231,138,46,0.24);
}
.story__card:hover .story__card-img { transform: scale(1.04); filter: brightness(1.08); }
.story__card:focus-visible { outline: 2px solid #E78A2E; outline-offset: 3px; }

/* Desktop: vertical stack layout */
@media (min-width: 1024px) {
  .story__card {
    flex-direction: column;
    align-items: flex-start;
    padding: 26px 24px 24px;
    gap: 18px;
  }
}

/* Number badge — absolute corner */
.story__card-num {
  position: absolute;
  top: 14px; left: 14px;
  display: flex; align-items: center; justify-content: center;
  width: 34px; height: 34px;
  border-radius: 10px;
  background: rgba(231,138,46,0.12);
  border: 1px solid rgba(231,138,46,0.24);
  font-size: 12.5px; font-weight: 800;
  color: #E78A2E;
  letter-spacing: 0.02em;
  flex-shrink: 0;
  z-index: 1;
}
@media (min-width: 1024px) {
  .story__card-num { top: 18px; left: 18px; width: 38px; height: 38px; font-size: 13px; }
}

/* Illustration */
.story__card-img-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 88px; height: 88px;
  overflow: hidden;
  margin-left: 46px; /* offset past the number badge on mobile */
}
.story__card-img {
  width: 100%; height: 100%;
  object-fit: contain;
  display: block;
  transition: transform 0.3s ease, filter 0.3s ease;
}

@media (min-width: 1024px) {
  .story__card-img-wrap {
    width: 100%; height: 200px;  /* +30px vs 170 — illustrations plus impactantes */
    margin-left: 0;
    margin-top: 28px; /* clear the absolute number badge */
  }
}

/* Text body */
.story__card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
}
@media (min-width: 1024px) {
  .story__card-body { justify-content: flex-start; }
}

.story__card-title {
  font-size: 14.5px; font-weight: 700; line-height: 1.30;
  color: rgba(255,255,255,0.92);
}
.story--light .story__card-title { color: rgba(11,16,32,0.90); }

.story__card-text {
  font-size: 13px; line-height: 1.62;
  color: rgba(255,255,255,0.46);
}
.story--light .story__card-text { color: rgba(11,16,32,0.52); }

@media (min-width: 1024px) {
  .story__card-title { font-size: 15px; }
  .story__card-text  { font-size: 13.5px; }
}
</style>
