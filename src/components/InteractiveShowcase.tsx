import React, { useState, useEffect } from "react";
import {
  Calendar,
  Check,
  Plus,
  Trash2,
  Users,
  ShoppingBag,
  Trophy,
  Play,
  Pause,
  RotateCcw,
  Lock,
  Unlock,
  Shield,
  ShieldCheck,
  Eye,
  Heart,
  Share2,
  Flame,
  TrendingUp,
  Sparkles,
  Award,
  BookOpen,
  Volume2,
  ArrowRight
} from "lucide-react";

// ==========================================
// 1. CEREBRO FAMILIAR WIDGET
// ==========================================
export function CerebroFamiliarWidget() {
  const [chores, setChores] = useState([
    { id: 1, text: "Preparar la cena familiar", assignee: "Mamá", points: 15, done: false },
    { id: 2, text: "Lavar los platos", assignee: "Papá", points: 10, done: true },
    { id: 3, text: "Pasear al perro", assignee: "Sofía (Hija)", points: 20, done: false },
    { id: 4, text: "Sacar la basura", assignee: "Mateo (Hijo)", points: 5, done: false },
  ]);
  const [newChore, setNewChore] = useState("");
  const [assignee, setAssignee] = useState("Sofía (Hija)");
  const [familyPoints, setFamilyPoints] = useState(240);
  const [selectedDay, setSelectedDay] = useState("Hoy");
  const [menu, setMenu] = useState({
    Almuerzo: "Lasaña Casera",
    Cena: "Crema de Verduras"
  });

  const toggleChore = (id: number) => {
    setChores(
      chores.map((chore) => {
        if (chore.id === id) {
          const updatedDone = !chore.done;
          setFamilyPoints((prev) => prev + (updatedDone ? chore.points : -chore.points));
          return { ...chore, done: updatedDone };
        }
        return chore;
      })
    );
  };

  const addChore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChore.trim()) return;
    const points = Math.floor(Math.random() * 15) + 10;
    setChores([
      ...chores,
      { id: Date.now(), text: newChore, assignee, points, done: false },
    ]);
    setNewChore("");
  };

  const deleteChore = (id: number) => {
    const chore = chores.find(c => c.id === id);
    if (chore && chore.done) {
      setFamilyPoints(prev => prev - chore.points);
    }
    setChores(chores.filter((c) => c.id !== id));
  };

  return (
    <div className="bg-indigo-950/20 text-slate-100 rounded-[32px] p-6 border border-indigo-500/30 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
      {/* Top Banner */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-xl text-white">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Dashboard Familiar</h4>
            <p className="text-[10px] text-slate-400">Residencia Martínez • 4 Miembros</p>
          </div>
        </div>
        <div className="bg-indigo-950/60 border border-indigo-800 px-3 py-1 rounded-full flex items-center gap-1.5">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-mono font-bold text-amber-400">{familyPoints} XP</span>
        </div>
      </div>

      {/* Main Grid inside Mockup */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Left Side: Calendar & Menu Quick view */}
        <div className="md:col-span-5 space-y-3 flex flex-col justify-between">
          <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-850/60">
            <div className="flex items-center gap-1.5 mb-2">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs font-semibold text-slate-300">Menú Semanal</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between bg-slate-900/60 p-1.5 rounded-lg border border-slate-850">
                <span className="text-slate-400">Almuerzo:</span>
                <span className="font-medium text-slate-200">{menu.Almuerzo}</span>
              </div>
              <div className="flex justify-between bg-slate-900/60 p-1.5 rounded-lg border border-slate-850">
                <span className="text-slate-400">Cena:</span>
                <span className="font-medium text-slate-200">{menu.Cena}</span>
              </div>
            </div>
            <div className="mt-2.5 flex gap-1 justify-center">
              {["Lun", "Mar", "Mie", "Jue", "Vie"].map((day) => (
                <button
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    if (day === "Lun") setMenu({ Almuerzo: "Lentejas con Arroz", Cena: "Pescado Plancha" });
                    else if (day === "Mar") setMenu({ Almuerzo: "Pollo Asado", Cena: "Sopa de Fideos" });
                    else if (day === "Mie") setMenu({ Almuerzo: "Pasta Pesto", Cena: "Tortilla de Patatas" });
                    else if (day === "Jue") setMenu({ Almuerzo: "Tacos de Ternera", Cena: "Ensalada Completa" });
                    else setMenu({ Almuerzo: "Lasaña Casera", Cena: "Crema de Verduras" });
                  }}
                  className={`text-[10px] px-1.5 py-0.5 rounded-md transition-colors ${
                    selectedDay === day ? "bg-indigo-600 text-white font-semibold" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-indigo-950/30 p-3 rounded-2xl border border-indigo-900/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-500/10 p-2 rounded-xl text-indigo-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400">Lista de la Compra</p>
                <p className="text-xs font-semibold text-slate-200">9 Artículos listos</p>
              </div>
            </div>
            <span className="bg-indigo-500/20 text-indigo-300 text-[9px] font-bold px-1.5 py-0.5 rounded-full">Sincro ✔</span>
          </div>
        </div>

        {/* Right Side: Interactive Chore Tracker */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-3">
          <div className="bg-slate-950/40 p-3 rounded-2xl border border-slate-850 flex-1 overflow-y-auto max-h-[170px] space-y-2 scrollbar-thin">
            <span className="text-xs font-semibold text-slate-300 block mb-1">Tareas Domésticas</span>
            {chores.length === 0 ? (
              <div className="text-center py-4 text-slate-500 text-xs">
                ¡No hay tareas pendientes! Añade una abajo.
              </div>
            ) : (
              chores.map((chore) => (
                <div
                  key={chore.id}
                  className={`flex items-center justify-between p-2 rounded-xl border text-xs transition-all ${
                    chore.done
                      ? "bg-emerald-950/20 border-emerald-900/40 opacity-75"
                      : "bg-slate-900/80 border-slate-800 hover:border-slate-750"
                  }`}
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <button
                      onClick={() => toggleChore(chore.id)}
                      className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                        chore.done
                          ? "bg-emerald-600 border-emerald-500 text-white"
                          : "border-slate-600 hover:border-indigo-400"
                      }`}
                    >
                      {chore.done && <Check className="w-3 h-3" />}
                    </button>
                    <div className="truncate pr-1">
                      <p className={`font-medium ${chore.done ? "line-through text-slate-500" : "text-slate-200"}`}>
                        {chore.text}
                      </p>
                      <span className="text-[9px] text-slate-400 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-400"></span>
                        {chore.assignee} • <span className="text-amber-400">+{chore.points} XP</span>
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteChore(chore.id)}
                    className="text-slate-500 hover:text-rose-400 p-1 rounded-lg hover:bg-slate-800/40 transition-colors shrink-0"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* New Chore Form */}
          <form onSubmit={addChore} className="flex gap-1.5">
            <input
              type="text"
              placeholder="Nueva tarea familiar..."
              value={newChore}
              onChange={(e) => setNewChore(e.target.value)}
              className="flex-1 bg-slate-950 text-slate-100 placeholder-slate-500 border border-slate-800 text-xs px-2.5 py-1.5 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <select
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="bg-slate-950 text-slate-300 border border-slate-800 text-[10px] px-1 py-1.5 rounded-xl focus:outline-none shrink-0"
            >
              <option value="Sofía (Hija)">Sofía</option>
              <option value="Mateo (Hijo)">Mateo</option>
              <option value="Papá">Papá</option>
              <option value="Mamá">Mamá</option>
            </select>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white p-1.5 rounded-xl transition-colors shrink-0 flex items-center justify-center"
            >
              <Plus className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Decorative interactive tip */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Simulador de sincronización activa
        </span>
        <span className="text-indigo-400 italic">Haz clic en los checkboxes para acumular XP</span>
      </div>
    </div>
  );
}

