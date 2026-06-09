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

    // ── MOFO radar badges — flat props (1 groupe = label + logoUrl + display) ──

    // BNP Paribas
    mofoBadgeBnpLabel:   { label: { en: 'Badge BNP — Libellé' },   type: 'Text',  section: 'settings', bindable: true, defaultValue: 'BNP PARIBAS',      /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeBnpLogoUrl: { label: { en: 'Badge BNP — Logo URL' },  type: 'Text',  section: 'settings', bindable: true, defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/BNP_1.png?_wwcv=1774951534740',                  /* wwEditor:start */ bindingValidation: { type: 'string', tooltip: 'URL image PNG/SVG du logo BNP.' }, /* wwEditor:end */ },
    mofoBadgeBnpDisplay: { label: { en: 'Badge BNP — Afficher' },  type: 'OnOff', section: 'settings', bindable: true, defaultValue: true,                /* wwEditor:start */ bindingValidation: { type: 'boolean' }, /* wwEditor:end */ },

    // Swiss Life
    mofoBadgeSlLabel:    { label: { en: 'Badge Swiss Life — Libellé' },   type: 'Text',  section: 'settings', bindable: true, defaultValue: 'Swiss Life', /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeSlLogoUrl:  { label: { en: 'Badge Swiss Life — Logo URL' },  type: 'Text',  section: 'settings', bindable: true, defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Swiss_life.png?_wwcv=1774951534678',            /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeSlDisplay:  { label: { en: 'Badge Swiss Life — Afficher' },  type: 'OnOff', section: 'settings', bindable: true, defaultValue: true,          /* wwEditor:start */ bindingValidation: { type: 'boolean' }, /* wwEditor:end */ },

    // CORUM
    mofoBadgeCorumLabel:   { label: { en: 'Badge CORUM — Libellé' },   type: 'Text',  section: 'settings', bindable: true, defaultValue: 'CORUM', /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeCorumLogoUrl: { label: { en: 'Badge CORUM — Logo URL' },  type: 'Text',  section: 'settings', bindable: true, defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/CORUM.png?_wwcv=1774951534639',       /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeCorumDisplay: { label: { en: 'Badge CORUM — Afficher' },  type: 'OnOff', section: 'settings', bindable: true, defaultValue: true,     /* wwEditor:start */ bindingValidation: { type: 'boolean' }, /* wwEditor:end */ },

    // Inter Gestion
    mofoBadgeIgLabel:   { label: { en: 'Badge Inter Gestion — Libellé' },   type: 'Text',  section: 'settings', bindable: true, defaultValue: 'Inter Gestion', /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeIgLogoUrl: { label: { en: 'Badge Inter Gestion — Logo URL' },  type: 'Text',  section: 'settings', bindable: true, defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Inter_gestion_reim.png?_wwcv=1774951534733',               /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeIgDisplay: { label: { en: "Badge Inter Gestion — Afficher" },  type: 'OnOff', section: 'settings', bindable: true, defaultValue: true,             /* wwEditor:start */ bindingValidation: { type: 'boolean' }, /* wwEditor:end */ },

    // Caisse d'Épargne
    mofoBadgeCeLabel:   { label: { en: "Badge Caisse d'Épargne — Libellé" },  type: 'Text',  section: 'settings', bindable: true, defaultValue: "Caisse d'Épargne", /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeCeLogoUrl: { label: { en: "Badge Caisse d'Épargne — Logo URL" }, type: 'Text',  section: 'settings', bindable: true, defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/caisse_epargne.jpeg?_wwcv=1765979752372',                  /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeCeDisplay: { label: { en: "Badge Caisse d'Épargne — Afficher" }, type: 'OnOff', section: 'settings', bindable: true, defaultValue: true,                /* wwEditor:start */ bindingValidation: { type: 'boolean' }, /* wwEditor:end */ },

    // PERIAL
    mofoBadgePerialLabel:   { label: { en: 'Badge PERIAL — Libellé' },   type: 'Text',  section: 'settings', bindable: true, defaultValue: 'PERIAL', /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgePerialLogoUrl: { label: { en: 'Badge PERIAL — Logo URL' },  type: 'Text',  section: 'settings', bindable: true, defaultValue: '',        /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgePerialDisplay: { label: { en: 'Badge PERIAL — Afficher' },  type: 'OnOff', section: 'settings', bindable: true, defaultValue: false,     /* wwEditor:start */ bindingValidation: { type: 'boolean' }, /* wwEditor:end */ },

    // ODDO BHF
    mofoBadgeOddoLabel:   { label: { en: 'Badge ODDO BHF — Libellé' },   type: 'Text',  section: 'settings', bindable: true, defaultValue: 'ODDO BHF', /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeOddoLogoUrl: { label: { en: 'Badge ODDO BHF — Logo URL' },  type: 'Text',  section: 'settings', bindable: true, defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/CCF-white.png?_wwcv=1765979497230',          /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeOddoDisplay: { label: { en: 'Badge ODDO BHF — Afficher' },  type: 'OnOff', section: 'settings', bindable: true, defaultValue: true,        /* wwEditor:start */ bindingValidation: { type: 'boolean' }, /* wwEditor:end */ },

    // Amundi
    mofoBadgeAmundiLabel:   { label: { en: 'Badge Amundi — Libellé' },   type: 'Text',  section: 'settings', bindable: true, defaultValue: 'Amundi', /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeAmundiLogoUrl: { label: { en: 'Badge Amundi — Logo URL' },  type: 'Text',  section: 'settings', bindable: true, defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/Amundi.png?_wwcv=1774951534711',        /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeAmundiDisplay: { label: { en: 'Badge Amundi — Afficher' },  type: 'OnOff', section: 'settings', bindable: true, defaultValue: true,      /* wwEditor:start */ bindingValidation: { type: 'boolean' }, /* wwEditor:end */ },

    // AXA
    mofoBadgeAxaLabel:   { label: { en: 'Badge AXA — Libellé' },   type: 'Text',  section: 'settings', bindable: true, defaultValue: 'AXA', /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeAxaLogoUrl: { label: { en: 'Badge AXA — Logo URL' },  type: 'Text',  section: 'settings', bindable: true, defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/axa.png?_wwcv=1765979925045',     /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeAxaDisplay: { label: { en: 'Badge AXA — Afficher' },  type: 'OnOff', section: 'settings', bindable: true, defaultValue: true,   /* wwEditor:start */ bindingValidation: { type: 'boolean' }, /* wwEditor:end */ },

    // La Française
    mofoBadgeLfLabel:   { label: { en: 'Badge La Française — Libellé' },   type: 'Text',  section: 'settings', bindable: true, defaultValue: 'La Française', /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeLfLogoUrl: { label: { en: 'Badge La Française — Logo URL' },  type: 'Text',  section: 'settings', bindable: true, defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/La_franc%CC%A7aise.png?_wwcv=1774951534688',              /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeLfDisplay: { label: { en: 'Badge La Française — Afficher' },  type: 'OnOff', section: 'settings', bindable: true, defaultValue: true,            /* wwEditor:start */ bindingValidation: { type: 'boolean' }, /* wwEditor:end */ },

    // Société Générale
    mofoBadgeSgLabel:   { label: { en: 'Badge Société Générale — Libellé' },   type: 'Text',  section: 'settings', bindable: true, defaultValue: 'Société Générale', /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeSgLogoUrl: { label: { en: 'Badge Société Générale — Logo URL' },  type: 'Text',  section: 'settings', bindable: true, defaultValue: 'https://cdn.weweb.io/designs/12864de0-3f31-4924-bacd-94c6a2f76080/sections/SG.png?_wwcv=1774951534641',                  /* wwEditor:start */ bindingValidation: { type: 'string' }, /* wwEditor:end */ },
    mofoBadgeSgDisplay: { label: { en: 'Badge Société Générale — Afficher' },  type: 'OnOff', section: 'settings', bindable: true, defaultValue: true,                /* wwEditor:start */ bindingValidation: { type: 'boolean' }, /* wwEditor:end */ },

    // ── CTA URLs ──────────────────────────────────────────────────────────────
    compareUrl: {
      label: { en: 'Compare URL' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: '/start/',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'URL du CTA principal "Commencer à comparer" (carte IRIS).' },
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

    showMobileInstall: {
      label: { en: 'Show "Mobile App" section (desktop only)' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: { type: 'boolean', tooltip: 'Afficher la section "Application mobile" (desktop uniquement).' },
      /* wwEditor:end */
    },

    mobileQrCodeUrl: {
      label: { en: 'Mobile QR code image URL' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: '',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'URL de l\'image du QR code pointant vers l\'app PREVEST mobile. Laisser vide pour utiliser le placeholder SVG.' },
      propertyHelp: 'Laissez vide pour afficher le QR code placeholder. Remplacez par l\'URL CDN finale du vrai QR code.',
      /* wwEditor:end */
    },

    mobileAppScreenshotUrl: {
      label: { en: 'Mobile app screenshot URL' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: '',
      /* wwEditor:start */
      bindingValidation: { type: 'string', tooltip: 'URL du screenshot de l\'app PREVEST mobile à afficher dans le téléphone. Laisser vide pour utiliser le mockup CSS.' },
      propertyHelp: 'Laissez vide pour afficher le mockup CSS. Remplacez par un screenshot réel de l\'application.',
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
