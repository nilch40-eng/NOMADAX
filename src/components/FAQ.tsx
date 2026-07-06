import { useState } from "react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950 border-t border-slate-900/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Respuestas a tus dudas
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black italic uppercase tracking-tighter text-white">
            PREGUNTAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">FRECUENTES</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Todo lo que necesitas saber sobre las licencias, el soporte y el funcionamiento técnico de las aplicaciones de Nomadax.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-[32px] transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-indigo-900/10 border-indigo-500/30 shadow-xl"
                    : "bg-slate-900/20 border-white/5 hover:border-indigo-500/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-black italic uppercase text-xs sm:text-sm text-white focus:outline-none transition-colors"
                >
                  <span className="flex-1 leading-snug tracking-tight">{faq.question}</span>
                  <div className={`w-6 h-6 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-indigo-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                {/* Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans bg-slate-950/40">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
