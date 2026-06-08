<template>
  <div class="app-root" :class="rootClass">
    <AppHeader
      v-if="showHeader"
      :is-dark-prop="isDark"
      :auth-status="resolvedAuthStatus"
      :user-name="resolvedUserName"
      :user-avatar-url="resolvedUserAvatarUrl"
      :user-initials="resolvedUserInitials"
      :login-url="loginUrl"
      :account-url="accountUrl"
      @login-click="onLoginClick"
      @account-click="onAccountClick"
      @theme-toggle="onThemeToggle"
    />

    <AppHeroSection
      v-if="showHero"
      :is-dark="isDark"
      :compare-url="compareUrl"
      :explore-url="exploreUrl"
      :hero-desktop-dark-url="heroDesktopDarkUrl"
      :hero-desktop-light-url="heroDesktopLightUrl"
      :hero-mobile-dark-url="heroMobileDarkUrl"
      :hero-mobile-light-url="heroMobileLightUrl"
      :iris-avatar-url="irisAvatarUrl"
      @compare-click="onCompareClick"
      @explore-click="onExploreClick"
      @hero-mounted="onHeroMounted"
    />

    <AppStorySection
      v-if="showStory"
      :is-dark="isDark"
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
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import AppHeader      from './components/AppHeader.vue'
import AppHeroSection from './components/AppHeroSection.vue'
import AppStorySection from './components/AppStorySection.vue'

const DEFAULT_ASSETS = {
  heroDesktopDark:  'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Desktop-hero2-dark.png?_wwcv=1780894447042',
  heroDesktopLight: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Desktop-hero2-light.png?_wwcv=1780894447040',
  heroMobileDark:   'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Mobile-hero2-dark.png?_wwcv=1780894447099',
  heroMobileLight:  'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Mobile-hero2-dark.png?_wwcv=1780894447099',
  irisAvatar:       'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/iris-avatar_1.png?_wwcv=1779660586361',
  story1Dark:       'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details_Blanc_OrangeOK.png?_wwcv=1779460464079',
  story1Light:      'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details_Blanc_OrangeOK_1.png?_wwcv=1779461279458',
  story2Dark:       'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details2_Blanc_OrangeOK.png?_wwcv=1779460464077',
  story2Light:      'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details2_Noir_OrangeOK.png?_wwcv=1779461279453',
  story3Dark:       'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details3_Blanc_OrangeOK.png?_wwcv=1779460464088',
  story3Light:      'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details3_Noir_OrangeOK.png?_wwcv=1779461279410',
  story4Dark:       'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details4_Blanc_OrangeOK.png?_wwcv=1779460464089',
  story4Light:      'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details4_Noir_OrangeOK.png?_wwcv=1779461279413',
}

function _getWin() {
  try { return (typeof wwLib !== 'undefined' ? wwLib?.getFrontWindow?.() : null) ?? window } catch { return window }
}