// ==========================================
// 2. NUNCA MÁS MAÑANA WIDGET
// ==========================================
export function NuncaMasMananaWidget() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [sessionStreak, setSessionStreak] = useState(12);
  const [focusProgress, setFocusProgress] = useState(65);
  const [distractionsBlocked, setDistractionsBlocked] = useState([
    { name: "Instagram", blocked: true },
    { name: "YouTube / Shorts", blocked: true },
    { name: "Grupos de WhatsApp", blocked: false },
    { name: "Noticias de Fútbol", blocked: false },
  ]);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            setSessionStreak((s) => s + 1);
            setFocusProgress(100);
            return 25 * 60;
          }
          // Fast-forward countdown so it feels interactive and quick
          const newTime = prev - 8;
          // Calculate progress percent
          const elapsed = (25 * 60) - newTime;
          setFocusProgress(Math.floor((elapsed / (25 * 60)) * 100));
          return newTime < 0 ? 0 : newTime;
        });
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
    setFocusProgress(0);
  };

  const toggleBlock = (index: number) => {
    const list = [...distractionsBlocked];
    list[index].blocked = !list[index].blocked;
    setDistractionsBlocked(list);
  };

  const blockedCount = distractionsBlocked.filter((d) => d.blocked).length;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-emerald-950/20 text-neutral-100 rounded-[32px] p-6 border border-emerald-500/30 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-xl text-black">
            <Flame className="w-5 h-5 text-neutral-950" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Modo Hiperfoco</h4>
            <p className="text-[10px] text-emerald-400 font-mono tracking-wider">MÉTODO ANTI-PROCRASTINACIÓN</p>
          </div>
        </div>
        <div className="bg-emerald-950/40 border border-emerald-800/60 px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-300">
          🔥 Racha: {sessionStreak} días
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-center">
        {/* Left: Beautiful focus ring */}
        <div className="md:col-span-6 flex flex-col items-center justify-center py-2">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* SVG Progress Ring */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="72"
                cy="72"
                r="64"
                className="stroke-neutral-800"
                strokeWidth="6"
                fill="transparent"
              />
              <circle
                cx="72"
                cy="72"
                r="64"
                className="stroke-emerald-500 transition-all duration-300"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray={402}
                strokeDashoffset={402 - (402 * focusProgress) / 100}
                strokeLinecap="round"
              />
            </svg>
            {/* Timer Center */}
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-mono font-bold tracking-tight text-neutral-100">
                {formatTime(timeLeft)}
              </span>
              <span className="text-[9px] text-neutral-400 font-medium tracking-widest uppercase">
                {isActive ? "Enfocado" : "Pausado"}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-2.5 mt-4">
            <button
              onClick={toggleTimer}
              className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                isActive
                  ? "bg-amber-500 hover:bg-amber-400 text-neutral-950"
                  : "bg-emerald-500 hover:bg-emerald-400 text-neutral-950"
              }`}
            >
              {isActive ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" /> Pausar
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" /> Iniciar Rápido
                </>
              )}
            </button>
            <button
              onClick={resetTimer}
              className="bg-neutral-850 hover:bg-neutral-800 text-neutral-300 p-2 rounded-full transition-colors border border-neutral-800"
              title="Reiniciar Pomodoro"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Distraction shield */}
        <div className="md:col-span-6 space-y-3">
          <div className="bg-neutral-900/60 border border-neutral-800 p-3.5 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                Bloqueador de Estímulos
              </span>
              <span className="text-[10px] font-bold text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-900/50 px-2 py-0.5 rounded-md">
                {blockedCount}/{distractionsBlocked.length} Bloqueados
              </span>
            </div>

            <p className="text-[10px] text-neutral-400 mb-2.5 leading-relaxed">
              El app detiene a nivel psicológico y técnico tus impulsos de consumo pasivo de redes sociales.
            </p>

            <div className="space-y-1.5">
              {distractionsBlocked.map((item, i) => (
                <button
                  key={i}
                  onClick={() => toggleBlock(i)}
                  className={`w-full flex items-center justify-between p-2 rounded-xl text-xs border transition-all text-left ${
                    item.blocked
                      ? "bg-emerald-950/10 border-emerald-900/50 text-neutral-200"
                      : "bg-neutral-950 border-neutral-800/60 text-neutral-400 hover:border-neutral-750"
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  <div className="flex items-center gap-1">
                    {item.blocked ? (
                      <>
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-wider">Cerrado</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-3.5 h-3.5 text-neutral-500" />
                        <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-wider">Abierto</span>
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive tip */}
      <div className="mt-4 pt-3 border-t border-neutral-800 flex justify-between items-center text-[10px] text-neutral-400">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Rendimiento cognitivo optimizado
        </span>
        <span className="text-emerald-400 italic">Inicia el cronómetro para simular hiperfoco veloz</span>
      </div>
    </div>
  );
}

