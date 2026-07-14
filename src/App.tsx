import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AppBlock from "./components/AppBlock";
import SuiteCombo from "./components/SuiteCombo";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AdBanner728 from "./components/AdBanner728";
import AdContainerNative from "./components/AdContainerNative";
import { APPLICATIONS } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-600 selection:text-white">
      {/* Sleek, responsive navigation */}
      <Navbar />

      {/* Hero section with dynamic quiz application recommendation */}
      <Hero />

      {/* Premium Banner Ad Placement */}
      <AdBanner728 />

      {/* Main Apps blocks with interactive live-simulation CSS mockups */}
      <main className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.02),transparent)] pointer-events-none"></div>
        
        {APPLICATIONS.map((app, idx) => (
          <AppBlock key={app.id} app={app} index={idx} />
        ))}
      </main>

      {/* Suite Combination pricing calculator */}
      <SuiteCombo />

      {/* Native Sponsored Ad Placement */}
      <AdContainerNative />

      {/* Common FAQ collapsible panel */}
      <FAQ />

      {/* Full modern legal and social metadata footer */}
      <Footer />
    </div>
  );
}
