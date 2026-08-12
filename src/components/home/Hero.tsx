"use client";

import Image from "next/image";
import { Clock, ShoppingBag, Truck, Utensils } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { anton } from "@/lib/fonts";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useOpenStatus } from "@/lib/useOpenStatus";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";

const SERVICES = [
  { icon: ShoppingBag, key: "takeout" as const },
  { icon: Truck, key: "delivery" as const },
  { icon: Utensils, key: "dineIn" as const },
];

/**
 * Uniform icon badge — matches the "Visitez-nous" icon system (same size,
 * dark-red/brown fill, gold-icon treatment) so the hero service row reads
 * as part of the same premium visual language.
 */
function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-burgundy/25 ring-1 ring-inset ring-brick/30 sm:h-9 sm:w-9">
      {children}
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const status = useOpenStatus();

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-charcoal sm:min-h-[650px] lg:min-h-[720px]"
    >
      {/* Environment: the restaurant exterior stays the visible background of the whole hero. */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero01.png"
          alt="Devanture du restaurant Pizza Ville à Disraeli, à la tombée du jour"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="hero-bg-animate object-cover object-[64%_32%] sm:object-[60%_center]"
        />
        {/* Directional scrim: concentrated on the left for branding/text, fading out well before mid-image so the facade stays clearly visible. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(23,21,19,0.82) 0%, rgba(23,21,19,0.32) 26%, transparent 55%)",
          }}
        />
        {/* Light ground-level darkening — just enough for the service row and CTAs to stay readable. */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
        {/* Thin top scrim so the navbar reads cleanly over the sky. */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-charcoal/45 to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-col gap-6 py-10 sm:h-full sm:justify-center sm:gap-7 sm:py-16">
        {/* Logo — large brand mark, upper-left, standing in for a text eyebrow. */}
        <div className="relative order-1 aspect-[3/2] w-[220px] animate-fade-up sm:w-[320px] md:w-[400px] lg:w-[460px] xl:w-[500px]">
          <Image
            src="/images/logo/vrai-logo-transparent.png"
            alt="Pizza Ville — Brochetterie, Disraeli"
            fill
            priority
            sizes="(min-width: 1280px) 500px, (min-width: 640px) 40vw, 60vw"
            className="object-contain object-left drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)]"
          />
        </div>

        {/* Headline + subtitle */}
        <div className="order-2 animate-fade-up">
          <h1
            className={`${anton.className} max-w-xl text-[clamp(2.5rem,4.2vw+1.1rem,4.75rem)] uppercase leading-[0.98] tracking-tight drop-shadow-[0_4px_22px_rgba(0,0,0,0.55)]`}
          >
            <span className="block text-cream">{t.hero.headlineLine1}</span>
            <span className="mt-1.5 block text-gold sm:mt-2">{t.hero.headlineLine2}</span>
          </h1>
          <p className="mt-5 max-w-xl text-[13px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-cream/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:mt-6 sm:max-w-2xl sm:text-sm lg:max-w-3xl">
            {t.hero.sub}
          </p>
        </div>

        {/* Compact service row — open/closed always shown; emporter/livraison/sur place join in from sm+. */}
        <div className="order-3 flex flex-wrap items-center gap-x-5 gap-y-3 animate-fade-up sm:gap-x-6">
          <span className="inline-flex items-center gap-2.5">
            <IconBadge>
              <Clock className="h-4 w-4 text-mustard sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
            </IconBadge>
            <StatusBadge status={status} />
          </span>

          {SERVICES.map(({ icon: Icon, key }) => (
            <span key={key} className="hidden items-center gap-2.5 sm:inline-flex">
              <span className="hidden h-7 w-px shrink-0 bg-cream/15 sm:block" aria-hidden />
              <IconBadge>
                <Icon className="h-4 w-4 text-mustard sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
              </IconBadge>
              <span className="text-xs font-semibold uppercase tracking-wide text-cream/90 sm:text-sm">
                {t.quickInfo[key]}
              </span>
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="order-4 flex flex-col gap-3 animate-fade-up sm:flex-row sm:items-center">
          <Button
            href="/menu"
            variant="primary"
            className="!h-[52px] justify-center !text-sm font-bold uppercase tracking-wider shadow-md shadow-brick/25 hover:!-translate-y-0.5 hover:!bg-[#c2493c] hover:!shadow-lg hover:!shadow-brick/35"
            icon={<ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />}
          >
            {t.hero.ctaPrimary}
          </Button>
          <Button
            href={BUSINESS.phoneHref}
            variant="outlineGold"
            className="!h-[52px] justify-center !text-sm font-bold tracking-wide shadow-md shadow-black/20 hover:!-translate-y-0.5 hover:!border-gold hover:!bg-gold hover:!text-charcoal hover:!shadow-lg hover:!shadow-gold/35"
            icon={<PhoneIcon className="h-[18px] w-[18px]" />}
          >
            {t.hero.ctaSecondary}
          </Button>
        </div>
      </Container>
    </section>
  );
}
