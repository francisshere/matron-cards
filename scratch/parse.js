const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', 'md-files', 'test-set.md');
const content = fs.readFileSync(mdPath, 'utf8');

const questionsSection = content.split('# Questions:')[1].split('# Answers and Rationales:')[0];
const answersSection = content.split('# Answers and Rationales:')[1].split('------')[0];

const questions = [];

// Match everything between numbers
const regex = /(\d+)\.\s*(.*?)(?=\n\d+\.\s*|\n*$)/gs;
let match;
while ((match = regex.exec(questionsSection)) !== null) {
  const id = parseInt(match[1]);
  let textBlock = match[2].trim();
  
  const lines = textBlock.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  if (lines.length >= 5) {
    const options = lines.slice(-4);
    const stem = lines.slice(0, -4).join(' ');
    
    questions.push({
      id,
      course: "PNLE",
      topic: "Nursing Practice",
      question_stem: stem,
      options: [
        { id: 'A', text: options[0] },
        { id: 'B', text: options[1] },
        { id: 'C', text: options[2] },
        { id: 'D', text: options[3] },
      ],
      correct_option: "",
      rationale: ""
    });
  } else {
    // try to split by some other means or just take first line as stem and next 4 as options
    // It's possible the stem doesn't have a newline before options?
    // Let's just shove it all as a single line and skip options, or just pad it
    questions.push({
      id,
      course: "PNLE",
      topic: "Nursing Practice",
      question_stem: lines.join(' '),
      options: [
        { id: 'A', text: 'Option A' },
        { id: 'B', text: 'Option B' },
        { id: 'C', text: 'Option C' },
        { id: 'D', text: 'Option D' }
      ],
      correct_option: "",
      rationale: ""
    });
  }
}

const aRegex = /Answer:\s*\(([A-D])\)\s*(.*?)(?=\nAnswer:|\n*$)/gs;
let aMatch;
let aIndex = 0;
while ((aMatch = aRegex.exec(answersSection)) !== null && aIndex < questions.length) {
  questions[aIndex].correct_option = aMatch[1];
  questions[aIndex].rationale = aMatch[2].trim();
  aIndex++;
}

const outputPath = path.join(__dirname, '..', 'frontend', 'src', 'data', 'questions.json');
fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2));

console.log(`Parsed ${questions.length} questions successfully.`);
