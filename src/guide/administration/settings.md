# Configuration

Les réglages de gestion de M'City se modifient depuis le back-office, sans
intervention d'edPage. Réservé au PDG. Chaque modification s'applique
immédiatement et est inscrite au [journal d'administration](./logs), avec son
auteur, sa date, l'ancienne et la nouvelle valeur.

## Paramètres

**Administration → Configuration** :

| Paramètre                                           | Par défaut           | Effet                                                                                                                                                                       |
| --------------------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Validité des invitations (jours)                    | 7                    | Durée pendant laquelle un mot de passe temporaire fonctionne, fixée à l'envoi.                                                                                              |
| Déconnexion après inactivité (minutes)              | 30                   | Les sessions de l'intranet et du back-office se ferment après cette durée sans activité.                                                                                    |
| Longueur minimale des mots de passe                 | 12                   | S'applique à tout nouveau mot de passe ; 8 au minimum.                                                                                                                      |
| Exiger l'authentification à deux facteurs pour tous | Non                  | Chaque compte reçoit un code par e-mail à la connexion, sauf s'il utilise une application d'authentification ou une passkey. Elle peut aussi être exigée compte par compte. |
| Langue des nouveaux comptes                         | Anglais              | Proposée à la création d'un compte.                                                                                                                                         |
| Tentatives de resynchronisation                     | 5                    | Nombre d'envois d'une fiche au back-office d'un produit avant de le déclarer désynchronisé (entre 1 et 20).                                                                 |
| Fenêtre d'activité (jours)                          | 30                   | Fenêtre glissante d'un « utilisateur actif », sauf si un indicateur fixe la sienne.                                                                                         |
| Remontée des indicateurs                            | Envoi par le produit | Mode par défaut des produits ; chaque produit peut en changer sur sa page d'intégration.                                                                                    |

::: warning Code par e-mail
Avec la double authentification par e-mail, la connexion dépend de l'envoi des
e-mails : si les e-mails de M'City IQ ne partent plus, ces comptes ne peuvent plus
se connecter.
:::

## Définitions d'indicateurs

**Administration → Indicateurs** liste les indicateurs consolidés et les produits
qui les remontent. Un indicateur s'ajoute sans développement, à condition que le
produit sache le fournir.

1. **Nouvel indicateur** (ou ouvrez un indicateur).
2. **Clé** : identifiant attendu des produits (minuscules, chiffres, `_`). Elle ne
   change plus après la création.
3. **Libellé**, en anglais et en français.
4. **Agrégation** : décompte distinct, somme ou ratio. Seule une somme
   s'additionne entre produits.
5. **Fenêtre (jours)** : vide pour reprendre la fenêtre d'activité de la
   configuration.
6. **Produits sources** : seuls ces produits peuvent remonter l'indicateur.
7. **Actif** : un indicateur inactif n'est plus accepté ni affiché ; ses valeurs
   sont conservées.

Prévenez l'équipe du produit : elle doit exposer l'indicateur, par l'API ou sur
son point de relevé (voir [Indicateurs](../integration/indicators)).
