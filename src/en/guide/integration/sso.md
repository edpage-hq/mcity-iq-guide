# SSO (OpenID Connect)

M'City IQ is the identity provider for M'City staff. Each product back-office is
a **confidential** OpenID Connect **client**.

## The client

The CEO creates the client from the product page (**SSO integration**):

- client ID and secret (shown only once, can be regenerated);
- redirect URIs: HTTPS, 5 at most, compared exactly;
- back-channel logout URI (optional, HTTPS).

The issuer (`iss`) is the environment's URL, e.g. `https://mcityiq.com`. The
configuration is discovered at `/.well-known/openid-configuration`.

## Endpoints

| Endpoint                                | Purpose                                                                                                              |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `GET /.well-known/openid-configuration` | Discovery (including `revocation_endpoint`, `backchannel_logout_supported`, `backchannel_logout_session_supported`). |
| `GET /oauth/jwks`                       | Public signing keys (RS256).                                                                                         |
| `GET /oauth/authorize`                  | Authorization Code with PKCE (`S256`).                                                                               |
| `POST /oauth/token`                     | Code exchange and refresh.                                                                                           |
| `GET` or `POST /oauth/userinfo`         | Claims of the granted scopes, and the scope of access. Requires the `openid` scope.                                  |
| `POST /oauth/revoke`                    | Token revocation (RFC 7009).                                                                                         |

## The sign-in flow

1. The product redirects to `/oauth/authorize` with `response_type=code`,
   `client_id`, `redirect_uri`, `scope`, `state`, `nonce`, `code_challenge` and
   `code_challenge_method=S256`.
2. A visitor who isn't signed in goes through the M'City sign-in and its
   two-factor authentication. There is no consent screen.
3. M'City redirects to the redirect URI with `code` and `state`, or
   `error=access_denied` (with `state`) if the account is disabled, the product
   inactive or back-office access not granted. An undeclared URI gets a 403,
   with no redirect.
4. The product exchanges the code (valid for 10 minutes) at `/oauth/token`, with
   its `code_verifier`.
5. It checks the ID token (signature, `iss`, `aud`, `exp`, `nonce`) and, if it
   needs it, reads the scope of access at `/oauth/userinfo`.

| Token              | Lifetime   |
| ------------------ | ---------- |
| Authorization code | 10 minutes |
| Access token       | 10 minutes |
| Refresh token      | 30 days    |

Refreshing fails as soon as the account is disabled or access removed.

## Scopes and claims

| Scope               | Claims                                  |
| ------------------- | --------------------------------------- |
| `openid` (required) | `sub`, `sid`                            |
| `profile`           | `name`, `locale`                        |
| `email`             | `email`, `email_verified`               |
| `mcity`             | `mcity_role`; `mcity_scope` in userinfo |

```json
{
  "iss": "https://mcityiq.com",
  "sub": "42",
  "aud": "01a16dc8-…",
  "nonce": "…",
  "sid": "9f2c…",
  "name": "J. Doe",
  "locale": "en",
  "email": "j.doe@mcity.example",
  "email_verified": true,
  "mcity_role": "support_n1"
}
```

- `sub`: the M'City account ID, as a string. Stable: it is the matching key on
  the product side.
- `mcity_role`: the position code (`pdg`, `pole_exploitation`, `pole_support`,
  `support_n1`, `support_n2`, `hr_legal`, `finance`), or `null`.
- `sid`: the M'City session that opened the product session.

The scope of access is not in the token. Read it at `/oauth/userinfo` at sign-in:

```json
{
  "sub": "42",
  "name": "J. Doe",
  "mcity_role": "support_n1",
  "mcity_scope": { "products": ["7d3a…"], "zones": null, "offices": ["c41e…"] }
}
```

`null` means "all". `products` includes the products of the account's teams.

## Revocation

`POST /oauth/revoke`, client authenticated with Basic or in the body
(`client_id`, `client_secret`), body `token` and optional `token_type_hint`.
Revoking an access token also revokes its refresh tokens. Responses: 200 (even
for an unknown token or another client's), 401 `invalid_client`, 400
`invalid_request` without `token`.

## Back-channel logout

If the client has a back-channel logout URI, M'City sends a _logout token_ to
it:

| Case                                     | Content           | What the product does                   |
| ---------------------------------------- | ----------------- | --------------------------------------- |
| Signed out of M'City, or session expired | `sid` (and `sub`) | Closes the session opened by that `sid` |
| Account disabled, or access removed      | `sub` only        | Closes all the account's sessions       |

`POST {backchannel_logout_uri}` as `application/x-www-form-urlencoded`, field
`logout_token`: an RS256 JWT signed with the keys of `/oauth/jwks`, header
`typ: logout+jwt`.

```json
{
  "iss": "https://mcityiq.com",
  "aud": "01a16dc8-…",
  "iat": 1761321600,
  "exp": 1761322200,
  "jti": "b1f0…",
  "sub": "42",
  "sid": "9f2c…",
  "events": { "http://schemas.openid.net/event/backchannel-logout": {} }
}
```

The token has no `nonce`. Check the signature, `iss`, `aud`, `exp`, the event and
that `jti` is unique, then answer 200 (400 if the token is invalid). M'City makes
up to 3 attempts with growing delays, without following redirects.

## The Auticway example

- A **Se connecter avec M'City** ("Sign in with M'City") button on the
  back-office sign-in page.
- Matching by `sub`; at first sign-in, by verified e-mail address
  (`email_verified`) with an administrator account, otherwise the account is
  created.
- Role recomputed at each sign-in from `mcity_role` (see
  [Auticway back-office](../auticway#what-you-see-there)).
- Back-channel logout: closes the session by `sid`, or all sessions by `sub`.
