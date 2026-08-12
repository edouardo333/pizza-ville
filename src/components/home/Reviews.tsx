"use client";

import { BUSINESS, REVIEWS_URL } from "@/lib/business";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ArrowRightIcon, GoogleIcon, StarIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Real Google review content, transcribed verbatim (wording, punctuation and
 * quirks preserved as written) from the original screenshots in
 * public/images/reviews/*.jpg. Rendered as text instead of screenshots so
 * type and spacing stay legible at any size — but the content itself is
 * the unedited, un-truncated review, not a rewrite.
 */
const REVIEWS: {
  name: string;
  initial: string;
  meta: string;
  time: string;
  text: string;
  avatarBg: string;
  avatarText: string;
}[] = [
  {
    name: "Sebastien Guay",
    initial: "S",
    meta: "Local Guide · 12 avis · 1 photo",
    time: "Modifié il y a 4 mois",
    text: "La place parfaite pour déguster un excellent repas préparé avec amour par un chef dont la réputation en terme d'excellence n'est plus à faire ..en plus de la pizza qui est la meilleure de l'endroit ..vous voudrez y retourner et essayer le menu varié c'est assuré..bravo aussi le service de livraison rapide est imbattable en plus de desservir un grand secteur...",
    avatarBg: "bg-brick",
    avatarText: "text-cream",
  },
  {
    name: "Alexandre Paquin",
    initial: "A",
    meta: "Local Guide · 36 avis · 2 photos",
    time: "il y a 4 mois",
    text: "Chaque fois que je commande je suis toujours satisfait la nourriture est très bonne, de méchant bonne portion et on mange très bien et toujours bien répondu je recommandes x 1000",
    avatarBg: "bg-mustard",
    avatarText: "text-charcoal",
  },
  {
    name: "Martin Goli",
    initial: "M",
    meta: "Local Guide · 77 avis · 4 photos",
    time: "il y a 5 mois",
    text: "Premiere visite et jai ete servie en 5 minutes pour un club poutine et je nai jamais manger de sauce a poutine meilleure que celle la...je vais revenir meme si je suis de nicolet",
    avatarBg: "bg-burgundy",
    avatarText: "text-cream",
  },
  {
    name: "Josée Ouellette",
    initial: "J",
    meta: "6 avis",
    time: "il y a 10 mois",
    text: "Petit Restaurant dont le décor est à la fois festif et chaleureux ! L'acceuil et le service est 100% parfait. La nourriture ; Délicieux vous dites... WOW, tout les généreux plats qui nous ont été servi, nous avons adoré et dévoré. Vous êtes fan de pizza aux fruits de mers, C'EST LA MEILLEURE que j'aie mangé, la garniture est plus que généreuse et la croûte est goûteuse. Nous étions de passage pour 2 semaines et avons été 3 fois ! Certain pourraient mentionné que les prix sont un peu élevé d'ailleurs... mais ailleurs, ils ne vous offriront pas la même qualité !!! ça reste très abordable.",
    avatarBg: "bg-walnut",
    avatarText: "text-cream",
  },
  {
    name: "ejcLlamaland",
    initial: "E",
    meta: "Local Guide · 14 avis · 1 photo",
    time: "il y a 10 mois",
    text: "My wife and I both had salmon for dinner (she had a Caesar's salad with salmon and I had a salmon filet). Both were excellent. We ate here on a Monday night in late September. The owner (also the chef) was super friendly and made us excellent cocktails. The waitress was very friendly and attentive. I would highly recommend.",
    avatarBg: "bg-gold",
    avatarText: "text-charcoal",
  },
  {
    name: "Nancy Lamothe",
    initial: "N",
    meta: "Local Guide · 67 avis",
    time: "il y a 2 ans",
    text: "La pizza est tellement bonne et les crevettes également. Ça vaut le détour QUOI ?..Il faut bien manger et tant qu'à manger j'aime que ce soit BON ..VOILA Jadore Thumbs up !",
    avatarBg: "bg-charcoal",
    avatarText: "text-cream",
  },
];

export function Reviews() {
  const { t } = useLanguage();
  const fullStars = Math.round(BUSINESS.reviews.rating);

  return (
    <section id="avis" className="scroll-mt-24 bg-cream py-20 lg:py-28">
      <Container className="max-w-[90rem]">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-12 xl:gap-14">
          <div className="animate-fade-up lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>{t.reviews.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-charcoal sm:text-4xl">{t.reviews.title}</h2>
            <p className="mt-3 text-charcoal/65">{t.reviews.subtitle}</p>

            <div className="mt-7 overflow-hidden rounded-2xl border border-beige bg-white shadow-sm shadow-walnut/5">
              <div className="flex items-center gap-2 border-b border-beige bg-beige/40 px-6 py-3.5">
                <GoogleIcon className="h-4.5 w-4.5" />
                <span className="text-xs font-semibold uppercase tracking-wide text-charcoal/60">
                  Google
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold tracking-tight text-charcoal">
                    {BUSINESS.reviews.rating}
                  </span>
                  <span className="text-sm font-medium text-charcoal/45">{t.reviews.ratingOutOf}</span>
                </div>
                <div className="mt-3 flex gap-1 text-gold drop-shadow-sm" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className={`h-5 w-5 ${i < fullStars ? "" : "opacity-20"}`} />
                  ))}
                </div>
                <p className="mt-2.5 text-[15px] font-semibold text-charcoal/85">
                  {BUSINESS.reviews.count} {t.reviews.reviewsCount}
                </p>

                <div className="mt-8 border-t border-beige pt-5">
                  <Button
                    href={REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="goldPremium"
                    icon={<ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
                    className="w-full"
                  >
                    {t.reviews.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-5">
            {REVIEWS.map((review) => (
              <article
                key={review.name}
                className="group rounded-2xl border border-beige bg-white p-6 shadow-sm shadow-walnut/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-walnut/10 lg:p-7"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-semibold ${review.avatarBg} ${review.avatarText}`}
                    aria-hidden
                  >
                    {review.initial}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-charcoal">{review.name}</p>
                    <p className="truncate text-xs text-charcoal/45">{review.meta}</p>
                  </div>
                  <GoogleIcon className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <div className="flex gap-0.5 text-gold" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <span className="text-xs text-charcoal/40">{review.time}</span>
                </div>

                <p className="mt-3.5 whitespace-pre-line text-[0.95rem] leading-[1.65] text-charcoal/70">
                  {review.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
