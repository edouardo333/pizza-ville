"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImage } from "@/lib/images";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ArrowRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Lightbox } from "@/components/ui/Lightbox";

// One appetizing photo per category, each paired with an object-position
// tuned by hand so the food itself stays the focal point in the wide
// landscape crop.
const CATEGORY_PHOTOS = [
  { image: galleryImage("plat-03.jpg"), position: "50% 58%" }, // Pizzas — slice + crust
  { image: galleryImage("plat-05.jpg"), position: "50% 42%" }, // Brochettes & grillades — seared, grilled fillet
  { image: galleryImage("plat-14.jpg"), position: "50% 55%" }, // Poutines & classiques — poutine, fries + gravy
  { image: galleryImage("plat-02.jpg"), position: "50% 55%" }, // Pâtes, salades & autres — loaded plate + fries
];

export function MenuPreview() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="bg-grain relative overflow-hidden bg-gradient-to-b from-walnut via-walnut to-charcoal py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 12% 0%, rgba(215,166,46,0.10), transparent 60%), radial-gradient(ellipse 55% 40% at 100% 100%, rgba(168,59,50,0.14), transparent 65%)",
        }}
        aria-hidden
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <Eyebrow tone="gold" className="justify-center">
            {t.menuPreview.eyebrow}
          </Eyebrow>
          <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl">{t.menuPreview.title}</h2>
          <p className="mt-4 text-cream/65">{t.menuPreview.subtitle}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7">
          {t.menuPreview.categories.map((category, i) => (
            <button
              key={category.title}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`Agrandir la photo : ${category.title}`}
              className="group relative w-full cursor-pointer overflow-hidden rounded-3xl text-left shadow-lg shadow-black/30 ring-1 ring-cream/10 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11]">
                <Image
                  src={CATEGORY_PHOTOS[i].image}
                  alt={category.title}
                  fill
                  sizes="(min-width: 640px) 46vw, 100vw"
                  style={{ objectPosition: CATEGORY_PHOTOS[i].position }}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <span className="block h-px w-8 bg-gold/70 transition-all duration-300 group-hover:w-12" />
                <h3 className="mt-3 text-2xl font-bold text-cream sm:text-[1.75rem]">{category.title}</h3>
                <p className="mt-1.5 max-w-sm text-sm text-cream/75">{category.subtitle}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold/0 transition-colors duration-300 group-hover:ring-gold/50" />
            </button>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            href="/menu"
            variant="goldCta"
            icon={<ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
          >
            {t.menuPreview.cta}
          </Button>
        </div>
      </Container>

      <Lightbox
        images={t.menuPreview.categories.map((category, i) => ({
          src: CATEGORY_PHOTOS[i].image,
          alt: category.title,
        }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
