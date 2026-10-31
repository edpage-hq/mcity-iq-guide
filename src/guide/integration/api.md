# API

L'API permet au back-office d'un produit de lire sa fiche, de mettre à jour son
URL d'accès et ses langues, et de remonter ses indicateurs.

## Conventions

- Base : `https://mcityiq.com/api/v1` (test : `https://mcity.edpage.net/api/v1`).
- JSON, champs en `camelCase`, identifiants UUID, dates ISO 8601 en UTC.
- Limite : 60 requêtes par minute et par jeton.
- Chaque réponse porte un en-tête `X-Correlation-Id`. Citez-le en cas de
  problème.

## Authentification

```http
Authorization: Bearer mcity_<48 caractères>
```

Le jeton de service est généré par le PDG sur la page **Intégration API** du
produit. Il n'est affiché qu'une fois et stocké haché ; en générer un nouveau
révoque l'ancien. Un jeton n'agit que sur son propre produit : tout autre
identifiant répond 404.

Jeton absent ou inconnu : 401, en-tête `WWW-Authenticate: Bearer`, corps
`{ "message": "Invalid service token." }`.

## Erreurs

```json
{ "message": "...", "errors": { "field": ["..."] }, "correlationId": "..." }
```

| Code                  | Signification                                                    |
| --------------------- | ---------------------------------------------------------------- |
| 200 / 201 / 202 / 204 | Succès                                                           |
| 400                   | Requête malformée                                                |
| 401                   | Jeton absent, expiré ou invalide                                 |
| 403                   | Jeton valide, action hors de ses droits                          |
| 404                   | Ressource inexistante ou hors du périmètre du jeton              |
| 409                   | `version` périmée                                                |
| 422                   | Règle de gestion violée (clé d'indicateur inconnue, par exemple) |
| 429                   | Limite de débit dépassée                                         |
| 500                   | Erreur inattendue, journalisée avec le `correlationId`           |

## `GET /products/{id}`

Lit la fiche du produit, par exemple pour se réconcilier après une panne.

```json
{
  "productId": "7d3a…",
  "version": 4,
  "name": "Auticway",
  "status": "active",
  "accessUrl": "https://auticway.example",
  "supportedLanguages": ["en", "fr"],
  "zones": [{ "id": "b2f1…", "name": "Ho", "region": "Volta", "zoneType": "growing_city" }],
  "updatedAt": "2026-09-22T10:05:00Z"
}
```

C'est la fiche envoyée par le [webhook](./webhook), sans `event` ni `occurredAt`.

## `PUT /products/{id}`

Met à jour la fiche depuis le produit. Le produit ne modifie que :

- `accessUrl` : une URL, ou `null` ;
- `supportedLanguages` : codes ISO 639 en minuscules (2 ou 3 lettres), 20 au plus.

Un champ absent reste inchangé ; tout autre champ est ignoré. Le reste de la fiche
appartient à M'City.

```json
{ "version": 4, "accessUrl": "https://auticway.example", "supportedLanguages": ["en", "fr", "pt"] }
```

La `version` lue est obligatoire. Si elle n'est plus la version courante, la
réponse est 409 : relisez la fiche, puis réessayez. En cas de succès, la réponse
est la fiche complète avec la `version` incrémentée. Le changement est journalisé
et n'est pas renvoyé au produit par webhook.

## Indicateurs

`GET /indicators/definitions` et `POST /indicators/ingest` sont décrits dans
[Indicateurs](./indicators).
