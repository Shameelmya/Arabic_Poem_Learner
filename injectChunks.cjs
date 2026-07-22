const fs = require('fs');

const poemPath = 'src/data/poemData.ts';
let poem = fs.readFileSync(poemPath, 'utf8');

const extractStringArray = (file) => {
  let str = fs.readFileSync(file, 'utf8');
  str = str.replace(/export const [a-zA-Z0-9_]+ = /s, '');
  if (str.endsWith(';')) str = str.slice(0, -1);
  if (str.endsWith(';\r\n')) str = str.slice(0, -3);
  if (str.endsWith(';\n')) str = str.slice(0, -2);
  return str;
};

function getBlocks(str, start, end) {
  const blocks = {};
  for (let i = start; i <= end; i++) {
    const startStr = `// ${i}\n`;
    let nextStr = `// ${i + 1}\n`;
    if (i === 60 || i === 92 || i === 132) nextStr = `]`;
    
    let startIndex = str.indexOf(startStr);
    if (startIndex === -1) {
      startIndex = str.indexOf(`// ${i}\r\n`);
      nextStr = `// ${i + 1}\r\n`;
      if (i === 60 || i === 92 || i === 132) nextStr = `]`;
    }
    
    if (startIndex !== -1) {
      let endIndex = str.indexOf(nextStr, startIndex + startStr.length);
      if (endIndex !== -1) {
        let block = str.substring(startIndex, endIndex).trim();
        if (block.endsWith(',')) block = block.slice(0, -1);
        blocks[i] = block;
      }
    }
  }
  return blocks;
}

const str1 = fs.readFileSync('artifacts/chunk_46_60.ts', 'utf8');
const str2 = fs.readFileSync('artifacts/chunk_61_92.ts', 'utf8');
const str3 = fs.readFileSync('artifacts/chunk_93_132.ts', 'utf8');

const blocks1 = getBlocks(str1, 46, 60);
const blocks2 = getBlocks(str2, 61, 92);
const blocks3 = getBlocks(str3, 93, 132);
const allBlocks = { ...blocks1, ...blocks2, ...blocks3 };

// Now replace in poem
for (let i = 46; i <= 132; i++) {
  if (!allBlocks[i]) continue;
  const startStr1 = `  // ${i}\n`;
  const startStr2 = `  // ${i}\r\n`;
  let startIndex = poem.indexOf(startStr1);
  let usingR = false;
  if (startIndex === -1) {
    startIndex = poem.indexOf(startStr2);
    usingR = true;
  }
  
  if (startIndex !== -1) {
    const nextStr1 = `  // ${i + 1}\n`;
    const nextStr2 = `  // ${i + 1}\r\n`;
    let endIndex = poem.indexOf(nextStr1, startIndex + 5);
    if (endIndex === -1) endIndex = poem.indexOf(nextStr2, startIndex + 5);
    
    if (endIndex !== -1) {
      // carefully rebuild the block so it matches the indentation
      let lines = allBlocks[i].split('\n');
      lines.shift(); // remove // N
      lines = lines.map(l => '  ' + l); // add 2 spaces
      
      const constructedBlock = (usingR ? `  // ${i}\r\n` : `  // ${i}\n`) + lines.join('\n') + ',\n';
      
      poem = poem.substring(0, startIndex) + constructedBlock + poem.substring(endIndex);
    }
  }
}

fs.writeFileSync(poemPath, poem);
console.log('Poem patched successfully up to 132!');
