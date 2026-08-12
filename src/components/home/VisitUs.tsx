"use client";

import { BUSINESS, DIRECTIONS_URL, FULL_ADDRESS, MAPS_EMBED_URL, MAPS_PLACE_URL } from "@/lib/business";
import { WEEKDAY_ORDER, WEEKLY_HOURS, formatHourMinutes, getOpenStatus } from "@/lib/hours";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useOpenStatus } from "@/lib/useOpenStatus";
import { FacebookIcon, MapPinIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatusRowLabel } from "@/components/ui/StatusBadge";
import { Clock, MapPin, Navigation, Phone, ShoppingBag, Truck, Utensils } from "lucide-react";

const SERVICES = [
  { icon: Utensils, key: "dineIn" as const },
  { icon: ShoppingBag, key: "takeout" as const },
  { icon: Truck, key: "delivery" as const },
];

/**
 * Uniform icon badge — one consistent circle (size, dark-red/brown fill, gold
 * icon treatment) reused by every info icon in this section: address, phone,
 * hours and services.
 */
function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-burgundy/25 ring-1 ring-inset ring-brick/30">
      {children}
    </span>
  );
}

export function VisitUs() {
  const { t } = useLanguage();
  const todayWeekday = getOpenStatus().weekday;
  const status = useOpenStatus();

  return (
    <section id="contact" className="scroll-mt-24 bg-charcoal py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Contact info — first in DOM so it also leads on mobile, map follows. */}
        <div className="order-1 animate-fade-up">
          <Eyebrow tone="gold">{t.visit.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl">{t.visit.title}</h2>
          <p className="mt-3 max-w-sm text-cream/60">{t.visit.subtitle}</p>

          <div className="mt-9 grid gap-x-6 gap-y-7 sm:grid-cols-[1fr_1.3fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <IconBadge>
                  <MapPin className="h-5 w-5 text-mustard" strokeWidth={2} />
                </IconBadge>
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {t.visit.addressLabel}
                  </h3>
                  <p className="mt-1 text-[15px] leading-snug text-cream/85">{FULL_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <IconBadge>
                  <Phone className="h-5 w-5 text-mustard" strokeWidth={2} />
                </IconBadge>
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {t.visit.phoneLabel}
                  </h3>
                  <a
                    href={BUSINESS.phoneHref}
                    className="mt-1 block text-[15px] font-medium text-cream/85 transition-colors hover:text-gold"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              <div className="border-t border-cream/10 pt-6">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {t.visit.servicesLabel}
                </h3>
                <ul className="mt-3.5 space-y-3">
                  {SERVICES.map(({ icon: Icon, key }) => (
                    <li key={key} className="flex items-center gap-3.5 text-sm text-cream/80">
                      <IconBadge>
                        <Icon className="h-5 w-5 text-mustard" strokeWidth={2} />
                      </IconBadge>
                      {t.quickInfo[key]}
                    </li>
                  ))}
                </ul>
              </div>

              {BUSINESS.facebookUrl && (
                <a
                  href={BUSINESS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors duration-200 hover:text-[#1877F2]"
                >
                  <FacebookIcon className="h-4 w-4" />
                  {t.visit.facebookCta}
                </a>
              )}
            </div>

            <div>
              <div className="flex items-center gap-4">
                <IconBadge>
                  <Clock className="h-5 w-5 text-mustard" strokeWidth={2} />
                </IconBadge>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {t.visit.hoursLabel}
                </h3>
              </div>
              <ul className="mt-4 space-y-1">
                {WEEKDAY_ORDER.map((day) => {
                  const isToday = day === todayWeekday;
                  return (
                    <li
                      key={day}
                      className={`flex items-center justify-between gap-2.5 rounded-xl px-2.5 py-2 text-sm transition-colors ${
                        isToday
                          ? "bg-gold/12 font-semibold text-cream ring-1 ring-inset ring-gold/25"
                          : "text-cream/60"
                      }`}
                    >
                      <span className="shrink-0">{t.days[day]}</span>
                      <span className="flex items-center justify-end gap-x-2 whitespace-nowrap">
                        <span className="whitespace-nowrap tabular-nums">
                          {formatHourMinutes(WEEKLY_HOURS[day].open)}–{formatHourMinutes(WEEKLY_HOURS[day].close)}
                        </span>
                        {isToday && <StatusRowLabel status={status} />}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href={BUSINESS.phoneHref}
              variant="primary"
              icon={<Phone className="h-4 w-4" strokeWidth={2} />}
              className="sm:flex-1 sm:justify-center hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brick/30"
            >
              {t.visit.callCta}
            </Button>
            <Button
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineGold"
              icon={<Navigation className="h-4 w-4" strokeWidth={2} />}
              className="sm:flex-1 sm:justify-center"
            >
              {t.visit.directionsCta}
            </Button>
          </div>
        </div>

        {/* Map — second on mobile, right column on desktop. */}
        <div className="order-2 relative aspect-[4/3] overflow-hidden rounded-[28px] border border-cream/10 shadow-2xl shadow-black/40 ring-1 ring-gold/10 lg:aspect-auto lg:min-h-[480px]">
          <iframe
            src={MAPS_EMBED_URL}
            title="Carte — Pizza Ville, 585 Av. Champlain, Disraeli"
            className="absolute inset-0 h-full w-full grayscale-[20%] contrast-[1.08] saturate-[1.05]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-charcoal/45 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-transparent p-5">
            <div className="pointer-events-auto flex flex-wrap items-center justify-between gap-3">
              <p className="max-w-xs text-xs leading-relaxed text-cream/80">{t.visit.mapCaption}</p>
              <a
                href={MAPS_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gold px-4 py-2 text-xs font-semibold text-charcoal shadow-sm shadow-black/20 transition-all hover:scale-[1.03] hover:bg-mustard active:scale-[0.98]"
              >
                <MapPinIcon className="h-3.5 w-3.5" />
                {t.visit.openInMaps}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
