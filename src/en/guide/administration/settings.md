# Configuration

M'City's management settings are changed from the back-office, without edPage.
CEO only. Each change applies immediately and is recorded in the
[audit log](./logs), with its author, date, old and new value.

## Settings

**Administration → Configuration**:

| Setting                                        | Default             | Effect                                                                                                                                      |
| ---------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Invitation validity (days)                     | 7                   | How long a temporary password works, fixed when sent.                                                                                       |
| Sign-out after inactivity (minutes)            | 30                  | Intranet and back-office sessions close after this time without activity.                                                                   |
| Minimum password length                        | 12                  | Applies to every new password; 8 at least.                                                                                                  |
| Require two-factor authentication for everyone | No                  | Every account gets an e-mail code at sign-in, unless it uses an authenticator app or a passkey. It can also be required account by account. |
| Language of new accounts                       | English             | Offered when an account is created.                                                                                                         |
| Resynchronization attempts                     | 5                   | How many times a product is sent to its back-office before it is declared desynchronized (1 to 20).                                         |
| Activity window (days)                         | 30                  | Rolling window of an "active user", unless an indicator sets its own.                                                                       |
| Indicator reporting                            | Sent by the product | The products' default mode; each product can change it on its integration page.                                                             |

::: warning E-mail code
With e-mail two-factor authentication, signing in depends on e-mail delivery:
if M'City IQ's e-mails stop going out, those accounts can no longer sign in.
:::

## Indicator definitions

**Administration → Indicators** lists the consolidated indicators and the
products that report them. An indicator is added without development, as long
as the product can supply it.

1. **New indicator** (or open an indicator).
2. **Key**: the identifier the products use (lowercase, digits, `_`). It can't
   change after creation.
3. **Label**, in English and French.
4. **Aggregation**: distinct count, sum or ratio. Only a sum adds up across
   products.
5. **Window (days)**: empty to use the configuration's activity window.
6. **Source products**: only these products can report the indicator.
7. **Active**: an inactive indicator is no longer accepted or shown; its values
   are kept.

Tell the product's team: it must expose the indicator, through the API or at its
polling endpoint (see [Indicators](../integration/indicators)).
