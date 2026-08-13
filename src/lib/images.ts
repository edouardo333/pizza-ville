/**
 * Percent-encodes filenames used across public/images so any special
 * characters in a path segment are safely URL-encoded.
 */
export function galleryImage(filename: string): string {
  return `/images/gallery/${encodeURIComponent(filename)}`;
}

export function restaurantImage(filename: string): string {
  return `/images/restaurant/${encodeURIComponent(filename)}`;
}

export function reviewImage(filename: string): string {
  return `/images/reviews/${encodeURIComponent(filename)}`;
}

export function teamImage(filename: string): string {
  return `/images/equipe/${encodeURIComponent(filename)}`;
}
