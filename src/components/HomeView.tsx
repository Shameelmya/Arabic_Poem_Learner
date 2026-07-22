import React from 'react';
import { BookOpen } from 'lucide-react';

interface HomeViewProps {
  onSeeChapters: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSeeChapters }) => {
  const whatsappMsg = "Hello! I have seen your application and really liked it. We would love to create something similar. Could we discuss this further?";
  const encodedMsg = encodeURIComponent(whatsappMsg);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white px-4 relative overflow-hidden font-english">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="z-10 text-center max-w-3xl flex flex-col items-center justify-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 w-full px-4">
        
        {/* Logo and App Title */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-16 h-28 md:w-20 md:h-32 -mb-8 md:-mb-12 z-0 opacity-90">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNPdGWZBf-5w-PhPW6lrawUlfqGrhYK8IdLaX-cgXLT-NB7GBADblToA&s=10" 
              alt="Logo" 
              className="w-full h-full object-cover object-center contrast-150" 
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <h1 className="relative z-10 font-arabic font-bold text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 leading-tight drop-shadow-sm" dir="rtl">
            الألوان
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="space-y-2 px-6 py-3 md:px-8 md:py-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/50 dark:border-slate-800/50 shadow-xl shadow-blue-900/5">
          <p className="text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400">
            Arabic Study Aid For Students
          </p>
          <div className="h-px w-16 bg-blue-200 dark:bg-blue-800 mx-auto rounded-full" />
          <p className="text-base md:text-lg text-blue-700 dark:text-blue-400 font-black tracking-wide">
            Class : Aliya 2
          </p>
        </div>

        {/* Action Button */}
        <button 
          onClick={onSeeChapters}
          className="mt-5 group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95 border border-blue-500/50"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-opacity group-hover:opacity-90" />
          <span className="relative z-10 flex items-center gap-3">
            <span className="text-lg tracking-wide">See Chapters</span>
            <span className="w-px h-5 bg-white/30 rounded-full" />
            <span className="font-arabic text-2xl font-bold" dir="rtl">الفصول</span>
            <BookOpen size={20} className="group-hover:animate-bounce" />
          </span>
        </button>
      </div>

      {/* Footer text */}
      <div className="mt-auto pt-16 pb-4 w-full text-center z-10 animate-in fade-in duration-1000 delay-500 flex flex-col items-center justify-center space-y-1.5">
        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-bold tracking-tight uppercase">
          Coordination Of Islamic Colleges
        </p>
        <a 
          href={`https://wa.me/917559865389?text=${encodedMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] md:text-[10px] transition-all hover:opacity-80 inline-flex items-center gap-1"
        >
          <span className="font-light text-black dark:text-slate-300">developed and designed by</span>
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">Shameel Wafy Malayamma</span>
        </a>
      </div>
    </div>
  );
};
