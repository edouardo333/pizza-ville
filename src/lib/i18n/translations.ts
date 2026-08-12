export type Lang = "fr" | "en";

export interface Dictionary {
  nav: {
    accueil: string;
    menu: string;
    apropos: string;
    avis: string;
    contact: string;
    cta: string;
    skipToContent: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  quickInfo: {
    open: string;
    closed: string;
    closingSoon: string;
    opensAt: string;
    closesAt: string;
    dineIn: string;
    takeout: string;
    delivery: string;
    directions: string;
    loading: string;
  };
  incontournables: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    items: { name: string; desc: string }[];
  };
  menuPreview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    categories: { title: string; subtitle: string }[];
  };
  story: {
    eyebrow: string;
    title: string;
    body: string[];
    cta: string;
  };
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ratingOutOf: string;
    reviewsCount: string;
    cta: string;
  };
  visit: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    hoursLabel: string;
    phoneLabel: string;
    servicesLabel: string;
    directionsCta: string;
    callCta: string;
    facebookCta: string;
    mapCaption: string;
    openInMaps: string;
  };
  menuPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: { name: string; desc: string }[];
    noteTitle: string;
    noteBody: string;
    callCta: string;
    directionsCta: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    menuCta: string;
    callCta: string;
    directionsCta: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    hoursTitle: string;
    rights: string;
    designedBy: string;
    privacyPolicy: string;
    terms: string;
  };
  days: string[]; // Sunday..Saturday, matches lib/hours.ts WEEKDAY_ORDER
  common: {
    call: string;
  };
  floatingCta: {
    label: string;
    ariaLabel: string;
  };
}

