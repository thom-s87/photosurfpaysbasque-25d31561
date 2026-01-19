import { Header } from "@/components/Header";
import { Hero, HeroContent } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Spots } from "@/components/Spots";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 font-poppins">
      <Header />
      <main>
        <Hero />
        <HeroContent />
        <Gallery />
        <Spots />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;