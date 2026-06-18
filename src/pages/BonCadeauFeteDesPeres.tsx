import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setSeo, buildLocalBusiness, buildFaqPage, buildBreadcrumbs } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Gift, Check, Clock, Camera, Heart, Waves, Users, MapPin } from "lucide-react";
import papaSurfImg from "@/assets/papa_surf.JPG";
import pereFilsImg from "@/assets/pere_et_fils_surf.JPG";

const WA_MESSAGE =
  "Bonjour Thom, je souhaite réserver le bon cadeau Fête des Pères à 45 € avec les 5 photos offertes.";
const WA_URL = `https://wa.me/33695349187?text=${encodeURIComponent(WA_MESSAGE)}`;
const SMS_URL = `sms:+33695349187?&body=${encodeURIComponent(WA_MESSAGE)}`;

const PATH = "/bon-cadeau-fete-des-peres";

const faqItems = [
  {
    question: "Le bon cadeau doit-il être utilisé avant dimanche ?",
    answer:
      "Non. L'offre doit simplement être réservée avant dimanche. Le rendez-vous photo peut être pris plus tard, selon les disponibilités.",
  },
  {
    question: "Combien coûte le bon cadeau Fête des Pères ?",
    answer:
      "Le bon cadeau Fête des Pères est proposé à 45 € avec 5 photos offertes exceptionnellement.",
  },
  {
    question: "Où se déroule la séance photo ?",
    answer:
      "Les séances se déroulent principalement au Pays Basque, autour d'Anglet, Biarritz et des spots proches de l'océan.",
  },
  {
    question: "Pour quel type de séance peut-on utiliser le bon cadeau ?",
    answer:
      "Le bon cadeau peut être utilisé pour une séance surf, body surf, famille, enfant, couple ou moment père-enfant à l'océan.",
  },
  {
    question: "Comment commander le bon cadeau ?",
    answer:
      "La réservation se fait simplement par WhatsApp. Le bon cadeau est ensuite envoyé par message ou par e-mail.",
  },
];

const idees = [
  { icon: Waves, label: "Papa surfeur" },
  { icon: Heart, label: "Papa amoureux de l'océan" },
  { icon: Users, label: "Moment père-enfant" },
  { icon: Camera, label: "Séance famille à la plage" },
  { icon: MapPin, label: "Souvenir local au Pays Basque" },
];

const inclus = [
  "Réservation du bon cadeau à 45 €",
  "5 photos numériques offertes",
  "Bon cadeau personnalisé",
  "Séance photo à l'océan au Pays Basque",
  "Rendez-vous possible plus tard",
  "Envoi du bon cadeau par message ou e-mail",
];

