import SecondaryHeading from "./secondary-heading";

const ComplexitySection = () => {
  return (
    <section
      id="complexity"
      className="flex h-screen flex-col items-center bg-red-950 py-32"
    >
      <SecondaryHeading text="Złożoność" />
      <div className="flex items-center justify-center gap-2">
        <a
          href="#maintainabillity"
          className="text-gray-500 transition-colors hover:text-white"
        >
          Wróć
        </a>
        <span className="text-lg font-semibold">4/5</span>
        <a
          href="#advanced"
          className="text-gray-500 transition-colors hover:text-white"
        >
          Dalej
        </a>
      </div>
    </section>
  );
};

export default ComplexitySection;
