import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const WHATSAPP_NUMBER = "33695349187";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

type SessionType = "surf" | "famille" | "prenatal" | "aquatique" | "autre" | "";

export const SessionForm = () => {
  const ref = useScrollFadeIn();

  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [typeSeance, setTypeSeance] = useState<SessionType>("");

  // Listen for hash changes to pre-select session type
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      const typeMap: Record<string, SessionType> = {
        "#seance-surf": "surf",
        "#seance-famille": "famille",
        "#seance-prenatal": "prenatal",
        "#seance-aquatique": "aquatique",
      };
      const matched = typeMap[hash];
      if (matched) {
        setTypeSeance(matched);
        // Clean hash to #seance for proper scroll
        setTimeout(() => {
          document.getElementById("seance")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);
  const [lieu, setLieu] = useState("");
  const [date, setDate] = useState("");
  const [moment, setMoment] = useState("");
  const [nbPersonnes, setNbPersonnes] = useState("");
  const [message, setMessage] = useState("");

  // Surf
  const [niveauSurf, setNiveauSurf] = useState("");
  const [typePhotosSurf, setTypePhotosSurf] = useState("");

  // Famille
  const [nbEnfants, setNbEnfants] = useState("");
  const [ageEnfants, setAgeEnfants] = useState("");
  const [typeSeanceFamille, setTypeSeanceFamille] = useState("");

  // Prénatal
  const [moisGrossesse, setMoisGrossesse] = useState("");
  const [typeSeancePrenatal, setTypeSeancePrenatal] = useState("");
  const [partenaire, setPartenaire] = useState("");

  // Aquatique
  const [sportPratique, setSportPratique] = useState("");
  const [niveauAquatique, setNiveauAquatique] = useState("");

  const typeLabels: Record<string, string> = {
    surf: "Surf",
    famille: "Famille & moments plage",
    prenatal: "Shooting prénatal",
    aquatique: "Sports aquatiques",
    autre: "Autre séance océan",
  };

  const buildMessage = () => {
    let msg = `Bonjour,\nJe souhaite organiser une séance photo.\n\n`;
    if (nom) msg += `Nom : ${nom}\n`;
    if (telephone) msg += `Téléphone : ${telephone}\n`;
    if (typeSeance) msg += `Type de séance : ${typeLabels[typeSeance]}\n`;
    if (lieu) msg += `Lieu : ${lieu}\n`;
    if (date) msg += `Date souhaitée : ${date}\n`;
    if (moment) msg += `Moment : ${moment}\n`;
    if (nbPersonnes) msg += `Nombre de personnes : ${nbPersonnes}\n`;

    if (typeSeance === "surf") {
      if (niveauSurf) msg += `Niveau : ${niveauSurf}\n`;
      if (typePhotosSurf) msg += `Type de photos : ${typePhotosSurf}\n`;
    }
    if (typeSeance === "famille") {
      if (nbEnfants) msg += `Nombre d'enfants : ${nbEnfants}\n`;
      if (ageEnfants) msg += `Âge des enfants : ${ageEnfants}\n`;
      if (typeSeanceFamille) msg += `Type de séance : ${typeSeanceFamille}\n`;
    }
    if (typeSeance === "prenatal") {
      if (moisGrossesse) msg += `Mois de grossesse : ${moisGrossesse}\n`;
      if (typeSeancePrenatal) msg += `Type de séance : ${typeSeancePrenatal}\n`;
      if (partenaire) msg += `Présence du partenaire : ${partenaire}\n`;
    }
    if (typeSeance === "aquatique") {
      if (sportPratique) msg += `Sport pratiqué : ${sportPratique}\n`;
      if (niveauAquatique) msg += `Niveau : ${niveauAquatique}\n`;
    }

    if (message) msg += `\nMessage : ${message}\n`;
    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const fieldClasses = "bg-background/80 border-border/60 text-foreground placeholder:text-muted-foreground focus:border-ring";

  return (
    <section id="seance" className="py-24 md:py-32 px-4 bg-background relative overflow-hidden">
      {/* Subtle decorations */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-sunset-orange/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-electric-violet/5 blur-3xl" />

      <div ref={ref} className="container mx-auto max-w-2xl relative z-10 fade-in-section">
        <div className="text-center mb-12">
          <p className="text-gradient-sunset font-medium tracking-[0.3em] uppercase text-xs mb-4 inline-block">
            📋 Formulaire
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 tracking-wide">
            PRÉPARER VOTRE SÉANCE PHOTO
          </h2>
          <p className="text-foreground font-semibold text-xl mb-2">
            Préparez votre séance en 30 secondes
          </p>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Photographe surf à Anglet et au Pays Basque — choisissez votre type de séance et organisez votre moment dans l'océan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 md:p-10 shadow-xl">
          {/* Nom & Téléphone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nom">Nom *</Label>
              <Input id="nom" required placeholder="Votre nom" value={nom} onChange={(e) => setNom(e.target.value)} className={fieldClasses} maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telephone">Téléphone *</Label>
              <Input id="telephone" required type="tel" placeholder="06 00 00 00 00" value={telephone} onChange={(e) => setTelephone(e.target.value)} className={fieldClasses} maxLength={20} />
            </div>
          </div>

          {/* Type de séance */}
          <div className="space-y-2">
            <Label>Type de séance *</Label>
            <Select required value={typeSeance} onValueChange={(v) => setTypeSeance(v as SessionType)}>
              <SelectTrigger className={fieldClasses}><SelectValue placeholder="Choisir un type de séance" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="surf">Surf</SelectItem>
                <SelectItem value="famille">Famille & moments plage</SelectItem>
                <SelectItem value="prenatal">Shooting prénatal</SelectItem>
                <SelectItem value="aquatique">Sports aquatiques</SelectItem>
                <SelectItem value="autre">Autre séance océan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lieu & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Lieu souhaité</Label>
              <Select value={lieu} onValueChange={setLieu}>
                <SelectTrigger className={fieldClasses}><SelectValue placeholder="Choisir un lieu" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Anglet">Anglet</SelectItem>
                  <SelectItem value="Biarritz">Biarritz</SelectItem>
                  <SelectItem value="Bidart">Bidart</SelectItem>
                  <SelectItem value="Guéthary">Guéthary</SelectItem>
                  <SelectItem value="Hossegor">Hossegor</SelectItem>
                  <SelectItem value="Autre">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date souhaitée</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={fieldClasses} />
            </div>
          </div>

          {/* Moment & Nb personnes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Moment préféré</Label>
              <Select value={moment} onValueChange={setMoment}>
                <SelectTrigger className={fieldClasses}><SelectValue placeholder="Choisir un moment" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Matin">Matin</SelectItem>
                  <SelectItem value="Après-midi">Après-midi</SelectItem>
                  <SelectItem value="Coucher de soleil">Coucher de soleil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nbPersonnes">Nombre de personnes</Label>
              <Input id="nbPersonnes" type="number" min="1" max="20" placeholder="2" value={nbPersonnes} onChange={(e) => setNbPersonnes(e.target.value)} className={fieldClasses} />
            </div>
          </div>

          {/* === Conditional fields === */}

          {/* SURF */}
          {typeSeance === "surf" && (
            <div className="space-y-4 p-4 rounded-xl bg-accent/30 border border-border/30 animate-in fade-in-0 slide-in-from-top-2 duration-300">
              <p className="text-sm font-medium text-accent-foreground">🏄 Détails surf</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Niveau</Label>
                  <Select value={niveauSurf} onValueChange={setNiveauSurf}>
                    <SelectTrigger className={fieldClasses}><SelectValue placeholder="Votre niveau" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Débutant">Débutant</SelectItem>
                      <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                      <SelectItem value="Confirmé">Confirmé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Type de photos</Label>
                  <Select value={typePhotosSurf} onValueChange={setTypePhotosSurf}>
                    <SelectTrigger className={fieldClasses}><SelectValue placeholder="Type de photos" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Action">Action</SelectItem>
                      <SelectItem value="Portrait dans l'eau">Portrait dans l'eau</SelectItem>
                      <SelectItem value="Lifestyle plage">Lifestyle plage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* FAMILLE */}
          {typeSeance === "famille" && (
            <div className="space-y-4 p-4 rounded-xl bg-accent/30 border border-border/30 animate-in fade-in-0 slide-in-from-top-2 duration-300">
              <p className="text-sm font-medium text-accent-foreground">👨‍👩‍👧‍👦 Détails famille</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nbEnfants">Nombre d'enfants</Label>
                  <Input id="nbEnfants" type="number" min="0" max="10" placeholder="2" value={nbEnfants} onChange={(e) => setNbEnfants(e.target.value)} className={fieldClasses} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ageEnfants">Âge des enfants</Label>
                  <Input id="ageEnfants" placeholder="3 ans, 6 ans" value={ageEnfants} onChange={(e) => setAgeEnfants(e.target.value)} className={fieldClasses} maxLength={50} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Type de séance</Label>
                <Select value={typeSeanceFamille} onValueChange={setTypeSeanceFamille}>
                  <SelectTrigger className={fieldClasses}><SelectValue placeholder="Choisir" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Plage">Plage</SelectItem>
                    <SelectItem value="Dans l'eau">Dans l'eau</SelectItem>
                    <SelectItem value="Mix plage + eau">Mix plage + eau</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* PRÉNATAL */}
          {typeSeance === "prenatal" && (
            <div className="space-y-4 p-4 rounded-xl bg-accent/30 border border-border/30 animate-in fade-in-0 slide-in-from-top-2 duration-300">
              <p className="text-sm font-medium text-accent-foreground">🤰 Détails prénatal</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="moisGrossesse">Mois de grossesse</Label>
                  <Input id="moisGrossesse" type="number" min="1" max="9" placeholder="7" value={moisGrossesse} onChange={(e) => setMoisGrossesse(e.target.value)} className={fieldClasses} />
                </div>
                <div className="space-y-2">
                  <Label>Présence du partenaire</Label>
                  <Select value={partenaire} onValueChange={setPartenaire}>
                    <SelectTrigger className={fieldClasses}><SelectValue placeholder="Choisir" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Oui">Oui</SelectItem>
                      <SelectItem value="Non">Non</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Type de séance</Label>
                <Select value={typeSeancePrenatal} onValueChange={setTypeSeancePrenatal}>
                  <SelectTrigger className={fieldClasses}><SelectValue placeholder="Choisir" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sur la plage">Sur la plage</SelectItem>
                    <SelectItem value="Dans l'eau">Dans l'eau</SelectItem>
                    <SelectItem value="Les deux">Les deux</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* SPORTS AQUATIQUES */}
          {typeSeance === "aquatique" && (
            <div className="space-y-4 p-4 rounded-xl bg-accent/30 border border-border/30 animate-in fade-in-0 slide-in-from-top-2 duration-300">
              <p className="text-sm font-medium text-accent-foreground">🌊 Détails sport aquatique</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Sport pratiqué</Label>
                  <Select value={sportPratique} onValueChange={setSportPratique}>
                    <SelectTrigger className={fieldClasses}><SelectValue placeholder="Choisir un sport" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Surf">Surf</SelectItem>
                      <SelectItem value="Bodyboard">Bodyboard</SelectItem>
                      <SelectItem value="Paddle">Paddle</SelectItem>
                      <SelectItem value="Natation">Natation</SelectItem>
                      <SelectItem value="Longe-côte">Longe-côte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Niveau</Label>
                  <Select value={niveauAquatique} onValueChange={setNiveauAquatique}>
                    <SelectTrigger className={fieldClasses}><SelectValue placeholder="Votre niveau" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Débutant">Débutant</SelectItem>
                      <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                      <SelectItem value="Confirmé">Confirmé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Message libre */}
          <div className="space-y-2">
            <Label htmlFor="message">Message libre</Label>
            <Textarea id="message" placeholder="Décrivez votre projet, vos envies, un détail important…" value={message} onChange={(e) => setMessage(e.target.value)} className={fieldClasses} maxLength={1000} rows={3} />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            className="bg-gradient-sunset text-foreground px-10 py-7 text-lg font-semibold rounded-full shadow-2xl w-full hover:opacity-90 transition-opacity"
          >
            <WhatsAppIcon className="w-6 h-6 mr-3" />
            Envoyer ma demande sur WhatsApp
          </Button>

          <p className="text-center text-muted-foreground text-sm">
            ⚡ Réponse rapide — généralement en moins de 1 heure.
          </p>
        </form>
      </div>
    </section>
  );
};
