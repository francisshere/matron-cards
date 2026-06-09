import React, { useState } from 'react';
import allQuestions from './data/questions.json';

import logo from './assets/matron-logo.svg';
import learnIcon from './assets/learn-icon.svg';
import topicsIcon from './assets/topics-icon.svg';
import profileIcon from './assets/profile-icon.svg';
import mascot from './assets/snake_nurse.png';
import explainIcon from './assets/explain.svg';

export default function Home({ onStartQuiz }) {
  const [showRationale, setShowRationale] = useState(false);
  const dailyQuestion = allQuestions[0]; // Just use the first question for now

  return (
    <div className="min-h-screen bg-bg flex text-text font-body">
      {/* Sidebar Navigation */}
      <aside className="w-1/4 fixed left-0 top-0 h-full bg-card shadow-sm flex flex-col p-8 z-20">
        <div className="flex items-center mb-12">
          <img src={logo} alt="Matron Logo" className="w-12 h-12 mr-4" />
          <h1 className="font-heading font-black text-3xl tracking-wide text-primary">ma+ron</h1>
        </div>
        
        <nav className="flex flex-col space-y-6 flex-1">
          <a href="#" className="flex items-center text-xl font-bold text-primary bg-light/20 p-4 rounded-2xl hover:bg-light/30 transition-colors">
            <img src={learnIcon} alt="Learn" className="w-8 h-8 mr-6" />
            <span className="tracking-widest">Learn</span>
          </a>
          <a href="#" className="flex items-center text-xl font-bold text-text/70 p-4 rounded-2xl hover:bg-text/5 transition-colors">
            <img src={topicsIcon} alt="Topics" className="w-8 h-8 mr-6" />
            <span className="tracking-widest">Topics</span>
          </a>
          <a href="#" className="flex items-center text-xl font-bold text-text/70 p-4 rounded-2xl hover:bg-text/5 transition-colors">
            <img src={profileIcon} alt="Profile" className="w-8 h-8 mr-6" />
            <span className="tracking-widest">Profile</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="w-3/4 ml-[25%] p-10 flex flex-col">
        {/* Header */}
        <div className="bg-mid text-white rounded-3xl p-8 mb-10 text-center shadow-md">
          <h2 className="font-heading font-black text-3xl uppercase tracking-widest">Philippine Nursing Licensure Exam</h2>
        </div>

        {/* Feature Spotlight: Review of the Day */}
        <div className="mb-12">
          <h3 className="font-heading font-bold text-2xl mb-6 text-muted uppercase tracking-wider">Review of the Day</h3>
          <div className="flex flex-col sm:flex-row items-center sm:items-start relative">
            <div className="w-48 h-48 sm:w-64 sm:h-64 shrink-0 relative mb-4 sm:mb-0 sm:mr-6 z-10">
              <img 
                src={showRationale ? explainIcon : mascot} 
                alt="Mascot Avatar" 
                className={`w-full h-full object-contain drop-shadow-lg transition-all duration-500 ${showRationale ? 'animate-bounce-pop' : ''}`}
              />
            </div>
            
            <div 
              className={`flex-1 border-4 border-primary/20 bg-card rounded-3xl p-8 shadow-sm cursor-pointer perspective-1000 transition-all duration-300 hover:border-primary/50 hover:shadow-md min-h-[250px] relative group`}
              onClick={() => setShowRationale(!showRationale)}
            >
               {/* Speech bubble tail */}
              <div className={`hidden sm:block absolute top-16 -left-[14px] w-6 h-6 border-l-4 border-b-4 transform rotate-45 transition-colors duration-300 bg-card border-primary/20 group-hover:border-primary/50`}></div>
              
              <div className="flex flex-col justify-center h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block border-b-2 border-primary/10 pb-2">
                  {showRationale ? 'Rationale' : 'Daily Question'}
                </span>
                <p className="text-text font-body font-semibold text-lg leading-relaxed mt-2">
                  {showRationale ? dailyQuestion.rationale : dailyQuestion.question_stem}
                </p>
                <div className="mt-6 text-right">
                  <span className="inline-block text-sm font-bold text-primary bg-light/20 px-4 py-2 rounded-full">
                    {showRationale ? 'Click to see question' : 'Click to flip for rationale'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div>
          <h3 className="font-heading font-bold text-2xl mb-6 text-muted uppercase tracking-wider">Your Courses</h3>
          <div className="space-y-6">
            {/* Top card */}
            <div className="bg-card border-4 border-text/10 rounded-3xl p-6 flex items-center justify-between shadow-sm hover:border-text/30 transition-colors">
              <div className="flex-1">
                <h4 className="font-heading font-black text-2xl text-text mb-1">PNLE</h4>
                <p className="font-body font-semibold text-text/70 text-lg">Foundation of Professional Nursing Practice</p>
              </div>
              <div className="px-8 font-body font-bold text-xl text-text/80">
                100 Items
              </div>
              <div>
                <button 
                  onClick={onStartQuiz}
                  className="px-10 py-4 rounded-full bg-card border-[3px] border-[#F7C4D5] text-text/80 font-heading font-bold text-lg shadow-[0px_6px_4px_0px_#E97CA1] hover:bg-light/10 hover:-translate-y-0.5 hover:border-mid transition-all active:translate-y-1 active:shadow-none"
                >
                  LEARN
                </button>
              </div>
            </div>

            {/* Bottom card */}
            <div className="bg-gradient-to-r from-mid to-primary rounded-3xl p-6 flex items-center justify-between shadow-md text-white border-4 border-transparent hover:shadow-lg transition-all">
              <div className="flex-1">
                <h4 className="font-heading font-black text-2xl mb-1">PNLE</h4>
                <p className="font-body font-semibold text-white/80 text-lg">Medical-Surgical Nursing</p>
              </div>
              <div className="px-8 font-body font-bold text-xl text-white/90">
                100 Items
              </div>
              <div>
                <button 
                  onClick={onStartQuiz}
                  className="px-10 py-4 rounded-full bg-white text-primary font-heading font-bold text-lg shadow-[0px_6px_4px_0px_rgba(0,0,0,0.15)] hover:bg-white/90 hover:-translate-y-0.5 transition-all active:translate-y-1 active:shadow-none"
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
