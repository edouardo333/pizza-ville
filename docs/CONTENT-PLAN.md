# Content Plan — Pizza Ville

> Maps required content to each homepage section and secondary page. All actual
> copy is TBD/draft until real business info is collected (see
> [BUSINESS-INFO.md](./BUSINESS-INFO.md)). Nothing here should be filled with
> invented facts in the final build — only real, client-confirmed content goes
> live. Section order below follows [WEBSITE-STRUCTURE.md](./WEBSITE-STRUCTURE.md).

## Content sourcing rule
**No fabricated facts.** Hours, prices, addresses, quotes, reviews, best-sellers,
and history must come directly from the client (or a verified source already
logged in [BUSINESS-INFO.md](./BUSINESS-INFO.md)). Until confirmed, sections
should either:
1. Stay unbuilt, or
2. Use clearly-marked structural placeholders (e.g. `[Address TBD]`) during
   development only — never shipped to production.

This rule applies with extra weight to:
- **History/founding-year claims** — see the dedicated section below.
- **"Nos incontournables" (featured dishes)** — do not decide which items are
  actual best-sellers; use placeholders until the client confirms.
- **Google reviews** — never fabricate review text; only real quotes from a
  confirmed source (Google/Facebook), and only the real, current rating/count.

## Overall content strategy

The site should communicate that Pizza Ville is not simply a place to order
pizza — it's a long-established local restaurant experience in Disraeli with a
broad menu and a recognizable community presence. Copy should balance:

**Food** + **Local history** + **Restaurant experience** + **Practical
information**

Avoid generic restaurant marketing filler ("best pizza in town," etc.) in
favor of specific, local, and honest description.

---

## Homepage section-by-section content

### 1. Navbar
- Nav labels: Accueil, Menu, À propos, Avis, Contact
- CTA label: Appeler / Commander
- Source: fixed UI copy, no client data needed beyond phone number
  ([BUSINESS-INFO.md](./BUSINESS-INFO.md))

### 2. Hero
- Eyebrow: "PIZZA VILLE · DISRAELI"
- Headline (draft): "Bien plus que de la pizza."
- Supporting line (draft): "Pizza · Brochettes · Fruits de mer · Classiques
  maison"
- CTAs: "Voir le menu" / phone number
- Hero image: **needed from client** — high-quality restaurant/food
  photography; not yet received (see [TODO.md](./TODO.md))

