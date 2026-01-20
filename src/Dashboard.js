import React from 'react';
import { Play, AlertCircle, Target, Zap, Clock, ChevronRight, CheckCircle, Plus } from 'lucide-react';

export default function Dashboard({ modules = [], exams = [], onStartFocus, setShowAddModal }) {
  const streak = 5;
  const todayGoal = "1h 30m";

  return (
    <div className="space-y-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. MOTIVATION & EMOTIONAL HOOK */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-[2.5rem] text-white shadow-xl shadow-blue-200">
        <p className="text-[10px] font-bold opacity-80 mb-1 italic">"Success is the sum of small efforts."</p>
        <h2 className="text-xl font-black tracking-tight">You're ahead of 65% of your plan! 🎯</h2>
        <div className="mt-3 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full w-fit">
           <CheckCircle size={12} />
           <span className="text-[10px] font-black uppercase tracking-wider">4 sessions left for Biology</span>
        </div>
      </div>

      {/* 2. NEXT ACTION: “What should I study now?” */}
      <section>
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 px-2">Next Action</h3>
        <div className="bg-white border border-slate-100 p-5 rounded-[2rem] shadow-sm flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-500 font-black text-[11px] mb-1 uppercase tracking-tighter">
              <AlertCircle size={14} /> Math Exam in 5 days
            </div>
            <div className="text-slate-900 font-black text-lg italic tracking-tighter">Calculus Basics</div>
            <div className="text-slate-400 text-[10px] font-bold uppercase mt-1">Study {todayGoal} today</div>
          </div>
          <button onClick={onStartFocus} className="bg-slate-900 text-white p-4 rounded-2xl shadow-lg active:scale-90 transition-transform">
            <Play size={20} fill="currentColor" />
          </button>
        </div>
      </section>

      {/* 3. FOCUS & STREAKS: “How am I doing?” */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-slate-100 p-5 rounded-[2rem]">
          <Zap size={20} className="text-amber-500 mb-2" />
          <div className="text-2xl font-black italic tracking-tighter">{streak} Days</div>
          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Streak</div>
        </div>
        <div className="bg-white border border-slate-100 p-5 rounded-[2rem]">
          <Target size={20} className="text-blue-500 mb-2" />
          <div className="text-2xl font-black italic tracking-tighter">1.5 / 3h</div>
          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Goal</div>
        </div>
      </section>

      {/* 4. MODULE PROGRESS SNAPSHOT */}
      <section className="space-y-3">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Module Progress</h3>
        {modules.length > 0 ? modules.slice(0, 2).map(m => (
          <div key={m.id} className="bg-white border border-slate-100 p-4 rounded-2xl">
            <div className="flex justify-between text-[10px] font-black mb-2 uppercase">
              <span>{m.name}</span>
              <span className="text-blue-600">72% Syllabus</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: '72%' }} />
            </div>
          </div>
        )) : <div className="text-xs text-slate-400 p-4">No modules added yet.</div>}
      </section>

      {/* 5. URGENT EXAMS: “What’s coming up?” */}
      <section>
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 px-2">Upcoming</h3>
        <div className="space-y-2">
          {exams.length > 0 ? exams.map(e => (
            <div key={e.id} className="flex items-center justify-between bg-white p-4 rounded-2xl border-l-4 border-l-rose-500 shadow-sm">
              <div>
                <div className="font-bold text-sm tracking-tight">{e.name}</div>
                <div className="text-[9px] font-bold text-slate-300 uppercase italic">{e.date}</div>
              </div>
              <ChevronRight size={16} className="text-slate-200" />
            </div>
          )) : <div className="text-xs text-slate-400 p-4">No upcoming exams.</div>}
        </div>
      </section>

      {/* 6. PERFORMANCE INSIGHTS */}
      <section className="bg-blue-50 p-5 rounded-[2.5rem] border border-blue-100">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={14} className="text-blue-600" />
          <h3 className="text-[10px] font-black uppercase text-blue-900">Smart Insights</h3>
        </div>
        <p className="text-blue-800 text-[11px] font-bold leading-relaxed italic">
          "Focus time increased 15% this week. You study best between 6–8 PM."
        </p>
      </section>

      {/* 7. QUICK ACTIONS */}
      <section className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
        <button onClick={() => setShowAddModal?.('exam')} className="flex-shrink-0 bg-slate-900 text-white px-5 py-3 rounded-xl font-bold text-[10px] flex items-center gap-2 shadow-lg">
          <Plus size={14}/> ADD EXAM
        </button>
        <button className="flex-shrink-0 bg-white border border-slate-200 px-5 py-3 rounded-xl font-bold text-[10px] flex items-center gap-2 shadow-sm text-slate-700">
           REVISE WEAK
        </button>
      </section>
    </div>
  );
}