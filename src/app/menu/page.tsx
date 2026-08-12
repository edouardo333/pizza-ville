import type { Metadata } from "next";
import { MenuPageContent } from "@/components/menu/MenuPageContent";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Le menu de Pizza Ville à Disraeli : entrées, pizzas, sous-marins, pâtes, salades, pitas et côtes levées.",
};

export default function MenuPage() {
  return <MenuPageContent />;
}
