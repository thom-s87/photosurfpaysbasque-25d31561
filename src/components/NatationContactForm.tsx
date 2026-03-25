import { useState } from "react";
import { Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/33695349187";

const objectifOptions = ["Performance", "Souvenir", "Compétition"];
const typeOptions = ["Piscine", "Océan"];
const niveauOptions = ["Débutant", "Intermédiaire", "Confirmé", "Compétiteur"];

export const NatationContactForm = () => {
  const { toast } = useToast();
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [objectif, setObjectif] = useState("");
  const [type, setType] = useState("");
  const [niveau, setNiveau] = useState("");
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
      objectif ? `Objectif : ${objectif}` : "",
      type ? `Type : ${type}` : "",
      niveau ? `Niveau : ${niveau}` : "",
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
    setObjectif("");
    setType("");
    setNiveau("");
    setMessage("");
  };

  const chipClass = (selected: boolean) =>
    `px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
      selected
        ? "bg-primary/20 border-primary text-primary font-medium"
        : "bg-background/60 border-border/50 text-muted-foreground hover:border-primary/30"
    }`;

  return (
    <section className="py-16 px-4 bg-card/40">
      <div className="container mx-auto max-w-lg">
        <Droplets className="w-8 h-8 text-primary mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-primary">
          Planifiez votre séance
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Décrivez votre projet, je vous recontacte rapidement.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="n-prenom" className="text-foreground text-sm">Prénom</Label>
            <Input id="n-prenom" placeholder="Votre prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} maxLength={100} className="bg-background/60 border-border/50 focus:border-primary/40" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="n-tel" className="text-foreground text-sm">Téléphone</Label>
            <Input id="n-tel" placeholder="06 12 34 56 78" value={telephone} onChange={(e) => setTelephone(e.target.value)} maxLength={20} className="bg-background/60 border-border/50 focus:border-primary/40" />
          </div>

          <div className="space-y-1.5">
            <Label className="text-foreground text-sm">Objectif</Label>
            <div className="flex flex-wrap gap-2">
              {objectifOptions.map((opt) => (
                <button key={opt} type="button" onClick={() => setObjectif(objectif === opt ? "" : opt)} className={chipClass(objectif === opt)}>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-foreground text-sm">Type</Label>
            <div className="flex flex-wrap gap-2">
              {typeOptions.map((opt) => (
                <button key={opt} type="button" onClick={() => setType(type === opt ? "" : opt)} className={chipClass(type === opt)}>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-foreground text-sm">Niveau</Label>
            <div className="flex flex-wrap gap-2">
              {niveauOptions.map((opt) => (
                <button key={opt} type="button" onClick={() => setNiveau(niveau === opt ? "" : opt)} className={chipClass(niveau === opt)}>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="n-message" className="text-foreground text-sm">Message</Label>
            <Textarea id="n-message" placeholder="Décrivez votre projet ou vos attentes..." value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} rows={3} className="bg-background/60 border-border/50 focus:border-primary/40" />
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-lg transform hover:scale-[1.02] transition-all duration-300 mt-2">
            <Droplets className="w-4 h-4 mr-2" />
            Planifier ma séance
          </Button>
        </form>
      </div>
    </section>
  );
};
