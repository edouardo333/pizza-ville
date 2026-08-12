"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/business";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CloseIcon, GlobeIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";

const NAV_ITEMS: {
  key: "accueil" | "menu" | "apropos" | "avis" | "contact";
  href: string;
  sectionId?: string;
}[] = [
  { key: "accueil", href: "/#accueil", sectionId: "accueil" },
  { key: "menu", href: "/menu" },
  { key: "apropos", href: "/#a-propos", sectionId: "a-propos" },
  { key: "avis", href: "/#avis", sectionId: "avis" },
  { key: "contact", href: "/#contact", sectionId: "contact" },
];

const SECTION_IDS = ["accueil", "a-propos", "avis", "contact"];

export function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll-spy: highlight the nav item matching whichever homepage section is in view.
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const isItemActive = (item: (typeof NAV_ITEMS)[number]) =>
    item.key === "menu" ? pathname === "/menu" : pathname === "/" && item.sectionId === activeSection;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-charcoal/55 via-charcoal/25 to-transparent backdrop-blur-[2px]"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/#accueil"
          className="relative block h-14 w-[150px] shrink-0 sm:h-16 sm:w-[180px]"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo/vrai-logo-transparent.png"
            alt="Pizza Ville — Disraeli"
            fill
            sizes="180px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`group relative py-1 text-sm font-medium transition-colors ${
                  active ? "text-gold" : "text-cream/85 hover:text-cream"
                }`}
              >
                {t.nav[item.key]}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-gold transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 rounded-full border border-cream/25 px-3 py-1.5 text-xs font-semibold text-cream/85 transition-all hover:border-gold hover:text-gold"
            aria-label="Switch language"
          >
            <GlobeIcon className="h-3.5 w-3.5" />
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-brick px-5 py-2.5 text-sm font-semibold text-cream shadow-sm shadow-brick/30 transition-all hover:-translate-y-px hover:bg-burgundy hover:shadow-md hover:shadow-burgundy/30"
          >
            <PhoneIcon className="h-4 w-4" />
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      <div
        inert={!open}
        className={`grid overflow-hidden bg-charcoal transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 pb-6 pt-2">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3.5 text-base font-medium transition-colors ${
                    active ? "bg-cream/5 text-gold" : "text-cream/90 hover:bg-cream/5"
                  }`}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}

            <div className="mt-3 flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brick px-5 py-3.5 text-sm font-semibold text-cream"
              >
                <PhoneIcon className="h-4 w-4" />
                {BUSINESS.phone}
              </a>
              <button
                type="button"
                onClick={toggleLang}
                className="inline-flex h-12 items-center gap-1.5 rounded-full border border-cream/25 px-4 text-sm font-semibold text-cream/85"
                aria-label="Switch language"
              >
                <GlobeIcon className="h-4 w-4" />
                {lang === "fr" ? "EN" : "FR"}
              </button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
