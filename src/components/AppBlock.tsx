import { Application } from "../types";
import {
  CerebroFamiliarWidget,
  NuncaMasMananaWidget,
  PetsMasteryWidget,
} from "./InteractiveShowcase";
import {
  Calendar,
  ShoppingCart,
  Trophy,
  ZapOff,
  Timer,
  Activity,
  Sparkles,
  Video,
  TrendingUp,
  Award,
  HeartPulse,
  Dog,
  CheckCircle,
  ArrowUpRight,
  Sparkle
} from "lucide-react";

// Helper to render the correct Lucide icon based on string representation
function getIconComponent(iconName: string, colorClass: string) {
  const props = { className: `w-5 h-5 ${colorClass} shrink-0` };
  switch (iconName) {
    case "Calendar": return <Calendar {...props} />;
    case "ShoppingCart": return <ShoppingCart {...props} />;
    case "Trophy": return <Trophy {...props} />;
    case "ZapOff": return <ZapOff {...props} />;
    case "Timer": return <Timer {...props} />;
    case "Activity": return <Activity {...props} />;
    case "Sparkles": return <Sparkles {...props} />;
    case "Video": return <Video {...props} />;
    case "TrendingUp": return <TrendingUp {...props} />;
    case "Award": return <Award {...props} />;
    case "HeartPulse": return <HeartPulse {...props} />;
    case "Dog": return <Dog {...props} />;
    default: return <Sparkle {...props} />;
  }
}

interface AppBlockProps {
  key?: string | number;
  app: Application;
  index: number;
}

