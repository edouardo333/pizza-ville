# Design System — Pizza Ville

> **Status: Step 4 — Visual direction DOCUMENTED (proposed).** This defines the
> working visual language for the website. It is not yet backed by real logo
> source files or current-day professional photography — see
> [§ Open items](#open-items) and [BUSINESS-INFO.md § Brand assets](./BUSINESS-INFO.md#brand-assets).
> No logo redesign has been done or is planned at this stage. Nothing here has
> been implemented in code yet (documentation-only step — see
> [TODO.md § Development status](./TODO.md#development-status)).

## Design personality

The restaurant's physical space (per reference photos from 2018/2020 — see
[WEBSITE-STRUCTURE.md § Historical / photo data policy](./WEBSITE-STRUCTURE.md#historical--photo-data-policy))
shows a clear real-world identity: brick/terracotta red walls, mustard
yellow walls, dark wooden furniture and floors, a large wooden bar, warm
pendant lighting, cream/white trim, brick exterior, and gold/cream Pizza
Ville signage. The website should visually connect to that physical space
rather than invent an unrelated aesthetic.

**Core personality:** Authentic · Warm · Local · Family-oriented ·
Traditional · Modernized · Slightly premium · Appetizing · Welcoming

**Avoid:**
- Generic pizza-chain design
- Bright red/green Italian-flag theming
- Cartoon pizza graphics
- Overly luxurious fine-dining style
- Ultra-minimal sterile white layouts
- Excessive gradients
- Cheap fast-food appearance

---

## Color system

Initial palette direction, derived from the restaurant's real interior/exterior
colors:

| Name | Hex | Role |
|---|---|---|
| Brick Red | `#A83B32` | Primary brand accent |
| Deep Burgundy | `#6F2521` | Secondary dark accent |
| Mustard Gold | `#D6A62E` | CTA accents, dividers, icons |
| Warm Gold | `#C79A45` | CTA accents, dividers, icons |
| Dark Walnut | `#3A241B` | Dark sections, navbar/footer |
| Charcoal | `#171513` | Darkest sections, navbar/footer |
| Warm Cream | `#F5EFE4` | Main content backgrounds |
| Soft Beige | `#E6D7C3` | Secondary content backgrounds |

**Core brand combination:** brick red + dark walnut + warm cream + warm gold.
Do not use all eight colors with equal weight — gold/mustard in particular
stay reserved for small premium details, not large fills.

**Suggested usage:**
- **Charcoal / Walnut** — navbar, footer, premium sections, hero overlays
- **Warm Cream / Soft Beige** — main content sections, menu backgrounds,
  readability areas
- **Brick Red** — primary brand accent, section highlights, important UI
  details
- **Warm Gold / Mustard** — CTA accents, dividers, icons, small premium
  details

## Section rhythm

The homepage alternates warm/light and dark sections to feel rich without
becoming visually heavy:

```
Hero              → Dark / photographic
Quick Info        → Warm cream
Featured dishes   → Cream / beige
Menu              → Dark walnut or charcoal
Our Story         → Warm cream
Why Pizza Ville   → Brick red / dark accent
Gallery           → Neutral / dark
Reviews           → Warm cream
Visit             → Dark
Final CTA         → Brick red / warm food imagery
Footer            → Charcoal
```

See [WEBSITE-STRUCTURE.md § Section rhythm](./WEBSITE-STRUCTURE.md#section-rhythm)
for the mapping to homepage sections.

---

## Typography

- **Headings:** an elegant serif or a distinctive restaurant-style display
  typeface — carries the editorial, slightly premium feel.
- **Body / UI:** a modern, clean sans-serif — prioritizes readability
  (menu text, French + English, mobile).
- No overly decorative script fonts for body content.
- The existing Pizza Ville logo/wordmark may stay visually expressive on its
  own; website typography stays highly readable regardless of the logo's
  style.
- Exact typefaces TBD — to select once implementation begins (Step 6), from
  this direction.

---

## UI style

**Buttons**
- Primary: brick red or warm gold, strong contrast, clear hover state
- Secondary: transparent/outline, warm neutral border

**Cards**
- Moderate border radius, warm neutral surfaces, subtle depth
- No excessive glassmorphism

**Dividers**
- Thin warm gold or beige accents

**Icons**
- Simple, professional, consistent stroke style

**Images**
- Large, high-impact, food-focused, warm color grading, minimal unnecessary
  overlays

---

## Animation direction

Subtle and premium, never heavy:
- Smooth fade-up section reveals
- Gentle image scale on hover
- Small button movement
- Menu category transitions
- Smooth navbar transitions
- Subtle parallax only where performance allows
- Open/Closed status indicator (once hours are dynamic)

**Avoid:** constant bouncing, heavy animation, large 3D effects, excessive
motion, anything that hurts mobile performance.

---

## Mobile-first requirements

The site must be designed mobile-first:
- Sticky mobile navigation where useful
- Phone CTA easy to reach
- Menu categories easy to browse
- Large tap targets, no tiny menu text
- Fast image loading, good Core Web Vitals
- No animation causing scroll lag
- No hover-only functionality
- All important actions reachable with one hand

---

## Open items
- [ ] Real logo source files (do **not** redesign the existing logo — see
  [BUSINESS-INFO.md § Brand assets](./BUSINESS-INFO.md#brand-assets))
- [ ] Confirm whether the proposed color palette should be validated against
  official brand colors, if the client has any beyond the observed physical
  space
- [ ] Select final heading/body typefaces during Step 6 (development)
- [ ] Current professional photography (hero, gallery, menu items) — see
  [WEBSITE-STRUCTURE.md § Historical / photo data policy](./WEBSITE-STRUCTURE.md#historical--photo-data-policy)
- [ ] Accessibility baseline (contrast ratios, focus states) once palette is
  finalized in code

## Related
- [WEBSITE-STRUCTURE.md](./WEBSITE-STRUCTURE.md)
- [CONTENT-PLAN.md](./CONTENT-PLAN.md)
- [BUSINESS-INFO.md](./BUSINESS-INFO.md)
