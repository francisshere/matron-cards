import React from 'react';
import tiredIcon from '../../assets/tired.svg';
import avatarNurse from '../../assets/avatar-main-no-bg.svg';

export function QuizResultsModal({
  gameOver,
  quizFinished,
  accuracy,
  onRestart,
  onExit,
}) {
  if (gameOver) {
    return (
      <div className="min-h-screen h-[100dvh] bg-transparent flex items-center justify-center p-4 sm:p-6">
        <div className="bg-card p-6 sm:p-8 rounded-3xl text-center shadow-[0px_6px_0px_0px_#4A1529] border-[3px] border-[#4A1529] max-w-sm w-full animate-bounce-pop">
          <img
            src={tiredIcon}
            alt="Game Over"
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 drop-shadow-md"
          />
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-text mb-2">
            Game Over!
          </h2>
          <p className="font-body text-text/80 mb-6 font-semibold text-sm sm:text-base">
            You ran out of lives (5 mistakes).
          </p>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={onRestart}
              className="w-full py-3.5 rounded-xl bg-primary text-white font-heading font-black border-[3px] border-[#4A1529] shadow-[0px_4px_0px_0px_#4A1529] hover:bg-primary/90 transition-all active:translate-y-1 active:shadow-none cursor-pointer"
            >
              Try Again
            </button>
            <button
              type="button"
              onClick={onExit}
              className="w-full py-3 rounded-xl bg-white text-[#4A1529] font-heading font-bold border-[2px] border-[#4A1529] hover:bg-[#F7C4D5]/30 transition-all cursor-pointer"
            >
              Exit to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <div className="min-h-screen h-[100dvh] bg-transparent flex items-center justify-center p-4 sm:p-6">
        <div className="bg-card p-6 sm:p-8 rounded-3xl text-center shadow-[0px_6px_0px_0px_#4A1529] border-[3px] border-[#4A1529] max-w-sm w-full animate-bounce-pop">
          <img
            src={avatarNurse}
            alt="Success"
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 drop-shadow-md"
          />
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-text mb-2">
            Review Complete!
          </h2>
          <p className="font-body text-text/80 mb-2 font-semibold text-sm sm:text-base">
            Great job finishing the quiz.
          </p>
          <p className="font-body text-text mb-6 font-black text-xl sm:text-2xl tracking-wide">
            Accuracy: {accuracy}%
          </p>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={onRestart}
              className="w-full py-3.5 rounded-xl bg-primary text-white font-heading font-black border-[3px] border-[#4A1529] shadow-[0px_4px_0px_0px_#4A1529] hover:bg-primary/90 transition-all active:translate-y-1 active:shadow-none cursor-pointer"
            >
              Review Again
            </button>
            <button
              type="button"
              onClick={onExit}
              className="w-full py-3 rounded-xl bg-white text-[#4A1529] font-heading font-bold border-[2px] border-[#4A1529] hover:bg-[#F7C4D5]/30 transition-all cursor-pointer"
            >
              Back to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default React.memo(QuizResultsModal);
