import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20r%C3%A9server%20une%20session%20photo%20surf%20au%20Pays%20Basque.%20Voici%20mes%20disponibilit%C3%A9s%20%3A%20...";

const niveauOptions = ["Débutant", "Intermédiaire", "Confirmé"];
const spotOptions = ["Petite Chambre d'Amour", "Les Cavaliers", "La Barre", "Les Sables d'Or", "Autre"];

export const SurfContactForm = () => {
  const { toast } = useToast();
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [niveau, setNiveau] = useState("");
  const [spot, setSpot] = useState("");
  const [date, setDate] = useState<Date>();
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!prenom.trim() || !telephone.trim()) {
      toast({
        title: "Champs requis",
        description: "Merci de renseigner au moins ton prénom et ton téléphone.",
        variant: "destructive",
      });
      return;
    }

    const lines = [
      `Salut, c'est ${prenom.trim()}.`,
      `Téléphone : ${telephone.trim()}`,
      niveau ? `Niveau : ${niveau}` : "",
      spot ? `Spot souhaité : ${spot}` : "",
      date ? `Date souhaitée : ${format(date, "dd/MM/yyyy")}` : "",
      message.trim() ? `Message : ${message.trim()}` : "",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n\n"));
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank", "noopener,noreferrer");

    toast({
      title: "Demande envoyée !",
      description: "Tu vas être redirigé vers WhatsApp.",
    });

    setPrenom("");
    setTelephone("");
    setNiveau("");
    setSpot("");
    setDate(undefined);
    setMessage("");
  };

  return (
    <section className="py-16 px-4 bg-card/40">
      <div className="container mx-auto max-w-lg">
        <Waves className="w-8 h-8 text-primary mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-primary">
          Réserve ta session
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Remplis le formulaire, je te confirme la faisabilité dans l'heure.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Prénom */}
          <div className="space-y-1.5">
            <Label htmlFor="s-prenom" className="text-foreground text-sm">Prénom</Label>
            <Input
              id="s-prenom"
              placeholder="Ton prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              maxLength={100}
              className="bg-background/60 border-border/50 focus:border-primary/40"
            />
          </div>

          {/* Téléphone */}
          <div className="space-y-1.5">
            <Label htmlFor="s-tel" className="text-foreground text-sm">Téléphone</Label>
            <Input
              id="s-tel"
              placeholder="06 12 34 56 78"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              maxLength={20}
              className="bg-background/60 border-border/50 focus:border-primary/40"
            />
          </div>

          {/* Niveau */}
          <div className="space-y-1.5">
            <Label className="text-foreground text-sm">Niveau</Label>
            <div className="flex flex-wrap gap-2">
              {niveauOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setNiveau(niveau === opt ? "" : opt)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                    niveau === opt
                      ? "bg-primary/20 border-primary text-primary font-medium"
                      : "bg-background/60 border-border/50 text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Spot souhaité */}
          <div className="space-y-1.5">
            <Label className="text-foreground text-sm">Spot souhaité</Label>
            <div className="flex flex-wrap gap-2">
              {spotOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSpot(spot === opt ? "" : opt)}
                  className={`px-3.5 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                    spot === opt
                      ? "bg-primary/20 border-primary text-primary font-medium"
                      : "bg-background/60 border-border/50 text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Date souhaitée */}
          <div className="space-y-1.5">
            <Label className="text-foreground text-sm">Date souhaitée</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-background/60 border-border/50",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "dd/MM/yyyy") : "Choisis une date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor="s-message" className="text-foreground text-sm">Message</Label>
            <Textarea
              id="s-message"
              placeholder="Dis-moi ce que tu as en tête..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              rows={3}
              className="bg-background/60 border-border/50 focus:border-primary/40"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-lg transform hover:scale-[1.02] transition-all duration-300 mt-2"
          >
            <Waves className="w-4 h-4 mr-2" />
            Réserver ma session
          </Button>
        </form>
      </div>
    </section>
  );
};
