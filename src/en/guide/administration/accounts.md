# Accounts and access

**Administration → Accounts** is for the CEO only. **Administration →
Offboarding** is open to the CEO and to HR & Legal Affairs.

## The account list

It shows, for each person, their position, department, status and invitation
state (**Invitation pending**, **Invitation expired**, **Activated**). Search by
name or e-mail, filter by position or status, and use **Export CSV** to get the
filtered list.

## Inviting someone

1. **New account**.
2. **Identity**: name, e-mail (the address the invitation goes to), language of
   the invitation and the interface, and, if needed, **Require two-factor
   authentication** for this account.
3. **Position** and **department** (optional).
4. **Scope**, depending on the position:
   - Support L1 and L2: the products, zones and offices the person works on,
     with at least one product;
   - CEO and heads: all products and all zones, nothing to choose;
   - HR and Finance: cross-cutting, no product or zone.
5. **Product back-office access**: tick the products whose back-office the
   person may open (see below).
6. **Create account**.

The invitation e-mail is sent at once, with a temporary password valid for the
duration set in the [configuration](./settings) (7 days by default). The person
chooses their own password at first sign-in.

### Resending an invitation

An expired invitation is never renewed automatically. On the account page,
**Send a new invitation** sends a new temporary password; the old one stops
working.

## Changing a position, scope or access

Open the account, edit, then save. The change applies on the person's next
request, without signing in again. They are notified ("Your access"
notification).

If you edit your own account, changing your position may remove your access to
this page.

## Product back-office access

SSO opens **no** back-office by default. A person opens a product's back-office:

- if access is granted on their account, account by account, whatever their
  scope;
- or if they belong to a [team](./teams) responsible for the product.

The account page shows team-based access separately ("Through a team: …").
Removing granted access leaves open a product the person keeps through a team.
When someone loses their last access to a product, their sessions and tokens for
that back-office are revoked immediately.

What the person can do **inside** the back-office depends on their position: for
Auticway, see [Auticway back-office](../auticway).

## Disabling an account

An account is never deleted: it is disabled.

1. **Offboarding** (or **Disable** in the account list).
2. Find the person, then **Disable** and confirm.

The person is signed out everywhere immediately, M'City IQ and product
back-offices included, and their back-office access is removed. The account and
its history are kept.

Nobody can disable their own account, and the last active CEO account cannot be
disabled.

### Reactivating an account

The CEO can **Reactivate** a disabled account. The person can sign in again, but
their product back-office access is not restored: grant it again from their
account page.
