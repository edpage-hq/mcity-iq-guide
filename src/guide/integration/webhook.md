# Webhook

M'City envoie la fiche produit au back-office à chaque création ou modification.
Le produit implémente le point de réception ; son URL est déclarée sur la page
**Intégration API** du produit.

## La requête

`POST {webhookUrl}` :

```json
{
  "event": "product.updated",
  "productId": "7d3a…",
  "version": 5,
  "name": "Auticway",
  "status": "active",
  "accessUrl": "https://auticway.example",
  "supportedLanguages": ["en", "fr"],
  "zones": [{ "id": "b2f1…", "name": "Ho", "region": "Volta", "zoneType": "growing_city" }],
  "updatedAt": "2026-09-22T10:05:00Z",
  "occurredAt": "2026-09-22T10:05:00Z"
}
```

| En-tête             | Valeur             |
| ------------------- | ------------------ |
| `Content-Type`      | `application/json` |
| `X-MCity-Event`     | `product.updated`  |
| `X-MCity-Timestamp` | Secondes Unix      |
| `X-MCity-Signature` | `sha256=<hex>`     |

## Vérifier la signature

La signature est un HMAC-SHA256, avec le secret de webhook, de la chaîne
`"{X-MCity-Timestamp}.{corps brut}"`. Le timestamp est signé avec le corps : une
requête capturée ne peut pas être rejouée avec un autre timestamp.

1. Lisez le corps **brut**, avant tout décodage JSON.
2. Rejetez la requête si le timestamp s'écarte de plus de 5 minutes de l'heure
   du serveur.
3. Calculez la signature attendue et comparez-la en temps constant.

```php
$timestamp = $request->header('X-MCity-Timestamp');
$signature = $request->header('X-MCity-Signature');
$body = $request->getContent();

if (abs(time() - (int) $timestamp) > 300) {
    abort(401);
}

$expected = 'sha256='.hash_hmac('sha256', $timestamp.'.'.$body, $secret);

if (! is_string($signature) || ! hash_equals($expected, $signature)) {
    abort(401);
}
```

```js
import { createHmac, timingSafeEqual } from 'node:crypto'

function isValid(rawBody, timestamp, signature, secret) {
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) return false
  const expected =
    'sha256=' + createHmac('sha256', secret).update(`${timestamp}.${rawBody}`).digest('hex')
  return (
    signature?.length === expected.length &&
    timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  )
}
```

## Répondre

Répondez `2xx` pour accuser réception, rapidement : M'City attend 5 secondes pour
la connexion et 10 secondes au total, et ne suit pas les redirections. Traitez la
fiche en différé si nécessaire.

## Reprises

Toute autre réponse, ou un délai dépassé, déclenche des reprises après 1, 5, 15,
60 puis 240 minutes, jusqu'au nombre de tentatives réglé par M'City (5 par
défaut). Au-delà, le produit passe **désynchronisé** : le PDG et les équipes du
produit sont alertés, et le PDG relance l'envoi avec **Resynchroniser**.

Si la fiche change pendant les reprises, l'envoi en attente est abandonné : seule
la dernière version part.

## Idempotence

Une même version peut arriver plusieurs fois. Le produit doit être idempotent sur
(`productId`, `version`) et ignorer une version inférieure à celle qu'il a déjà.
En cas de doute, il relit la fiche avec [`GET /products/{id}`](./api#get-products-id).
