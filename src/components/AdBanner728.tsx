import { useEffect, useRef } from "react";

export default function AdBanner728() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current || !containerRef.current) return;

    // Set config
    (window as any).atOptions = {
      'key' : '1bb01e2791a83772054b5dcb22ca5995',
      'format' : 'iframe',
      'height' : 90,
      'width' : 728,
      'params' : {}
    };

    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/1bb01e2791a83772054b5dcb22ca5995/invoke.js";
    script.async = true;

    containerRef.current.appendChild(script);
    isLoaded.current = true;
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center my-10 px-4">
      <span className="text-[9px] uppercase tracking-widest text-slate-500 mb-2 font-mono">Publicidad Recomendada</span>
      <div className="bg-indigo-950/10 border border-indigo-500/20 rounded-[32px] p-6 flex items-center justify-center overflow-auto max-w-full shadow-2xl relative">
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full"></div>
        <div ref={containerRef} className="w-[728px] h-[90px] min-w-[728px] bg-slate-900/20 rounded-2xl flex items-center justify-center relative z-10">
          {/* Ad banner will render inside this slot */}
        </div>
      </div>
    </div>
  );
}
