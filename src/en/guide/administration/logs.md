# Logs

## Audit log

**Administration → Audit log**, CEO only, traces sensitive actions: who, when,
on what, and what changed. Filter by action.

| Group                              | Actions traced                                                                                                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Sign-in                            | Sign-in code sent or wrong, device remembered or forgotten                                                                     |
| Accounts                           | Creation, change, disabling, reactivation, invitation sent or accepted                                                         |
| Products                           | Creation, change, responsible teams, SSO client, service token, webhook, resynchronization, product changed by the back-office |
| Zones, offices, departments, teams | Creation, change                                                                                                               |
| Site pages                         | Change                                                                                                                         |
| Configuration                      | Setting changed                                                                                                                |
| Communications, resources          | Publication, change, deletion                                                                                                  |

Actions taken by the platform itself show under "System".

## Sync log

**Administration → Sync log**, open to the CEO and Product Operations, shows the
exchanges between the registry and the product back-offices. Filter by product
and status.

| Column          | Content                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Direction       | **M'City → product** (product sent by webhook) or **Product → M'City** (update received through the API, indicator poll) |
| Object          | Product or indicators                                                                                                    |
| Version         | Version of the product sent or received                                                                                  |
| Status          | Pending, Retry scheduled, Succeeded, Failed, Superseded                                                                  |
| Attempts, Error | Number of tries and last error                                                                                           |

"Superseded" marks a send dropped because the product changed in the meantime:
only the latest version goes out.
