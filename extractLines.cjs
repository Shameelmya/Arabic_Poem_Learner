const fs = require('fs');
const lines = fs.readFileSync('src/data/poemData.ts', 'utf8').split('\n');
let currentIndex = -1;
for (let i = 0; i < lines.length; i++) {
  const match = lines[i].match(/\/\/ (\d+)/);
  if (match) { currentIndex = parseInt(match[1]); }
  if (lines[i].includes('ar: "') && currentIndex >= 93 && currentIndex <= 132) {
    const arText = lines[i].split('ar: "')[1].split('"')[0];
    console.log(currentIndex + ': ' + arText);
  }
}
