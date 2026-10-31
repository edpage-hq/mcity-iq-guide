# Indicators

The product reports **consolidated** indicators to M'City: aggregated values,
never individual data. Two modes, chosen by M'City for each product:

| Mode                    | How it works                                                   |
| ----------------------- | -------------------------------------------------------------- |
| Push (`event`, default) | The product calls `POST /indicators/ingest` whenever it wants. |
| Polling (`polling`)     | M'City calls the product every hour.                           |

## The definitions

`GET /indicators/definitions` (with the service token) returns the indicators
this product must report: the active definitions it is a source of.

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

- `aggregation`: `count_distinct`, `sum` or `ratio`.
- `windowDays`: the rolling window to count over.

The CEO adds indicators without development on the M'City side. Read the
definitions regularly rather than hard-coding them.

## Push mode: `POST /indicators/ingest`

```json
{
  "definitionKey": "active_users",
  "value": 4210,
  "breakdown": null,
  "reportedAt": "2026-09-22T09:00:00Z"
}
```

- The product is deduced from the token: no `productId` in the body.
- `definitionKey` must be an active definition the product is a source of,
  otherwise 422.
- `value`: a number. `breakdown`: an optional object of numbers, for broken-down
  indicators, e.g. `{ "transport": 120, "commerce": 87 }` for
  `activity_by_domain`.
- `reportedAt`: when the measure was taken. A value is unique per indicator,
  product and `reportedAt`: sending the same report again replaces it.

Response: 202.

## Polling mode: `GET {backofficeUrl}/mcity/indicators`

M'City calls this endpoint every hour, and when the CEO clicks **Poll now**. The
product record needs a back-office URL and a webhook secret.

| Header              | Value                                                        |
| ------------------- | ------------------------------------------------------------ |
| `Accept`            | `application/json`                                           |
| `X-MCity-Event`     | `indicators.poll`                                            |
| `X-MCity-Timestamp` | Unix seconds                                                 |
| `X-MCity-Signature` | `sha256=<hex>`, HMAC-SHA256 of `"{timestamp}."` (empty body) |

Check the signature and the timestamp gap as for the
[webhook](./webhook#verifying-the-signature), with an empty body.

Answer 200 with a list of objects in the `ingest` format:

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

- Timeouts: 5 seconds to connect, 15 in total; redirects aren't followed.
- An invalid entry, or one whose key isn't an active definition of the product,
  is ignored; the others are stored.
- A failure isn't retried: the next poll tries again. After three failures in a
  row, the CEO and the product's teams are notified.
