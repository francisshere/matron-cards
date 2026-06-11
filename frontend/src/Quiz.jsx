import React, { useState, useEffect } from 'react';
import { X, Settings } from 'lucide-react';
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
    }
  } catch(e) { console.error("Audio error", e) }
};

export default function Quiz({ onBack, topicFilter }) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [gamemode, setGamemode] = useState(true);
  const [questionCount, setQuestionCount] = useState(25);
  const [customCount, setCustomCount] = useState("");
  const [randomize, setRandomize] = useState(false);
  
  const [tempGamemode, setTempGamemode] = useState(true);
  const [tempQuestionCount, setTempQuestionCount] = useState(25);
  const [tempCustomCount, setTempCustomCount] = useState("");
  const [tempRandomize, setTempRandomize] = useState(false);
  const [customError, setCustomError] = useState("");
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(5);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showRationale, setShowRationale] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    startNewGame(25, false);
  }, []);

  const startNewGame = (count = questionCount, isRandom = randomize) => {
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
  };

  const openSettings = () => {
    setTempGamemode(gamemode);
    setTempQuestionCount(questionCount);
    setTempCustomCount(customCount);
    setTempRandomize(randomize);
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
    startNewGame(count, tempRandomize);
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
        <div className="bg-card p-8 rounded-3xl text-center shadow-sm max-w-sm w-full animate-bounce-pop">
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
        <div className="bg-card p-8 rounded-3xl text-center shadow-sm max-w-sm w-full animate-bounce-pop">
          <img src={avatarNurse} alt="Success" className="w-32 h-32 mx-auto mb-4 drop-shadow-md" />
          <h2 className="text-3xl font-heading font-bold text-text mb-4">Review Complete!</h2>
          <p className="font-body text-text/80 mb-8 font-semibold">Great job finishing {questions.length} questions.</p>
          <button onClick={() => startNewGame()} className="w-full py-4 rounded-full bg-primary text-white font-heading font-bold shadow-[0px_6px_4px_0px_#E97CA1] hover:bg-primary/90 transition-all active:translate-y-1 active:shadow-none">Review Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg flex justify-center">
      <div className="w-full max-w-3xl flex flex-col pt-8 pb-32 px-6 sm:px-12 relative min-h-screen">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button onClick={onBack} className="text-text hover:text-primary transition-colors p-2">
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
          
          <div className={`flex items-center space-x-2 drop-shadow-sm ml-2 sm:ml-4 transition-opacity ${gamemode ? 'opacity-100' : 'opacity-0'}`}>
            <img src={lampIcon} alt="Lamp" className="w-10 h-10 sm:w-14 sm:h-14 object-contain" />
            <span className="font-body font-bold text-mid text-2xl sm:text-3xl">{lives}</span>
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
              ) : currentQuestion.question_stem}
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
        <div className="space-y-4">
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            
            if (isSelected) {
              return (
                <div 
                  key={opt.id}
                  className="w-full rounded-2xl bg-[#D66B93]"
                >
                  <div className="p-4 sm:p-5 border-4 border-transparent opacity-0 pointer-events-none">
                    <span className="font-body font-semibold text-base sm:text-lg block text-center">{opt.text}</span>
                  </div>
                </div>
              );
            }

            let btnClass = "w-full p-4 sm:p-5 rounded-2xl border-[3px] text-center font-body font-semibold text-base sm:text-lg transition-all duration-200 shadow-[0px_6px_4px_0px_#E97CA1] bg-card border-[#F7C4D5] text-text/80 hover:border-mid hover:bg-light/10 hover:-translate-y-0.5";
            
            if (showRationale && opt.id === currentQuestion.correct_option) {
               btnClass = "w-full p-4 sm:p-5 rounded-2xl border-[3px] text-center font-body font-semibold text-base sm:text-lg transition-all duration-200 shadow-[0px_6px_4px_0px_#E97CA1] bg-[#D1FAE5] border-[#34D399] text-[#065F46]";
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
        <div className="w-full max-w-3xl flex justify-between items-center px-2 sm:px-6">
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
    </div>
  );
}
