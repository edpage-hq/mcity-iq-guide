# SSO (OpenID Connect)

M'City IQ est le fournisseur d'identité du personnel M'City. Chaque back-office
produit est un **client confidentiel** OpenID Connect.

## Le client

Le PDG crée le client depuis la fiche produit (**Intégration SSO**) :

- identifiant client et secret (affiché une seule fois, régénérable) ;
- URI de redirection : HTTPS, 5 au plus, comparées à l'identique ;
- URI de déconnexion back-channel (facultative, HTTPS).

L'émetteur (`iss`) est l'URL de l'environnement, par exemple
`https://mcityiq.com`. La configuration se découvre sur
`/.well-known/openid-configuration`.

## Endpoints

| Endpoint                                | Rôle                                                                                                             |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `GET /.well-known/openid-configuration` | Découverte (dont `revocation_endpoint`, `backchannel_logout_supported`, `backchannel_logout_session_supported`). |
| `GET /oauth/jwks`                       | Clés publiques de signature (RS256).                                                                             |
| `GET /oauth/authorize`                  | Authorization Code avec PKCE (`S256`).                                                                           |
| `POST /oauth/token`                     | Échange du code et rafraîchissement.                                                                             |
| `GET` ou `POST /oauth/userinfo`         | Claims des scopes accordés et périmètre. Exige le scope `openid`.                                                |
| `POST /oauth/revoke`                    | Révocation d'un jeton (RFC 7009).                                                                                |

## Le parcours de connexion

1. Le produit redirige vers `/oauth/authorize` avec `response_type=code`,
   `client_id`, `redirect_uri`, `scope`, `state`, `nonce`, `code_challenge` et
   `code_challenge_method=S256`.
2. Un visiteur non connecté passe par la connexion M'City et sa double
   authentification. Il n'y a pas d'écran de consentement.
3. M'City renvoie sur l'URI de redirection avec `code` et `state`, ou
   `error=access_denied` (avec `state`) si le compte est désactivé, le produit
   inactif ou l'accès au back-office non accordé. Une URI non déclarée reçoit
   un 403, sans redirection.
4. Le produit échange le code (valable 10 minutes) sur `/oauth/token`, avec son
   `code_verifier`.
5. Il vérifie l'ID token (signature, `iss`, `aud`, `exp`, `nonce`) et, s'il en a
   besoin, lit le périmètre sur `/oauth/userinfo`.

| Jeton               | Durée      |
| ------------------- | ---------- |
| Code d'autorisation | 10 minutes |
| Access token        | 10 minutes |
| Refresh token       | 30 jours   |

Le rafraîchissement échoue dès que le compte est désactivé ou l'accès retiré.

## Scopes et claims

| Scope                  | Claims                                     |
| ---------------------- | ------------------------------------------ |
| `openid` (obligatoire) | `sub`, `sid`                               |
| `profile`              | `name`, `locale`                           |
| `email`                | `email`, `email_verified`                  |
| `mcity`                | `mcity_role` ; `mcity_scope` dans userinfo |

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

- `sub` : identifiant du compte M'City, en chaîne. Stable : c'est la clé de
  rapprochement côté produit.
- `mcity_role` : code du poste (`pdg`, `pole_exploitation`, `pole_support`,
  `support_n1`, `support_n2`, `hr_legal`, `finance`), ou `null`.
- `sid` : la session M'City qui a ouvert la session produit.

Le périmètre n'est pas dans le jeton. Lisez-le sur `/oauth/userinfo` à la
connexion :

```json
{
  "sub": "42",
  "name": "J. Doe",
  "mcity_role": "support_n1",
  "mcity_scope": { "products": ["7d3a…"], "zones": null, "offices": ["c41e…"] }
}
```

`null` signifie « tous ». `products` comprend les produits des équipes du compte.

## Révocation

`POST /oauth/revoke`, client authentifié en Basic ou dans le corps (`client_id`,
`client_secret`), corps `token` et `token_type_hint` facultatif. Révoquer un access
token révoque aussi ses refresh tokens. Réponses : 200 (même pour un jeton inconnu
ou d'un autre client), 401 `invalid_client`, 400 `invalid_request` sans `token`.

## Déconnexion back-channel

Si le client a une URI de déconnexion back-channel, M'City y envoie un _logout
token_ :

| Cas                                       | Contenu          | Ce que fait le produit                |
| ----------------------------------------- | ---------------- | ------------------------------------- |
| Déconnexion de M'City, ou session expirée | `sid` (et `sub`) | Ferme la session ouverte par ce `sid` |
| Compte désactivé, ou accès retiré         | `sub` seul       | Ferme toutes les sessions du compte   |

`POST {backchannel_logout_uri}` en `application/x-www-form-urlencoded`, champ
`logout_token` : un JWT RS256 signé par les clés de `/oauth/jwks`, en-tête
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

Le jeton n'a pas de `nonce`. Vérifiez la signature, `iss`, `aud`, `exp`,
l'événement et l'unicité de `jti`, puis répondez 200 (400 si le jeton est
invalide). M'City fait jusqu'à 3 tentatives à délai croissant, sans suivre les
redirections.

## L'exemple d'Auticway

- Bouton **Se connecter avec M'City** sur la page de connexion du back-office.
- Rapprochement par `sub` ; à la première connexion, par adresse e-mail
  vérifiée (`email_verified`) avec un compte administrateur, sinon création du
  compte.
- Rôle recalculé à chaque connexion depuis `mcity_role` (voir
  [Back-office Auticway](../auticway#ce-que-vous-y-voyez)).
- Déconnexion back-channel : fermeture de la session par `sid`, de toutes les
  sessions par `sub`.
