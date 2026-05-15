export const TrustStrip = () => {
  return (
    <section className="bg-night/95 border-y border-electric-violet/20 py-4 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-center text-primary-foreground text-sm md:text-base font-medium">
          <div className="flex items-center justify-center gap-2">
            <span>✅</span>
            <span>+200 sessions réalisées</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>⭐</span>
            <span>Avis 5 étoiles</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>📱</span>
            <span>Réponse en 15 min</span>
          </div>
        </div>
      </div>
    </section>
  );
};
