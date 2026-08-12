import { Container } from "@/components/ui/Container";
import { Gallery } from "./Gallery";
import { WhyPizzaVille } from "./WhyPizzaVille";

/**
 * Merges "Pourquoi Pizza Ville" and "Galerie" into one continuous section —
 * a single dark, warm-lit backdrop with a two-column composition at desktop
 * (story left, gallery right) that stacks on tablet/mobile with no visual
 * break between the two halves. See WhyPizzaVille.tsx and Gallery.tsx for
 * the column content, kept unchanged.
 */
export function WhyGallery() {
  return (
    <section className="bg-grain relative overflow-hidden bg-charcoal py-20 lg:py-28">
      {/* Warm atmosphere: soft amber/brown glows tucked into the corners, a
          faint red warmth low-left, no visible gradient bands. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 48% 38% at 90% 4%, rgba(199,154,69,0.12), transparent 62%), " +
            "radial-gradient(ellipse 42% 40% at 3% 96%, rgba(168,59,50,0.15), transparent 64%), " +
            "radial-gradient(ellipse 36% 32% at 98% 90%, rgba(214,166,46,0.07), transparent 60%), " +
            "radial-gradient(ellipse 32% 28% at 2% 6%, rgba(58,36,27,0.4), transparent 62%)",
        }}
        aria-hidden
      />

      {/* A few tiny blurred light particles for depth — subtle, desktop only. */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        <span className="absolute left-[8%] top-[22%] h-1.5 w-1.5 rounded-full bg-gold/50 blur-[2px]" />
        <span className="absolute left-[47%] top-[10%] h-1 w-1 rounded-full bg-mustard/40 blur-[1px]" />
        <span className="absolute right-[12%] top-[46%] h-1 w-1 rounded-full bg-cream/30 blur-[1px]" />
        <span className="absolute left-[40%] bottom-[14%] h-2 w-2 rounded-full bg-brick/30 blur-[3px]" />
      </div>

      <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
        <WhyPizzaVille />
        <Gallery />
      </Container>
    </section>
  );
}
