"use client";

import Image from "next/image";
import { BUSINESS, DIRECTIONS_URL } from "@/lib/business";
import { galleryImage } from "@/lib/images";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ArrowRightIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="bg-grain relative overflow-hidden bg-charcoal py-24 lg:py-32">
      {/* Photographic backdrop + layered color wash for a richer, deeper red/burgundy field */}
      <div className="absolute inset-0">
        <Image
          src={galleryImage("plat-11.jpg")}
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="scale-110 object-cover opacity-45 saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/92 via-burgundy/82 to-brick/95" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(215,166,46,0.18), transparent 65%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(168,59,50,0.4), transparent 70%)",
          }}
          aria-hidden
        />
      </div>

      {/* Thin gold frame lines — gives the closing block a deliberate, designed edge */}
      <div
        className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden
      />

      <Container className="relative z-10 mx-auto max-w-2xl text-center animate-fade-up">
        <span className="mx-auto mb-6 block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden />
        <h2 className="text-4xl font-bold leading-[1.08] text-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)] sm:text-5xl lg:text-6xl">
          {t.finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-cream/80 sm:text-lg">{t.finalCta.subtitle}</p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href="/menu"
            variant="gold"
            className="!px-9 !py-4 !text-base shadow-lg shadow-gold/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/40"
            icon={<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
          >
            {t.finalCta.menuCta}
          </Button>

          <div className="flex gap-3">
            <Button
              href={BUSINESS.phoneHref}
              variant="outlineLight"
              className="!border-cream/35 !bg-cream/[0.05] backdrop-blur-sm transition-all duration-200 hover:!border-cream hover:-translate-y-0.5"
              icon={<PhoneIcon className="h-4 w-4" />}
            >
              {t.finalCta.callCta}
            </Button>
            <Button
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineLight"
              className="!border-cream/35 !bg-cream/[0.05] backdrop-blur-sm transition-all duration-200 hover:!border-cream hover:-translate-y-0.5"
              icon={<MapPinIcon className="h-4 w-4" />}
            >
              {t.finalCta.directionsCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
