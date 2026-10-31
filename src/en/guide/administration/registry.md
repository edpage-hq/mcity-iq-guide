# Registry: products and zones

The registry lists M'City's products and the zones where they operate. It feeds
the site's landing pages, the "Our zones" page and the intranet's product
spaces. **Products** and **Zones** are open to the CEO and to Product
Operations; a product's technical integration is for the CEO only.

Nothing is deleted: an inactive product or zone goes offline and keeps its
history.

## Zones

Qualifying a zone **records a decision** M'City made outside the platform, at
the end of the zone assessment. The platform neither checks nor computes
anything, and never stores the assessment itself.

1. **Zones → New zone** (or open a zone).
2. Enter the **name** and **region**.
3. For a qualified zone: set **Qualification** to **Qualified**, then choose the
   **zone type** (growing city, structured city, peri-urban area) and enter the
   **public description**, at least in English.
4. Optionally add a photo (JPG, PNG or WebP, 2 MB at most), shown at the top of
   the zone's card on the site.
5. Save.

A qualified, active zone appears on "Our zones" and can be attached to a
product. An **inactive** zone is hidden from the site.

A zone attached to an active product can be neither unqualified nor disabled:
detach it from the product first.

## Products

### Registering a product

1. **Products → New product**.
2. **Identity**: name, URL slug (the landing page will be at
   `/products/<slug>`), status, logo (PNG, JPG or WebP, 2 MB at most), primary
   and secondary colours, access link (app or site), back-office address, the
   languages the product supports (ISO codes separated by commas, e.g.
   `en, fr, pt`).
3. **Landing page content**, in English and French: tagline, presentation,
   "Who is it for?", key features, "How it works" steps, the product's own
   contact, legal notice.
4. **Visuals**: add the landing page images (PNG, JPG or WebP, 5 MB at most
   each).
5. **Zones**: tick the zones where the product operates. Only qualified, active
   zones are offered.
6. **Responsible teams**: tick the product's [teams](./teams).
7. **Create product**.

Saving creates the landing page on the public site and the product's space in
the intranet automatically.

- An **Active (online)** product needs at least its English tagline.
- An **Inactive (offline)** product may stay incomplete; its landing page is no
  longer published.
- The back-office address is never shown on the public site: it is used by the
  intranet's **Open the back-office** button.

### Editing a product

Open the product, edit, save. If someone saved the same product in the
meantime, your save is refused: reload the page and make your change again.

Each save is sent automatically to the product's back-office if it is
integrated.

### Sync status

| Status         | Meaning                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Synced         | The back-office has received the latest version of the product.                                                                |
| Pending        | A send is in progress or will be retried.                                                                                      |
| Desynchronized | Sends failed after the number of attempts set in the [configuration](./settings). The CEO and the product's teams are alerted. |
| Not integrated | The back-office doesn't receive the product yet: reconcile by hand.                                                            |

When a product is desynchronized, check with the product's team that its
back-office responds, then **Resynchronize** from the **API integration** page.

## Integrating a product

For the CEO only, from the product page. The technical details to pass on to the
product's team are in [Technical integration](../integration/overview).

### SSO integration

Lets M'City accounts open the product's back-office with their account.

1. Product page → **SSO integration**.
2. Enter the **redirect URIs** given by the product's team (HTTPS, one per line,
   5 at most) and, if it has one, the **back-channel logout URI**.
3. **Create the client**.
4. Copy the **client secret**: it is shown only once. Pass it on to the
   product's team through a safe channel, with the client ID and the discovery
   URL shown on the page.

**Regenerate the secret** invalidates it at once: the back-office signs nobody
in until it has the new one.

### API integration

Lets the back-office read and update its product page, report its indicators,
and receive every change to the product.

1. Product page → **API integration**.
2. **Generate the token** (service token), copy it (shown only once) and pass it
   on through a safe channel.
3. Enter the **Webhook URL** given by the product's team and save: the
   **webhook secret** is created and shown only once; pass it on too.
4. Choose the indicator **reporting mode**: sent by the product (API), polled
   hourly by M'City, or the configuration's default.

The page also shows the sync state, the latest exchanges, and two actions:
**Resynchronize** (sends the product again) and **Poll now** (collects the
indicators in polling mode).

Regenerating the token or the webhook secret invalidates the old one at once.
