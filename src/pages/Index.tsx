import { Header } from "@/components/Header";
import { TopBanner } from "@/components/TopBanner";
import { TrustStrip } from "@/components/TrustStrip";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Univers } from "@/components/Univers";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { SessionLibre } from "@/components/SessionLibre";
import { Tarifs } from "@/components/Tarifs";
import { GiftCardSection } from "@/components/GiftCardSection";
import { Gallery } from "@/components/Gallery";
import { Tirages } from "@/components/Tirages";
import { Process } from "@/components/Process";
import { GoogleReviews } from "@/components/GoogleReviews";
import { FAQ } from "@/components/FAQ";
import { SessionForm } from "@/components/SessionForm";
import { ContactCTA } from "@/components/ContactCTA";
import { SeoAccordion } from "@/components/SeoAccordion";
import { Footer } from "@/components/Footer";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionCTA } from "@/components/SectionCTA";
import { SurfEnClub } from "@/components/SurfEnClub";
import { SessionLibrePopup } from "@/components/SessionLibrePopup";
import { useEffect } from "react";
import { setSeo } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    setSeo({
      title: "Photo Surf Pays Basque | Photographe océan à Anglet",
      description: "Photos et vidéos dans l'océan à Anglet, Biarritz et sur la côte basque : surf, famille, grossesse, EVJF et sports aquatiques. Réservation rapide via WhatsApp.",
      keywords: "photographe surf pays basque, photographe surf anglet, photo surf biarritz, photographe eau anglet, photographe plage pays basque",
      path: "/",
    });
  }, []);
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <TopBanner />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Story />
        <SectionCTA />
        <Univers />
        <SurfEnClub />
        <UrgencyBanner />
        <SessionLibre />
        <Tarifs />
        <GiftCardSection />
        <Gallery />
        <SectionCTA />
        <Tirages />
        <SectionCTA />
        <Process />
        <SectionCTA />
        <GoogleReviews />
        <FAQ />
        <SessionForm />
        <ContactCTA />
        <SeoAccordion />
      </main>
      <Footer />
      <MobileFixedCTA />
      <FloatingWhatsApp />
      <SessionLibrePopup />

      {/* LocalBusiness / Photographer JSON-LD : défini une seule fois dans __root.tsx */}
    </div>
  );
};

export default Index;
