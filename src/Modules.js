import React, { useState } from 'react';
import { 
  CheckCircle2, Circle, Clock, AlertTriangle, 
  PlayCircle, BookOpen, ChevronRight, BarChart3, 
  Filter, Search, Star
} from 'lucide-react';

export default function Modules({ modules, onStartFocus }) {
  const [selectedModule, setSelectedModule] = useState(modules[0] || null);

  // Mock data for topics within a module
  const topics = [
    { id: 1, title: "Integration by Parts", time: "45m", status: "completed", master: "high" },
    { id: 2, title: "Partial Fractions", time: "30m", status: "in-progress", master: "medium", difficult: true },
    { id: 3, title: "Differential Equations", time: "1h 15m", status: "not-started", master: "none" },
    { id: 4, title: "Vector Calculus", time: "50m", status: "not-started", master: "none" },
  ];

  return (
    <div className="space-y-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. MODULE OVERVIEW & SELECTOR */}
      <section className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {modules.map(m => (
          <button 
            key={m.id}
            onClick={() => setSelectedModule(m)}
            className={`flex-shrink-0 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-tighter transition-all ${
              selectedModule?.id === m.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-slate-400 border border-slate-100'
            }`}
          >
            {m.name}
          </button>
        ))}
      </section>

      {/* 2. PROGRESS SNAPSHOT & MOTIVATION */}
      <div className="bg-white border border-slate-100 p-6 rounded-[2.5rem] shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-black italic tracking-tighter text-slate-900 uppercase">
              {selectedModule?.name}
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">
              Advanced Calculus & Series
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black italic text-blue-600">60%</div>
            <div className="text-[8px] font-black text-slate-300 uppercase">Completed</div>
          </div>
        </div>
        
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-blue-600 rounded-full transition-all duration-1000" style={{ width: '60%' }} />
        </div>

        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
          <div className="flex items-center gap-1.5"><Clock size={12}/> 3h 40m remaining</div>
          <div className="text-blue-600 italic">3 topics left today</div>
        </div>
      </div>

      {/* 3. SUGGESTED NEXT TOPIC */}
      <section>
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 px-2">Suggested Next</h3>
        <div className="bg-blue-50 border border-blue-100 p-5 rounded-[2rem] flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-blue-200 shadow-lg">
              <PlayCircle size={20} />
            </div>
            <div>
              <div className="text-[11px] font-black text-blue-600 uppercase italic">Ready to focus?</div>
              <div className="text-slate-900 font-black text-lg tracking-tighter">Partial Fractions</div>
            </div>
          </div>
          <ChevronRight className="text-blue-300" />
        </div>
      </section>

      {/* 4. TOPIC LIST */}
      <section className="space-y-3">
        <div className="flex justify-between items-center px-2">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Curriculum</h3>
          <Filter size={14} className="text-slate-300" />
        </div>
        
        <div className="space-y-2">
          {topics.map(topic => (
            <div key={topic.id} className="group bg-white border border-slate-100 p-4 rounded-2xl flex items-center justify-between hover:border-blue-200 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                {topic.status === 'completed' ? (
                  <CheckCircle2 className="text-green-500" size={20} />
                ) : topic.status === 'in-progress' ? (
                  <Circle className="text-blue-500 fill-blue-50" size={20} />
                ) : (
                  <Circle className="text-slate-200" size={20} />
                )}
                <div>
                  <div className={`text-sm font-bold ${topic.status === 'completed' ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                    {topic.title}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] font-black text-slate-300 uppercase">{topic.time}</span>
                    {topic.difficult && (
                      <span className="bg-rose-50 text-rose-500 text-[8px] font-black px-2 py-0.5 rounded-md flex items-center gap-1">
                        <AlertTriangle size={8} /> DIFFICULT
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3].map(star => (
                  <div key={star} className={`w-1.5 h-1.5 rounded-full ${star <= (topic.master === 'high' ? 3 : topic.master === 'medium' ? 2 : 0) ? 'bg-amber-400' : 'bg-slate-100'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. QUICK ACTIONS FOOTER */}
      <section className="bg-slate-900 p-6 rounded-[2.5rem] text-white flex justify-between items-center shadow-xl">
        <div>
          <div className="text-[10px] font-black opacity-50 uppercase italic">Weekly Mastery</div>
          <div className="text-xl font-black italic tracking-tighter leading-none">+12.5%</div>
        </div>
        <button 
          onClick={onStartFocus}
          className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-transform"
        >
          Start Session
        </button>
      </section>
    </div>
  );
}