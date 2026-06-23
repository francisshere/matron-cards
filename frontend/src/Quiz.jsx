import React, { useState, useEffect } from 'react';
import { X, Settings, ChevronUp, ChevronDown } from 'lucide-react';
import allQuestions from './data/questions.json';

import avatarNurse from './assets/avatar-main-no-bg.svg';
import explainIcon from './assets/explain.svg';
import lampIcon from './assets/lamp-no-bg.svg';

const playSound = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.5);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, ctx.currentTime); 
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.3);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'alarm') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.setValueAtTime(800, ctx.currentTime + 0.15);
      osc.frequency.setValueAtTime(600, ctx.currentTime + 0.3);
      osc.frequency.setValueAtTime(800, ctx.currentTime + 0.45);
      osc.frequency.setValueAtTime(600, ctx.currentTime + 0.6);
      osc.frequency.setValueAtTime(800, ctx.currentTime + 0.75);
      osc.frequency.setValueAtTime(600, ctx.currentTime + 0.9);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.2);
    }
  } catch(e) { console.error("Audio error", e) }
};

export default function Quiz({ onBack, topicFilter }) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [gamemode, setGamemode] = useState(true);
  const [questionCount, setQuestionCount] = useState(25);
  const [customCount, setCustomCount] = useState("");
  const [randomize, setRandomize] = useState(false);
  const [timeLimitEnabled, setTimeLimitEnabled] = useState(false);
  const [timeLimitHours, setTimeLimitHours] = useState(0);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState(0);
  const [timeLimitSeconds, setTimeLimitSeconds] = useState(0);
  
  const [tempGamemode, setTempGamemode] = useState(true);
  const [tempQuestionCount, setTempQuestionCount] = useState(25);
  const [tempCustomCount, setTempCustomCount] = useState("");
  const [tempRandomize, setTempRandomize] = useState(false);
  const [tempTimeLimitEnabled, setTempTimeLimitEnabled] = useState(false);
  const [tempTimeLimitHours, setTempTimeLimitHours] = useState(0);
  const [tempTimeLimitMinutes, setTempTimeLimitMinutes] = useState(0);
  const [tempTimeLimitSeconds, setTempTimeLimitSeconds] = useState(0);
  const [customError, setCustomError] = useState("");
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(5);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showRationale, setShowRationale] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [exitConfirmOpen, setExitConfirmOpen] = useState(false);
  
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let timer;
    if (timeRemaining !== null && timeRemaining > 0 && !gameOver && !quizFinished) {
      timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && !gameOver && !quizFinished) {
      playSound('alarm');
      setQuizFinished(true); // ran out of time
    }
    return () => clearInterval(timer);
  }, [timeRemaining, gameOver, quizFinished]);

  useEffect(() => {
    if (gameOver) {
      playSound('alarm');
    }
  }, [gameOver]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    startNewGame(25, false);
  }, []);

  const startNewGame = (count = questionCount, isRandom = randomize, tEnabled = timeLimitEnabled, tHours = timeLimitHours, tMins = timeLimitMinutes, tSecs = timeLimitSeconds) => {
    let actualCount = count;
    if (count === 'custom') {
      actualCount = parseInt(customCount) > 0 ? parseInt(customCount) : 25;
    }
    
    let sourceQuestions = [...allQuestions];
    if (topicFilter) {
      sourceQuestions = sourceQuestions.filter(q => q.topic === topicFilter);
    }
    
    // Ensure actualCount doesn't exceed available questions
    actualCount = Math.min(actualCount, sourceQuestions.length);

    if (isRandom) {
      for (let i = sourceQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sourceQuestions[i], sourceQuestions[j]] = [sourceQuestions[j], sourceQuestions[i]];
      }
    }
    
    const sliced = sourceQuestions.slice(0, actualCount);
    setQuestions(sliced);
    setCurrentIndex(0);
    setLives(5);
    setGameOver(false);
    setQuizFinished(false);
    setSelectedOption(null);
    setShowRationale(false);
    setCorrectAnswers(0);
    if (tEnabled) {
      setTimeRemaining(tHours * 3600 + tMins * 60 + tSecs);
    } else {
      setTimeRemaining(null);
    }
  };

  const openSettings = () => {
    setTempGamemode(gamemode);
    setTempQuestionCount(questionCount);
    setTempCustomCount(customCount);
    setTempRandomize(randomize);
    setTempTimeLimitEnabled(timeLimitEnabled);
    setTempTimeLimitHours(timeLimitHours);
    setTempTimeLimitMinutes(timeLimitMinutes);
    setTempTimeLimitSeconds(timeLimitSeconds);
    setCustomError("");
    setSettingsOpen(true);
  };

  const handleApplySettings = () => {
    let count = tempQuestionCount;
    if (count === 'custom') {
      const parsed = Number(tempCustomCount);
      const maxCount = topicFilter ? allQuestions.filter(q => q.topic === topicFilter).length : allQuestions.length;
      if (!Number.isInteger(parsed) || parsed <= 0 || parsed > maxCount) {
        setCustomError("Invalid number.");
        return;
      }
      count = parsed;
    }
    
    setQuestionCount(tempQuestionCount);
    setCustomCount(tempCustomCount);
    setGamemode(tempGamemode);
    setRandomize(tempRandomize);
    setTimeLimitEnabled(tempTimeLimitEnabled);
    setTimeLimitHours(tempTimeLimitHours);
    setTimeLimitMinutes(tempTimeLimitMinutes);
    setTimeLimitSeconds(tempTimeLimitSeconds);
    startNewGame(count, tempRandomize, tempTimeLimitEnabled, tempTimeLimitHours, tempTimeLimitMinutes, tempTimeLimitSeconds);
    setSettingsOpen(false);
  };

  const currentQuestion = questions[currentIndex] || null;

  const handleCheck = () => {
    if (!selectedOption || showRationale) return;
    
    if (selectedOption !== currentQuestion.correct_option) {
      playSound('wrong');
      if (gamemode) {
        const newLives = lives - 1;
        setLives(newLives);
        if (newLives <= 0) {
          setTimeout(() => setGameOver(true), 2000); 
        }
      }
    } else {
      playSound('correct');
      setCorrectAnswers(prev => prev + 1);
    }
    setShowRationale(true);
  };

  const handleNext = () => {
    if (lives <= 0 && gamemode) {
      setGameOver(true);
      return;
    }
    if (currentIndex + 1 >= questions.length) {
      setQuizFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowRationale(false);
    }
  };

  const handleSkip = () => {
    if (showRationale) return;
    if (gamemode) {
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) {
        setGameOver(true);
        return;
      }
    }
    if (currentIndex + 1 >= questions.length) {
      setQuizFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowRationale(false);
    }
  };

  if (!currentQuestion) return <div className="min-h-screen bg-bg flex items-center justify-center font-heading text-xl">Loading...</div>;

  if (gameOver) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-6">
        <div className="bg-card p-8 rounded-3xl text-center shadow-2xl max-w-sm w-full animate-bounce-pop">
          <img src={explainIcon} alt="Game Over" className="w-32 h-32 mx-auto mb-4 drop-shadow-md" />
          <h2 className="text-3xl font-heading font-bold text-text mb-4">Game Over!</h2>
          <p className="font-body text-text/80 mb-8 font-semibold">You ran out of lives (5 mistakes).</p>
          <button onClick={() => startNewGame()} className="w-full py-4 rounded-full bg-primary text-white font-heading font-bold shadow-[0px_6px_4px_0px_#E97CA1] hover:bg-primary/90 transition-all active:translate-y-1 active:shadow-none">Try Again</button>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-6">
        <div className="bg-card p-8 rounded-3xl text-center shadow-2xl max-w-sm w-full animate-bounce-pop">
          <img src={avatarNurse} alt="Success" className="w-32 h-32 mx-auto mb-4 drop-shadow-md" />
          <h2 className="text-3xl font-heading font-bold text-text mb-4">Review Complete!</h2>
          <p className="font-body text-text/80 mb-2 font-semibold">Great job finishing the quiz.</p>
          <p className="font-body text-text mb-8 font-bold text-2xl tracking-wide">Accuracy: {Math.round((correctAnswers / questions.length) * 100) || 0}%</p>
          <button onClick={() => startNewGame()} className="w-full py-4 rounded-full bg-primary text-white font-heading font-bold shadow-[0px_6px_4px_0px_#E97CA1] hover:bg-primary/90 transition-all active:translate-y-1 active:shadow-none">Review Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg flex justify-center">
      <div className="w-full lg:w-[60%] flex flex-col pt-8 pb-32 px-6 sm:px-12 relative min-h-screen">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button onClick={() => setExitConfirmOpen(true)} className="text-text hover:text-primary transition-colors p-2">
              <X className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={3} />
            </button>
            <button onClick={openSettings} className="text-text hover:text-primary transition-colors p-2">
              <Settings className="w-7 h-7 sm:w-9 sm:h-9" strokeWidth={3} />
            </button>
          </div>
          
          <div className="flex-1 mx-4 sm:mx-8 relative h-8 sm:h-10 bg-card border-2 border-text/10 rounded-full overflow-hidden shadow-sm">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-light to-mid rounded-full transition-all duration-500" 
              style={{ width: `${((currentIndex) / questions.length) * 100}%` }} 
            />
            <div className="absolute inset-0 flex items-center justify-center text-sm sm:text-base font-body font-semibold text-text z-10">
              {currentIndex + 1} of {questions.length}
            </div>
          </div>
          
          <div className="flex items-center space-x-3 sm:space-x-5 drop-shadow-sm ml-2 sm:ml-4">
            {timeRemaining !== null && (
              <div className={`font-heading font-black text-xl sm:text-2xl transition-colors ${timeRemaining < 60 ? 'text-red-500 animate-pulse' : 'text-text'}`}>
                {formatTime(timeRemaining)}
              </div>
            )}
            <div className={`flex items-center space-x-2 transition-opacity ${gamemode ? 'opacity-100' : 'opacity-0'}`}>
              <img src={lampIcon} alt="Lamp" className="w-10 h-10 sm:w-14 sm:h-14 object-contain" />
              <span className="font-body font-bold text-mid text-2xl sm:text-3xl">{lives}</span>
            </div>
          </div>
        </header>

        {/* Title */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-muted font-bold tracking-wider text-sm mb-1 uppercase">{currentQuestion.course}</h2>
          <h1 className="text-2xl sm:text-3xl font-heading text-text font-black">{currentQuestion.topic}</h1>
        </div>

        {/* Question Area */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8 relative">
          <div className="w-56 h-56 sm:w-72 sm:h-72 shrink-0 relative mb-4 sm:mb-0 sm:mr-6 z-10">
            <img 
              src={showRationale ? explainIcon : avatarNurse} 
              alt="Mascot Avatar" 
              className={`w-full h-full object-contain drop-shadow-lg transition-all duration-300 ${showRationale && selectedOption === currentQuestion.correct_option ? 'animate-bounce-pop' : ''}`}
            />
          </div>
          
          <div className={`border-4 ${showRationale ? (selectedOption === currentQuestion.correct_option ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50 animate-shake') : 'border-text/60 bg-card'} rounded-3xl p-6 sm:p-8 shadow-sm relative w-full z-0 min-h-[160px] transition-colors duration-300`}>
            {/* Speech bubble tail */}
            <div className={`hidden sm:block absolute top-12 -left-[14px] w-6 h-6 border-l-4 border-b-4 transform rotate-45 transition-colors duration-300 ${showRationale ? (selectedOption === currentQuestion.correct_option ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 'bg-card border-text/60'}`}></div>
            <div className={`sm:hidden absolute -top-[14px] left-1/2 transform -translate-x-1/2 w-6 h-6 border-t-4 border-l-4 rotate-45 transition-colors duration-300 ${showRationale ? (selectedOption === currentQuestion.correct_option ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 'bg-card border-text/60'}`}></div>
            
            {showRationale && (
              <div className={`mb-4 inline-block px-4 py-1.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-widest shadow-sm animate-bounce-pop ${
                  selectedOption === currentQuestion.correct_option ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                }`}>
                {selectedOption === currentQuestion.correct_option ? '🎉 CORRECT!' : '❌ INCORRECT'}
              </div>
            )}

            <p className="text-text font-body font-semibold text-sm sm:text-base leading-relaxed">
              {showRationale ? (
                <span className="block mt-2">
                  <span className="font-heading font-black text-lg text-text block mb-2 uppercase tracking-wide border-b-2 border-text/10 pb-2">Rationale</span>
                  {currentQuestion.rationale}
                </span>
              ) : (
                <span className="block mt-2">
                  <span className="font-heading font-black text-lg text-text block mb-2 uppercase tracking-wide border-b-2 border-text/10 pb-2">Question</span>
                  {currentQuestion.question_stem}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Answer Container */}
        <div className="w-full border-t-2 border-b-2 border-text/80 py-3 sm:py-4 mb-8 min-h-[88px] sm:min-h-[104px] flex flex-col justify-center">
          {selectedOption && (
            <button
              onClick={() => !showRationale && setSelectedOption(null)}
              className={`w-full p-4 sm:p-5 rounded-2xl text-center font-body font-semibold text-base sm:text-lg transition-all duration-200 shadow-[0px_6px_4px_0px_#E97CA1] text-white scale-[1.02] sm:scale-100 ${showRationale && selectedOption !== currentQuestion.correct_option ? 'bg-red-500' : 'bg-primary'}`}
            >
              {currentQuestion.options.find(o => o.id === selectedOption)?.text}
            </button>
          )}
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            
            if (isSelected) {
              return (
                <div 
                  key={opt.id}
                  className="w-full h-full min-h-[76px] rounded-2xl bg-[#D66B93] flex items-center justify-center"
                >
                  <div className="p-4 sm:p-5 border-4 border-transparent opacity-0 pointer-events-none">
                    <span className="font-body font-semibold text-base sm:text-lg block text-center">{opt.text}</span>
                  </div>
                </div>
              );
            }

            let btnClass = "w-full h-full min-h-[76px] flex items-center justify-center p-4 sm:p-5 rounded-2xl border-[3px] text-center font-body font-semibold text-base sm:text-lg transition-all duration-200 shadow-[0px_6px_4px_0px_#E97CA1] bg-card border-[#F7C4D5] text-text/80 hover:border-mid hover:bg-light/10 hover:-translate-y-0.5";
            
            if (showRationale && opt.id === currentQuestion.correct_option) {
               btnClass = "w-full h-full min-h-[76px] flex items-center justify-center p-4 sm:p-5 rounded-2xl border-[3px] text-center font-body font-semibold text-base sm:text-lg transition-all duration-200 shadow-[0px_6px_4px_0px_#E97CA1] bg-[#D1FAE5] border-[#34D399] text-[#065F46]";
            }

            return (
              <button
                key={opt.id}
                onClick={() => !showRationale && setSelectedOption(opt.id)}
                className={btnClass}
                disabled={showRationale}
              >
                {opt.text}
              </button>
            )
          })}
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-bg/95 border-t-2 border-text/80 p-6 sm:p-8 flex justify-center z-50">
        <div className="w-full lg:w-[60%] flex justify-between items-center px-2 sm:px-6">
          <button 
            onClick={handleSkip}
            disabled={showRationale}
            className={`px-8 sm:px-14 py-4 sm:py-5 rounded-full border-4 border-text/30 bg-card text-text/70 font-heading font-bold text-xl sm:text-2xl transition-all shadow-[0px_6px_4px_0px_#E97CA1] ${showRationale ? 'opacity-50 cursor-not-allowed shadow-none translate-y-1 border-text/10' : 'hover:bg-text/5 hover:border-text/40 active:translate-y-1 active:shadow-none'}`}
          >
            SKIP
          </button>
          
          <button 
            onClick={showRationale ? handleNext : handleCheck}
            disabled={!selectedOption && !showRationale}
            className={`px-8 sm:px-14 py-4 sm:py-5 rounded-full font-heading font-bold text-xl sm:text-2xl transition-all shadow-[0px_6px_4px_0px_#E97CA1] active:translate-y-1 active:shadow-none
              ${(selectedOption || showRationale) 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-light text-white/90 cursor-not-allowed shadow-none opacity-80'
              }
            `}
          >
            {showRationale ? 'NEXT' : 'CHECK'}
          </button>
        </div>
      </div>

      {/* Settings Modal */}
      {settingsOpen && (
        <div className="fixed inset-0 bg-text/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-card w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-heading font-bold text-text">Review Settings</h2>
              <button onClick={() => setSettingsOpen(false)} className="text-text hover:text-primary">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="font-body font-semibold text-lg text-text">Lamp (Lives) Gamemode</span>
                  <div className={`w-14 h-8 rounded-full p-1 transition-colors ${tempGamemode ? 'bg-primary' : 'bg-text/20'}`} onClick={() => setTempGamemode(!tempGamemode)}>
                    <div className={`w-6 h-6 bg-white rounded-full transition-transform ${tempGamemode ? 'translate-x-6' : 'translate-x-0'}`} />
                  </div>
                </label>
                <p className="text-sm font-body text-text/60 mt-1 font-semibold">Lose a life for incorrect answers and skips.</p>
              </div>

              <div>
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="font-body font-semibold text-lg text-text">Randomize Questions</span>
                  <div className={`w-14 h-8 rounded-full p-1 transition-colors ${tempRandomize ? 'bg-primary' : 'bg-text/20'}`} onClick={() => setTempRandomize(!tempRandomize)}>
                    <div className={`w-6 h-6 bg-white rounded-full transition-transform ${tempRandomize ? 'translate-x-6' : 'translate-x-0'}`} />
                  </div>
                </label>
                <p className="text-sm font-body text-text/60 mt-1 font-semibold">Shuffle the question order every time you start.</p>
              </div>

              <div>
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="font-body font-semibold text-lg text-text">Time Limit</span>
                  <div className={`w-14 h-8 rounded-full p-1 transition-colors ${tempTimeLimitEnabled ? 'bg-primary' : 'bg-text/20'}`} onClick={() => setTempTimeLimitEnabled(!tempTimeLimitEnabled)}>
                    <div className={`w-6 h-6 bg-white rounded-full transition-transform ${tempTimeLimitEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                  </div>
                </label>
                <p className="text-sm font-body text-text/60 mt-1 font-semibold">Set a timer for the entire quiz session.</p>
                {tempTimeLimitEnabled && (
                  <div className="mt-4 flex flex-col items-center bg-card border-2 border-text/10 rounded-2xl p-6 shadow-sm">
                    {/* Up Arrows */}
                    <div className="flex justify-between w-full max-w-[280px] px-6 mb-3">
                      <button onClick={() => setTempTimeLimitHours(h => (h + 1) % 24)} className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full"><ChevronUp className="w-8 h-8" strokeWidth={3} /></button>
                      <button onClick={() => setTempTimeLimitMinutes(m => (m + 1) % 60)} className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full"><ChevronUp className="w-8 h-8" strokeWidth={3} /></button>
                      <button onClick={() => setTempTimeLimitSeconds(s => (s + 1) % 60)} className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full"><ChevronUp className="w-8 h-8" strokeWidth={3} /></button>
                    </div>

                    {/* Time Inputs */}
                    <div className="flex items-center justify-center space-x-1 w-full max-w-[280px]">
                      <input 
                        type="text" 
                        value={tempTimeLimitHours.toString().padStart(2, '0')} 
                        onChange={e => { const val = e.target.value.replace(/\D/g, ''); setTempTimeLimitHours(Math.min(23, Number(val))); }} 
                        className="w-20 py-3 rounded-xl bg-text/5 text-center font-heading text-4xl sm:text-5xl font-black text-text outline-none focus:bg-text/10 focus:ring-4 focus:ring-primary/30 transition-all" 
                      />
                      <span className="text-4xl sm:text-5xl font-black text-text/40 pb-1">:</span>
                      <input 
                        type="text" 
                        value={tempTimeLimitMinutes.toString().padStart(2, '0')} 
                        onChange={e => { const val = e.target.value.replace(/\D/g, ''); setTempTimeLimitMinutes(Math.min(59, Number(val))); }} 
                        className="w-20 py-3 rounded-xl bg-text/5 text-center font-heading text-4xl sm:text-5xl font-black text-text outline-none focus:bg-text/10 focus:ring-4 focus:ring-primary/30 transition-all" 
                      />
                      <span className="text-4xl sm:text-5xl font-black text-text/40 pb-1">:</span>
                      <input 
                        type="text" 
                        value={tempTimeLimitSeconds.toString().padStart(2, '0')} 
                        onChange={e => { const val = e.target.value.replace(/\D/g, ''); setTempTimeLimitSeconds(Math.min(59, Number(val))); }} 
                        className="w-20 py-3 rounded-xl bg-text/5 text-center font-heading text-4xl sm:text-5xl font-black text-text outline-none focus:bg-text/10 focus:ring-4 focus:ring-primary/30 transition-all" 
                      />
                    </div>

                    {/* Down Arrows */}
                    <div className="flex justify-between w-full max-w-[280px] px-6 mt-3">
                      <button onClick={() => setTempTimeLimitHours(h => (h - 1 + 24) % 24)} className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full"><ChevronDown className="w-8 h-8" strokeWidth={3} /></button>
                      <button onClick={() => setTempTimeLimitMinutes(m => (m - 1 + 60) % 60)} className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full"><ChevronDown className="w-8 h-8" strokeWidth={3} /></button>
                      <button onClick={() => setTempTimeLimitSeconds(s => (s - 1 + 60) % 60)} className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full"><ChevronDown className="w-8 h-8" strokeWidth={3} /></button>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <span className="font-body font-semibold text-lg text-text block mb-3">Number of Questions</span>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {[25, 50, 75, 100].map(num => (
                    <button 
                      key={num}
                      onClick={() => { setTempQuestionCount(num); setTempCustomCount(""); setCustomError(""); }}
                      className={`py-3 rounded-xl font-heading text-lg border-2 transition-all ${tempQuestionCount === num ? 'bg-mid text-white border-mid' : 'bg-transparent border-text/20 text-text/80 hover:border-mid/50'}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => { setTempQuestionCount('custom'); setCustomError(""); }}
                    className={`flex-1 py-3 rounded-xl font-heading text-lg border-2 transition-all ${tempQuestionCount === 'custom' ? 'bg-mid text-white border-mid' : 'bg-transparent border-text/20 text-text/80 hover:border-mid/50'}`}
                  >
                    Custom
                  </button>
                  {tempQuestionCount === 'custom' && (
                    <input 
                      type="number" 
                      value={tempCustomCount}
                      onChange={(e) => { setTempCustomCount(e.target.value); setCustomError(""); }}
                      placeholder={`Max ${topicFilter ? allQuestions.filter(q => q.topic === topicFilter).length : allQuestions.length}`}
                      className={`w-24 p-3 rounded-xl border-2 outline-none font-body text-center font-bold text-text bg-transparent ${customError ? 'border-red-500' : 'border-mid'}`}
                      min="1"
                      max={topicFilter ? allQuestions.filter(q => q.topic === topicFilter).length : allQuestions.length}
                    />
                  )}
                </div>
                {customError && (
                  <p className="text-red-500 text-sm font-semibold mt-2">{customError}</p>
                )}
              </div>

              <button 
                onClick={handleApplySettings}
                className="w-full mt-4 py-4 rounded-full bg-primary text-white font-heading font-bold shadow-[0px_6px_4px_0px_#E97CA1] hover:bg-primary/90 transition-all active:translate-y-1 active:shadow-none"
              >
                Apply & Restart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {exitConfirmOpen && (
        <div className="fixed inset-0 bg-text/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-card w-full max-w-sm rounded-3xl p-6 sm:p-8 shadow-xl text-center animate-bounce-pop">
            <h2 className="text-3xl font-heading font-bold text-text mb-4">Wait!</h2>
            <p className="font-body text-text/80 mb-8 font-semibold">Are you sure you want to quit? Your progress will be lost.</p>
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => setExitConfirmOpen(false)}
                className="w-full py-4 rounded-full bg-primary text-white font-heading font-bold shadow-[0px_6px_4px_0px_#E97CA1] hover:bg-primary/90 transition-all active:translate-y-1 active:shadow-none uppercase tracking-wide"
              >
                Continue Reviewing
              </button>
              <button 
                onClick={onBack}
                className="w-full py-4 rounded-full font-heading font-bold text-red-500 hover:bg-red-50 transition-all uppercase tracking-wide"
              >
                End Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
