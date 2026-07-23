import React, { useState } from 'react';
import { Feather, BookOpen } from 'lucide-react';

interface BalaghaViewProps {
  interfaceLang?: 'ml' | 'en';
}

export const BalaghaView: React.FC<BalaghaViewProps> = ({ data, interfaceLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelMl: 'എല്ലാ അലങ്കാരങ്ങളും', labelEn: 'All Figures' },
    { id: 'استعارة', labelMl: 'الاستعارة (Metaphor)', labelEn: 'Metaphor' },
    { id: 'استفهام', labelMl: 'الاستفهام (Rhetorical)', labelEn: 'Rhetorical Question' },
    { id: 'اقتباس', labelMl: 'الاقتباس (Quranic)', labelEn: 'Quranic Allusion' },
    { id: 'طباق', labelMl: 'الطباق (Antithesis)', labelEn: 'Antithesis' },
    { id: 'تشبيه', labelMl: 'التشبيه (Simile)', labelEn: 'Simile' },
    { id: 'أسلوب', labelMl: 'أسلوب الأمر (Imperative)', labelEn: 'Imperatives' },
  ];

  const filteredItems = data.filter((b) => {
    if (selectedCategory === 'all') return true;
    return b.category === selectedCategory;
  });

  return (
    <div className="space-y-4 sm:space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-900 text-white rounded-2xl p-4 sm:p-6 shadow-md">
        <div className="text-right w-full" dir="rtl">
          <div className="inline-flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center font-bold">
              <Feather size={18} className="text-purple-200" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-arabic amiri-bold">البلاغة والتذوق الأدبي في القصيدة</h2>
          </div>
          <p className="text-purple-200 text-xs sm:text-sm font-medium mt-1 text-right" dir="ltr">
            {interfaceLang === 'ml'
              ? 'കവിതയിലെ പ്രയോഗ ഭംഗികളും കാവ്യാലങ്കാരങ്ങളും (Poetic Devices & Rhetoric)'
              : 'Rhetorical Analysis & Poetic Devices in the Poem'}
          </p>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            {interfaceLang === 'ml' ? cat.labelMl : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Cards List */}
      <div className="grid gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-sm transition-all space-y-4"
          >
            {/* Header / Category Badge */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100" dir="ltr">
                  {interfaceLang === 'ml' ? item.titleMl : (item.titleEn || item.titleMl)}
                </h3>
                <p className="text-xs font-arabic amiri-bold text-purple-600 dark:text-purple-400 text-right mt-0.5" dir="rtl">
                  {item.titleAr}
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                {item.lineNumber && (
                  <span className="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full font-bold">
                    {interfaceLang === 'ml' ? `വരി ${item.lineNumber}` : `Line ${item.lineNumber}`}
                  </span>
                )}
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-arabic">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Poetic Example Verse Box - Centered Arabic */}
            <div className="bg-purple-50/60 dark:bg-purple-950/30 p-3.5 rounded-xl border border-purple-200/60 dark:border-purple-800/40 text-center">
              <span className="text-[11px] text-purple-600 dark:text-purple-400 font-bold block mb-0.5">
                الشاهد الشعري (Example Verse):
              </span>
              <p className="text-lg sm:text-2xl font-arabic amiri-bold text-purple-950 dark:text-purple-100 leading-relaxed text-center" dir="rtl">
                "{item.exampleAr}"
              </p>
            </div>

            {/* Explanation Grid (Language Translation & Arabic) */}
            <div className="grid md:grid-cols-2 gap-6 pt-2 items-start">
              {/* Meaning Column (Left) */}
              <div className="space-y-1.5 pr-0 md:pr-4" dir="ltr">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-purple-600 shrink-0" />
                  <span>
                    {interfaceLang === 'ml' ? 'വിശദീകരണം:' : 'English Explanation:'}
                  </span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify font-medium">
                  {interfaceLang === 'ml' ? item.explanationMl : (item.explanationEn || item.explanationMl)}
                </p>
              </div>

              {/* Arabic Sharah Column (Right with Vertical Separator) */}
              <div className="space-y-1.5 text-right md:border-l-2 md:border-slate-200 dark:md:border-slate-800 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800" dir="rtl">
                <h4 className="text-xs sm:text-sm font-bold font-arabic amiri-bold text-slate-900 dark:text-slate-100 flex items-center justify-start gap-1.5 text-right">
                  <BookOpen size={14} className="text-purple-600 shrink-0" />
                  <span>الشرح البلاغي بالعربية:</span>
                </h4>
                <p className="font-arabic amiri-regular text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed text-right">
                  {item.explanationAr}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
