const fs = require('fs');
const path = require('path');

const mdDir = path.join('C:', 'Users', 'PLPASIG', 'Desktop', 'PersonalProjs', 'matron', 'md-files', 'questions-sets', 'set-i');
const frontendDataDir = path.join('C:', 'Users', 'PLPASIG', 'Desktop', 'PersonalProjs', 'matron', 'frontend', 'src', 'data');
const questionsFile = path.join(frontendDataDir, 'questions.json');

const mdFiles = ['set1-pnle-iii.md', 'set1-pnle-iv.md', 'set1-pnle-v.md'];

let existingQuestions = [];
if (fs.existsSync(questionsFile)) {
  existingQuestions = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));
}

let currentId = existingQuestions.length > 0 ? Math.max(...existingQuestions.map(q => q.id)) + 1 : 1;

mdFiles.forEach(file => {
  const filePath = path.join(mdDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract title and subtitle from line 7
  const lines = content.split('\n');
  const line7 = lines[6]; // 0-indexed
  // Example: # Set 1 - Philippine Nursing Licensure Exam III // Care of Clients with Physiologic and Psychosocial Alterations (Part 1)
  const match = line7.match(/# (Set \d+) - (.*?) \/\/ (.*)/);
  if (!match) {
    console.error('Could not match line 7 format in', file);
    return;
  }
  const [, setStr, titleStr, subtitleStr] = match;

  const topicStr = `PNLE ${subtitleStr.trim()}`;

  // Extract JSON blocks
  // Find Questions block
  const questionsMatch = content.match(/Questions:\s*```json\s*([\s\S]*?)\s*```/);
  // Find Answers block
  const answersMatch = content.match(/Answers and Rationale:\s*```json\s*([\s\S]*?)\s*```/g);

  if (!questionsMatch || !answersMatch) {
    console.error('Could not find JSON blocks in', file);
    return;
  }

  const questionsData = JSON.parse(questionsMatch[1]);
  
  // Combine all answers if multiple blocks exist
  let allAnswers = [];
  answersMatch.forEach(block => {
    const blockMatch = block.match(/```json\s*([\s\S]*?)\s*```/);
    if (blockMatch) {
      const parsed = JSON.parse(blockMatch[1]);
      if (parsed.nursing_practice_answers) {
        allAnswers = allAnswers.concat(parsed.nursing_practice_answers);
      }
    }
  });

  // Remove duplicates based on number (keep the latter one in case it's a correction)
  const answersMap = {};
  allAnswers.forEach(a => {
    answersMap[a.number] = a;
  });

  questionsData.questions.forEach(q => {
    const answerData = answersMap[q.number];
    if (!answerData) {
      console.warn(`No answer found for question ${q.number} in ${file}`);
      return;
    }

    // Parse options
    const options = q.options.map((optText, index) => {
      const id = String.fromCharCode(65 + index); // A, B, C, D
      return { id, text: optText };
    });

    // Parse correct option from answerData.answer (e.g., "(A) Inevitable.")
    const ansMatch = answerData.answer.match(/^\(([A-Z])\)\s*(.*)/);
    let correctOption = '';
    if (ansMatch) {
      correctOption = ansMatch[1];
    } else {
      console.warn(`Could not parse answer letter from "${answerData.answer}" in ${file}`);
    }

    existingQuestions.push({
      id: currentId++,
      course: "PNLE",
      topic: topicStr,
      question_stem: q.question,
      options: options,
      correct_option: correctOption,
      rationale: answerData.rationale
    });
  });

  console.log(`Processed ${file}, added questions.`);
});

fs.writeFileSync(questionsFile, JSON.stringify(existingQuestions, null, 2));
console.log('Finished updating questions.json');
