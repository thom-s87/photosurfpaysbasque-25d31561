import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Spots } from "@/components/Spots";
import { Pricing } from "@/components/Pricing";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 font-poppins">
      <Header />
      <Hero />
      <Gallery />
      <Spots />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
