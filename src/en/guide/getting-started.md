# Getting started

M'City IQ is invitation-only: there is no open sign-up.

## Receiving your invitation

The general administrator creates your account with your position and scope.
You then receive an invitation e-mail, at the address entered, with a
**temporary password**.

- The invitation is valid for **7 days** by default (set by M'City in the
  [configuration](./administration/settings)).
- An expired invitation is never renewed automatically: ask the general
  administrator to send you a new one.
- A new invitation replaces the previous one: the old temporary password stops
  working.

## First sign-in

1. Open the M'City IQ sign-in page and enter your e-mail address and the
   temporary password.
2. If two-factor authentication is required, enter the code received by e-mail
   (see below).
3. The **Choose your password** screen appears: choose your own. It must be at
   least **12 characters** long by default.
4. You land on [your desk](./desk).

Until this password is chosen, the rest of the platform stays out of reach.

## Signing in

Enter your e-mail and password, then **Log in**. Tick **Remember me** to stay
signed in on this browser.

If you have registered a passkey, use **Sign in with a passkey**: no password
or code is asked.

After **30 minutes** without activity (a duration M'City can change), you are
signed out of the intranet and the back-office.

## Two-factor authentication

Two-factor authentication can be required for your account or for every
account. It is then asked at each sign-in, in one of these ways:

| Your account has…    | What you are asked                                |
| -------------------- | ------------------------------------------------- |
| A passkey            | Nothing more: the passkey counts as both factors. |
| An authenticator app | The app's 6-digit code, or a recovery code.       |
| Neither              | A **sign-in code sent by e-mail**.                |

### The e-mail code

The **Check your email** screen shows the address the code was sent to.

- The code has **6 digits** and is valid for **15 minutes**.
- You get **5 attempts**; a code works only once.
- **Send a new code** sends another, at most once a minute.
- Tick **Remember this device for 30 days**: this browser won't ask for a code
  for 30 days. These devices are listed in
  [My account → Security](./account#remembered-devices).

No code? Check your spam folder, then send a new one.

The authenticator app and passkeys stay optional; add them in
[My account → Security](./account#security).

## Forgotten password

1. On the sign-in page, click **Forgot your password?**.
2. Enter your e-mail, then **Email password reset link**.
3. Open the link received (valid for 60 minutes) and choose a new password.

Changing or resetting your password forgets all your remembered devices.

## Disabled account

A disabled account (someone who left M'City) can no longer sign in, neither to
M'City IQ nor to the product back-offices. It is never deleted: only the CEO can
reactivate it.
