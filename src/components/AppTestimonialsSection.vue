<template>
  <section class="tm" :class="isDark ? 'tm--dark' : 'tm--light'">

    <div class="tm__bg" aria-hidden="true">
      <div class="tm__bg-line" />
    </div>

    <div class="tm__inner">

      <!-- ── Top: left copy + right Trustpilot ─────────────────────────── -->
      <div class="tm__top" ref="headerRef">

        <!-- Left: eyebrow + h2 + subtitle -->
        <div class="tm__copy">
          <div class="tm__eyebrow tm__reveal" :class="{ 'is-visible': visible }">
            <span class="tm__pill">
              <span class="tm__pill-dot" aria-hidden="true" />
              Ils comparent. Ils décident. Ils investissent mieux.
            </span>
          </div>

          <h2 class="tm__h2 tm__reveal tm__reveal--d1" :class="{ 'is-visible': visible }">
            Témoignages <span class="tm__h2-accent">d'épargnants</span>
          </h2>

          <p class="tm__sub tm__reveal tm__reveal--d2" :class="{ 'is-visible': visible }">
            Des épargnants comme vous utilisent PREVEST pour comparer, simuler et investir en toute confiance.
          </p>
        </div>

        <!-- Right: Trustpilot brand + 3 stats -->
        <div class="tm__tp-col tm__reveal tm__reveal--d2" :class="{ 'is-visible': visible }">

          <!-- Trustpilot brand row -->
          <div class="tm__tp-brand" aria-label="Trustpilot">
            <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true" class="tm__tp-star">
              <rect width="24" height="24" rx="3" fill="#00B67A"/>
              <path d="M12 4l2.09 6.26H20l-5.36 3.9 2.05 6.3L12 16.64l-4.69 3.82 2.05-6.3L4 10.26h5.91z" fill="white"/>
            </svg>
            <span class="tm__tp-name">Trustpilot</span>
          </div>

          <!-- 3 stat blocks -->
          <div class="tm__stats">
            <div v-for="stat in STATS" :key="stat.id" class="tm__stat">
              <div class="tm__stat-icon" aria-hidden="true">
                <svg v-if="stat.icon === 'users'" viewBox="0 0 22 22" fill="none" width="18" height="18">
                  <circle cx="8.5" cy="7" r="3.5" stroke="currentColor" stroke-width="1.4"/>
                  <path d="M2 18.5c0-3.31 2.91-6 6.5-6s6.5 2.69 6.5 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                  <path d="M15.5 5.5c1.38 0 2.5 1.12 2.5 2.5S16.88 10.5 15.5 10.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                  <path d="M17.5 15.5c1.5.72 2.5 2.1 2.5 3.7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                </svg>
                <svg v-else-if="stat.icon === 'star'" viewBox="0 0 22 22" fill="none" width="18" height="18">
                  <path d="M11 2l2.36 7.26H21l-6.17 4.48 2.36 7.26L11 17.02l-6.19 4 2.36-7.28L1 9.26h7.64z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
                </svg>
                <svg v-else viewBox="0 0 22 22" fill="none" width="18" height="18">
                  <path d="M11 2L3.5 5.5v5.75C3.5 15.4 6.8 19.1 11 20c4.2-.9 7.5-4.6 7.5-8.75V5.5L11 2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
                  <path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="tm__stat-body">
                <div class="tm__stat-value">{{ stat.value }}</div>
                <div class="tm__stat-label">{{ stat.label }}</div>
                <div class="tm__stat-sub">{{ stat.sub }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Carousel ──────────────────────────────────────────────────── -->
      <div
        class="tm__carousel tm__reveal tm__reveal--d3"
        :class="{ 'is-visible': cardsVisible }"
        ref="carouselRef"
      >
        <!-- Prev button -->
        <button
          class="tm__nav-btn tm__nav-btn--prev"
          @click="slidePrev"
          :disabled="slideIndex === 0"
          aria-label="Témoignage précédent"
        >
          <svg viewBox="0 0 10 18" fill="none" width="10" height="18" aria-hidden="true">
            <path d="M8 2L2 9l6 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Track outer -->
        <div class="tm__track-outer" ref="trackOuterRef">
          <div
            class="tm__track"
            :style="trackStyle"
            @touchstart.passive="onTouchStart"
            @touchend.passive="onTouchEnd"
          >
            <article
              v-for="t in TESTIMONIALS"
              :key="t.id"
              class="tm__card"
              :style="cardStyle"
            >
              <!-- Stars + rating -->
              <div class="tm__card-top">
                <div class="tm__stars" :aria-label="`Note : ${t.rating}/5`">
                  <span
                    v-for="s in 5"
                    :key="s"
                    class="tm__star-sq"
                    :style="getStarStyle(s, t.rating)"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 14 14" fill="none" width="9" height="9" aria-hidden="true">
                      <path d="M7 1l1.7 5.25H14l-4.37 3.18 1.67 5.07L7 11.3l-4.3 3.2 1.67-5.07L0 6.25h5.3z" fill="white"/>
                    </svg>
                  </span>
                </div>
                <span class="tm__card-rating">{{ formatRating(t.rating) }}/5</span>
              </div>

              <!-- Quote -->
              <blockquote class="tm__quote">
                <span class="tm__q-open" aria-hidden="true">"</span>
                {{ t.quote }}
                <span class="tm__q-close" aria-hidden="true">"</span>
              </blockquote>

              <!-- Footer -->
              <footer class="tm__card-footer">
                <div class="tm__av" :style="{ background: t.avatarBg }" aria-hidden="true">
                  {{ t.avatarInitial }}
                </div>
                <div class="tm__ident">
                  <div class="tm__name">{{ t.name }}</div>
                  <div class="tm__age">{{ t.age }} ans</div>
                </div>
                <div class="tm__profile-col">
                  <span class="tm__profile-dot" aria-hidden="true" />
                  <div>
                    <div class="tm__job">{{ t.job }}</div>
                    <div class="tm__ctx">{{ t.context }}</div>
                  </div>
                </div>
              </footer>
            </article>
          </div>
        </div>

        <!-- Next button -->
        <button
          class="tm__nav-btn tm__nav-btn--next"
          @click="slideNext"
          :disabled="slideIndex >= maxIndex"
          aria-label="Témoignage suivant"
        >
          <svg viewBox="0 0 10 18" fill="none" width="10" height="18" aria-hidden="true">
            <path d="M2 2l6 7-6 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- ── Pagination ─────────────────────────────────────────────────── -->
      <div
        class="tm__pagination tm__reveal tm__reveal--d4"
        :class="{ 'is-visible': cardsVisible }"
      >
        <div class="tm__pag-bar">
          <span class="tm__pag-current">{{ formatNum(slideIndex + 1) }}</span>
          <div class="tm__pag-track" role="progressbar" :aria-valuenow="slideIndex + 1" :aria-valuemax="TESTIMONIALS.length">
            <div class="tm__pag-fill" :style="{ width: progressPct + '%' }" />
          </div>
          <span class="tm__pag-total">{{ formatNum(TESTIMONIALS.length) }}</span>
        </div>
        <div class="tm__pag-meta">
          <span class="tm__pag-count">{{ TESTIMONIALS.length }} témoignages</span>
          <a
            href="https://fr.trustpilot.com/review/prevest.ai"
            class="tm__see-all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir tous les avis Trustpilot"
          >
            Voir tous les avis
            <svg viewBox="0 0 12 12" fill="none" width="10" height="10" aria-hidden="true">
              <path d="M2.5 9.5L9.5 2.5M4.5 2.5H9.5v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- ── Bottom trust block ─────────────────────────────────────────── -->
      <div
        class="tm__bottom tm__reveal tm__reveal--d5"
        :class="{ 'is-visible': cardsVisible }"
      >
        <div class="tm__bt-left">
          <div class="tm__bt-icon" aria-hidden="true">
            <svg viewBox="0 0 22 22" fill="none" width="20" height="20">
              <path d="M11 2L3.5 5.5v5.75C3.5 15.4 6.8 19.1 11 20c4.2-.9 7.5-4.6 7.5-8.75V5.5L11 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <p class="tm__bt-title">La transparence est notre priorité.</p>
            <p class="tm__bt-sub">Tous les avis sont collectés par Trustpilot et vérifiés.</p>
          </div>
        </div>
        <a
          href="https://fr.trustpilot.com/review/prevest.ai"
          class="tm__bt-tp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir sur Trustpilot"
        >
          <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
            <rect width="24" height="24" rx="3" fill="#00B67A"/>
            <path d="M12 4l2.09 6.26H20l-5.36 3.9 2.05 6.3L12 16.64l-4.69 3.82 2.05-6.3L4 10.26h5.91z" fill="white"/>
          </svg>
          <span class="tm__bt-tp-label">Trustpilot</span>
          <svg viewBox="0 0 12 12" fill="none" width="9" height="9" aria-hidden="true">
            <path d="M2.5 9.5L9.5 2.5M4.5 2.5H9.5v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <!-- Mobile swipe hint (hidden on desktop) -->
      <div class="tm__swipe-hint">
        <svg viewBox="0 0 28 36" fill="none" width="22" height="28" aria-hidden="true">
          <path d="M14 1c2.76 0 5 2.24 5 5v14l3-3a2.5 2.5 0 0 1 3.54 3.54L19 27l-1.5 3H11l-2.5-2.5A7 7 0 0 1 6 23V6c0-2.76 2.24-5 5-5z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 1v15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
        <span>Faites défiler pour découvrir d'autres témoignages</span>
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

// ── Static data ───────────────────────────────────────────────────────────
const STATS = [
  {
    id: 'count',
    icon: 'users',
    value: '1 467',
    label: 'avis',
    sub: 'Basés sur les avis Trustpilot',
  },
  {
    id: 'rating',
    icon: 'star',
    value: '4,89/5',
    label: 'en moyenne',
    sub: 'Note moyenne attribuée par nos utilisateurs',
  },
  {
    id: 'verified',
    icon: 'shield',
    value: 'Avis vérifiés',
    label: 'Collectés par',
    sub: 'Trustpilot',
  },
]

const TESTIMONIALS = [
  {
    id: 1, rating: 5.0,
    quote: "J'ai enfin compris ce qui compte vraiment : gain net, capital net, risques… PREVEST met tout à plat de façon transparente. J'ai pu comparer plusieurs placements et choisir celui qui correspond à mes objectifs sans me sentir perdue.",
    name: 'Camille', age: 38, job: 'Cadre marketing', context: 'Épargne régulière',
    avatarBg: 'linear-gradient(145deg, #f5c5a3, #dc8f60)', avatarInitial: 'C',
  },
  {
    id: 2, rating: 4.8,
    quote: "En 3 minutes, j'avais une direction claire avant d'appeler mon conseiller. J'ai testé plusieurs scénarios et j'ai pu voir l'impact réel sur mon épargne à long terme. Un gain de temps énorme et des choix bien plus éclairés.",
    name: 'Mehdi', age: 42, job: 'Entrepreneur', context: 'Prépare sa retraite',
    avatarBg: 'linear-gradient(145deg, #d4a070, #a86e3a)', avatarInitial: 'M',
  },
  {
    id: 3, rating: 4.9,
    quote: "Comparer SCPI, assurance-vie et ETF au même endroit, c'est exactement ce qu'il manquait. PREVEST vulgarise sans simplifier à l'excès et m'aide à construire un portefeuille diversifié, aligné avec mes objectifs.",
    name: 'Julie', age: 34, job: 'Ingénieure', context: 'Épargne & projets',
    avatarBg: 'linear-gradient(145deg, #f8e0d0, #e2aa88)', avatarInitial: 'J',
  },
  {
    id: 4, rating: 4.7,
    quote: "Simple, clair, sans discours commercial. Ça rassure. J'ai surtout apprécié de voir les hypothèses utilisées et de comprendre ce qui pouvait réellement changer le résultat à long terme.",
    name: 'Thomas', age: 46, job: 'Dirigeant', context: 'Trésorerie personnelle',
    avatarBg: 'linear-gradient(145deg, #9db8d4, #5a7a9c)', avatarInitial: 'T',
  },
  {
    id: 5, rating: 4.9,
    quote: "Je suis arrivée au rendez-vous avec mon conseiller beaucoup mieux préparée. Je savais quelles questions poser, quels points vérifier et quels scénarios comparer. La discussion a été beaucoup plus utile.",
    name: 'Sarah', age: 40, job: 'Profession libérale', context: 'Préparation RDV CGP',
    avatarBg: 'linear-gradient(145deg, #e8b4c8, #c47a94)', avatarInitial: 'S',
  },
  {
    id: 6, rating: 4.8,
    quote: "On voit l'impact réel sur son épargne, pas juste des pourcentages. Le fait de raisonner en capital estimé, fiscalité et horizon de placement change complètement la manière de comparer.",
    name: 'Nicolas', age: 41, job: 'Manager', context: 'Optimisation épargne',
    avatarBg: 'linear-gradient(145deg, #7bbfa8, #3d8b6e)', avatarInitial: 'N',
  },
  {
    id: 7, rating: 5.0,
    quote: "Je voulais savoir si je devais garder mon épargne disponible ou commencer à investir progressivement. PREVEST m'a permis de visualiser plusieurs trajectoires sans jargon, avec une lecture claire des risques.",
    name: 'Amina', age: 36, job: 'Médecin', context: 'Projet immobilier',
    avatarBg: 'linear-gradient(145deg, #d4a0c8, #a060a0)', avatarInitial: 'A',
  },
  {
    id: 8, rating: 4.7,
    quote: "J'avais plusieurs contrats et beaucoup d'informations dispersées. La comparaison m'a aidé à remettre de l'ordre et à mieux comprendre ce qui servait vraiment mon objectif de retraite.",
    name: 'Laurent', age: 52, job: 'Consultant', context: 'Transmission & retraite',
    avatarBg: 'linear-gradient(145deg, #6e8898, #3a5568)', avatarInitial: 'L',
  },
  {
    id: 9, rating: 4.8,
    quote: "Je débute dans l'investissement et j'avais peur de faire un mauvais choix. L'approche par simulation rend les choses beaucoup plus concrètes. On comprend mieux avant de s'engager.",
    name: 'Élodie', age: 31, job: 'Product manager', context: 'Premier investissement',
    avatarBg: 'linear-gradient(145deg, #f4c4a8, #e08050)', avatarInitial: 'É',
  },
  {
    id: 10, rating: 4.9,
    quote: "Je cherchais une solution pour générer des revenus réguliers sans me perdre dans les brochures commerciales. PREVEST m'a aidé à comparer les options avec une vision plus objective.",
    name: 'Karim', age: 45, job: 'Commerçant', context: 'Revenus complémentaires',
    avatarBg: 'linear-gradient(145deg, #b8a070, #8a6a30)', avatarInitial: 'K',
  },
  {
    id: 11, rating: 5.0,
    quote: "J'ai apprécié la transparence des hypothèses. On ne me promet pas un rendement magique : on me montre des scénarios, des limites et des impacts. C'est exactement ce que j'attends d'un outil d'aide à la décision.",
    name: 'Claire', age: 39, job: 'Avocate', context: 'Diversification',
    avatarBg: 'linear-gradient(145deg, #c8b0e0, #8868b8)', avatarInitial: 'C',
  },
  {
    id: 12, rating: 4.8,
    quote: "Je voulais comparer ETF, livrets et SCPI avec un horizon long. PREVEST m'a donné une lecture simple, mais suffisamment complète pour passer à l'étape suivante avec confiance.",
    name: 'Hugo', age: 29, job: 'Cadre tech', context: 'Horizon long terme',
    avatarBg: 'linear-gradient(145deg, #90c8f0, #5090c8)', avatarInitial: 'H',
  },
]

const CARD_GAP        = 20
const VISIBLE_DESKTOP = 3

export default {
  name: 'AppTestimonialsSection',

  props: {
    isDark: { type: Boolean, default: true },
  },

  setup(props) {
    const visible      = ref(false)
    const cardsVisible = ref(false)
    const headerRef    = ref(null)
    const carouselRef  = ref(null)
    const trackOuterRef = ref(null)

    // ── Carousel state ────────────────────────────────────────────────────
    const slideIndex  = ref(0)
    const cardW       = ref(0)
    const isMobileView = ref(false)

    let touchStartX     = 0
    let _ioH = null, _ioC = null, _ro = null

    function measure() {
      if (!trackOuterRef.value) return
      const win = _getWin()
      const mobile = (win.innerWidth ?? 0) < 1024
      isMobileView.value = mobile
      const outerW   = trackOuterRef.value.offsetWidth
      const visible  = mobile ? 1 : VISIBLE_DESKTOP
      cardW.value    = Math.floor((outerW - (visible - 1) * CARD_GAP) / visible)
      const maxI     = Math.max(0, TESTIMONIALS.length - visible)
      if (slideIndex.value > maxI) slideIndex.value = maxI
    }

    const maxIndex = computed(() =>
      Math.max(0, TESTIMONIALS.length - (isMobileView.value ? 1 : VISIBLE_DESKTOP))
    )

    const trackStyle = computed(() => {
      if (!cardW.value) return {}
      const tx = slideIndex.value * (cardW.value + CARD_GAP)
      return {
        transform:  `translateX(-${tx}px)`,
        transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
      }
    })
    const cardStyle = computed(() =>
      cardW.value ? { width: `${cardW.value}px` } : {}
    )
    const progressPct = computed(() => {
      const mi = maxIndex.value
      return mi > 0 ? Math.round((slideIndex.value / mi) * 100) : 0
    })

    function slidePrev() { if (slideIndex.value > 0) slideIndex.value-- }
    function slideNext() { if (slideIndex.value < maxIndex.value) slideIndex.value++ }

    function onTouchStart(e) { touchStartX = e.touches[0]?.clientX ?? 0 }
    function onTouchEnd(e) {
      const delta = touchStartX - (e.changedTouches[0]?.clientX ?? touchStartX)
      if (Math.abs(delta) > 50) { delta > 0 ? slideNext() : slidePrev() }
    }

    function formatNum(n)    { return String(n).padStart(2, '0') }
    function formatRating(r) { return r.toFixed(1).replace('.', ',') }

    function getStarStyle(starNum, rating) {
      const emptyBg = props.isDark ? 'rgba(255,255,255,0.10)' : 'rgba(11,16,32,0.09)'
      const full = Math.floor(rating)
      if (starNum <= full) return { background: '#00B67A' }
      if (starNum === full + 1) {
        const pct = Math.round((rating - full) * 100)
        if (pct < 10) return { background: emptyBg }
        return { background: `linear-gradient(to right, #00B67A ${pct}%, ${emptyBg} ${pct}%)` }
      }
      return { background: emptyBg }
    }

    onMounted(() => {
      const reduced = _prefersReducedMotion()
      if (reduced) { visible.value = true; cardsVisible.value = true }

      measure()

      try {
        const win = _getWin()

        if (!reduced && typeof win.IntersectionObserver !== 'undefined') {
          _ioH = new win.IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { visible.value = true; _ioH?.disconnect() } },
            { threshold: 0.10 }
          )
          if (headerRef.value) _ioH.observe(headerRef.value)

          _ioC = new win.IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { cardsVisible.value = true; _ioC?.disconnect() } },
            { threshold: 0.06 }
          )
          if (carouselRef.value) _ioC.observe(carouselRef.value)
        } else {
          visible.value = true; cardsVisible.value = true
        }

        if (typeof ResizeObserver !== 'undefined' && trackOuterRef.value) {
          _ro = new ResizeObserver(measure)
          _ro.observe(trackOuterRef.value)
        }
      } catch { visible.value = true; cardsVisible.value = true }
    })

    onUnmounted(() => {
      try {
        _ioH?.disconnect(); _ioC?.disconnect()
        _ro?.disconnect()
      } catch { /* noop */ }
    })

    return {
      STATS, TESTIMONIALS,
      visible, cardsVisible,
      headerRef, carouselRef, trackOuterRef,
      slideIndex, maxIndex,
      trackStyle, cardStyle, progressPct,
      slidePrev, slideNext,
      onTouchStart, onTouchEnd,
      formatNum, formatRating, getStarStyle,
    }
  },
}
</script>

