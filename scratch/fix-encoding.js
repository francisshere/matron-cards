const fs = require('fs');
const path = require('path');

const qPath = path.join(__dirname, '..', 'frontend', 'src', 'data', 'questions.json');
let content = fs.readFileSync(qPath, 'utf8');

content = content.replace(/\?T/g, "’");
content = content.replace(/\?/g, "'"); // Just in case
content = content.replace(/â€™/g, "’");
content = content.replace(/â€œ/g, "“");
content = content.replace(/â€\u009d/g, "”");
content = content.replace(/â€\"/g, "—");

fs.writeFileSync(qPath, content, 'utf8');
console.log("Encoding fixed.");
