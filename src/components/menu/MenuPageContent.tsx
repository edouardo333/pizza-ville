"use client";

import { BUSINESS, DIRECTIONS_URL } from "@/lib/business";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { MapPinIcon, PhoneIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function MenuPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-charcoal py-20 lg:py-24">
        <Container className="max-w-2xl text-center animate-fade-up">
          <Eyebrow tone="gold" className="justify-center">
            {t.menuPage.eyebrow}
          </Eyebrow>
          <h1 className="mt-4 text-4xl font-bold text-cream sm:text-5xl">{t.menuPage.title}</h1>
          <p className="mt-4 text-cream/70">{t.menuPage.subtitle}</p>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {t.menuPage.categories.map((category) => (
              <div
                key={category.name}
                className="rounded-2xl border border-beige bg-white/70 p-6 text-center shadow-sm shadow-charcoal/5"
              >
                <h2 className="text-lg font-semibold text-charcoal">{category.name}</h2>
                <p className="mt-1.5 text-sm text-charcoal/60">{category.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-xl rounded-3xl border border-beige bg-beige/50 p-8 text-center sm:p-10">
            <h3 className="text-xl font-semibold text-charcoal">{t.menuPage.noteTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{t.menuPage.noteBody}</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={BUSINESS.phoneHref} variant="primary" icon={<PhoneIcon className="h-4 w-4" />}>
                {t.menuPage.callCta}
              </Button>
              <Button
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={<MapPinIcon className="h-4 w-4" />}
              >
                {t.menuPage.directionsCta}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
