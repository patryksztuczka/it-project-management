import LandingSection from "./components/landing-section";
import Footer from "./components/footer";
import GeneralSection from "./components/general-section";
import "./index.css";
import AdvancedSection from "./components/advanced-section";
import ReliabillityAndSecuritySection from "./components/reliabillity-and-security-section";
import MaintainabillitySection from "./components/maintainability-section";
import ComplexitySection from "./components/complexity-section";

function App() {
  return (
    <div className="flex w-full flex-col items-center">
      <LandingSection />
      <main className="w-3/5">
        <GeneralSection />
        <ReliabillityAndSecuritySection />
        <MaintainabillitySection />
        <ComplexitySection />
        <AdvancedSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
