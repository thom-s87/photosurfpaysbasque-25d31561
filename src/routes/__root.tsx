import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import NotFound from "@/pages/NotFound";
import appCss from "../styles.css?url";

const LOCAL_BUSINESS_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Photographer"],
  name: "PhotoSurfPaysBasque",
  description:
    "Photographe de l'océan au Pays Basque — surf, famille, grossesse, sports aquatiques, lifestyle plage.",
  alternateName: "Photographe surf Anglet",
  url: "https://photosurfpaysbasque.fr",
  telephone: "+33695349187",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Anglet",
    addressRegion: "Nouvelle-Aquitaine",
    postalCode: "64600",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.483, longitude: -1.522 },
  areaServed: ["Anglet", "Biarritz", "Bidart", "Guéthary", "Hendaye"].map(
    (name) => ({ "@type": "City", name }),
  ),
  priceRange: "45€ - 150€",
  currenciesAccepted: "EUR",
  openingHours: "Mo-Su 07:00-20:00",
  sameAs: ["https://www.instagram.com/photosurfpaysbasque"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Réservation WhatsApp",
      telephone: "+33695349187",
      url: "https://wa.me/33695349187",
      availableLanguage: ["fr", "en"],
    },
    {
      "@type": "ContactPoint",
      contactType: "Téléphone / SMS",
      telephone: "+33695349187",
      availableLanguage: ["fr", "en"],
    },
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://wa.me/33695349187",
      inLanguage: "fr",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Session photo dans l'eau",
      description:
        "Shooting photo surf / sports aquatiques dans l'eau au Pays Basque, à partir de 45 € l'heure.",
      price: "45",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      areaServed: ["Anglet", "Biarritz", "Bidart"],
      url: "https://photosurfpaysbasque.fr/#tarifs",
    },
  ],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "45",
    priceCurrency: "EUR",
    offerCount: 1,
  },
  knowsAbout: [
    "Photographie de surf",
    "Vidéo de surf",
    "Sport nautique",
    "Photographie sportive",
    "Shooting maternité aquatique",
  ],
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Photographe Surf Pays Basque | Anglet · Biarritz" },
      {
        name: "description",
        content:
          "📸 Photographe surf à Anglet & Biarritz. Capture ta session dans l'eau dès 45€. Réservation rapide par WhatsApp ou tél. Réponse en 15 min !",
      },
      {
        name: "keywords",
        content:
          "photographe surf anglet, photographe pays basque, photographe plage anglet, surf photography basque country, photo surf biarritz",
      },
      { name: "author", content: "Thom - PhotoSurfPaysBasque" },
      { name: "robots", content: "index, follow" },
      {
        name: "google-site-verification",
        content: "nrIIfTcjJoPYWK3KaHw9uyejBMIXZElJFZOSYiphK3s",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      {
        property: "og:title",
        content: "Photographe Surf Pays Basque | Anglet · Biarritz",
      },
      {
        property: "og:description",
        content:
          "Photographe surf à Anglet & Biarritz. Sessions photo à l'eau dès 45€. Famille, grossesse, natation. Réservation WhatsApp.",
      },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/" },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/aPmmDO7Wh8YPQRbxqfycBxoLn7d2/social-images/social-1768856753811-Capture d'écran site web.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "PhotoSurfPaysBasque — Photographe surf Anglet, Pays Basque",
      },
      {
        name: "twitter:description",
        content:
          "Photographe de l'océan au Pays Basque. Sessions photo surf, famille, grossesse et sports aquatiques.",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/aPmmDO7Wh8YPQRbxqfycBxoLn7d2/social-images/social-1768856753811-Capture d'écran site web.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon.png" },
      { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.unsplash.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "image",
        href: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80",
        fetchPriority: "high",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: LOCAL_BUSINESS_JSONLD },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-1H2HKRC4J1",
        async: true,
      },
      {
        children:
          "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1H2HKRC4J1');",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-6 px-5 text-center">
      <h1 className="font-display text-4xl tracking-wider">
        Cette page n'a pas pu se charger
      </h1>
      <p className="text-muted-foreground max-w-md">
        Une erreur est survenue. Réessaie ou reviens à l'accueil.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold"
        >
          Réessayer
        </button>
        <a
          href="/"
          className="border border-border px-6 py-3 rounded-md font-semibold"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}
