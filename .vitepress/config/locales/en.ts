import type { DefaultTheme, LocaleInterface, NavType, SidebarItemType } from '@viteplus/versions'

export const en: LocaleInterface = {
  lang: 'en',
  label: 'English',
  description: "M'City IQ user guide: intranet, back-office, Auticway and technical integration.",

  themeConfig: {
    nav: nav(),
    siteTitle: "M'City IQ",

    sidebar: {
      '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://edpage.net" target="_blank">edPage</a>`,
    },
  },
}

function nav(): NavType {
  return {
    root: [
      {
        text: 'Read the guide',
        link: '/en/guide/introduction',
        activeMatch: '/en/guide/',
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Release notes',
            link: 'https://github.com/edpage-hq/mcity-iq-guide/releases',
            target: '_blank',
            rel: 'noopener',
          },
          {
            text: 'Report a problem',
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
      text: 'For everyone',
      collapsed: false,
      items: [
        { text: 'Overview', link: 'introduction' },
        { text: 'Getting started', link: 'getting-started' },
        { text: 'The desk', link: 'desk' },
        { text: 'Notifications', link: 'notifications' },
        { text: 'My account', link: 'account' },
        { text: 'By position', link: 'positions' },
      ],
    },
    {
      text: 'Administration',
      collapsed: false,
      items: [
        { text: 'Accounts and access', link: 'administration/accounts' },
        { text: 'Teams', link: 'administration/teams' },
        { text: 'Offices and departments', link: 'administration/referentials' },
        { text: 'Registry: products and zones', link: 'administration/registry' },
        { text: 'Communications and resources', link: 'administration/communications' },
        { text: 'Contact messages', link: 'administration/contact-messages' },
        { text: 'Site pages', link: 'administration/site-pages' },
        { text: 'Indicator supervision', link: 'administration/indicators' },
        { text: 'Configuration', link: 'administration/settings' },
        { text: 'Logs', link: 'administration/logs' },
      ],
    },
    {
      text: 'Auticway back-office',
      collapsed: false,
      items: [{ text: 'Using the back-office', link: 'auticway' }],
    },
    {
      text: 'Technical integration',
      collapsed: true,
      items: [
        { text: 'Overview', link: 'integration/overview' },
        { text: 'SSO (OpenID Connect)', link: 'integration/sso' },
        { text: 'API', link: 'integration/api' },
        { text: 'Webhook', link: 'integration/webhook' },
        { text: 'Indicators', link: 'integration/indicators' },
      ],
    },
    {
      text: 'Help',
      collapsed: false,
      items: [{ text: 'Frequently asked questions', link: 'faq' }],
    },
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  en: {
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search',
      },
      modal: {
        displayDetails: 'Display detailed list',
        resetButtonTitle: 'Reset search',
        backButtonTitle: 'Close search',
        noResultsText: 'No results for',
        footer: {
          selectText: 'to select',
          navigateText: 'to navigate',
          closeText: 'to close',
        },
      },
    },
  },
}
