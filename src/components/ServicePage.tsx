import { useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Camera, Clock, MapPin, Heart, HelpCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { DiscoverAlso, allLinks } from "@/components/DiscoverAlso";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { setSeo, buildLocalBusiness, buildFaqPage, buildBreadcrumbs } from "@/lib/seo";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export interface ServicePageProps {
  seo: { title: string; description: string; path: string; keywords?: string };
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  whatsapp: string;
  galleryImages: { src: string; alt: string }[];
  process: { title: string; desc: string }[];
  pricing: ReactNode;
  discoverLinks: { label: string; href: string }[];
  hubHref: string;
  hubLabel: string;
  faqItems?: { question: string; answer: string }[];
  breadcrumb?: { name: string; path: string }[];
}

export const ServicePage = ({
  seo,
  eyebrow,
  h1,
  intro,
  heroImage,
  heroAlt,
  whatsapp,
  galleryImages,
  process,
  pricing,
  discoverLinks,
  hubHref,
  hubLabel,
  faqItems,
  breadcrumb,
}: ServicePageProps) => {
  useEffect(() => {
    const schemas: object[] = [
      buildLocalBusiness({
        name: `PhotoSurfPaysBasque — ${seo.title.split("|")[0].trim()}`,
        description: seo.description,
        path: seo.path,
        image: heroImage,
      }),
    ];
    if (faqItems && faqItems.length > 0) schemas.push(buildFaqPage(faqItems));
    if (breadcrumb && breadcrumb.length > 0) schemas.push(buildBreadcrumbs(breadcrumb));
    setSeo({ ...seo, image: heroImage, type: "article", jsonLd: schemas });
  }, [seo, heroImage, faqItems, breadcrumb]);


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
              <h1 className="font-display text-3xl min-[375px]:text-4xl md:text-6xl text-foreground tracking-wide leading-tight mb-6">
                {h1}
              </h1>
              <p className="text-base min-[375px]:text-lg text-muted-foreground leading-relaxed mb-8">
                {intro}
              </p>
              <Button
                size="lg"
                className="bg-gradient-sunset text-foreground px-8 py-5 md:px-10 md:py-6 text-base md:text-lg font-bold rounded-full shadow-2xl hover:opacity-90 w-full sm:w-auto whitespace-normal"
                asChild
              >
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Réserver ma session
                </a>
              </Button>
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

        {/* GALERIE */}
        <section className="px-5 md:px-4 py-12 md:py-16 bg-card/40">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8 md:mb-12">
              <Camera className="w-10 h-10 text-hot-pink mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                EXEMPLES DE SÉANCES
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl shadow-lg group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 md:px-4 py-12 md:py-16">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <Clock className="w-10 h-10 text-golden mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
                COMMENT ÇA SE PASSE
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {process.map((p, i) => (
                <div
                  key={i}
                  className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/40 shadow-md"
                >
                  <div className="text-hot-pink font-display text-3xl mb-2">0{i + 1}</div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="px-5 md:px-4 py-12 md:py-16 bg-card/40">
          <div className="container mx-auto max-w-4xl text-center">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-6">
              TARIFS & RÉSERVATION
            </h2>
            <div className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              {pricing}
            </div>
            <Button
              size="lg"
              className="bg-gradient-sunset text-foreground px-8 py-5 md:px-10 md:py-6 text-base md:text-lg font-bold rounded-full shadow-2xl hover:opacity-90 whitespace-normal"
              asChild
            >
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Réserver ma session
              </a>
            </Button>
          </div>
        </section>

        {/* DISCOVER */}
        <DiscoverAlso links={discoverLinks} />

        {/* RETURN TO HUB */}
        <section className="px-5 md:px-4 py-10 text-center">
          <Link
            to={hubHref}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            ← {hubLabel}
          </Link>
        </section>

        {/* CTA FINAL */}
        <section className="py-14 md:py-20 px-5 md:px-4 bg-gradient-to-r from-primary via-hot-pink to-golden">
          <div className="container mx-auto text-center max-w-3xl">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground/80 mx-auto mb-5 md:mb-6" />
            <h2 className="font-display text-3xl md:text-5xl text-primary-foreground tracking-wide mb-6">
              ON SE LANCE ?
            </h2>
            <Button
              size="lg"
              className="bg-background text-foreground px-8 py-5 md:px-10 md:py-6 text-base md:text-lg font-bold rounded-full shadow-2xl hover:opacity-90 whitespace-normal"
              asChild
            >
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Réserver ma session
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <MobileFixedCTA />
      <FloatingWhatsApp />
    </div>
  );
};
