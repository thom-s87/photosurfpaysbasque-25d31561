import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/33695349187";

const typeSeanceOptions = ["Famille", "Famille & bébé", "Bébé nageur", "Parents / enfant", "Fratrie", "Famille élargie"];
const lieuOptions = ["Plage", "Piscine", "Plage ou piscine", "Je ne sais pas encore"];
const participantsOptions = ["2", "3", "4", "5 et plus"];
const ageOptions = ["Bébé", "1 à 3 ans", "4 à 7 ans", "8 ans et plus"];
const ambianceOptions = ["Naturelle", "Émotionnelle", "Ludique", "Sportive", "Souvenir de vacances"];

const ChipGroup = ({
  label,
  options,
  value,
  onChange,
  multi = false,
}: {
  label: string;
  options: string[];
  value: string | string[];
  onChange: (v: string | string[]) => void;
  multi?: boolean;
}) => (
  <div className="space-y-1.5">
    <Label className="text-foreground text-sm">{label}</Label>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isSelected = multi
          ? (value as string[]).includes(opt)
          : value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => {
              if (multi) {
                const arr = value as string[];
                onChange(
                  arr.includes(opt)
                    ? arr.filter((v) => v !== opt)
                    : [...arr, opt]
                );
              } else {
                onChange((value as string) === opt ? "" : opt);
              }
            }}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
              isSelected
                ? "bg-hot-pink/20 border-hot-pink text-hot-pink font-medium"
                : "bg-background/60 border-border/50 text-muted-foreground hover:border-hot-pink/30"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  </div>
);

export const FamilleContactForm = () => {
  const { toast } = useToast();
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [typeSeance, setTypeSeance] = useState("");
  const [lieu, setLieu] = useState("");
  const [participants, setParticipants] = useState("");
  const [ageEnfants, setAgeEnfants] = useState<string[]>([]);
  const [ambiance, setAmbiance] = useState<string[]>([]);
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
      typeSeance ? `Type de séance : ${typeSeance}` : "",
      lieu ? `Lieu souhaité : ${lieu}` : "",
      participants ? `Nombre de participants : ${participants}` : "",
      ageEnfants.length ? `Âge des enfants : ${ageEnfants.join(", ")}` : "",
      ambiance.length ? `Ambiance recherchée : ${ambiance.join(", ")}` : "",
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
    setTypeSeance("");
    setLieu("");
    setParticipants("");
    setAgeEnfants([]);
    setAmbiance([]);
    setDateSouhaitee("");
    setMessage("");
  };

  return (
    <section className="py-16 px-4 bg-card/40">
      <div className="container mx-auto max-w-lg">
        <Heart className="w-8 h-8 text-hot-pink mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-primary">
          Parlons de votre moment en famille 💜
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
            <Label htmlFor="f-email" className="text-foreground text-sm">Email</Label>
            <Input id="f-email" type="email" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} className="bg-background/60 border-border/50 focus:border-hot-pink/40" />
          </div>

          <ChipGroup label="Type de séance" options={typeSeanceOptions} value={typeSeance} onChange={(v) => setTypeSeance(v as string)} />

          <ChipGroup label="Lieu souhaité" options={lieuOptions} value={lieu} onChange={(v) => setLieu(v as string)} />

          <ChipGroup label="Nombre de participants" options={participantsOptions} value={participants} onChange={(v) => setParticipants(v as string)} />

          <ChipGroup label="Âge des enfants" options={ageOptions} value={ageEnfants} onChange={(v) => setAgeEnfants(v as string[])} multi />

          <ChipGroup label="Ambiance recherchée" options={ambianceOptions} value={ambiance} onChange={(v) => setAmbiance(v as string[])} multi />

          <div className="space-y-1.5">
            <Label htmlFor="f-date" className="text-foreground text-sm">Date souhaitée</Label>
            <Input id="f-date" type="date" value={dateSouhaitee} onChange={(e) => setDateSouhaitee(e.target.value)} className="bg-background/60 border-border/50 focus:border-hot-pink/40" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="f-message" className="text-foreground text-sm">Message</Label>
            <Textarea id="f-message" placeholder="Exemple : séance bébé nageur, souvenir en famille, plage à Anglet ou piscine privée" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} rows={3} className="bg-background/60 border-border/50 focus:border-hot-pink/40" />
          </div>

          <Button type="submit" size="lg" className="w-full bg-hot-pink hover:bg-hot-pink/90 text-primary-foreground font-bold rounded-full shadow-lg transform hover:scale-[1.02] transition-all duration-300 mt-2">
            <Heart className="w-4 h-4 mr-2" />
            Réserver ce moment
          </Button>
        </form>
      </div>
    </section>
  );
};
