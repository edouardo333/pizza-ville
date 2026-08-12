import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { BUSINESS } from "@/lib/business";
import { WEEKDAY_ORDER, WEEKLY_HOURS, formatHourMinutes } from "@/lib/hours";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { Footer } from "@/components/layout/Footer";
import { FloatingDeliveryCta } from "@/components/layout/FloatingDeliveryCta";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pizza Ville Disraeli | Restaurant, Pizza, Brochettes & Plus",
    template: "%s | Pizza Ville Disraeli",
  },
  description:
    "Découvrez Pizza Ville à Disraeli : pizzas, brochettes, plats maison, service sur place, pour emporter et livraison.",
  openGraph: {
    title: "Pizza Ville Disraeli | Restaurant, Pizza, Brochettes & Plus",
    description:
      "Découvrez Pizza Ville à Disraeli : pizzas, brochettes, plats maison, service sur place, pour emporter et livraison.",
    siteName: "Pizza Ville Disraeli",
    locale: "fr_CA",
    type: "website",
    images: ["/images/hero/hero01.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizza Ville Disraeli | Restaurant, Pizza, Brochettes & Plus",
    description:
      "Découvrez Pizza Ville à Disraeli : pizzas, brochettes, plats maison, service sur place, pour emporter et livraison.",
    images: ["/images/hero/hero01.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171513",
};

const dayNameEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: BUSINESS.name,
    servesCuisine: ["Pizza", "Restaurant familial"],
    telephone: BUSINESS.phone,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.province,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    ...(BUSINESS.facebookUrl ? { sameAs: [BUSINESS.facebookUrl] } : {}),
    openingHoursSpecification: WEEKDAY_ORDER.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayNameEn[day],
      opens: formatHourMinutes(WEEKLY_HOURS[day].open).replace("h", ":"),
      closes: formatHourMinutes(WEEKLY_HOURS[day].close).replace("h", ":"),
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.reviews.rating,
      reviewCount: BUSINESS.reviews.count,
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()) }}
        />
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-charcoal"
          >
            Aller au contenu principal
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingDeliveryCta />
        </LanguageProvider>
      </body>
    </html>
  );
}
