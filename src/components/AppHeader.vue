<template>
  <header class="aph-root" :class="{ 'aph--dark': isDark, 'aph--light': !isDark }">
    <div class="aph-inner">

      <!-- ── Logo ─────────────────────────────────────────────────────────── -->
      <a href="/" class="aph-logo" aria-label="PREVEST — Accueil" @click.prevent="onLogoClick">
        <svg class="aph-logo__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 417.92 56.7" role="img" aria-label="PREVEST">
          <g>
            <path class="aph-logo__icon" d="M78.65,0H14.94C6.69,0,0,6.69,0,14.94v26.82c0,8.25,6.69,14.94,14.94,14.94h7.39v-6.14c0-3.76,3.05-6.8,6.8-6.8h26.53c1.22,0,2.2-.99,2.2-2.2v-4.04H3.03l.24-.65c.34-.9.7-1.81,1.08-2.69l.13-.29h14.61l-7.57-11.95.21-.27c.58-.75,1.19-1.49,1.79-2.2l.43-.5,9.45,14.92h8.31l-10.76-10.6,1.97-3.17,13.98,13.78h15.84l-28.03-16.68,1.92-3.1,21.43,12.75,10.02-6.17,2.66,2.64-9.15,5.63,8.18,4.87,10.2-10.18c.87-.87,2.33-.67,2.94.4l2.9,5.08-17.04,27.59h19.89c8.25,0,14.94-6.69,14.94-14.94V14.94c0-8.25-6.69-14.94-14.94-14.94ZM81.77,17.62l-4.84-4.65-6.36,2.14,4.65-4.84-2.14-6.36,4.84,4.65,6.36-2.14-4.65,4.84,2.14,6.36Z"/>
            <g class="aph-logo__text">
              <path d="M117.28,3.83h17.97c10.84,0,16.81,5.35,16.81,15.09s-5.9,15.23-16.95,15.23h-11.66v19.42h-6.17V3.83ZM145.89,18.92c0-6.79-3.71-9.74-10.98-9.74h-11.46v19.62h11.39c7.68,0,11.05-2.95,11.05-9.88Z"/>
              <path d="M161.05,3.83h6.17v8.23h.14c2.88-5.9,8.03-8.64,16.19-8.64h1.92v5.9h-2.61c-10.36,0-15.64,5.35-15.64,15.71v28.54h-6.17V3.83Z"/>
              <path d="M187.94,28.66c0-14.89,8.78-25.86,23.39-25.86s21.95,9.33,21.95,26.82h-39.04c.34,11.59,6.04,19.62,17.15,19.62,7.96,0,13.17-4.12,14.89-11.66h6.24c-2.47,10.77-10.22,17.01-21.13,17.01-14.68,0-23.46-11.04-23.46-25.93ZM226.57,24.27c-.82-10.56-6.11-16.12-15.23-16.12-10.36,0-15.64,6.45-16.81,16.12h32.04Z"/>
              <path d="M235.97,3.83h6.65l12.97,36.36,2.13,5.97h.14l1.99-5.97,12.21-36.36h6.52l-17.36,49.74h-7L235.97,3.83Z"/>
              <path d="M285.09,28.66c0-14.89,8.78-25.86,23.39-25.86s21.95,9.33,21.95,26.82h-39.04c.34,11.59,6.04,19.62,17.15,19.62,7.96,0,13.17-4.12,14.89-11.66h6.24c-2.47,10.77-10.22,17.01-21.13,17.01-14.68,0-23.46-11.04-23.46-25.93ZM323.72,24.27c-.82-10.56-6.11-16.12-15.23-16.12-10.36,0-15.64,6.45-16.81,16.12h32.04Z"/>
              <path d="M337.79,38.33h6.24c.62,7.82,5.35,10.98,14.2,10.98,8.09,0,12.9-3.29,12.9-9.54,0-4.6-2.68-7.55-8.92-8.51l-11.53-1.78c-7.41-1.17-11.94-5.97-11.94-12.9,0-8.71,7.13-13.79,18.52-13.79s17.29,4.67,18.46,14h-6.24c-.62-5.76-4.94-8.71-12.28-8.71-8.03,0-12.35,2.95-12.35,8.16,0,4.32,2.95,7,9.06,7.96l10.98,1.71c7.82,1.24,12.62,5.97,12.49,13.86-.14,9.67-7.41,14.82-19.42,14.82-13.45,0-19.76-6.65-20.17-16.26Z"/>
              <path d="M392.54,38.81V9.18h-10.63V3.83h36.02v5.35h-19.21v29.36c0,7.34,2.47,9.67,10.15,9.67h8.16v5.35h-9.12c-10.98,0-15.37-4.18-15.37-14.75Z"/>
            </g>
          </g>
        </svg>
      </a>

      <!-- ── Central nav (desktop only) ────────────────────────────────────── -->
      <nav v-if="!isMobile" class="aph-nav" aria-label="Navigation principale">
        <div class="aph-nav__pill">
          <template v-for="(item, idx) in menuItems" :key="item.key">
            <button type="button" class="aph-nav__item" @click="onMenuItemClick(item)">
              <span class="aph-nav__label">{{ item.label }}</span>
            </button>
            <span v-if="idx < menuItems.length - 1" class="aph-nav__sep" aria-hidden="true" />
          </template>
        </div>
      </nav>

      <!-- ── Right actions ─────────────────────────────────────────────────── -->
      <div class="aph-actions">

        <!-- Theme toggle -->
        <button type="button" class="aph-action-btn" :aria-label="isDark ? 'Mode clair' : 'Mode sombre'" @click="onToggleTheme">
          <svg v-if="isDark" viewBox="0 0 20 20" fill="none" class="aph-icon" aria-hidden="true">
            <circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="1.8"/>
            <path d="M10 1.5V3M10 17v1.5M18.5 10H17M3 10H1.5M16.07 3.93l-1.07 1.07M5 15l-1.07 1.07M16.07 16.07l-1.07-1.07M5 5 3.93 3.93" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
          <svg v-else viewBox="0 0 20 20" fill="none" class="aph-icon" aria-hidden="true">
            <path d="M17.5 12.5A8 8 0 017.5 2.5a8 8 0 1010 10z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Login button (guest) -->
        <button
          v-if="authStatus === 'guest' || authStatus === 'unknown'"
          type="button"
          class="aph-login-btn"
          aria-label="Se connecter à votre espace PREVEST"
          @click="onLoginClick"
        >
          <svg viewBox="0 0 16 16" fill="none" class="aph-icon--sm" aria-hidden="true">
            <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" stroke-width="1.4"/>
            <path d="M3 13c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          </svg>
          <span>Se connecter</span>
        </button>

        <!-- Account pill (authenticated) -->
        <button
          v-else-if="authStatus === 'authenticated'"
          type="button"
          class="aph-account-btn"
          aria-label="Accéder à votre espace"
          @click="onAccountClick"
        >
          <div class="aph-avatar">
            <img v-if="userAvatarUrl" :src="userAvatarUrl" :alt="displayName" class="aph-avatar__img" loading="lazy" referrerpolicy="no-referrer" />
            <span v-else class="aph-avatar__initials">{{ displayInitials }}</span>
            <span class="aph-avatar__dot" aria-hidden="true" />
          </div>
          <span class="aph-account-btn__name">{{ displayName }}</span>
        </button>

      </div>
    </div>
  </header>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

