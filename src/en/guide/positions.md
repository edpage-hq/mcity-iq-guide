# By position

Two independent settings decide what you see:

- your **position** decides the **functions** (the entries of the
  Administration menu);
- your **scope** decides the **data** visible in those functions and in the
  intranet.

A change of position or scope takes effect immediately, on your next action,
without a new invitation or signing in again.

## The seven positions

| Position                                      | Scope                                                       |
| --------------------------------------------- | ----------------------------------------------------------- |
| Managing Director (CEO)                       | All products, all zones                                     |
| Head of Product Operations & Finance          | All products, all zones                                     |
| Head of Partner & Customer Support            | All products, all zones                                     |
| Support L1 — Customers                        | Assigned products, zones and offices (at least one product) |
| Support L2 — Providers, Partners & Moderation | Assigned products, zones and offices (at least one product) |
| HR & Legal Affairs                            | Cross-cutting: all offices, no product                      |
| Finance & Accounting                          | Cross-cutting: all offices, no product                      |

A member of a [team](./administration/teams) also sees the team's products,
whatever their position.

## Function matrix

| Function                                                                           | CEO | Product Operations | Support head | Support L1 | Support L2 | HR  | Finance |
| ---------------------------------------------------------------------------------- | :-: | :----------------: | :----------: | :--------: | :--------: | :-: | :-----: |
| Desk, communications, resources (intranet)                                         |  ✓  |         ✓          |      ✓       |     ✓      |     ✓      |  ✓  |    ✓    |
| [Publish communications](./administration/communications)                          |  ✓  |                    |      ✓       |            |            |     |         |
| [Manage shared resources](./administration/communications#shared-resources)        |  ✓  |                    |      ✓       |            |            |     |         |
| [Public site pages](./administration/site-pages)                                   |  ✓  |                    |      ✓       |            |            |     |         |
| [Contact messages](./administration/contact-messages)                              |  ✓  |                    |      ✓       |     ✓      |            |     |         |
| [Registry: products and zones](./administration/registry)                          |  ✓  |         ✓          |              |            |            |     |         |
| [Indicator supervision](./administration/indicators)                               |  ✓  |         ✓          |              |            |            |     |    ✓    |
| [Sync log](./administration/logs)                                                  |  ✓  |         ✓          |              |            |            |     |         |
| [Offboarding (disable an account)](./administration/accounts#disabling-an-account) |  ✓  |                    |              |            |            |  ✓  |         |
| [Accounts: invite, position, scope, access](./administration/accounts)             |  ✓  |                    |              |            |            |     |         |
| [Offices, departments, teams](./administration/referentials)                       |  ✓  |                    |              |            |            |     |         |
| [Configuration and indicator definitions](./administration/settings)               |  ✓  |                    |              |            |            |     |         |
| [Product integration (SSO, API)](./administration/registry#integrating-a-product)  |  ✓  |                    |              |            |            |     |         |
| [Audit log](./administration/logs)                                                 |  ✓  |                    |              |            |            |     |         |

Most of the work of Support L1, Support L2, HR and Finance happens in the product
back-offices; the intranet opens them through SSO when you are granted access.

## Managing Director (CEO)

The CEO has every function: they are the general administrator. They invite
accounts, grant access to product back-offices, and manage the configuration,
the referentials and product integration. The last active CEO account can
neither change position nor be disabled.

## Product Operations & Finance

- Keep the [registry](./administration/registry): register and edit products,
  qualify zones.
- Follow the [supervision](./administration/indicators) of consolidated
  indicators.
- Check the [sync log](./administration/logs) between the registry and the
  product back-offices.

## Partner & Customer Support

- [Publish communications](./administration/communications) to targeted
  recipients and manage [shared resources](./administration/communications#shared-resources).
- Edit the [public site pages](./administration/site-pages).
- Handle [contact messages](./administration/contact-messages), like Support L1.

## Support L1 — Customers

- Handle the queue of [contact messages](./administration/contact-messages) from
  the public site. The queue is shared by every Support L1 and the Support head,
  with no filter by product or zone.
- Handle customer requests in the back-offices of the products you are granted.

## Support L2 — Providers, Partners & Moderation

No administration function in M'City IQ. Moderation and the follow-up of
providers and partners happen in the product back-offices of your scope, opened
from their [product spaces](./desk#product-spaces).

## HR & Legal Affairs

- Disable the account of someone leaving M'City, from
  [Offboarding](./administration/accounts#disabling-an-account).
- HR files and contracts stay outside the platform.

## Finance & Accounting

- Check the [supervision](./administration/indicators) of consolidated
  indicators.
- A product's payments and accounting are viewed in its back-office.