<style scoped>
/* ── Scroll reveal ───────────────────────────────────────────────────────── */
.tm__reveal {
  opacity: 0;
  transform: translateY(20px) scale(0.990);
  transition:
    opacity   0.72s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.72s cubic-bezier(0.16, 1, 0.3, 1);
}
.tm__reveal.is-visible { opacity: 1; transform: none; }
.tm__reveal--d1 { transition-delay: 100ms; }
.tm__reveal--d2 { transition-delay: 200ms; }
.tm__reveal--d3 { transition-delay: 280ms; }
.tm__reveal--d4 { transition-delay: 360ms; }
.tm__reveal--d5 { transition-delay: 440ms; }
@media (prefers-reduced-motion: reduce) {
  .tm__reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
  .tm__track  { transition: none !important; }
}

/* ── Root ────────────────────────────────────────────────────────────────── */
.tm { position: relative; width: 100%; box-sizing: border-box; overflow: hidden; }
.tm--dark  { background: #0b1020; color: rgba(226,232,240,0.9); }
.tm--light { background: #f9fafc; color: rgba(11,16,32,0.88); }

.tm__bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.tm__bg-line {
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 65%; max-width: 640px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(231,138,46,0.28), transparent);
}

/* ── Inner ───────────────────────────────────────────────────────────────── */
.tm__inner {
  position: relative; z-index: 1;
  max-width: 1280px; margin: 0 auto;
  padding: 64px 24px 80px;
  display: flex; flex-direction: column; gap: 52px;
}
@media (min-width: 1024px) { .tm__inner { padding: 80px 24px 96px; gap: 60px; } }
@media (min-width: 1280px) { .tm__inner { padding: 88px 24px 104px; } }

/* ── Top zone ────────────────────────────────────────────────────────────── */
.tm__top {
  display: flex; flex-direction: column; gap: 36px;
}
@media (min-width: 1024px) {
  .tm__top { flex-direction: row; align-items: flex-start; gap: 56px; }
  .tm__copy    { flex: 0 0 38%; }
  .tm__tp-col  { flex: 1; }
}

/* ── Copy ────────────────────────────────────────────────────────────────── */
.tm__copy { display: flex; flex-direction: column; gap: 16px; }

.tm__eyebrow { display: flex; }
.tm__pill {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 16px 6px 12px; border-radius: 999px;
  font-size: 12.5px; font-weight: 600;
  background: rgba(231,138,46,0.09);
  border: 1px solid rgba(231,138,46,0.28);
  color: #E78A2E;
}
.tm__pill-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #E78A2E; flex-shrink: 0;
  box-shadow: 0 0 7px rgba(231,138,46,0.75);
  animation: tm-dot-pulse 2.2s ease-in-out infinite;
}
@keyframes tm-dot-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.4); opacity: 0.60; }
}
@media (prefers-reduced-motion: reduce) { .tm__pill-dot { animation: none; } }

