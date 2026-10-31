# Registre : produits et zones

Le registre recense les produits de M'City et les zones où ils sont présents. Il
alimente les landing pages du site, la page « Nos zones » et les espaces produits
de l'intranet. **Produits** et **Zones** sont ouverts au PDG et au Pôle
Exploitation ; l'intégration technique d'un produit est réservée au PDG.

Rien ne se supprime : un produit ou une zone inactif passe hors ligne et garde
son historique.

## Zones

Qualifier une zone **enregistre une décision** prise par M'City hors de la
plateforme, à l'issue de la fiche de zone. La plateforme ne vérifie ni ne
calcule rien, et ne stocke jamais la fiche elle-même.

1. **Zones → Nouvelle zone** (ou ouvrez une zone).
2. Renseignez le **nom** et la **région**.
3. Pour une zone qualifiée : passez la **qualification** à **Qualifiée**, puis
   choisissez le **type de zone** (ville en croissance, ville structurée, zone
   périurbaine) et saisissez la **description publique**, au moins en anglais.
4. Ajoutez si vous le souhaitez une photo (JPG, PNG ou WebP, 2 Mo au plus),
   affichée en tête de la carte de la zone sur le site.
5. Enregistrez.

Une zone qualifiée et active apparaît sur « Nos zones » et devient rattachable à
un produit. Une zone **inactive** est masquée du site.

Une zone rattachée à un produit actif ne peut être ni déqualifiée ni désactivée :
détachez-la d'abord du produit.

## Produits

### Enregistrer un produit

1. **Produits → Nouveau produit**.
2. **Identité** : nom, identifiant d'URL (la landing page sera à
   `/products/<identifiant>`), statut, logo (PNG, JPG ou WebP, 2 Mo au plus),
   couleurs principale et secondaire, lien d'accès (application ou site),
   adresse du back-office, langues supportées par le produit (codes ISO séparés
   par des virgules, ex. `en, fr, pt`).
3. **Contenu de la landing page**, en anglais et en français : accroche,
   présentation, « Pour qui ? », fonctionnalités clés, étapes « Comment ça
   marche », contact propre au produit, mentions légales.
4. **Visuels** : ajoutez les images de la landing page (PNG, JPG ou WebP, 5 Mo au
   plus chacune).
5. **Zones** : cochez les zones où le produit est présent. Seules les zones
   qualifiées et actives sont proposées.
6. **Équipes responsables** : cochez les [équipes](./teams) du produit.
7. **Créer le produit**.

L'enregistrement crée automatiquement la landing page sur le site public et
l'espace du produit dans l'intranet.

- Un produit **Actif (en ligne)** doit avoir au moins son accroche en anglais.
- Un produit **Inactif (hors ligne)** peut rester incomplet ; sa landing page
  n'est plus publiée.
- L'adresse du back-office n'est jamais affichée sur le site public : elle sert
  au bouton **Ouvrir le back-office** de l'intranet.

### Modifier un produit

Ouvrez le produit, modifiez, enregistrez. Si quelqu'un a enregistré la même
fiche entre-temps, votre enregistrement est refusé : rechargez la page et
refaites votre modification.

Chaque enregistrement est envoyé automatiquement au back-office du produit s'il
est intégré.

### Statut de synchronisation

| Statut        | Signification                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Synchronisé   | Le back-office a reçu la dernière version de la fiche.                                                                                       |
| En attente    | Un envoi est en cours ou va être retenté.                                                                                                    |
| Désynchronisé | Les envois ont échoué après le nombre de tentatives fixé dans la [configuration](./settings). Le PDG et les équipes du produit sont alertés. |
| Non intégré   | Le back-office ne reçoit pas encore la fiche : rapprochement manuel.                                                                         |

En cas de désynchronisation, vérifiez avec l'équipe du produit que son
back-office répond, puis **Resynchroniser** depuis la page **Intégration API**.

## Intégration d'un produit

Réservée au PDG, depuis la fiche du produit. Les détails techniques à transmettre
à l'équipe du produit sont dans [Intégration technique](../integration/overview).

### Intégration SSO

Permet aux comptes M'City d'ouvrir le back-office du produit avec leur compte.

1. Fiche du produit → **Intégration SSO**.
2. Saisissez les **URI de redirection** fournies par l'équipe du produit (HTTPS,
   une par ligne, 5 au plus) et, si elle en a une, l'**URI de déconnexion
   (back-channel)**.
3. **Créer le client**.
4. Copiez le **secret du client** : il n'est affiché qu'une fois. Transmettez-le
   à l'équipe du produit par un canal sûr, avec l'identifiant client et l'URL de
   découverte affichés sur la page.

**Régénérer le secret** l'invalide aussitôt : le back-office ne connecte plus
personne tant qu'il n'a pas le nouveau.

### Intégration API

Permet au back-office de lire et mettre à jour sa fiche, de remonter ses
indicateurs, et de recevoir chaque modification de la fiche.

1. Fiche du produit → **Intégration API**.
2. **Générer le jeton** de service, copiez-le (affiché une seule fois) et
   transmettez-le par un canal sûr.
3. Saisissez l'**URL du webhook** fournie par l'équipe du produit et enregistrez :
   le **secret du webhook** est créé et affiché une seule fois ; transmettez-le
   aussi.
4. Choisissez le **mode de remontée** des indicateurs : envoi par le produit
   (API) ou relevé horaire par M'City, ou le mode par défaut de la configuration.

La page montre aussi l'état de synchronisation, les derniers échanges, et deux
actions : **Resynchroniser** (renvoie la fiche) et **Relever maintenant**
(collecte les indicateurs en mode relevé).

Régénérer le jeton ou le secret du webhook invalide aussitôt l'ancien.
