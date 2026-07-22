import React from 'react';
import { BookOpen, HelpCircle, User, Feather, List, FileText, Moon, Sun, ChevronDown, Sparkles, Globe, Eye, EyeOff, Home } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  interfaceLang: 'ml' | 'en';
  setInterfaceLang: (lang: 'ml' | 'en') => void;
  isIrabMode: boolean;
  setIsIrabMode: (val: boolean) => void;
  isHideMeaning: boolean;
  setIsHideMeaning: (val: boolean) => void;
  selectedPoemTitle: string;
  onOpenPoemModal: () => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  interfaceLang,
  setInterfaceLang,
  isIrabMode,
  setIsIrabMode,
  isHideMeaning,
  setIsHideMeaning,
  selectedPoemTitle,
  onOpenPoemModal,
  onGoHome,
}) => {
  const tabs = [
    { id: 'poem', labelMl: 'കവിത & അർത്ഥം', labelEn: 'Poem & Meaning', icon: <BookOpen size={18} /> },
    { id: 'qa', labelMl: 'ചോദ്യോത്തരം', labelEn: 'Q & A', icon: <HelpCircle size={18} /> },
    { id: 'poet', labelMl: 'കവി പ്രൊഫൈൽ', labelEn: 'About Poet', icon: <User size={18} /> },
    { id: 'balagha', labelMl: 'അലങ്കാരം', labelEn: 'Balagha Notes', icon: <Feather size={18} /> },
    { id: 'glossary', labelMl: 'പദകോശം', labelEn: 'Glossary', icon: <List size={18} /> },
    { id: 'essay', labelMl: 'ഉപന്യാസം', labelEn: 'Essays', icon: <FileText size={18} /> },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-sm">
        {/* Top Control Bar (Poem Selector & Options Toggles) */}
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 py-1.5 sm:pt-4 sm:pb-3 flex items-center justify-between gap-1.5 sm:gap-2 text-xs border-b border-slate-100 dark:border-slate-800/60">
          
          {/* Left: Home Button & Poem selector */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onGoHome}
              className="flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg font-medium transition-colors border border-slate-200/60 dark:border-slate-700/60 text-xs mr-1"
              title="Home"
            >
              <Home size={14} className="text-slate-500 flex-shrink-0" />
            </button>

            <button
              onClick={onOpenPoemModal}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg font-medium transition-colors border border-slate-200/60 dark:border-slate-700/60 text-xs"
            >
              <Sparkles size={12} className="text-blue-500 flex-shrink-0" />
              <span className="font-arabic font-bold text-xs sm:text-sm truncate max-w-[100px] sm:max-w-xs">{selectedPoemTitle}</span>
              <ChevronDown size={12} className="text-slate-400 flex-shrink-0" />
            </button>
          </div>

          {/* Center/Right: Toggles (I'rab Mode, Hide Meanings, Language, Dark Mode) */}
          <div className="flex items-center gap-1 sm:gap-2 ml-auto">
            {/* I'rab Mode Switch */}
            <button
              onClick={() => setIsIrabMode(!isIrabMode)}
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all border flex items-center gap-1 ${
                isIrabMode
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title="Toggle I'rab grammar analysis mode"
            >
              <span className="font-arabic font-bold text-xs">إعراب</span>
              <span className="hidden sm:inline text-[10px] opacity-80">(I'rab)</span>
            </button>

            {/* Hide Meaning Switch */}
            <button
              onClick={() => setIsHideMeaning(!isHideMeaning)}
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all border flex items-center gap-1 ${
                isHideMeaning
                  ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title={
                isHideMeaning
                  ? (interfaceLang === 'ml' ? 'അർത്ഥങ്ങൾ മറച്ചു' : 'Meanings Hidden')
                  : (interfaceLang === 'ml' ? 'അർത്ഥം മറയ്ക്കുക' : 'Hide Meaning')
              }
            >
              {isHideMeaning ? <EyeOff size={13} /> : <Eye size={13} />}
              <span className="hidden sm:inline">
                {isHideMeaning
                  ? (interfaceLang === 'ml' ? 'അർത്ഥങ്ങൾ മറച്ചു' : 'Meanings Hidden')
                  : (interfaceLang === 'ml' ? 'അർത്ഥം മറയ്ക്കുക' : 'Hide Meaning')}
              </span>
            </button>

            {/* Primary Language Switcher: Malayalam | English */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200/80 dark:border-slate-700/80">
              <button
                onClick={() => setInterfaceLang('ml')}
                className={`px-1.5 sm:px-2 py-0.5 rounded text-[11px] font-bold transition-all flex items-center gap-1 ${
                  interfaceLang === 'ml'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
                title="Switch interface language to Malayalam"
              >
                <Globe size={10} className="hidden sm:inline" />
                <span>ML</span>
              </button>

              <button
                onClick={() => setInterfaceLang('en')}
                className={`px-1.5 sm:px-2 py-0.5 rounded text-[11px] font-bold transition-all flex items-center gap-1 ${
                  interfaceLang === 'en'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
                title="Switch interface language to English"
              >
                <span>EN</span>
              </button>
            </div>

            {/* Dark/Night Mode Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors border border-slate-200/60 dark:border-slate-700/60"
              title="Toggle Light / Night Dark Mode"
            >
              {darkMode ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} />}
            </button>
          </div>
        </div>

        {/* Main Navigation Bar (Tablet & Desktop screens >= 640px) */}
        <div className="hidden sm:flex max-w-7xl mx-auto px-2 sm:px-4 items-center justify-center py-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 sm:gap-2 min-w-max px-1 py-0.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const label = interfaceLang === 'ml' ? tab.labelMl : tab.labelEn;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {React.cloneElement(tab.icon, { size: 16 })}
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Fixed Bottom App Bar for Mobile (screens < 640px) - Icons ONLY */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200/90 dark:border-slate-800/90 px-2 py-2 shadow-2xl">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const label = interfaceLang === 'ml' ? tab.labelMl : tab.labelEn;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                title={label}
                aria-label={label}
                className={`p-2.5 rounded-xl transition-all duration-150 flex items-center justify-center relative ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                {React.cloneElement(tab.icon, { size: 20 })}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
