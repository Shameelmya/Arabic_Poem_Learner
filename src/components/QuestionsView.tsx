import React, { useState } from 'react';
import { Award, BookOpen, CheckCircle, ChevronDown, ChevronUp, RotateCcw, XCircle } from 'lucide-react';

interface QuestionsViewProps {
  interfaceLang?: 'ml' | 'en';
}

export const QuestionsView: React.FC<QuestionsViewProps> = ({ data, interfaceLang }) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  const [expandedDescriptive, setExpandedDescriptive] = useState<{ [qId: number]: boolean }>({});

  const handleSelectOption = (qId: number, optionIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const toggleDescriptiveAnswer = (qId: number) => {
    setExpandedDescriptive((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const filteredQuestions = data.filter((q) => {
    if (filterType === 'mcq') return q.type === 'mcq';
    if (filterType === 'descriptive') return q.type === 'descriptive';
    if (filterType === 'grammar') return q.type === 'grammar';
    return true;
  });

  const mcqQuestions = data.filter((q) => q.type === 'mcq');
  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = mcqQuestions.reduce((acc, q) => {
    if (selectedAnswers[q.id] === q.correctOptionIndex) return acc + 1;
    return acc;
  }, 0);

  const resetQuiz = () => {
    setSelectedAnswers({});
  };

  return (
    <div className="space-y-4 sm:space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 text-white rounded-2xl p-4 sm:p-6 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-right w-full" dir="rtl">
            <h2 className="text-2xl sm:text-3xl font-bold font-arabic amiri-bold mb-1">أسئلة وأجوبة من القصيدة</h2>
            <p className="text-blue-200 text-xs sm:text-sm font-medium" dir="ltr">
              {interfaceLang === 'ml'
                ? 'ചോദ്യോത്തരങ്ങളും വ്യാകരണ പരീക്ഷയും (Arabic Quiz & Questions)'
                : 'Poem Questions, Answers & Grammar Practice'}
            </p>
          </div>

          {/* Quiz Score Badge */}
          <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-center flex-shrink-0">
            <div className="flex items-center justify-center gap-1.5 text-yellow-300 font-bold mb-0.5 text-xs">
              <Award size={16} />
              <span className="font-arabic font-bold">اختبار متعدد الخيارات</span>
            </div>
            <div className="text-lg font-bold font-arabic amiri-bold">
              {correctCount} / {mcqQuestions.length} صحيح
            </div>
            <p className="text-[10px] text-blue-200">
              {answeredCount > 0 ? `Accuracy: ${Math.round((correctCount / answeredCount) * 100)}%` : 'ابدأ الإجابة الآن'}
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar pb-1">
        <div className="flex items-center gap-1.5">
          {[
            { id: 'all', labelMl: 'എല്ലാ ചോദ്യങ്ങളും', labelEn: 'All Questions' },
            { id: 'mcq', labelMl: 'MCQs (اختيارات)', labelEn: 'MCQs' },
            { id: 'descriptive', labelMl: 'تحليلي (Descriptive)', labelEn: 'Descriptive' },
            { id: 'grammar', labelMl: 'نحو وبلاغة (Grammar)', labelEn: 'Grammar' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                filterType === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              {interfaceLang === 'ml' ? tab.labelMl : tab.labelEn}
            </button>
          ))}
        </div>

        {answeredCount > 0 && (
          <button
            onClick={resetQuiz}
            className="px-3 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1"
          >
            <RotateCcw size={13} />
            <span>{interfaceLang === 'ml' ? 'വീണ്ടും' : 'Reset'}</span>
          </button>
        )}
      </div>

      {/* Questions List */}
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {filteredQuestions.map((q, idx) => {
          const isMcq = q.type === 'mcq';
          const selectedOpt = selectedAnswers[q.id];
          const hasAnswered = selectedOpt !== undefined;
          const isCorrect = isMcq && selectedOpt === q.correctOptionIndex;
          const isExpanded = expandedDescriptive[q.id];

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Question Type Tag */}
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-100 dark:border-slate-800 text-xs">
                  <span className="font-bold text-slate-400 font-arabic">
                    {interfaceLang === 'ml' ? `سؤال #${idx + 1}` : `Question #${idx + 1}`}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-md font-bold text-[11px] ${
                      isMcq
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                        : q.type === 'grammar'
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                    }`}
                  >
                    {interfaceLang === 'ml'
                      ? (isMcq ? 'اختر الإجابة' : q.type === 'grammar' ? 'نحو وبلاغة' : 'تحليلي')
                      : (isMcq ? 'MCQ Choice' : q.type === 'grammar' ? 'Grammar & Rhetoric' : 'Descriptive')}
                  </span>
                </div>

                {/* Question Arabic Text */}
                <h3 className="text-base sm:text-lg font-bold font-arabic amiri-bold text-slate-800 dark:text-slate-100 mb-1.5 leading-relaxed text-right" dir="rtl">
                  {q.qAr}
                </h3>
                {(q.qMl || q.qEn) && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 text-left font-medium" dir="ltr">
                    {interfaceLang === 'en' ? (q.qEn || q.qMl) : q.qMl}
                  </p>
                )}

                {/* MCQ Options Rendering */}
                {isMcq && q.options && (
                  <div className="space-y-2 my-3" dir="rtl">
                    {q.options.map((opt, oIdx) => {
                      const isOptionSelected = selectedOpt === oIdx;
                      const isOptionCorrect = oIdx === q.correctOptionIndex;
                      const optEn = q.optionsEn?.[oIdx];

                      let optStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';
                      if (hasAnswered) {
                        if (isOptionCorrect) {
                          optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold';
                        } else if (isOptionSelected) {
                          optStyle = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectOption(q.id, oIdx)}
                          className={`w-full p-2.5 rounded-xl border text-right transition-all flex items-center justify-between gap-2 ${optStyle}`}
                        >
                          <div className="flex flex-col text-right">
                            <span className="leading-relaxed font-arabic amiri-bold text-xs sm:text-sm">{opt}</span>
                            {interfaceLang === 'en' && optEn && (
                              <span className="text-[11px] font-sans font-normal text-slate-500 dark:text-slate-400 mt-0.5" dir="ltr">{optEn}</span>
                            )}
                          </div>
                          <span className="flex-shrink-0">
                            {hasAnswered && isOptionCorrect && <CheckCircle size={16} className="text-emerald-500" />}
                            {hasAnswered && isOptionSelected && !isOptionCorrect && <XCircle size={16} className="text-red-500" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* MCQ Feedback Explanation */}
                {hasAnswered && isMcq && (q.explanationAr || q.explanationEn) && (
                  <div className="mt-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/40 text-xs text-right" dir="rtl">
                    <span className="font-bold text-blue-700 dark:text-blue-300 block mb-0.5 font-arabic">
                      {interfaceLang === 'ml' ? 'التوضيح:' : 'Explanation:'}
                    </span>
                    <p className="font-arabic amiri-regular leading-relaxed text-slate-700 dark:text-slate-300 mb-1">{q.explanationAr}</p>
                    {interfaceLang === 'en' && q.explanationEn && (
                      <p className="text-xs font-sans text-slate-600 dark:text-slate-300 leading-relaxed text-left border-t border-blue-200/40 dark:border-blue-800/40 pt-1.5 mt-1" dir="ltr">{q.explanationEn}</p>
                    )}
                  </div>
                )}

                {/* Descriptive / Grammar Answer Expandable Box */}
                {!isMcq && (
                  <div className="mt-3">
                    <button
                      onClick={() => toggleDescriptiveAnswer(q.id)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center justify-between transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <BookOpen size={13} className="text-blue-500" />
                        <span>{isExpanded ? (interfaceLang === 'ml' ? 'ഇജ്ജാബ മറയ്ക്കുക' : 'Hide Answer') : (interfaceLang === 'ml' ? 'ഇജ്ജാബ കാണുക (Show Answer)' : 'Show Answer')}</span>
                      </span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {isExpanded && (
                      <div className="mt-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 animate-in fade-in duration-150">
                        <div className="text-right" dir="rtl">
                          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block mb-0.5 font-arabic">الإجابة النموذجية (Arabic Answer):</span>
                          <p className="font-arabic amiri-regular text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-100 whitespace-pre-line">
                            {q.answerAr}
                          </p>
                        </div>
                        {(q.answerMl || q.answerEn) && (
                          <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed text-left" dir="ltr">
                            <span className="font-bold text-slate-500 mr-1">{interfaceLang === 'ml' ? 'അർത്ഥം:' : 'Meaning:'}</span>
                            {interfaceLang === 'en' ? (q.answerEn || q.answerMl) : q.answerMl}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
