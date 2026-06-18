import React, { useState, useMemo } from 'react';
import allQuestions from './data/questions.json';

import logo from './assets/matron-logo.svg';
import learnIcon from './assets/learn-icon.svg';
import topicsIcon from './assets/topics-icon.svg';
import profileIcon from './assets/profile-icon.svg';
import lampIcon from './assets/lamp-no-bg.svg';
import mascot from './assets/love.svg';
import explainIcon from './assets/explain.svg';

export default function Home({ onStartQuiz, onViewChange }) {
  const [showRationale, setShowRationale] = useState(false);

  const { dailyQuestion, dailyTopics, answerText } = useMemo(() => {
    // Determine the current day since epoch
    const today = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    
    // Seeded random number generator
    const seededRandom = (seed) => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    // Pick a daily question
    const qIndex = Math.floor(seededRandom(today) * allQuestions.length);
    const dailyQuestion = allQuestions[qIndex];

    const correctOpt = dailyQuestion.options.find(o => o.id === dailyQuestion.correct_option);
    const answerText = correctOpt ? `${dailyQuestion.correct_option}. ${correctOpt.text}` : dailyQuestion.correct_option;

    // Get unique topics and their counts
    const topicsMap = {};
    allQuestions.forEach(q => {
      if (!topicsMap[q.topic]) {
        const parts = q.topic.split(' - ');
        topicsMap[q.topic] = {
          title: parts.length > 1 ? parts.slice(1).join(' - ') : q.topic,
          subtitle: q.course ? `${q.course} - ${parts[0]}` : parts[0],
          topicKey: q.topic,
          count: 0
        };
      }
      topicsMap[q.topic].count++;
    });
    
    const uniqueTopics = Object.values(topicsMap);
    
    // Pick 2 daily topics
    const tIndex1 = Math.floor(seededRandom(today + 1) * uniqueTopics.length);
    let tIndex2 = Math.floor(seededRandom(today + 2) * uniqueTopics.length);
    if (tIndex1 === tIndex2 && uniqueTopics.length > 1) {
      tIndex2 = (tIndex2 + 1) % uniqueTopics.length;
    }

    const dailyTopics = [uniqueTopics[tIndex1], uniqueTopics[tIndex2]].filter(Boolean);

    return { dailyQuestion, dailyTopics, answerText };
  }, []);

  return (
    <div className="min-h-screen bg-bg flex flex-col lg:flex-row text-text font-body">

      {/* Mobile Header */}
      <div className="lg:hidden w-full p-6 border-b-[4px] border-[#855264] flex justify-center bg-bg shadow-sm z-20">
        <img src={logo} alt="Matron Logo" className="w-40 h-auto" />
      </div>

      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex w-64 fixed left-0 top-0 h-full bg-bg border-r-[2px] border-muted flex-col p-4 z-20">
        <div className="flex items-center justify-center mb-8 mt-2 px-2">
          <a href="#">
            <img src={logo} alt="Matron Logo" className="w-48 h-auto hover:opacity-80 transition-opacity" />
          </a>
        </div>

        <nav className="flex flex-col space-y-2 flex-1 w-full items-center">
          {/* Active Item */}
          <a href="#" className="flex items-center w-full py-3 px-4 rounded-xl border-[2px] border-primary bg-primary/10 text-primary transition-colors group">
            <div className="w-12 h-12 mr-4 flex items-center justify-center shrink-0">
              <img src={learnIcon} alt="Learn" className="w-12 h-12 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-black tracking-widest uppercase text-sm">Learn</span>
          </a>

          {/* Inactive Item */}
          <a href="#" onClick={(e) => { e.preventDefault(); onViewChange('topics'); }} className="flex items-center w-full py-3 px-4 rounded-xl border-[2px] border-transparent hover:border-muted hover:bg-primary/5 text-muted transition-colors group">
            <div className="w-12 h-12 mr-4 flex items-center justify-center shrink-0">
              <img src={topicsIcon} alt="Topics" className="w-12 h-12 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-black tracking-widest uppercase text-sm">Topics</span>
          </a>

          <a href="#" className="flex items-center w-full py-3 px-4 rounded-xl border-[2px] border-transparent hover:border-muted hover:bg-primary/5 text-muted transition-colors group">
            <div className="w-12 h-12 mr-4 flex items-center justify-center shrink-0">
              <img src={lampIcon} alt="Mnemonics" className="w-12 h-12 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-black tracking-widest uppercase text-sm">Mnemonics</span>
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
        <div className="w-full max-w-3xl flex flex-col">

          {/* Header */}
          <div className="bg-[#D42F6B] rounded-2xl py-4 px-4 sm:px-6 mb-8 text-center border-[3px] border-[#4A1529] shadow-[0px_4px_0px_0px_#4A1529]">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#F7C4D5] leading-tight">Philippine Nursing<br />Licensure Exam</h2>
          </div>

          {/* Feature Spotlight: Review of the Day */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start relative">
              <div className="w-32 h-32 sm:w-48 sm:h-48 shrink-0 relative mb-4 lg:mb-0 lg:mr-6 z-10">
                <img
                  key={showRationale ? 'explain' : 'mascot'}
                  src={showRationale ? explainIcon : mascot}
                  alt="Mascot Avatar"
                  className="w-full h-full object-contain drop-shadow-lg transition-all duration-500 animate-bounce-pop"
                />
              </div>

              <div
                className="flex-1 w-full perspective-1000 cursor-pointer min-h-[180px] group transition-transform duration-300 hover:-translate-y-2 active:translate-y-1"
                onClick={() => setShowRationale(!showRationale)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${showRationale ? 'rotate-x-180' : ''}`}>

                  {/* Front */}
                  <div className="relative z-20 w-full h-full border-[3px] border-[#4A1529] bg-white rounded-2xl shadow-[0px_4px_0px_0px_#4A1529] flex flex-col overflow-hidden backface-hidden transition-all duration-300 min-h-[180px] group-hover:shadow-[0px_8px_0px_0px_#4A1529] group-active:shadow-none">
                    <div className="border-b-[3px] border-[#4A1529] py-3 bg-white text-center">
                      <span className="text-xl font-black text-[#4A1529]">Review of the Day</span>
                    </div>
                    <div className="p-4 sm:p-6 flex-1 flex flex-col items-center justify-center gap-4">
                      <p className="text-[#4A1529] font-body font-bold text-sm sm:text-base text-center leading-relaxed">
                        {dailyQuestion.question_stem}
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute z-10 inset-0 w-full h-full border-[3px] border-[#4A1529] bg-white rounded-2xl shadow-[0px_-4px_0px_0px_#4A1529] flex flex-col overflow-hidden backface-hidden rotate-x-180 transition-all duration-300 group-hover:shadow-[0px_-8px_0px_0px_#4A1529] group-active:shadow-none">
                    <div className="border-b-[3px] border-[#4A1529] py-3 bg-[#F7C4D5] text-center shrink-0">
                      <span className="text-xl font-black text-[#4A1529]">Answer and Rationale</span>
                    </div>
                    <div className="p-4 sm:p-6 flex-1 flex flex-col items-center justify-start overflow-y-auto space-y-4">
                      <div className="bg-[#4A1529] text-white px-4 py-2 rounded-xl font-bold text-sm sm:text-base text-center shadow-sm w-full shrink-0">
                        {answerText}
                      </div>
                      <p className="text-[#4A1529] font-body font-bold text-sm sm:text-base text-center leading-relaxed">
                        {dailyQuestion.rationale || "No rationale provided."}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-[3px] border-[#855264] my-6 sm:my-8 w-full"></div>

          {/* Course Cards */}
          <div className="pb-10">
            <h3 className="font-heading font-black text-xl sm:text-2xl mb-6 text-[#855264] tracking-wider">Learn something new...</h3>
            <div className="space-y-6">

              {dailyTopics.map((topic, index) => {
                const isFirst = index === 0;
                
                // Set 1 Styling
                const s1Bg = "bg-white";
                const s1Border = "border-[#4A1529]";
                const s1Text = "text-[#4A1529]";
                const s1BtnBg = "bg-[#4A1529]";
                const s1BtnHover = "hover:bg-[#3d1122]";
                const s1BtnText = "text-white";
                const s1CountText = "text-[#4A1529]";
                const s1Shadow = "shadow-[0px_4px_0px_0px_#4A1529]";
                
                // Set 2 Styling
                const s2Bg = "bg-[#E97CA1]";
                const s2Border = "border-[#D42F6B]";
                const s2Text = "text-white";
                const s2BtnBg = "bg-[#D42F6B]";
                const s2BtnHover = "hover:bg-[#b02456]";
                const s2BtnText = "text-white";
                const s2CountText = "text-[#D42F6B]";
                const s2Shadow = "shadow-[0px_4px_0px_0px_#D42F6B]";

                return (
                  <div key={topic.topicKey} className={`${isFirst ? s1Bg : s2Bg} border-[3px] ${isFirst ? s1Border : s2Border} rounded-2xl flex flex-col sm:flex-row overflow-hidden ${isFirst ? s1Shadow : s2Shadow} hover:translate-y-1 hover:shadow-none transition-all`}>
                    <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center">
                      <h4 className={`font-heading font-black text-lg sm:text-xl ${isFirst ? s1Text : s2Text} mb-1`}>{topic.title}</h4>
                      <p className={`font-body font-bold italic ${isFirst ? 'text-[#855264]' : 'text-white/90'} text-sm sm:text-base`}>{topic.subtitle}</p>
                    </div>
                    <div className={`w-full sm:w-[160px] border-t-[3px] sm:border-t-0 sm:border-l-[3px] ${isFirst ? s1Border : s2Border} flex sm:flex-col`}>
                      <div className={`flex-1 sm:flex-none sm:h-1/2 flex items-center justify-center border-r-[3px] sm:border-r-0 sm:border-b-[3px] ${isFirst ? s1Border : s2Border} ${isFirst ? s1Bg : s2Bg} ${isFirst ? s1CountText : s2CountText} font-black text-base sm:text-lg py-3 sm:py-0`}>
                        {topic.count} ITEMS
                      </div>
                      <button
                        onClick={() => onStartQuiz(topic.topicKey)}
                        className={`flex-1 sm:flex-none sm:h-1/2 flex items-center justify-center ${isFirst ? s1BtnBg : s2BtnBg} ${isFirst ? s1BtnText : s2BtnText} font-heading font-black text-lg sm:text-xl ${isFirst ? s1BtnHover : s2BtnHover} py-3 sm:py-0 transition-colors cursor-pointer`}
                      >
                        LEARN
                      </button>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
