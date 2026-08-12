"use client";

import Image from "next/image";
import { BUSINESS } from "@/lib/business";
import { teamImage } from "@/lib/images";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ArrowRightIcon, MapPinIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function OurStory() {
  const { t } = useLanguage();

  return (
    <section id="a-propos" className="scroll-mt-24 bg-cream py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Single large horizontal shot of the owner — the human face behind
            Pizza Ville is the whole visual story here, no secondary photo. */}
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-xl shadow-brick/20">
          <Image
            src={teamImage("propriétaire.png")}
            alt="Le propriétaire de Pizza Ville"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>

        <div className="animate-fade-up pt-2 sm:pt-0 lg:pl-6">
          <Eyebrow>{t.story.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-[2.75rem]">
            {t.story.title}
          </h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-gold to-transparent" aria-hidden />
          <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-charcoal/70 sm:text-base">
            {t.story.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-charcoal/60">
            <MapPinIcon className="h-4 w-4 shrink-0 text-brick" />
            {BUSINESS.address.street} · {BUSINESS.address.city}, {BUSINESS.address.province}
          </p>

          <div className="mt-8">
            <Button
              href="/menu"
              variant="primaryPremium"
              className="uppercase tracking-wider"
              icon={
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              }
            >
              {t.story.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
