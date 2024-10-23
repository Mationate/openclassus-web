export const Hero = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('start');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div
      className="h-screen w-full overflow-hidden bg-[url('/assets/hero.png')] bg-cover bg-top bg-no-repeat"
    >
      <div className="h-full flex justify-center items-center bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-amber-400 sm:text-3xl md:text-5xl">NOT A GAME</h2>

          <p className="max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
          Not a Game es un proceso de facilitación, un catalizador de aprendizaje dinámico y colaborativo, diseñado para desafiar a los equipos a desarrollar soluciones innovadoras o buscar la eficiencia en los equipos de trabajo. Nos apasiona fomentar el liderazgo, la creatividad y la estrategia, transformando cada sesión en una experiencia práctica que va más allá del juego.
          </p>

          <div className="mt-4 sm:mt-8">
          <button
            onClick={handleScrollToContact}
              className="inline-block rounded-full bg-amber-400 px-12 py-3 text-sm font-medium text-black transition hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-amber-400"
            >
              ¿Quieres saber más?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
