/**
 * Verified business facts for Pizza Ville (Disraeli, QC).
 *
 * Source of truth: docs/BUSINESS-INFO.md. Only confirmed data lives here —
 * do not add prices, founding years, owner names, or claims that document
 * marks "To confirm with client".
 */

export const BUSINESS = {
  name: "Pizza Ville",
  legalName: "Pizzaville Disraeli",
  tagline: "Restaurant, pizza, brochettes et plus",
  phone: "418 449-3496",
  phoneHref: "tel:+14184493496",
  address: {
    street: "585 Av. Champlain",
    city: "Disraeli",
    province: "QC",
    postalCode: "G0N 1E0",
    country: "CA",
  },
  facebookUrl: "https://www.facebook.com/pizzavilledisraeli?locale=fr_CA",
  reviews: {
    rating: 4.2,
    count: 223,
    // Snapshot date this rating/count was last checked — display as a
    // research snapshot, not a permanent guaranteed value.
    checkedOn: "2026-08-10",
  },
  priceRange: "$20–$30 / pers.",
  // Verified via the confirmed Google Maps place (Pizzaville Disraeli).
  geo: {
    lat: 45.9023875,
    lng: -71.3592575,
  },
} as const;

export const FULL_ADDRESS = `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.province} ${BUSINESS.address.postalCode}`;

/** Confirmed Google Maps place page for Pizzaville Disraeli. */
export const MAPS_PLACE_URL =
  "https://www.google.com/maps/place/Pizzaville+Disraeli/@45.9011871,-71.3582537,14z/data=!4m15!1m8!3m7!1s0x4cb780a5e851ebab:0x798f6ed0e971b13!2sPizzaville+Disraeli!8m2!3d45.9023875!4d-71.3592575!10e5!16s%2Fg%2F11f54l61f7!3m5!1s0x4cb780a5e851ebab:0x798f6ed0e971b13!8m2!3d45.9023875!4d-71.3592575!16s%2Fg%2F11f54l61f7?entry=ttu";

/** Turn-by-turn directions to the confirmed coordinates — used by every "Itinéraire" CTA. */
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.geo.lat},${BUSINESS.geo.lng}`;

/** No-API-key embeddable map preview, centered on the confirmed coordinates. */
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${BUSINESS.geo.lat},${BUSINESS.geo.lng}&z=16&output=embed`;

/** Google search for reviews — built from verified name/address, not a fabricated link. */
export const REVIEWS_URL = `https://www.google.com/search?q=${encodeURIComponent(
  `${BUSINESS.name} ${BUSINESS.address.city} avis Google`
)}`;
