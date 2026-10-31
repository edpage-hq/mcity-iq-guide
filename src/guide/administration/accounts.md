# Comptes et accès

**Administration → Comptes** est réservé au PDG. **Administration → Départs**
est ouvert au PDG et au volet RH & Affaires Juridiques.

## La liste des comptes

Elle montre, pour chaque personne, son poste, son département, son statut et
l'état de son invitation (**Invitation en attente**, **Invitation expirée**,
**Activé**). Recherchez par nom ou e-mail, filtrez par poste ou statut, et
**Exporter en CSV** pour obtenir la liste filtrée.

## Inviter une personne

1. **Nouveau compte**.
2. **Identité** : nom, e-mail (l'adresse où partira l'invitation), langue de
   l'invitation et de l'interface, et, si besoin, **Exiger l'authentification à
   deux facteurs** pour ce compte.
3. **Poste** et **département** (facultatif).
4. **Périmètre**, selon le poste :
   - Support N1 et N2 : produits, zones et bureaux sur lesquels la personne
     travaille, avec au moins un produit ;
   - PDG et pôles : tous les produits et toutes les zones, rien à choisir ;
   - RH et Finance : transverses, sans produit ni zone.
5. **Accès aux back-offices produits** : cochez les produits dont la personne
   pourra ouvrir le back-office (voir ci-dessous).
6. **Créer le compte**.

L'e-mail d'invitation part aussitôt, avec un mot de passe temporaire valable
pendant la durée fixée dans la [configuration](./settings) (7 jours par défaut).
La personne choisit son propre mot de passe à la première connexion.

### Renvoyer une invitation

Une invitation expirée n'est jamais renouvelée automatiquement. Sur la fiche du
compte, **Envoyer une nouvelle invitation** envoie un nouveau mot de passe
temporaire ; l'ancien ne fonctionne plus.

## Modifier un poste, un périmètre ou des accès

Ouvrez le compte, modifiez, puis enregistrez. Le changement s'applique à la
requête suivante de la personne, sans reconnexion. Elle en est prévenue
(notification « Vos accès »).

Si vous modifiez votre propre compte, changer de poste peut vous retirer l'accès
à cette page.

## Accès aux back-offices produits

Le SSO n'ouvre **aucun** back-office par défaut. Une personne ouvre le back-office
d'un produit :

- si l'accès lui est accordé sur sa fiche, compte par compte, quel que soit son
  périmètre ;
- ou si elle est membre d'une [équipe](./teams) responsable du produit.

La fiche montre à part les accès venus d'une équipe (« Par une équipe : … »).
Retirer un accès accordé laisse ouvert un produit que la personne garde par une
équipe. Quand une personne perd son dernier accès à un produit, ses sessions et
ses jetons pour ce back-office sont révoqués immédiatement.

Ce que la personne peut faire **dans** le back-office dépend de son poste : pour
Auticway, voir [Back-office Auticway](../auticway).

## Désactiver un compte

Un compte n'est jamais supprimé : il est désactivé.

1. **Départs** (ou **Désactiver** dans la liste des comptes).
2. Recherchez la personne, puis **Désactiver** et confirmez.

La personne est déconnectée partout immédiatement, M'City IQ et back-offices
produits compris, et ses accès aux back-offices sont retirés. Le compte et son
historique sont conservés.

Personne ne peut désactiver son propre compte, et le dernier compte PDG actif ne
peut pas être désactivé.

### Réactiver un compte

Le PDG peut **Réactiver** un compte désactivé. La personne peut de nouveau se
connecter, mais ses accès aux back-offices produits ne sont pas rétablis :
accordez-les de nouveau depuis sa fiche.
