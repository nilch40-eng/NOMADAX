import { useEffect, useRef } from "react";

export default function AdContainerNative() {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;

    const script = document.createElement("script");
    script.src = "https://pl30355622.effectivecpmnetwork.com/847443622c9a4bb3412163f04ee70d46/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    document.body.appendChild(script);
    isLoaded.current = true;
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center my-12 px-4">
      <span className="text-[9px] uppercase tracking-widest text-slate-500 mb-2 font-mono">Enlace Patrocinado</span>
      <div className="bg-emerald-950/10 border border-emerald-500/20 rounded-[32px] p-6 flex items-center justify-center w-full max-w-4xl overflow-auto shadow-2xl relative">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
        <div id="container-847443622c9a4bb3412163f04ee70d46" className="w-full min-h-[90px] bg-slate-900/20 rounded-2xl flex items-center justify-center relative z-10">
          {/* Ad will render inside this container */}
        </div>
      </div>
    </div>
  );
}
