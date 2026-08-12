# TODO — Pizza Ville

## Development status
> See [PROJECT-BRIEF.md § Project phases](./PROJECT-BRIEF.md#project-phases)
> for the broader phase breakdown. This tracks the specific numbered steps
> referenced across the docs.

| Step | Description | Status |
|---|---|---|
| 1 | Technical foundation (Next.js/TS/Tailwind scaffold, folder structure) | ✅ Complete |
| 2 | Business research | ✅ Complete / ongoing verification |
| 3 | Website architecture | ✅ Documented — see [WEBSITE-STRUCTURE.md](./WEBSITE-STRUCTURE.md) |
| 4 | Visual direction | ✅ Documented — see [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) |
| 5 | Assets / photos / logo | 🟡 Next |
| 6 | Website development | ⬜ Not started |
| 7 | Final verified menu | ⬜ Pending client data |
| 8 | SEO / local / mobile optimization | ⬜ Later |
| 9 | QA / deployment | ⬜ Later |

**Do not start Step 6 (development) until explicitly approved.**

## Remaining client confirmations
> Consolidated list — see linked sections for full context on each item.
- [ ] Current owner (historical material names "Denis Spiratos —
      Propriétaire"; do not assume still current — see
      [WEBSITE-STRUCTURE.md § Historical brand material](./WEBSITE-STRUCTURE.md#historical-brand-material))
- [ ] Founding year (see [History](#history--our-story--client-confirmation-needed) below)
- [ ] Restaurant history / founding story
- [ ] Current logo files (source files, no redesign — see
      [DESIGN-SYSTEM.md § Open items](./DESIGN-SYSTEM.md#open-items))
- [ ] Current professional photos (hero, gallery, menu items)
- [ ] Current interior appearance (reference photos are from 2018/2020 — see
      [WEBSITE-STRUCTURE.md § Historical / photo data policy](./WEBSITE-STRUCTURE.md#historical--photo-data-policy))
- [ ] Current terrace availability
- [ ] Current alcohol service (historical material references "permis
      d'alcool" — not confirmed current)
- [ ] Current delivery service (in-house vs. platform)
- [ ] Current complete menu
- [ ] Current menu prices
- [ ] Signature / popular dishes (for "Nos incontournables")
- [ ] Current specials
- [ ] Current Facebook link
- [ ] Official email
- [ ] Domain
- [ ] Whether online ordering exists
- [ ] Whether reservations are accepted

## Phase 0 — Foundation ✅
- [x] Create `docs/` planning documents
- [x] Create `public/images/*` and `public/videos/` folder structure
- [x] Initialize Next.js + TypeScript + Tailwind CSS project
- [x] Show final folder structure to client

## Phase 1 — Discovery (blocked on client)
- [ ] Get real address, phone, email, hours
- [ ] Get full menu with prices (PDF/photos/spreadsheet ok)
- [ ] Get logo + existing brand assets (if any)
- [ ] Get real photos: storefront, interior, food, team
- [ ] Confirm services: dine-in / takeout / delivery / catering / online ordering
- [ ] Confirm language(s): French / English / bilingual
- [ ] Confirm domain name + hosting preference
- [ ] Collect real customer reviews/testimonials to feature
- [ ] Fill out [BUSINESS-INFO.md](./BUSINESS-INFO.md) completely

### History / "Our Story" — client confirmation needed
> Research so far (see [BUSINESS-INFO.md § History](./BUSINESS-INFO.md#history)
> and [CONTENT-PLAN.md](./CONTENT-PLAN.md)) establishes a long-standing
> presence in Disraeli but **not** an exact founding year. An earlier AI
> research pass suggested June 1996 — **unverified, do not use.** Do not
> build the "Our Story / Notre histoire" section or display any founding
> year until the client answers the questions below.
- [ ] En quelle année Pizza Ville a-t-il ouvert à Disraeli?
- [ ] Qui a fondé le restaurant?
- [ ] Le propriétaire actuel est-il le fondateur?
- [ ] Y a-t-il eu d'anciens propriétaires?
- [ ] Depuis quand le restaurant est-il situé au 585 avenue Champlain?
- [ ] Quelle est l'origine du nom Pizza Ville / Pizzaville?
- [ ] Comment le restaurant a-t-il commencé?
- [ ] Quels ont été les changements importants au fil des années?
- [ ] Quelles spécialités sont présentes depuis longtemps?
- [ ] Y a-t-il des plats emblématiques ou recettes historiques?
- [ ] Existe-t-il d'anciennes photos du restaurant?
- [ ] Y a-t-il des anecdotes ou souvenirs importants liés au restaurant?
- [ ] Quelle relation le restaurant entretient-il avec la communauté de Disraeli?
- [ ] Le client possède-t-il d'anciens menus, logos, photos ou archives que nous pouvons utiliser?

### Menu — client confirmation needed (from old menu photos research)
> An older/existing physical Pizza Ville menu was found in photographs.
> Categories and item names were transcribed into
> [MENU-DATA.md](./MENU-DATA.md) as **unverified research material** —
> prices were deliberately NOT transcribed. None of it may be published
> (website, PDF, Google Business Profile) until confirmed below.
- [ ] Obtain current complete menu from client
- [ ] Confirm every current price (do not reuse old-menu prices)
- [ ] Confirm discontinued items (which old-menu items are no longer offered)
- [ ] Confirm newly added items (not present on the old menu)
- [ ] Confirm pizza sizes (old menu shows 8"/10"/12"/14" — still current?)
- [ ] Confirm available extras/toppings and their pricing
- [ ] Confirm combos/specials
- [ ] Confirm delivery information (area, minimum, fees)
- [ ] Obtain professional food photos if available
- [ ] Obtain original logo (source files)
- [ ] Ask client whether they want a printable redesigned menu (see
      "Final menu strategy" below)
- [ ] Ask permission before replacing/updating any menu material on Google
      Business Profile

## Phase 2 — Design system
- [ ] Define color palette from real brand or approved direction
- [ ] Define typography
- [ ] Build Tailwind theme tokens
- [ ] Design core components (buttons, cards, nav, footer)

## Phase 3 — Content
- [ ] Write real page copy (no invented facts)
- [ ] Organize/optimize real images into `public/images/*`
- [ ] Write metadata (titles/descriptions) per page

## Phase 4 — Build
- [ ] Build layout (header/nav/footer)
- [ ] Build Home page
- [ ] Build Menu page — **not started; blocked on confirmed menu data, see
      "Final menu strategy" below**
- [ ] Build About page — **"Our Story / Notre histoire" section stays out of
      scope until the history questions above are answered; no founding year
      may be displayed until then**
- [ ] Build Gallery page
- [ ] Build Reviews page
- [ ] Build Contact page (+ map)
- [ ] Build optional pages (Catering / Order) if in scope
- [ ] Responsive QA (mobile/tablet/desktop)
- [ ] Accessibility pass

### Final menu strategy (for Phase 4, once client data confirmed)
Two menu deliverables are planned, both dependent on confirmed data in
[MENU-DATA.md](./MENU-DATA.md):
1. **Interactive website menu** — responsive, mobile-first menu built into
   the Next.js site: categories, names, descriptions, sizes, prices,
   featured items, food photography, FR/EN.
2. **Professional print/digital menu** — a redesigned menu (not the old
   photographed one) for Google Business Profile, Facebook, a downloadable
   PDF, and QR-code access/printing. Built only after the client confirms
   current menu info; do not use the old menu photos as final
   customer-facing material.

## Phase 5 — SEO & launch prep
- [ ] Implement JSON-LD Restaurant schema
- [ ] Sitemap + robots.txt
- [ ] Google Business Profile setup/verification
- [ ] Performance pass (Core Web Vitals)
- [ ] Cross-browser QA

## Phase 6 — Launch
- [ ] Connect domain
- [ ] Deploy to production
- [ ] Post-launch checklist (analytics, monitoring)

---
**Current blocker:** Waiting on real business information from the client before
Phase 1 can be completed. See [BUSINESS-INFO.md](./BUSINESS-INFO.md) and, for
menu specifics, [MENU-DATA.md](./MENU-DATA.md).
