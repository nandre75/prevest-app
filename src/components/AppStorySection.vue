<template>
  <section class="story" :class="{ 'story--dark': isDark, 'story--light': !isDark }">
    <!-- Background -->
    <div class="story__bg" aria-hidden="true">
      <div class="story__bg-glow" />
    </div>

    <div class="story__inner">

      <!-- Header zone -->
      <div class="story__header">
        <div class="story__badge">
          <span class="story__badge-dot" aria-hidden="true" />
          <span>Pourquoi investir est si complexe ?</span>
        </div>
        <h2 class="story__title">PREVEST AI intervient avant toute décision</h2>
        <p class="story__subtitle">Pour transformer la confusion en compréhension claire</p>
      </div>

      <!-- Cards grid -->
      <div class="story__cards">
        <button
          v-for="(card, idx) in cards"
          :key="card.num"
          type="button"
          class="story__card"
          @click="onCardClick(idx, card)"
          :aria-label="`Carte ${card.num} : ${card.title}`"
        >
          <!-- Number badge -->
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
import { computed } from 'vue'

export default {
  name: 'AppStorySection',
  props: {
    isDark:           { type: Boolean, default: true },
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
        imgDark: props.storyImage1DarkUrl,
        imgLight: props.storyImage1LightUrl,
        imgAlt: 'Illustration — Trop de choix',
      },
      {
        num: '02',
        title: 'Comparer sans comprendre',
        text: 'Je regarde des chiffres sans savoir ce que ça signifie pour moi.',
        imgDark: props.storyImage2DarkUrl,
        imgLight: props.storyImage2LightUrl,
        imgAlt: 'Illustration — Comparer sans comprendre',
      },
      {
        num: '03',
        title: 'PREVEST apporte de la clarté',
        text: 'Une analyse adaptée à mon profil, pour comprendre l\'essentiel.',
        imgDark: props.storyImage3DarkUrl,
        imgLight: props.storyImage3LightUrl,
        imgAlt: 'Illustration — PREVEST apporte de la clarté',
      },
      {
        num: '04',
        title: 'Décider en confiance',
        text: 'Je comprends mes choix et je peux avancer sereinement.',
        imgDark: props.storyImage4DarkUrl,
        imgLight: props.storyImage4LightUrl,
        imgAlt: 'Illustration — Décider en confiance',
      },
    ])

    function onCardClick(idx, card) {
      emit('story-card-click', { index: idx, title: card.title })
    }

    return { cards, onCardClick }
  },
}
</script>

<style scoped>
/* ── Root ──────────────────────────────────────────────────────────────────── */
.story {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.story--dark  { background: #080c1e; color: rgba(226,232,240,0.9); }
.story--light { background: #eef1f7; color: rgba(15,23,42,0.88); }

/* Background separator glow */
.story__bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.story__bg-glow {
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 80%; max-width: 800px; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(231,138,46,0.4), transparent);
}

/* ── Inner ────────────────────────────────────────────────────────────────── */
.story__inner {
  position: relative; z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 24px 96px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

@media (min-width: 1024px) { .story__inner { padding: 96px 48px 112px; gap: 64px; } }
@media (min-width: 1280px) { .story__inner { padding: 100px 64px 120px; } }

/* ── Header ──────────────────────────────────────────────────────────────── */
.story__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.story__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px;
  border-radius: 999px;
  border: 1px solid rgba(231,138,46,0.25);
  background: rgba(231,138,46,0.09);
  font-size: 13px; font-weight: 600;
  color: #E78A2E;
}

.story__badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #E78A2E;
  box-shadow: 0 0 8px rgba(231,138,46,0.7);
  flex-shrink: 0;
}

.story__title {
  font-size: clamp(24px, 4vw, 42px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin: 0;
  color: inherit;
}
.story--dark  .story__title { color: rgba(248,250,252,0.96); }
.story--light .story__title { color: rgba(15,23,42,0.94); }

.story__subtitle {
  font-size: clamp(14px, 2vw, 17px);
  line-height: 1.6;
  margin: 0;
  opacity: 0.58;
  max-width: 520px;
}

/* ── Cards grid ──────────────────────────────────────────────────────────── */
.story__cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 1024px) {
  .story__cards {
    flex-direction: row;
    gap: 20px;
    align-items: stretch;
  }
}

/* ── Card ─────────────────────────────────────────────────────────────────── */
.story__card {
  flex: 1;
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.story--light .story__card {
  border-color: rgba(15,23,42,0.07);
  background: rgba(255,255,255,0.78);
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}
.story__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(231,138,46,0.12), 0 0 0 1px rgba(231,138,46,0.18);
  border-color: rgba(231,138,46,0.22);
}
.story__card:focus-visible { outline: 2px solid #E78A2E; outline-offset: 2px; }

/* Desktop: stack vertically */
@media (min-width: 1024px) {
  .story__card {
    flex-direction: column;
    align-items: flex-start;
    padding: 28px 24px;
    gap: 20px;
  }
}

/* Number badge */
.story__card-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(231,138,46,0.12);
  border: 1px solid rgba(231,138,46,0.22);
  font-size: 13px; font-weight: 800;
  color: #E78A2E;
  letter-spacing: 0.02em;
}

@media (min-width: 1024px) {
  .story__card-num { width: 40px; height: 40px; font-size: 14px; }
}

/* Illustration */
.story__card-img-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 80px; height: 80px;
  overflow: hidden;
}
.story__card-img {
  width: 100%; height: 100%;
  object-fit: contain;
  display: block;
}

@media (min-width: 1024px) {
  .story__card-img-wrap { width: 100%; height: 130px; }
}

/* Text */
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
  font-size: 15px; font-weight: 700; line-height: 1.3;
  color: rgba(255,255,255,0.9);
}
.story--light .story__card-title { color: rgba(15,23,42,0.88); }

.story__card-text {
  font-size: 13.5px; line-height: 1.6;
  color: rgba(255,255,255,0.48);
}
.story--light .story__card-text { color: rgba(15,23,42,0.50); }

@media (min-width: 1024px) {
  .story__card-title { font-size: 16px; }
  .story__card-text { font-size: 14px; }
}
</style>
