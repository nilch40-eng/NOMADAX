import { Layers, Github, Heart, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900/60 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-900/60">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div
              onClick={() => handleScrollTo("hero")}
              className="inline-flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="bg-indigo-600 w-10 h-10 rounded-xl text-white shadow-md shadow-indigo-950/40 flex items-center justify-center font-black text-2xl group-hover:scale-105 transition-transform">
                N
              </div>
              <span className="font-display font-black text-2xl tracking-tighter italic uppercase text-slate-100 group-hover:text-white transition-colors">
                Nomadax<span className="text-indigo-400">Hub</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              La suite de herramientas y aplicaciones digitales de élite de Nomadax. Diseñadas meticulosamente para optimizar la organización familiar, destruir la procrastinación y adiestrar a tus mascotas con amor.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-3.5">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono">
              Nuestras Aplicaciones
            </span>
            <div className="flex flex-col items-center md:items-start gap-2 text-xs">
              <button
                onClick={() => handleScrollTo("cerebro-familiar")}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                🏠 Cerebro Familiar
              </button>
              <button
                onClick={() => handleScrollTo("nunca-mas-manana")}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                ⚡ Nunca Más Mañana
              </button>
              <button
                onClick={() => handleScrollTo("pets-mastery")}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                🐾 Academia Pets Mastery
              </button>
            </div>
          </div>

          {/* Contact / Socials Col */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-3.5">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono">
              Contacto y Garantía
            </span>
            <div className="space-y-3 text-xs text-slate-400 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-1.5 text-slate-300">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>contacto@nomadax.site</span>
              </p>
              <div className="flex items-center justify-center md:justify-start gap-1.5 bg-slate-900 border border-slate-850 px-3 py-1.5 rounded-lg text-[10px] text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Sitio de Pago 100% Seguro</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
          <p>© 2026 Nomadax. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Creado con <Heart className="w-3 h-3 text-rose-500 fill-current animate-pulse" /> para impulsar la excelencia y productividad digital.
          </p>
        </div>

      </div>
    </footer>
  );
}
