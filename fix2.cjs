const fs = require('fs');

// 1. Fix PoetView.tsx useState comma issue
let poet = fs.readFileSync('src/components/PoetView.tsx', 'utf8');
poet = poet.replace(/import { PoetData } from '\.\.\/types';, { useState } from 'react';/, "import { PoetData } from '../types';\nimport React, { useState } from 'react';");
// Also fix Props -> PoetViewProps
poet = poet.replace(/React\.FC<Props>/, "React.FC<PoetViewProps>");
fs.writeFileSync('src/components/PoetView.tsx', poet);

// 2. Fix other views Props
const comps = [
  {file: 'BalaghaView.tsx', propsName: 'BalaghaViewProps'},
  {file: 'EssayView.tsx', propsName: 'EssayViewProps'},
  {file: 'GlossaryView.tsx', propsName: 'GlossaryViewProps'},
  {file: 'QuestionsView.tsx', propsName: 'QuestionsViewProps'}
];
comps.forEach(c => {
  let content = fs.readFileSync('src/components/' + c.file, 'utf8');
  content = content.replace(/React\.FC<Props>/, `React.FC<${c.propsName}>`);
  fs.writeFileSync('src/components/' + c.file, content);
});

// 3. Fix registry.ts EssaySection error
// `essayData` is currently just `{ arTitle: string, ... }` but `EssaySection[]` implies an array.
// The types should be `essay: EssayData` not `essay: EssaySection[]`.
let types = fs.readFileSync('src/types.ts', 'utf8');
types = types.replace(/essay: EssaySection\[\];/, "essay: EssayData;");
types = types.replace(/export interface EssaySection {/g, "export interface EssayData {");
fs.writeFileSync('src/types.ts', types);

let registry = fs.readFileSync('src/data/registry.ts', 'utf8');
// registry.ts is fine, it imports essayData and puts it into the bundle
