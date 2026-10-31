# Webhook

M'City sends the product record to the back-office on every creation or change.
The product implements the receiving endpoint; its URL is declared on the
product's **API integration** page.

## The request

`POST {webhookUrl}`:

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

| Header              | Value              |
| ------------------- | ------------------ |
| `Content-Type`      | `application/json` |
| `X-MCity-Event`     | `product.updated`  |
| `X-MCity-Timestamp` | Unix seconds       |
| `X-MCity-Signature` | `sha256=<hex>`     |

## Verifying the signature

The signature is an HMAC-SHA256, with the webhook secret, of the string
`"{X-MCity-Timestamp}.{raw body}"`. The timestamp is signed with the body: a
captured request can't be replayed with another timestamp.

1. Read the **raw** body, before any JSON decoding.
2. Reject the request if the timestamp is more than 5 minutes away from the
   server's time.
3. Compute the expected signature and compare it in constant time.

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

## Responding

Answer `2xx` to acknowledge, quickly: M'City waits 5 seconds to connect and 10
seconds in total, and doesn't follow redirects. Process the record in the
background if needed.

## Retries

Any other response, or a timeout, triggers retries after 1, 5, 15, 60 then 240
minutes, up to the number of attempts set by M'City (5 by default). Beyond that,
the product becomes **desynchronized**: the CEO and the product's teams are
alerted, and the CEO resends with **Resynchronize**.

If the record changes during the retries, the pending send is dropped: only the
latest version goes out.

## Idempotency

The same version can arrive more than once. The product must be idempotent on
(`productId`, `version`) and ignore a version lower than the one it already
has. When in doubt, it reads the record again with
[`GET /products/{id}`](./api#get-products-id).
