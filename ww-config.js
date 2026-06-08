export default {
  editor: {
    label: 'APP',
    icon: 'layout-list',
  },

  properties: {
    // ── Theme ────────────────────────────────────────────────────────────────
    isDarkMode: {
      label: { en: 'Dark mode' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Toggle dark/light mode.' },
      /* wwEditor:end */
    },

    showHeader: {
      label: { en: 'Show header' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Show the APP header.' },
      /* wwEditor:end */
    },

    showHero: {
      label: { en: 'Show hero section' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Show the hero section.' },
      /* wwEditor:end */
    },

    showStory: {
      label: { en: 'Show story section' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Show the story / problem-solution section.' },
      /* wwEditor:end */
    },

    // ── Auth ─────────────────────────────────────────────────────────────────
    authStatus: {
      label: { en: 'Auth status' },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'guest', label: 'Guest' },
          { value: 'authenticated', label: 'Authenticated' },
          { value: 'unknown', label: 'Unknown (loading)' },
        ],
      },
      defaultValue: 'guest',
      bindable: true,
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'guest | authenticated | unknown' },
      /* wwEditor:end */
    },

    userName: {
      label: { en: 'User display name' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: '',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'Authenticated user display name.' },
      /* wwEditor:end */
    },

    userAvatarUrl: {
      label: { en: 'User avatar URL' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: '',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'Optional user avatar image URL.' },
      /* wwEditor:end */
    },

    userInitials: {
      label: { en: 'User initials' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: '',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'Two-letter fallback initials.' },
      /* wwEditor:end */
    },

    // ── CTA URLs ──────────────────────────────────────────────────────────────
    compareUrl: {
      label: { en: 'Compare URL' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: '/start',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'URL for the primary CTA "Commencer à comparer".' },
      /* wwEditor:end */
    },

    exploreUrl: {
      label: { en: 'Explore URL' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: '#placements',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'URL or anchor for the secondary CTA "Explorer les placements".' },
      /* wwEditor:end */
    },

    accountUrl: {
      label: { en: 'Account URL' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://account.prevest.ai',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'URL for the authenticated account button.' },
      /* wwEditor:end */
    },

    loginUrl: {
      label: { en: 'Login URL' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://account.prevest.ai/login',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'URL for the login button. return_url will be appended.' },
      /* wwEditor:end */
    },

    sessionStatusUrl: {
      label: { en: 'Session-status endpoint URL' },
      type: 'Text',
      section: 'settings',
      bindable: false,
      defaultValue: 'https://account.prevest.ai/api/prevest/session-status',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'Override the session-status endpoint.' },
      propertyHelp: 'Auto-fetched on mount with credentials:include.',
      /* wwEditor:end */
    },

    // ── Assets — hero ─────────────────────────────────────────────────────────
    heroDesktopDarkUrl: {
      label: { en: 'Hero image — desktop dark' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Desktop-hero2-dark.png?_wwcv=1780894447042',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'Desktop hero deer illustration — dark theme.' },
      /* wwEditor:end */
    },

    heroDesktopLightUrl: {
      label: { en: 'Hero image — desktop light' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Desktop-hero2-light.png?_wwcv=1780894447040',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'Desktop hero deer illustration — light theme.' },
      /* wwEditor:end */
    },

    heroMobileDarkUrl: {
      label: { en: 'Hero image — mobile dark' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Mobile-hero2-dark.png?_wwcv=1780894447099',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'Mobile hero deer illustration — dark theme.' },
      /* wwEditor:end */
    },

    heroMobileLightUrl: {
      label: { en: 'Hero image — mobile light' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Mobile-hero2-dark.png?_wwcv=1780894447099',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'Mobile hero illustration — light theme. NOTE: same URL as dark for now; replace when light mobile asset is available.' },
      propertyHelp: '⚠ Light mobile asset not yet available — using dark mobile as fallback.',
      /* wwEditor:end */
    },

    irisAvatarUrl: {
      label: { en: 'IRIS avatar URL' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/iris-avatar_1.png?_wwcv=1779660586361',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'IRIS avatar displayed in the primary CTA button.' },
      /* wwEditor:end */
    },

    // ── Assets — story ────────────────────────────────────────────────────────
    storyImage1DarkUrl: {
      label: { en: 'Story illustration 1 — dark' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details_Blanc_OrangeOK.png?_wwcv=1779460464079',
    },
    storyImage1LightUrl: {
      label: { en: 'Story illustration 1 — light' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details_Blanc_OrangeOK_1.png?_wwcv=1779461279458',
    },
    storyImage2DarkUrl: {
      label: { en: 'Story illustration 2 — dark' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details2_Blanc_OrangeOK.png?_wwcv=1779460464077',
    },
    storyImage2LightUrl: {
      label: { en: 'Story illustration 2 — light' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details2_Noir_OrangeOK.png?_wwcv=1779461279453',
    },
    storyImage3DarkUrl: {
      label: { en: 'Story illustration 3 — dark' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details3_Blanc_OrangeOK.png?_wwcv=1779460464088',
    },
    storyImage3LightUrl: {
      label: { en: 'Story illustration 3 — light' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details3_Noir_OrangeOK.png?_wwcv=1779461279410',
    },
    storyImage4DarkUrl: {
      label: { en: 'Story illustration 4 — dark' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details4_Blanc_OrangeOK.png?_wwcv=1779460464089',
    },
    storyImage4LightUrl: {
      label: { en: 'Story illustration 4 — light' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details4_Noir_OrangeOK.png?_wwcv=1779461279413',
    },
  },

  triggerEvents: [
    { name: 'compare-click',   label: { en: 'CTA — Commencer à comparer clicked' }, event: {} },
    { name: 'explore-click',   label: { en: 'CTA — Explorer les placements clicked' }, event: {} },
    { name: 'login-click',     label: { en: 'Header — login clicked' }, event: {} },
    { name: 'account-click',   label: { en: 'Header — account clicked' }, event: {} },
    { name: 'theme-toggle',    label: { en: 'Header — theme toggled' }, event: { isDarkMode: true } },
    { name: 'hero-mounted',    label: { en: 'Hero — component mounted' }, event: {} },
    { name: 'story-card-click',label: { en: 'Story — card clicked' }, event: { index: 0, title: '' } },
  ],
}