.tm__h2 {
  font-size: clamp(28px, 5vw, 52px);
  font-weight: 800; line-height: 1.08;
  letter-spacing: -0.026em; margin: 0;
}
.tm--dark  .tm__h2 { color: rgba(248,250,252,0.97); }
.tm--light .tm__h2 { color: rgba(11,16,32,0.96); }
.tm__h2-accent { color: #E78A2E; }

.tm__sub {
  font-size: clamp(14px, 1.6vw, 16px);
  line-height: 1.68; margin: 0; max-width: 480px;
}
.tm--dark  .tm__sub { color: rgba(148,163,184,0.80); }
.tm--light .tm__sub { color: rgba(71,85,105,0.82); }

/* ── Trustpilot column ───────────────────────────────────────────────────── */
.tm__tp-col { display: flex; flex-direction: column; gap: 24px; }

.tm__tp-brand {
  display: inline-flex; align-items: center; gap: 10px;
  align-self: flex-start;
}
.tm__tp-name {
  font-size: 22px; font-weight: 700; letter-spacing: -0.015em;
}
.tm--dark  .tm__tp-name { color: rgba(248,250,252,0.95); }
.tm--light .tm__tp-name { color: rgba(11,16,32,0.92); }

/* Stats row */
.tm__stats {
  display: flex; gap: 16px; flex-wrap: wrap;
}
@media (min-width: 640px) { .tm__stats { flex-wrap: nowrap; } }

.tm__stat {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 16px 14px; border-radius: 14px;
  flex: 1; min-width: 120px;
}
.tm--dark  .tm__stat {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
}
.tm--light .tm__stat {
  background: rgba(255,255,255,0.94);
  border: 1px solid rgba(11,16,32,0.08);
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}

.tm__stat-icon {
  width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  color: #E78A2E;
}
.tm--dark  .tm__stat-icon { background: rgba(231,138,46,0.12); }
.tm--light .tm__stat-icon { background: rgba(231,138,46,0.10); }

.tm__stat-body { display: flex; flex-direction: column; gap: 2px; }
.tm__stat-value { font-size: 16px; font-weight: 800; line-height: 1.2; }
.tm--dark  .tm__stat-value { color: rgba(248,250,252,0.96); }
.tm--light .tm__stat-value { color: rgba(11,16,32,0.94); }
.tm__stat-label { font-size: 12px; font-weight: 600; }
.tm--dark  .tm__stat-label { color: rgba(148,163,184,0.80); }
.tm--light .tm__stat-label { color: rgba(71,85,105,0.78); }
.tm__stat-sub { font-size: 11px; line-height: 1.40; }
.tm--dark  .tm__stat-sub { color: rgba(148,163,184,0.50); }
.tm--light .tm__stat-sub { color: rgba(71,85,105,0.52); }

/* ── Carousel wrapper ────────────────────────────────────────────────────── */
.tm__carousel {
  display: flex; align-items: center; gap: 16px;
}
@media (min-width: 1024px) { .tm__carousel { gap: 20px; } }

/* ── Nav buttons ─────────────────────────────────────────────────────────── */
.tm__nav-btn {
  flex-shrink: 0;
  width: 48px; height: 48px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid transparent; background: transparent;
  cursor: pointer;
  transition: background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}
.tm--dark  .tm__nav-btn { border-color: rgba(255,255,255,0.12); color: rgba(255,255,255,0.75); }
.tm--light .tm__nav-btn { border-color: rgba(11,16,32,0.12); color: rgba(11,16,32,0.70); }
.tm__nav-btn:hover:not(:disabled) {
  border-color: rgba(231,138,46,0.55);
  box-shadow: 0 0 16px rgba(231,138,46,0.24);
  color: #E78A2E;
}
.tm--dark  .tm__nav-btn:hover:not(:disabled) { background: rgba(231,138,46,0.08); }
.tm--light .tm__nav-btn:hover:not(:disabled) { background: rgba(231,138,46,0.06); }
.tm__nav-btn:focus-visible { outline: 2px solid #E78A2E; outline-offset: 2px; }
.tm__nav-btn:disabled { opacity: 0.28; cursor: not-allowed; }

/* ── Track ───────────────────────────────────────────────────────────────── */
.tm__track-outer { flex: 1; overflow: hidden; }
.tm__track {
  display: flex; gap: 20px;
  will-change: transform;
}

/* ── Cards ───────────────────────────────────────────────────────────────── */
.tm__card {
  flex: none;
  display: flex; flex-direction: column; gap: 18px;
  padding: 22px 20px 20px;
  border-radius: 18px;
  transition: transform 0.22s cubic-bezier(0.16,1,0.3,1), box-shadow 0.22s ease, border-color 0.22s ease;
}
.tm--dark  .tm__card {
  background: rgba(255,255,255,0.048);
  border: 1px solid rgba(255,255,255,0.09);
  box-shadow: 0 4px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.04);
}
.tm--light .tm__card {
  background: rgba(255,255,255,0.94);
  border: 1px solid rgba(11,16,32,0.08);
  box-shadow: 0 2px 18px rgba(0,0,0,0.07), 0 0 0 0.5px rgba(11,16,32,0.04);
}
.tm__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 44px rgba(231,138,46,0.12), 0 0 0 1px rgba(231,138,46,0.20);
}
.tm--dark  .tm__card:hover { border-color: rgba(231,138,46,0.25); }
.tm--light .tm__card:hover { border-color: rgba(231,138,46,0.28); box-shadow: 0 12px 36px rgba(0,0,0,0.10), 0 0 0 1px rgba(231,138,46,0.20); }