// ==========================================
// 3. MATERIAL VIRAL WIDGET
// ==========================================
export function MaterialViralWidget() {
  const [selectedHook, setSelectedHook] = useState(0);
  const [engagement, setEngagement] = useState({
    views: 1250,
    likes: 84,
    shares: 12,
    retention: 45
  });
  const [isSimulating, setIsSimulating] = useState(false);

  const hooks = [
    { text: "La gran mentira que te contaron sobre...", type: "Misterio", multiplier: 3.5 },
    { text: "Solo necesitas 2 minutos al día para hacer esto...", type: "Curiosidad", multiplier: 2.8 },
    { text: "Por esto tus posts no tienen visitas (y cómo arreglarlo)...", type: "Dolor", multiplier: 4.2 },
    { text: "El truco secreto que la élite del marketing esconde...", type: "Exclusivo", multiplier: 3.9 }
  ];

  const simulateVirality = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    let count = 0;
    const hook = hooks[selectedHook];
    const maxTicks = 20;

    const interval = setInterval(() => {
      count++;
      setEngagement((prev) => ({
        views: prev.views + Math.floor(Math.random() * 320 * hook.multiplier),
        likes: prev.likes + Math.floor(Math.random() * 50 * (hook.multiplier / 1.5)),
        shares: prev.shares + Math.floor(Math.random() * 12 * (hook.multiplier / 2.2)),
        retention: Math.min(95, Math.floor(55 + (hook.multiplier * 8) - (count / 2)))
      }));

      if (count >= maxTicks) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 100);
  };

  const resetSimulation = () => {
    setEngagement({
      views: 1250,
      likes: 84,
      shares: 12,
      retention: 45
    });
  };

  return (
    <div className="bg-violet-950/20 text-slate-100 rounded-[32px] p-6 border border-violet-500/30 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
      {/* Color Orbs background */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="bg-violet-600 p-2 rounded-xl text-white">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Multiplicador Viral</h4>
            <p className="text-[10px] text-violet-400 font-mono tracking-wider">HACKEO DE ALGORITMO 🚀</p>
          </div>
        </div>
        <div className="bg-violet-950/40 border border-violet-800/40 px-3 py-1 rounded-full flex items-center gap-1">
          <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-xs font-bold text-violet-300">Retención: {engagement.retention}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1">
        {/* Left Side: Selecting hooks */}
        <div className="md:col-span-6 space-y-3">
          <span className="text-xs font-semibold text-slate-300 block">1. Elige un Gancho Psicológico</span>
          <div className="space-y-1.5">
            {hooks.map((h, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedHook(idx)}
                className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all relative overflow-hidden ${
                  selectedHook === idx
                    ? "bg-violet-950/30 border-violet-500/80 text-violet-200 shadow-md"
                    : "bg-slate-950/50 border-neutral-800 text-slate-400 hover:border-neutral-700"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${
                    selectedHook === idx ? "bg-violet-500/20 text-violet-300" : "bg-neutral-800 text-slate-500"
                  }`}>
                    {h.type}
                  </span>
                  <span className="text-[8px] font-mono text-slate-500">Multiplicador: x{h.multiplier}</span>
                </div>
                <p className="font-medium leading-relaxed font-sans">{h.text}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Visualizing growth simulation */}
        <div className="md:col-span-6 flex flex-col justify-between bg-slate-950/60 border border-neutral-800 rounded-2xl p-4">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-300 block">2. Estadísticas de Simulación</span>

            {/* Simulated Live Analytics Bar */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-neutral-900 p-2.5 rounded-xl border border-neutral-800">
                <span className="text-[9px] text-slate-400 flex items-center gap-1">
                  <Eye className="w-3 h-3 text-slate-500" /> Vistas
                </span>
                <p className="text-sm font-mono font-bold text-slate-200 mt-1">
                  {engagement.views.toLocaleString()}
                </p>
              </div>

              <div className="bg-neutral-900 p-2.5 rounded-xl border border-neutral-800">
                <span className="text-[9px] text-slate-400 flex items-center gap-1">
                  <Heart className="w-3 h-3 text-rose-500" /> Likes
                </span>
                <p className="text-sm font-mono font-bold text-rose-400 mt-1">
                  {engagement.likes.toLocaleString()}
                </p>
              </div>

              <div className="bg-neutral-900 p-2.5 rounded-xl border border-neutral-800">
                <span className="text-[9px] text-slate-400 flex items-center gap-1">
                  <Share2 className="w-3 h-3 text-sky-400" /> Compartidos
                </span>
                <p className="text-sm font-mono font-bold text-sky-400 mt-1">
                  {engagement.shares.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Retention curve simulation */}
            <div className="space-y-1 bg-neutral-900 p-2.5 rounded-xl border border-neutral-800">
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-400">Retención de Audiencia</span>
                <span className="text-violet-400 font-bold">{engagement.retention}%</span>
              </div>
              <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300"
                  style={{ width: `${engagement.retention}%` }}
                ></div>
              </div>
              <span className="text-[8px] text-slate-500 block text-right mt-0.5">
                *Meta del algoritmo: &gt;60% para empuje masivo
              </span>
            </div>
          </div>

          <div className="flex gap-2 mt-3 md:mt-0">
            <button
              onClick={simulateVirality}
              disabled={isSimulating}
              className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-bold py-2 px-3 rounded-xl transition-all ${
                isSimulating
                  ? "bg-violet-950 text-violet-400 border border-violet-800 cursor-not-allowed"
                  : "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-900/40"
              }`}
            >
              {isSimulating ? (
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping"></span>
                  Viralizando...
                </span>
              ) : (
                <>
                  <TrendingUp className="w-3.5 h-3.5" /> Probar Fuerza Viral
                </>
              )}
            </button>
            <button
              onClick={resetSimulation}
              className="bg-neutral-800 hover:bg-neutral-700 text-slate-300 border border-neutral-700 px-2.5 py-2 rounded-xl text-xs transition-colors"
              title="Restablecer"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Footer message */}
      <div className="mt-4 pt-3 border-t border-neutral-800 flex justify-between items-center text-[10px] text-slate-400">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
          Conectado con la base de datos de ganchos de Nomadax
        </span>
        <span className="text-violet-400 italic">Haz clic en "Probar Fuerza Viral"</span>
      </div>
    </div>
  );
}

// ==========================================
// 4. ACADEMIA PETS MASTERY WIDGET (GRATIS)
// ==========================================
export function PetsMasteryWidget() {
  const [xp, setXp] = useState(0);
  const [dogAction, setDogAction] = useState("quieto"); // quieto | sentado | pata | vuelta
  const [feedback, setFeedback] = useState("🐶 Presiona un comando abajo para empezar a adiestrar a Bobby!");
  const [unlockedLessons, setUnlockedLessons] = useState(2);
  const [petLevel, setPetLevel] = useState("Cachorro Travieso");

  const executeCommand = (command: string) => {
    setDogAction(command);
    if (command === "sentado") {
      setXp((prev) => {
        const next = prev + 15;
        updateLevel(next);
        return next;
      });
      setFeedback("🦴 ¡Chasquido de Clicker! Bobby se sienta de inmediato y te mira con ojos brillantes esperando su premio. (+15 XP)");
    } else if (command === "pata") {
      setXp((prev) => {
        const next = prev + 20;
        updateLevel(next);
        return next;
      });
      setFeedback("🐾 ¡Increíble! Bobby levanta lentamente su patita delantera y la coloca con orgullo sobre tu palma. (+20 XP)");
    } else if (command === "vuelta") {
      setXp((prev) => {
        const next = prev + 30;
        updateLevel(next);
        return next;
      });
      setFeedback("💫 ¡Eso es! Gira ágilmente sobre sus patas traseras persiguiendo su cola y ladra feliz de recibir cariño. (+30 XP)");
    } else {
      setXp((prev) => {
        const next = prev + 10;
        updateLevel(next);
        return next;
      });
      setFeedback("🐕 Bobby te mira fijamente con las orejas erguidas y la colita quieta, concentrado al 100% en ti. (+10 XP)");
    }
  };

  const updateLevel = (currentXp: number) => {
    if (currentXp >= 150) {
      setPetLevel("Campeón de Exhibición 🏆");
      setUnlockedLessons(5);
    } else if (currentXp >= 80) {
      setPetLevel("Perro Súper Educado 🎓");
      setUnlockedLessons(4);
    } else if (currentXp >= 30) {
      setPetLevel("Cachorro Inteligente 🐕‍🦺");
      setUnlockedLessons(3);
    }
  };

  const resetAcademy = () => {
    setXp(0);
    setDogAction("quieto");
    setPetLevel("Cachorro Travieso");
    setUnlockedLessons(2);
    setFeedback("🐶 Bobby se ha restablecido. ¡Comienza de nuevo su entrenamiento positivo!");
  };

  return (
    <div className="bg-rose-950/20 text-slate-100 rounded-[32px] p-6 border border-rose-500/30 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
      {/* Rose Background Orb */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-rose-500/5 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="bg-rose-500 p-2 rounded-xl text-white">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Academia de Adiestramiento</h4>
            <p className="text-[10px] text-rose-400 font-mono tracking-wider">REFUERZO POSITIVO • GRATIS</p>
          </div>
        </div>
        <div className="bg-rose-950/40 border border-rose-900/50 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold text-rose-300">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>{petLevel}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1">
        {/* Left Side: Dog interactive visual */}
        <div className="md:col-span-5 flex flex-col items-center justify-center bg-slate-950/50 rounded-2xl p-4 border border-slate-850 relative">
          <span className="absolute top-2 left-3 text-[9px] font-mono font-bold text-slate-500">MOCKUP DE SIMULACIÓN</span>
          <span className="absolute top-2 right-3 text-[10px] font-mono text-amber-400 font-bold">{xp} XP</span>

          {/* Cute interactive CSS Dog */}
          <div className="w-24 h-24 relative flex items-center justify-center my-3 transition-all">
            {/* Dog Head */}
            <div className="w-20 h-20 bg-amber-600 rounded-full relative shadow-md transition-transform duration-300 flex items-center justify-center">
              {/* Ears */}
              <div className="absolute -top-1 -left-1 w-6 h-12 bg-amber-700 rounded-b-2xl transform -rotate-12 origin-top"></div>
              <div className="absolute -top-1 -right-1 w-6 h-12 bg-amber-700 rounded-b-2xl transform rotate-12 origin-top"></div>

              {/* Eyes */}
              <div className="absolute top-7 left-5 w-3.5 h-3.5 bg-slate-950 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
              <div className="absolute top-7 right-5 w-3.5 h-3.5 bg-slate-950 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>

              {/* Nose and Snout */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-amber-100 rounded-full flex flex-col items-center justify-start pt-1">
                <div className="w-4 h-2.5 bg-slate-950 rounded-full"></div>
                {/* Tongue when puppy does vuelta/pata */}
                {dogAction !== "quieto" && (
                  <div className="w-3 h-4 bg-rose-500 rounded-b-full animate-pulse mt-0.5"></div>
                )}
              </div>
            </div>

            {/* Little Dog Collar Badge */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-500 border-2 border-white rounded-full flex items-center justify-center text-[7px] text-white font-bold">
              ★
            </div>

            {/* Motion effects based on command */}
            {dogAction === "sentado" && (
              <span className="absolute -top-3 text-[10px] bg-indigo-600 px-2 py-0.5 rounded-full text-white font-bold animate-bounce shadow">
                ¡Sentado!
              </span>
            )}
            {dogAction === "pata" && (
              <span className="absolute -top-3 text-[10px] bg-emerald-600 px-2 py-0.5 rounded-full text-white font-bold animate-bounce shadow">
                ¡Dame la pata!
              </span>
            )}
            {dogAction === "vuelta" && (
              <span className="absolute -top-3 text-[10px] bg-violet-600 px-2 py-0.5 rounded-full text-white font-bold animate-spin shadow">
                ¡Gira!
              </span>
            )}
          </div>

          <div className="w-full bg-slate-900 p-2 rounded-xl text-center border border-slate-800">
            <p className="text-[10px] font-medium text-slate-300 leading-relaxed min-h-[40px] flex items-center justify-center">
              {feedback}
            </p>
          </div>
        </div>

        {/* Right Side: Training buttons & Curriculum */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-3">
          <div>
            <span className="text-xs font-semibold text-slate-300 block mb-2">Comandos de Adiestramiento en Positivo</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => executeCommand("sentado")}
                className="bg-slate-950 hover:bg-rose-950/20 border border-slate-850 hover:border-rose-800/50 p-2.5 rounded-xl text-xs font-semibold text-slate-200 transition-all flex items-center gap-1.5 justify-center"
              >
                🦴 Sentarse
              </button>
              <button
                onClick={() => executeCommand("pata")}
                className="bg-slate-950 hover:bg-rose-950/20 border border-slate-850 hover:border-rose-800/50 p-2.5 rounded-xl text-xs font-semibold text-slate-200 transition-all flex items-center gap-1.5 justify-center"
              >
                🐾 Dar la Pata
              </button>
              <button
                onClick={() => executeCommand("vuelta")}
                className="bg-slate-950 hover:bg-rose-950/20 border border-slate-850 hover:border-rose-800/50 p-2.5 rounded-xl text-xs font-semibold text-slate-200 transition-all flex items-center gap-1.5 justify-center"
              >
                💫 Dar una Vuelta
              </button>
              <button
                onClick={() => executeCommand("quieto")}
                className="bg-slate-950 hover:bg-rose-950/20 border border-slate-850 hover:border-rose-800/50 p-2.5 rounded-xl text-xs font-semibold text-slate-200 transition-all flex items-center gap-1.5 justify-center"
              >
                👀 Estar Quieto
              </button>
            </div>
          </div>

          {/* Curriculum tracker */}
          <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-850">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Módulos de la Academia</span>
            <div className="space-y-1 text-[10px]">
              <div className="flex justify-between items-center bg-slate-900/60 p-1 rounded">
                <span className="text-slate-300">1. Principios del Refuerzo Positivo</span>
                <span className="text-emerald-400 font-bold">Desbloqueado ✔</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/60 p-1 rounded">
                <span className="text-slate-300">2. Órdenes de Obediencia Básica</span>
                <span className="text-emerald-400 font-bold">Desbloqueado ✔</span>
              </div>
              <div className={`flex justify-between items-center p-1 rounded transition-colors ${
                unlockedLessons >= 3 ? "bg-slate-900/60 text-slate-300" : "text-slate-650"
              }`}>
                <span>3. Modales al Pasear con Correa</span>
                <span>{unlockedLessons >= 3 ? <span className="text-emerald-400 font-bold">Desbloqueado ✔</span> : "🔒 Bloqueado (Necesita 30XP)"}</span>
              </div>
              <div className={`flex justify-between items-center p-1 rounded transition-colors ${
                unlockedLessons >= 4 ? "bg-slate-900/60 text-slate-300" : "text-slate-650"
              }`}>
                <span>4. Corrección de Ansiedad por Separación</span>
                <span>{unlockedLessons >= 4 ? <span className="text-emerald-400 font-bold">Desbloqueado ✔</span> : "🔒 Bloqueado (Necesita 80XP)"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer metadata */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
        <span className="text-rose-400 font-medium">¡Sin registro previo para probar!</span>
        <button
          onClick={resetAcademy}
          className="text-slate-500 hover:text-rose-400 transition-colors"
        >
          Reiniciar Alumno
        </button>
      </div>
    </div>
  );
}
