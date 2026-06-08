import React, { useState } from 'react';
import { X } from 'lucide-react';
import avatarNurse from './assets/avatar-main-no-bg.svg';
import lampIcon from './assets/lamp-no-bg.svg';

const questionData = {
  id: 1,
  course: "PNLE I",
  topic: "Foundation of Professional Nursing Practice",
  question_stem: "The nurse in-charge in labor and delivery unit administered a dose of terbutaline to a client without checking the client's pulse. The standard that would be used to determine if the nurse was negligent is:",
  options: [
    { id: 'A', text: "The physician's orders." },
    { id: 'B', text: "The action of a clinical nurse specialist who is recognized expert in the field." },
    { id: 'C', text: "The statement in the drug literature about administration of terbutaline." },
    { id: 'D', text: "The actions of a reasonably prudent nurse with similar education and experience." }
  ],
  correct_option: "D"
};

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="min-h-screen bg-bg flex justify-center">
      <div className="w-full max-w-3xl flex flex-col pt-8 pb-32 px-6 sm:px-12 relative min-h-screen">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <button className="text-text hover:text-primary transition-colors p-2">
            <X className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={3} />
          </button>
          
          <div className="flex-1 mx-4 sm:mx-8 relative h-8 sm:h-10 bg-card border-2 border-text/10 rounded-full overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-light to-mid rounded-full w-[22%]" />
            <div className="absolute inset-0 flex items-center justify-center text-sm sm:text-base font-body font-semibold text-text z-10">
              11 of 50
            </div>
          </div>
          
          <div className="flex items-center space-x-2 drop-shadow-sm ml-4">
            <img src={lampIcon} alt="Lamp" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
            <span className="font-body font-bold text-mid text-3xl">5</span>
          </div>
        </header>

        {/* Title */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-muted font-bold tracking-wider text-sm mb-1 uppercase">{questionData.course}</h2>
          <h1 className="text-2xl sm:text-3xl font-heading text-text font-black">{questionData.topic}</h1>
        </div>

        {/* Question Area */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8 relative">
          <div className="w-56 h-56 sm:w-72 sm:h-72 shrink-0 relative mb-4 sm:mb-0 sm:mr-6 z-10">
            <img 
              src={avatarNurse} 
              alt="Snake Nurse Avatar" 
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          
          <div className="bg-card border-4 border-text/60 rounded-3xl p-6 sm:p-8 shadow-sm relative w-full z-0">
            {/* Speech bubble tail */}
            <div className="hidden sm:block absolute top-12 -left-[14px] w-6 h-6 bg-card border-l-4 border-b-4 border-text/60 transform rotate-45"></div>
            <div className="sm:hidden absolute -top-[14px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-card border-t-4 border-l-4 border-text/60 rotate-45"></div>
            
            <p className="text-text font-body font-semibold text-sm sm:text-base leading-relaxed">
              {questionData.question_stem}
            </p>
          </div>
        </div>

        {/* Answer Container */}
        <div className="w-full border-t-2 border-b-2 border-text/80 py-3 sm:py-4 mb-8 min-h-[88px] sm:min-h-[104px] flex flex-col justify-center">
          {selectedOption && (
            <button
              onClick={() => setSelectedOption(null)}
              className="w-full p-4 sm:p-5 rounded-2xl text-center font-body font-semibold text-base sm:text-lg transition-all duration-200 shadow-[0px_6px_4px_0px_#E97CA1] bg-primary text-white scale-[1.02] sm:scale-100"
            >
              {questionData.options.find(o => o.id === selectedOption).text}
            </button>
          )}
        </div>

        {/* Options */}
        <div className="space-y-4">
          {questionData.options.map((opt) => {
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

            return (
              <button
                key={opt.id}
                onClick={() => setSelectedOption(opt.id)}
                className="w-full p-4 sm:p-5 rounded-2xl border-[3px] text-center font-body font-semibold text-base sm:text-lg transition-all duration-200 shadow-[0px_6px_4px_0px_#E97CA1] bg-card border-[#F7C4D5] text-text/80 hover:border-mid hover:bg-light/10 hover:-translate-y-0.5"
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
            className="px-8 sm:px-14 py-4 sm:py-5 rounded-full border-4 border-text/30 bg-card text-text/70 font-heading font-bold text-xl sm:text-2xl hover:bg-text/5 hover:border-text/40 transition-all shadow-[0px_6px_4px_0px_#E97CA1] active:translate-y-1 active:shadow-none"
          >
            SKIP
          </button>
          
          <button 
            className={`px-8 sm:px-14 py-4 sm:py-5 rounded-full font-heading font-bold text-xl sm:text-2xl transition-all shadow-[0px_6px_4px_0px_#E97CA1] active:translate-y-1 active:shadow-none
              ${selectedOption 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-light text-white/90 cursor-not-allowed shadow-none opacity-80'
              }
            `}
          >
            CHECK
          </button>
        </div>
      </div>
    </div>
  );
}