function _getDoc() {
  try { return (typeof wwLib !== 'undefined' ? wwLib?.getFrontDocument?.() : null) ?? document } catch { return document }
}
function _getWin() {
  try { return (typeof wwLib !== 'undefined' ? wwLib?.getFrontWindow?.() : null) ?? window } catch { return window }
}
function _isDark() {
  try { return _getDoc()?.documentElement?.classList?.contains('ww-app-theme-dark') ?? true } catch { return true }
}

const MENU_ITEMS = [
  { key: 'discover', label: 'Découvrir', anchor: 'discover' },
  { key: 'compare',  label: 'Comparer',  anchor: 'compare' },
  { key: 'iris',     label: 'IRIS',      anchor: 'iris' },
  { key: 'faq',      label: 'FAQ',       anchor: 'faq' },
]

export default {
  name: 'AppHeader',
  props: {
    isDarkProp:  { type: Boolean, default: true },
    authStatus:  { type: String,  default: 'guest' },
    userName:    { type: String,  default: null },
    userAvatarUrl: { type: String, default: null },
    userInitials:  { type: String, default: null },
    loginUrl:    { type: String,  default: 'https://account.prevest.ai/login' },
    accountUrl:  { type: String,  default: 'https://account.prevest.ai' },
  },
  emits: ['login-click', 'account-click', 'theme-toggle', 'menu-click'],

  setup(props, { emit }) {
    const darkLocal = ref(_isDark())
    let _obs = null

    onMounted(() => {
      darkLocal.value = _isDark()
      try {
        const docEl = _getDoc()?.documentElement
        if (docEl && typeof MutationObserver !== 'undefined') {
          _obs = new MutationObserver(() => { darkLocal.value = _isDark() })
          _obs.observe(docEl, { attributes: true, attributeFilter: ['class'] })
        }
      } catch { /* noop */ }
    })
    onUnmounted(() => { try { _obs?.disconnect() } catch { /* noop */ } })

    const isDark = computed(() => darkLocal.value ?? props.isDarkProp)

    const isMobile = ref(false)
    let _resizeH = null
    function _checkMobile() { try { isMobile.value = _getWin().innerWidth < 1024 } catch { /* noop */ } }
    onMounted(() => {
      _checkMobile()
      _resizeH = () => _checkMobile()
      try { _getWin().addEventListener('resize', _resizeH, { passive: true }) } catch { /* noop */ }
    })
    onUnmounted(() => { try { _getWin().removeEventListener('resize', _resizeH) } catch { /* noop */ } })

    const menuItems = MENU_ITEMS

    function _getInitials(name, initials) {
      if (initials) return initials.slice(0, 2).toUpperCase()
      if (!name) return 'U'
      const parts = name.trim().split(/\s+/)
      return parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase()
    }
    function _getFirstName(name) { return name?.trim().split(/\s+/)[0] || null }

    const displayName     = computed(() => _getFirstName(props.userName) ?? props.userName ?? '')
    const displayInitials = computed(() => _getInitials(props.userName, props.userInitials))

    function onLogoClick() { try { _getWin().location.href = '/' } catch { /* noop */ } }
    function onToggleTheme() {
      try {
        const docEl = _getDoc()?.documentElement
        if (!docEl) return
        const willBeDark = !docEl.classList.contains('ww-app-theme-dark')
        docEl.classList.toggle('ww-app-theme-dark', willBeDark)
        darkLocal.value = willBeDark
      } catch { /* noop */ }
      emit('theme-toggle', { isDarkMode: darkLocal.value })
    }
    function onLoginClick() {
      emit('login-click')
      try {
        const win = _getWin()
        const returnUrl = encodeURIComponent(win.location.href)
        win.location.href = `${props.loginUrl}?return_url=${returnUrl}`
      } catch { /* noop */ }
    }
    function onAccountClick() {
      emit('account-click')
      try { _getWin().location.href = props.accountUrl } catch { /* noop */ }
    }
    function onMenuItemClick(item) {
      emit('menu-click', item)
      try {
        const doc = _getDoc()
        const el = doc?.getElementById(item.anchor) ?? doc?.querySelector(`[data-anchor="${item.anchor}"]`)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } catch { /* noop */ }
    }

    return { isDark, isMobile, menuItems, displayName, displayInitials, onLogoClick, onToggleTheme, onLoginClick, onAccountClick, onMenuItemClick }
  },
}
</script>

