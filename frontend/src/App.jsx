import React, { useState } from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Topics from './Topics';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [quizTopic, setQuizTopic] = useState(null);

  const handleStartQuiz = (topic) => {
    setQuizTopic(topic);
    setCurrentView('quiz');
  };

  return (
    <>
      {currentView === 'home' && <Home onStartQuiz={handleStartQuiz} onViewChange={setCurrentView} />}
      {currentView === 'quiz' && <Quiz onBack={() => setCurrentView('home')} topicFilter={quizTopic} />}
      {currentView === 'topics' && <Topics onViewChange={setCurrentView} onStartQuiz={handleStartQuiz} />}
    </>
  );
}
