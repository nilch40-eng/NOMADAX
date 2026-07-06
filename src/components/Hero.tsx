import { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, HeartPulse, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = [
    {
      id: "organizar",
      label: "🏠 Armonía Familiar",
      desc: "Quiero unificar calendarios, tareas y compras de mi hogar",
      targetId: "cerebro-familiar",
      appName: "Cerebro Familiar",
      appDesc: "El centro de control inteligente para toda tu familia. Sincroniza deberes domésticos y finanzas compartidas sin fricción.",
      accent: "text-indigo-400 bg-indigo-950/40 border-indigo-900/60",
      btnText: "Ver Cerebro Familiar ➔",
      colorClass: "bg-indigo-600 hover:bg-indigo-500"
    },
    {
      id: "enfocar",
      label: "⚡ Enfoque e Hiperfoco",
      desc: "Quiero dejar de procrastinar de una vez por todas",
      targetId: "nunca-mas-manana",
      appName: "Nunca Más Mañana",
      appDesc: "La cura psicológica definitiva contra la procrastinación. Bloquea impulsos nocivos y entra en racha de productividad.",
      accent: "text-emerald-400 bg-emerald-950/40 border-emerald-900/60",
      btnText: "Ver Nunca Más Mañana ➔",
      colorClass: "bg-emerald-600 hover:bg-emerald-500"
    },
    {
      id: "viral",
      label: "🚀 Alcance en Redes",
      desc: "Quiero ganchos psicológicos y plantillas para volverme viral",
      targetId: "material-viral",
      appName: "Material Viral",
      appDesc: "Biblioteca masiva de recursos y disparadores psicológicos para reventar las métricas de TikTok, Reels y Shorts.",
      accent: "text-violet-400 bg-violet-950/40 border-violet-900/60",
      btnText: "Ver Material Viral ➔",
      colorClass: "bg-violet-600 hover:bg-violet-500"
    },
    {
      id: "mascotas",
      label: "🐶 Adiestramiento Canino",
      desc: "Quiero entrenar y educar a mi mascota con amor",
      targetId: "pets-mastery",
      appName: "Academia Pets Mastery",
      appDesc: "Cursos guiados 100% gratuitos basados en el refuerzo positivo para educar de forma divertida.",
      accent: "text-rose-400 bg-rose-950/40 border-rose-900/60",
      btnText: "Ver Pets Mastery (Gratis) ➔",
      colorClass: "bg-rose-500 hover:bg-rose-400"
    }
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentRecommendation = goals.find((g) => g.id === selectedGoal);

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-slate-950 overflow-hidden"
    >
      {/* Decorative grids & glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Copywriting Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Ecosistema de Soluciones Nomadax
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-none tracking-tighter italic uppercase text-white">
              POTENCIA TU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                MUNDO DIGITAL
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Seleccionamos las mejores herramientas para optimizar tu productividad, familia y habilidades creativas. Consigue organización absoluta en casa, destruye la procrastinación, multiplica tu impacto viral en redes y adiestra a tu mascota con amor.
            </p>

            {/* Micro value badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 border border-slate-850 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs font-medium">Acceso de por vida</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 border border-slate-850 px-3 py-2 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium">Pagos únicos seguros</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 border border-slate-850 px-3 py-2 rounded-xl col-span-2 sm:col-span-1">
                <HeartPulse className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="text-xs font-medium">Soporte continuo</span>
              </div>
            </div>

            {/* Direct Scroll CTAs */}
            <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={() => handleScrollTo("cerebro-familiar")}
                className="bg-white text-black px-6 py-3 rounded-full font-black text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              >
                EXPLORAR APPS
              </button>
              <button
                onClick={() => handleScrollTo("suite-combo")}
                className="bg-slate-900/40 hover:bg-slate-800/40 text-slate-400 border border-slate-800/60 font-black text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all cursor-pointer"
              >
                ¿Por qué un solo pago?
              </button>
            </div>
          </div>

          {/* Interactive Diagnostic Quiz Column */}
          <div className="lg:col-span-5">
            <div
              id="selector-quiz"
              className="bg-indigo-900/10 border border-indigo-500/30 p-6 rounded-[32px] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full"></div>
              
              <h3 className="text-base font-black text-white italic uppercase tracking-tight flex items-center gap-2 mb-1">
                <Zap className="w-4.5 h-4.5 text-indigo-400" />
                Asistente de Diagnóstico Rápido
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                ¿Qué área crucial de tu vida deseas optimizar o solucionar hoy? Selecciona una opción para recibir un diagnóstico instantáneo:
              </p>

              {/* Quiz Option buttons */}
              <div className="space-y-2.5">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setSelectedGoal(goal.id)}
                    className={`w-full p-3.5 rounded-2xl text-left text-xs font-medium border transition-all ${
                      selectedGoal === goal.id
                        ? "bg-indigo-500/20 border-indigo-500 text-indigo-300 shadow-lg"
                        : "bg-slate-950/40 border-white/5 text-slate-300 hover:border-indigo-500/30 hover:bg-slate-950/70"
                    }`}
                  >
                    <span className="block font-black text-sm text-slate-100 mb-0.5 italic">{goal.label}</span>
                    <span className="text-[11px] text-slate-400 font-sans">{goal.desc}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Recommendation Panel */}
              {selectedGoal && currentRecommendation && (
                <div className="mt-5 p-4 rounded-2xl bg-slate-950/80 border border-indigo-500/30 animate-slideUp space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-400 font-bold">RECOMENDACIÓN EXACTA</span>
                    <span className="text-[10px] bg-indigo-500/20 text-indigo-300 font-extrabold px-2 py-0.5 rounded-full">MATCH PERFECTO</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white italic">{currentRecommendation.appName}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-1">{currentRecommendation.appDesc}</p>
                  </div>
                  <button
                    onClick={() => handleScrollTo(currentRecommendation.targetId)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white transition-all text-center block bg-indigo-500 hover:bg-indigo-400 hover:scale-105 active:scale-95 uppercase tracking-wider font-black"
                  >
                    {currentRecommendation.btnText}
                  </button>
                </div>
              )}

              {!selectedGoal && (
                <div className="mt-5 p-4 rounded-2xl bg-slate-950/30 border border-dashed border-slate-800 text-center py-6">
                  <p className="text-[11px] text-slate-500">
                    Selecciona una prioridad de arriba para recibir un diagnóstico personalizado con planes interactivos.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
