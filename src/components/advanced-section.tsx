import SecondaryHeading from "./secondary-heading";

const AdvancedSection = () => {
  return (
    <section
      id="advanced"
      className="flex h-screen flex-col items-center bg-purple-950 py-32"
    >
      <SecondaryHeading text="Zaawansowane metryki" />
      <div className="flex items-center justify-center gap-2">
        <a
          href="#complexity"
          className="text-gray-500 transition-colors hover:text-white"
        >
          Wróć
        </a>
        <span className="text-lg font-semibold">5/5</span>
        <a
          href="#maintainabillity"
          className="hidden text-gray-500 transition-colors hover:text-white"
        >
          Dalej
        </a>
      </div>
    </section>
  );
};

export default AdvancedSection;