<style scoped>
.aph-root {
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  position: relative;
  z-index: 50;
}

.aph-inner {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 1400px;
  margin: 0 auto;
  height: 68px;
  padding: 0 20px;
  border-radius: 20px;
  border: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(10, 15, 30, 0.80);
  backdrop-filter: blur(24px) saturate(1.6);
  -webkit-backdrop-filter: blur(24px) saturate(1.6);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 32px rgba(0,0,0,0.36);
  transition: background 0.25s ease, border-color 0.25s ease;
}

.aph--light .aph-inner {
  background: rgba(248, 250, 252, 0.92);
  border-color: rgba(15, 23, 42, 0.10);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 4px 20px rgba(0,0,0,0.10);
}

@media (min-width: 1024px) {
  .aph-root { padding: 14px 24px; }
  .aph-inner { height: 76px; padding: 0 28px; gap: 16px; }
}

/* Logo */
.aph-logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; border-radius: 6px; transition: opacity 0.15s; }
.aph-logo:hover { opacity: 0.78; }
.aph-logo:focus-visible { outline: 2px solid #E78A2E; outline-offset: 4px; }
.aph-logo__svg { height: 24px; width: auto; display: block; overflow: visible; }
.aph-logo__icon { fill: #E78A2E; }
.aph-logo__text { fill: currentColor; }
.aph--dark .aph-logo__text  { color: rgba(248,250,252,0.92); fill: rgba(248,250,252,0.92); }
.aph--light .aph-logo__text { color: rgba(15,23,42,0.88);    fill: rgba(15,23,42,0.88); }
@media (min-width: 1024px) { .aph-logo__svg { height: 26px; } }
@media (max-width: 359px) { .aph-logo__svg { height: 22px; } }

/* Nav */
.aph-nav { flex: 1; display: flex; justify-content: center; align-items: center; }
.aph-nav__pill {
  display: inline-flex; align-items: center;
  height: 52px; padding: 4px 8px;
  border-radius: 999px;
  background: rgba(12, 18, 38, 0.60);
  border: 1px solid rgba(148, 163, 184, 0.16);
  backdrop-filter: blur(16px);
}
.aph--light .aph-nav__pill { background: rgba(255,255,255,0.78); border-color: rgba(15,23,42,0.10); }
.aph-nav__item {
  height: 44px; padding: 0 20px;
  border-radius: 999px; border: none;
  background: transparent;
  color: rgba(226,232,240,0.65);
  font-size: 14px; font-weight: 600; letter-spacing: 0.01em;
  cursor: pointer; white-space: nowrap;
  transition: color 0.15s ease, background 0.15s ease;
}
.aph--light .aph-nav__item { color: rgba(15,23,42,0.55); }
.aph-nav__item:hover { color: #E78A2E; background: rgba(231,138,46,0.08); }
.aph-nav__item:focus-visible { outline: 2px solid #E78A2E; outline-offset: 2px; }
.aph-nav__sep { display: block; width: 1px; height: 26px; background: rgba(148,163,184,0.16); margin: 0 2px; }
.aph--light .aph-nav__sep { background: rgba(15,23,42,0.10); }
.aph-nav__label { line-height: 1; }

/* Actions */
.aph-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; margin-left: auto; }

.aph-action-btn {
  display: flex; align-items: center; justify-content: center;
  width: 42px; height: 42px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.52);
  cursor: pointer;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
}
.aph--light .aph-action-btn { border-color: rgba(0,0,0,0.08); background: rgba(0,0,0,0.03); color: rgba(15,23,42,0.52); }
.aph-action-btn:hover { color: #E78A2E; border-color: rgba(231,138,46,0.32); background: rgba(231,138,46,0.08); }
.aph-action-btn:focus-visible { outline: 2px solid #E78A2E; outline-offset: 2px; }
@media (min-width: 1024px) { .aph-action-btn { width: 46px; height: 46px; } }

.aph-icon { width: 18px; height: 18px; flex-shrink: 0; }
.aph-icon--sm { width: 14px; height: 14px; flex-shrink: 0; }

.aph-login-btn {
  display: flex; align-items: center; gap: 6px;
  height: 42px; padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.82);
  font-size: 13px; font-weight: 600; cursor: pointer;
  white-space: nowrap; letter-spacing: 0.01em;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
}
.aph--light .aph-login-btn { border-color: rgba(15,23,42,0.18); background: rgba(15,23,42,0.04); color: rgba(15,23,42,0.74); }
.aph-login-btn:hover { color: #E78A2E; border-color: rgba(231,138,46,0.40); background: rgba(231,138,46,0.08); }
.aph-login-btn:focus-visible { outline: 2px solid #E78A2E; outline-offset: 2px; }
@media (min-width: 1024px) { .aph-login-btn { height: 46px; } }
@media (max-width: 479px) { .aph-login-btn { padding: 0 12px; font-size: 12px; } }

.aph-account-btn {
  display: flex; align-items: center; gap: 8px;
  height: 42px; padding: 0 12px 0 4px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.09);
  background: rgba(255,255,255,0.05);
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.aph--light .aph-account-btn { border-color: rgba(0,0,0,0.10); background: rgba(0,0,0,0.04); }
.aph-account-btn:hover { background: rgba(231,138,46,0.08); border-color: rgba(231,138,46,0.28); }
.aph-account-btn:focus-visible { outline: 2px solid #E78A2E; outline-offset: 2px; }
@media (min-width: 1024px) { .aph-account-btn { height: 46px; } }

.aph-avatar {
  position: relative; width: 32px; height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #E78A2E, #c97320);
  display: flex; align-items: center; justify-content: center; overflow: visible;
}
.aph-avatar__img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.aph-avatar__initials { font-size: 11px; font-weight: 700; color: #fff; user-select: none; }
.aph-avatar__dot {
  position: absolute; bottom: -1px; right: -1px;
  width: 9px; height: 9px; border-radius: 50%;
  background: #22c55e; border: 2px solid rgba(10,15,30,0.9);
}
.aph--light .aph-avatar__dot { border-color: rgba(248,250,252,0.95); }
.aph-account-btn__name { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.88); white-space: nowrap; }
.aph--light .aph-account-btn__name { color: rgba(15,23,42,0.84); }
</style>
