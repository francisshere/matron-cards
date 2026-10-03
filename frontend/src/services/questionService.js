import allQuestions from '../data/questions.json';

// Memoized cache for topics calculation
let cachedTopics = null;

export const questionService = {
  getAllQuestions() {
    return allQuestions;
  },

  getQuestionsByTopic(topic) {
    if (!topic) return allQuestions;
    return allQuestions.filter(q => q.topic === topic);
  },

  getTotalCount(topic = null) {
    if (!topic) return allQuestions.length;
    return this.getQuestionsByTopic(topic).length;
  },

  shuffle(list) {
    const array = [...list];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },

  buildQuizSet({ topic = null, count = 25, randomize = false } = {}) {
    let source = topic ? this.getQuestionsByTopic(topic) : [...allQuestions];
    if (randomize) {
      source = this.shuffle(source);
    }
    const safeCount = Math.min(Math.max(1, count), source.length);
    return source.slice(0, safeCount);
  },

  getUniqueTopics() {
    if (cachedTopics) return cachedTopics;

    const topicsMap = {};
    for (let i = 0; i < allQuestions.length; i++) {
      const q = allQuestions[i];
      if (!topicsMap[q.topic]) {
        const parts = q.topic.split(' - ');
        topicsMap[q.topic] = {
          title: parts.length > 1 ? parts.slice(1).join(' - ') : q.topic,
          subtitle: q.course ? `${q.course} - ${parts[0]}` : parts[0],
          topicKey: q.topic,
          count: 0,
        };
      }
      topicsMap[q.topic].count++;
    }

    cachedTopics = Object.values(topicsMap);
    return cachedTopics;
  },
};
