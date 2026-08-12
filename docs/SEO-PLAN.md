# SEO Plan — Pizza Ville

> Local SEO strategy for a Disraeli, QC pizzeria. Concrete keywords/copy are TBD
> until real business info and menu are confirmed — this doc sets the framework.

## Primary goal
Rank for local intent searches from people in and around Disraeli, Quebec looking
for pizza / a restaurant to order from or visit.

## Target search intent (hypotheses to validate)
- "pizza Disraeli"
- "pizzeria Disraeli QC"
- "restaurant Disraeli"
- "livraison pizza Disraeli" (delivery)
- "[Pizza Ville] menu"
- "meilleure pizza Disraeli" / near-me queries

Exact keyword targets should be refined once we know the menu, competitors, and
whether the site is French, English, or bilingual.

## Local SEO checklist
- [ ] Claim/verify **Google Business Profile** (name, address, phone, hours, category, photos)
- [ ] NAP (Name, Address, Phone) consistency across site, Google, Facebook, directories
- [ ] Embed Google Map on Contact page
- [ ] `LocalBusiness` / `Restaurant` structured data (JSON-LD) with real address, hours, menu link
- [ ] Submit to relevant local directories (Yellow Pages Canada, Yelp, etc.)
- [ ] Encourage/collect Google reviews; display real ones on site
- [ ] Localized content mentioning Disraeli, the Appalaches region, nearby landmarks

## Technical SEO (Next.js implementation)
- [ ] Per-page `metadata` (title, description) via Next.js App Router metadata API
- [ ] Open Graph + Twitter card images (real photos, once available)
- [ ] `sitemap.xml` and `robots.txt` generated
- [ ] Semantic HTML (proper heading hierarchy, landmarks)
- [ ] Image optimization via `next/image`, descriptive `alt` text (never generic "image1.jpg")
- [ ] Fast Core Web Vitals — optimized images/video, minimal blocking JS
- [ ] Mobile-first responsive design (most local searches are mobile)
- [ ] Canonical URLs; avoid duplicate content if bilingual (hreflang if FR/EN)
- [ ] Favicon, web app manifest

## On-page SEO conventions
- Page titles pattern: `{Page} | Pizza Ville — Pizzeria à Disraeli, QC` (TBD exact wording)
- H1 per page, one only, includes primary keyword + location where natural
- Menu items get descriptive, not generic, names/descriptions
- Internal linking between Home ↔ Menu ↔ Contact ↔ Reviews

## Structured data plan (JSON-LD)
Once real data exists, implement `Restaurant` schema including:
- name, address, geo, telephone, openingHours, servesCuisine, menu URL, priceRange,
  acceptsReservations (if applicable), aggregateRating (if real reviews available)

## Content/blog (optional, future)
Not in initial scope. Could later add local content (events, seasonal specials) if
the client wants ongoing SEO growth — revisit post-launch.

## Status
🟡 Framework only. Revisit with real keyword research once business info,
competitors, and menu are confirmed.
