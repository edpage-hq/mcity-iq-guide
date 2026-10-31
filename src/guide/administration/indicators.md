# Supervision des indicateurs

**Administration → Supervision** montre les indicateurs consolidés remontés par
chaque produit. Ouvert au PDG, au Pôle Exploitation et au volet Finance.

M'City IQ n'héberge que des **valeurs agrégées**, jamais le détail opérationnel
d'un produit : celui-ci se consulte dans le back-office du produit.

## Lire la supervision

Pour chaque indicateur actif, la page affiche :

- sa fenêtre (par exemple « fenêtre de 30 jours ») ;
- pour chaque produit source, la **dernière valeur** remontée, sa date et, le cas
  échéant, sa **répartition** (par domaine d'activité, par exemple) ;
- un **total**, uniquement pour les indicateurs additifs (somme). Des utilisateurs
  distincts ou des ratios ne s'additionnent pas d'un produit à l'autre.

« Pas encore remonté » signale un produit source qui n'a encore rien envoyé.

## Les indicateurs de départ

| Indicateur                                                   | Agrégation              |
| ------------------------------------------------------------ | ----------------------- |
| Utilisateurs actifs (`active_users`)                         | Décompte distinct       |
| Prestataires et vendeurs actifs (`active_providers`)         | Décompte distinct       |
| Alertes publiées (`published_alerts`)                        | Somme                   |
| Répartition de l'activité par domaine (`activity_by_domain`) | Somme, avec répartition |

Le PDG choisit quels produits remontent chaque indicateur, et en ajoute de
nouveaux, dans [Définitions d'indicateurs](./settings#definitions-d-indicateurs).

## Quand les valeurs ne remontent plus

En mode relevé, si la collecte échoue trois fois de suite, le PDG et les équipes
du produit sont prévenus. Le [journal de synchronisation](./logs) montre chaque
relevé et son erreur ; le PDG peut relancer une collecte avec **Relever
maintenant** sur la page **Intégration API** du produit.
