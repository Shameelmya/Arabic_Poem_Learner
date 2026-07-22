import React from 'react';
import { BookOpen, Check, X } from 'lucide-react';

interface PoemSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPoemId: string;
  onSelectPoem: (poemId: string) => void;
}

export const PoemSelectorModal: React.FC<PoemSelectorModalProps> = ({
  isOpen,
  onClose,
  currentPoemId,
  onSelectPoem,
}) => {
  if (!isOpen) return null;

  const availablePoems = [
    {
      id: 'qum-lil-muallimi',
      titleAr: 'قُم لِلمُعَلِّمِ وَفِّهِ التَبجيلا',
      titleMl: 'ഖും ലിൽ മുഅല്ലിമി വഫ്ഫിഹി തബ്ജീലാ',
      poetAr: 'أحمد شوقي',
      poetMl: 'അഹമ്മദ് ഷൗഖി',
      versesCount: 132,
      status: 'active',
      badge: 'പ്രധാന കവിത (Active)'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white">الفصول (Chapters)</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Select a chapter to start learning</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Poem Boxes Grid */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          <div className="grid gap-4 sm:grid-cols-2">
            {availablePoems.map((p) => {
              const isSelected = currentPoemId === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => {
                    if (p.status === 'active') {
                      onSelectPoem(p.id);
                    }
                  }}
                  className={`relative p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 shadow-md ring-2 ring-blue-500/30'
                      : 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/60'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      isSelected 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}>
                      {p.badge}
                    </span>
                    {isSelected && (
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        <Check size={14} />
                      </span>
                    )}
                  </div>

                  <h4 className="font-arabic font-bold text-2xl text-slate-800 dark:text-white mb-1 leading-relaxed" dir="rtl">
                    {p.titleAr}
                  </h4>
                  <p className="font-semibold text-xs text-blue-600 dark:text-blue-400 mb-2">{p.titleMl}</p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                    <span className="font-arabic" dir="rtl">{p.poetAr}</span>
                    <span>{p.versesCount} വരികൾ</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
