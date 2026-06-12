/**
 * Targeted static + runtime tests for prevest-app corrections.
 * Run: node scripts/test-prevest-app.mjs
 */
import { readFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  openPcsPlacements,
  PCS_OPEN_EVENT,
  PCS_PLACEMENTS_TAB,
  PCS_QR_DESTINATION_URL,
} from '../src/lib/openPcsPlacements.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

let passed = 0
let failed = 0

function assert(cond, msg) {
  if (cond) { passed++; return }
  failed++
  console.error('FAIL:', msg)
}

function read(relPath) {
  return readFileSync(join(root, relPath), 'utf8')
}

const mobileInstall = read('src/components/AppMobileInstallSection.vue')
const hero = read('src/components/AppHeroSection.vue')
const compareWays = read('src/components/AppCompareWaysSection.vue')
const mofo = read('src/components/AppMofoSection.vue')
const wwElement = read('src/wwElement.vue')
const openPcsLib = read('src/lib/openPcsPlacements.js')

const OLD_QR_CDN = 'Capture_d%E2%80%99e%CC%81cran_2025-12-15'
const LA_FRANCAISE_URL = 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/La_franc%CC%A7aise.png?_wwcv=1774951534688'

// ── QR code ─────────────────────────────────────────────────────────────────
assert(!mobileInstall.includes(OLD_QR_CDN), 'QR. ancienne URL CDN absente du rendu')
assert(mobileInstall.includes("import prevestQrCodeSvg from '../assets/prevest-qr-code.svg'"), 'QR. import SVG local')
assert(existsSync(join(root, 'src/assets/prevest-qr-code.svg')), 'QR. asset SVG présent')
assert(mobileInstall.includes('prevestQrCodeSvg'), 'QR. seule source effective = SVG local')
assert(mobileInstall.includes('qrMaskStyle'), 'QR. masque CSS piloté par import local')
assert(mobileInstall.includes('mi__qr-graphic'), 'QR. rendu via masque thématique')
assert(!mobileInstall.includes(':src="prevestQrCodeSvg"'), 'QR. plus de <img> statique noir')
assert(!mobileInstall.includes('resolvedQrUrl'), 'QR. plus de computed fallback mobileQrCodeUrl')
assert(!mobileInstall.includes('props.mobileQrCodeUrl?.trim()'), 'QR. mobileQrCodeUrl n’influence pas le rendu')
assert(mobileInstall.includes('mobileQrCodeUrl:'), 'QR. prop WeWeb conservée (rétrocompat)')
assert(mobileInstall.includes('role="img"') && mobileInstall.includes('aria-label="QR code ouvrant https://www.prevest.ai/"'), 'QR. accessibilité role=img')
assert(mobileInstall.includes('--qr-color: #ffffff') && mobileInstall.includes('mi--dark'), 'QR. blanc en dark mode')
assert(mobileInstall.includes('--qr-color: #000000') && mobileInstall.includes('mi--light'), 'QR. noir en light mode')
assert(mobileInstall.includes('aspect-ratio: 1 / 1'), 'QR. ratio carré conservé')
assert(mobileInstall.includes('opacity: 1'), 'QR. pleine opacité')
assert(mobileInstall.includes('isDark ? \'mi--dark\' : \'mi--light\''), 'QR. thème existant isDark')
assert(openPcsLib.includes(PCS_QR_DESTINATION_URL), 'QR. destination documentée')

const qrSvg = read('src/assets/prevest-qr-code.svg')
assert(qrSvg.includes('<svg') && qrSvg.includes('viewBox'), 'QR. SVG valide ratio carré')

