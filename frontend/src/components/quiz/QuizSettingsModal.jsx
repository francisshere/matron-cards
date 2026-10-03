import React, { useState } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';
import { QUIZ_CONFIG } from '../../config/constants';
import { questionService } from '../../services/questionService';

export function QuizSettingsModal({
  isOpen,
  onClose,
  topicFilter,
  initialSettings,
  onApply,
}) {
  const [gamemode, setGamemode] = useState(initialSettings.gamemode);
  const [randomize, setRandomize] = useState(initialSettings.randomize);
  const [questionCount, setQuestionCount] = useState(initialSettings.questionCount);
  const [customCount, setCustomCount] = useState(initialSettings.customCount);
  const [timeLimitEnabled, setTimeLimitEnabled] = useState(initialSettings.timeLimitEnabled);
  const [timeLimitHours, setTimeLimitHours] = useState(initialSettings.timeLimitHours);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState(initialSettings.timeLimitMinutes);
  const [timeLimitSeconds, setTimeLimitSeconds] = useState(initialSettings.timeLimitSeconds);
  const [customError, setCustomError] = useState('');

  if (!isOpen) return null;

  const maxAvailable = questionService.getTotalCount(topicFilter);

  const handleApply = () => {
    let finalCount = questionCount;
    if (questionCount === 'custom') {
      const parsed = Number(customCount);
      if (!Number.isInteger(parsed) || parsed <= 0 || parsed > maxAvailable) {
        setCustomError('Invalid number.');
        return;
      }
      finalCount = parsed;
    }

    onApply({
      gamemode,
      randomize,
      questionCount: finalCount,
      customCount,
      timeLimitEnabled,
      timeLimitHours,
      timeLimitMinutes,
      timeLimitSeconds,
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-text/50 z-[100] flex items-center justify-center p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="bg-card w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading font-bold text-text">Review Settings</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-text hover:text-primary p-1 cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Gamemode Toggle */}
          <div>
            <label className="flex items-center justify-between cursor-pointer group">
              <span className="font-body font-semibold text-lg text-text">Lamp (Lives) Gamemode</span>
              <div
                className={`w-14 h-8 rounded-full p-1 transition-colors ${
                  gamemode ? 'bg-primary' : 'bg-text/20'
                }`}
                onClick={() => setGamemode(!gamemode)}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full transition-transform ${
                    gamemode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </div>
            </label>
            <p className="text-sm font-body text-text/60 mt-1 font-semibold">
              Lose a life for incorrect answers and skips.
            </p>
          </div>

          {/* Randomize Questions */}
          <div>
            <label className="flex items-center justify-between cursor-pointer group">
              <span className="font-body font-semibold text-lg text-text">Randomize Questions</span>
              <div
                className={`w-14 h-8 rounded-full p-1 transition-colors ${
                  randomize ? 'bg-primary' : 'bg-text/20'
                }`}
                onClick={() => setRandomize(!randomize)}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full transition-transform ${
                    randomize ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </div>
            </label>
            <p className="text-sm font-body text-text/60 mt-1 font-semibold">
              Shuffle the question order every time you start.
            </p>
          </div>

          {/* Time Limit */}
          <div>
            <label className="flex items-center justify-between cursor-pointer group">
              <span className="font-body font-semibold text-lg text-text">Time Limit</span>
              <div
                className={`w-14 h-8 rounded-full p-1 transition-colors ${
                  timeLimitEnabled ? 'bg-primary' : 'bg-text/20'
                }`}
                onClick={() => setTimeLimitEnabled(!timeLimitEnabled)}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full transition-transform ${
                    timeLimitEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </div>
            </label>
            <p className="text-sm font-body text-text/60 mt-1 font-semibold">
              Set a timer for the entire quiz session.
            </p>

            {timeLimitEnabled && (
              <div className="mt-4 flex flex-col items-center bg-card border-2 border-text/10 rounded-2xl p-6 shadow-sm">
                {/* Up Arrows */}
                <div className="flex justify-between w-full max-w-[280px] px-6 mb-3">
                  <button
                    type="button"
                    onClick={() => setTimeLimitHours((h) => (h + 1) % 24)}
                    className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full cursor-pointer"
                  >
                    <ChevronUp className="w-8 h-8" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeLimitMinutes((m) => (m + 1) % 60)}
                    className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full cursor-pointer"
                  >
                    <ChevronUp className="w-8 h-8" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeLimitSeconds((s) => (s + 1) % 60)}
                    className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full cursor-pointer"
                  >
                    <ChevronUp className="w-8 h-8" strokeWidth={3} />
                  </button>
                </div>

                {/* Time Inputs */}
                <div className="flex items-center justify-center space-x-1 w-full max-w-[280px]">
                  <input
                    type="text"
                    value={timeLimitHours.toString().padStart(2, '0')}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setTimeLimitHours(Math.min(23, Number(val)));
                    }}
                    className="w-20 py-3 rounded-xl bg-text/5 text-center font-heading text-4xl sm:text-5xl font-black text-text outline-none focus:bg-text/10 focus:ring-4 focus:ring-primary/30 transition-all"
                  />
                  <span className="text-4xl sm:text-5xl font-black text-text/40 pb-1">:</span>
                  <input
                    type="text"
                    value={timeLimitMinutes.toString().padStart(2, '0')}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setTimeLimitMinutes(Math.min(59, Number(val)));
                    }}
                    className="w-20 py-3 rounded-xl bg-text/5 text-center font-heading text-4xl sm:text-5xl font-black text-text outline-none focus:bg-text/10 focus:ring-4 focus:ring-primary/30 transition-all"
                  />
                  <span className="text-4xl sm:text-5xl font-black text-text/40 pb-1">:</span>
                  <input
                    type="text"
                    value={timeLimitSeconds.toString().padStart(2, '0')}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setTimeLimitSeconds(Math.min(59, Number(val)));
                    }}
                    className="w-20 py-3 rounded-xl bg-text/5 text-center font-heading text-4xl sm:text-5xl font-black text-text outline-none focus:bg-text/10 focus:ring-4 focus:ring-primary/30 transition-all"
                  />
                </div>

                {/* Down Arrows */}
                <div className="flex justify-between w-full max-w-[280px] px-6 mt-3">
                  <button
                    type="button"
                    onClick={() => setTimeLimitHours((h) => (h - 1 + 24) % 24)}
                    className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full cursor-pointer"
                  >
                    <ChevronDown className="w-8 h-8" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeLimitMinutes((m) => (m - 1 + 60) % 60)}
                    className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full cursor-pointer"
                  >
                    <ChevronDown className="w-8 h-8" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeLimitSeconds((s) => (s - 1 + 60) % 60)}
                    className="p-2 text-text/40 hover:text-primary transition-colors hover:bg-text/5 rounded-full cursor-pointer"
                  >
                    <ChevronDown className="w-8 h-8" strokeWidth={3} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Number of Questions */}
          <div>
            <span className="font-body font-semibold text-lg text-text block mb-3">
              Number of Questions
            </span>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {QUIZ_CONFIG.COUNT_PRESETS.map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    setQuestionCount(num);
                    setCustomCount('');
                    setCustomError('');
                  }}
                  className={`py-3 rounded-xl font-heading text-lg border-2 transition-all cursor-pointer ${
                    questionCount === num
                      ? 'bg-mid text-white border-mid'
                      : 'bg-transparent border-text/20 text-text/80 hover:border-mid/50'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => {
                  setQuestionCount('custom');
                  setCustomError('');
                }}
                className={`flex-1 py-3 rounded-xl font-heading text-lg border-2 transition-all cursor-pointer ${
                  questionCount === 'custom'
                    ? 'bg-mid text-white border-mid'
                    : 'bg-transparent border-text/20 text-text/80 hover:border-mid/50'
                }`}
              >
                Custom
              </button>
              {questionCount === 'custom' && (
                <input
                  type="number"
                  value={customCount}
                  onChange={(e) => {
                    setCustomCount(e.target.value);
                    setCustomError('');
                  }}
                  placeholder={`Max ${maxAvailable}`}
                  className={`w-24 p-3 rounded-xl border-2 outline-none font-body text-center font-bold text-text bg-transparent ${
                    customError ? 'border-red-500' : 'border-mid'
                  }`}
                  min="1"
                  max={maxAvailable}
                />
              )}
            </div>
            {customError && (
              <p className="text-red-500 text-sm font-semibold mt-2">{customError}</p>
            )}
          </div>

          <button
            type="button"
            onClick={handleApply}
            className="w-full mt-4 py-4 rounded-full bg-primary text-white font-heading font-bold shadow-[0px_6px_4px_0px_#E97CA1] hover:bg-primary/90 transition-all active:translate-y-1 active:shadow-none cursor-pointer"
          >
            Apply & Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(QuizSettingsModal);
