import React from 'react';
import { BookOpen, Zap, ArrowRight, Layout, Timer, BarChart3, Bell, ShieldCheck } from 'lucide-react';

export default function LandingPage({ onStart }) {
  const features = [
    { 
      title: "Smart Dashboard", 
      desc: "The '5-Second' Command Center. Get instant answers on what's next and how you're performing.",
      icon: <Layout className="text-blue-500" size={28} />,
      color: "bg-blue-500/10"
    },
    { 
      title: "Module Hub", 
      desc: "Digital folders for every subject. Track syllabus completion and organize topics effortlessly.",
      icon: <BookOpen className="text-purple-500" size={28} />,
      color: "bg-purple-500/10"
    },
    { 
      title: "Focus Timer", 
      desc: "Deep work engine with automated logging. Link sessions directly to your modules.",
      icon: <Timer className="text-orange-500" size={28} />,
      color: "bg-orange-500/10"
    },
    { 
      title: "Exam Board", 
      desc: "Visual urgency tiers. Never get caught off guard by a deadline again.",
      icon: <Bell className="text-rose-500" size={28} />,
      color: "bg-rose-500/10"
    },
    { 
      title: "Study Stats", 
      desc: "Identify your peak performance hours and track weekly growth with visual analytics.",
      icon: <BarChart3 className="text-emerald-500" size={28} />,
      color: "bg-emerald-500/10"
    },
    { 
      title: "Secure Sync", 
      desc: "Your data is saved to the cloud instantly. Access your planner from any device.",
      icon: <ShieldCheck className="text-cyan-500" size={28} />,
      color: "bg-cyan-500/10"
    }
  ];

  return (
    <div className="bg-[#050214] text-white selection:bg-blue-500 min-h-screen">
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-[100] bg-[#050214]/80 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <BookOpen size={18} />
          </div>
          <h1 className="text-lg font-black italic uppercase tracking-tighter">STUDYLY</h1>
        </div>
        <button onClick={onStart} className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
          Launch App
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="pt-40 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
          <Zap size={14} className="text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">The Student Operating System</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-tight mb-6 uppercase">
          OWN YOUR <span className="text-blue-600 not-italic">GRADES.</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium mb-10">
          The high-performance study planner for students who want elite results without the burnout.
        </p>
        <button onClick={onStart} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 mx-auto hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20">
          GET STARTED NOW <ArrowRight size={24} />
        </button>
      </header>

      {/* 3. BENTO GRID FEATURES (VISIBLE & CLEAN) */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.08] transition-all hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white tracking-tight italic uppercase">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <footer className="bg-white text-slate-900 py-24 px-6 text-center rounded-t-[4rem]">
        <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase mb-8">
          Ready for <br />A-Levels?
        </h2>
        <button onClick={onStart} className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-2xl uppercase italic hover:bg-slate-900 transition-colors shadow-2xl">
          Enter Studyly
        </button>
        <p className="mt-8 text-slate-400 font-bold text-sm tracking-widest uppercase">Free to use during beta</p>
      </footer>
    </div>
  );
}