// ── Hero CTA — grille 3 colonnes (avatar | texte | flèche) ───────────────────
assert(hero.includes('hero__cta-avatar-slot') && hero.includes('hero__cta-text') && hero.includes('hero__cta-arrow'), 'CTA. trois zones explicites')
const irisRingCss = hero.match(/\.hero__iris-ring\s*\{[^}]+\}/)?.[0] ?? ''
assert(!irisRingCss.includes('position: absolute'), 'CTA. avatar plus en absolute')
assert(irisRingCss.includes('margin-block: -10px'), 'CTA. débordement vertical avatar')
assert(hero.includes('max-width: 88%'), 'CTA. desktop légèrement moins large')
assert(hero.includes('min-height: 68px'), 'CTA. desktop moins haut')
assert(hero.includes('grid-template-columns') && hero.includes('var(--hero-avatar-slot)') && hero.includes('var(--hero-arrow-slot)'), 'CTA. grille 3 colonnes')
assert(hero.includes('column-gap: var(--hero-cta-gap)'), 'CTA. espace avatar/texte via column-gap')
assert(!hero.includes('width: fit-content'), 'CTA. plus de fit-content')
assert(hero.includes('width: 100%') && hero.includes('.hero__cta-primary'), 'CTA. pleine largeur colonne')
assert(hero.includes('align-self: stretch') && hero.includes('.hero__actions'), 'CTA. actions étend la colonne')
assert(hero.includes('max-width: none') || hero.includes('max-width: 88%'), 'CTA. largeur mobile pleine colonne')
assert(!hero.includes('padding-left: calc'), 'CTA. plus de padding calculé avatar')
assert(hero.includes('Commencer à comparer avec IRIS'), 'CTA. texte complet dans le template')
assert(!hero.includes('text-overflow'), 'CTA. pas de ellipsis')
assert(hero.includes('text-wrap: balance'), 'CTA. mobile deux lignes autorisées')
assert(hero.includes('border-left') && hero.includes('.hero__cta-arrow'), 'CTA. séparateur flèche')
assert(hero.includes('--hero-arrow-slot'), 'CTA. colonne flèche fixe')
assert(hero.includes('onCompareClick'), 'CTA. handler IRIS inchangé')
assert(hero.includes('compare-click'), 'CTA. emit compare-click inchangé')
assert(!hero.includes('translateX(5px)'), 'CTA. pas de translateX agressif')

// ── PCS (7–13) ──────────────────────────────────────────────────────────────
assert(compareWays.includes("emit('explore-click'"), '7. carte émet explore-click')
assert(compareWays.includes('Explorer les placements'), '8. CTA présent')
assert(!compareWays.includes('location.href = props.exploreUrl'), '8b. plus de navigation hash')
assert(wwElement.includes("import { openPcsPlacements } from './lib/openPcsPlacements.js'"), '10. handler mutualisé dans wwElement')
assert(wwElement.includes("tab: 'placements'"), '9. onglet placements explicite')
assert(compareWays.includes('@click.stop="handleExploreClick"'), '11. stopPropagation CTA interne')
assert(compareWays.includes('@keydown.enter.prevent="handleExploreClick"'), '12. Entrée clavier carte')
assert(compareWays.includes('@keydown.space.prevent="handleExploreClick"'), '12. Espace clavier carte')
assert(compareWays.includes('handleCompareClick') && compareWays.includes('Commencer avec IRIS'), '13. IRIS inchangé')

// Runtime PCS event contract (dock-aligned)
const mockWin = {
  _listeners: new Map(),
  addEventListener(name, fn) {
    const list = this._listeners.get(name) ?? []
    list.push(fn)
    this._listeners.set(name, list)
  },
  dispatchEvent(event) {
    const list = this._listeners.get(event?.type) ?? []
    for (const fn of list) fn(event)
    return true
  },
}
globalThis.wwLib = { getFrontWindow: () => mockWin }
let eventCount = 0
let lastDetail = null
mockWin.addEventListener(PCS_OPEN_EVENT, (e) => {
  eventCount++
  lastDetail = e?.detail ?? null
})
assert(openPcsPlacements({ source: 'compare_ways_free_search', tab: 'placements' }), 'runtime openPcsPlacements')
assert(eventCount === 1, '11b. un seul événement PCS')
assert(lastDetail?.tab === PCS_PLACEMENTS_TAB, '9b. tab placements dans event')
assert(lastDetail?.source === 'compare_ways_free_search', '10b. source transmise')

assert(openPcsLib.includes("detail: { tab: resolvedTab, source }"), '10c. même contrat que dock Explorer')

// ── MOFO (14–19) ────────────────────────────────────────────────────────────
assert(!mofo.includes('mofo__badge-name'), '14. label marque supprimé du template')
assert(mofo.includes(':alt="badge.label"'), '15. alt conservé')
assert(mofo.includes(':title="badge.label"'), '15b. title conservé')
assert(mofo.includes(':aria-label="badge.label"'), '15c. aria-label conservé')
assert(mofo.includes('object-fit: contain'), '16. object-fit contain logos')
assert(mofo.includes(LA_FRANCAISE_URL), '17. URL La Française exacte')
assert(mofo.includes('getBadgePosStyle'), '18. positions radar inchangées')
assert(mofo.includes('SWEEP_MS'), '19. animations sweep inchangées')

console.log(`\nprevest-app tests: ${passed} passed, ${failed} failed`)
if (failed > 0) process.exit(1)
