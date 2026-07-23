import React, { useState } from 'react';
import { FileText, Copy, Check, Globe } from 'lucide-react';

interface EssayViewProps {
  interfaceLang?: 'ml' | 'en';
}

export const EssayView: React.FC<EssayViewProps> = ({ data, interfaceLang }) => {
  const [copiedLang, setCopiedLang] = useState<string | null>(null);

  const copyEssay = (text: string, lang: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLang(lang);
    setTimeout(() => setCopiedLang(null), 2000);
  };

  const currentEssayText = interfaceLang === 'ml' ? data.mlEssay : data.enEssay;
  const currentTitleText = interfaceLang === 'ml' ? data.mlTitle : data.enTitle;

  return (
    <div className="space-y-6 sm:space-y-8 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-800 via-indigo-900 to-slate-900 text-white rounded-2xl p-4 sm:p-6 shadow-md">
        <div className="text-right w-full" dir="rtl">
          <div className="inline-flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center font-bold">
              <FileText size={18} className="text-blue-200" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-arabic amiri-bold">مقالات ونقد تحليلي حول القصيدة</h2>
          </div>
          <p className="text-blue-200 text-xs sm:text-sm font-medium mt-1 text-right" dir="ltr">
            {interfaceLang === 'ml'
              ? 'കവിതയുടെ സമഗ്ര സാഹിത്യ നിരൂപണ ഉപന്യാസങ്ങൾ (Detailed Scholarly Essays)'
              : 'Scholarly Analytical Essays & Critical Studies of the Poem'}
          </p>
        </div>
      </div>

      {/* Essays Dual Columns Grid */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {/* Malayalam / English Essay Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-1.5 text-blue-600 font-bold text-xs sm:text-sm" dir="ltr">
              <Globe size={16} />
              <span>{interfaceLang === 'ml' ? 'മലയാളം ഉപന്യാസം (Malayalam Essay)' : 'Scholarly Essay (English)'}</span>
            </div>
            <button
              onClick={() => copyEssay(currentEssayText, 'lang')}
              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              title="Copy Essay"
            >
              {copiedLang === 'lang' ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
            </button>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug" dir="ltr">
            {currentTitleText}
          </h3>

          <div
            className="text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm font-medium space-y-3 text-justify"
            dir="ltr"
            dangerouslySetInnerHTML={{
              __html: currentEssayText
                .replace(/### (.*?)\n/g, '<h4 class="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mt-4 mb-1.5">$1</h4>')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-800 dark:text-blue-300 font-bold">$1</strong>')
                .replace(/\n\n/g, '<br/><br/>'),
            }}
          />
        </div>

        {/* Arabic Essay Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <button
              onClick={() => copyEssay(data.arEssay, 'ar')}
              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              title="Copy Essay"
            >
              {copiedLang === 'ar' ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
            </button>
            <div className="flex items-center gap-1.5 text-blue-600 font-bold text-xs sm:text-sm font-arabic amiri-bold" dir="rtl">
              <Globe size={16} />
              <span>المقال التحليلي بالعربية</span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-arabic amiri-bold text-slate-800 dark:text-slate-100 leading-relaxed text-right" dir="rtl">
            {data.arTitle}
          </h3>

          <div
            className="text-slate-800 dark:text-slate-200 font-arabic amiri-regular text-sm sm:text-base leading-relaxed space-y-3 text-right text-justify"
            dir="rtl"
            dangerouslySetInnerHTML={{
              __html: data.arEssay
                .replace(/### (.*?)\n/g, '<h4 class="font-bold text-base sm:text-lg text-blue-700 dark:text-blue-400 mt-4 mb-1.5 font-arabic amiri-bold">$1</h4>')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-800 dark:text-blue-300 font-bold font-arabic amiri-bold">$1</strong>')
                .replace(/\n\n/g, '<br/><br/>'),
            }}
          />
        </div>
      </div>
    </div>
  );
};
