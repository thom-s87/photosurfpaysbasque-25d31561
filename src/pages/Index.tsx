import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Univers } from "@/components/Univers";
import { Tarifs } from "@/components/Tarifs";
import { Gallery } from "@/components/Gallery";
import { Tirages } from "@/components/Tirages";
import { Process } from "@/components/Process";
import { GoogleReviews } from "@/components/GoogleReviews";
import { SessionForm } from "@/components/SessionForm";
import { ContactCTA } from "@/components/ContactCTA";
import { SeoAccordion } from "@/components/SeoAccordion";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Story />
        <Univers />
        <Tarifs />
        <Gallery />
        <Tirages />
        <Process />
        <GoogleReviews />
        <SessionForm />
        <ContactCTA />
        <SeoAccordion />
      </main>
      <Footer />

      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "PhotoSurfPaysBasque",
            description: "Photographe de l'océan au Pays Basque — surf, famille, grossesse, sports aquatiques, lifestyle plage",
            url: "https://photosurfpaysbasque.lovable.app",
            telephone: "+33695349187",
            areaServed: ["Anglet", "Biarritz", "Pays Basque", "Hossegor"],
            priceRange: "€",
            image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&q=80",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Anglet",
              addressRegion: "Pyrénées-Atlantiques",
              addressCountry: "FR",
            },
          }),
        }}
      />
    </div>
  );
};

export default Index;
