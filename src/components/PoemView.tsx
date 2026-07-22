import React, { useState } from 'react';
import { Poem, WordData } from '../types';
import { BookOpen, Globe, Search, Sparkles, Tag, Layers } from 'lucide-react';

interface PoemViewProps {
  poem: Poem;
  interfaceLang: 'ml' | 'en';
  isIrabMode?: boolean;
  isHideMeaning?: boolean;
}

export const PoemView: React.FC<PoemViewProps> = ({
  poem,
  interfaceLang,
  isIrabMode = false,
  isHideMeaning = false,
}) => {
  const [hoveredWordKey, setHoveredWordKey] = useState<string | null>(null);
  const [selectedWord, setSelectedWord] = useState<{ word: WordData; lineNum: number } | null>(null);
  const [sharahCoupletState, setSharahCoupletState] = useState<{ [key: number]: 'default' | 'ar' }>({});
  const [sharahSectionState, setSharahSectionState] = useState<{ [key: number]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLineFilter, setActiveLineFilter] = useState<number | null>(null);

  const toggleCoupletSharah = (coupletId: number) => {
    setSharahCoupletState((prev) => {
      const current = prev[coupletId] || 'default';
      const next = current === 'default' ? 'ar' : 'default';
      return { ...prev, [coupletId]: next };
    });
  };

  const toggleSectionSharah = (sectionId: number) => {
    setSharahSectionState((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Filter lines if user uses search
  const filteredLines = poem.lines.filter((l) => {
    if (activeLineFilter !== null) return l.id === activeLineFilter;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      l.ar.includes(q) ||
      l.words.some((w) => w.ar.includes(q) || w.ml.includes(q) || w.en.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-4 sm:space-y-6 pb-20">
      {/* Poem Hero Banner - Compact & Elegant */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 text-white rounded-2xl p-4 sm:p-6 shadow-md border border-blue-500/20">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-semibold mb-4 sm:mb-5 border border-white/20 text-blue-200">
            <Sparkles size={12} />
            <span className="font-arabic">{poem.meter}</span>
          </div>

          {/* Arabic Poem Main Title - Compact Size as Requested */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-arabic amiri-bold mb-1.5 leading-tight tracking-wide text-center">
            {poem.titleAr}
          </h1>

          <p className="text-sm sm:text-base font-semibold text-blue-200 mb-1 text-center">
            {interfaceLang === 'ml' ? poem.titleMl : poem.titleEn}
          </p>

          <p className="text-xs text-slate-300 font-arabic text-center">
            {poem.poetAr} • {poem.totalLines} بيت شعري
          </p>
        </div>
      </div>

      {/* Sticky Search & Filter Control Bar */}
      <div className="sticky top-12 z-30 flex flex-col sm:flex-row items-center justify-between gap-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="relative w-full sm:w-72">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={interfaceLang === 'ml' ? "പദമോ അർത്ഥമോ തിരയുക..." : "Search words or lines..."}
            className="w-full pl-9 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-slate-200"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end text-xs">
          <span className="text-slate-500 dark:text-slate-400 font-medium text-[11px]">
            {filteredLines.length} / {poem.lines.length} {interfaceLang === 'ml' ? 'വരികൾ' : 'lines'}
          </span>
          {activeLineFilter !== null && (
            <button
              onClick={() => setActiveLineFilter(null)}
              className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-md text-[11px] font-semibold"
            >
              {interfaceLang === 'ml' ? 'എല്ലാ വരികളും' : 'Show All'}
            </button>
          )}
        </div>
      </div>

      {/* Common Guidance Banner */}
      <div className="bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/50 rounded-xl px-3.5 py-2 text-center text-xs font-medium text-blue-900 dark:text-blue-200 shadow-xs flex items-center justify-center gap-2">
        <Sparkles size={14} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
        <span>
          {isHideMeaning
            ? 'وضع إخفاء المعاني: عرض الأبيات والشرح العربي فقط'
            : interfaceLang === 'ml'
            ? 'വാക്കിന്റെ അർത്ഥവും ഇഅ്റാബും (വ്യാകരണം) കാണാൻ വരികളിലെ വാക്കിൽ ക്ലിക്ക് ചെയ്യുക'
            : 'Tap or hover over any word in the lines to view its Word Meaning & I\'rab'}
        </span>
      </div>



      {/* Lines Container - Center Aligned Arabic Verse Layout */}
      <div className="space-y-4 sm:space-y-5">
        {filteredLines.map((line) => {
          const isCoupletEnd = line.id % 2 === 0;
          const coupletId = Math.floor((line.id - 1) / 2);
          const coupletData = poem.couplets.find((c) => c.id === coupletId);
          const sectionData = poem.sections.find((s) => s.endLine === line.id);
          const modeState = sharahCoupletState[coupletId] || 'default';

          return (
            <div
              key={line.id}
              id={`line-${line.id}`}
              className="relative rounded-2xl p-3.5 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Line Index Badge Header */}
              <div className="flex items-center justify-start mb-2 pb-1.5 border-b border-slate-100 dark:border-slate-800/80">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                  {interfaceLang === 'ml' ? `വരി ${line.id}` : `Line ${line.id}`}
                </span>
              </div>

              {/* The Verse - Compact Mobile Font Size & Center Alignment */}
              <div className="w-full text-center my-2 sm:my-3" dir="rtl">
                <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-2 py-1 mx-auto">
                  {line.words.map((w, wIdx) => {
                    const wordKey = `${line.id}-${wIdx}`;
                    const isHovered = hoveredWordKey === wordKey;

                    return (
                      <div
                        key={wIdx}
                        className="relative group inline-block"
                        onMouseEnter={() => setHoveredWordKey(wordKey)}
                        onMouseLeave={() => setHoveredWordKey(null)}
                        onClick={() => setSelectedWord({ word: w, lineNum: line.id })}
                      >
                        <span
                          className={`relative cursor-pointer select-none transition-all duration-150 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold font-arabic amiri-bold leading-relaxed px-1 sm:px-1.5 py-0.5 rounded-lg ${
                            isHovered
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 shadow-sm scale-105'
                              : 'text-slate-800 dark:text-slate-100'
                          }`}
                        >
                          {w.ar}
                        </span>

                        {/* Hover Tooltip - Hidden if isHideMeaning is ON */}
                        {isHovered && !isHideMeaning && (
                          <div
                            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 sm:w-64 bg-slate-950 text-white rounded-xl p-2.5 sm:p-3 shadow-2xl border border-slate-800 pointer-events-none animate-in fade-in zoom-in-95 duration-100"
                            dir="ltr"
                          >
                            <div className="text-center space-y-1.5">
                              <span className="text-sm sm:text-base text-amber-300 block font-arabic amiri-bold" dir="rtl">
                                {w.ar}
                              </span>

                              {/* Show word meaning in BOTH languages in normal mode (isIrabMode OFF) */}
                              {!isIrabMode && (
                                <div className="space-y-1 text-center bg-slate-900/90 p-1.5 sm:p-2 rounded-lg border border-slate-800">
                                  <p className="font-bold text-xs sm:text-sm text-yellow-300 leading-snug">
                                    {w.ml}
                                  </p>
                                  <p className="font-medium text-xs text-blue-100 leading-snug">
                                    {w.en}
                                  </p>
                                </div>
                              )}

                              {/* Show I'rab ONLY when isIrabMode is ON */}
                              {isIrabMode && w.irab && (
                                <div className="pt-1 border-t border-slate-800/80 text-center" dir="rtl">
                                  <span className="text-[10px] text-amber-300 font-bold font-arabic block text-center">الإعراب النحوي:</span>
                                  <p className="text-[11px] font-arabic amiri-regular text-slate-200 leading-tight text-center">
                                    {w.irab}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-slate-950"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Line Notes in Malayalam/English - Hidden if isHideMeaning is ON */}
              {!isHideMeaning && (line.noteMl || line.noteEn) && (
                <div className="mt-2.5 flex justify-center">
                  <div className="bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 text-xs px-3 py-2 rounded-xl border border-amber-200/80 dark:border-amber-800/50 max-w-xl text-center font-medium leading-relaxed">
                    <span className="font-bold mr-1">📌 {interfaceLang === 'ml' ? 'കുറിപ്പ്:' : 'Note:'}</span>{' '}
                    {interfaceLang === 'ml' ? (line.noteMl || line.noteEn) : (line.noteEn || line.noteMl)}
                  </div>
                </div>
              )}

              {/* Couplet Meaning & Sharah Box (Every 2 Lines) */}
              {isCoupletEnd && coupletData && (
                <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800">
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3.5 sm:p-4 border border-slate-200/60 dark:border-slate-700/60 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300">
                        <BookOpen size={14} />
                        <span>
                          {isHideMeaning
                            ? `الشرح العربي للبيتين ${coupletData.lineIndices[0] + 1} & ${coupletData.lineIndices[1] + 1}`
                            : interfaceLang === 'ml'
                            ? `വരികൾ ${coupletData.lineIndices[0] + 1} & ${coupletData.lineIndices[1] + 1} ആശയം`
                            : `Lines ${coupletData.lineIndices[0] + 1} & ${coupletData.lineIndices[1] + 1} Meaning`}
                        </span>
                      </div>

                      {/* Sharah Toggle Button - Hidden if Hide Meaning is active */}
                      {!isHideMeaning && (
                        <button
                          onClick={() => toggleCoupletSharah(coupletData.id)}
                          className="px-3 py-1 bg-white dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 rounded-full text-[11px] font-bold text-slate-800 dark:text-slate-100 shadow-xs transition-all flex items-center gap-1"
                        >
                          {modeState === 'ar' ? (
                            <>
                              <Globe size={12} className="text-blue-500" />
                              <span>{interfaceLang === 'ml' ? 'മലയാളം അർത്ഥം' : 'English Meaning'}</span>
                            </>
                          ) : (
                            <>
                              <BookOpen size={12} className="text-blue-500" />
                              <span className="font-arabic font-bold">الشرح العربي (Arabic Sharah)</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Content Display: Default Language (Malayalam or English) OR Arabic Sharah */}
                    <div className="min-h-[45px]">
                      {isHideMeaning || modeState === 'ar' ? (
                        <p className="text-base sm:text-lg font-arabic amiri-regular text-right leading-loose text-slate-800 dark:text-slate-100 animate-in fade-in duration-150" dir="rtl">
                          {coupletData.arSharah}
                        </p>
                      ) : (
                        <div>
                          {interfaceLang === 'ml' ? (
                            <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed text-justify" dir="ltr">
                              {coupletData.mlMeaning}
                            </p>
                          ) : (
                            <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed text-justify" dir="ltr">
                              {coupletData.enMeaning || coupletData.mlMeaning}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* New Vocabulary Words Tags - Hidden when Hide Meaning is ON */}
                    {!isHideMeaning && coupletData.newWords && coupletData.newWords.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/40 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1 mr-1">
                          <Tag size={11} /> New Vocabulary:
                        </span>
                        {coupletData.newWords.map((nw, nwIdx) => (
                          <span
                            key={nwIdx}
                            className="bg-blue-100/80 dark:bg-blue-900/40 text-blue-900 dark:text-blue-200 text-[11px] px-2 py-0.5 rounded-md border border-blue-200/50 dark:border-blue-800/40 font-medium"
                          >
                            <strong className="font-arabic font-bold text-xs mr-1" dir="rtl">{nw.ar}</strong> = {interfaceLang === 'ml' ? nw.ml : nw.en}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Section Total Summary Box */}
              {sectionData && (
                <div className="mt-6 bg-indigo-50/80 dark:bg-indigo-950/30 rounded-2xl p-4 sm:p-5 border border-indigo-200/80 dark:border-indigo-800/60 shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3 pb-2.5 border-b border-indigo-200/60 dark:border-indigo-800/40">
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-indigo-950 dark:text-indigo-100 flex items-center gap-1.5">
                        <Layers size={14} className="text-indigo-600 dark:text-indigo-400" />
                        <span>
                          {isHideMeaning
                            ? `ملخص المقطع الشعري (الأبيات ${sectionData.startLine}-${sectionData.endLine})`
                            : interfaceLang === 'ml'
                            ? sectionData.titleMl
                            : (sectionData.titleEn || `Section: Lines ${sectionData.startLine}-${sectionData.endLine}`)}
                        </span>
                      </h3>
                      <p className="text-xs text-indigo-700 dark:text-indigo-300 font-arabic amiri-bold" dir="rtl">
                        {sectionData.titleAr}
                      </p>
                    </div>

                    {!isHideMeaning && (
                      <button
                        onClick={() => toggleSectionSharah(sectionData.id)}
                        className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-[11px] font-bold shadow-xs transition-colors flex items-center gap-1 flex-shrink-0"
                      >
                        {sharahSectionState[sectionData.id] ? (
                          <>
                            <Globe size={12} />
                            <span>{interfaceLang === 'ml' ? 'മലയാളം ഉപസംഹാരം' : 'English Summary'}</span>
                          </>
                        ) : (
                          <>
                            <BookOpen size={12} />
                            <span className="font-arabic">الشرح الإجمالي (Arabic Summary)</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="min-h-[50px]">
                    {isHideMeaning || sharahSectionState[sectionData.id] ? (
                      <p className="text-base sm:text-lg font-arabic amiri-regular text-right leading-loose text-indigo-950 dark:text-indigo-100 animate-in fade-in duration-150" dir="rtl">
                        {sectionData.arSummary}
                      </p>
                    ) : (
                      <p className="text-xs sm:text-sm font-medium text-indigo-900 dark:text-indigo-200 leading-relaxed text-justify" dir="ltr">
                        {interfaceLang === 'ml' ? sectionData.mlSummary : (sectionData.enSummary || sectionData.mlSummary)}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
