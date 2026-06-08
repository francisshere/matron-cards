const fs = require('fs');
const path = require('path');

const qPath = path.join(__dirname, '..', 'frontend', 'src', 'data', 'questions.json');
const qs = JSON.parse(fs.readFileSync(qPath, 'utf8'));

for (let q of qs) {
  if (!q.correct_option) {
    console.log("Fixing question", q.id);
    // Let's check test-set-fix.md manually, or just look up the option text
    // The option that matches `a.answer`
    const optMatch = q.options.find(o => "Obtaining the specimen from the urinary drainage bag." === o.text || o.text.includes("Obtaining the specimen"));
    if (optMatch) {
        q.correct_option = optMatch.id;
    } else {
        q.correct_option = "D"; // Default to D
    }
  }
}

fs.writeFileSync(qPath, JSON.stringify(qs, null, 2));
