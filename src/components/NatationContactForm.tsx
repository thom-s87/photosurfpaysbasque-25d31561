import { useState } from "react";
import { Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20r%C3%A9server%20une%20session%20photo%20surf%20au%20Pays%20Basque.%20Voici%20mes%20disponibilit%C3%A9s%20%3A%20...";

const sportOptions = ["Paddle", "Natation", "Longe-côte", "Apnée", "Autre"];
const lieuOptions = ["Océan", "Piscine", "Les deux", "À définir"];
const objectifOptions = ["Souvenir", "Performance", "Entraînement", "Compétition", "Contenu réseaux"];
const niveauOptions = ["Débutant", "Intermédiaire", "Confirmé"];
const sessionOptions = ["Solo", "Groupe", "Club", "Coaching / entraînement"];

const ChipGroup = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="space-y-1.5">
    <Label className="text-foreground text-sm">{label}</Label>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(value === opt ? "" : opt)}
          className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
            value === opt
              ? "bg-primary/20 border-primary text-primary font-medium"
              : "bg-background/60 border-border/50 text-muted-foreground hover:border-primary/30"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export const NatationContactForm = () => {
  const { toast } = useToast();
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [sport, setSport] = useState("");
  const [lieu, setLieu] = useState("");
  const [objectif, setObjectif] = useState("");
  const [niveau, setNiveau] = useState("");
  const [typeSession, setTypeSession] = useState("");
  const [dateSouhaitee, setDateSouhaitee] = useState("");
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
      email.trim() ? `Email : ${email.trim()}` : "",
      sport ? `Type de sport : ${sport}` : "",
      lieu ? `Lieu : ${lieu}` : "",
      objectif ? `Objectif : ${objectif}` : "",
      niveau ? `Niveau : ${niveau}` : "",
      typeSession ? `Type de session : ${typeSession}` : "",
      dateSouhaitee.trim() ? `Date souhaitée : ${dateSouhaitee.trim()}` : "",
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
    setEmail("");
    setSport("");
    setLieu("");
    setObjectif("");
    setNiveau("");
    setTypeSession("");
    setDateSouhaitee("");
    setMessage("");
  };

  return (
    <section className="py-16 px-4 bg-card/40">
      <div className="container mx-auto max-w-lg">
        <Waves className="w-8 h-8 text-primary mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-primary">
          Parlons de votre session aquatique 🌊
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
            <Label htmlFor="n-email" className="text-foreground text-sm">Email</Label>
            <Input id="n-email" type="email" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} className="bg-background/60 border-border/50 focus:border-primary/40" />
          </div>

          <ChipGroup label="Type de sport" options={sportOptions} value={sport} onChange={setSport} />
          <ChipGroup label="Lieu" options={lieuOptions} value={lieu} onChange={setLieu} />
          <ChipGroup label="Objectif" options={objectifOptions} value={objectif} onChange={setObjectif} />
          <ChipGroup label="Niveau" options={niveauOptions} value={niveau} onChange={setNiveau} />
          <ChipGroup label="Type de session" options={sessionOptions} value={typeSession} onChange={setTypeSession} />

          <div className="space-y-1.5">
            <Label htmlFor="n-date" className="text-foreground text-sm">Date souhaitée</Label>
            <Input id="n-date" type="date" value={dateSouhaitee} onChange={(e) => setDateSouhaitee(e.target.value)} className="bg-background/60 border-border/50 focus:border-primary/40" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="n-message" className="text-foreground text-sm">Message</Label>
            <Textarea id="n-message" placeholder="Exemple : entraînement piscine, préparation compétition ou session paddle entre amis" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} rows={3} className="bg-background/60 border-border/50 focus:border-primary/40" />
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-lg transform hover:scale-[1.02] transition-all duration-300 mt-2">
            <Waves className="w-4 h-4 mr-2" />
            Planifier ma session
          </Button>
        </form>
      </div>
    </section>
  );
};
