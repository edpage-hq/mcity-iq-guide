# Indicator supervision

**Administration → Supervision** shows the consolidated indicators reported by
each product. Open to the CEO, Product Operations and Finance.

M'City IQ holds only **aggregated values**, never a product's operational
detail: that is viewed in the product's back-office.

## Reading the supervision

For each active indicator, the page shows:

- its window (e.g. "30-day window");
- for each source product, the **last value** reported, its date and, where
  relevant, its **breakdown** (by activity domain, for example);
- a **total**, only for additive indicators (sum). Distinct users or ratios
  don't add up from one product to another.

"Not reported yet" marks a source product that hasn't sent anything yet.

## The starting indicators

| Indicator                                         | Aggregation         |
| ------------------------------------------------- | ------------------- |
| Active users (`active_users`)                     | Distinct count      |
| Active providers and sellers (`active_providers`) | Distinct count      |
| Published alerts (`published_alerts`)             | Sum                 |
| Activity by domain (`activity_by_domain`)         | Sum, with breakdown |

The CEO chooses which products report each indicator, and adds new ones, in
[Indicator definitions](./settings#indicator-definitions).

## When values stop coming in

In polling mode, if collection fails three times in a row, the CEO and the
product's teams are notified. The [sync log](./logs) shows each poll and its
error; the CEO can run a collection with **Poll now** on the product's **API
integration** page.