export default function AppBlock({ app, index }: AppBlockProps) {
  const isEven = index % 2 === 0;

  // Custom testimonials to boost persuasiveness
  const testimonials: Record<string, { quote: string; author: string; role: string }> = {
    "cerebro-familiar": {
      quote: "Por fin mi pareja y yo estamos en la misma página con las tareas de casa y las actividades de los niños. ¡Ha salvado nuestra paz mental!",
      author: "Beatriz S.",
      role: "Madre de 2 niños"
    },
    "nunca-mas-manana": {
      quote: "Estaba atrapado en ciclos eternos de procrastinación. Esta app me ayudó a bloquear estímulos y terminar mi proyecto final en tiempo récord.",
      author: "Carlos T.",
      role: "Desarrollador Freelance"
    },
    "pets-mastery": {
      quote: "Bobby mordía todo en casa. Gracias a las guías gratuitas de refuerzo positivo, ahora se sienta, espera y camina sin dar tirones.",
      author: "Andrés V.",
      role: "Dueño de Pastor Alemán"
    }
  };

  const currentTestimonial = testimonials[app.id];

  // Render the correct interactive mockup
  const renderWidget = () => {
    switch (app.id) {
      case "cerebro-familiar":
        return <CerebroFamiliarWidget />;
      case "nunca-mas-manana":
        return <NuncaMasMananaWidget />;
      case "pets-mastery":
        return <PetsMasteryWidget />;
      default:
        return null;
    }
  };

  // Color mappings for decorative elements
  const accentTextClasses: Record<string, string> = {
    indigo: "text-indigo-400",
    emerald: "text-emerald-400",
    violet: "text-violet-400",
    rose: "text-rose-400",
  };

  const accentBgClasses: Record<string, string> = {
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  };

  const buttonClasses: Record<string, string> = {
    indigo: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-950/40",
    emerald: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/40",
    violet: "bg-violet-600 hover:bg-violet-500 shadow-violet-950/40",
    rose: "bg-rose-600 hover:bg-rose-500 shadow-rose-950/40",
  };

  const accentBorderClasses: Record<string, string> = {
    indigo: "border-indigo-500/30",
    emerald: "border-emerald-500/30",
    violet: "border-violet-500/30",
    rose: "border-rose-500/30",
  };

  const activeAccent = accentTextClasses[app.accentColor] || "text-indigo-400";
  const activeBg = accentBgClasses[app.accentColor] || "bg-indigo-500/10";
  const activeButton = buttonClasses[app.accentColor] || "bg-indigo-600 hover:bg-indigo-500";
  const activeBorder = accentBorderClasses[app.accentColor] || "border-indigo-500/30";

  return (
    <section
      id={app.id}
      className={`py-20 border-t border-slate-900/40 relative overflow-hidden ${
        isEven ? "bg-slate-950" : "bg-slate-950/60"
      }`}
    >
      {/* Decorative localized light source / glowing orb from Vibrant Palette */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${app.accentColor}-500/20 blur-3xl rounded-full`}></div>
      <div className={`absolute top-1/4 ${isEven ? 'left-0' : 'right-0'} w-72 h-72 bg-${app.accentColor}-500/5 rounded-full blur-3xl pointer-events-none`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Copywriting Column */}
          <div className={`lg:col-span-6 space-y-6 ${!isEven && "lg:order-2"}`}>
            
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`text-[10px] font-black font-mono tracking-wider uppercase px-2.5 py-1 rounded-md border ${activeBg}`}>
                {app.category}
              </span>
              <span className="text-[10px] bg-white/10 border border-white/10 text-slate-300 font-bold px-2.5 py-1 rounded-md">
                {app.badge}
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-display font-black italic uppercase text-white tracking-tighter">
                {app.name}
              </h2>
              <p className={`text-base font-black italic uppercase tracking-wider ${activeAccent} tracking-wide leading-snug`}>
                {app.tagline}
              </p>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
              {app.description}
            </p>

            {/* Core Benefits Bullets */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-black text-slate-400 block uppercase tracking-widest">Por qué destaca:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {app.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${activeAccent}`} />
                    <span className="leading-tight font-sans text-slate-400">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            {currentTestimonial && (
              <div className="bg-slate-900/40 border-l-2 border-indigo-500/50 p-3 rounded-r-2xl italic text-xs text-slate-400 space-y-1">
                <p>"{currentTestimonial.quote}"</p>
                <p className="text-right font-sans font-bold not-italic text-[10px] text-slate-500">
                  — {currentTestimonial.author} ({currentTestimonial.role})
                </p>
              </div>
            )}

            {/* Inner Bento Card with [32px] rounded corners and glass design, containing only the access button */}
            <div className={`p-6 rounded-[32px] bg-${app.accentColor}-900/10 border ${activeBorder} flex flex-col items-center justify-center gap-4 shadow-2xl relative overflow-hidden group`}>
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${app.accentColor}-500/20 blur-3xl rounded-full`}></div>

              <div className="w-full relative z-10 text-center py-2">
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-black text-white px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer bg-${app.accentColor}-500 uppercase tracking-widest`}
                >
                  Acceder a la Aplicación <ArrowUpRight className="w-4 h-4" />
                </a>
                <span className="block text-[8px] text-center text-slate-500 mt-2 font-mono uppercase tracking-widest">
                  Sincronización instantánea segura
                </span>
              </div>
            </div>

          </div>

          {/* Live Interactive Widget Column */}
          <div className={`lg:col-span-6 h-[400px] flex flex-col justify-stretch ${!isEven && "lg:order-1"}`}>
            <div className="w-full h-full relative group">
              {/* Outer neon border glow */}
              <div className={`absolute inset-0 bg-gradient-to-tr from-${app.accentColor}-500/20 to-transparent rounded-[32px] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`}></div>
              
              {/* Actual Widget Card with rounded-[32px] */}
              <div className="relative h-full rounded-[32px] overflow-hidden">
                {renderWidget()}
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Inner Feature Showcase - bento style below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 pt-10 border-t border-white/5">
          {app.features.map((feature, fIdx) => (
            <div
              key={fIdx}
              className={`bg-${app.accentColor}-900/10 hover:bg-${app.accentColor}-900/20 border ${activeBorder} p-5 rounded-[32px] transition-all duration-300 space-y-2.5 relative overflow-hidden group`}
            >
              <div className={`absolute -top-10 -right-10 w-16 h-16 bg-${app.accentColor}-500/10 blur-xl rounded-full`}></div>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-950 border border-slate-900 relative z-10">
                {getIconComponent(feature.icon, activeAccent)}
              </div>
              <div className="relative z-10">
                <h4 className="text-xs font-black text-white uppercase tracking-wider italic">{feature.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
