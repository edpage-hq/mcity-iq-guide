# Équipes

Une équipe est un groupe de comptes nommés, responsable d'un ou plusieurs
produits. **Administration → Équipes** est réservé au PDG.

## Ce que donne une équipe

Chaque membre d'une équipe responsable d'un produit, quel que soit son poste :

- voit ce produit dans son périmètre et dans l'intranet ;
- ouvre son back-office par SSO, sans accès accordé compte par compte ;
- reçoit l'alerte quand le produit est désynchronisé, ou quand ses indicateurs ne
  peuvent plus être collectés.

Un compte peut appartenir à plusieurs équipes.

## Créer ou modifier une équipe

1. **Nouvelle équipe** (ou ouvrez une équipe existante).
2. **Nom** en anglais (obligatoire) et en français, **département** facultatif.
3. **Membres** : recherchez et ajoutez les comptes.
4. Enregistrez.

Les membres ajoutés ou retirés sont prévenus. Une équipe n'est pas supprimée.

## Rendre une équipe responsable d'un produit

Les équipes se choisissent sur la fiche du produit, dans le
[registre](./registry), section **Équipes responsables**.

## Retirer un membre ou une équipe

Retirer un membre d'une équipe, ou une équipe d'une fiche produit, révoque les
sessions et les jetons du compte pour les back-offices qu'il perd, sauf s'il y a
accès par ailleurs (accès accordé ou autre équipe).

Toutes ces modifications sont inscrites au [journal d'administration](./logs).
