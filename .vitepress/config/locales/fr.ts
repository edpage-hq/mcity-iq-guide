import type { DefaultTheme, LocaleInterface, NavType, SidebarItemType } from '@viteplus/versions'

export const fr: LocaleInterface = {
  lang: 'fr',
  label: 'Français',
  description:
    "Guide utilisateur de M'City IQ : intranet, back-office, Auticway et intégration technique.",

  themeConfig: {
    nav: nav(),
    siteTitle: "M'City IQ",

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://edpage.net" target="_blank">edPage</a>`,
    },

    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante',
    },

    outline: {
      label: 'Sur cette page',
    },

    lastUpdated: {
      text: 'Mis à jour le',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },

    langMenuLabel: 'Changer de langue',
    returnToTopLabel: 'Retour au début de la page',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Passer au thème sombre',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Apparence',

    notFound: {
      title: 'PAGE NON TROUVEE',
      quote:
        'Mais si vous ne changez pas de direction et si vous continuez à regarder, vous risquez de vous retrouver là où vous allez.',
      linkLabel: "aller à l'accueil",
      linkText: "Me ramener à l'accueil",
      code: '404',
    },
  },
}

function nav(): NavType {
  return {
    root: [
      {
        text: 'Lire le guide',
        link: '/guide/introduction',
        activeMatch: '/guide/',
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Notes de version',
            link: 'https://github.com/edpage-hq/mcity-iq-guide/releases',
            target: '_blank',
            rel: 'noopener',
          },
          {
            text: 'Signaler un problème',
            link: 'https://github.com/edpage-hq/mcity-iq-guide/issues',
            target: '_blank',
            rel: 'noopener',
          },
        ],
      },
      { component: 'VersionSwitcher' },
    ],
  }
}

function sidebarGuide(): SidebarItemType[] {
  return [
    {
      text: 'Pour tous',
      collapsed: false,
      items: [
        { text: 'Présentation', link: 'introduction' },
        { text: 'Bien démarrer', link: 'getting-started' },
        { text: 'Le bureau', link: 'desk' },
        { text: 'Notifications', link: 'notifications' },
        { text: 'Mon compte', link: 'account' },
        { text: 'Selon votre poste', link: 'positions' },
      ],
    },
    {
      text: 'Administration',
      collapsed: false,
      items: [
        { text: 'Comptes et accès', link: 'administration/accounts' },
        { text: 'Équipes', link: 'administration/teams' },
        { text: 'Bureaux et départements', link: 'administration/referentials' },
        { text: 'Registre : produits et zones', link: 'administration/registry' },
        { text: 'Communications et ressources', link: 'administration/communications' },
        { text: 'Messages de contact', link: 'administration/contact-messages' },
        { text: 'Pages du site', link: 'administration/site-pages' },
        { text: 'Supervision des indicateurs', link: 'administration/indicators' },
        { text: 'Configuration', link: 'administration/settings' },
        { text: 'Journaux', link: 'administration/logs' },
      ],
    },
    {
      text: 'Back-office Auticway',
      collapsed: false,
      items: [{ text: 'Utiliser le back-office', link: 'auticway' }],
    },
    {
      text: 'Intégration technique',
      collapsed: true,
      items: [
        { text: "Vue d'ensemble", link: 'integration/overview' },
        { text: 'SSO (OpenID Connect)', link: 'integration/sso' },
        { text: 'API', link: 'integration/api' },
        { text: 'Webhook', link: 'integration/webhook' },
        { text: 'Indicateurs', link: 'integration/indicators' },
      ],
    },
    {
      text: 'Aide',
      collapsed: false,
      items: [{ text: 'Questions fréquentes', link: 'faq' }],
    },
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  root: {
    translations: {
      button: {
        buttonText: 'Rechercher',
        buttonAriaLabel: 'Rechercher',
      },
      modal: {
        displayDetails: 'Afficher la liste détaillée',
        backButtonTitle: 'Retour',
        noResultsText: "Aucun résultat n'a été trouvé",
        resetButtonTitle: 'Réinitialiser la recherche',
        footer: {
          selectText: 'sélectionner',
          navigateText: 'naviguer',
          closeText: 'fermer',
        },
      },
    },
  },
}
