import { useState, useMemo } from 'react';
import allQuestions from '../data/questions.json';

export function useDailyContent() {
  const [today] = useState(() => Math.floor(Date.now() / (1000 * 60 * 60 * 24)));

  return useMemo(() => {
    // Seeded random number generator
    const seededRandom = (seed) => {
      const x = Math.sin(seed + 1) * 10000;
      return x - Math.floor(x);
    };

    // Pick a daily question
    const qIndex = Math.floor(seededRandom(today) * allQuestions.length);
    const dailyQuestion = allQuestions[qIndex];

    const correctOpt = dailyQuestion.options.find(o => o.id === dailyQuestion.correct_option);
    const answerText = correctOpt ? `${dailyQuestion.correct_option}. ${correctOpt.text}` : dailyQuestion.correct_option;

    // Get unique topics and their counts
    const topicsMap = {};
    allQuestions.forEach(q => {
      if (!topicsMap[q.topic]) {
        const parts = q.topic.split(' - ');
        topicsMap[q.topic] = {
          title: parts.length > 1 ? parts.slice(1).join(' - ') : q.topic,
          subtitle: q.course ? `${q.course} - ${parts[0]}` : parts[0],
          topicKey: q.topic,
          count: 0
        };
      }
      topicsMap[q.topic].count++;
    });

    const uniqueTopics = Object.values(topicsMap);

    // Pick 2 daily topics
    const tIndex1 = Math.floor(seededRandom(today + 1) * uniqueTopics.length);
    let tIndex2 = Math.floor(seededRandom(today + 2) * uniqueTopics.length);
    if (tIndex1 === tIndex2 && uniqueTopics.length > 1) {
      tIndex2 = (tIndex2 + 1) % uniqueTopics.length;
    }

    const dailyTopics = [uniqueTopics[tIndex1], uniqueTopics[tIndex2]].filter(Boolean);

    // Pick topic for "Try some questions"
    let tryTopicIndex = Math.floor(seededRandom(today + 3) * uniqueTopics.length);
    const tryTopic = uniqueTopics[tryTopicIndex];
    const tryQuestionsAll = allQuestions.filter(q => q.topic === tryTopic.topicKey);
    const tryQuestions = tryQuestionsAll.slice(0, 5);

    return { dailyQuestion, dailyTopics, answerText, tryTopic, tryQuestions };
  }, [today]);
}
