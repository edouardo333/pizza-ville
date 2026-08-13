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

// One well-lit, appetizing photo per category, each paired with an
// object-position tuned by hand so the food itself — not the plate rim,
// the table, or a stray hand in frame — stays the focal point once the
// image is cropped into a fixed-height card.
const ITEMS = [
  { image: galleryImage("plat-03.jpg"), position: "50% 62%" }, // Pizza — slice + crust, wall cropped out
  { image: galleryImage("plat-08.jpg"), position: "50% 40%" }, // Fruits de mer — fried shrimp & calamari
  { image: galleryImage("plat-07.jpg"), position: "50% 45%" }, // Pâtes & lasagne — meat sauce close-up
  { image: galleryImage("plat-04.jpg"), position: "50% 48%" }, // Subs & club sandwichs — sub + fries, top-down
  { image: galleryImage("entree-01.jpg"), position: "50% 18%" }, // Pain à l'ail & fondu parmesan — golden, cheesy loaf
  { image: galleryImage("dessert-01.jpg"), position: "50% 42%" }, // Desserts — cheesecake with berry coulis
];

export function Incontournables() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="bg-beige py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <Eyebrow className="justify-center">{t.incontournables.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold text-charcoal sm:text-4xl">{t.incontournables.title}</h2>
          <p className="mt-4 text-charcoal/65">{t.incontournables.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {t.incontournables.items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`Agrandir la photo : ${item.name}`}
              className="group relative w-full cursor-pointer overflow-hidden rounded-2xl bg-charcoal text-left shadow-md shadow-charcoal/15 ring-1 ring-charcoal/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/25"
            >
              <div className="relative h-[300px] w-full overflow-hidden sm:h-[340px] lg:h-[380px]">
                <Image
                  src={ITEMS[i].image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  style={{ objectPosition: ITEMS[i].position }}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-cream sm:text-2xl">{item.name}</h3>
                <p className="mt-1.5 max-w-xs text-sm text-cream/80">{item.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition-colors duration-300 group-hover:ring-gold/40" />
            </button>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/menu" variant="primaryCta" icon={<ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}>
            {t.incontournables.cta}
          </Button>
        </div>
      </Container>

      <Lightbox
        images={t.incontournables.items.map((item, i) => ({ src: ITEMS[i].image, alt: item.name }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
