import React, { useState } from 'react';
import { PoetData } from '../types';
import { User, Award, Calendar, MapPin, BookOpen, Feather, Sparkles } from 'lucide-react';

interface PoetViewProps {
  interfaceLang?: 'ml' | 'en';
}

export const PoetView: React.FC<PoetViewProps> = ({ data, interfaceLang }) => {
  const [langTab, setLangTab] = useState<'ar' | 'translation'>('ar');

  return (
    <div className="space-y-4 sm:space-y-6 pb-20">
      {/* Hero Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 dark:border-slate-800">
        <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 p-5 sm:p-8 text-white relative">
          <div className="flex flex-col md:flex-row items-center gap-5 relative z-10">
            {/* Poet Avatar / Icon */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border-2 border-white/20 shadow-xl">
              <User size={60} className="text-blue-200/80" />
            </div>

            {/* Title & Info */}
            <div className="text-center md:text-right w-full" dir="rtl">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-semibold mb-2 border border-white/20 text-blue-200">
                <Award size={13} />
                <span className="font-arabic amiri-bold">أمير الشعراء ({interfaceLang === 'ml' ? 'കവികളുടെ രാജാവ്' : 'Prince of Poets'})</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-arabic amiri-bold mb-1">{data.nameAr}</h1>
              <h2 className="text-base sm:text-lg text-blue-200 font-semibold mb-3" dir="ltr">
                {interfaceLang === 'ml' ? data.nameMl : data.nameEn}
              </h2>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs font-medium">
                <span className="px-2.5 py-1 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-1 text-[11px]">
                  <Calendar size={12} />
                  <span>1868 - 1932 م</span>
                </span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-1 text-[11px]">
                  <MapPin size={12} />
                  <span>القاهرة، مصر (Cairo, Egypt)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Language Switcher Bar */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200/80 dark:border-slate-800 flex justify-center">
          <div className="bg-slate-200 dark:bg-slate-700 p-1 rounded-xl flex items-center gap-1 text-xs font-bold">
            <button
              onClick={() => setLangTab('ar')}
              className={`px-4 py-1.5 rounded-lg transition-all ${
                langTab === 'ar' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-arabic' : 'text-slate-600 dark:text-slate-300 font-arabic'
              }`}
            >
              العربية (Arabic)
            </button>
            <button
              onClick={() => setLangTab('translation')}
              className={`px-4 py-1.5 rounded-lg transition-all ${
                langTab === 'translation' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {interfaceLang === 'ml' ? 'മലയാളം' : 'English Summary'}
            </button>
          </div>
        </div>

        {/* Detailed Biography Text */}
        <div className="p-4 sm:p-6">
          {langTab === 'ar' ? (
            <div className="text-right space-y-3" dir="rtl">
              <h3 className="text-lg sm:text-xl font-bold font-arabic amiri-bold text-slate-800 dark:text-slate-100 flex items-center justify-start gap-2">
                <BookOpen size={18} className="text-blue-600" />
                <span>السيرة الذاتية المفصلة لأحمد شوقي:</span>
              </h3>
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-arabic amiri-regular text-lg sm:text-xl text-justify whitespace-pre-line">
                {data.bioAr}
              </p>
            </div>
          ) : (
            <div className="space-y-3 text-justify" dir="ltr">
              <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <BookOpen size={18} className="text-blue-600" />
                <span>
                  {interfaceLang === 'ml' ? 'കവിയുടെ വിശദമായ ജീവചരിത്രം:' : 'Detailed Biography of Ahmed Shawqi:'}
                </span>
              </h3>
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm font-medium whitespace-pre-line">
                {interfaceLang === 'ml' ? data.bioMl : data.bioEn}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Key Biographical Milestones Cards */}
      <div className="space-y-3">
        <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <Sparkles size={16} className="text-blue-600" />
          <span>
            {interfaceLang === 'ml'
              ? 'അഹമ്മദ് ഷൗഖിയുടെ ജീവിതത്തിലെ നാഴികക്കല്ലുകൾ:'
              : 'Key Biographical Milestones of Ahmed Shawqi:'}
          </span>
        </h3>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          {data.facts.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2"
            >
              <div className="flex justify-between items-start">
                <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </span>
                <h4 className="text-base font-bold font-arabic amiri-bold text-blue-700 dark:text-blue-400 text-right" dir="rtl">
                  {fact.titleAr}
                </h4>
              </div>
              <p className="text-sm font-arabic amiri-regular text-slate-800 dark:text-slate-200 text-right leading-relaxed pb-1.5" dir="rtl">
                {fact.descAr}
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                <h5 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200" dir="ltr">
                  {interfaceLang === 'ml' ? fact.titleMl : fact.titleEn}
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify" dir="ltr">
                  {interfaceLang === 'ml' ? fact.descMl : fact.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Famous Literary Works List */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <Feather size={16} className="text-blue-600" />
          <span>
            {interfaceLang === 'ml' ? 'പ്രധാന കൃതികൾ (Famous Literary Works)' : 'Famous Literary Works'}
          </span>
        </h3>

        <div className="grid md:grid-cols-2 gap-2.5">
          {data.worksAr.map((workAr, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs"
            >
              <span className="font-medium text-slate-700 dark:text-slate-300" dir="ltr">
                {interfaceLang === 'ml' ? data.worksMl[idx] : data.worksEn[idx]}
              </span>
              <span className="font-arabic amiri-bold text-base text-blue-700 dark:text-blue-400" dir="rtl">
                {workAr}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
