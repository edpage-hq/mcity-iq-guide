# Auticway back-office

Auticway is M'City's first product. Its back-office opens with your M'City
account: no second password.

The back-office's sign-in screens are in French; the labels below are quoted as
they appear, with a translation.

## Signing in

1. From your [desk](./desk#opening-a-product-back-office), open Auticway, or go
   to the back-office sign-in page and click **Se connecter avec M'City** ("Sign
   in with M'City").
2. If you are not signed in to M'City, sign in (with your two-factor
   authentication).
3. You land on the Auticway dashboard.

On the M'City side you need an active account, the product active and
back-office access granted (see [Accounts](./administration/accounts)). At first
sign-in, an Auticway administrator account with the same e-mail address is
linked to your M'City account; otherwise an account is created.

Signing out of M'City also signs you out of Auticway. Disabling your M'City
account, or removing your access, closes your Auticway sessions at once.

## What you see there

Your M'City position decides your Auticway role. It is recomputed at each
sign-in: a change of position takes effect at the next sign-in.

| M'City position          | Auticway role    | Pages                                                                                      |
| ------------------------ | ---------------- | ------------------------------------------------------------------------------------------ |
| CEO, Product Operations  | admin-mcity      | All, except roles and sessions (kept for the Auticway super-administrator)                 |
| Support head, Support L2 | mcity-support    | Dashboard, users (edit), providers, offers, bookings, reviews, alerts, broadcasts, content |
| Support L1               | mcity-support-n1 | Dashboard, bookings, reviews, alerts, users (view only)                                    |
| Finance                  | mcity-finance    | Dashboard, payments, accounting, bookings                                                  |
| HR & Legal               | mcity-hr         | Dashboard, users (edit, to disable an account)                                             |

A restricted role edits only customer and provider accounts, never
administration accounts.

## Refusal messages

| Message                                                                                                                                                                       | What to do                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| « Votre poste M'City ne donne pas accès au back-office Auticway. Contactez votre administrateur M'City. » (Your M'City position gives no access to the Auticway back-office.) | Your account has no recognised position: ask the administrator to assign one.                                                                                             |
| « Ce compte est désactivé. » (This account is disabled.)                                                                                                                      | The Auticway account is disabled: contact the Auticway administrator.                                                                                                     |
| « Cette adresse e-mail appartient à un compte qui n'est pas un compte administrateur. » (This e-mail address belongs to an account that is not an administrator account.)     | The address belongs to an Auticway customer or provider account, or to an account already linked to another M'City account: ask the Auticway administrator to resolve it. |
| Back on M'City with an access refusal                                                                                                                                         | Back-office access is not granted to you, or the product is inactive: check with your head of unit.                                                                       |

## Back-office notifications

The Auticway back-office bell shows the events to handle, depending on your
pages. It opens the full list and the **Préférences** (preferences), where you
choose, for each event, the in-back-office notification and the e-mail. Notifications are deleted after 90
days.

| Event                    | Page needed | E-mail by default |
| ------------------------ | ----------- | ----------------- |
| Provider to verify       | Providers   | Yes               |
| Pending booking          | Bookings    | No                |
| Alert report             | Alerts      | Yes               |
| Failed payment           | Payments    | Yes               |
| Failed accounting export | Accounting  | Yes               |
