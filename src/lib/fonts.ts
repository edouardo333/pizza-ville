import { Anton } from "next/font/google";

/**
 * Bold condensed display face for poster-style moments (currently just the
 * hero headline). Kept separate from the heading/body fonts in
 * `app/layout.tsx` since it's a one-off accent, not a site-wide typeface.
 */
export const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