@media (min-width: 1024px) {
  .tm__card { padding: 24px 22px 22px; gap: 20px; }
}

/* ── Card top: stars + rating ────────────────────────────────────────────── */
.tm__card-top {
  display: flex; align-items: center; gap: 10px;
}
.tm__stars { display: flex; gap: 3px; }
.tm__star-sq {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 3px; flex-shrink: 0;
}
.tm__card-rating {
  font-size: 13.5px; font-weight: 700;
}
.tm--dark  .tm__card-rating { color: rgba(248,250,252,0.90); }
.tm--light .tm__card-rating { color: rgba(11,16,32,0.88); }

/* ── Quote ───────────────────────────────────────────────────────────────── */
.tm__quote {
  flex: 1;
  font-size: clamp(13px, 1.3vw, 14.5px);
  line-height: 1.68;
  margin: 0; padding: 0;
  quotes: none;
  position: relative;
}
.tm--dark  .tm__quote { color: rgba(226,232,240,0.78); }
.tm--light .tm__quote { color: rgba(11,16,32,0.72); }

.tm__q-open, .tm__q-close {
  font-size: 28px; font-weight: 800; line-height: 0;
  position: relative; display: inline-block;
  color: #E78A2E; opacity: 0.75;
}
.tm__q-open { vertical-align: -0.32em; margin-right: 3px; }
.tm__q-close { vertical-align: -0.32em; margin-left: 3px; }

