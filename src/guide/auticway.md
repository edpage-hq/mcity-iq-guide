# Back-office Auticway

Auticway est le premier produit de M'City. Son back-office s'ouvre avec votre
compte M'City : pas de second mot de passe.

## Se connecter

1. Depuis votre [bureau](./desk#acceder-a-un-back-office-produit), ouvrez
   Auticway, ou allez sur la page de connexion du back-office et cliquez sur
   **Se connecter avec M'City**.
2. Si vous n'êtes pas connecté à M'City, connectez-vous (avec votre double
   authentification).
3. Vous arrivez sur le tableau de bord d'Auticway.

Il faut, côté M'City, un compte actif, le produit actif et un accès au
back-office accordé (voir [Comptes](./administration/accounts)). À la première
connexion, un compte administrateur Auticway de même adresse e-mail est rattaché
à votre compte M'City ; à défaut, un compte est créé.

Vous déconnecter de M'City vous déconnecte aussi d'Auticway. Désactiver votre
compte M'City, ou vous retirer l'accès, ferme aussitôt vos sessions Auticway.

## Ce que vous y voyez

Votre poste M'City détermine votre rôle dans Auticway. Il est recalculé à chaque
connexion : un changement de poste prend effet à la connexion suivante.

| Poste M'City             | Rôle Auticway    | Pages                                                                                                                 |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| PDG, Pôle Exploitation   | admin-mcity      | Toutes, sauf les rôles et les sessions (réservés au super-administrateur Auticway)                                    |
| Pôle Support, Support N2 | mcity-support    | Tableau de bord, utilisateurs (modification), prestataires, offres, réservations, avis, alertes, diffusions, contenus |
| Support N1               | mcity-support-n1 | Tableau de bord, réservations, avis, alertes, utilisateurs (lecture seule)                                            |
| Finance                  | mcity-finance    | Tableau de bord, paiements, comptabilité, réservations                                                                |
| RH & Juridique           | mcity-hr         | Tableau de bord, utilisateurs (modification, pour désactiver un compte)                                               |

Un rôle restreint ne modifie que les comptes clients et prestataires, jamais les
comptes d'administration.

## Messages de refus

| Message                                                                                                   | Que faire                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| « Votre poste M'City ne donne pas accès au back-office Auticway. Contactez votre administrateur M'City. » | Votre compte n'a pas de poste reconnu : demandez à l'administrateur de vous en attribuer un.                                                                                         |
| « Ce compte est désactivé. »                                                                              | Le compte Auticway est désactivé : contactez l'administrateur Auticway.                                                                                                              |
| « Cette adresse e-mail appartient à un compte qui n'est pas un compte administrateur. »                   | L'adresse est celle d'un compte client ou prestataire d'Auticway, ou d'un compte déjà rattaché à un autre compte M'City : demandez à l'administrateur Auticway de régler le conflit. |
| Retour sur M'City avec un refus d'accès                                                                   | L'accès au back-office ne vous est pas accordé, ou le produit est inactif : voyez avec votre responsable de pôle.                                                                    |

## Notifications du back-office

La cloche du back-office Auticway signale les événements à traiter, selon vos
pages. Elle ouvre la liste complète et les **Préférences**, où vous choisissez,
pour chaque événement, la notification dans le back-office et l'e-mail. Les
notifications sont supprimées après 90 jours.

| Événement               | Page nécessaire | E-mail par défaut |
| ----------------------- | --------------- | ----------------- |
| Prestataire à vérifier  | Prestataires    | Oui               |
| Réservation en attente  | Réservations    | Non               |
| Signalement d'alerte    | Alertes         | Oui               |
| Paiement échoué         | Paiements       | Oui               |
| Export comptable échoué | Comptabilité    | Oui               |
