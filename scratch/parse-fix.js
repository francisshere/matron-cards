const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', 'md-files', 'test-set-fix.md');
const content = fs.readFileSync(mdPath, 'utf8');

// Extract QUESTIONS JSON
const qMatch = content.match(/QUESTIONS:\s*```json\s*(\{.*?\})\s*```/s);
const aMatch = content.match(/ANSWERS & RATIONALES:\s*```json\s*(\{.*?\})\s*```/s);

if (!qMatch || !aMatch) {
  console.error("Failed to find JSON blocks in the markdown file.");
  process.exit(1);
}

const questionsData = JSON.parse(qMatch[1]);
const answersData = JSON.parse(aMatch[1]).nursing_practice_quiz;

const finalData = [];

for (let i = 0; i < questionsData.questions.length; i++) {
  const q = questionsData.questions[i];
  const a = answersData.find(ans => ans.number === q.number);

  // Extract correct letter from answersData.answer like "(D) The actions..."
  let correctLetterMatch = a.answer.match(/\(([A-D])\)/);
  let correctLetter = correctLetterMatch ? correctLetterMatch[1] : "";

  if (!correctLetter) {
    // fallback if missing
    console.warn(`Could not extract letter for question ${q.number}.`);
  }

  const optionsMapped = q.options.map((optText, index) => {
    const letters = ['A', 'B', 'C', 'D'];
    return {
      id: letters[index],
      text: optText
    };
  });

  finalData.push({
    id: q.number,
    course: "PNLE",
    topic: questionsData.quiz_title,
    question_stem: q.question,
    options: optionsMapped,
    correct_option: correctLetter,
    rationale: a.rationale
  });
}

const outputPath = path.join(__dirname, '..', 'frontend', 'src', 'data', 'questions.json');
fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));

console.log(`Successfully combined ${finalData.length} questions.`);
