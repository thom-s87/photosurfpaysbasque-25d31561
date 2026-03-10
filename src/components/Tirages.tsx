export const Tirages = () => {
  return (
    <section id="tirages" className="py-24 md:py-32 px-4 bg-sand-light">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
          Ramenez l'océan chez vous
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          Tirages photo premium, posters océan et magnets paysages du Pays Basque.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-lg mx-auto">
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <p className="font-serif text-3xl text-foreground mb-2">23×23</p>
            <p className="text-muted-foreground text-sm">cm — Tirage premium</p>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <p className="font-serif text-3xl text-foreground mb-2">30×30</p>
            <p className="text-muted-foreground text-sm">cm — Tirage premium</p>
          </div>
        </div>

        <p className="text-muted-foreground text-base italic">
          Photos également disponibles sur certains marchés nocturnes du Pays Basque pendant l'été.
        </p>
      </div>
    </section>
  );
};
