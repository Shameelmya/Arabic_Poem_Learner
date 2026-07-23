const fs = require('fs');
const path = require('path');

// 1. Fix types.ts
let types = fs.readFileSync('src/types.ts', 'utf8');
if (!types.includes('badgeAr: string;')) {
  types = types.replace(/nameEn: string;/, "nameEn: string;\n  badgeAr: string;\n  badgeMl: string;\n  badgeEn: string;\n  dates: string;\n  location: string;");
  fs.writeFileSync('src/types.ts', types);
}

// 2. Fix qum-lil-muallimi poetData
let qlmPoet = fs.readFileSync('src/data/qum-lil-muallimi/poetData.ts', 'utf8');
if (!qlmPoet.includes('badgeAr:')) {
  qlmPoet = qlmPoet.replace(/nameEn: "Ahmed Shawqi",/, "nameEn: \"Ahmed Shawqi\",\n  badgeAr: \"أمير الشعراء\",\n  badgeMl: \"കവികളുടെ രാജാവ്\",\n  badgeEn: \"Prince of Poets\",\n  dates: \"1868 - 1932 م\",\n  location: \"القاهرة، مصر (Cairo, Egypt)\",");
  fs.writeFileSync('src/data/qum-lil-muallimi/poetData.ts', qlmPoet);
}

// 3. Fix shafiee-da-al-ayyam poetData
let shafPoet = fs.readFileSync('src/data/shafiee-da-al-ayyam/poetData.ts', 'utf8');
if (!shafPoet.includes('badgeAr:')) {
  shafPoet = shafPoet.replace(/nameEn: "Imam Al-Shafi'i",/, "nameEn: \"Imam Al-Shafi'i\",\n  badgeAr: \"الإمام المطلبي\",\n  badgeMl: \"കർമ്മശാസ്ത്ര പണ്ഡിതൻ\",\n  badgeEn: \"Imam of Fiqh\",\n  dates: \"150 - 204 هـ\",\n  location: \"غزة، فلسطين (Gaza, Palestine)\",");
  fs.writeFileSync('src/data/shafiee-da-al-ayyam/poetData.ts', shafPoet);
}

// 4. Fix PoetView.tsx
let poetView = fs.readFileSync('src/components/PoetView.tsx', 'utf8');
poetView = poetView.replace(/<span className="font-arabic amiri-bold">أمير الشعراء \(\{interfaceLang === 'ml' \? 'കവികളുടെ രാജാവ്' : 'Prince of Poets'\}\)<\/span>/, "<span className=\"font-arabic amiri-bold\">{data.badgeAr} ({interfaceLang === 'ml' ? data.badgeMl : data.badgeEn})</span>");
poetView = poetView.replace(/<span>1868 - 1932 م<\/span>/, "<span>{data.dates}</span>");
poetView = poetView.replace(/<span>القاهرة، مصر \(Cairo, Egypt\)<\/span>/, "<span>{data.location}</span>");
poetView = poetView.replace(/السيرة الذاتية المفصلة لأحمد شوقي:/g, "السيرة الذاتية المفصلة للشاعر:");
poetView = poetView.replace(/കവിയുടെ വിശദമായ ജീവചരിത്രം:/g, "കവിയുടെ വിശദമായ ജീവചരിത്രം:");
poetView = poetView.replace(/Detailed Biography of Ahmed Shawqi:/g, "Detailed Biography of the Poet:");
poetView = poetView.replace(/അഹമ്മദ് ഷൗഖിയുടെ ജീവിതത്തിലെ നാഴികക്കല്ലുകൾ:/g, "കവിയുടെ ജീവിതത്തിലെ നാഴികക്കല്ലുകൾ:");
poetView = poetView.replace(/Key Biographical Milestones of Ahmed Shawqi:/g, "Key Biographical Milestones of the Poet:");
fs.writeFileSync('src/components/PoetView.tsx', poetView);

// 5. Fix shafiee poemData.ts line numbering and notes
let poem = fs.readFileSync('src/data/shafiee-da-al-ayyam/poemData.ts', 'utf8');
// Fix id: 0 to id: 1, etc.
// Since lines are sequential, we can just replace the id for lines in `lines` array.
// But it's safer to just iterate using regex if we know what we are replacing, or AST. 
// A simpler hack: the subagent started lines at id: 0. 
// Let's replace `id: 0,` with `id: 1,`, etc. up to 25 to 26.
for (let i = 25; i >= 0; i--) {
  poem = poem.replace(new RegExp(`id: ${i},\\s*text:`, 'g'), `id: ${i + 1},\n      text:`);
}
// Remove `notes: [ ... ]`
poem = poem.replace(/notes:\s*\[[\s\S]*?\],/g, '');
fs.writeFileSync('src/data/shafiee-da-al-ayyam/poemData.ts', poem);

console.log('UI and numbering fixed!');