/* ── Card footer ─────────────────────────────────────────────────────────── */
.tm__card-footer {
  display: flex; align-items: center; gap: 12px;
  padding-top: 16px;
}
.tm--dark  .tm__card-footer { border-top: 1px solid rgba(255,255,255,0.07); }
.tm--light .tm__card-footer { border-top: 1px solid rgba(11,16,32,0.07); }

.tm__av {
  width: 46px; height: 46px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; font-weight: 800;
  color: rgba(255,255,255,0.90);
}
.tm--dark  .tm__av { border: 2px solid rgba(255,255,255,0.15); }
.tm--light .tm__av { border: 2px solid rgba(255,255,255,0.60); }

.tm__ident { display: flex; flex-direction: column; gap: 2px; flex-shrink: 0; }
.tm__name { font-size: 13.5px; font-weight: 700; }
.tm--dark  .tm__name { color: rgba(248,250,252,0.94); }
.tm--light .tm__name { color: rgba(11,16,32,0.92); }
.tm__age { font-size: 12px; }
.tm--dark  .tm__age { color: rgba(148,163,184,0.60); }
.tm--light .tm__age { color: rgba(71,85,105,0.60); }

.tm__profile-col {
  display: flex; align-items: flex-start; gap: 7px; flex: 1; min-width: 0;
}
.tm__profile-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #E78A2E; flex-shrink: 0; margin-top: 5px;
}
.tm__job { font-size: 12.5px; font-weight: 600; }
.tm--dark  .tm__job { color: rgba(248,250,252,0.80); }
.tm--light .tm__job { color: rgba(11,16,32,0.78); }
.tm__ctx { font-size: 11.5px; }
.tm--dark  .tm__ctx { color: rgba(148,163,184,0.55); }
.tm--light .tm__ctx { color: rgba(71,85,105,0.58); }

