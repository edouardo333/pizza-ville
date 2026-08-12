import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Incontournables } from "@/components/home/Incontournables";
import { MenuPreview } from "@/components/home/MenuPreview";
import { OurStory } from "@/components/home/OurStory";
import { Reviews } from "@/components/home/Reviews";
import { VisitUs } from "@/components/home/VisitUs";
import { WhyGallery } from "@/components/home/WhyGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Incontournables />
      <MenuPreview />
      <OurStory />
      <WhyGallery />
      <Reviews />
      <VisitUs />
      <FinalCta />
    </>
  );
}
