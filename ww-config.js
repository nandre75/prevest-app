export default {
  editor: {
    label: 'APP',
    icon: 'layout-list',
  },

  properties: {
    // ── Theme ────────────────────────────────────────────────────────────────
    isDarkMode: {
      label: { en: 'Dark mode (initial / fallback)' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'boolean',
        tooltip: 'Valeur initiale / fallback. Le mode réel est piloté par html.ww-app-theme-dark via MutationObserver.',
      },
      propertyHelp: 'Le composant lit automatiquement la classe html.ww-app-theme-dark définie par le header PRE. Cette prop sert uniquement de valeur initiale.',
      /* wwEditor:end */
    },

    showHero: {
      label: { en: 'Show hero section' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Afficher la section hero.' },
      /* wwEditor:end */
    },

    showStory: {
      label: { en: 'Show story section' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Afficher la section story / problem-solution.' },
      /* wwEditor:end */
    },

    showConcept: {
      label: { en: 'Show concept section' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Afficher la section concept / comment ça marche.' },
      /* wwEditor:end */
    },

    showCompareWays: {
      label: { en: 'Show "Compare ways" section' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Afficher la section "Deux façons d\'explorer votre épargne".' },
      /* wwEditor:end */
    },

    showMofo: {
      label: { en: 'Show MOFO section' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Afficher la section radar MOFO "Toute l\'offre, scannée en continu".' },
      /* wwEditor:end */
    },

    radarBadges: {
      label: { en: 'Radar badges (override)' },
      type: 'Array',
      section: 'settings',
      bindable: true,
      defaultValue: [],
      hidden: true,
      options: {
        expandable: true,
        getItemLabel(item) { return item?.label || item?.id || 'Badge'; },
        item: {
          type: 'Object',
          defaultValue: { id: '', label: '', labelShort: '', angle: 0, radius: 0.6, initials: '', logoUrl: '' },
          options: {
            item: {
              id:         { label: { en: 'ID (unique)' },         type: 'Text' },
              label:      { label: { en: 'Label (full)' },        type: 'Text' },
              labelShort: { label: { en: 'Label (short/badge)' }, type: 'Text' },
              angle:      { label: { en: 'Angle ° (0=top, CW)' }, type: 'Number' },
              radius:     { label: { en: 'Radius (0–0.76)' },     type: 'Number' },
              initials:   { label: { en: 'Initials (fallback)' }, type: 'Text' },
              logoUrl:    { label: { en: 'Logo URL' },            type: 'Text' },
            },
          },
        },
      },
      /* wwEditor:start */
      bindingValidation: { type: 'array', tooltip: 'Laissez vide pour utiliser les badges par défaut (BNP, Swiss Life, etc.).' },
      propertyHelp: 'Override les badges radar. Laisser vide = badges par défaut. logoUrl: URL vers le logo PNG/SVG à afficher dans le badge.',
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
      bindingValidation: { type: 'string', tooltip: 'URL du CTA principal "Commencer à comparer".' },
      /* wwEditor:end */
    },

    exploreUrl: {
      label: { en: 'Explore URL' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: '#placements',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'URL ou ancre pour le CTA secondaire "Explorer les placements".' },
      /* wwEditor:end */
    },

    // ── Assets — hero ─────────────────────────────────────────────────────────
    heroDarkUrl: {
      label: { en: 'Hero illustration — dark' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_HERO_Blanc_OrangeOK.png?_wwcv=1779460464091',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'Illustration cerf transparent — thème sombre.' },
      /* wwEditor:end */
    },

    heroLightUrl: {
      label: { en: 'Hero illustration — light' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_HERO_Noir_OrangeOK.png?_wwcv=1779461279453',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'Illustration cerf transparent — thème clair.' },
      /* wwEditor:end */
    },

    irisAvatarUrl: {
      label: { en: 'IRIS avatar URL' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/iris-avatar_1.png?_wwcv=1779660586361',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'Avatar IRIS dans le bouton CTA primaire.' },
      /* wwEditor:end */
    },

    // ── Assets — story ────────────────────────────────────────────────────────
    storyImage1DarkUrl: {
      label: { en: 'Story 1 — dark' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details_Blanc_OrangeOK.png?_wwcv=1779460464079',
    },
    storyImage1LightUrl: {
      label: { en: 'Story 1 — light' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details_Blanc_OrangeOK_1.png?_wwcv=1779461279458',
    },
    storyImage2DarkUrl: {
      label: { en: 'Story 2 — dark' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details2_Blanc_OrangeOK.png?_wwcv=1779460464077',
    },
    storyImage2LightUrl: {
      label: { en: 'Story 2 — light' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details2_Noir_OrangeOK.png?_wwcv=1779461279453',
    },
    storyImage3DarkUrl: {
      label: { en: 'Story 3 — dark' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details3_Blanc_OrangeOK.png?_wwcv=1779460464088',
    },
    storyImage3LightUrl: {
      label: { en: 'Story 3 — light' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details3_Noir_OrangeOK.png?_wwcv=1779461279410',
    },
    storyImage4DarkUrl: {
      label: { en: 'Story 4 — dark' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details4_Blanc_OrangeOK.png?_wwcv=1779460464089',
    },
    storyImage4LightUrl: {
      label: { en: 'Story 4 — light' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Illustration_details4_Noir_OrangeOK.png?_wwcv=1779461279413',
    },

    showPopularComparisons: {
      label: { en: 'Show "Popular Comparisons" section' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Afficher la section "Comparatifs populaires".' },
      /* wwEditor:end */
    },

    showTestimonials: {
      label: { en: 'Show "Testimonials" section' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Afficher la section "Témoignages d\'épargnants".' },
      /* wwEditor:end */
    },
  },

  triggerEvents: [
    { name: 'compare-click',      label: { en: 'CTA — Commencer à comparer clicked' },     event: {} },
    { name: 'explore-click',      label: { en: 'CTA — Explorer les placements clicked' },   event: {} },
    { name: 'hero-mounted',       label: { en: 'Hero — composant monté' },                  event: {} },
    { name: 'story-card-click',   label: { en: 'Story — card clicked' },                    event: { index: 0, title: '' } },
    { name: 'concept-step-click', label: { en: 'Concept — step clicked' },                  event: { index: 0, step: '' } },
  ],
}
