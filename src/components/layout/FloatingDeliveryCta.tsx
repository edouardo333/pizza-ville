"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/business";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DeliveryIcon } from "@/components/icons";

// Gap kept between the CTA's top edge and the footer legal-links row once
// it scrolls into view, on top of whatever it already intrudes.
const FOOTER_CLEARANCE_GAP = 16;

/**
 * Site-wide floating delivery CTA. Fixed bottom-right, visible on every
 * page/scroll position. Rendered once in the root layout, inside
 * LanguageProvider, so it never needs to be duplicated per page.
 */
export function FloatingDeliveryCta() {
  const { t } = useLanguage();
  // Extra bottom offset added, on top of the base resting position, so the
  // CTA rides up above the footer instead of covering its legal links once
  // the footer becomes visible.
  const [footerClearance, setFooterClearance] = useState(0);

  useEffect(() => {
    // Track the footer's legal-links row specifically (rather than the
    // whole, much taller footer) so the CTA only rises as far as needed to
    // clear the links it would otherwise overlap.
    const legalRow =
      document.querySelector('footer nav[aria-label="Liens légaux"]') ?? document.querySelector("footer");
    if (!legalRow) return;

    let rafId = 0;
    const measure = () => {
      rafId = 0;
      const rect = legalRow.getBoundingClientRect();
      const intrusion = window.innerHeight - rect.top;
      setFooterClearance(intrusion > 0 ? intrusion + FOOTER_CLEARANCE_GAP : 0);
    };
    const schedule = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(measure);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <a
      href={BUSINESS.phoneHref}
      aria-label={t.floatingCta.ariaLabel}
      style={{
        ["--cta-footer-clearance" as string]: `${footerClearance}px`,
        // Keep hover/focus transitions on transform + shadow only — the
        // footer-clearance offset above must apply instantly on scroll,
        // not ease in behind it.
        transitionProperty: "transform, box-shadow",
      }}
      className="group fixed bottom-[calc(1rem+var(--cta-footer-clearance,0px))] right-4 z-50 flex cursor-pointer items-center gap-2.5 rounded-full border border-gold/40 bg-gradient-to-br from-charcoal via-walnut to-charcoal px-3.5 py-2.5 text-cream shadow-lg shadow-black/40 duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-brick/50 focus-visible:-translate-y-1 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal sm:bottom-[calc(2rem+var(--cta-footer-clearance,0px))] sm:right-6 sm:gap-3 sm:px-5 sm:py-3"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brick text-cream transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:bg-burgundy sm:h-10 sm:w-10">
        <DeliveryIcon className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gold sm:text-xs">
          {t.floatingCta.label}
        </span>
        <span className="text-xs font-bold text-cream sm:text-sm">{BUSINESS.phone}</span>
      </span>
    </a>
  );
}
