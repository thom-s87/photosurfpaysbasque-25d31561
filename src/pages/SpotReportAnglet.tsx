import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wind, Waves, Sun, Calendar, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WHATSAPP_URL = "https://wa.me/33695349187";
const WINDY_URL = "https://www.windy.com/?43.505,-1.541,12";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const conditions = [
  { icon: Waves, label: "Houle", value: "1,5 m à 3 m", color: "text-blue-500" },
  { icon: Clock, label: "Période", value: "> 10 s", color: "text-indigo-500" },
  { icon: Wind, label: "Vent", value: "Faible offshore ou side-off", color: "text-green-500" },
  { icon: Sun, label: "Marée", value: "Mi-marée montante recommandée", color: "text-yellow-500" },
];

const SpotReportAnglet = () => {
  const today = new Date();
  const dateStr = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 font-poppins">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-poppins">
              Surf report Anglet – VVF (Petite Chambre d'Amour)
            </h1>
            <p className="text-lg text-gray-500 mb-6 flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              {dateStr}
            </p>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Photographe surf à Anglet, spécialisé dans la capture de sessions en conditions réelles sur les plages emblématiques de la Côte Basque. Des digues de la Petite Chambre d'Amour aux bancs de sable entre Les Cavaliers et La Barre, je photographie les surfeurs là où les vagues s'expriment vraiment.
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Chaque session est pensée comme une immersion : lecture des conditions, choix des axes de prise de vue, timing précis et connaissance du spot.
            </p>
          </div>
        </section>

        {/* Historique du spot */}
        <section className="py-16 px-4 bg-white/40">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-700 font-poppins">
              Petite Chambre d'Amour – Anciennement VVF
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Anciennement connu sous le nom de <strong>VVF</strong>, le spot est aujourd'hui appelé <strong>Petite Chambre d'Amour</strong>. Ce changement de nom s'explique par la volonté de recentrer l'identité du spot sur son ancrage historique et géographique, à proximité immédiate de la Chambre d'Amour d'Anglet.
              </p>
              <p>
                Le spot de la Petite Chambre d'Amour fonctionne principalement avec des <strong>houles d'ouest à nord-ouest</strong>. Les digues offrent un accès privilégié à l'immersion, permettant d'observer les lignes dès leur formation et de travailler des angles de prise de vue proches de l'action.
              </p>
              <p>
                Entre <strong>Les Cavaliers et La Barre</strong>, les bancs de sable évoluent fréquemment, créant des sections rapides idéales pour la photographie surf. Les digues facilitent la lecture des vagues et permettent des prises de vue en <strong>contre-plongée ou à hauteur d'eau</strong>, renforçant l'impression de puissance et de vitesse.
              </p>
            </div>
          </div>
        </section>

        {/* Conditions idéales */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-700 font-poppins">
              Conditions idéales pour la photo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {conditions.map((c) => (
                <Card key={c.label} className="bg-white/80 text-center hover:shadow-xl transition-all">
                  <CardHeader className="pb-2">
                    <c.icon className={`w-8 h-8 ${c.color} mx-auto`} />
                    <CardTitle className="text-lg">{c.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">{c.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="rounded-full" asChild>
                <a href={WINDY_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir les conditions en direct sur Windy – Anglet
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Sessions */}
        <section className="py-16 px-4 bg-white/40">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-white/80 rounded-2xl p-8 shadow-lg text-center">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Lorsque les conditions sont réunies, des <strong>sessions photo surf</strong> sont possibles sur ce spot. Chaque sortie est adaptée aux conditions du jour et au niveau des surfeurs présents.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Me contacter pour une session aujourd'hui
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
                Me contacter pour une session
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpotReportAnglet;
