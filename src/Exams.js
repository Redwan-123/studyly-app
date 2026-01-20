import React from 'react';
import { Calendar, AlertCircle, CheckCircle2, BookOpen, Plus, ChevronRight } from 'lucide-react';

export default function Exams({ exams }) {
  return (
    <div className="space-y-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. URGENCY BOARD */}
      <section>
        <div className="flex justify-between items-end mb-4 px-2">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Upcoming Hurdles</h3>
          <button className="bg-slate-900 text-white p-2 rounded-xl"><Plus size={16} /></button>
        </div>

        <div className="space-y-3">
          {exams.map(exam => (
            <div key={exam.id} className="bg-white border border-slate-100 rounded-[2.2rem] p-5 shadow-sm overflow-hidden relative">
              {/* Urgency Indicator Bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-2 ${exam.urgency === 'high' ? 'bg-rose-500' : 'bg-amber-400'}`} />
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-rose-500 mb-1">
                    <AlertCircle size={12} /> {exam.date === 'Jan 24' ? 'In 5 Days' : 'Next Week'}
                  </div>
                  <h4 className="text-xl font-black italic tracking-tighter text-slate-900">{exam.name}</h4>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black italic text-slate-900">72%</div>
                  <div className="text-[8px] font-black text-slate-300 uppercase">Ready</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-blue-600" style={{ width: '72%' }} />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[8px] font-black text-blue-600">M1</div>
                  <div className="w-6 h-6 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[8px] font-black text-indigo-600">M2</div>
                </div>
                <button className="bg-slate-100 text-slate-900 px-4 py-2 rounded-xl text-[10px] font-black uppercase flex items-center gap-1">
                  Plan Study <ChevronRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ROADMAP SUGGESTION */}
      <section className="bg-slate-900 rounded-[2.5rem] p-6 text-white">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-4 text-center">Preparation Roadmap</h4>
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center text-[10px] font-black">01</div>
            <div className="text-xs font-bold italic opacity-60">Revise "Vector Calculus" (2 Days)</div>
          </div>
          <div className="flex gap-4 items-center opacity-40">
            <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-[10px] font-black">02</div>
            <div className="text-xs font-bold italic">Mock Exam Practice (1 Day)</div>
          </div>
        </div>
      </section>
    </div>
  );
}