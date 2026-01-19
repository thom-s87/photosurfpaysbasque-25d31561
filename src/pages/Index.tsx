import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Particuliers } from "@/components/Particuliers";
import { Clubs } from "@/components/Clubs";
import { Gallery } from "@/components/Gallery";
import { Spots } from "@/components/Spots";
import { Conditions } from "@/components/Conditions";
import { ContactCTA } from "@/components/ContactCTA";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 font-poppins">
      <Header />
      <main>
        {/* 1. Hero - Ce que je propose */}
        <Hero />
        
        {/* 2. Particuliers - Sessions surf */}
        <Particuliers />
        
        {/* 3. Clubs & Écoles */}
        <Clubs />
        
        {/* 4. Galerie - Preuve */}
        <Gallery />
        
        {/* 5. Zones de shooting */}
        <Spots />
        
        {/* 6. Conditions météo & fonctionnement */}
        <Conditions />
        
        {/* 7. Rappel contact CTA */}
        <ContactCTA />
        
        {/* 8. Présentation personnelle courte */}
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
