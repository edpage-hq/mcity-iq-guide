# Intégration technique : vue d'ensemble

Cette partie s'adresse aux équipes techniques des produits qui raccordent leur
back-office à M'City IQ. Elle décrit le contrat complet ; Auticway en est la
première implémentation.

## Les quatre liens

| Lien                          | Sens             | Rôle                                                                    |
| ----------------------------- | ---------------- | ----------------------------------------------------------------------- |
| [SSO (OpenID Connect)](./sso) | Produit → M'City | Le personnel M'City se connecte au back-office avec son compte M'City.  |
| [API](./api)                  | Produit → M'City | Le produit lit sa fiche et met à jour son URL d'accès et ses langues.   |
| [Webhook](./webhook)          | M'City → produit | M'City pousse la fiche produit à chaque modification.                   |
| [Indicateurs](./indicators)   | Produit → M'City | Le produit remonte ses indicateurs consolidés, par envoi ou par relevé. |

M'City IQ ne reçoit que des valeurs agrégées, jamais de données personnelles des
utilisateurs du produit.

## Environnements

| Environnement | Émetteur OIDC              | Base de l'API                     |
| ------------- | -------------------------- | --------------------------------- |
| Production    | `https://mcityiq.com`      | `https://mcityiq.com/api/v1`      |
| Test          | `https://mcity.edpage.net` | `https://mcity.edpage.net/api/v1` |

Les identifiants de l'un ne fonctionnent pas sur l'autre.

## Ce que le PDG vous transmet

Le PDG de M'City configure le produit dans le registre (voir
[Intégration d'un produit](../administration/registry#integration-d-un-produit)) :

| Élément                              | Où il est créé  | Ce que vous fournissez                                                                     |
| ------------------------------------ | --------------- | ------------------------------------------------------------------------------------------ |
| Identifiant et secret du client OIDC | Intégration SSO | Les URI de redirection (HTTPS, 5 au plus) et, si besoin, l'URI de déconnexion back-channel |
| Jeton de service `mcity_…`           | Intégration API | —                                                                                          |
| Secret de webhook                    | Intégration API | L'URL du webhook et l'URL du back-office (pour le relevé)                                  |
| Identifiant du produit (UUID)        | Fiche produit   | —                                                                                          |

::: warning Secrets
Chaque secret n'est affiché qu'une fois, puis stocké haché ou chiffré. Il doit vous
parvenir par un canal sûr (gestionnaire de mots de passe partagé, par exemple),
jamais par e-mail en clair ni dans un ticket. En régénérer un révoque l'ancien :
prévoyez la mise à jour de votre configuration au même moment.
:::

## Conventions communes

- JSON, champs en `camelCase`, identifiants UUID, dates ISO 8601 en UTC.
- Les appels de M'City vers le produit sont signés par HMAC (voir
  [Webhook](./webhook#verifier-la-signature)) ; ceux du produit vers M'City portent
  le jeton de service.
- M'City ne suit pas les redirections : déclarez les URL définitives.
