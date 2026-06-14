const fs = require('fs');
const path = require('path');

const mdDir = path.join('C:', 'Users', 'PLPASIG', 'Desktop', 'PersonalProjs', 'matron', 'md-files', 'questions-sets', 'set-ii');
const frontendDataDir = path.join('C:', 'Users', 'PLPASIG', 'Desktop', 'PersonalProjs', 'matron', 'frontend', 'src', 'data');
const questionsFile = path.join(frontendDataDir, 'questions.json');

const mdFiles = ['set2-pnle-i.md', 'set2-pnle-ii.md', 'set2-pnle-iii.md', 'set2-pnle-iv.md', 'set2-pnle-v.md'];

let existingQuestions = [];
if (fs.existsSync(questionsFile)) {
  existingQuestions = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));
}

let currentId = existingQuestions.length > 0 ? Math.max(...existingQuestions.map(q => q.id)) + 1 : 1;

let newSetsData = [];

mdFiles.forEach(file => {
  const filePath = path.join(mdDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Specific fix for set2-pnle-iv.md JSON typo if still present
  content = content.replace(/"“Exercise is a good way to prevent this problem.”\s*\]"/g, '"“Exercise is a good way to prevent this problem.”"\n    ]');

  // Extract title and subtitle from line 7
  const lines = content.split('\n');
  const line7 = lines[6]; // 0-indexed
  const match = line7.match(/# (Set \d+) - (.*?) \/\/ (.*)/);
  if (!match) {
    console.error('Could not match line 7 format in', file);
    return;
  }
  const [, setStr, titleStr, subtitleStr] = match;

  const topicStr = `PNLE ${subtitleStr.trim()}`;

  const questionsMatch = content.match(/Questions:\s*```json\s*([\s\S]*?)\s*```/);
  const answersMatch = content.match(/Answers and Rationale:\s*```json\s*([\s\S]*?)\s*```/g);

  if (!questionsMatch || !answersMatch) {
    console.error('Could not find JSON blocks in', file);
    return;
  }

  let questionsData = JSON.parse(questionsMatch[1]);
  if (Array.isArray(questionsData)) {
    questionsData = { questions: questionsData };
  }

  let allAnswers = [];
  answersMatch.forEach(block => {
    const blockMatch = block.match(/```json\s*([\s\S]*?)\s*```/);
    if (blockMatch) {
      let parsed;
      try {
        parsed = JSON.parse(blockMatch[1]);
      } catch(e) {
        console.error(`Failed to parse answers JSON in ${file}`, e);
        return;
      }
      if (Array.isArray(parsed)) {
        allAnswers = allAnswers.concat(parsed);
      } else if (parsed.nursing_practice_answers) {
        allAnswers = allAnswers.concat(parsed.nursing_practice_answers);
      }
    }
  });

  const answersMap = {};
  allAnswers.forEach(a => {
    const num = a.number || a.item_number;
    answersMap[num] = a;
  });

  let validQuestionsCount = 0;

  questionsData.questions.forEach(q => {
    const qNum = q.number || q.question_number || q.item_number;
    const answerData = answersMap[qNum];
    if (!answerData) {
      console.warn(`No answer found for question ${qNum} in ${file}`);
      return;
    }

    const options = q.options.map((optText, index) => {
      const id = String.fromCharCode(65 + index); // A, B, C, D
      return { id, text: optText };
    });

    const ansMatch = answerData.answer.match(/^\(?([A-Z])\)?[\.\s]*(.*)/);
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
    validQuestionsCount++;
  });

  newSetsData.push({
    title: titleStr.trim(),
    subtitle: subtitleStr.trim(),
    count: validQuestionsCount
  });

  console.log(`Processed ${file}, added ${validQuestionsCount} questions.`);
});

fs.writeFileSync(questionsFile, JSON.stringify(existingQuestions, null, 2));
console.log('Finished updating questions.json');
fs.writeFileSync('new_sets.json', JSON.stringify(newSetsData, null, 2));
