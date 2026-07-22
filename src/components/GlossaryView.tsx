import React, { useState } from 'react';
import { glossaryData } from '../data/glossaryData';
import { List, Search } from 'lucide-react';

interface GlossaryViewProps {
  interfaceLang?: 'ml' | 'en';
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ interfaceLang = 'ml' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredItems = glossaryData.filter((item) => {
    const matchesSearch =
      item.wordAr.includes(searchTerm) ||
      item.meaningMl.includes(searchTerm) ||
      item.meaningEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.rootAr.includes(searchTerm);

    const matchesType = selectedType === 'all' || item.typeAr.includes(selectedType);

    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-4 sm:space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-800 to-slate-900 text-white rounded-2xl p-4 sm:p-6 shadow-md">
        <div className="text-right w-full" dir="rtl">
          <div className="inline-flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center font-bold">
              <List size={18} className="text-emerald-200" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-arabic amiri-bold">معجم ألفاظ القصيدة وتراكيبها</h2>
          </div>
          <p className="text-emerald-200 text-xs sm:text-sm font-medium mt-1 text-right" dir="ltr">
            {interfaceLang === 'ml'
              ? 'കവിതയിലെ പ്രയോഗ നിഘണ്ടുവും പദകോശവും (Glossary & Dictionary)'
              : 'Poem Vocabulary Glossary & Arabic Dictionary'}
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="relative w-full sm:w-80">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={interfaceLang === 'ml' ? "പദമോ മൂല പദമോ തിരയുക (Search)..." : "Search word, root, or meaning..."}
            className="w-full pl-9 pr-3 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-200"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto no-scrollbar">
          {[
            { id: 'all', labelMl: 'എല്ലാം', labelEn: 'All Words' },
            { id: 'فعل', labelMl: 'الأفعال (Verbs)', labelEn: 'Verbs' },
            { id: 'اسم', labelMl: 'الأسماء (Nouns)', labelEn: 'Nouns' },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedType === type.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {interfaceLang === 'ml' ? type.labelMl : type.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Dictionary Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xs border border-slate-200/80 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right" dir="rtl">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold">
                <th className="p-3 sm:p-4 font-arabic">الكلمة (Word)</th>
                <th className="p-3 sm:p-4 font-arabic">الجذر / النوع</th>
                <th className="p-3 sm:p-4 text-left font-malayalam" dir="ltr">
                  {interfaceLang === 'ml' ? 'മലയാളം' : 'Translation'}
                </th>
                <th className="p-3 sm:p-4 text-left font-sans" dir="ltr">English Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs sm:text-sm">
              {filteredItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-emerald-50/40 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <td className="p-3 sm:p-4">
                    <div className="font-arabic amiri-bold text-lg sm:text-xl text-emerald-700 dark:text-emerald-400">
                      {item.wordAr}
                    </div>
                    {item.exampleLineNumber && (
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-sans block mt-0.5" dir="ltr">
                        {interfaceLang === 'ml' ? `വരി ${item.exampleLineNumber}` : `Line ${item.exampleLineNumber}`}
                      </span>
                    )}
                  </td>

                  <td className="p-3 sm:p-4">
                    <div className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] px-2 py-0.5 rounded-md font-arabic amiri-bold">
                      {item.rootAr}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-arabic">
                      {item.typeAr}
                    </div>
                  </td>

                  <td className="p-3 sm:p-4 font-semibold text-slate-800 dark:text-slate-100 text-left text-xs sm:text-sm" dir="ltr">
                    {item.meaningMl}
                  </td>

                  <td className="p-3 sm:p-4 text-slate-500 dark:text-slate-400 italic text-left text-xs sm:text-sm" dir="ltr">
                    {item.meaningEn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
