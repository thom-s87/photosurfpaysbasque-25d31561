import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20r%C3%A9server%20une%20session%20photo%20surf%20au%20Pays%20Basque.%20Voici%20mes%20disponibilit%C3%A9s%20%3A%20...";

export const UniversContactForm = () => {
  const { toast } = useToast();
  const [prenom, setPrenom] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!prenom.trim() || !contact.trim() || !message.trim()) {
      toast({
        title: "Champs requis",
        description: "Merci de remplir tous les champs avant d'envoyer.",
        variant: "destructive",
      });
      return;
    }

    const text = encodeURIComponent(
      `Bonjour, je suis ${prenom.trim()}.\n\nContact : ${contact.trim()}\n\nMessage : ${message.trim()}`
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank", "noopener,noreferrer");

    toast({
      title: "Message envoyé !",
      description: "Vous allez être redirigé vers WhatsApp.",
    });

    setPrenom("");
    setContact("");
    setMessage("");
  };

  return (
    <section className="py-16 px-4 bg-card/60">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-primary">
          Contactez-moi
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Remplissez le formulaire et je vous réponds rapidement via WhatsApp.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="prenom" className="text-foreground">Prénom</Label>
            <Input
              id="prenom"
              placeholder="Votre prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              maxLength={100}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact" className="text-foreground">Email ou téléphone</Label>
            <Input
              id="contact"
              placeholder="email@exemple.com ou 06 12 34 56 78"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              maxLength={255}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea
              id="message"
              placeholder="Décrivez votre projet ou posez vos questions..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              rows={4}
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-golden hover:bg-golden/90 text-foreground font-bold rounded-full shadow-lg transform hover:scale-[1.02] transition-all duration-300"
          >
            <Send className="w-5 h-5 mr-2" />
            Envoyer via WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
};
