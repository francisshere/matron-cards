import React from 'react';

export function QuizActionBar({
  showRationale,
  hasSelection,
  onSkip,
  onCheckOrNext,
}) {
  return (
    <footer className="sticky bottom-0 inset-x-0 w-full bg-bg/95 backdrop-blur-md border-t-[3px] border-[#4A1529] py-3 sm:py-4 px-4 sm:px-10 flex justify-center z-30 shadow-[0_-4px_16px_rgba(74,21,41,0.08)] pb-[env(safe-area-inset-bottom,0.75rem)]">
      <div className="w-full lg:w-[65%] xl:w-[60%] flex justify-between items-center gap-3">
        <button
          type="button"
          onClick={onSkip}
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
          type="button"
          onClick={onCheckOrNext}
          disabled={!hasSelection && !showRationale}
          className={`px-6 sm:px-12 py-2.5 sm:py-3.5 rounded-xl font-heading font-black text-base sm:text-xl border-[3px] border-[#4A1529] transition-all active:translate-y-1 active:shadow-none ${
            hasSelection || showRationale
              ? 'bg-[#D42F6B] text-white hover:bg-[#b02456] shadow-[0px_4px_0px_0px_#4A1529] hover:-translate-y-0.5 cursor-pointer'
              : 'bg-[#F7C4D5]/70 text-[#855264]/60 border-[#855264]/30 cursor-not-allowed shadow-none opacity-80'
          }`}
        >
          {showRationale ? 'NEXT' : 'CHECK'}
        </button>
      </div>
    </footer>
  );
}

export default React.memo(QuizActionBar);
