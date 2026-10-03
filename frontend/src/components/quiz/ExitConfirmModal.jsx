import React from 'react';

export function ExitConfirmModal({ isOpen, onClose, onConfirmExit }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-text/50 z-[100] flex items-center justify-center p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="bg-card w-full max-w-sm rounded-3xl p-6 sm:p-8 shadow-xl text-center animate-bounce-pop border-[3px] border-[#4A1529]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-heading font-bold text-text mb-4">Wait!</h2>
        <p className="font-body text-text/80 mb-8 font-semibold">
          Are you sure you want to quit? Your progress will be lost.
        </p>
        <div className="flex flex-col space-y-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-4 rounded-full bg-primary text-white font-heading font-bold shadow-[0px_6px_4px_0px_#E97CA1] hover:bg-primary/90 transition-all active:translate-y-1 active:shadow-none uppercase tracking-wide cursor-pointer"
          >
            Continue Reviewing
          </button>
          <button
            type="button"
            onClick={onConfirmExit}
            className="w-full py-4 rounded-full font-heading font-bold text-red-500 hover:bg-red-50 transition-all uppercase tracking-wide cursor-pointer"
          >
            End Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ExitConfirmModal);
