import React from 'react';
import { X, Settings } from 'lucide-react';
import lampIcon from '../../assets/lamp-no-bg.svg';
import { QUIZ_CONFIG } from '../../config/constants';

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export function QuizHeader({
  currentIndex,
  totalQuestions,
  timeRemaining,
  gamemode,
  lives,
  onOpenSettings,
  onOpenExitConfirm,
}) {
  const progressPercent = totalQuestions > 0 ? (currentIndex / totalQuestions) * 100 : 0;
  const isTimeCritical = timeRemaining !== null && timeRemaining < QUIZ_CONFIG.TIMER_ALARM_THRESHOLD_SECONDS;

  return (
    <header className="flex items-center justify-between mb-3 sm:mb-5">
      <div className="flex items-center space-x-1 sm:space-x-2">
        <button
          onClick={onOpenExitConfirm}
          className="text-text hover:text-primary transition-colors p-1.5 sm:p-2 rounded-full hover:bg-text/5 cursor-pointer"
          title="Exit Quiz"
          type="button"
        >
          <X className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
        </button>
        <button
          onClick={onOpenSettings}
          className="text-text hover:text-primary transition-colors p-1.5 sm:p-2 rounded-full hover:bg-text/5 cursor-pointer"
          title="Settings"
          type="button"
        >
          <Settings className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
        </button>
      </div>

      <div className="flex-1 mx-3 sm:mx-8 relative h-6 sm:h-7 bg-card border-2 border-[#4A1529]/20 rounded-full overflow-hidden shadow-sm">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-light to-primary rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-heading font-bold text-text z-10">
          {currentIndex + 1} of {totalQuestions}
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4 drop-shadow-sm ml-1 sm:ml-2">
        {timeRemaining !== null && (
          <div
            className={`font-heading font-black text-base sm:text-xl transition-colors ${
              isTimeCritical ? 'text-red-500 animate-pulse' : 'text-text'
            }`}
          >
            {formatTime(timeRemaining)}
          </div>
        )}
        <div className={`flex items-center space-x-1 sm:space-x-1.5 transition-opacity ${gamemode ? 'opacity-100' : 'opacity-0'}`}>
          <img src={lampIcon} alt="Lamp" className="w-7 h-7 sm:w-10 sm:h-10 object-contain" />
          <span className="font-body font-black text-mid text-xl sm:text-2xl">{lives}</span>
        </div>
      </div>
    </header>
  );
}

export default React.memo(QuizHeader);
