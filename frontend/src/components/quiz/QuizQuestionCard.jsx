import React from 'react';
import avatarNurse from '../../assets/avatar-main-no-bg.svg';
import explainIcon from '../../assets/explain.svg';

export function QuizQuestionCard({
  question,
  selectedOption,
  showRationale,
  onSelectOption,
  onClearOption,
}) {
  if (!question) return null;

  const isCorrect = selectedOption === question.correct_option;
  const selectedObj = question.options.find(o => o.id === selectedOption);

  return (
    <div className="flex flex-col">
      {/* Title */}
      <div className="mb-2 sm:mb-3 text-left">
        <h2 className="text-[#855264] font-black tracking-wider text-[11px] sm:text-xs uppercase mb-0.5">
          {question.course}
        </h2>
        <h1 className="text-lg sm:text-2xl md:text-3xl font-heading text-text font-black leading-snug">
          {question.topic}
        </h1>
      </div>

      {/* Speech Bubble Area */}
      <div className="flex flex-row items-center sm:items-start gap-3 sm:gap-6 mb-3 sm:mb-4 relative">
        <div className="w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 shrink-0 relative z-10 flex items-center justify-center">
          <img
            src={showRationale ? explainIcon : avatarNurse}
            alt="Mascot Avatar"
            className={`w-full h-full object-contain drop-shadow-md transition-all duration-300 ${
              showRationale && isCorrect ? 'animate-bounce-pop' : ''
            }`}
          />
        </div>

        <div
          className={`border-[3px] sm:border-4 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-[0px_4px_0px_0px_#4A1529] relative flex-1 min-w-0 transition-colors duration-300 ${
            showRationale
              ? isCorrect
                ? 'border-green-500 bg-green-50/90'
                : 'border-red-500 bg-red-50/90 animate-shake'
              : 'border-[#4A1529] bg-card'
          }`}
        >
          {/* Speech bubble tail */}
          <div
            className={`absolute top-5 sm:top-8 -left-[9px] sm:-left-[13px] w-4 h-4 sm:w-6 sm:h-6 border-l-[3px] sm:border-l-4 border-b-[3px] sm:border-b-4 transform rotate-45 transition-colors duration-300 ${
              showRationale
                ? isCorrect
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-500 bg-red-50'
                : 'bg-card border-[#4A1529]'
            }`}
          />

          {showRationale ? (
            <div>
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b-2 border-[#4A1529]/10">
                <span
                  className={`inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm animate-bounce-pop ${
                    isCorrect ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                  }`}
                >
                  {isCorrect ? '🎉 CORRECT!' : '❌ INCORRECT'}
                </span>
                <span className="font-heading font-black text-xs sm:text-sm text-text uppercase tracking-wide">
                  Rationale
                </span>
              </div>
              <div className="text-text font-body font-semibold text-xs sm:text-base leading-relaxed max-h-36 sm:max-h-48 overflow-y-auto pr-1 whitespace-pre-line scrollbar-thin">
                {question.rationale ||
                  `The correct answer is (${question.correct_option}) ${
                    question.options.find(o => o.id === question.correct_option)?.text || ''
                  }. (Note: No extended explanation was published for this item in the reference exam.)`}
              </div>
            </div>
          ) : (
            <div>
              <span className="font-heading font-black text-xs text-text/70 block mb-1 uppercase tracking-wide border-b-2 border-[#4A1529]/10 pb-0.5">
                Question
              </span>
              <div className="max-h-32 sm:max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                <p className="text-text font-body font-semibold text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {question.question_stem}
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
            type="button"
            onClick={() => !showRationale && onClearOption()}
            className={`w-full min-h-[50px] sm:min-h-[60px] p-3 sm:p-4 rounded-2xl text-left font-body font-semibold text-sm sm:text-base transition-all duration-200 shadow-[0px_4px_0px_0px_#4A1529] border-[3px] border-[#4A1529] text-white flex items-center justify-start ${
              showRationale
                ? isCorrect
                  ? 'bg-[#22c55e]'
                  : 'bg-[#ef4444]'
                : 'bg-primary hover:bg-primary/95 cursor-pointer active:scale-[0.99]'
            }`}
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 text-white font-heading font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mr-3">
              {selectedOption}
            </span>
            <span className="flex-1 leading-snug">{selectedObj?.text}</span>
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
        {question.options.map((opt) => {
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
                <span className="font-body font-semibold text-xs sm:text-base text-text/30 line-clamp-2 select-none">
                  {opt.text}
                </span>
              </div>
            );
          }

          let btnClass =
            'w-full min-h-[50px] sm:min-h-[60px] flex items-center justify-start p-3 sm:p-4 rounded-2xl border-[3px] text-left font-body font-semibold text-xs sm:text-base transition-all duration-200 shadow-[0px_4px_0px_0px_#4A1529] bg-card border-[#4A1529] text-[#4A1529] hover:bg-[#F7C4D5]/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none cursor-pointer';

          if (showRationale && opt.id === question.correct_option) {
            btnClass =
              'w-full min-h-[50px] sm:min-h-[60px] flex items-center justify-start p-3 sm:p-4 rounded-2xl border-[3px] text-left font-body font-bold text-xs sm:text-base transition-all duration-200 shadow-[0px_4px_0px_0px_#16a34a] bg-[#D1FAE5] border-[#16a34a] text-[#065F46]';
          }

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => !showRationale && onSelectOption(opt.id)}
              className={btnClass}
              disabled={showRationale}
            >
              <span
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-heading font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mr-3 ${
                  showRationale && opt.id === question.correct_option
                    ? 'bg-[#16a34a] text-white'
                    : 'bg-[#4A1529]/10 text-[#4A1529]'
                }`}
              >
                {opt.id}
              </span>
              <span className="flex-1 leading-snug">{opt.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(QuizQuestionCard);
