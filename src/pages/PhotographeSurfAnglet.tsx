import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Sun, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://wa.me/33695349187";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const spots = [
  {
    name: "Cavaliers",
    description: "Le spot phare d'Anglet pour la photo surf. Vagues régulières, bon angle de lumière matin et soir. Idéal pour des photos dynamiques avec un arrière-plan dégagé.",
    best: "Marée mi-basse, houle ouest 1m–1.5m",
  },
  {
    name: "Marinella",
    description: "Beach break puissant avec des vagues creuses qui offrent des images spectaculaires. Spot privilégié pour les surfeurs confirmés et les photos d'action.",
    best: "Marée basse, houle nord-ouest",
  },
  {
    name: "Sables d'Or",
    description: "Plage polyvalente avec des vagues accessibles à tous niveaux. Parfait pour les sessions photo débutants et les familles.",
    best: "Toutes marées, conditions modérées",
  },
  {
    name: "Chambre d'Amour",
    description: "Cadre unique avec les falaises en arrière-plan. Les photos de surf y sont particulièrement esthétiques grâce au décor naturel exceptionnel.",
    best: "Marée montante, lumière dorée fin de journée",
  },
];

const PhotographeSurfAnglet = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 font-poppins">
      <Header />
      <main className="pt-24">
        {/* Hero section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-poppins">
              Photographe surf à Anglet – Sessions photo professionnelles
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Thom, photographe local spécialisé en surf à Anglet. Je connais chaque plage, chaque marée, chaque angle de lumière pour capturer tes meilleures vagues sur les spots de Cavaliers, Marinella, Sables d'Or et Chambre d'Amour.
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-6 text-xl font-bold rounded-full shadow-2xl"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 mr-3" />
                Contacte un photographe surf local à Anglet
              </a>
            </Button>
          </div>
        </section>

        {/* Pourquoi Anglet */}
        <section className="py-16 px-4 bg-white/40">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-700 font-poppins">
              Pourquoi Anglet est le meilleur spot photo surf du Pays Basque
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Anglet offre <strong>11 plages</strong> orientées plein ouest, chacune avec son caractère unique. Cette diversité permet de toujours trouver le spot idéal en fonction des conditions de houle, de vent et de marée. C'est un avantage majeur pour la photographie de surf : on choisit la plage qui offre les meilleures conditions visuelles du moment.
              </p>
              <p>
                Contrairement à Biarritz où les spots sont plus exposés au vent de sud et souvent bondés, Anglet offre des plages spacieuses avec moins de monde à l'eau, ce qui facilite le cadrage et permet de se concentrer sur le surfeur. La lumière y est exceptionnelle, surtout en fin de journée face aux falaises de la Chambre d'Amour.
              </p>
              <p>
                En tant que <strong>photographe surf basé à Anglet</strong>, je suis sur place en quelques minutes, prêt à shooter dès que les conditions sont optimales. Cette réactivité fait toute la différence pour ne rater aucune session.
              </p>
            </div>
          </div>
        </section>

        {/* Spots d'Anglet */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-700 font-poppins">
              Les spots de surf à Anglet pour la photo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {spots.map((spot) => (
                <Card key={spot.name} className="bg-white/80 backdrop-blur-sm border-l-4 border-l-purple-500 hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-600 text-xl">
                      <MapPin className="w-5 h-5 mr-2" />
                      {spot.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{spot.description}</p>
                    <p className="text-sm text-purple-600 font-medium flex items-center">
                      <Sun className="w-4 h-4 mr-1" />
                      Meilleur créneau : {spot.best}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions idéales */}
        <section className="py-16 px-4 bg-white/40">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-700 font-poppins">
              Conditions idéales pour une session photo surf à Anglet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <Sun className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Lumière</h3>
                <p className="text-gray-600">Lever et coucher de soleil offrent la lumière dorée idéale. Les sessions du matin à Cavaliers sont magiques.</p>
              </div>
              <div className="text-center p-6">
                <Camera className="w-10 h-10 text-purple-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Houle</h3>
                <p className="text-gray-600">Houle ouest à nord-ouest entre 1m et 1.5m : des vagues propres et photogéniques sur les plages d'Anglet.</p>
              </div>
              <div className="text-center p-6">
                <Star className="w-10 h-10 text-pink-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Vent</h3>
                <p className="text-gray-600">Vent offshore (est/sud-est) ou conditions glassy. Les matins sont souvent sans vent à Anglet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SEO */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-700 font-poppins">
              Questions fréquentes – Photo surf à Anglet
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="q1" className="bg-white/80 rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium text-gray-800">
                  Quel est le meilleur spot pour une photo de surf à Anglet ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Cavaliers est le spot le plus polyvalent pour la photo surf à Anglet. Sa configuration offre un excellent angle de vue et une lumière idéale le matin comme en fin de journée. Pour des photos avec un décor plus spectaculaire, la Chambre d'Amour et ses falaises sont imbattables.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="bg-white/80 rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium text-gray-800">
                  Peut-on réserver une session photo surf à Anglet aujourd'hui ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Oui, sous réserve de conditions favorables. Envoie-moi un message WhatsApp et je te confirme la faisabilité dans l'heure selon la houle, le vent et la marée à Anglet. Ma réactivité locale est un vrai plus.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="bg-white/80 rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium text-gray-800">
                  Photographe surf Anglet ou Biarritz : quelle différence ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Anglet offre plus de plages et moins de monde, ce qui facilite le cadrage et le suivi du surfeur. Biarritz a des spots iconiques comme la Côte des Basques, mais plus fréquentés. Je couvre les deux zones, mais Anglet est mon terrain principal avec une connaissance fine de chaque plage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="bg-white/80 rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium text-gray-800">
                  Combien coûte une session photo surf à Anglet ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Les tarifs dépendent de la durée et du type de session (photo, vidéo ou les deux). Contacte-moi directement sur WhatsApp pour un devis personnalisé adapté à tes besoins.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="bg-white/80 rounded-xl px-4">
                <AccordionTrigger className="text-left font-medium text-gray-800">
                  Comment trouver un photographe de surf près de chez moi à Anglet ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Tu es au bon endroit ! Je suis basé à Anglet et je couvre toute la côte basque. Un simple message WhatsApp suffit pour organiser une session sur le spot le plus adapté aux conditions du jour.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Réserve ta session photo surf à Anglet
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Photographe local, réactif, expert des spots d'Anglet et de la côte basque
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-12 py-8 text-2xl font-bold rounded-full shadow-2xl"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-8 h-8 mr-3" />
                Contacte un photographe surf local à Anglet
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PhotographeSurfAnglet;
