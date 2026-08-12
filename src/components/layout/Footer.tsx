"use client";

import Image from "next/image";
import Link from "next/link";
import { BUSINESS, DIRECTIONS_URL, FULL_ADDRESS } from "@/lib/business";
import { WEEKDAY_ORDER, WEEKLY_HOURS, formatHourMinutes, getOpenStatus } from "@/lib/hours";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useOpenStatus } from "@/lib/useOpenStatus";
import { FacebookFilledIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { StatusRowLabel } from "@/components/ui/StatusBadge";

const NAV_ITEMS: { key: "accueil" | "menu" | "apropos" | "avis" | "contact"; href: string }[] = [
  { key: "accueil", href: "/#accueil" },
  { key: "menu", href: "/menu" },
  { key: "apropos", href: "/#a-propos" },
  { key: "avis", href: "/#avis" },
  { key: "contact", href: "/#contact" },
];

const HEADING_CLASSES =
  "mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold";

export function Footer() {
  const { t, lang, toggleLang } = useLanguage();
  const year = new Date().getFullYear();
  const todayWeekday = getOpenStatus().weekday;
  const status = useOpenStatus();

  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-charcoal text-cream/80">
      {/* Faint top glow — echoes the final CTA above for a cohesive, premium close */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48"
        style={{ background: "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(199,154,69,0.06), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-[1600px] gap-12 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-10 lg:px-10 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1 lg:pr-6">
          <div className="relative mb-5 h-28 w-full max-w-[320px] sm:h-32 sm:max-w-[360px]">
            <Image
              src="/images/logo/vrai-logo-transparent.png"
              alt="Pizza Ville — Disraeli"
              fill
              sizes="360px"
              className="object-contain object-left"
            />
          </div>
          <p className="max-w-xs text-[15px] leading-relaxed text-cream/60">{t.footer.tagline}</p>

          <div className="mt-6 flex items-center gap-3">
            {BUSINESS.facebookUrl ? (
              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/75 transition-all duration-300 hover:border-[#1877F2] hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:shadow-[0_0_16px_rgba(24,119,242,0.35)] hover:scale-105"
                aria-label="Facebook"
              >
                <FacebookFilledIcon className="h-5 w-5" />
              </a>
            ) : (
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/10 text-cream/30"
                aria-label="Facebook — lien à venir"
                title="Facebook — lien à venir"
              >
                <FacebookFilledIcon className="h-5 w-5" />
              </span>
            )}
            <button
              type="button"
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-4 py-2.5 text-xs font-semibold text-cream/80 transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              {lang === "fr" ? "English" : "Français"}
            </button>
          </div>
        </div>

        <div className="lg:border-l lg:border-cream/10 lg:pl-10">
          <h3 className={HEADING_CLASSES}>
            <span className="h-px w-4 bg-gold/60" aria-hidden />
            {t.footer.navTitle}
          </h3>
          <ul className="space-y-3 text-[15px]">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 text-cream/65 transition-colors duration-200 hover:text-cream"
                >
                  <span className="h-px w-0 bg-gold transition-all duration-200 group-hover:w-3" aria-hidden />
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:border-l lg:border-cream/10 lg:pl-10">
          <h3 className={HEADING_CLASSES}>
            <span className="h-px w-4 bg-gold/60" aria-hidden />
            {t.footer.contactTitle}
          </h3>
          <ul className="space-y-3.5 text-[15px] text-cream/65">
            <li>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 transition-colors duration-200 hover:text-cream"
              >
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold transition-transform duration-200 group-hover:scale-110" />
                <span>{FULL_ADDRESS}</span>
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.phoneHref}
                className="group flex items-center gap-2.5 transition-colors duration-200 hover:text-cream"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 text-gold transition-transform duration-200 group-hover:scale-110" />
                {BUSINESS.phone}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:border-l lg:border-cream/10 lg:pl-10">
          <h3 className={HEADING_CLASSES}>
            <span className="h-px w-4 bg-gold/60" aria-hidden />
            {t.footer.hoursTitle}
          </h3>
          <ul className="space-y-2 text-[15px] text-cream/65">
            {WEEKDAY_ORDER.map((day) => {
              const isToday = day === todayWeekday;
              return (
                <li key={day} className="flex items-center justify-between gap-4">
                  <span className={isToday ? "font-semibold text-cream" : undefined}>{t.days[day]}</span>
                  <span className="flex items-center gap-3">
                    {isToday && <StatusRowLabel status={status} />}
                    <span className={`tabular-nums ${isToday ? "text-cream/80" : "text-cream/50"}`}>
                      {formatHourMinutes(WEEKLY_HOURS[day].open)}–{formatHourMinutes(WEEKLY_HOURS[day].close)}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center gap-3 px-5 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-center leading-relaxed sm:text-left">
            © {year} {BUSINESS.name}. {t.footer.rights}
            <span className="mx-1.5 text-cream/20" aria-hidden>
              ·
            </span>
            {t.footer.designedBy}{" "}
            <a
              href="https://brochudigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/55 transition-colors duration-200 hover:text-gold"
            >
              Brochu Digital
            </a>
          </p>

          <nav aria-label="Liens légaux" className="flex items-center gap-4">
            <span className="cursor-default transition-colors duration-200 hover:text-cream/80">
              {t.footer.privacyPolicy}
            </span>
            <span className="text-cream/20" aria-hidden>
              ·
            </span>
            <span className="cursor-default transition-colors duration-200 hover:text-cream/80">
              {t.footer.terms}
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
