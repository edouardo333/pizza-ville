/**
 * Some filenames under public/images/gallery contain "#" and accented
 * characters (e.g. "plat#03.jpg", "entrée#01.jpg"). Those characters must be
 * percent-encoded or the browser treats "#" as a URL fragment separator.
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
