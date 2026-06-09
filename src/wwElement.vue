<template>
  <div class="app-root" :class="resolvedIsDark ? 'app-root--dark' : 'app-root--light'">
    <AppHeroSection
      v-if="showHero"
      :is-dark="resolvedIsDark"
      :compare-url="compareUrl"
      :explore-url="exploreUrl"
      :hero-dark-url="heroDarkUrl"
      :hero-light-url="heroLightUrl"
      :iris-avatar-url="irisAvatarUrl"
      @compare-click="onCompareClick"
      @explore-click="onExploreClick"
      @hero-mounted="onHeroMounted"
    />

    <AppStorySection
      v-if="showStory"
      :is-dark="resolvedIsDark"
      :story-image1-dark-url="storyImage1DarkUrl"
      :story-image1-light-url="storyImage1LightUrl"
      :story-image2-dark-url="storyImage2DarkUrl"
      :story-image2-light-url="storyImage2LightUrl"
      :story-image3-dark-url="storyImage3DarkUrl"
      :story-image3-light-url="storyImage3LightUrl"
      :story-image4-dark-url="storyImage4DarkUrl"
      :story-image4-light-url="storyImage4LightUrl"
      @story-card-click="onStoryCardClick"
    />

    <AppConceptSection
      v-if="showConcept"
      :is-dark="resolvedIsDark"
      @concept-step-click="onConceptStepClick"
    />

    <AppCompareWaysSection
      v-if="showCompareWays"
      :is-dark="resolvedIsDark"
      :iris-avatar-url="irisAvatarUrl"
      :compare-url="compareUrl"
      :explore-url="exploreUrl"
      @compare-click="onCompareClick"
      @explore-click="onExploreClick"
    />

    <AppMofoSection
      v-if="showMofo"
      :is-dark="resolvedIsDark"
      v-bind="mofoBadgeProps"
    />

    <AppPopularComparisonsSection
      v-if="showPopularComparisons"
      :is-dark="resolvedIsDark"
    />

    <AppTestimonialsSection
      v-if="showTestimonials"
      :is-dark="resolvedIsDark"
    />

    <AppMobileInstallSection
      v-if="showMobileInstall"
      :is-dark="resolvedIsDark"
      :mobile-qr-code-url="mobileQrCodeUrl"
      :mobile-app-screenshot-url="mobileAppScreenshotUrl"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import AppHeroSection        from './components/AppHeroSection.vue'
import AppStorySection       from './components/AppStorySection.vue'
import AppConceptSection     from './components/AppConceptSection.vue'
import AppCompareWaysSection from './components/AppCompareWaysSection.vue'
import AppMofoSection        from './components/AppMofoSection.vue'
import AppPopularComparisonsSection from './components/AppPopularComparisonsSection.vue'
import AppTestimonialsSection      from './components/AppTestimonialsSection.vue'
import AppMobileInstallSection     from './components/AppMobileInstallSection.vue'

const DEFAULT_ASSETS = {
  heroDark:   'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_HERO_Blanc_OrangeOK.png?_wwcv=1779460464091',
  heroLight:  'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_HERO_Noir_OrangeOK.png?_wwcv=1779461279453',
  irisAvatar: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/iris-avatar_1.png?_wwcv=1779660586361',
  story1Dark:  'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details_Blanc_OrangeOK.png?_wwcv=1779460464079',
  story1Light: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details_Blanc_OrangeOK_1.png?_wwcv=1779461279458',
  story2Dark:  'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details2_Blanc_OrangeOK.png?_wwcv=1779460464077',
  story2Light: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details2_Noir_OrangeOK.png?_wwcv=1779461279453',
  story3Dark:  'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details3_Blanc_OrangeOK.png?_wwcv=1779460464088',
  story3Light: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details3_Noir_OrangeOK.png?_wwcv=1779461279410',
  story4Dark:  'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details4_Blanc_OrangeOK.png?_wwcv=1779460464089',
  story4Light: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details4_Noir_OrangeOK.png?_wwcv=1779461279413',
}

function _getFrontDocument() {
  try { return (typeof wwLib !== 'undefined' ? wwLib?.getFrontDocument?.() : null) ?? document } catch { return document }
}

