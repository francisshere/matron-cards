import { useState, useEffect, useCallback } from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Topics from './Topics';
import Mnemonics from './Mnemonics';
import Tips from './Tips';
import MnemonicDetail from './components/MnemonicDetail';
import Layout from './components/Layout';

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

  const handleStartQuiz = useCallback((topic) => {
    setQuizTopic(topic);
    setCurrentView((prev) => {
      setPreviousView(prev);
      window.history.pushState({ view: 'quiz', topic }, '');
      return 'quiz';
    });
  }, []);

  const handleViewChange = useCallback((newView) => {
    setCurrentView((prev) => {
      setPreviousView(prev);
      window.history.pushState({ view: newView, topic: null, mnemonicId: null }, '');
      return newView;
    });
  }, []);

  const handleSelectMnemonic = useCallback((mnemonicId) => {
    setSelectedMnemonicId(mnemonicId);
    setCurrentView((prev) => {
      setPreviousView(prev);
      window.history.pushState({ view: 'mnemonic-detail', mnemonicId, topic: null }, '');
      return 'mnemonic-detail';
    });
  }, []);

  const handleBack = useCallback(() => {
    if (window.history.state) {
      window.history.back();
    } else {
      setCurrentView((prev) => previousView || 'home');
    }
  }, [previousView]);

  if (currentView === 'quiz') {
    return <Quiz onBack={handleBack} topicFilter={quizTopic} />;
  }

  const layoutActiveView = currentView === 'mnemonic-detail' ? 'mnemonics' : currentView;

  return (
    <Layout activeView={layoutActiveView} onViewChange={handleViewChange}>
      {currentView === 'home' && <Home onStartQuiz={handleStartQuiz} onViewChange={handleViewChange} />}
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
    </Layout>
  );
}