/* ── Pagination ──────────────────────────────────────────────────────────── */
.tm__pagination {
  display: flex; flex-direction: column; gap: 14px;
}
@media (min-width: 640px) {
  .tm__pagination { flex-direction: row; align-items: center; gap: 24px; }
}

.tm__pag-bar {
  display: flex; align-items: center; gap: 12px;
}
.tm__pag-current {
  font-size: 14px; font-weight: 800;
  color: #E78A2E; min-width: 22px;
}
.tm__pag-track {
  flex: 1; min-width: 120px; height: 3px; border-radius: 3px; overflow: hidden;
}
.tm--dark  .tm__pag-track { background: rgba(255,255,255,0.10); }
.tm--light .tm__pag-track { background: rgba(11,16,32,0.10); }
.tm__pag-fill {
  height: 100%; background: #E78A2E; border-radius: 3px;
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.tm__pag-total {
  font-size: 13px; font-weight: 600; min-width: 22px; text-align: right;
}
.tm--dark  .tm__pag-total { color: rgba(148,163,184,0.55); }
.tm--light .tm__pag-total { color: rgba(71,85,105,0.55); }

.tm__pag-meta {
  display: flex; align-items: center; gap: 20px;
}
@media (min-width: 640px) { .tm__pag-meta { margin-left: auto; } }
.tm__pag-count { font-size: 12.5px; }
.tm--dark  .tm__pag-count { color: rgba(148,163,184,0.60); }
.tm--light .tm__pag-count { color: rgba(71,85,105,0.60); }

.tm__see-all {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 13px; font-weight: 600;
  text-decoration: none;
  transition: color 0.18s ease;
}
.tm--dark  .tm__see-all { color: #E78A2E; }
.tm--light .tm__see-all { color: #C96E10; }
.tm__see-all:hover { text-decoration: underline; text-underline-offset: 3px; }
.tm__see-all:focus-visible { outline: 2px solid #E78A2E; outline-offset: 2px; border-radius: 2px; }

/* ── Bottom trust block ──────────────────────────────────────────────────── */
.tm__bottom {
  display: flex; flex-direction: column; gap: 16px;
  padding: 20px 20px;
  border-radius: 16px;
}
@media (min-width: 640px) {
  .tm__bottom { flex-direction: row; align-items: center; gap: 24px; padding: 22px 24px; }
  .tm__bt-left { flex: 1; }
}
.tm--dark  .tm__bottom {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
}
.tm--light .tm__bottom {
  background: rgba(255,255,255,0.94);
  border: 1px solid rgba(11,16,32,0.09);
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}

.tm__bt-left {
  display: flex; align-items: center; gap: 14px;
}
.tm__bt-icon {
  flex-shrink: 0; width: 42px; height: 42px; border-radius: 11px;
  display: flex; align-items: center; justify-content: center;
  color: #10B981;
}
.tm--dark  .tm__bt-icon { background: rgba(16,185,129,0.12); }
.tm--light .tm__bt-icon { background: rgba(16,185,129,0.10); }
.tm__bt-title {
  font-size: 14px; font-weight: 700; margin: 0 0 3px;
}
.tm--dark  .tm__bt-title { color: rgba(248,250,252,0.95); }
.tm--light .tm__bt-title { color: rgba(11,16,32,0.92); }
.tm__bt-sub { font-size: 12.5px; margin: 0; }
.tm--dark  .tm__bt-sub { color: rgba(148,163,184,0.70); }
.tm--light .tm__bt-sub { color: rgba(71,85,105,0.70); }

.tm__bt-tp {
  display: inline-flex; align-items: center; gap: 8px;
  text-decoration: none; flex-shrink: 0;
  padding: 8px 16px; border-radius: 10px;
  transition: background 0.18s ease;
}
.tm--dark  .tm__bt-tp { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10); }
.tm--light .tm__bt-tp { background: rgba(11,16,32,0.04); border: 1px solid rgba(11,16,32,0.10); }
.tm__bt-tp:hover { background: rgba(0,182,122,0.10); border-color: rgba(0,182,122,0.28); }
.tm__bt-tp:focus-visible { outline: 2px solid #00B67A; outline-offset: 2px; border-radius: 10px; }
.tm__bt-tp-label { font-size: 15px; font-weight: 700; letter-spacing: -0.01em; }
.tm--dark  .tm__bt-tp-label { color: rgba(248,250,252,0.90); }
.tm--light .tm__bt-tp-label { color: rgba(11,16,32,0.88); }

/* ── Swipe hint — mobile only ─────────────────────────────────────────────── */
.tm__swipe-hint {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  font-size: 12px;
}
.tm--dark  .tm__swipe-hint { color: rgba(148,163,184,0.50); }
.tm--light .tm__swipe-hint { color: rgba(71,85,105,0.52); }
@media (min-width: 1024px) { .tm__swipe-hint { display: none; } }
</style>
