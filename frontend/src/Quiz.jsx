import { useState } from 'react';
import { useQuizEngine } from './hooks/useQuizEngine';
import QuizHeader from './components/quiz/QuizHeader';
import QuizQuestionCard from './components/quiz/QuizQuestionCard';
import QuizActionBar from './components/quiz/QuizActionBar';
import QuizSettingsModal from './components/quiz/QuizSettingsModal';
import ExitConfirmModal from './components/quiz/ExitConfirmModal';
import QuizResultsModal from './components/quiz/QuizResultsModal';

export default function Quiz({ onBack, topicFilter }) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [exitConfirmOpen, setExitConfirmOpen] = useState(false);

  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    lives,
    selectedOption,
    showRationale,
    gameOver,
    quizFinished,
    timeRemaining,
    gamemode,
    randomize,
    questionCount,
    customCount,
    timeLimitEnabled,
    timeLimitHours,
    timeLimitMinutes,
    timeLimitSeconds,
    accuracy,
    startNewGame,
    handleCheck,
    handleNext,
    handleSkip,
    selectOption,
    clearOption,
  } = useQuizEngine({ topicFilter });

  if (!currentQuestion && !gameOver && !quizFinished) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center font-heading text-xl">
        Loading...
      </div>
    );
  }

  // Handle Game Over or Finished States
  if (gameOver || quizFinished) {
    return (
      <QuizResultsModal
        gameOver={gameOver}
        quizFinished={quizFinished}
        accuracy={accuracy}
        onRestart={() => startNewGame()}
        onExit={onBack}
      />
    );
  }

  return (
    <div className="min-h-screen h-[100dvh] bg-transparent flex flex-col justify-between overflow-hidden relative font-body text-text">
      {/* Scrollable Main Area */}
      <main className="flex-1 w-full overflow-y-auto scrollbar-thin px-3.5 sm:px-8 py-3 sm:py-5 pb-32 sm:pb-36">
        <div className="w-full lg:w-[65%] xl:w-[60%] mx-auto flex flex-col">
          <QuizHeader
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
            timeRemaining={timeRemaining}
            gamemode={gamemode}
            lives={lives}
            onOpenSettings={() => setSettingsOpen(true)}
            onOpenExitConfirm={() => setExitConfirmOpen(true)}
          />

          <QuizQuestionCard
            question={currentQuestion}
            selectedOption={selectedOption}
            showRationale={showRationale}
            onSelectOption={selectOption}
            onClearOption={clearOption}
          />
        </div>
      </main>

      {/* Sticky Bottom Actions */}
      <QuizActionBar
        showRationale={showRationale}
        hasSelection={Boolean(selectedOption)}
        onSkip={handleSkip}
        onCheckOrNext={showRationale ? handleNext : handleCheck}
      />

      {/* Settings Modal */}
      <QuizSettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        topicFilter={topicFilter}
        initialSettings={{
          gamemode,
          randomize,
          questionCount,
          customCount,
          timeLimitEnabled,
          timeLimitHours,
          timeLimitMinutes,
          timeLimitSeconds,
        }}
        onApply={(newSettings) => startNewGame(newSettings)}
      />

      {/* Exit Confirmation Modal */}
      <ExitConfirmModal
        isOpen={exitConfirmOpen}
        onClose={() => setExitConfirmOpen(false)}
        onConfirmExit={onBack}
      />
    </div>
  );
}
