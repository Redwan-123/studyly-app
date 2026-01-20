import React from 'react';
import { BarChart2, TrendingUp, Clock, Target, Award, MousePointer2 } from 'lucide-react';

export default function Stats() {
  const weekData = [30, 45, 90, 65, 40, 80, 55]; // Study minutes per day

  return (
    <div className="space-y-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. VISUAL TREND */}
      <section className="bg-white border border-slate-100 p-6 rounded-[2.5rem] shadow-sm">
        <div className="flex justify-between items-center mb-8 px-2">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Weekly Momentum</h3>
          <div className="flex items-center gap-1 text-green-500 font-black text-[10px] italic">
            <TrendingUp size={14} /> +15% vs Last Week
          </div>
        </div>
        
        <div className="h-32 flex items-end justify-between gap-2 px-2">
          {weekData.map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
              <div 
                className={`w-full rounded-t-xl transition-all duration-500 group-hover:bg-blue-400 ${i === 3 ? 'bg-blue-600' : 'bg-slate-200'}`} 
                style={{ height: `${val}%` }} 
              />
              <span className="text-[8px] font-black text-slate-300 uppercase">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. BEST STUDY PATTERNS */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-slate-900 text-white p-5 rounded-[2.2rem]">
          <Clock size={20} className="text-blue-400 mb-2" />
          <div className="text-xl font-black italic tracking-tighter leading-none">6 PM - 8 PM</div>
          <div className="text-[8px] font-black text-white/40 uppercase tracking-widest mt-1">Peak Focus Window</div>
        </div>
        <div className="bg-white border border-slate-100 p-5 rounded-[2.2rem]">
          <Award size={20} className="text-amber-500 mb-2" />
          <div className="text-xl font-black italic tracking-tighter leading-none">50 Hours</div>
          <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Monthly Total</div>
        </div>
      </section>

      {/* 3. MODULE PERFORMANCE */}
      <section className="bg-white border border-slate-100 p-6 rounded-[2.5rem]">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 px-2 text-center">Topic Proficiency</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold italic">Math: Calculus</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(s => <div key={s} className={`w-3 h-1.5 rounded-full ${s <= 4 ? 'bg-blue-600' : 'bg-slate-100'}`} />)}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold italic">Physics: Waves</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(s => <div key={s} className={`w-3 h-1.5 rounded-full ${s <= 2 ? 'bg-rose-500' : 'bg-slate-100'}`} />)}
            </div>
          </div>
        </div>
        
        <button className="w-full mt-6 bg-slate-50 border border-slate-100 text-slate-900 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
          <MousePointer2 size={12} /> Plan Revision for Physics
        </button>
      </section>
    </div>
  );
}