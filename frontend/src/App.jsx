import { useState, useEffect } from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Topics from './Topics';
import Mnemonics from './Mnemonics';
import Tips from './Tips';
import MnemonicDetail from './components/MnemonicDetail';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [previousView, setPreviousView] = useState('home');
  const [quizTopic, setQuizTopic] = useState(null);
  const [selectedMnemonicId, setSelectedMnemonicId] = useState(null);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        setCurrentView(event.state.view);
        setQuizTopic(event.state.topic || null);
        setSelectedMnemonicId(event.state.mnemonicId || null);
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.history.replaceState({ view: 'home', topic: null, mnemonicId: null }, '');
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleStartQuiz = (topic) => {
    setPreviousView(currentView);
    setQuizTopic(topic);
    setCurrentView('quiz');
    window.history.pushState({ view: 'quiz', topic }, '');
  };

  const handleViewChange = (newView) => {
    setPreviousView(currentView);
    setCurrentView(newView);
    window.history.pushState({ view: newView, topic: null, mnemonicId: null }, '');
  };

  const handleSelectMnemonic = (mnemonicId) => {
    setPreviousView(currentView);
    setSelectedMnemonicId(mnemonicId);
    setCurrentView('mnemonic-detail');
    window.history.pushState({ view: 'mnemonic-detail', mnemonicId, topic: null }, '');
  };

  const handleBack = () => {
    if (window.history.state) {
      window.history.back();
    } else {
      setCurrentView(previousView);
    }
  };

  return (
    <>
      {currentView === 'home' && <Home onStartQuiz={handleStartQuiz} onViewChange={handleViewChange} />}
      {currentView === 'quiz' && <Quiz onBack={handleBack} topicFilter={quizTopic} />}
      {currentView === 'topics' && <Topics onViewChange={handleViewChange} onStartQuiz={handleStartQuiz} />}
      {currentView === 'mnemonics' && <Mnemonics onViewChange={handleViewChange} onSelectMnemonic={handleSelectMnemonic} />}
      {currentView === 'mnemonic-detail' && (
        <MnemonicDetail 
          mnemonicId={selectedMnemonicId} 
          onBack={() => handleViewChange('mnemonics')} 
          onSelectMnemonic={handleSelectMnemonic}
          onViewChange={handleViewChange} 
        />
      )}
      {currentView === 'tips' && <Tips onViewChange={handleViewChange} />}
    </>
  );
}

