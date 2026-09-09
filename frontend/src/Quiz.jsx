import { useState, useEffect } from 'react';
import { X, Settings, ChevronUp, ChevronDown } from 'lucide-react';
import allQuestions from './data/questions.json';

import avatarNurse from './assets/avatar-main-no-bg.svg';
import explainIcon from './assets/explain.svg';
import lampIcon from './assets/lamp-no-bg.svg';
import tiredIcon from './assets/tired.svg';

import { playSound } from './utils/sound';

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
      setTimeout(() => setQuizFinished(true), 0); // ran out of time
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

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    startNewGame(25, false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



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

  if (!currentQuestion) return <div className="min-h-screen bg-transparent flex items-center justify-center font-heading text-xl">Loading...</div>;

  if (gameOver) {
    return (
      <div className="min-h-screen h-[100dvh] bg-transparent flex items-center justify-center p-4 sm:p-6">
        <div className="bg-card p-6 sm:p-8 rounded-3xl text-center shadow-[0px_6px_0px_0px_#4A1529] border-[3px] border-[#4A1529] max-w-sm w-full animate-bounce-pop">
          <img src={tiredIcon} alt="Game Over" className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 drop-shadow-md" />
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-text mb-2">Game Over!</h2>
          <p className="font-body text-text/80 mb-6 font-semibold text-sm sm:text-base">You ran out of lives (5 mistakes).</p>
          <div className="flex flex-col gap-3">
            <button onClick={() => startNewGame()} className="w-full py-3.5 rounded-xl bg-primary text-white font-heading font-black border-[3px] border-[#4A1529] shadow-[0px_4px_0px_0px_#4A1529] hover:bg-primary/90 transition-all active:translate-y-1 active:shadow-none cursor-pointer">Try Again</button>
            <button onClick={onBack} className="w-full py-3 rounded-xl bg-white text-[#4A1529] font-heading font-bold border-[2px] border-[#4A1529] hover:bg-[#F7C4D5]/30 transition-all cursor-pointer">Exit to Topics</button>
          </div>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <div className="min-h-screen h-[100dvh] bg-transparent flex items-center justify-center p-4 sm:p-6">
        <div className="bg-card p-6 sm:p-8 rounded-3xl text-center shadow-[0px_6px_0px_0px_#4A1529] border-[3px] border-[#4A1529] max-w-sm w-full animate-bounce-pop">
          <img src={avatarNurse} alt="Success" className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 drop-shadow-md" />
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-text mb-2">Review Complete!</h2>
          <p className="font-body text-text/80 mb-2 font-semibold text-sm sm:text-base">Great job finishing the quiz.</p>
          <p className="font-body text-text mb-6 font-black text-xl sm:text-2xl tracking-wide">Accuracy: {Math.round((correctAnswers / questions.length) * 100) || 0}%</p>
          <div className="flex flex-col gap-3">
            <button onClick={() => startNewGame()} className="w-full py-3.5 rounded-xl bg-primary text-white font-heading font-black border-[3px] border-[#4A1529] shadow-[0px_4px_0px_0px_#4A1529] hover:bg-primary/90 transition-all active:translate-y-1 active:shadow-none cursor-pointer">Review Again</button>
            <button onClick={onBack} className="w-full py-3 rounded-xl bg-white text-[#4A1529] font-heading font-bold border-[2px] border-[#4A1529] hover:bg-[#F7C4D5]/30 transition-all cursor-pointer">Back to Topics</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-[100dvh] bg-transparent flex flex-col justify-between overflow-hidden relative font-body text-text">
      {/* Scrollable Content Container */}
      <div className="flex-1 w-full overflow-y-auto scrollbar-thin px-3.5 sm:px-8 py-3 sm:py-5 pb-32 sm:pb-36">
        <div className="w-full lg:w-[65%] xl:w-[60%] mx-auto flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between mb-3 sm:mb-5">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button onClick={() => setExitConfirmOpen(true)} className="text-text hover:text-primary transition-colors p-1.5 sm:p-2 rounded-full hover:bg-text/5 cursor-pointer" title="Exit Quiz">
                <X className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
              </button>
              <button onClick={openSettings} className="text-text hover:text-primary transition-colors p-1.5 sm:p-2 rounded-full hover:bg-text/5 cursor-pointer" title="Settings">
                <Settings className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
              </button>
            </div>
            
            <div className="flex-1 mx-3 sm:mx-8 relative h-6 sm:h-7 bg-card border-2 border-[#4A1529]/20 rounded-full overflow-hidden shadow-sm">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-light to-primary rounded-full transition-all duration-500" 
                style={{ width: `${((currentIndex) / questions.length) * 100}%` }} 
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-heading font-bold text-text z-10">
                {currentIndex + 1} of {questions.length}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4 drop-shadow-sm ml-1 sm:ml-2">
              {timeRemaining !== null && (
                <div className={`font-heading font-black text-base sm:text-xl transition-colors ${timeRemaining < 60 ? 'text-red-500 animate-pulse' : 'text-text'}`}>
                  {formatTime(timeRemaining)}
                </div>
              )}
              <div className={`flex items-center space-x-1 sm:space-x-1.5 transition-opacity ${gamemode ? 'opacity-100' : 'opacity-0'}`}>
                <img src={lampIcon} alt="Lamp" className="w-7 h-7 sm:w-10 sm:h-10 object-contain" />
                <span className="font-body font-black text-mid text-xl sm:text-2xl">{lives}</span>
              </div>
            </div>
          </header>

          {/* Title */}
          <div className="mb-2 sm:mb-3 text-left">
            <h2 className="text-[#855264] font-black tracking-wider text-[11px] sm:text-xs uppercase mb-0.5">{currentQuestion.course}</h2>
            <h1 className="text-lg sm:text-2xl md:text-3xl font-heading text-text font-black leading-snug">{currentQuestion.topic}</h1>
          </div>

          {/* Question Area */}
          <div className="flex flex-row items-center sm:items-start gap-3 sm:gap-6 mb-3 sm:mb-4 relative">
            <div className="w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 shrink-0 relative z-10 flex items-center justify-center">
              <img 
                src={showRationale ? explainIcon : avatarNurse} 
                alt="Mascot Avatar" 
                className={`w-full h-full object-contain drop-shadow-md transition-all duration-300 ${showRationale && selectedOption === currentQuestion.correct_option ? 'animate-bounce-pop' : ''}`}
              />
            </div>
            
            <div className={`border-[3px] sm:border-4 ${showRationale ? (selectedOption === currentQuestion.correct_option ? 'border-green-500 bg-green-50/90' : 'border-red-500 bg-red-50/90 animate-shake') : 'border-[#4A1529] bg-card'} rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-[0px_4px_0px_0px_#4A1529] relative flex-1 min-w-0 transition-colors duration-300`}>
              {/* Speech bubble tail */}
              <div className={`absolute top-5 sm:top-8 -left-[9px] sm:-left-[13px] w-4 h-4 sm:w-6 sm:h-6 border-l-[3px] sm:border-l-4 border-b-[3px] sm:border-b-4 transform rotate-45 transition-colors duration-300 ${showRationale ? (selectedOption === currentQuestion.correct_option ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'bg-card border-[#4A1529]'}`}></div>
              
              {showRationale ? (
                <div>
                  <div className="flex items-center gap-2 mb-2 pb-1.5 border-b-2 border-[#4A1529]/10">
                    <span className={`inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm animate-bounce-pop ${
                      selectedOption === currentQuestion.correct_option ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                    }`}>
                      {selectedOption === currentQuestion.correct_option ? '🎉 CORRECT!' : '❌ INCORRECT'}
                    </span>
                    <span className="font-heading font-black text-xs sm:text-sm text-text uppercase tracking-wide">Rationale</span>
                  </div>
                  <div className="text-text font-body font-semibold text-xs sm:text-base leading-relaxed max-h-36 sm:max-h-48 overflow-y-auto pr-1 whitespace-pre-line scrollbar-thin">
                    {currentQuestion.rationale || `The correct answer is (${currentQuestion.correct_option}) ${currentQuestion.options.find(o => o.id === currentQuestion.correct_option)?.text || ''}. (Note: No extended explanation was published for this item in the reference exam.)`}
                  </div>
                </div>
              ) : (
                <div>
                  <span className="font-heading font-black text-xs text-text/70 block mb-1 uppercase tracking-wide border-b-2 border-[#4A1529]/10 pb-0.5">
                    Question
                  </span>
                  <div className="max-h-32 sm:max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                    <p className="text-text font-body font-semibold text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {currentQuestion.question_stem}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Answer Slot Container */}
          <div className="w-full my-2 sm:my-3">
            {selectedOption ? (
              <button
                onClick={() => !showRationale && setSelectedOption(null)}
                className={`w-full min-h-[50px] sm:min-h-[60px] p-3 sm:p-4 rounded-2xl text-left font-body font-semibold text-sm sm:text-base transition-all duration-200 shadow-[0px_4px_0px_0px_#4A1529] border-[3px] border-[#4A1529] text-white flex items-center justify-start ${
                  showRationale 
                    ? (selectedOption === currentQuestion.correct_option ? 'bg-[#22c55e]' : 'bg-[#ef4444]') 
                    : 'bg-primary hover:bg-primary/95 cursor-pointer active:scale-[0.99]'
                }`}
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 text-white font-heading font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mr-3">
                  {selectedOption}
                </span>
                <span className="flex-1 leading-snug">{currentQuestion.options.find(o => o.id === selectedOption)?.text}</span>
              </button>
            ) : (
              <div className="w-full min-h-[50px] sm:min-h-[60px] border-2 border-dashed border-[#855264]/40 rounded-2xl flex items-center justify-center bg-card/60 p-3 sm:p-4 shadow-sm">
                <span className="text-text/50 font-body text-xs sm:text-base font-medium tracking-wide">
                  Select an answer below
                </span>
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 my-1 sm:my-2">
            {currentQuestion.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              
              if (isSelected) {
                return (
                  <div 
                    key={opt.id}
                    className="w-full min-h-[50px] sm:min-h-[60px] rounded-2xl bg-[#E97CA1]/15 border-2 border-dashed border-[#855264]/30 flex items-center p-3 sm:p-4 opacity-50"
                  >
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#4A1529]/10 text-[#4A1529]/40 font-heading font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mr-3">
                      {opt.id}
                    </span>
                    <span className="font-body font-semibold text-xs sm:text-base text-text/30 line-clamp-2 select-none">{opt.text}</span>
                  </div>
                );
              }

              let btnClass = "w-full min-h-[50px] sm:min-h-[60px] flex items-center justify-start p-3 sm:p-4 rounded-2xl border-[3px] text-left font-body font-semibold text-xs sm:text-base transition-all duration-200 shadow-[0px_4px_0px_0px_#4A1529] bg-card border-[#4A1529] text-[#4A1529] hover:bg-[#F7C4D5]/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none cursor-pointer";
              
              if (showRationale && opt.id === currentQuestion.correct_option) {
                 btnClass = "w-full min-h-[50px] sm:min-h-[60px] flex items-center justify-start p-3 sm:p-4 rounded-2xl border-[3px] text-left font-body font-bold text-xs sm:text-base transition-all duration-200 shadow-[0px_4px_0px_0px_#16a34a] bg-[#D1FAE5] border-[#16a34a] text-[#065F46]";
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => !showRationale && setSelectedOption(opt.id)}
                  className={btnClass}
                  disabled={showRationale}
                >
                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-heading font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mr-3 ${
                    showRationale && opt.id === currentQuestion.correct_option
                      ? 'bg-[#16a34a] text-white'
                      : 'bg-[#4A1529]/10 text-[#4A1529]'
                  }`}>
                    {opt.id}
                  </span>
                  <span className="flex-1 leading-snug">{opt.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Action Bar (Pinned stickily to the very edge of the screen) */}
      <footer className="sticky bottom-0 inset-x-0 w-full bg-bg/95 backdrop-blur-md border-t-[3px] border-[#4A1529] py-3 sm:py-4 px-4 sm:px-10 flex justify-center z-30 shadow-[0_-4px_16px_rgba(74,21,41,0.08)] pb-[env(safe-area-inset-bottom,0.75rem)]">
        <div className="w-full lg:w-[65%] xl:w-[60%] flex justify-between items-center gap-3">
          <button 
            onClick={handleSkip}
            disabled={showRationale}
            className={`px-6 sm:px-12 py-2.5 sm:py-3.5 rounded-xl border-[3px] border-[#4A1529] bg-card text-[#4A1529] font-heading font-black text-base sm:text-xl transition-all shadow-[0px_4px_0px_0px_#4A1529] ${
              showRationale 
                ? 'opacity-40 cursor-not-allowed shadow-none translate-y-0.5 border-[#4A1529]/40 text-[#4A1529]/40' 
                : 'hover:bg-[#F7C4D5]/40 hover:-translate-y-0.5 active:translate-y-1 active:shadow-none cursor-pointer'
            }`}
          >
            SKIP
          </button>
          
          <button 
            onClick={showRationale ? handleNext : handleCheck}
            disabled={!selectedOption && !showRationale}
            className={`px-6 sm:px-12 py-2.5 sm:py-3.5 rounded-xl font-heading font-black text-base sm:text-xl border-[3px] border-[#4A1529] transition-all active:translate-y-1 active:shadow-none
              ${(selectedOption || showRationale) 
                ? 'bg-[#D42F6B] text-white hover:bg-[#b02456] shadow-[0px_4px_0px_0px_#4A1529] hover:-translate-y-0.5 cursor-pointer' 
                : 'bg-[#F7C4D5]/70 text-[#855264]/60 border-[#855264]/30 cursor-not-allowed shadow-none opacity-80'
              }
            `}
          >
            {showRationale ? 'NEXT' : 'CHECK'}
          </button>
        </div>
      </footer>

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
