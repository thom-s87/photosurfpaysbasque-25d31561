import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Univers } from "@/components/Univers";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { Tarifs } from "@/components/Tarifs";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Story />
        <Univers />
        <UrgencyBanner />
        <Tarifs />
        <Gallery />
        <Tirages />
        <Process />
        <GoogleReviews />
        <FAQ />
        <SessionForm />
        <ContactCTA />
        <SeoAccordion />
      </main>
      <Footer />
      <MobileFixedCTA />
      <FloatingWhatsApp />

      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "PhotoSurfPaysBasque",
            description: "Photographe de l'océan au Pays Basque — surf, famille, grossesse, sports aquatiques, lifestyle plage",
            url: "https://photosurfpaysbasque.fr",
            telephone: "+33695349187",
            areaServed: ["Anglet", "Biarritz", "Pays Basque", "Hossegor"],
            priceRange: "€",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Anglet",
              addressRegion: "Pyrénées-Atlantiques",
              postalCode: "64600",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 43.483,
              longitude: -1.522,
            },
          }),
        }}
      />
    </div>
  );
};

export default Index;
