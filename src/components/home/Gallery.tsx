"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { galleryImage, restaurantImage } from "@/lib/images";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CloseIcon } from "@/components/icons";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface Photo {
  src: string;
  alt: string;
  label: string;
  /**
   * Tailwind grid placement classes (col/row span + explicit col/row start) for
   * this photo's cell. Explicit start positions are used — instead of relying on
   * grid-flow-dense auto-placement — so every breakpoint tiles the grid exactly,
   * with no leftover empty cells. Mobile classes are unprefixed, tablet uses
   * `sm:`, desktop uses `lg:`; a breakpoint without its own prefix inherits the
   * previous one.
   */
  cell: string;
  /** Tailwind object-position class tuned per photo so the subject stays visible when cropped. */
  position: string;
  /** `sizes` hint for next/image, matched to how wide this cell actually renders per breakpoint. */
  sizes: string;
}

const WIDE_SIZES = "(min-width: 1024px) 460px, (min-width: 640px) 420px, 70vw";
const NARROW_SIZES = "(min-width: 1024px) 220px, (min-width: 640px) 200px, 45vw";
const BANNER_SIZES = "(min-width: 1024px) 460px, (min-width: 640px) 620px, 92vw";

/**
 * 7 photos tiled edge-to-edge with explicit start positions, same discipline
 * as before: mobile is a 2-col grid (rows 1-8), tablet a 3-col grid (rows
 * 1-6), desktop a 4-col grid (rows 1-4) — every breakpoint's cell areas sum
 * to rows*cols exactly, so nothing leaves a gap. "À table" (table-01) is
 * sized identically to the other "À table" photo (table-02) — same
 * col-span-1 row-span-2 footprint — so the two carry equal visual weight.
 */
const PHOTOS: Photo[] = [
  {
    src: restaurantImage("exterieur-restaurant.png"),
    alt: "Devanture du restaurant Pizza Ville",
    label: "Extérieur",
    cell: "col-span-2 row-span-2 col-start-1 row-start-1",
    position: "object-center",
    sizes: WIDE_SIZES,
  },
  {
    src: restaurantImage("bar.png"),
    alt: "Bar de Pizza Ville",
    label: "Le bar",
    cell: "col-span-1 row-span-2 col-start-1 row-start-3 sm:col-start-3 sm:row-start-1",
    position: "object-[center_35%]",
    sizes: NARROW_SIZES,
  },
  {
    src: galleryImage("table-02.jpg"),
    alt: "Pizzas servies à table",
    label: "À table",
    cell: "col-span-1 row-span-2 col-start-2 row-start-3 sm:col-start-1 sm:row-start-3 lg:col-start-4 lg:row-start-1",
    position: "object-center",
    sizes: NARROW_SIZES,
  },
  {
    src: restaurantImage("interieure01.png"),
    alt: "Salle à manger de Pizza Ville",
    label: "Salle à manger",
    cell: "col-span-2 row-span-1 col-start-1 row-start-7 sm:col-span-3 sm:row-start-5 lg:col-span-2 lg:row-start-3",
    position: "object-[center_38%]",
    sizes: WIDE_SIZES,
  },
  {
    src: galleryImage("table-01.jpg"),
    alt: "Plats de crevettes servis à table",
    label: "À table",
    cell: "col-span-1 row-span-2 col-start-1 row-start-5 sm:col-start-2 sm:row-start-3 lg:col-start-3 lg:row-start-3",
    position: "object-[center_78%]",
    sizes: NARROW_SIZES,
  },
  {
    src: restaurantImage("interieure02.png"),
    alt: "Salle à manger de Pizza Ville",
    label: "Salle à manger",
    cell: "col-span-2 row-span-1 col-start-1 row-start-8 sm:col-span-3 sm:row-start-6 lg:col-span-2 lg:row-start-4",
    position: "object-[center_42%]",
    sizes: BANNER_SIZES,
  },
  {
    src: restaurantImage("terrassse.png"),
    alt: "Terrasse extérieure de Pizza Ville",
    label: "Terrasse",
    cell: "col-span-1 row-span-2 col-start-2 row-start-5 sm:col-start-3 sm:row-start-3 lg:col-start-4 lg:row-start-3",
    position: "object-[center_45%]",
    sizes: NARROW_SIZES,
  },
];

/**
 * Photo grid column for the gallery. Rendered as one half of the merged
 * WhyGallery composition — see WhyGallery.tsx for the shared section wrapper,
 * background and grid. The lightbox modal is portaled to `document.body` so
 * its `fixed` positioning is always relative to the viewport: any ancestor
 * here (this column's own `animate-fade-up` wrapper, WhyGallery's
 * `overflow-hidden` section, etc.) can otherwise become a containing block —
 * e.g. `animate-fade-up` leaves a non-`none` `transform` on the element via
 * `animation-fill-mode: both` — which would trap "fixed" inside that
 * ancestor's box instead of the viewport and make the controls unreachable.
 */
export function Gallery() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback((delta: number) => {
    setActiveIndex((i) => (i === null ? null : (i + delta + PHOTOS.length) % PHOTOS.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, step]);

  return (
    <div className="animate-fade-up stagger-2">
      <Eyebrow tone="gold">{t.gallery.eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl">{t.gallery.title}</h2>
      <p className="mt-4 max-w-md text-cream/65">{t.gallery.subtitle}</p>

      <div className="mt-8 grid grid-cols-2 auto-rows-[140px] gap-3 sm:auto-rows-[170px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[110px] lg:gap-2.5">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`group relative overflow-hidden rounded-xl text-left ring-1 ring-cream/5 ${photo.cell}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              loading="lazy"
              sizes={photo.sizes}
              className={`object-cover ${photo.position} transition-transform duration-500 ease-out group-hover:scale-105`}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal/85 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100 sm:h-20" />
            <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wide text-cream/90 transition-colors duration-300 group-hover:text-gold">
              {photo.label}
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[70] flex animate-fade-in items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold sm:right-8 sm:top-8"
              aria-label="Fermer"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold sm:left-6 sm:flex"
              aria-label="Image précédente"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold sm:right-6 sm:flex"
              aria-label="Image suivante"
            >
              ›
            </button>

            <div
              className="relative h-[78vh] w-[92vw] max-w-3xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PHOTOS[activeIndex].src}
                alt={PHOTOS[activeIndex].alt}
                fill
                sizes="(min-width: 768px) 720px, 92vw"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
