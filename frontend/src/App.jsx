import React, { useState } from 'react';
import Home from './Home';
import Quiz from './Quiz';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <>
      {currentView === 'home' && <Home onStartQuiz={() => setCurrentView('quiz')} />}
      {currentView === 'quiz' && <Quiz onBack={() => setCurrentView('home')} />}
    </>
  );
}
