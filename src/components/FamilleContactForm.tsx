import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/33695349187";

const typeSeanceOptions = ["Plage", "Eau"];

export const FamilleContactForm = () => {
  const { toast } = useToast();
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [nbEnfants, setNbEnfants] = useState("");
  const [ageEnfants, setAgeEnfants] = useState("");
  const [typeSeance, setTypeSeance] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!prenom.trim() || !telephone.trim()) {
      toast({
        title: "Champs requis",
        description: "Merci de renseigner au moins votre prénom et votre téléphone.",
        variant: "destructive",
      });
      return;
    }

    const lines = [
      `Bonjour, je suis ${prenom.trim()}.`,
      `Téléphone : ${telephone.trim()}`,
      nbEnfants.trim() ? `Nombre d'enfants : ${nbEnfants.trim()}` : "",
      ageEnfants.trim() ? `Âge des enfants : ${ageEnfants.trim()}` : "",
      typeSeance ? `Type de séance : ${typeSeance}` : "",
      message.trim() ? `Message : ${message.trim()}` : "",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n\n"));
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank", "noopener,noreferrer");

    toast({
      title: "Demande envoyée !",
      description: "Vous allez être redirigé vers WhatsApp.",
    });

    setPrenom("");
    setTelephone("");
    setNbEnfants("");
    setAgeEnfants("");
    setTypeSeance("");
    setMessage("");
  };

  return (
    <section className="py-16 px-4 bg-card/40">
      <div className="container mx-auto max-w-lg">
        <Heart className="w-8 h-8 text-hot-pink mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-primary">
          Réservez votre séance famille
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Décrivez-moi votre famille, je m'occupe du reste.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="f-prenom" className="text-foreground text-sm">Prénom</Label>
            <Input id="f-prenom" placeholder="Votre prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} maxLength={100} className="bg-background/60 border-border/50 focus:border-hot-pink/40" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="f-tel" className="text-foreground text-sm">Téléphone</Label>
            <Input id="f-tel" placeholder="06 12 34 56 78" value={telephone} onChange={(e) => setTelephone(e.target.value)} maxLength={20} className="bg-background/60 border-border/50 focus:border-hot-pink/40" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="f-nb" className="text-foreground text-sm">Nombre d'enfants</Label>
            <Input id="f-nb" placeholder="Ex : 2" value={nbEnfants} onChange={(e) => setNbEnfants(e.target.value)} maxLength={10} className="bg-background/60 border-border/50 focus:border-hot-pink/40" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="f-age" className="text-foreground text-sm">Âge des enfants</Label>
            <Input id="f-age" placeholder="Ex : 3 ans et 6 ans" value={ageEnfants} onChange={(e) => setAgeEnfants(e.target.value)} maxLength={100} className="bg-background/60 border-border/50 focus:border-hot-pink/40" />
          </div>

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

          <div className="space-y-1.5">
            <Label htmlFor="f-message" className="text-foreground text-sm">Message</Label>
            <Textarea id="f-message" placeholder="Parlez-moi de votre famille et de vos envies..." value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} rows={3} className="bg-background/60 border-border/50 focus:border-hot-pink/40" />
          </div>

          <Button type="submit" size="lg" className="w-full bg-hot-pink hover:bg-hot-pink/90 text-primary-foreground font-bold rounded-full shadow-lg transform hover:scale-[1.02] transition-all duration-300 mt-2">
            <Heart className="w-4 h-4 mr-2" />
            Réserver un moment en famille
          </Button>
        </form>
      </div>
    </section>
  );
};
