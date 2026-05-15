import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20r%C3%A9server%20une%20session%20photo%20surf%20au%20Pays%20Basque.%20Voici%20mes%20disponibilit%C3%A9s%20%3A%20...";

const moisOptions = ["3", "4", "5", "6", "7", "8", "9"];
const typeSeanceOptions = ["Seule", "En couple", "En famille"];
const lieuOptions = ["Plage", "Autre"];

export const GrossesseContactForm = () => {
  const { toast } = useToast();
  const [prenom, setPrenom] = useState("");
  const [contact, setContact] = useState("");
  const [mois, setMois] = useState("");
  const [typeSeance, setTypeSeance] = useState("");
  const [lieu, setLieu] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!prenom.trim() || !contact.trim()) {
      toast({
        title: "Champs requis",
        description: "Merci de renseigner au moins votre prénom et un moyen de contact.",
        variant: "destructive",
      });
      return;
    }

    const lines = [
      `Bonjour, je suis ${prenom.trim()}.`,
      `Contact : ${contact.trim()}`,
      mois ? `Mois de grossesse : ${mois}` : "",
      typeSeance ? `Type de séance : ${typeSeance}` : "",
      lieu ? `Lieu souhaité : ${lieu}` : "",
      message.trim() ? `Message : ${message.trim()}` : "",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n\n"));
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank", "noopener,noreferrer");

    toast({
      title: "Demande envoyée !",
      description: "Vous allez être redirigée vers WhatsApp.",
    });

    setPrenom("");
    setContact("");
    setMois("");
    setTypeSeance("");
    setLieu("");
    setMessage("");
  };

  return (
    <section className="py-16 px-4 bg-card/40">
      <div className="container mx-auto max-w-lg">
        <Heart className="w-8 h-8 text-hot-pink mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-primary">
          Envoyez-moi votre demande
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Je vous recontacte rapidement pour organiser votre séance.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Prénom */}
          <div className="space-y-1.5">
            <Label htmlFor="g-prenom" className="text-foreground text-sm">Prénom</Label>
            <Input
              id="g-prenom"
              placeholder="Votre prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              maxLength={100}
              className="bg-background/60 border-border/50 focus:border-hot-pink/40"
            />
          </div>

          {/* Email ou téléphone */}
          <div className="space-y-1.5">
            <Label htmlFor="g-contact" className="text-foreground text-sm">Email ou téléphone</Label>
            <Input
              id="g-contact"
              placeholder="email@exemple.com ou 06 12 34 56 78"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              maxLength={255}
              className="bg-background/60 border-border/50 focus:border-hot-pink/40"
            />
          </div>

          {/* Mois de grossesse */}
          <div className="space-y-1.5">
            <Label className="text-foreground text-sm">Mois de grossesse</Label>
            <div className="flex flex-wrap gap-2">
              {moisOptions.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMois(mois === m ? "" : m)}
                  className={`px-3.5 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                    mois === m
                      ? "bg-hot-pink/20 border-hot-pink text-hot-pink font-medium"
                      : "bg-background/60 border-border/50 text-muted-foreground hover:border-hot-pink/30"
                  }`}
                >
                  {m} mois
                </button>
              ))}
            </div>
          </div>

          {/* Type de séance */}
          <div className="space-y-1.5">
            <Label className="text-foreground text-sm">Type de séance</Label>
            <div className="flex flex-wrap gap-2">
              {typeSeanceOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setTypeSeance(typeSeance === opt ? "" : opt)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                    typeSeance === opt
                      ? "bg-hot-pink/20 border-hot-pink text-hot-pink font-medium"
                      : "bg-background/60 border-border/50 text-muted-foreground hover:border-hot-pink/30"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Lieu souhaité */}
          <div className="space-y-1.5">
            <Label className="text-foreground text-sm">Lieu souhaité</Label>
            <div className="flex flex-wrap gap-2">
              {lieuOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setLieu(lieu === opt ? "" : opt)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                    lieu === opt
                      ? "bg-hot-pink/20 border-hot-pink text-hot-pink font-medium"
                      : "bg-background/60 border-border/50 text-muted-foreground hover:border-hot-pink/30"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor="g-message" className="text-foreground text-sm">Message</Label>
            <Textarea
              id="g-message"
              placeholder="Parlez-moi de vos envies pour cette séance..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              rows={3}
              className="bg-background/60 border-border/50 focus:border-hot-pink/40"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-hot-pink hover:bg-hot-pink/90 text-primary-foreground font-bold rounded-full shadow-lg transform hover:scale-[1.02] transition-all duration-300 mt-2"
          >
            <Heart className="w-4 h-4 mr-2" />
            Envoyer ma demande
          </Button>
        </form>
      </div>
    </section>
  );
};
