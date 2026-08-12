"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow } from "@/components/ui/Eyebrow";

const STAGGER = ["stagger-1", "stagger-2", "stagger-3"] as const;

/**
 * Text column for the "Pourquoi Pizza Ville" story. Rendered as one half of the
 * merged WhyGallery composition — see WhyGallery.tsx for the shared section
 * wrapper, background and grid.
 */
export function WhyPizzaVille() {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-up">
      <Eyebrow tone="gold">{t.why.eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
        {t.why.title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-gold to-transparent" aria-hidden />
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/70 sm:text-base">
        {t.why.subtitle}
      </p>

      <div className="mt-10 border-t border-cream/10">
        {t.why.items.map((item, i) => (
          <div
            key={item.title}
            className={`animate-fade-up group flex gap-5 border-b border-cream/10 py-6 transition-all duration-300 hover:translate-x-1.5 sm:gap-7 ${STAGGER[i]}`}
          >
            <span className="font-heading text-2xl leading-none text-gold/50 transition-colors duration-300 group-hover:text-gold sm:text-3xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-cream sm:text-xl">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-cream/65 sm:text-[15px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