export default {
  name: 'PrevestApp',
  components: { AppHeroSection, AppStorySection, AppConceptSection, AppCompareWaysSection, AppMofoSection, AppPopularComparisonsSection, AppTestimonialsSection, AppMobileInstallSection },

  props: {
    uid:     { type: String, required: true },
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },

  emits: ['trigger-event'],

  setup(props, { emit }) {
    // ── Theme — synced from html.ww-app-theme-dark (read-only) ───────────
    const resolvedIsDark = ref(props.content?.isDarkMode ?? true)
    let _themeObserver = null

    function _syncTheme() {
      const doc = _getFrontDocument()
      const fromClass = doc?.documentElement?.classList?.contains('ww-app-theme-dark')
      // If the class is absent AND no evidence it was ever set, fall back to prop
      if (fromClass !== undefined) {
        resolvedIsDark.value = !!fromClass
      } else {
        resolvedIsDark.value = props.content?.isDarkMode ?? true
      }
    }

    onMounted(() => {
      _syncTheme()
      try {
        const doc = _getFrontDocument()
        if (doc?.documentElement && typeof MutationObserver !== 'undefined') {
          _themeObserver = new MutationObserver(_syncTheme)
          _themeObserver.observe(doc.documentElement, { attributes: true, attributeFilter: ['class'] })
        }
      } catch { /* noop */ }
    })

    onBeforeUnmount(() => { try { _themeObserver?.disconnect() } catch { /* noop */ } })

    // ── Display ───────────────────────────────────────────────────────────
    const showHero         = computed(() => props.content?.showHero         ?? true)
    const showStory        = computed(() => props.content?.showStory        ?? true)
    const showConcept      = computed(() => props.content?.showConcept      ?? true)
    const showCompareWays  = computed(() => props.content?.showCompareWays  ?? true)
    const showMofo         = computed(() => props.content?.showMofo         ?? true)
    const showPopularComparisons = computed(() => props.content?.showPopularComparisons ?? true)
    const showTestimonials       = computed(() => props.content?.showTestimonials       ?? true)
    const showMobileInstall      = computed(() => props.content?.showMobileInstall      ?? true)

    // ── Mobile Install assets ─────────────────────────────────────────────
    const mobileQrCodeUrl        = computed(() => props.content?.mobileQrCodeUrl        ?? '')
    const mobileAppScreenshotUrl = computed(() => props.content?.mobileAppScreenshotUrl ?? '')

    // ── CTAs ──────────────────────────────────────────────────────────────
    const compareUrl = computed(() => props.content?.compareUrl ?? '/start/')
    const exploreUrl = computed(() => props.content?.exploreUrl ?? '#placements')

    // ── MOFO badge flat props (forwarded as v-bind) ───────────────────────
    const MOFO_BADGE_KEYS = [
      ['Bnp',    'BNP PARIBAS'],
      ['Sl',     'Swiss Life'],
      ['Corum',  'CORUM'],
      ['Ig',     'Inter Gestion'],
      ['Ce',     "Caisse d'Épargne"],
      ['Perial', 'PERIAL'],
      ['Oddo',   'ODDO BHF'],
      ['Amundi', 'Amundi'],
      ['Axa',    'AXA'],
      ['Lf',     'La Française'],
      ['Sg',     'Société Générale'],
    ]
    const mofoBadgeProps = computed(() => {
      const out = {}
      for (const [key, defaultLabel] of MOFO_BADGE_KEYS) {
        const lk = `mofoBadge${key}`
        out[`mofoBadge${key}Label`]   = props.content?.[`${lk}Label`]   ?? defaultLabel
        out[`mofoBadge${key}LogoUrl`] = props.content?.[`${lk}LogoUrl`] ?? ''
        out[`mofoBadge${key}Display`] = props.content?.[`${lk}Display`] ?? true
      }
      return out
    })

    // ── Assets ────────────────────────────────────────────────────────────
    const heroDarkUrl  = computed(() => props.content?.heroDarkUrl  || DEFAULT_ASSETS.heroDark)
    const heroLightUrl = computed(() => props.content?.heroLightUrl || DEFAULT_ASSETS.heroLight)
    const irisAvatarUrl = computed(() => props.content?.irisAvatarUrl || DEFAULT_ASSETS.irisAvatar)

    const storyImage1DarkUrl  = computed(() => props.content?.storyImage1DarkUrl  || DEFAULT_ASSETS.story1Dark)
    const storyImage1LightUrl = computed(() => props.content?.storyImage1LightUrl || DEFAULT_ASSETS.story1Light)
    const storyImage2DarkUrl  = computed(() => props.content?.storyImage2DarkUrl  || DEFAULT_ASSETS.story2Dark)
    const storyImage2LightUrl = computed(() => props.content?.storyImage2LightUrl || DEFAULT_ASSETS.story2Light)
    const storyImage3DarkUrl  = computed(() => props.content?.storyImage3DarkUrl  || DEFAULT_ASSETS.story3Dark)
    const storyImage3LightUrl = computed(() => props.content?.storyImage3LightUrl || DEFAULT_ASSETS.story3Light)
    const storyImage4DarkUrl  = computed(() => props.content?.storyImage4DarkUrl  || DEFAULT_ASSETS.story4Dark)
    const storyImage4LightUrl = computed(() => props.content?.storyImage4LightUrl || DEFAULT_ASSETS.story4Light)

    // ── Events ────────────────────────────────────────────────────────────
    function onCompareClick()       { emit('trigger-event', { name: 'compare-click',       event: {} }) }
    function onExploreClick()       { emit('trigger-event', { name: 'explore-click',       event: {} }) }
    function onHeroMounted()        { emit('trigger-event', { name: 'hero-mounted',        event: {} }) }
    function onStoryCardClick(e)    { emit('trigger-event', { name: 'story-card-click',    event: e   }) }
    function onConceptStepClick(e)  { emit('trigger-event', { name: 'concept-step-click',  event: e   }) }

    return {
      resolvedIsDark,
      showHero, showStory, showConcept, showCompareWays, showMofo, showPopularComparisons, showTestimonials, showMobileInstall,
      compareUrl, exploreUrl, mofoBadgeProps,
      heroDarkUrl, heroLightUrl, irisAvatarUrl,
      storyImage1DarkUrl, storyImage1LightUrl,
      storyImage2DarkUrl, storyImage2LightUrl,
      storyImage3DarkUrl, storyImage3LightUrl,
      storyImage4DarkUrl, storyImage4LightUrl,
      mobileQrCodeUrl, mobileAppScreenshotUrl,
      onCompareClick, onExploreClick, onHeroMounted, onStoryCardClick, onConceptStepClick,
    }
  },
}
</script>

<style scoped>
.app-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-root--dark  { background: #0b1020; }
.app-root--light { background: #f9fafc; }
</style>
