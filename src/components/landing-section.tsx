const LandingSection = () => {
  return (
    <section
      id="landing"
      className="relative flex h-screen w-full select-none items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"
    >
      <h1 className="text-center text-8xl font-bold tracking-wider">
        Zarządzanie projektami IT
      </h1>
      <a
        href="#general"
        className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce text-xl font-semibold"
      >
        Dalej
      </a>
    </section>
  );
};

export default LandingSection;
