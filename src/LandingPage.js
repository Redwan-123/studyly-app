import React from 'react';
import { LayoutGrid, Layers, Timer, Calendar, BarChart2, BookOpen, Zap, ArrowRight, TrendingUp, Clock } from 'lucide-react';
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
    <div className="bg-[#050214] text-white selection:bg-blue-500">
      {/* Navigation */}
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

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-5 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <Zap size={14} className="text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">The High-Performance Study Engine</span>
        </div>
        <h1 className="text-6xl md:text-[9rem] font-black italic tracking-tighter leading-[0.85] mb-8">
          STUDY <br />
          <span className="text-blue-600 not-italic uppercase">SMARTER.</span>
        </h1>
        <p className="text-slate-400 max-w-lg text-sm md:text-base font-medium mb-12">
          Stop drowning in notes. Studyly organizes your academic life into a high-speed command center designed for elite students.
        </p>
        <button onClick={onStart} className="bg-blue-600 text-white px-12 py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)]">
          LAUNCH SYSTEM <ArrowRight size={24} />
        </button>
      </div>

      {/* STICKY FEATURE DEMO */}
      <div className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4">
          
          <div 
            className="relative z-20 w-[280px] h-[580px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-900 shadow-[0_0_80px_rgba(59,130,246,0.15)] transition-all duration-700 ease-in-out flex-shrink-0"
            style={{ 
              transform: scrollStep === 0 ? 'translateY(100px)' : 
                         features[scrollStep-1]?.side === 'left' ? 'translateX(160px)' : 'translateX(-160px)'
            }}
          >
            <div className="bg-[#F8F9FE] h-full w-full rounded-[2.5rem] overflow-hidden p-5 pt-12 text-slate-900">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-1.5 text-[10px] font-black text-blue-600 italic tracking-tighter uppercase">
                   <BookOpen size={12}/> STUDYLY
                </div>
                <div className="w-8 h-8 bg-slate-200 rounded-xl" />
              </div>
              
              <div className="animate-in fade-in duration-500">
                {/* 1. DASHBOARD PREVIEW */}
                {scrollStep <= 1 && (
                  <Dashboard 
                    modules={[{id: 1, name: 'Math'}]} 
                    exams={[{id: 1, name: 'Midterm', date: 'Jan 24'}]} 
                  />
                )}

                {/* 2. MODULES PREVIEW */}
                {scrollStep === 2 && (
                  <div className="space-y-3 pt-2">
                    <h2 className="font-black text-sm italic uppercase tracking-tighter">Modules</h2>
                    <div className="p-4 bg-white border rounded-2xl flex items-center justify-between shadow-sm">
                       <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-lg" />
                        <span className="text-[11px] font-bold">Physics</span>
                       </div>
                       <div className="text-[10px] font-black text-blue-600">82%</div>
                    </div>
                    <div className="p-4 bg-white border rounded-2xl flex items-center justify-between shadow-sm opacity-50">
                       <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-indigo-400 rounded-lg" />
                        <span className="text-[11px] font-bold">History</span>
                       </div>
                       <div className="text-[10px] font-black">15%</div>
                    </div>
                  </div>
                )}

                {/* 3. TIMER PREVIEW */}
                {scrollStep === 3 && (
                  <div className="text-center pt-12">
                    <div className="text-[8px] font-black text-blue-500 mb-2 uppercase tracking-widest">Deep Work</div>
                    <div className="text-6xl font-black tabular-nums tracking-tighter mb-8">24:59</div>
                    <div className="flex justify-center gap-2">
                        <div className="h-10 w-10 bg-slate-900 rounded-xl" />
                        <div className="h-10 w-10 bg-slate-200 rounded-xl" />
                    </div>
                  </div>
                )}

                {/* 4. EXAMS PREVIEW (NEW) */}
                {scrollStep === 4 && (
                  <div className="space-y-3 pt-2">
                    <h2 className="font-black text-sm italic uppercase tracking-tighter">Exams</h2>
                    <div className="bg-white border-l-4 border-l-rose-500 p-4 rounded-xl shadow-sm">
                        <div className="text-[8px] font-bold text-rose-500 uppercase">In 3 Days</div>
                        <div className="text-xs font-black">Advanced Calculus</div>
                        <div className="h-1 bg-slate-100 mt-2 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[70%]" />
                        </div>
                    </div>
                    <div className="bg-white border-l-4 border-l-amber-400 p-4 rounded-xl shadow-sm">
                        <div className="text-[8px] font-bold text-amber-500 uppercase">Next Week</div>
                        <div className="text-xs font-black">Global Economics</div>
                    </div>
                  </div>
                )}

                {/* 5. STATS PREVIEW (NEW) */}
                {scrollStep === 5 && (
                  <div className="pt-2 space-y-4">
                    <h2 className="font-black text-sm italic uppercase tracking-tighter">Insights</h2>
                    <div className="h-24 flex items-end justify-between gap-1 px-1">
                      {[30, 60, 45, 90, 50, 75, 40].map((h, i) => (
                        <div key={i} className={`flex-1 rounded-t-sm ${i === 3 ? 'bg-blue-600' : 'bg-slate-200'}`} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="bg-slate-900 p-3 rounded-xl text-white">
                        <div className="flex items-center gap-2 text-blue-400 text-[8px] font-black uppercase">
                            <TrendingUp size={10} /> +15% Focus
                        </div>
                        <div className="text-[10px] font-bold mt-1 leading-tight">Best: 6 PM — 8 PM</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FLY-IN FEATURE DESCRIPTIONS */}
          {features.map((f) => (
            <div 
              key={f.id} 
              className={`absolute w-[340px] transition-all duration-700 ease-out pointer-events-none ${
                scrollStep === f.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
              } ${f.side === 'left' ? 'left-[10%]' : 'right-[10%]'}`}
            >
              <div className="bg-white/5 border border-white/10 p-10 rounded-[3.5rem] backdrop-blur-3xl shadow-2xl">
                <h3 className="text-4xl font-black italic mb-4 uppercase tracking-tighter leading-none">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 rounded-t-[5rem] relative z-30 shadow-2xl">
         <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase mb-12 text-center leading-none">Optimize your<br/>Potential.</h2>
         <button onClick={onStart} className="bg-black text-white px-20 py-8 rounded-[2.5rem] font-black text-3xl uppercase italic hover:scale-105 active:scale-95 transition-all shadow-2xl">Start Studying</button>
      </div>
    </div>
  );
}