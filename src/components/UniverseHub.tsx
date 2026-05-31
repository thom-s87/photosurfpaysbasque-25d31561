import { Link } from "react-router-dom";
import { Camera, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";

export interface HubCard {
  title: string;
  desc: string;
  image: string;
  alt: string;
  to: string;
  cta: string;
}

interface UniverseHubProps {
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  cards: HubCard[];
  whatsapp: string;
  backLabel?: string;
}

export const UniverseHub = ({
  eyebrow,
  h1,
  intro,
  heroImage,
  heroAlt,
  cards,
  whatsapp,
  backLabel = "Retour à l'accueil",
}: UniverseHubProps) => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0 overflow-x-hidden">
      <Header />
      <main className="pt-24">
        {/* HERO */}
        <section className="relative px-5 md:px-4 py-12 md:py-20">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-hot-pink font-medium mb-4">
                {eyebrow}
              </p>
              <h1 className="font-display text-4xl min-[375px]:text-5xl md:text-6xl text-foreground tracking-wide leading-tight mb-6">
                {h1}
              </h1>
              <p className="text-base min-[375px]:text-lg text-muted-foreground leading-relaxed">
                {intro}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt={heroAlt}
                width={1280}
                height={864}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section className="px-5 md:px-4 py-10 md:py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {cards.map((c, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg retro-grain"
                >
                  <Link to={c.to} className="absolute inset-0 z-[1]" aria-label={c.title}>
                    <img
                      src={c.image}
                      alt={c.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-[2] pointer-events-none">
                    <h2 className="font-display text-2xl min-[375px]:text-3xl text-primary-foreground mb-2 tracking-wider">
                      {c.title}
                    </h2>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                      {c.desc}
                    </p>
                    <Link
                      to={c.to}
                      className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-sunset text-foreground text-xs font-semibold tracking-widest uppercase shadow-lg hover:opacity-90 transition-opacity whitespace-normal"
                    >
                      <Camera className="w-4 h-4" />
                      {c.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA WhatsApp */}
        <section className="px-5 md:px-4 py-12 md:py-16 bg-card/40">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              Une question ?
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 tracking-wide">
              ON EN DISCUTE ?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Dis-moi ton projet en quelques mots, je te réponds en moins d'une heure.
            </p>
            <Button
              size="lg"
              className="bg-gradient-sunset text-foreground px-8 py-5 md:px-10 md:py-6 text-base md:text-lg font-bold rounded-full shadow-2xl hover:opacity-90"
              asChild
            >
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                📸 Réserver via WhatsApp
              </a>
            </Button>
            <div className="mt-8">
              <Link
                to="/#univers"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                {backLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileFixedCTA />
      <FloatingWhatsApp />
    </div>
  );
};
