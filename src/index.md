---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: M'City IQ
  text: Guide utilisateur
  tagline: Intranet, back-office M'City, back-offices produits et intégration technique.
  image:
    light: /images/home.svg
    dark: /images/home-reverse.svg
    alt: M'City IQ
  actions:
    - theme: brand
      text: Commencer →
      link: /guide/introduction
    - theme: alt
      text: Intégration technique
      link: /guide/integration/overview

features:
  - icon: 🏢
    title: Pour toute l'équipe
    details: Première connexion, double authentification, bureau, communications, ressources et notifications.
    link: /guide/getting-started
  - icon: 🧭
    title: Selon votre poste
    details: Ce que chaque poste voit et fait, de la Direction Générale au Support N1, avec la matrice des fonctions.
    link: /guide/positions
  - icon: 🛠️
    title: Administration
    details: Comptes, équipes, registre des produits et des zones, contenus du site, supervision et configuration.
    link: /guide/administration/accounts
  - icon: 🔌
    title: Équipes techniques
    details: SSO OpenID Connect, API, webhook signé et remontée des indicateurs pour raccorder un back-office produit.
    link: /guide/integration/overview
---
