import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Menu, X, Layers } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-900/60 py-3.5 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            onClick={() => handleScrollTo("hero")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="bg-indigo-600 w-10 h-10 rounded-xl text-white shadow-md shadow-indigo-900/20 flex items-center justify-center font-black text-2xl group-hover:scale-105 transition-transform">
              N
            </div>
            <div>
              <span className="font-display font-black text-2xl tracking-tighter italic uppercase text-slate-100 group-hover:text-white transition-colors">
                Nomadax<span className="text-indigo-400">Hub</span>
              </span>
              <span className="block text-[8px] font-mono tracking-widest text-indigo-400 uppercase leading-none">
                Ecosistema Digital
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-7">
            <button
              onClick={() => handleScrollTo("cerebro-familiar")}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Cerebro Familiar
            </button>
            <button
              onClick={() => handleScrollTo("nunca-mas-manana")}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Nunca Más Mañana
            </button>
            <button
              onClick={() => handleScrollTo("pets-mastery")}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Pets Mastery
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleScrollTo("selector-quiz")}
              className="bg-white text-black px-4.5 py-1.5 rounded-full font-black text-[11px] transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-lg uppercase tracking-wider"
            >
              <Sparkles className="w-3 h-3 text-indigo-600" /> DESCUBRIR MI APP
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-slate-900 px-4 pt-4 pb-6 space-y-3.5 animate-fadeIn">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleScrollTo("cerebro-familiar")}
              className="text-sm font-semibold text-slate-300 hover:text-white text-left py-1.5 border-b border-slate-900"
            >
              🏠 Cerebro Familiar
            </button>
            <button
              onClick={() => handleScrollTo("nunca-mas-manana")}
              className="text-sm font-semibold text-slate-300 hover:text-white text-left py-1.5 border-b border-slate-900"
            >
              🔥 Nunca Más Mañana
            </button>
            <button
              onClick={() => handleScrollTo("pets-mastery")}
              className="text-sm font-semibold text-slate-300 hover:text-white text-left py-1.5 border-b border-slate-900"
            >
              🐾 Academia Pets Mastery
            </button>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => handleScrollTo("selector-quiz")}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2.5 rounded-xl text-center flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> Cuestionario Recomendador
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
