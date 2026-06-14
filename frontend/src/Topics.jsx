import React, { useState } from 'react';

import logo from './assets/matron-logo.svg';
import learnIcon from './assets/learn-icon.svg';
import topicsIcon from './assets/topics-icon.svg';
import profileIcon from './assets/profile-icon.svg';

export default function Topics({ onViewChange, onStartQuiz }) {
  const [activeSet, setActiveSet] = useState(1);
  const [activeCategory, setActiveCategory] = useState('Sets');
  const [activeSubcategory, setActiveSubcategory] = useState('Set 1');

  // Example data based on the images
  const sets = [
    {
      id: 1,
      name: "SET 1",
      colorClass: "border-[#4A1529]",
      textClass: "text-[#4A1529]",
      bgClass: "bg-[#4A1529]",
      hoverBgClass: "hover:bg-[#3d1122]",
      items: [
        { title: "Philippine Nursing Licensure Exam I", subtitle: "Foundation of Professional Nursing Practice", count: 100 },
        { title: "Philippine Nursing Licensure Exam II", subtitle: "Community Health Nursing and Care of the Mother and Child", count: 100 },
        { title: "Philippine Nursing Licensure Exam III", subtitle: "Care of Clients with Physiologic and Psychosocial Alterations (Part 1)", count: 100 },
        { title: "Philippine Nursing Licensure Exam IV", subtitle: "Care of Clients with Physiologic and Psychosocial Alterations (Part 2)", count: 100 },
        { title: "Philippine Nursing Licensure Exam V", subtitle: "Care of Clients with Physiologic and Psychosocial Alterations (Part 3)", count: 100 }
      ]
    },
    {
      id: 2,
      name: "SET 2",
      colorClass: "border-[#D42F6B]",
      textClass: "text-[#D42F6B]",
      bgClass: "bg-[#D42F6B]",
      hoverBgClass: "hover:bg-[#b02456]",
      items: [
        { title: "Philippine Nursing Licensure Exam I", subtitle: "Nursing Practice", count: 50 },
        { title: "Philippine Nursing Licensure Exam II", subtitle: "Nursing Practice", count: 50 },
        { title: "Philippine Nursing Licensure Exam III", subtitle: "Nursing Practice", count: 50 },
        { title: "Philippine Nursing Licensure Exam IV", subtitle: "Nursing Practice", count: 50 }
      ]
    }
  ];

  const currentSetData = sets.find(s => s.id === activeSet);

  return (
    <div className="min-h-screen bg-bg flex flex-col lg:flex-row text-text font-body">

      {/* Mobile Header */}
      <div className="lg:hidden w-full p-6 border-b-[4px] border-[#855264] flex justify-center bg-bg shadow-sm z-20">
        <img src={logo} alt="Matron Logo" className="w-40 h-auto" />
      </div>

      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex w-64 fixed left-0 top-0 h-full bg-bg border-r-[2px] border-muted flex-col p-4 z-20">
        <div className="flex items-center justify-center mb-8 mt-2 px-2">
          <a href="#" onClick={() => onViewChange('home')}>
            <img src={logo} alt="Matron Logo" className="w-48 h-auto hover:opacity-80 transition-opacity" />
          </a>
        </div>

        <nav className="flex flex-col space-y-2 flex-1 w-full items-center">
          {/* Inactive Item */}
          <a href="#" onClick={() => onViewChange('home')} className="flex items-center w-full py-3 px-4 rounded-xl border-[2px] border-transparent hover:border-muted hover:bg-primary/5 text-muted transition-colors group">
            <div className="w-12 h-12 mr-4 flex items-center justify-center shrink-0">
              <img src={learnIcon} alt="Learn" className="w-12 h-12 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-black tracking-widest uppercase text-sm">Learn</span>
          </a>

          {/* Active Item */}
          <a href="#" className="flex items-center w-full py-3 px-4 rounded-xl border-[2px] border-primary bg-primary/10 text-primary transition-colors group">
            <div className="w-12 h-12 mr-4 flex items-center justify-center shrink-0">
              <img src={topicsIcon} alt="Topics" className="w-12 h-12 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-black tracking-widest uppercase text-sm">Topics</span>
          </a>

          <a href="#" className="flex items-center w-full py-3 px-4 rounded-xl border-[2px] border-transparent hover:border-muted hover:bg-primary/5 text-muted transition-colors group">
            <div className="w-12 h-12 mr-4 flex items-center justify-center shrink-0">
              <img src={profileIcon} alt="Profile" className="w-12 h-12 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-black tracking-widest uppercase text-sm">Profile</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="w-full lg:w-[calc(100%-16rem)] lg:ml-64 p-4 sm:p-8 flex justify-center">
        <div className="w-full max-w-4xl flex flex-col">

          {/* Search Bar */}
          <div className="w-full mb-8 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-[#855264]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="w-full bg-[#F7C4D5]/50 focus:bg-[#F7C4D5]/20 border-none rounded-xl py-4 pl-12 pr-4 text-[#855264] placeholder-[#855264] text-lg font-body focus:outline-none focus:ring-2 focus:ring-[#D42F6B] transition-all shadow-sm"
              placeholder="Sets, topics, questions"
            />
          </div>

          {/* Filter Section */}
          <div className="mb-8">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#4A1529] mb-4">PNLE Library</h2>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3 items-center w-full">
                {['Sets', 'Nursing', 'Practice Exams'].map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      if (category === 'Sets') {
                        setActiveSubcategory('Set 1');
                        setActiveSet(1);
                      } else if (category === 'Nursing') {
                        setActiveSubcategory('Foundation of Nursing');
                      } else {
                        setActiveSubcategory('');
                      }
                    }}
                    className={`px-6 py-2 rounded-xl border-[2px] font-body font-medium text-lg drop-shadow-[0_3px_2px_rgba(212,47,107,0.6)] transition-all
                      ${activeCategory === category
                        ? 'bg-[#F7C4D5] border-[#855264] text-[#4A1529]'
                        : 'bg-[#F7C4D5] border-transparent text-[#855264] hover:opacity-90'}`}
                  >
                    {category}
                  </button>
                ))}

                {(activeCategory || activeSubcategory) && (
                  <button
                    onClick={() => {
                      setActiveCategory(null);
                      setActiveSubcategory('');
                      setActiveSet(1);
                    }}
                    className="ml-auto px-4 py-2 rounded-xl font-body font-bold text-sm text-[#855264] hover:text-[#4A1529] hover:bg-[#F7C4D5] transition-all flex items-center gap-1"
                    title="Remove Filter"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Remove Filter
                  </button>
                )}
              </div>

              {activeCategory === 'Sets' && (
                <div className="flex flex-wrap gap-2 pl-2 border-l-[3px] border-[#D42F6B]">
                  {['Set 1', 'Set 2', 'Set 3'].map(sub => (
                    <button
                      key={sub}
                      onClick={() => {
                        setActiveSubcategory(sub);
                        if (sub === 'Set 1') setActiveSet(1);
                        else if (sub === 'Set 2') setActiveSet(2);
                        // Add Set 3 logic if needed
                      }}
                      className={`px-4 py-1.5 rounded-lg border-[2px] font-body font-medium text-sm drop-shadow-[0_3px_2px_rgba(212,47,107,0.6)] transition-all
                        ${activeSubcategory === sub
                          ? 'bg-[#D42F6B] border-[#4A1529] text-white'
                          : 'bg-[#F7C4D5] border-transparent text-[#855264] hover:bg-[#E97CA1] hover:text-white'}`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}

              {activeCategory === 'Nursing' && (
                <div className="flex flex-wrap gap-2 pl-2 border-l-[3px] border-[#D42F6B]">
                  {['Foundation of Nursing', 'Maternal and Child Nursing', 'Community Health Nursing', 'Medical - Surgical Nursing'].map(sub => (
                    <button
                      key={sub}
                      onClick={() => setActiveSubcategory(sub)}
                      className={`px-4 py-1.5 rounded-lg border-[2px] font-body font-medium text-sm drop-shadow-[0_3px_2px_rgba(212,47,107,0.6)] transition-all
                        ${activeSubcategory === sub
                          ? 'bg-[#D42F6B] border-[#4A1529] text-white'
                          : 'bg-[#F7C4D5] border-transparent text-[#855264] hover:bg-[#E97CA1] hover:text-white'}`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Set Header */}
          <div className="flex items-center mb-6">
            <span className="text-[#855264] font-body font-bold text-lg mr-4 tracking-wide">{currentSetData.name}</span>
            <div className="flex-1 border-t border-[#855264] opacity-30"></div>
          </div>

          {/* Topic Cards */}
          <div className="space-y-6 pb-10">
            {currentSetData.items.map((item, index) => (
              <div key={index} className={`bg-white border-[3px] ${currentSetData.colorClass} rounded-2xl flex flex-col sm:flex-row overflow-hidden shadow-[0px_4px_0px_0px] shadow-[${currentSetData.colorClass.replace('border-[', '').replace(']', '')}] hover:translate-y-1 hover:shadow-none transition-all`}>
                <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center">
                  <h4 className={`font-heading font-black text-lg sm:text-xl ${currentSetData.textClass} mb-1`}>{item.title}</h4>
                  <p className="font-body font-bold italic text-[#855264] text-sm sm:text-base">{item.subtitle}</p>
                </div>
                <div className={`w-full sm:w-[160px] border-t-[3px] sm:border-t-0 sm:border-l-[3px] ${currentSetData.colorClass} flex sm:flex-col`}>
                  <div className={`flex-1 sm:flex-none sm:h-1/2 flex items-center justify-center border-r-[3px] sm:border-r-0 sm:border-b-[3px] ${currentSetData.colorClass} bg-white ${currentSetData.textClass} font-black text-base sm:text-lg py-3 sm:py-0`}>
                    {item.count} ITEMS
                  </div>
                  <button onClick={() => onStartQuiz && onStartQuiz(`PNLE ${item.subtitle}`)} className={`flex-1 sm:flex-none sm:h-1/2 flex items-center justify-center ${currentSetData.bgClass} text-white font-heading font-black text-lg sm:text-xl ${currentSetData.hoverBgClass} py-3 sm:py-0 transition-colors`}>
                    LEARN
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
