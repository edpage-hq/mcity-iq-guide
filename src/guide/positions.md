# Selon votre poste

Deux réglages indépendants décident de ce que vous voyez :

- votre **poste** décide des **fonctions** (les entrées du menu Administration) ;
- votre **périmètre** décide des **données** visibles dans ces fonctions et dans
  l'intranet.

Un changement de poste ou de périmètre prend effet immédiatement, dès votre
action suivante, sans nouvelle invitation ni reconnexion.

## Les sept postes

| Poste                                                | Périmètre                                                  |
| ---------------------------------------------------- | ---------------------------------------------------------- |
| Direction Générale (PDG)                             | Tous les produits, toutes les zones                        |
| Responsable Pôle Exploitation des Produits & Finance | Tous les produits, toutes les zones                        |
| Responsable Pôle Support Partenaires & Clients       | Tous les produits, toutes les zones                        |
| Support N1 — Clients                                 | Produits, zones et bureaux attribués (au moins un produit) |
| Support N2 — Prestataires, Partenaires & Modération  | Produits, zones et bureaux attribués (au moins un produit) |
| Volet RH & Affaires Juridiques                       | Transverse : tous les bureaux, aucun produit               |
| Volet Finance & Comptabilité                         | Transverse : tous les bureaux, aucun produit               |

Un membre d'une [équipe](./administration/teams) voit aussi les produits de son
équipe, quel que soit son poste.

## Matrice des fonctions

| Fonction                                                                                  | PDG | Pôle Exploitation | Pôle Support | Support N1 | Support N2 | RH  | Finance |
| ----------------------------------------------------------------------------------------- | :-: | :---------------: | :----------: | :--------: | :--------: | :-: | :-----: |
| Bureau, communications, ressources (intranet)                                             |  ✓  |         ✓         |      ✓       |     ✓      |     ✓      |  ✓  |    ✓    |
| [Publier des communications](./administration/communications)                             |  ✓  |                   |      ✓       |            |            |     |         |
| [Gérer les ressources partagées](./administration/communications#ressources-partagees)    |  ✓  |                   |      ✓       |            |            |     |         |
| [Pages du site public](./administration/site-pages)                                       |  ✓  |                   |      ✓       |            |            |     |         |
| [Messages de contact](./administration/contact-messages)                                  |  ✓  |                   |      ✓       |     ✓      |            |     |         |
| [Registre : produits et zones](./administration/registry)                                 |  ✓  |         ✓         |              |            |            |     |         |
| [Supervision des indicateurs](./administration/indicators)                                |  ✓  |         ✓         |              |            |            |     |    ✓    |
| [Journal de synchronisation](./administration/logs)                                       |  ✓  |         ✓         |              |            |            |     |         |
| [Départs (désactiver un compte)](./administration/accounts#desactiver-un-compte)          |  ✓  |                   |              |            |            |  ✓  |         |
| [Comptes : inviter, poste, périmètre, accès](./administration/accounts)                   |  ✓  |                   |              |            |            |     |         |
| [Bureaux, départements, équipes](./administration/referentials)                           |  ✓  |                   |              |            |            |     |         |
| [Configuration et définitions d'indicateurs](./administration/settings)                   |  ✓  |                   |              |            |            |     |         |
| [Intégration des produits (SSO, API)](./administration/registry#integration-d-un-produit) |  ✓  |                   |              |            |            |     |         |
| [Journal d'administration](./administration/logs)                                         |  ✓  |                   |              |            |            |     |         |

Le travail métier du Support N1, du Support N2, des RH et de la Finance se fait
pour l'essentiel dans les back-offices produits ; l'intranet vous y donne accès
par SSO quand l'accès vous est accordé.

## Direction Générale (PDG)

Le PDG a toutes les fonctions : c'est l'administrateur général. Il invite les
comptes, accorde les accès aux back-offices produits, gère la configuration, les
référentiels et l'intégration des produits. Le dernier compte PDG actif ne peut
ni changer de poste ni être désactivé.

## Pôle Exploitation des Produits & Finance

- Tenir le [registre](./administration/registry) : enregistrer et modifier les
  produits, qualifier les zones.
- Suivre la [supervision](./administration/indicators) des indicateurs consolidés.
- Consulter le [journal de synchronisation](./administration/logs) entre le
  registre et les back-offices produits.

## Pôle Support Partenaires & Clients

- [Publier des communications](./administration/communications) ciblées et
  gérer les [ressources partagées](./administration/communications#ressources-partagees).
- Modifier les [pages du site public](./administration/site-pages).
- Traiter les [messages de contact](./administration/contact-messages), comme le
  Support N1.

## Support N1 — Clients

- Traiter la file des [messages de contact](./administration/contact-messages)
  du site public. La file est commune à tous les Support N1 et au Pôle Support,
  sans filtre par produit ou zone.
- Traiter les demandes clients dans les back-offices des produits qui vous sont
  accordés.

## Support N2 — Prestataires, Partenaires & Modération

Pas de fonction d'administration dans M'City IQ. La modération et le suivi des
prestataires et partenaires se font dans les back-offices produits de votre
périmètre, ouverts depuis leurs [espaces produits](./desk#espaces-produits).

## Volet RH & Affaires Juridiques

- Désactiver le compte d'une personne qui quitte M'City, depuis
  [Départs](./administration/accounts#desactiver-un-compte).
- Les dossiers RH et contrats restent hors de la plateforme.

## Volet Finance & Comptabilité

- Consulter la [supervision](./administration/indicators) des indicateurs
  consolidés.
- Les paiements et la comptabilité d'un produit se consultent dans son
  back-office.
