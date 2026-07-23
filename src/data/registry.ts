import { PoemBundle } from '../types';

import { poemData as qlm_poem } from './qum-lil-muallimi/poemData';
import { questionsData as qlm_questions } from './qum-lil-muallimi/questionsData';
import { glossaryData as qlm_glossary } from './qum-lil-muallimi/glossaryData';
import { balaghaData as qlm_balagha } from './qum-lil-muallimi/balaghaData';
import { essayData as qlm_essay } from './qum-lil-muallimi/essayData';
import { poetData as qlm_poet } from './qum-lil-muallimi/poetData';

import { poemData as shaf_poem } from './shafiee-da-al-ayyam/poemData';
import { questionsData as shaf_questions } from './shafiee-da-al-ayyam/questionsData';
import { glossaryData as shaf_glossary } from './shafiee-da-al-ayyam/glossaryData';
import { balaghaData as shaf_balagha } from './shafiee-da-al-ayyam/balaghaData';
import { essayData as shaf_essay } from './shafiee-da-al-ayyam/essayData';
import { poetData as shaf_poet } from './shafiee-da-al-ayyam/poetData';

export const poemsRegistry: Record<string, PoemBundle> = {
  'qum-lil-muallimi': {
    poem: qlm_poem,
    questions: qlm_questions,
    glossary: qlm_glossary,
    balagha: qlm_balagha,
    essay: qlm_essay,
    poet: qlm_poet,
  },
  'shafiee-da-al-ayyam': {
    poem: shaf_poem,
    questions: shaf_questions,
    glossary: shaf_glossary,
    balagha: shaf_balagha,
    essay: shaf_essay,
    poet: shaf_poet,
  }
};

export const getPoemBundle = (id: string): PoemBundle => {
  return poemsRegistry[id] || poemsRegistry['qum-lil-muallimi'];
};
