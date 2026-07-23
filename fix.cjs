const fs = require('fs');

const files = fs.readdirSync('src/data/qum-lil-muallimi').filter(f => f.endsWith('.ts'));
files.forEach(f => {
  const path = 'src/data/qum-lil-muallimi/' + f;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/from '\.\.\/types'/g, "from '../../types'");
  
  // also export interfaces to types.ts
  if (f === 'poetData.ts') {
    content = content.replace('export interface PoetData {', 'interface PoetDataLocal {');
  }
  if (f === 'essayData.ts') {
    content = content.replace('export interface EssayData {', 'interface EssayDataLocal {');
  }
  fs.writeFileSync(path, content);
});

// App.tsx fixes
let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(/const bundle = getPoemBundle\(selectedPoemId\);\s+const poemData = bundle\.poem;/g, '');
app = app.replace(/const \[selectedPoemId, setSelectedPoemId\] = useState<string>\('qum-lil-muallimi'\);/, "const [selectedPoemId, setSelectedPoemId] = useState<string>('qum-lil-muallimi');\n  const bundle = getPoemBundle(selectedPoemId);\n  const poemData = bundle.poem;");
fs.writeFileSync('src/App.tsx', app);

// Types.ts fixes
let types = fs.readFileSync('src/types.ts', 'utf8');
const extraTypes = `
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

export interface EssaySection {
  arTitle: string;
  mlTitle: string;
  enTitle: string;
  arEssay: string;
  mlEssay: string;
  enEssay: string;
}
`;
if (!types.includes('export interface PoetData')) {
  types = types + extraTypes;
  fs.writeFileSync('src/types.ts', types);
}

const comps = ['BalaghaView.tsx', 'EssayView.tsx', 'GlossaryView.tsx', 'PoetView.tsx', 'QuestionsView.tsx'];
comps.forEach(f => {
  let c = fs.readFileSync('src/components/' + f, 'utf8');
  // Fix the destructing signature
  c = c.replace(/=>\s*{\s*const \[/g, "=> {\n  const [");
  c = c.replace(/\(\{\s*interfaceLang[^\}]*\}\)/g, "({ data, interfaceLang })");
  c = c.replace(/const (\w+)View: React\.FC<[^>]+>\s*=\s*\(\{\s*data,\s*interfaceLang\s*\}\)/g, "const $1View: React.FC<Props> = ({ data, interfaceLang })");
  fs.writeFileSync('src/components/' + f, c);
});
