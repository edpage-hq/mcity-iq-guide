# Journaux

## Journal d'administration

**Administration → Journal d'administration**, réservé au PDG, trace les actions
sensibles : qui, quand, sur quoi, et ce qui a changé. Filtrez par action.

| Groupe                                | Actions tracées                                                                                                                           |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Connexion                             | Code de connexion envoyé ou erroné, appareil mémorisé ou oublié                                                                           |
| Comptes                               | Création, modification, désactivation, réactivation, invitation envoyée ou acceptée                                                       |
| Produits                              | Création, modification, équipes responsables, client SSO, jeton de service, webhook, resynchronisation, fiche modifiée par le back-office |
| Zones, bureaux, départements, équipes | Création, modification                                                                                                                    |
| Pages du site                         | Modification                                                                                                                              |
| Configuration                         | Paramètre modifié                                                                                                                         |
| Communications, ressources            | Publication, modification, suppression                                                                                                    |

Les actions faites par la plateforme elle-même apparaissent sous « Système ».

## Journal de synchronisation

**Administration → Journal de synchronisation**, ouvert au PDG et au Pôle
Exploitation, montre les échanges entre le registre et les back-offices produits.
Filtrez par produit et par statut.

| Colonne            | Contenu                                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Sens               | **M'City → produit** (envoi de la fiche par webhook) ou **Produit → M'City** (mise à jour reçue par l'API, relevé d'indicateurs) |
| Objet              | Fiche produit ou indicateurs                                                                                                     |
| Version            | Version de la fiche envoyée ou reçue                                                                                             |
| Statut             | En attente, Nouvel essai prévu, Réussi, Échec, Remplacé                                                                          |
| Tentatives, Erreur | Nombre d'essais et dernière erreur                                                                                               |

« Remplacé » signale un envoi abandonné parce que la fiche a changé entre-temps :
seule la dernière version part.
