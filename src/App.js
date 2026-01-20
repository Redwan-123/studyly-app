import React, { useState, useEffect } from 'react';
import { LayoutGrid, Layers, Timer, Calendar, BarChart2, BookOpen, X, PlusCircle, LogOut } from 'lucide-react';

import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import Modules from './Modules';
import Focus from './Focus';
import Exams from './Exams';
import Stats from './Stats';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [viewStack, setViewStack] = useState(['Dashboard']);
  const [scrollStep, setScrollStep] = useState(0);
  const [showAddModal, setShowAddModal] = useState(null);

  const [modules, setModules] = useState([
    { id: 1, name: 'Advanced Math', progress: 60, timeRemaining: '3h 40m' },
    { id: 2, name: 'Macroeconomics', progress: 35, timeRemaining: '5h 10m' }
  ]);

  const [exams, setExams] = useState([
    { id: 1, name: 'Math Midterm', date: 'Jan 24', urgency: 'high' },
    { id: 2, name: 'Economics Quiz', date: 'Jan 30', urgency: 'medium' }
  ]);

  const navigateTo = (tab) => {
    setViewStack((prev) => [...prev, tab]);
    setActiveTab(tab);
  };

  useEffect(() => {
    if (hasStarted) return;
    const handleScroll = () => {
      const vh = window.innerHeight;
      const pos = window.scrollY;
      if (pos < vh * 0.4) setScrollStep(0);
      else if (pos < vh * 1.4) setScrollStep(1);
      else if (pos < vh * 2.4) setScrollStep(2);
      else if (pos < vh * 3.4) setScrollStep(3);
      else if (pos < vh * 4.4) setScrollStep(4);
      else setScrollStep(5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasStarted]);

  if (!hasStarted) {
    return <LandingPage scrollStep={scrollStep} onStart={() => setHasStarted(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FE] font-sans selection:bg-blue-100 flex flex-col md:flex-row">
      
      {/* --- DESKTOP SIDEBAR (Visible only on md screens and up) --- */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-100 p-8 sticky top-0 h-screen">
        <div className="flex items-center gap-2 mb-12">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white shadow-lg shadow-blue-500/20">
            <BookOpen size={16} />
          </div>
          <h1 className="text-xl font-black italic uppercase tracking-tighter text-slate-900">STUDYLY</h1>
        </div>

        <nav className="flex flex-col gap-4 flex-1">
          <SidebarItem icon={<LayoutGrid size={20}/>} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
          <SidebarItem icon={<Layers size={20}/>} label="Modules" active={activeTab === 'Modules'} onClick={() => setActiveTab('Modules')} />
          <SidebarItem icon={<Timer size={20}/>} label="Focus Mode" active={activeTab === 'Focus'} onClick={() => setActiveTab('Focus')} />
          <SidebarItem icon={<Calendar size={20}/>} label="Exam Dates" active={activeTab === 'Exams'} onClick={() => setActiveTab('Exams')} />
          <SidebarItem icon={<BarChart2 size={20}/>} label="Analytics" active={activeTab === 'Stats'} onClick={() => setActiveTab('Stats')} />
        </nav>

        <button 
          onClick={() => setHasStarted(false)}
          className="flex items-center gap-3 p-4 text-slate-400 hover:text-rose-500 transition-colors font-bold uppercase text-xs tracking-widest"
        >
          <LogOut size={18} /> Exit System
        </button>
      </aside>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="flex-1 flex flex-col">
        
        {/* MOBILE HEADER (Hidden on desktop) */}
        <header className="p-8 flex justify-between items-center w-full max-w-2xl mx-auto md:hidden">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setHasStarted(false)} 
              className="p-2.5 bg-white rounded-xl border border-slate-100 shadow-sm text-slate-400 hover:text-rose-500 active:scale-90 transition-all"
            >
              <LogOut size={18} />
            </button>
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white shadow-lg shadow-blue-500/20">
                <BookOpen size={16} />
              </div>
              <h1 className="text-lg font-black italic uppercase tracking-tighter text-slate-900">STUDYLY</h1>
            </div>
          </div>
          <button onClick={() => setShowAddModal('module')} className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm text-blue-600 active:scale-90 transition-transform">
            <PlusCircle size={22} />
          </button>
        </header>
        
        {/* PAGE CONTENT - Now expands on desktop but stays centered on mobile */}
        <main className="px-6 pb-32 pt-4 md:pt-12 w-full max-w-5xl mx-auto">
          {activeTab === 'Dashboard' && <Dashboard modules={modules} exams={exams} onStartFocus={() => setActiveTab('Focus')} />}
          {activeTab === 'Modules'   && <Modules   modules={modules} onStartFocus={() => setActiveTab('Focus')} />}
          {activeTab === 'Focus'     && <Focus     modules={modules} />}
          {activeTab === 'Exams'     && <Exams     exams={exams} />}
          {activeTab === 'Stats'     && <Stats />}
        </main>
      </div>

      {/* BOTTOM NAV (Hidden on desktop) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-2xl border-t border-slate-100 px-6 py-6 flex justify-between items-center pb-10 z-50">
        <NavItem icon={<LayoutGrid size={22}/>} label="Dash" active={activeTab === 'Dashboard'} onClick={() => navigateTo('Dashboard')} />
        <NavItem icon={<Layers size={22}/>} label="Modules" active={activeTab === 'Modules'} onClick={() => navigateTo('Modules')} />
        <NavItem icon={<Timer size={22}/>} label="Focus" active={activeTab === 'Focus'} onClick={() => navigateTo('Focus')} />
        <NavItem icon={<Calendar size={22}/>} label="Exams" active={activeTab === 'Exams'} onClick={() => navigateTo('Exams')} />
        <NavItem icon={<BarChart2 size={22}/>} label="Stats" active={activeTab === 'Stats'} onClick={() => navigateTo('Stats')} />
      </nav>

      {/* MODAL OVERLAY */}
      {showAddModal && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-[2rem] md:rounded-[3rem] p-8 shadow-2xl animate-in slide-in-from-bottom-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black italic uppercase tracking-tighter text-slate-900">Add {showAddModal}</h2>
              <button onClick={() => setShowAddModal(null)} className="p-2 bg-slate-100 rounded-full text-slate-400"><X size={20}/></button>
            </div>
            <input autoFocus placeholder="Enter name..." className="w-full bg-slate-50 border-none rounded-2xl p-4 mb-6 font-bold outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg">Save to System</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Sidebar Nav for Desktop
function SidebarItem({ icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}>
      {icon}
      <span className="font-bold uppercase text-[10px] tracking-widest">{label}</span>
    </button>
  );
}

// Mobile Nav
function NavItem({ icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1.5 flex-1 transition-all active:scale-75 group">
      <div className={`p-3 rounded-2xl transition-all duration-300 ${active ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 -translate-y-1' : 'text-slate-300 group-hover:text-slate-400'}`}>
        {icon}
      </div>
      <span className={`text-[8px] font-black uppercase tracking-tighter ${active ? 'text-blue-600' : 'text-slate-300'}`}>
        {label}
      </span>
    </button>
  );
}