# Indicateurs

Le produit remonte à M'City des indicateurs **consolidés** : des valeurs
agrégées, jamais de données individuelles. Deux modes, choisis par M'City pour
chaque produit :

| Mode                        | Fonctionnement                                                     |
| --------------------------- | ------------------------------------------------------------------ |
| Envoi (`event`, par défaut) | Le produit appelle `POST /indicators/ingest` quand il le souhaite. |
| Relevé (`polling`)          | M'City appelle le produit chaque heure.                            |

## Les définitions

`GET /indicators/definitions` (avec le jeton de service) renvoie les indicateurs
que ce produit doit remonter : les définitions actives dont il est source.

```json
[
  {
    "key": "active_users",
    "label": { "en": "Active users", "fr": "Utilisateurs actifs" },
    "aggregation": "count_distinct",
    "windowDays": 30
  }
]
```

- `aggregation` : `count_distinct`, `sum` ou `ratio`.
- `windowDays` : la fenêtre glissante à compter.

Le PDG ajoute des indicateurs sans développement côté M'City. Lisez les
définitions régulièrement plutôt que de les coder en dur.

## Mode envoi : `POST /indicators/ingest`

```json
{
  "definitionKey": "active_users",
  "value": 4210,
  "breakdown": null,
  "reportedAt": "2026-09-22T09:00:00Z"
}
```

- Le produit est déduit du jeton : pas de `productId` dans le corps.
- `definitionKey` doit être une définition active dont le produit est source,
  sinon 422.
- `value` : un nombre. `breakdown` : objet facultatif de nombres, pour les
  indicateurs ventilés, par exemple `{ "transport": 120, "commerce": 87 }` pour
  `activity_by_domain`.
- `reportedAt` : l'instant de la mesure. Une valeur est unique par indicateur,
  produit et `reportedAt` : renvoyer la même remontée la remplace.

Réponse : 202.

## Mode relevé : `GET {backofficeUrl}/mcity/indicators`

M'City appelle ce point chaque heure, et quand le PDG clique **Relever
maintenant**. Il faut que la fiche ait une URL de back-office et un secret de
webhook.

| En-tête             | Valeur                                                       |
| ------------------- | ------------------------------------------------------------ |
| `Accept`            | `application/json`                                           |
| `X-MCity-Event`     | `indicators.poll`                                            |
| `X-MCity-Timestamp` | Secondes Unix                                                |
| `X-MCity-Signature` | `sha256=<hex>`, HMAC-SHA256 de `"{timestamp}."` (corps vide) |

Vérifiez la signature et l'écart de timestamp comme pour le
[webhook](./webhook#verifier-la-signature), avec un corps vide.

Répondez 200 avec une liste d'objets au format de `ingest` :

```json
[
  {
    "definitionKey": "active_users",
    "value": 4210,
    "breakdown": null,
    "reportedAt": "2026-09-22T09:00:00Z"
  },
  {
    "definitionKey": "activity_by_domain",
    "value": 207,
    "breakdown": { "transport": 120, "commerce": 87 },
    "reportedAt": "2026-09-22T09:00:00Z"
  }
]
```

- Délais : 5 secondes de connexion, 15 au total ; pas de redirection suivie.
- Une entrée invalide, ou dont la clé n'est pas une définition active du
  produit, est ignorée ; les autres sont enregistrées.
- Un échec n'est pas repris : le relevé suivant réessaie. Après trois échecs de
  suite, le PDG et les équipes du produit sont prévenus.