const BonCadeauFeteDesPeres = () => {
  useEffect(() => {
    setSeo({
      title: "Bon cadeau Fête des Pères Pays Basque | PhotoSurfPaysBasque",
      description:
        "Offrez un bon cadeau photo pour la Fête des Pères au Pays Basque : réservation à 45 € avec 5 photos offertes. Offre valable jusqu'à dimanche, rendez-vous possible plus tard.",
      path: PATH,
      keywords:
        "bon cadeau fête des pères, idée cadeau fête des pères pays basque, bon cadeau photo pays basque, cadeau papa surf, cadeau papa océan, séance photo océan pays basque, photographe surf anglet, photographe famille pays basque",
      image: papaSurfImg,
      type: "website",
      jsonLd: [
        buildLocalBusiness({
          name: "PhotoSurfPaysBasque — Bon cadeau Fête des Pères",
          description:
            "Bon cadeau photo Fête des Pères au Pays Basque : 45 € + 5 photos offertes.",
          path: PATH,
          image: papaSurfImg,
        }),
        buildFaqPage(faqItems),
        buildBreadcrumbs([
          { name: "Accueil", path: "/" },
          { name: "Bon cadeau Fête des Pères", path: PATH },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Offer",
          name: "Bon cadeau Fête des Pères",
          description:
            "Bon cadeau séance photo océan + 5 photos numériques offertes",
          price: "45",
          priceCurrency: "EUR",
          availability: "https://schema.org/LimitedAvailability",
          url: `https://photosurfpaysbasque.fr${PATH}`,
        },
      ],
    });
  }, []);

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={papaSurfImg}
              alt="Papa et fils sur une vague au Pays Basque — bon cadeau Fête des Pères"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a0833]/80 via-[#3a1066]/70 to-[#ff5a8a]/60" />
          </div>
          <div className="relative max-w-5xl mx-auto px-5 py-20 md:py-32 text-white">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-300 text-[#2a0a4a] font-bold text-xs uppercase tracking-wider mb-5">
              <Gift className="w-4 h-4" /> Offre Fête des Pères
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-5">
              Bon cadeau Fête des Pères au Pays Basque
            </h1>
            <p className="text-xl md:text-2xl text-yellow-200 font-semibold mb-4">
              Offrez-lui un souvenir à l'océan avec PhotoSurfPaysBasque.
            </p>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mb-3">
              Pour la Fête des Pères, offrez une expérience simple, locale et pleine
              d'émotion : une séance photo à l'océan au Pays Basque.
            </p>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mb-3">
              Réservez votre bon cadeau pour <strong className="text-yellow-300">45 €</strong> et
              profitez exceptionnellement de <strong className="text-yellow-300">5 photos offertes</strong>.
            </p>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mb-8">
              L'offre est valable <strong>jusqu'à dimanche uniquement</strong>. Le rendez-vous photo
              pourra être pris plus tard, selon les disponibilités.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-yellow-300 text-[#2a0a4a] font-bold text-base md:text-lg shadow-xl hover:bg-yellow-200 transition whitespace-normal text-center"
              >
                🎁 Réserver sur WhatsApp
              </a>
              <a
                href={SMS_URL}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#2a0a4a] font-bold text-base md:text-lg shadow-xl hover:bg-white/90 transition whitespace-normal text-center border-2 border-yellow-300"
              >
                📱 Réserver par SMS
              </a>
            </div>
          </div>
        </section>

        {/* BLOC OFFRE */}
        <section className="py-16 md:py-20 px-5 bg-gradient-to-br from-[#1a0833] to-[#3a1066] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl mb-8">
              Offre spéciale Fête des Pères
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              <div className="rounded-2xl bg-white/10 backdrop-blur p-8 border border-yellow-300/30">
                <p className="text-5xl md:text-6xl font-display text-yellow-300 mb-2">45 €</p>
                <p className="text-lg">Réservation du bon cadeau</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur p-8 border border-pink-400/30">
                <p className="text-5xl md:text-6xl font-display text-pink-300 mb-2">+5</p>
                <p className="text-lg">photos offertes</p>
              </div>
            </div>
            <p className="text-white/90 max-w-2xl mx-auto mb-4">
              Cette offre spéciale permet de réserver un bon cadeau PhotoSurfPaysBasque à
              offrir pour la Fête des Pères. Le bon cadeau peut ensuite être utilisé pour
              planifier une séance photo à l'océan : surf, body surf, famille, enfant, couple
              ou moment père-enfant.
            </p>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-300/20 text-yellow-200 font-semibold text-sm">
              <Clock className="w-4 h-4" /> Offre valable jusqu'à dimanche soir · Rendez-vous possible après la Fête des Pères
            </p>
          </div>
        </section>

        {/* IDÉE CADEAU */}
        <section className="py-16 md:py-20 px-5 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-5 text-center">
              Une idée cadeau originale pour un papa qui aime l'océan
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              Plutôt qu'un cadeau classique, offrez un vrai souvenir. PhotoSurfPaysBasque
              capture des moments naturels au bord de l'eau, dans l'univers du surf, de la
              famille et de l'océan au Pays Basque.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {idees.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-5 text-center bg-gradient-to-br from-[#3a1066]/10 to-[#ff5a8a]/10 border border-[#3a1066]/15 hover:border-[#ff5a8a]/40 transition"
                >
                  <Icon className="w-7 h-7 mx-auto mb-2 text-[#3a1066]" />
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CE QUI EST INCLUS */}
        <section className="py-16 md:py-20 px-5 bg-gradient-to-br from-[#fff7e6] to-[#ffe9f0]">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={pereFilsImg}
                alt="Père et fils surfeurs au Pays Basque — séance photo océan"
                className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-[#2a0a4a] mb-6">
                Ce qui est inclus dans le bon cadeau
              </h2>
              <ul className="space-y-3">
                {inclus.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#ff5a8a] mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* COMMENT ÇA MARCHE */}
        <section className="py-16 md:py-20 px-5 bg-background">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-10 text-center">
              Comment réserver le bon cadeau ?
            </h2>
            <ol className="space-y-5">
              {[
                "Vous réservez le bon cadeau avant dimanche",
                "Vous recevez le bon cadeau par message ou e-mail",
                "Vous l'offrez pour la Fête des Pères",
                "Le rendez-vous photo est fixé ensuite selon les disponibilités",
              ].map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#3a1066] to-[#ff5a8a] text-white font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-foreground pt-2">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* URGENCE */}
        <section className="py-16 md:py-20 px-5 bg-gradient-to-br from-[#ff5a8a] via-[#ff8a3d] to-[#ffd23d] text-[#2a0a4a]">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="w-10 h-10 mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-5xl mb-5">
              Offre valable jusqu'à dimanche uniquement
            </h2>
            <p className="text-base md:text-lg mb-8 max-w-xl mx-auto">
              La réservation à 45 € avec 5 photos offertes est disponible uniquement jusqu'à
              dimanche soir. Après cette date, l'offre spéciale Fête des Pères ne sera plus
              disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#2a0a4a] text-yellow-300 font-bold text-base md:text-lg shadow-xl hover:bg-[#3a1066] transition whitespace-normal text-center"
              >
                🎁 Réserver sur WhatsApp
              </a>
              <a
                href={SMS_URL}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#2a0a4a] font-bold text-base md:text-lg shadow-xl hover:bg-white/90 transition whitespace-normal text-center border-2 border-[#2a0a4a]"
              >
                📱 Réserver par SMS
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 px-5 bg-background">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-10 text-center">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((f) => (
                <details
                  key={f.question}
                  className="group rounded-2xl border border-border bg-card p-5"
                >
                  <summary className="cursor-pointer font-semibold text-foreground list-none flex justify-between items-center gap-4">
                    <span>{f.question}</span>
                    <span className="text-[#ff5a8a] group-open:rotate-45 transition-transform text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{f.answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Découvrez aussi les{" "}
              <Link to="/photographe-surf-anglet" className="underline hover:text-[#ff5a8a]">
                séances surf à Anglet
              </Link>{" "}
              et les{" "}
              <Link
                to="/famille-bebe-groupes-pays-basque"
                className="underline hover:text-[#ff5a8a]"
              >
                shootings famille au Pays Basque
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileFixedCTA />
      <FloatingWhatsApp />
    </div>
  );
};

export default BonCadeauFeteDesPeres;
