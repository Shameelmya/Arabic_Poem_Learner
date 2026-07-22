import React from 'react';
import { BookOpen } from 'lucide-react';

interface HomeViewProps {
  onSeeChapters: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSeeChapters }) => {
  const whatsappMsg = "i have seen you r applicatin . we also need to craete on e like it.  or somehing lik eit.";
  const encodedMsg = encodeURIComponent(whatsappMsg);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white px-4 relative overflow-hidden font-english">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="z-10 text-center max-w-3xl flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* App Title */}
        <h1 className="font-arabic font-bold text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 leading-tight mb-2 py-2 drop-shadow-sm" dir="rtl">
          رونق القوافي
        </h1>
        
        {/* Subtitle */}
        <div className="space-y-3 p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/50 dark:border-slate-800/50 shadow-xl shadow-blue-900/5">
          <p className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200">
            Arabic study aid for Class : Degree 1 students
          </p>
          <div className="h-px w-24 bg-blue-200 dark:bg-blue-800 mx-auto rounded-full" />
          <p className="text-sm md:text-md text-slate-600 dark:text-slate-400 uppercase tracking-widest font-bold">
            Coordination of Islamic Colleges
          </p>
        </div>

        {/* Action Button */}
        <button 
          onClick={onSeeChapters}
          className="mt-8 group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95 border border-blue-500/50"
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
      <div className="absolute bottom-6 w-full text-center z-10 animate-in fade-in duration-1000 delay-500">
        <a 
          href={`https://wa.me/917559865389?text=${encodedMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] md:text-xs font-medium text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:underline underline-offset-4"
        >
          developed and designed by Shameel Wafy Malayamma
        </a>
      </div>
    </div>
  );
};
