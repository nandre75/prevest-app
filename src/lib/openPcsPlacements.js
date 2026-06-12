/** Canonical PCS opener — mirrors PrevestDockNav `search` → prevest:open-configurator. */
export const PCS_OPEN_EVENT = 'prevest:open-configurator'
export const PCS_PLACEMENTS_TAB = 'placements'
export const PCS_QR_DESTINATION_URL = 'https://www.prevest.ai/'

function _getWin() {
  try {
    return (typeof wwLib !== 'undefined' ? wwLib?.getFrontWindow?.() : null) ?? window
  } catch {
    return window
  }
}

/**
 * Opens PCS on the placements tab via the global CustomEvent listened by
 * prevest-results-experience (same contract as dock Explorer).
 */
export function openPcsPlacements({ source = 'explore_cta', tab = PCS_PLACEMENTS_TAB } = {}) {
  const win = _getWin()
  if (!win?.dispatchEvent) return false

  const resolvedTab = tab === 'parameters' || tab === PCS_PLACEMENTS_TAB ? tab : PCS_PLACEMENTS_TAB
  win.dispatchEvent(new CustomEvent(PCS_OPEN_EVENT, {
    detail: { tab: resolvedTab, source },
  }))
  return true
}
