import React from 'react';
import { Timer, Zap, Play, Pause, RotateCcw, Target, Trophy, Info } from 'lucide-react';

export default function Focus({ modules }) {
  return (
    <div className="space-y-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. THE MAIN TIMER */}
      <section className="bg-slate-900 rounded-[3rem] p-10 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/30">
          <div className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" style={{ width: '60%' }} />
        </div>
        
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-2">Deep Work Session</div>
        <div className="text-7xl font-black tabular-nums tracking-tighter mb-8">24:59</div>
        
        <div className="flex justify-center gap-4">
          <button className="bg-white text-black p-5 rounded-3xl active:scale-90 transition-transform shadow-lg">
            <Pause size={24} fill="currentColor" />
          </button>
          <button className="bg-white/10 text-white p-5 rounded-3xl active:scale-90 transition-transform backdrop-blur-md">
            <RotateCcw size={24} />
          </button>
        </div>

        <div className="mt-8 flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10">
          <div className="text-left">
            <div className="text-[8px] font-black text-white/40 uppercase">Goal</div>
            <div className="text-xs font-bold italic">50 Minutes</div>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="text-right">
            <div className="text-[8px] font-black text-white/40 uppercase">Focusing On</div>
            <div className="text-xs font-bold italic text-blue-400">Calculus Basics</div>
          </div>
        </div>
      </section>

      {/* 2. FOCUS SUMMARY */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm">
          <Zap size={20} className="text-amber-500 mb-2" />
          <div className="text-2xl font-black italic tracking-tighter">1.5h</div>
          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Today's Focus</div>
        </div>
        <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm">
          <Trophy size={20} className="text-blue-500 mb-2" />
          <div className="text-2xl font-black italic tracking-tighter">5 Days</div>
          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Study Streak</div>
        </div>
      </div>

      {/* 3. SMART SUGGESTION */}
      <section className="bg-blue-50 p-5 rounded-[2rem] border border-blue-100 flex items-start gap-4">
        <div className="bg-blue-600 text-white p-2 rounded-xl mt-1">
          <Info size={16} />
        </div>
        <div>
          <h4 className="text-xs font-black uppercase text-blue-900 tracking-tight">Prime Time Alert</h4>
          <p className="text-blue-800/70 text-[11px] font-bold italic leading-snug mt-1">
            You study best between 6-8 PM. Start a 25m session for Physics now to maximize retention.
          </p>
        </div>
      </section>
    </div>
  );
}