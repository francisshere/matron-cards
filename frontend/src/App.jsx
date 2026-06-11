import React, { useState } from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Topics from './Topics';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <>
      {currentView === 'home' && <Home onStartQuiz={() => setCurrentView('quiz')} onViewChange={setCurrentView} />}
      {currentView === 'quiz' && <Quiz onBack={() => setCurrentView('home')} />}
      {currentView === 'topics' && <Topics onViewChange={setCurrentView} />}
    </>
  );
}
