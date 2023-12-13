import { duplications, size } from "../constants/code-metrics";
import SecondaryHeading from "./secondary-heading";
import { useState } from "react";
import clsx from "clsx";
import { metricsDescriptions } from "../constants/metrics-descriptions";

const GeneralSection = () => {
  const [metric, setMetric] = useState<string>("linesOfCode");

  const handleSetMetric = (metric: string) => {
    setMetric(metric);
  };

  return (
    <section
      id="general"
      className="flex h-screen w-full flex-col items-center py-32"
    >
      <SecondaryHeading text="Rozmiar" />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-full flex-wrap justify-around gap-10">
          <div
            className={clsx(
              "flex cursor-pointer select-none flex-col items-center gap-2 transition-all",
              metric === "linesOfCode"
                ? "scale-125"
                : "scale-100 text-gray-500 hover:text-gray-400",
            )}
            onClick={() => handleSetMetric("linesOfCode")}
          >
            <p className="text-xl">Linijki kodu</p>
            <span className="text-4xl font-bold">{size.linesOfCode}</span>
          </div>
          <div
            className={clsx(
              "flex cursor-pointer select-none flex-col items-center gap-2 transition-all",
              metric === "statements"
                ? "scale-125"
                : "scale-100 text-gray-500 hover:text-gray-400",
            )}
            onClick={() => handleSetMetric("statements")}
          >
            <p className="text-xl">Instukcje</p>
            <span className="text-4xl font-bold">{size.statements}</span>
          </div>
          <div
            className={clsx(
              "flex cursor-pointer select-none flex-col items-center gap-2 transition-all",
              metric === "functions"
                ? "scale-125"
                : "scale-100 text-gray-500 hover:text-gray-400",
            )}
            onClick={() => handleSetMetric("functions")}
          >
            <p className="text-xl">Funkcje</p>
            <span className="text-4xl font-bold">{size.functions}</span>
          </div>
          <div
            className={clsx(
              "flex cursor-pointer select-none flex-col items-center gap-2 transition-all",
              metric === "files"
                ? "scale-125"
                : "scale-100 text-gray-500 hover:text-gray-400",
            )}
            onClick={() => handleSetMetric("files")}
          >
            <p className="text-xl">Pliki</p>
            <span className="text-4xl font-bold">{size.files}</span>
          </div>
          <div
            className={clsx(
              "flex cursor-pointer select-none flex-col items-center gap-2 transition-all",
              metric === "duplicatedLines"
                ? "scale-125"
                : "scale-100 text-gray-500 hover:text-gray-400",
            )}
            onClick={() => handleSetMetric("duplicatedLines")}
          >
            <p className="text-xl">Zduplikowane linijki</p>
            <span className="text-4xl font-bold">
              {duplications.duplicatedLines}
            </span>
          </div>
          <div
            className={clsx(
              "flex cursor-pointer select-none flex-col items-center gap-2 transition-all",
              metric === "commentLines"
                ? "scale-125"
                : "scale-100 text-gray-500 hover:text-gray-400",
            )}
            onClick={() => handleSetMetric("commentLines")}
          >
            <p className="text-xl">Komentarze</p>
            <span className="text-4xl font-bold">{size.commentLines}</span>
          </div>
          <div
            className={clsx(
              "flex cursor-pointer select-none flex-col items-center gap-2 transition-all",
              metric === "commentPercentage"
                ? "scale-125"
                : "scale-100 text-gray-500 hover:text-gray-400",
            )}
            onClick={() => handleSetMetric("commentPercentage")}
          >
            <p className="text-xl">Komentarze [%]</p>
            <span className="text-4xl font-bold">
              {((size.commentLines / size.linesOfCode) * 100).toFixed(2)}%
            </span>
          </div>
        </div>
        <p className="flex h-80 w-3/5 items-center text-justify">
          {metricsDescriptions[metric]}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="#landing"
          className="text-gray-500 transition-colors hover:text-white"
        >
          Wróć
        </a>
        <span className="text-lg font-semibold">1/5</span>
        <a
          href="#reliabillity"
          className="text-gray-500 transition-colors hover:text-white"
        >
          Dalej
        </a>
      </div>
    </section>
  );
};

export default GeneralSection;
