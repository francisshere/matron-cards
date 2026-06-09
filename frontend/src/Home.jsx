import React, { useState } from 'react';
import allQuestions from './data/questions.json';

import logo from './assets/matron-logo.svg';
import learnIcon from './assets/learn-icon.svg';
import topicsIcon from './assets/topics-icon.svg';
import profileIcon from './assets/profile-icon.svg';
import mascot from './assets/love.svg';
import explainIcon from './assets/explain.svg';

export default function Home({ onStartQuiz }) {
  const [showRationale, setShowRationale] = useState(false);
  const dailyQuestion = allQuestions[0]; // Just use the first question for now

  return (
    <div className="min-h-screen bg-bg flex flex-col lg:flex-row text-text font-body">
      
      {/* Mobile Header */}
      <div className="lg:hidden w-full p-6 border-b-[4px] border-[#855264] flex justify-center bg-bg shadow-sm z-20">
         <img src={logo} alt="Matron Logo" className="w-40 h-auto" />
      </div>

      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex w-1/4 fixed left-0 top-0 h-full bg-bg border-r-[4px] border-[#855264] flex-col p-8 z-20">
        <div className="flex items-center justify-center mb-16 mt-4">
          <img src={logo} alt="Matron Logo" className="w-48 h-auto" />
        </div>
        
        <nav className="flex flex-col space-y-8 flex-1 pl-4">
          <a href="#" className="flex items-center text-2xl font-black text-[#855264] hover:text-[#4A1529] transition-colors group">
            <img src={learnIcon} alt="Learn" className="w-10 h-10 mr-6 group-hover:scale-110 transition-transform" />
            <span className="tracking-widest uppercase">Learn</span>
          </a>
          <a href="#" className="flex items-center text-2xl font-black text-[#855264] hover:text-[#4A1529] transition-colors group">
            <img src={topicsIcon} alt="Topics" className="w-10 h-10 mr-6 group-hover:scale-110 transition-transform" />
            <span className="tracking-widest uppercase">Topics</span>
          </a>
          <a href="#" className="flex items-center text-2xl font-black text-[#855264] hover:text-[#4A1529] transition-colors group">
            <img src={profileIcon} alt="Profile" className="w-10 h-10 mr-6 group-hover:scale-110 transition-transform" />
            <span className="tracking-widest uppercase">Profile</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="w-full lg:w-3/4 lg:ml-[25%] p-6 sm:p-12 flex flex-col max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="bg-[#D42F6B] rounded-3xl py-6 px-4 sm:px-8 mb-10 sm:mb-16 text-center border-[4px] border-[#4A1529] shadow-[0px_6px_0px_0px_#4A1529]">
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#F7C4D5] leading-tight">Philippine Nursing<br/>Licensure Exam</h2>
        </div>

        {/* Feature Spotlight: Review of the Day */}
        <div className="mb-10 sm:mb-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start relative">
            <div className="w-56 h-56 sm:w-72 sm:h-72 shrink-0 relative mb-6 lg:mb-0 lg:mr-8 z-10">
              <img 
                src={showRationale ? explainIcon : mascot} 
                alt="Mascot Avatar" 
                className={`w-full h-full object-contain drop-shadow-lg transition-all duration-500 ${showRationale ? 'animate-bounce-pop' : ''}`}
              />
            </div>
            
            <div 
              className={`flex-1 w-full border-[4px] border-[#4A1529] bg-white rounded-3xl shadow-[0px_6px_0px_0px_#4A1529] cursor-pointer transition-all duration-300 hover:translate-y-1 hover:shadow-none min-h-[250px] flex flex-col overflow-hidden`}
              onClick={() => setShowRationale(!showRationale)}
            >
              <div className="border-b-[4px] border-[#4A1529] py-4 bg-white text-center">
                 <span className="text-2xl font-black text-[#4A1529]">{showRationale ? 'Rationale' : 'Review of the Day'}</span>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex items-center justify-center">
                <p className="text-[#4A1529] font-body font-bold text-base sm:text-xl text-center leading-relaxed">
                  {showRationale ? dailyQuestion.rationale : dailyQuestion.question_stem}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-[4px] border-[#855264] my-8 sm:my-12 w-full"></div>

        {/* Course Cards */}
        <div className="pb-20">
          <h3 className="font-heading font-black text-2xl sm:text-3xl mb-8 text-[#855264] tracking-wider">Learn something new...</h3>
          <div className="space-y-8">
            
            {/* Top card */}
            <div className="bg-white border-[4px] border-[#4A1529] rounded-3xl flex flex-col sm:flex-row overflow-hidden shadow-[0px_6px_0px_0px_#4A1529] hover:translate-y-1 hover:shadow-none transition-all">
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                <h4 className="font-heading font-black text-xl sm:text-2xl text-[#4A1529] mb-2">Philippine Nursing Licensure Exam 1</h4>
                <p className="font-body font-bold italic text-[#855264] text-base sm:text-lg">Foundation of Professional Nursing Practice</p>
              </div>
              <div className="w-full sm:w-[220px] border-t-[4px] sm:border-t-0 sm:border-l-[4px] border-[#4A1529] flex sm:flex-col">
                <div className="flex-1 sm:flex-none sm:h-1/2 flex items-center justify-center border-r-[4px] sm:border-r-0 sm:border-b-[4px] border-[#4A1529] bg-white text-[#4A1529] font-black text-xl sm:text-2xl py-4 sm:py-0">
                  100 ITEMS
                </div>
                <button 
                  onClick={onStartQuiz}
                  className="flex-1 sm:flex-none sm:h-1/2 flex items-center justify-center bg-[#4A1529] text-white font-heading font-black text-xl sm:text-3xl hover:bg-[#3d1122] py-4 sm:py-0 transition-colors"
                >
                  LEARN
                </button>
              </div>
            </div>

            {/* Bottom card */}
            <div className="bg-[#E97CA1] border-[4px] border-[#D42F6B] rounded-3xl flex flex-col sm:flex-row overflow-hidden shadow-[0px_6px_0px_0px_#D42F6B] hover:translate-y-1 hover:shadow-none transition-all">
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                <h4 className="font-heading font-black text-xl sm:text-2xl text-white mb-2">Philippine Nursing Licensure Exam 1</h4>
                <p className="font-body font-bold italic text-white/90 text-base sm:text-lg">Foundation of Professional Nursing Practice</p>
              </div>
              <div className="w-full sm:w-[220px] border-t-[4px] sm:border-t-0 sm:border-l-[4px] border-[#D42F6B] flex sm:flex-col">
                <div className="flex-1 sm:flex-none sm:h-1/2 flex items-center justify-center border-r-[4px] sm:border-r-0 sm:border-b-[4px] border-[#D42F6B] bg-[#E97CA1] text-[#D42F6B] font-black text-xl sm:text-2xl py-4 sm:py-0">
                  100 ITEMS
                </div>
                <button 
                  onClick={onStartQuiz}
                  className="flex-1 sm:flex-none sm:h-1/2 flex items-center justify-center bg-[#D42F6B] text-white font-heading font-black text-xl sm:text-3xl hover:bg-[#b02456] py-4 sm:py-0 transition-colors"
                >
                  LEARN
                </button>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
