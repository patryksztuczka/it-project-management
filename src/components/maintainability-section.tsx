import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import SecondaryHeading from "./secondary-heading";
import { maintainability } from "../constants/code-metrics";
import { metricsDescriptions } from "../constants/metrics-descriptions";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Low", "Medium", "High"],
  datasets: [
    {
      label: "# of Votes",
      data: [maintainability.low, maintainability.medium, maintainability.high],
      backgroundColor: [
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(255, 99, 132, 0.5)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const MaintainabillitySection = () => {
  return (
    <section
      id="maintainabillity"
      className="flex h-screen flex-col items-center py-32"
    >
      <SecondaryHeading text="Łatwość konserwacji" />
      <div className="flex h-full w-full">
        <div className="flex h-full flex-1 select-none flex-col justify-center gap-10">
          <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-125">
            <p className="text-xl">Zapachy kodu</p>
            <span className="text-4xl font-bold">
              {maintainability.codeSmells}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-125">
            <p className="text-xl">Dług techniczny</p>
            <span className="text-4xl font-bold">
              {maintainability.debt} minut
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-125">
            <p className="text-xl">Ocena</p>
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-4xl font-bold">
              {maintainability.rating}
            </span>
          </div>
          <p className="p-10 text-justify">
            {metricsDescriptions["codeSmells"]}
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Doughnut data={data} />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <a
          href="#reliabillity"
          className="text-gray-500 transition-colors hover:text-white"
        >
          Wróć
        </a>
        <span className="text-lg font-semibold">3/5</span>
        <a
          href="#complexity"
          className="text-gray-500 transition-colors hover:text-white"
        >
          Dalej
        </a>
      </div>
    </section>
  );
};

export default MaintainabillitySection;
