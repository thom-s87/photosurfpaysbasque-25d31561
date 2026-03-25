import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SurfContactForm } from "@/components/SurfContactForm";
import bodysurfHero from "@/assets/bodysurf-hero.jpg";
import bodysurfAction from "@/assets/bodysurf-action.jpg";
import bodysurfLifestyle from "@/assets/bodysurf-lifestyle.jpg";

const PhotographeBodySurfPaysBasque = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero image */}
      <section className="pt-20">
        <div className="w-full px-4 md:px-8">
          <img
            src={bodysurfHero}
            alt="Body surfeur en action dans les vagues du Pays Basque"
            width={1920}
            height={1080}
            className="w-full h-[50vh] md:h-[60vh] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Titre + Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-center">
            Photographe Body Surf au Pays Basque 🌊
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center">
            Le body surf, c'est le plaisir brut de la glisse, au plus près de l'eau et des sensations. Je propose des shootings photo body surf au Pays Basque pour capturer l'énergie, le mouvement et l'intensité de vos sessions dans l'océan.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-12 px-4 bg-card/40">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Des images au cœur de l'action
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            En body surf, tout se joue dans l'instant. Mon approche consiste à photographier au plus près de la session, dans l'eau, pour capter les trajectoires, les éclaboussures, les regards et l'énergie de chaque vague.
          </p>
        </div>
      </section>

      {/* Image milieu */}
      <section className="py-8 px-4 md:px-8">
        <img
          src={bodysurfAction}
          alt="Body surf en mouvement sur la côte basque"
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-[40vh] md:h-[50vh] object-cover rounded-2xl shadow-xl"
        />
      </section>

      {/* Section 2 */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Une pratique libre et accessible
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Le body surf séduit autant les passionnés d'océan que ceux qui recherchent une glisse plus instinctive et naturelle. Que vous soyez habitué des vagues ou simplement en quête de sensations, une séance photo body surf permet de garder une trace forte et authentique de ce moment.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-12 px-4 bg-card/40">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Des séances au Pays Basque
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Les shootings peuvent se faire à Anglet, Biarritz ou sur la côte basque selon les conditions. Chaque séance s'adapte à la lumière, à la marée et à l'ambiance.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Pour qui ?
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Passionnés d'océan, amateurs de body surf, groupes d'amis ou familles sportives.
          </p>
        </div>
      </section>

      {/* Image lifestyle */}
      <section className="py-8 px-4 md:px-8">
        <img
          src={bodysurfLifestyle}
          alt="Moment lifestyle body surf lumière dorée Pays Basque"
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-[40vh] md:h-[50vh] object-cover rounded-2xl shadow-xl"
        />
      </section>

      {/* Section 5 + Formulaire */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Réserver votre séance
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Envie de capturer une session body surf au Pays Basque ? Contactez-moi pour organiser votre séance.
          </p>
        </div>
      </section>

      <SurfContactForm />

      <Footer />
    </div>
  );
};

export default PhotographeBodySurfPaysBasque;