export default {
  name: 'PrevestApp',
  components: { AppHeader, AppHeroSection, AppStorySection },

  props: {
    uid: { type: String, required: true },
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },

  emits: [
    'trigger-event',
  ],

  setup(props, { emit }) {
    // ── Reactive helpers ─────────────────────────────────────────────────
    const isDark = computed(() => props.content?.isDarkMode ?? true)

    const showHeader = computed(() => props.content?.showHeader ?? true)
    const showHero   = computed(() => props.content?.showHero   ?? true)
    const showStory  = computed(() => props.content?.showStory  ?? true)

    const compareUrl  = computed(() => props.content?.compareUrl  ?? '/start')
    const exploreUrl  = computed(() => props.content?.exploreUrl  ?? '#placements')
    const accountUrl  = computed(() => props.content?.accountUrl  ?? 'https://account.prevest.ai')
    const loginUrl    = computed(() => props.content?.loginUrl    ?? 'https://account.prevest.ai/login')
    const sessionStatusUrl = computed(() => props.content?.sessionStatusUrl ?? 'https://account.prevest.ai/api/prevest/session-status')

    // Auth — resolved from session fetch, fallback to WeWeb prop
    const sessionResolved     = ref(false)
    const sessionAuthStatus   = ref(null)
    const sessionUserName     = ref(null)
    const sessionUserAvatarUrl = ref(null)
    const sessionUserInitials  = ref(null)

    const resolvedAuthStatus   = computed(() => sessionResolved.value ? sessionAuthStatus.value : (props.content?.authStatus ?? 'guest'))
    const resolvedUserName      = computed(() => sessionResolved.value ? sessionUserName.value   : (props.content?.userName ?? ''))
    const resolvedUserAvatarUrl = computed(() => sessionResolved.value ? sessionUserAvatarUrl.value : (props.content?.userAvatarUrl ?? ''))
    const resolvedUserInitials  = computed(() => sessionResolved.value ? sessionUserInitials.value  : (props.content?.userInitials  ?? ''))

    // Assets — WeWeb prop or default CDN URL
    const heroDesktopDarkUrl  = computed(() => props.content?.heroDesktopDarkUrl  || DEFAULT_ASSETS.heroDesktopDark)
    const heroDesktopLightUrl = computed(() => props.content?.heroDesktopLightUrl || DEFAULT_ASSETS.heroDesktopLight)
    const heroMobileDarkUrl   = computed(() => props.content?.heroMobileDarkUrl   || DEFAULT_ASSETS.heroMobileDark)
    const heroMobileLightUrl  = computed(() => props.content?.heroMobileLightUrl  || DEFAULT_ASSETS.heroMobileLight)
    const irisAvatarUrl       = computed(() => props.content?.irisAvatarUrl       || DEFAULT_ASSETS.irisAvatar)

    const storyImage1DarkUrl  = computed(() => props.content?.storyImage1DarkUrl  || DEFAULT_ASSETS.story1Dark)
    const storyImage1LightUrl = computed(() => props.content?.storyImage1LightUrl || DEFAULT_ASSETS.story1Light)
    const storyImage2DarkUrl  = computed(() => props.content?.storyImage2DarkUrl  || DEFAULT_ASSETS.story2Dark)
    const storyImage2LightUrl = computed(() => props.content?.storyImage2LightUrl || DEFAULT_ASSETS.story2Light)
    const storyImage3DarkUrl  = computed(() => props.content?.storyImage3DarkUrl  || DEFAULT_ASSETS.story3Dark)
    const storyImage3LightUrl = computed(() => props.content?.storyImage3LightUrl || DEFAULT_ASSETS.story3Light)
    const storyImage4DarkUrl  = computed(() => props.content?.storyImage4DarkUrl  || DEFAULT_ASSETS.story4Dark)
    const storyImage4LightUrl = computed(() => props.content?.storyImage4LightUrl || DEFAULT_ASSETS.story4Light)

    // Root class
    const rootClass = computed(() => isDark.value ? 'app-root--dark' : 'app-root--light')

    // ── Session fetch ─────────────────────────────────────────────────────
    onMounted(async () => {
      const url = sessionStatusUrl.value
      if (!url) return
      try {
        const res = await fetch(url, {
          method: 'GET',
          credentials: 'include',
          headers: { Accept: 'application/json' },
        })
        if (!res.ok) return
        const data = await res.json()
        sessionResolved.value = true
        sessionAuthStatus.value   = data?.authenticated ? 'authenticated' : 'guest'
        sessionUserName.value     = data?.user?.name ?? data?.user?.firstName ?? null
        sessionUserAvatarUrl.value = data?.user?.avatarUrl ?? null
        sessionUserInitials.value  = data?.user?.initials ?? null
      } catch {
        // Silently ignore — cross-origin / network errors do not break the component
      }
    })

    // ── Event handlers ────────────────────────────────────────────────────
    function onCompareClick()   { emit('trigger-event', { name: 'compare-click',    event: {} }) }
    function onExploreClick()   { emit('trigger-event', { name: 'explore-click',    event: {} }) }
    function onLoginClick()     { emit('trigger-event', { name: 'login-click',      event: {} }) }
    function onAccountClick()   { emit('trigger-event', { name: 'account-click',    event: {} }) }
    function onHeroMounted()    { emit('trigger-event', { name: 'hero-mounted',     event: {} }) }
    function onThemeToggle(e)   { emit('trigger-event', { name: 'theme-toggle',     event: e   }) }
    function onStoryCardClick(e){ emit('trigger-event', { name: 'story-card-click', event: e   }) }

    return {
      isDark, showHeader, showHero, showStory,
      compareUrl, exploreUrl, accountUrl, loginUrl,
      resolvedAuthStatus, resolvedUserName, resolvedUserAvatarUrl, resolvedUserInitials,
      heroDesktopDarkUrl, heroDesktopLightUrl, heroMobileDarkUrl, heroMobileLightUrl, irisAvatarUrl,
      storyImage1DarkUrl, storyImage1LightUrl,
      storyImage2DarkUrl, storyImage2LightUrl,
      storyImage3DarkUrl, storyImage3LightUrl,
      storyImage4DarkUrl, storyImage4LightUrl,
      rootClass,
      onCompareClick, onExploreClick, onLoginClick, onAccountClick,
      onHeroMounted, onThemeToggle, onStoryCardClick,
    }
  },
}
</script>

<style scoped>
.app-root {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-root--dark  { background: #06091a; }
.app-root--light { background: #f4f6fb; }
</style>
