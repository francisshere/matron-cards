import React from 'react';
import logo from './assets/matron-logo.svg';
import Sidebar from './Sidebar';

import fundamentalsIcon from './assets/fundamentals.svg';
import maternalIcon from './assets/maternal.svg';
import surgicalIcon from './assets/surgical.svg';
import psychIcon from './assets/psych.svg';
import pharmacologyIcon from './assets/pharmacology.svg';
import communicableIcon from './assets/communicable.svg';

export default function Mnemonics({ onViewChange }) {
  const cards = [
    { title: 'Fundamentals', icon: fundamentalsIcon },
    { title: 'Maternal & Child', icon: maternalIcon },
    { title: 'Medical & Surgical', icon: surgicalIcon },
    { title: 'Psychiatric', icon: psychIcon },
    { title: 'Pharmacology', icon: pharmacologyIcon },
    { title: 'Communicable Diseases', icon: communicableIcon }
  ];

  return (
    <div className="min-h-screen bg-transparent flex flex-col lg:flex-row text-text font-body">
      {/* Mobile Header */}
      <div className="lg:hidden w-full p-6 border-b-[4px] border-[#855264] flex justify-center bg-bg shadow-sm z-20">
        <img src={logo} alt="Matron Logo" className="w-40 h-auto" />
      </div>

      <Sidebar activeView="mnemonics" onViewChange={onViewChange} />

      {/* Main Content Area */}
      <main className="w-full md:w-[calc(100%-6rem)] lg:w-[calc(100%-16rem)] md:ml-24 lg:ml-64 p-4 sm:p-8 pb-28 md:pb-8 flex justify-center">
        <div className="w-full max-w-4xl flex flex-col items-center">
          
          {/* Header Card */}
          <div className="bg-white border-[3px] border-[#4A1529] rounded-xl sm:rounded-2xl p-6 sm:p-10 mb-8 w-full max-w-3xl shadow-[0px_6px_0px_0px_#4A1529]">
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-black mb-4 uppercase tracking-wide">
              MNEMONICS
            </h1>
            <p className="font-body text-sm sm:text-base text-black font-medium max-w-lg leading-relaxed">
              Mnemonics that can help you understand topics quickly. Memorize and use these well!
            </p>
          </div>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl w-full pb-10">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="bg-white border-[3px] border-[#4A1529] rounded-xl sm:rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-[0px_6px_0px_0px_#4A1529] hover:translate-y-1 hover:shadow-none transition-all cursor-pointer min-h-[220px]"
              >
                <img src={card.icon} alt={card.title} className="w-32 h-32 mb-6 object-contain" />
                <h2 className="font-heading font-black text-xl sm:text-2xl text-black">
                  {card.title}
                </h2>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
