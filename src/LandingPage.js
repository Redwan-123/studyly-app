import React from 'react';
import { BookOpen, Zap, ArrowRight, TrendingUp } from 'lucide-react';
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
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-[100] bg-[#050214]/80 backdrop-blur-lg border-b border-white/5">
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
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-5 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <Zap size={14} className="text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">The High-Performance Study Engine</span>
        </div>
        <h1 className="text-6xl md:text-[9rem] font-black italic tracking-tighter leading-[0.85] mb-8 uppercase">
          STUDY <br />
          <span className="text-blue-600 not-italic">SMARTER.</span>
        </h1>
        <p className="text-slate-400 max-w-lg text-sm md:text-base font-medium mb-12">
          Stop drowning in notes. Studyly organizes your academic life into a high-speed command center designed for elite students.
        </p>
        <button onClick={onStart} className="bg-blue-600 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)]">
          LAUNCH SYSTEM <ArrowRight size={24} />
        </button>
      </div>

      {/* 3. STICKY FEATURE DEMO - THE FIX IS HERE */}
      <div className="relative h-[600vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4">
          
          {/* THE PHONE MOCKUP - Lower Z-Index (z-10) to stay BEHIND the cards */}
          <div 
            className="relative z-10 w-[260px] h-[540px] md:w-[280px] md:h-[580px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-900 shadow-[0_0_80px_rgba(59,130,246,0.15)] transition-all duration-700 ease-in-out flex-shrink-0"
            style={{ 
              transform: window.innerWidth < 768 
                ? `scale(0.75) translateY(${scrollStep === 0 ? '0px' : '20px'})` 
                : scrollStep === 0 
                  ? 'translateY(100px)' 
                  : features[scrollStep-1]?.side === 'left' 
                    ? 'translateX(240px)' 
                    : 'translateX(-240px)'
            }}
          >
            <div className="bg-[#F8F9FE] h-full w-full rounded-[2.5rem] overflow-hidden p-5 pt-12 text-slate-900">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-1.5 text-[10px] font-black text-blue-600 italic tracking-tighter uppercase">
                   <BookOpen size={12}/> STUDYLY
                </div>
                <div className="w-8 h-8 bg-slate-200 rounded-xl" />
              </div>
              
              <div className="animate-in fade-in duration-500 scale-90 origin-top opacity-40">
                <Dashboard 
                    modules={[{id: 1, name: 'Math', progress: 72}]} 
                    exams={[{id: 1, name: 'Midterm', date: 'Jan 24'}]} 
                />
              </div>
            </div>
          </div>

          {/* FEATURE CARDS - Higher Z-Index (z-20) to stay ON TOP of the phone */}
          {features.map((f) => (
            <div 
              key={f.id} 
              className={`absolute z-20 transition-all duration-700 ease-out 
                w-[92%] md:w-[420px] left-1/2 -translate-x-1/2 
                ${f.side === 'left' ? 'md:left-[8%] md:translate-x-0' : 'md:left-auto md:right-[8%] md:translate-x-0'}
                ${scrollStep === f.id ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-32 scale-90 pointer-events-none'}
              `}
            >
              {/* Floating Card Design */}
              <div className="bg-white/10 border border-white/20 p-8 md:p-10 rounded-[3rem] backdrop-blur-3xl shadow-2xl relative">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-[1.2rem] flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30">
                  <Zap size={28} fill="currentColor" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black italic mb-4 uppercase tracking-tighter leading-none text-white">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FINAL CTA */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 rounded-t-[5rem] relative z-[50] shadow-2xl px-6">
         <h2 className="text-5xl md:text-9xl font-black italic tracking-tighter uppercase mb-12 text-center leading-[0.9]">
           Optimize your<br/>Potential.
         </h2>
         <button onClick={onStart} className="bg-black text-white px-12 md:px-20 py-6 md:py-8 rounded-[2.5rem] font-black text-2xl md:text-4xl uppercase italic hover:scale-105 active:scale-95 transition-all shadow-2xl">
           Start Studying
         </button>
      </div>
    </div>
  );
}