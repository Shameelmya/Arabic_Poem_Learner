const fs = require('fs');
const path = require('path');

const components = [
  { file: 'BalaghaView.tsx', dataName: 'balaghaData', type: 'BalaghaItem[]' },
  { file: 'EssayView.tsx', dataName: 'essayData', type: 'EssaySection[]' },
  { file: 'GlossaryView.tsx', dataName: 'glossaryData', type: 'GlossaryItem[]' },
  { file: 'PoetView.tsx', dataName: 'poetData', type: 'PoetData' },
  { file: 'QuestionsView.tsx', dataName: 'questionsData', type: 'QuestionItem[]' }
];

components.forEach(comp => {
  const filePath = path.join('src/components', comp.file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove import
  content = content.replace(new RegExp(`import { ${comp.dataName} } from '\\.\\.\\/data\\/${comp.dataName}';\\r?\\n?`), '');
  
  // Add import for type
  if (comp.type === 'PoetData') {
    if (!content.includes('PoetData')) {
      content = content.replace('import React', `import React from 'react';\nimport { PoetData } from '../types';`);
      content = content.replace(`import React from 'react';\nimport React`, `import React`);
    }
  } else {
    const typeName = comp.type.replace('[]', '');
    if (!content.includes(typeName)) {
      content = content.replace(/import {([^}]+)} from '\.\.\/types';/, (match, p1) => {
        return `import {${p1}, ${typeName}} from '../types';`;
      });
    }
  }

  // Find interface Props and add data
  content = content.replace(/interface Props \{/, `interface Props {\n  data: ${comp.type};`);
  
  // Change component signature from ({ interfaceLang }) to ({ data, interfaceLang })
  content = content.replace(/\(\{ interfaceLang,?\s*\}\)/, `({ data, interfaceLang })`);
  content = content.replace(/\(\{ interfaceLang \}: Props\)/, `({ data, interfaceLang }: Props)`);
  
  // Replace the dataName usage with data
  content = content.replace(new RegExp(`\\b${comp.dataName}\\b`, 'g'), 'data');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${comp.file}`);
});

// Update App.tsx
let appContent = fs.readFileSync('src/App.tsx', 'utf8');
appContent = appContent.replace(/import { poemData } from '\.\/data\/poemData';/, `import { getPoemBundle } from './data/registry';`);
appContent = appContent.replace(/export default function App\(\) \{/, `export default function App() {\n  const bundle = getPoemBundle(selectedPoemId);\n  const poemData = bundle.poem;`);
// Wait, `selectedPoemId` is defined AFTER `export default function App() {`!
// Let's replace just inside the component body, after state declarations.
appContent = appContent.replace(/const \[selectedPoemId, setSelectedPoemId\] = useState<string>\('qum-lil-muallimi'\);/, `const [selectedPoemId, setSelectedPoemId] = useState<string>('qum-lil-muallimi');\n\n  const bundle = getPoemBundle(selectedPoemId);\n  const poemData = bundle.poem;`);

// Pass data props to views
appContent = appContent.replace(/<QuestionsView interfaceLang=\{interfaceLang\} \/>/, `<QuestionsView data={bundle.questions} interfaceLang={interfaceLang} />`);
appContent = appContent.replace(/<PoetView interfaceLang=\{interfaceLang\} \/>/, `<PoetView data={bundle.poet} interfaceLang={interfaceLang} />`);
appContent = appContent.replace(/<BalaghaView interfaceLang=\{interfaceLang\} \/>/, `<BalaghaView data={bundle.balagha} interfaceLang={interfaceLang} />`);
appContent = appContent.replace(/<GlossaryView interfaceLang=\{interfaceLang\} \/>/, `<GlossaryView data={bundle.glossary} interfaceLang={interfaceLang} />`);
appContent = appContent.replace(/<EssayView interfaceLang=\{interfaceLang\} \/>/, `<EssayView data={bundle.essay} interfaceLang={interfaceLang} />`);

fs.writeFileSync('src/App.tsx', appContent);
console.log('Updated App.tsx');