export const translations: Record<Lang, Dictionary> = {
  fr: {
    nav: {
      accueil: "Accueil",
      menu: "Menu",
      apropos: "À propos",
      avis: "Avis",
      contact: "Contact",
      cta: "Appeler",
      skipToContent: "Aller au contenu principal",
    },
    hero: {
      eyebrow: "Pizza Ville · Disraeli",
      headlineLine1: "Bien plus",
      headlineLine2: "que de la pizza.",
      sub: "Pizzas · Brochettes · Fruits de mer · Steaks · Poutines · Pâtes & plus",
      ctaPrimary: "Voir le menu",
      ctaSecondary: "418 449-3496",
    },
    quickInfo: {
      open: "Ouvert",
      closed: "Fermé",
      closingSoon: "Ferme bientôt",
      opensAt: "Ouvre à",
      closesAt: "Ferme à",
      dineIn: "Sur place",
      takeout: "Pour emporter",
      delivery: "Livraison",
      directions: "Itinéraire",
      loading: "Horaires…",
    },
    incontournables: {
      eyebrow: "Nos incontournables",
      title: "Un menu généreux, pensé pour tous les appétits",
      subtitle:
        "Un aperçu de ce qu'on cuisine chaque jour — de la pizza aux fruits de mer, en passant par les classiques maison.",
      cta: "Découvrir le menu",
      items: [
        { name: "Pizza", desc: "Cuite au four, généreusement garnie" },
        { name: "Fruits de mer", desc: "Crevettes et spécialités de la mer" },
        { name: "Pâtes & lasagne", desc: "Recettes maison, sauce généreuse" },
        { name: "Subs & club sandwichs", desc: "Servis avec frites maison" },
        { name: "Pain à l'ail & fondu parmesan", desc: "Doré au four, gratiné et généreusement garni." },
        { name: "Desserts", desc: "Pour finir le repas en douceur" },
      ],
    },
    menuPreview: {
      eyebrow: "Le menu",
      title: "Tous les goûts sont à la table.",
      subtitle: "Pizzas, brochettes, poutines, pâtes et classiques maison.",
      cta: "Voir le menu complet",
      categories: [
        { title: "Pizzas", subtitle: "Croûte maison, four chaud, garnitures généreuses." },
        { title: "Brochettes & grillades", subtitle: "Viandes marinées, grillées à la perfection." },
        { title: "Poutines & classiques", subtitle: "Frites fraîches, sauce maison, subs et plus." },
        { title: "Pâtes, salades & autres", subtitle: "Pâtes généreuses et salades fraîches maison." },
      ],
    },
    story: {
      eyebrow: "Notre histoire",
      title: "Une histoire bien de chez nous",
      body: [
        "Depuis plusieurs années, Pizza Ville fait partie du paysage de Disraeli, un restaurant familial où l'on vient autant pour la pizza que pour les brochettes, les fruits de mer et les classiques maison.",
        "Situé au 585 avenue Champlain, l'établissement accueille aussi bien les habitués de la région que les visiteurs de passage dans les Appalaches, autour d'une cuisine généreuse et sans prétention.",
      ],
      cta: "Découvrir le menu",
    },
    why: {
      eyebrow: "Pourquoi Pizza Ville",
      title: "Une adresse qui rassemble.",
      subtitle:
        "À Disraeli, Pizza Ville mise sur une cuisine généreuse, un menu varié et une ambiance où l'on se sent bien.",
      items: [
        {
          title: "Un menu pour tous",
          desc: "Pizzas, brochettes, fruits de mer, pâtes, poutines et plus.",
        },
        {
          title: "Une vraie adresse locale",
          desc: "Un restaurant bien ancré à Disraeli et dans sa communauté.",
        },
        {
          title: "Pour toutes les occasions",
          desc: "En famille, entre amis, sur place, pour emporter ou en livraison.",
        },
      ],
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Un aperçu de Pizza Ville",
      subtitle: "Notre cuisine, notre salle à manger et notre devanture, à Disraeli.",
    },
    reviews: {
      eyebrow: "Avis clients",
      title: "Ce qu'on dit de Pizza Ville",
      subtitle: "Un aperçu de nos avis Google.",
      ratingOutOf: "sur 5",
      reviewsCount: "avis Google",
      cta: "Voir tous les avis",
    },
    visit: {
      eyebrow: "Visitez-nous",
      title: "Nous trouver à Disraeli",
      subtitle: "En plein cœur de l'avenue Champlain.",
      addressLabel: "Adresse",
      hoursLabel: "Horaires",
      phoneLabel: "Téléphone",
      servicesLabel: "Services",
      directionsCta: "Itinéraire",
      callCta: "Appeler",
      facebookCta: "Facebook",
      mapCaption: "585 Av. Champlain, Disraeli — cliquez sur la carte pour l'ouvrir dans Google Maps.",
      openInMaps: "Ouvrir dans Google Maps",
    },
    menuPage: {
      eyebrow: "Le menu",
      title: "Notre menu",
      subtitle:
        "Pizza Ville propose un menu de restaurant familial complet — entrées, pizzas, sous-marins, pâtes, salades et plus.",
      categories: [
        { name: "Entrées", desc: "Pour bien commencer le repas." },
        { name: "Pizzas", desc: "Cuites au four, garnitures généreuses." },
        { name: "Sous-marins", desc: "Servis avec frites maison." },
        { name: "Frites & Poutines", desc: "Nos classiques réconfortants." },
        { name: "Pâtes", desc: "Recettes italiennes maison." },
        { name: "Salades", desc: "Fraîches et généreuses." },
        { name: "Pitas", desc: "Garnis à votre goût." },
        { name: "Côtes levées", desc: "Tendres et savoureuses." },
      ],
      noteTitle: "Le menu détaillé arrive bientôt",
      noteBody:
        "Nous mettons à jour notre menu complet avec descriptions et prix actuels. En attendant, appelez-nous pour connaître le menu du jour et les prix en vigueur.",
      callCta: "Appeler pour le menu",
      directionsCta: "Itinéraire",
    },
    finalCta: {
      title: "Une envie de Pizza Ville?",
      subtitle: "Consultez le menu, appelez-nous ou passez nous voir à Disraeli.",
      menuCta: "Voir le menu",
      callCta: "Appeler",
      directionsCta: "Itinéraire",
    },
    footer: {
      tagline:
        "Pizza Ville vous accueille au cœur de Disraeli avec une cuisine généreuse et conviviale, où pizzas, brochettes, fruits de mer et classiques maison se savourent en famille ou entre amis.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      hoursTitle: "Horaires",
      rights: "Tous droits réservés.",
      designedBy: "Site conçu par",
      privacyPolicy: "Politique de confidentialité",
      terms: "Conditions d’utilisation",
    },
    days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    common: { call: "Appeler" },
    floatingCta: {
      label: "Livraison",
      ariaLabel: "Appeler pour la livraison — 418 449-3496",
    },
  },
  en: {
    nav: {
      accueil: "Home",
      menu: "Menu",
      apropos: "About",
      avis: "Reviews",
      contact: "Contact",
      cta: "Call",
      skipToContent: "Skip to main content",
    },
    hero: {
      eyebrow: "Pizza Ville · Disraeli",
      headlineLine1: "So much more",
      headlineLine2: "than pizza.",
      sub: "Pizza · Skewers · Seafood · Steaks · Poutine · Pasta & more",
      ctaPrimary: "View menu",
      ctaSecondary: "418 449-3496",
    },
    quickInfo: {
      open: "Open",
      closed: "Closed",
      closingSoon: "Closing soon",
      opensAt: "Opens at",
      closesAt: "Closes at",
      dineIn: "Dine-in",
      takeout: "Takeout",
      delivery: "Delivery",
      directions: "Directions",
      loading: "Hours…",
    },
    incontournables: {
      eyebrow: "Fan favourites",
      title: "A generous menu, built for every appetite",
      subtitle:
        "A look at what we cook every day — from pizza to seafood to house classics.",
      cta: "Discover the menu",
      items: [
        { name: "Pizza", desc: "Oven-baked, generously topped" },
        { name: "Seafood", desc: "Shrimp and specialties from the sea" },
        { name: "Pasta & lasagna", desc: "House recipes, generous sauce" },
        { name: "Subs & club sandwiches", desc: "Served with house fries" },
        { name: "Garlic bread & melted parmesan", desc: "Oven-baked until golden, generously topped." },
        { name: "Desserts", desc: "A sweet way to finish" },
      ],
    },
    menuPreview: {
      eyebrow: "The menu",
      title: "Every craving has a seat at the table.",
      subtitle: "Pizza, skewers, poutine, pasta and homemade classics.",
      cta: "View the full menu",
      categories: [
        { title: "Pizza", subtitle: "Homemade crust, hot oven, generous toppings." },
        { title: "Skewers & Grills", subtitle: "Marinated meats, grilled to perfection." },
        { title: "Poutine & Classics", subtitle: "Fresh fries, homemade sauce, subs and more." },
        { title: "Pasta, Salads & More", subtitle: "Hearty pasta and fresh homemade salads." },
      ],
    },
    story: {
      eyebrow: "Our story",
      title: "A story rooted right here",
      body: [
        "For several years, Pizza Ville has been part of the Disraeli landscape — a family restaurant where guests come for pizza just as much as for skewers, seafood and house classics.",
        "Located at 585 avenue Champlain, the restaurant welcomes regulars from around the area and visitors passing through the Appalaches alike, around generous, no-fuss cooking.",
      ],
      cta: "Discover the menu",
    },
    why: {
      eyebrow: "Why Pizza Ville",
      title: "A place that brings people together.",
      subtitle:
        "In Disraeli, Pizza Ville is built on generous cooking, a varied menu, and an atmosphere where you feel right at home.",
      items: [
        {
          title: "A menu for everyone",
          desc: "Pizza, skewers, seafood, pasta, poutine and more.",
        },
        {
          title: "A true local address",
          desc: "A restaurant firmly rooted in Disraeli and its community.",
        },
        {
          title: "For every occasion",
          desc: "With family, with friends, dine-in, takeout or delivery.",
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "A look inside Pizza Ville",
      subtitle: "Our kitchen, our dining room, and our storefront, in Disraeli.",
    },
    reviews: {
      eyebrow: "Customer reviews",
      title: "What people say about Pizza Ville",
      subtitle: "A snapshot of our Google reviews.",
      ratingOutOf: "out of 5",
      reviewsCount: "Google reviews",
      cta: "See all reviews",
    },
    visit: {
      eyebrow: "Visit us",
      title: "Find us in Disraeli",
      subtitle: "Right on avenue Champlain.",
      addressLabel: "Address",
      hoursLabel: "Hours",
      phoneLabel: "Phone",
      servicesLabel: "Services",
      directionsCta: "Directions",
      callCta: "Call",
      facebookCta: "Facebook",
      mapCaption: "585 Av. Champlain, Disraeli — click the map to open it in Google Maps.",
      openInMaps: "Open in Google Maps",
    },
    menuPage: {
      eyebrow: "The menu",
      title: "Our menu",
      subtitle:
        "Pizza Ville offers a full family-restaurant menu — starters, pizza, subs, pasta, salads and more.",
      categories: [
        { name: "Starters", desc: "A great way to start the meal." },
        { name: "Pizza", desc: "Oven-baked, generously topped." },
        { name: "Subs", desc: "Served with house fries." },
        { name: "Fries & Poutine", desc: "Our comforting classics." },
        { name: "Pasta", desc: "House Italian recipes." },
        { name: "Salads", desc: "Fresh and generous." },
        { name: "Pitas", desc: "Filled to your taste." },
        { name: "Ribs", desc: "Tender and flavourful." },
      ],
      noteTitle: "The detailed menu is coming soon",
      noteBody:
        "We're updating our full menu with current descriptions and prices. In the meantime, call us for today's menu and current prices.",
      callCta: "Call for the menu",
      directionsCta: "Directions",
    },
    finalCta: {
      title: "Craving Pizza Ville?",
      subtitle: "Check the menu, give us a call, or stop by in Disraeli.",
      menuCta: "View menu",
      callCta: "Call",
      directionsCta: "Directions",
    },
    footer: {
      tagline: "Pizza Ville welcomes you to the heart of Disraeli with generous, friendly dining, where pizzas, skewers, seafood and homemade classics are enjoyed with family and friends.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      hoursTitle: "Hours",
      rights: "All rights reserved.",
      designedBy: "Site designed by",
      privacyPolicy: "Privacy Policy",
      terms: "Terms of Service",
    },
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    common: { call: "Call" },
    floatingCta: {
      label: "Delivery",
      ariaLabel: "Call for delivery — 418 449-3496",
    },
  },
};