### 3. Quick info bar
- Sur place / Pour emporter / Livraison labels
- Open/closed status — needs confirmed hours + dynamic logic (hours already
  captured from Google Business Profile in
  [BUSINESS-INFO.md § Hours](./BUSINESS-INFO.md#hours-of-operation), but
  delivery status still needs client confirmation)
- Phone, directions link

### 4. Nos incontournables
- 3–6 featured dish visuals + short names
- **Status: ❌ blocked.** Client must confirm actual signature/popular dishes;
  do not select these ourselves. Use neutral placeholders until then.

### 5. Menu preview
- Category names only (see [MENU-DATA.md](./MENU-DATA.md) for the researched,
  unverified category list)
- CTA: "Voir le menu complet" → `/menu`
- No prices on the homepage preview

### 6. Notre histoire
> Full research write-up: [BUSINESS-INFO.md § History](./BUSINESS-INFO.md#history).

Working French section title: **"Une histoire bien de chez nous"**

Placeholder copy (no year, no unverified claims): *"Depuis plusieurs années,
Pizza Ville fait partie du paysage de Disraeli."*

**FOUNDING YEAR: TO CONFIRM WITH CLIENT.** An earlier AI-assisted research
pass surfaced "June 1996" but no trustworthy source verified it — treat that
figure as unusable, not as a fallback placeholder.

**Verified facts (safe to reference):**
- Long-standing presence in Disraeli, Quebec, at 585 avenue Champlain.
- Business also documented as "Brochetterie Pizzaville Disraëli" /
  "Restaurant Brochetterie Pizzaville."
- Associated corporate entity: Les Immeubles Daées Inc. (NEQ 1164776685).
- Public reviews (Tripadvisor) trace back at least to 2015.

**Unverified — do not publish:** any specific founding year, including 1996.
Never ship "Depuis 1996," "Fondé en 1996," or any other exact year until
confirmed by the client or a reliable historical source.

**Client confirmation required:** the 14 history-related questions live in
[TODO.md](./TODO.md) (year opened, founder, current vs. original owner, prior
owners, tenure at the address, origin of the name, milestones,
signature/legacy dishes, old photos/menus/logos, community ties, anecdotes).

**Future premium treatment (build only after confirmation):** "Depuis 19XX" /
"X années de tradition à Disraeli," historical photography, founding/owner
story, signature dishes through the years, a milestones timeline, old
menu/logo archival elements, community connection. Tone: authentic, local,
emotional — not generic restaurant marketing.

### 7. Pourquoi Pizza Ville
- Concise trust points: cuisine généreuse, restaurant local, large menu
  variety, friendly service, family atmosphere, dine-in/takeout/delivery
- **No unverifiable superlatives** ("best pizza," "number one restaurant")

### 8. Gallery
- Food photography, dining room, exterior, bar, terrace (meaningful visual
  presence), team/owners (only if authorized), historical photos
- Source: `public/images/gallery/`, `public/images/restaurant/`,
  `public/images/menu/`
- Reference photos from 2018/2020 may inform visual identity only — do not
  present them as current-day photography without labeling them as archival

### 9. Google reviews
- Rating: **4.2 / 5**, review count: **223** (per
  [BUSINESS-INFO.md](./BUSINESS-INFO.md), checked 2026-08-10 — dynamic,
  reconfirm before launch)
- Real customer review cards once sourced (Google/Facebook) — no fabricated
  quotes
- CTA to Google reviews page

### 10. Visitez-nous
- Pizza Ville, 585 Av. Champlain, Disraeli, QC G0N 1E0
- Phone: 418-449-3496
- Future: embedded map, directions CTA, hours table, open/closed status,
  service-type indicators

### 11. Final CTA
- Draft headline: "Une envie de Pizza Ville?"
- Actions: Voir le menu / Appeler / Itinéraire

### 12. Footer
- Logo/business name, address, phone, hours, nav links, Facebook, FR/EN,
  legal links, copyright

---

## Secondary pages

| Page | Content needed | Source | Status |
|---|---|---|---|
| `/menu` | Full menu w/ categories, descriptions, sizes & prices, item photos | Client | ❌ |
| `/about` (optional) | Only if history content becomes rich enough; otherwise homepage-only | Client | ❌ |
| `/contact` | Address, map, phone, email, hours, service info, Facebook | Client | ❌ |
| Footer (all pages) | Hours, address, phone, social links | Client | ❌ |
| Metadata | Page titles/descriptions per page | Derived from above once real | ❌ |

## Copywriting principles (once real info is in hand)
- Lead with what makes Pizza Ville specific to **Disraeli** — local, not
  generic
- Keep menu descriptions short, appetizing, scannable
- Make hours/phone/address findable within one click from any page
- Primary CTA repeated consistently: Voir le menu / Appeler / Itinéraire
- Write French-first, English secondary (per
  [BUSINESS-INFO.md § Language & tone](./BUSINESS-INFO.md#language--tone) —
  bilingual scope still to confirm)

## Next steps
1. Collect real content via [BUSINESS-INFO.md](./BUSINESS-INFO.md) and the
   open questions in [TODO.md](./TODO.md)
2. Drop real images into the matching `public/images/*` subfolder
3. Fill this file's status markers as each piece arrives
4. Only then write final page copy (Step 6+ — not started, see
   [TODO.md § Development status](./TODO.md#development-status))

## Related
- [WEBSITE-STRUCTURE.md](./WEBSITE-STRUCTURE.md)
- [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)
- [BUSINESS-INFO.md](./BUSINESS-INFO.md)
- [MENU-DATA.md](./MENU-DATA.md)
