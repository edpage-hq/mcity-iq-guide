# Bien démarrer

L'accès à M'City IQ se fait uniquement sur invitation : il n'existe pas
d'inscription libre.

## Recevoir son invitation

L'administrateur général crée votre compte avec votre poste et votre périmètre.
Vous recevez alors un e-mail d'invitation, à l'adresse renseignée, avec un
**mot de passe temporaire**.

- L'invitation est valable **7 jours** par défaut (durée fixée par M'City dans la
  [configuration](./administration/settings)).
- Une invitation expirée n'est jamais renouvelée automatiquement : demandez à
  l'administrateur général de vous en envoyer une nouvelle.
- Une nouvelle invitation remplace la précédente : l'ancien mot de passe
  temporaire ne fonctionne plus.

## Première connexion

1. Ouvrez la page de connexion de M'City IQ et saisissez votre adresse e-mail et
   le mot de passe temporaire.
2. Si la double authentification vous est demandée, saisissez le code reçu par
   e-mail (voir ci-dessous).
3. L'écran **Choisissez votre mot de passe** s'affiche : choisissez le vôtre. Il
   doit compter au moins **12 caractères** par défaut.
4. Vous arrivez sur [votre bureau](./desk).

Tant que ce mot de passe n'est pas choisi, le reste de la plateforme reste
inaccessible.

## Se connecter

Saisissez votre e-mail et votre mot de passe, puis **Se connecter**. Cochez
**Se souvenir de moi** pour rester connecté sur ce navigateur.

Si vous avez enregistré une clé d'accès (passkey), utilisez **Se connecter avec
une clé d'accès** : aucun mot de passe ni code ne vous est demandé.

Après **30 minutes** sans activité (durée réglable par M'City), vous êtes
déconnecté de l'intranet et du back-office.

## Double authentification

La double authentification peut être exigée pour votre compte ou pour tous les
comptes. Elle est alors demandée à chaque connexion, de l'une de ces façons :

| Votre compte a…                    | Ce qui vous est demandé                                            |
| ---------------------------------- | ------------------------------------------------------------------ |
| Une clé d'accès (passkey)          | Rien de plus : la clé compte pour les deux facteurs.               |
| Une application d'authentification | Le code à 6 chiffres de l'application, ou un code de récupération. |
| Ni l'une ni l'autre                | Un **code de connexion envoyé par e-mail**.                        |

### Le code par e-mail

L'écran **Vérifiez vos e-mails** vous indique l'adresse où le code est parti.

- Le code compte **6 chiffres** et vaut **15 minutes**.
- Vous avez **5 essais** ; un code ne sert qu'une fois.
- **Envoyer un nouveau code** en renvoie un, au plus une fois par minute.
- Cochez **Se souvenir de cet appareil pendant 30 jours** : ce navigateur ne vous
  demandera plus de code pendant 30 jours. Vous retrouvez ces appareils dans
  [Mon compte → Sécurité](./account#appareils-memorises).

Pas de code reçu ? Vérifiez vos courriers indésirables, puis renvoyez-en un.

L'application d'authentification et les clés d'accès restent facultatives ; vous
les ajoutez dans [Mon compte → Sécurité](./account#securite).

## Mot de passe oublié

1. Sur la page de connexion, cliquez sur **Mot de passe oublié ?**.
2. Saisissez votre e-mail, puis **Envoyer le lien de réinitialisation**.
3. Ouvrez le lien reçu (valable 60 minutes) et choisissez un nouveau mot de passe.

Changer ou réinitialiser votre mot de passe oublie tous vos appareils mémorisés.

## Compte désactivé

Un compte désactivé (départ de M'City) ne peut plus se connecter, ni à M'City IQ
ni aux back-offices produits. Il n'est jamais supprimé : seul le PDG peut le
réactiver.
