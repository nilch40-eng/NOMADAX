import { useState } from "react";
import { Check, Sparkles, AlertCircle, Gift, ShoppingBag } from "lucide-react";

export default function SuiteCombo() {
  const [selectedApps, setSelectedApps] = useState<Record<string, boolean>>({
    "cerebro-familiar": true,
    "nunca-mas-manana": true,
    "material-viral": true,
  });

  const apps = [
    { id: "cerebro-familiar", name: "Cerebro Familiar", price: 39, desc: "Organizador de hogar inteligente", url: "https://familia-3b89d.web.app" },
    { id: "nunca-mas-manana", name: "Nunca Más Mañana", price: 19, desc: "Cura anti-procrastinación", url: "https://nunca-mas-manana-app.web.app/" },
    { id: "material-viral", name: "Material Viral", price: 29, desc: "Biblioteca y ganchos de redes", url: "https://www.material-viral.com/" },
  ];

  const toggleApp = (id: string) => {
    setSelectedApps((prev) => {
      const copy = { ...prev };
      copy[id] = !copy[id];
      // Keep at least one selected
      const activeCount = Object.values(copy).filter(Boolean).length;
      if (activeCount === 0) {
        return prev;
      }
      return copy;
    });
  };

  const total = apps.reduce((sum, app) => sum + (selectedApps[app.id] ? app.price : 0), 0);

  return (
    <section id="suite-combo" className="py-20 bg-slate-950 border-t border-slate-900/60 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" /> Selección Inteligente
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black italic uppercase tracking-tighter text-white">
            CALCULADORA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">ADQUISICIÓN</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Selecciona las herramientas que necesitas para tu ecosistema personal y obtén la valoración de tu plan.
          </p>
        </div>

        {/* Dynamic Widget Grid with Vibrant Palette [32px] borders */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-indigo-900/10 border border-indigo-500/30 p-6 rounded-[32px] shadow-2xl relative">
          
          {/* Left Column: Selections */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">
              Selecciona tus herramientas de la Suite:
            </h3>

            <div className="space-y-3">
              {apps.map((app) => {
                const isSelected = selectedApps[app.id];
                return (
                  <div
                    key={app.id}
                    onClick={() => toggleApp(app.id)}
                    className={`p-4 rounded-[32px] border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-indigo-500/10 border-indigo-500 text-slate-100 shadow-lg"
                        : "bg-slate-950/40 border-white/5 hover:border-indigo-500/30 text-slate-400"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                        isSelected ? "bg-indigo-600 border-indigo-500 text-white" : "border-slate-700"
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <h4 className={`text-sm font-black italic uppercase transition-colors ${isSelected ? "text-white" : "text-slate-400"}`}>
                          {app.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">{app.desc}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`text-sm font-black font-mono italic ${isSelected ? "text-white" : "text-slate-500"}`}>
                        {app.price}€
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Extra information tag */}
            <div className="flex items-start gap-2 bg-slate-950/50 border border-white/5 p-3.5 rounded-[20px] text-[10px] text-slate-400">
              <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-sans">
                La <span className="font-bold text-slate-300">Academia Pets Mastery</span> es 100% gratuita de por vida y no requiere ser añadida a esta calculadora. Puedes descargarla directamente en su bloque correspondiente.
              </p>
            </div>
          </div>

          {/* Right Column: Calculations with [32px] roundness and custom background */}
          <div className="md:col-span-5 flex flex-col justify-between bg-indigo-950/20 p-5 rounded-[32px] border border-indigo-500/30 relative overflow-hidden">
            
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest text-slate-400 block uppercase">
                RESUMEN DE SELECCIÓN
              </span>

              {/* Math list */}
              <div className="space-y-2.5 text-xs text-slate-400 pb-4 border-b border-white/5">
                {apps.map((app) => {
                  if (!selectedApps[app.id]) return null;
                  return (
                    <div key={app.id} className="flex justify-between">
                      <span>{app.name}:</span>
                      <span className="font-mono text-slate-200">{app.price}€</span>
                    </div>
                  );
                })}
              </div>

              {/* Mega total */}
              <div className="text-center py-2">
                <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">TOTAL COMBINADO</span>
                <p className="text-4xl font-display font-black text-white tracking-tighter italic mt-1">
                  {total}€
                </p>
                <span className="block text-[9px] text-slate-500 mt-1 uppercase tracking-wider font-mono">
                  Suma directa de licencias
                </span>
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-5 space-y-2">
              <div className="pt-1.5">
                <button
                  onClick={() => {
                    const activeApp = apps.find(app => selectedApps[app.id]);
                    if (activeApp) {
                      window.open(activeApp.url, "_blank");
                    }
                  }}
                  className="w-full bg-white hover:bg-slate-100 text-black font-black text-sm py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg uppercase tracking-widest"
                >
                  <ShoppingBag className="w-4 h-4 text-indigo-600" /> ACCEDER A SELECCIÓN
                </button>
                <span className="block text-[8px] text-center text-slate-500 mt-1.5 uppercase tracking-wider font-mono">
                  Sincronización segura garantizada
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
