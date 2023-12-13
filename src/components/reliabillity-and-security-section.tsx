import SecondaryHeading from "./secondary-heading";
import { reliability, security } from "../constants/code-metrics";
import { metricsDescriptions } from "../constants/metrics-descriptions";

const ReliabillityAndSecuritySection = () => {
  return (
    <div id="reliabillity" className="h-screen w-full flex-col py-32">
      <div className="flex h-[calc(100%-24px)]">
        <section className="flex flex-1 flex-col items-center bg-black">
          <SecondaryHeading text="Niezawodność" />
          <div className="flex h-full select-none flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-125">
              <p className="text-xl">Bugi</p>
              <span className="text-4xl font-bold">{reliability.bugs}</span>
            </div>
            <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-125">
              <p className="text-xl">Ocena</p>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-4xl font-bold">
                {reliability.rating}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-125">
              <p className="text-xl">Wysiłek naprawczy</p>
              <span className="text-4xl font-bold">
                {reliability.remediationEffort}
              </span>
            </div>
            <p className="p-10 text-justify">{metricsDescriptions["bugs"]}</p>
          </div>
        </section>
        <section className="flex flex-1 flex-col items-center">
          <SecondaryHeading text="Bezpieczeństwo" />
          <div className="flex h-full select-none flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-125">
              <p className="text-xl">Luki w zabezpieczeniach</p>
              <span className="text-4xl font-bold">
                {security.vulnerabilities}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-125">
              <p className="text-xl">Ocena</p>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-4xl font-bold">
                {security.rating}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-125">
              <p className="text-xl">Wysiłek naprawczy</p>
              <span className="text-4xl font-bold">
                {security.remediationEffort}
              </span>
            </div>
            <p className="p-10 text-justify">
              {metricsDescriptions["vulnerabilities"]}
            </p>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center gap-2">
        <a
          href="#general"
          className="text-gray-500 transition-colors hover:text-white"
        >
          Wróć
        </a>
        <span className="text-lg font-semibold">2/5</span>
        <a
          href="#maintainabillity"
          className="text-gray-500 transition-colors hover:text-white"
        >
          Dalej
        </a>
      </div>
    </div>
  );
};

export default ReliabillityAndSecuritySection;
