import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PoemView } from './components/PoemView';
import { QuestionsView } from './components/QuestionsView';
import { PoetView } from './components/PoetView';
import { BalaghaView } from './components/BalaghaView';
import { GlossaryView } from './components/GlossaryView';
import { EssayView } from './components/EssayView';
import { PoemSelectorModal } from './components/PoemSelectorModal';
import { HomeView } from './components/HomeView';
import { getPoemBundle } from './data/registry';

export default function App() {
  
  const [currentView, setCurrentView] = useState<'home' | 'study'>('home');
  const [activeTab, setActiveTab] = useState<string>('poem');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [interfaceLang, setInterfaceLang] = useState<'ml' | 'en'>('ml');
  const [isIrabMode, setIsIrabMode] = useState<boolean>(false);
  const [isHideMeaning, setIsHideMeaning] = useState<boolean>(false);
  const [isPoemModalOpen, setIsPoemModalOpen] = useState<boolean>(false);
  const [selectedPoemId, setSelectedPoemId] = useState<string>('shafiee-da-al-ayyam');
  const bundle = getPoemBundle(selectedPoemId);
  const poemData = bundle.poem;

  

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Handle Hash-based Routing for Back Button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'study') {
        setCurrentView('study');
        setIsPoemModalOpen(false);
      } else if (hash === 'chapters') {
        // If we are currently in study view and open modal, we keep study view in background
        setIsPoemModalOpen(true);
      } else {
        setCurrentView('home');
        setIsPoemModalOpen(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectPoem = (id: string) => {
    setSelectedPoemId(id);
    window.location.hash = 'study';
  };

  return (
    <div className={`min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-blue-500 selection:text-white ${interfaceLang === 'ml' ? 'font-malayalam' : 'font-english'}`}>
      
      {currentView === 'home' ? (
        <HomeView onSeeChapters={() => { window.location.hash = 'chapters'; }} />
      ) : (
        <>
          {/* macOS Header Navigation */}
          <Header
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            interfaceLang={interfaceLang}
            setInterfaceLang={setInterfaceLang}
            isIrabMode={isIrabMode}
            setIsIrabMode={setIsIrabMode}
            isHideMeaning={isHideMeaning}
            setIsHideMeaning={setIsHideMeaning}
            selectedPoemTitle={poemData.titleAr}
            onOpenPoemModal={() => { window.location.hash = 'chapters'; }}
            onGoHome={() => { window.location.hash = ''; }}
          />

          {/* Main Content Viewport */}
          <main className="max-w-6xl mx-auto px-3 sm:px-4 pt-6 sm:pt-10 md:pt-12">
            {activeTab === 'poem' && (
              <PoemView
                poem={poemData}
                interfaceLang={interfaceLang}
                isIrabMode={isIrabMode}
                isHideMeaning={isHideMeaning}
              />
            )}
            {activeTab === 'qa' && <QuestionsView data={bundle.questions} interfaceLang={interfaceLang} />}
            {activeTab === 'poet' && <PoetView data={bundle.poet} interfaceLang={interfaceLang} />}
            {activeTab === 'balagha' && <BalaghaView data={bundle.balagha} interfaceLang={interfaceLang} />}
            {activeTab === 'glossary' && <GlossaryView data={bundle.glossary} interfaceLang={interfaceLang} />}
            {activeTab === 'essay' && <EssayView data={bundle.essay} interfaceLang={interfaceLang} />}
          </main>

          {/* Footer */}
          <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm pt-6 pb-24 sm:pb-6 text-center text-xs text-slate-500 dark:text-slate-400 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  الألوان - Arabic Study Aid For Students
                </span>
              </div>
              <p className="font-arabic amiri-bold text-sm" dir="rtl">
                دَعِ الأَيَّامَ تَفْعَل مَا تَشَاءُ وَطِب نَفْساً إِذَا حَكَمَ القَضَاءُ
              </p>
            </div>
          </footer>
        </>
      )}

      {/* Poem Selector Modal */}
      <PoemSelectorModal
        isOpen={isPoemModalOpen}
        onClose={() => {
          if (window.history.length > 1) {
            window.history.back();
          } else {
            window.location.hash = currentView === 'study' ? 'study' : '';
          }
        }}
        currentPoemId={selectedPoemId}
        onSelectPoem={handleSelectPoem}
      />
    </div>
  );
}
