import React from 'react';
import { BookOpen, Zap, ArrowRight } from 'lucide-react';
import Dashboard from './Dashboard';

export default function LandingPage({ scrollStep, onStart }) {
  const features = [
    { id: 1, title: "Smart Dashboard", desc: "The '5-Second' Command Center. Get instant answers on what's next and how you're performing.", side: "left" },
    { id: 2, title: "Module Hub", desc: "Digital folders for every subject. Track syllabus completion and organize topics effortlessly.", side: "right" },
    { id: 3, title: "Focus Timer", desc: "Deep work engine with automated logging. Link sessions directly to your modules.", side: "left" },
    { id: 4, title: "Exam Board", desc: "Visual urgency tiers. Never get caught off guard by a deadline again.", side: "right" },
    { id: 5, title: "Study Stats", desc: "Identify your peak performance hours and track weekly growth with visual analytics.", side: "left" }
  ];

  return (
    <div className="bg-[#050214] text-white selection:bg-blue-500 overflow-x-hidden">
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-[100] bg-[#050214]/90 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <BookOpen size={18} />
          </div>
          <h1 className="text-lg font-black italic uppercase tracking-tighter">STUDYLY</h1>
        </div>
        <button onClick={onStart} className="bg-white text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors">
          Open App
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-5 py-2 rounded-full mb-8">
          <Zap size={14} className="text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">The High-Performance Study Engine</span>
        </div>
        <h1 className="text-6xl md:text-[9rem] font-black italic tracking-tighter leading-[0.85] mb-8 uppercase text-center">
          STUDY <br />
          <span className="text-blue-600 not-italic">SMARTER.</span>
        </h1>
        <button onClick={onStart} className="bg-blue-600 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20">
          LAUNCH SYSTEM <ArrowRight size={24} />
        </button>
      </div>

      {/* 3. STICKY FEATURE DEMO - FIXED FOR VISIBILITY */}
      <div className="relative h-[600vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* THE PHONE MOCKUP - Pushed down on mobile to make room for text */}
          <div 
            className="relative z-10 w-[260px] h-[520px] md:w-[280px] md:h-[580px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-900 shadow-[0_0_80px_rgba(59,130,246,0.15)] transition-all duration-700 ease-in-out"
            style={{ 
              transform: window.innerWidth < 768 
                ? `translateY(${scrollStep === 0 ? '100px' : '220px'}) scale(0.8)` 
                : scrollStep === 0 ? 'translateY(100px)' : features[scrollStep-1]?.side === 'left' ? 'translateX(250px)' : 'translateX(-250px)'
            }}
          >
            <div className="bg-[#F8F9FE] h-full w-full rounded-[2.5rem] overflow-hidden p-5 pt-12 text-slate-900">
               <div className="opacity-30 scale-75 origin-top pointer-events-none">
                  <Dashboard modules={[]} exams={[]} />
               </div>
            </div>
          </div>

          {/* FEATURE CARDS - Forced to the top (z-50) so they are always seen */}
          {features.map((f) => (
            <div 
              key={f.id} 
              className={`absolute z-50 transition-all duration-700 ease-out 
                w-[90%] md:w-[420px] left-1/2 -translate-x-1/2 
                ${f.side === 'left' ? 'md:left-[10%] md:translate-x-0' : 'md:left-auto md:right-[10%] md:translate-x-0'}
                ${scrollStep === f.id ? 'opacity-100 translate-y-[-140px] md:translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95 pointer-events-none'}
              `}
            >
              {/* Solid Background to ensure readability */}
              <div className="bg-blue-600 p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-blue-400">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap size={24} fill="currentColor" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black italic mb-4 uppercase tracking-tighter text-white">
                  {f.title}
                </h3>
                <p className="text-blue-100 text-sm md:text-base leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FINAL CTA SECTION */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 rounded-t-[5rem] relative z-[60] shadow-2xl px-6">
         <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase mb-12 text-center">
           Optimize.
         </h2>
         <button onClick={onStart} className="bg-black text-white px-12 md:px-20 py-6 md:py-8 rounded-[2rem] font-black text-2xl md:text-4xl uppercase italic hover:scale-105 active:scale-95 transition-all">
           Start Studying
         </button>
      </div>
    </div>
  );
}