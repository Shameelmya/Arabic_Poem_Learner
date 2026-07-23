export interface WordData {
  ar: string;        // Arabic word
  ml: string;        // Malayalam meaning
  en: string;        // English meaning
  irab: string;      // Arabic I'rab (grammar breakdown)
  root?: string;     // Root word (e.g., ق و م)
}

export interface PoemLine {
  id: number;
  ar: string;         // Full verse / hemistich Arabic text
  words: WordData[];  // Individual word breakdowns
  noteMl?: string;    // Poetic / grammatical / contextual notes in Malayalam
  noteEn?: string;    // Poetic / grammatical / contextual notes in English
}

export interface CoupletSummary {
  id: number;         // Couplet index (0 = lines 0 & 1, 1 = lines 2 & 3, etc.)
  lineIndices: [number, number]; // e.g. [0, 1]
  mlMeaning: string;  // Exact Malayalam meaning of these two lines
  enMeaning?: string; // Exact English meaning of these two lines
  arSharah: string;   // Exact Arabic Sharah of these two lines
  newWords?: { ar: string; ml: string; en: string }[];
  noteMl?: string;    // Extra poetic or grammatical notes for the couplet
  noteEn?: string;
}

export interface SectionSummary {
  id: number;
  titleMl: string;
  titleEn?: string;
  titleAr: string;
  startLine: number;
  endLine: number;
  mlSummary: string;
  enSummary?: string;
  arSummary: string;
}

export interface QuestionItem {
  id: number;
  qAr: string;
  qMl?: string;
  qEn?: string;
  type: 'mcq' | 'descriptive' | 'grammar';
  options?: string[];
  optionsEn?: string[];
  correctOptionIndex?: number;
  answerAr: string;
  answerMl?: string;
  answerEn?: string;
  explanationAr?: string;
  explanationMl?: string;
  explanationEn?: string;
  category?: string;
}

export interface GlossaryItem {
  id: number;
  wordAr: string;
  rootAr: string;
  meaningMl: string;
  meaningEn: string;
  typeAr: string; // اسم, فعل, حرف, تركيب
  exampleLineNumber?: number;
}

export interface BalaghaItem {
  id: number;
  titleMl: string;
  titleEn?: string;
  titleAr: string;
  category: 'استعارة' | 'تشبيه' | 'طباق' | 'استفهام' | 'اقتباس' | 'أسلوب';
  exampleAr: string;
  explanationMl: string;
  explanationEn?: string;
  explanationAr: string;
  lineNumber?: number;
}

export interface Poem {
  id: string;
  titleAr: string;
  titleMl: string;
  titleEn?: string;
  poetAr: string;
  poetMl: string;
  meter?: string;
  totalLines: number;
  lines: PoemLine[];
  couplets: CoupletSummary[];
  sections?: SectionSummary[];
}

export interface PoemBundle {
  poem: Poem;
  questions: QuestionItem[];
  glossary: GlossaryItem[];
  balagha: BalaghaItem[];
  essay: EssayData;
  poet: PoetData;
}

export interface PoetData {
  nameAr: string;
  nameMl: string;
  nameEn: string;
  bioAr: string;
  bioMl: string;
  bioEn: string;
  facts: {
    titleAr: string;
    descAr: string;
    titleMl: string;
    descMl: string;
    titleEn: string;
    descEn: string;
  }[];
  worksAr: string[];
  worksMl: string[];
  worksEn: string[];
}

export interface EssayData {
  arTitle: string;
  mlTitle: string;
  enTitle: string;
  arEssay: string;
  mlEssay: string;
  enEssay: string;
}
