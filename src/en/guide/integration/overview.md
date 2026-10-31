# Technical integration: overview

This part is for the technical teams of the products that connect their
back-office to M'City IQ. It describes the full contract; Auticway is its first
implementation.

## The four links

| Link                          | Direction        | Purpose                                                                |
| ----------------------------- | ---------------- | ---------------------------------------------------------------------- |
| [SSO (OpenID Connect)](./sso) | Product → M'City | M'City staff sign in to the back-office with their M'City account.     |
| [API](./api)                  | Product → M'City | The product reads its record and updates its access URL and languages. |
| [Webhook](./webhook)          | M'City → product | M'City pushes the product record on every change.                      |
| [Indicators](./indicators)    | Product → M'City | The product reports its consolidated indicators, pushed or polled.     |

M'City IQ only receives aggregated values, never personal data of the product's
users.

## Environments

| Environment | OIDC issuer                | API base                          |
| ----------- | -------------------------- | --------------------------------- |
| Production  | `https://mcityiq.com`      | `https://mcityiq.com/api/v1`      |
| Test        | `https://mcity.edpage.net` | `https://mcity.edpage.net/api/v1` |

Credentials from one don't work on the other.

## What the CEO hands you

M'City's CEO sets the product up in the registry (see
[Integrating a product](../administration/registry#integrating-a-product)):

| Item                      | Where it is created | What you provide                                                                 |
| ------------------------- | ------------------- | -------------------------------------------------------------------------------- |
| OIDC client ID and secret | SSO integration     | The redirect URIs (HTTPS, 5 at most) and, if needed, the back-channel logout URI |
| `mcity_…` service token   | API integration     | —                                                                                |
| Webhook secret            | API integration     | The webhook URL and the back-office URL (for polling)                            |
| Product ID (UUID)         | Product page        | —                                                                                |

::: warning Secrets
Each secret is shown only once, then stored hashed or encrypted. It must reach
you through a safe channel (a shared password manager, for example), never by
plain e-mail or in a ticket. Regenerating one revokes the old one: plan to
update your configuration at the same moment.
:::

## Shared conventions

- JSON, `camelCase` fields, UUID identifiers, ISO 8601 dates in UTC.
- Calls from M'City to the product are signed with HMAC (see
  [Webhook](./webhook#verifying-the-signature)); calls from the product to
  M'City carry the service token.
- M'City doesn't follow redirects: declare the final URLs.
