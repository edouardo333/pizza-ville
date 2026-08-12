# Website Structure — Architecture & Sitemap

> **Status: Step 3 — Website architecture DOCUMENTED.** This is a documentation-only
> pass (see [TODO.md § Development status](./TODO.md#development-status)). No
> frontend components have been built from this document yet. Content shown as
> "possible direction" or "draft copy" below is editorial direction only — see
> [CONTENT-PLAN.md](./CONTENT-PLAN.md) for the content-sourcing rules that still
> apply (no invented facts, no unverified founding year, no fabricated
> best-sellers/reviews).

## Positioning

Pizza Ville is **not** a generic modern pizza chain. It is a local family
restaurant / brochetterie / pizzeria in Disraeli with a traditional Quebec
restaurant atmosphere — warm, welcoming, casual but professional, slightly
premium without becoming disconnected from the real business. Historical
promotional material associates Pizza Ville with pizza, brochettes, fruits de
mer, steaks, and family-style restaurant food (see
[BUSINESS-INFO.md § History](./BUSINESS-INFO.md#history) and
[§ Historical brand material](#historical-brand-material) below).

**Website positioning statement:** *"A complete local restaurant — much more
than pizza."*

Avoid making the brand look like an Italian franchise or a generic pizza
delivery website.

## Primary experience

The core of the site is a **strong, premium one-page homepage** with a small
set of useful secondary pages (full menu, contact, and — if content justifies
it — a dedicated about page).

---

## Homepage structure

The homepage is built from the following sections, in order:

### 1. Navbar
- **Nav links:** Accueil · Menu · À propos · Avis · Contact
- **Controls:** FR / EN language switcher
- **Primary CTA:** Appeler / Commander
- Stays clean and usable on both desktop and mobile; collapses to a mobile
  menu with the CTA and phone number easy to reach.

### 2. Hero
- **Eyebrow:** PIZZA VILLE · DISRAELI
- **Headline (draft):** "Bien plus que de la pizza."
- **Supporting line (draft):** "Pizza · Brochettes · Fruits de mer ·
  Classiques maison"
- **Primary CTA:** Voir le menu
- **Secondary CTA:** 418-449-3496
- Intended to eventually use high-quality restaurant/food imagery — warm,
  appetizing, authentic, local. No generic Italian clichés (flags, cartoon
  chefs, etc.). Imagery is pending client-approved photography — see
  [TODO.md](./TODO.md).

### 3. Quick info bar
Immediately surfaces practical info:
- Open / Closed status (future: computed dynamically from confirmed hours —
  see [BUSINESS-INFO.md § Hours](./BUSINESS-INFO.md#hours-of-operation))
- Service types: **Sur place** · **Pour emporter** · **Livraison** (delivery
  status still needs client confirmation — see BUSINESS-INFO.md)
- Phone (click-to-call)
- Directions

### 4. Nos incontournables (featured dishes)
- Visual showcase of several signature/popular dishes (pizza, brochettes,
  poutine, seafood, pasta, other house classics as examples of the category
  mix — not a confirmed list).
- **Do not decide which specific items are actual best-sellers.** Use
  placeholders until the client confirms featured dishes (see
  [TODO.md](./TODO.md)).

### 5. Menu preview
- Elegant homepage overview of menu categories, not the full menu.
- Categories currently known from historical menu research (see
  [MENU-DATA.md](./MENU-DATA.md), unverified): Entrées, Pizzas, Sous-marins,
  Frites & Poutines, Pâtes italiennes, Lasagne, Salades, Pitas, Sandwichs,
  Hamburgers, Côtes levées, and other main dishes.
- **CTA:** "Voir le menu complet" → links to [`/menu`](#menu).
- No old menu prices in production — ever (see
  [CONTENT-PLAN.md § Content sourcing rule](./CONTENT-PLAN.md#content-sourcing-rule)).

### 6. Notre histoire
- **Working title:** "Une histoire bien de chez nous"
- **Draft copy (no year, no invented facts):** "Depuis plusieurs années,
  Pizza Ville fait partie du paysage de Disraeli."
- **The founding year is NOT verified.** Never display "Depuis 1996,"
  "Fondé en 1996," or any other exact year until the client confirms it. See
  [BUSINESS-INFO.md § History](./BUSINESS-INFO.md#history) and
  [CONTENT-PLAN.md](./CONTENT-PLAN.md) for the full rule and the client
  question list in [TODO.md](./TODO.md).
- Future support (only after client confirmation): founding story,
  owner/family story, historical restaurant photos, old menus, old branding,
  restaurant milestones, community connection, signature dishes through the
  years. Once a year is confirmed, this section may adopt a premium treatment
  such as "Depuis 19XX" / "X années de tradition à Disraeli" — not before.

### 7. Pourquoi Pizza Ville
Concise trust/identity section. Possible themes: cuisine généreuse,
restaurant local, large menu variety, friendly service, family atmosphere,
dine-in/takeout/delivery. **No unverifiable superlatives** ("best pizza,"
"number one restaurant," etc.).

### 8. Gallery
Sections/space for: food photography, dining room, exterior, bar, terrace
(meaningful visual presence), team/owners (if authorized), historical
photos. Reference photos found from 2018 and 2020 may be used only to
understand visual identity — **do not assume the restaurant currently looks
exactly the same**; current photography must be confirmed/supplied by the
client (see [§ Historical / photo data policy](#historical--photo-data-policy)).

### 9. Google reviews
- Current research reference: **4.2 / 5**, **223 reviews** (checked
  2026-08-10, per [BUSINESS-INFO.md](./BUSINESS-INFO.md) — dynamic values,
  reconfirm before launch).
- Future support: live/synced Google rating, customer review cards, CTA to
  Google reviews.
- **No fabricated review text** — only real quotes once supplied/scraped
  from an approved source.

### 10. Visitez-nous
- Pizza Ville — 585 Av. Champlain, Disraeli, QC G0N 1E0
- Phone: 418-449-3496
- Future support: embedded Google Maps, directions CTA, opening hours,
  open/closed status, dine-in/takeout/delivery indicators.

### 11. Final CTA
- **Draft headline:** "Une envie de Pizza Ville?"
- **Actions:** Voir le menu · Appeler · Itinéraire

### 12. Footer
Logo/business name, address, phone, opening hours, navigation, Facebook,
FR/EN switcher, legal links, copyright.

---

## Section rhythm (light/dark alternation)

| # | Section | Tone |
|---|---|---|
| 1 | Navbar | Charcoal / Walnut |
| 2 | Hero | Dark / photographic |
| 3 | Quick info | Warm cream |
| 4 | Nos incontournables | Cream / beige |
| 5 | Menu preview | Dark walnut or charcoal |
| 6 | Notre histoire | Warm cream |
| 7 | Pourquoi Pizza Ville | Brick red / dark accent |
| 8 | Gallery | Neutral / dark |
| 9 | Google reviews | Warm cream |
| 10 | Visitez-nous | Dark |
| 11 | Final CTA | Brick red / warm food imagery |
| 12 | Footer | Charcoal |

Full rationale and token mapping: [DESIGN-SYSTEM.md § Section rhythm](./DESIGN-SYSTEM.md#section-rhythm).

---

## Secondary pages

### `/menu`
Dedicated, complete, interactive menu. Future support: FR/EN, categories,
product descriptions, sizes, prices, featured dishes, images, mobile
category navigation. Blocked on confirmed menu data — see
[MENU-DATA.md](./MENU-DATA.md) and [TODO.md](./TODO.md).

### `/about` (optional)
Only build as a dedicated page if the historical/business content becomes
rich enough to justify it once the client confirms history details.
Otherwise the story stays primarily on the homepage ("Notre histoire"
section).

### `/contact`
Phone, address, embedded Google Maps, hours, directions, service
information (dine-in/takeout/delivery), Facebook.

### `/privacy-policy` (future, conditional)
Only required if final site functionality needs it (e.g. forms collecting
personal data, cookies/analytics requiring disclosure). Not in current
scope.

---

## Global elements
- **Navbar:** see § 1 above.
- **Footer:** see § 12 above.
- Mobile-first navigation and CTA placement — see
  [DESIGN-SYSTEM.md § Mobile-first requirements](./DESIGN-SYSTEM.md#mobile-first-requirements).

## Historical brand material

Historical promotional material references:
- "Pizza Ville"
- "Denis Spiratos — Propriétaire"
- Positioning around "Fruits de mer | Steaks | Brochettes"
- Terrasse, permis d'alcool, service de livraison

**Do not assume Denis Spiratos is still the current owner.** Do not treat
these historical services (terrace, alcohol permit, delivery) as
automatically current — all flagged for client confirmation in
[TODO.md](./TODO.md).

## Historical / photo data policy

Reference interior/exterior photos found in research date primarily from
**2018** and **2020**. Use them only to understand restaurant colors,
interior character, exterior style, and historical atmosphere — not as proof
of current appearance. Client confirmation is required before launch for:
current interior, current terrace, current exterior, current owner, current
branding, and permission to reuse any specific image. See
[TODO.md](./TODO.md).

## Development status
See [TODO.md § Development status](./TODO.md#development-status) for the
full step-by-step project status. **Current step: Step 3 (architecture) and
Step 4 (visual direction) — documentation only. Step 6 (development) has not
started.**

## Related
- [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) — visual direction
- [CONTENT-PLAN.md](./CONTENT-PLAN.md) — content sourcing per section
- [BUSINESS-INFO.md](./BUSINESS-INFO.md) — verified/unverified business facts
- [MENU-DATA.md](./MENU-DATA.md) — menu research (unverified)
- [TODO.md](./TODO.md) — outstanding client confirmations
