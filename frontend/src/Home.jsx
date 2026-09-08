import { useState } from 'react';
import { Sparkles, RotateCw, ArrowRight, CheckCircle2, XCircle, BookOpen, Award } from 'lucide-react';
import mascot from './assets/love.svg';
import explainIcon from './assets/explain.svg';
import avatarNurse from './assets/avatar-main-no-bg.svg';
import { useDailyContent } from './hooks/useDailyContent';
import Layout from './components/Layout';
import BackToTop from './components/BackToTop';

export default function Home({ onStartQuiz, onViewChange }) {
  const [showRationale, setShowRationale] = useState(false);
  const [currentTryIndex, setCurrentTryIndex] = useState(0);
  const [tryFinished, setTryFinished] = useState(false);
  const [selectedTryChoice, setSelectedTryChoice] = useState(null);
  const [showTryFeedback, setShowTryFeedback] = useState(false);
  const [tryCorrectCount, setTryCorrectCount] = useState(0);

  const { dailyQuestion, dailyTopics, answerText, tryTopic, tryQuestions } = useDailyContent();

  const handleTryChoice = (choiceId) => {
    if (showTryFeedback) return;

    setSelectedTryChoice(choiceId);
    setShowTryFeedback(true);

    const isCorrect = tryQuestions[currentTryIndex].correct_option === choiceId;
    if (isCorrect) {
      setTryCorrectCount(prev => prev + 1);
    }
  };

  const handleNextTry = () => {
    setShowTryFeedback(false);
    setSelectedTryChoice(null);

    if (currentTryIndex < tryQuestions.length - 1) {
      setCurrentTryIndex(prev => prev + 1);
    } else {
      setTryFinished(true);
    }
  };

  const handleRestartTry = () => {
    setCurrentTryIndex(0);
    setTryFinished(false);
    setSelectedTryChoice(null);
    setShowTryFeedback(false);
    setTryCorrectCount(0);
  };

  return (
    <Layout activeView="home" onViewChange={onViewChange}>
      <div className="w-full max-w-3xl flex flex-col font-body text-text">

        {/* Motivational Daily Banner */}
        <div className="bg-[#D42F6B] rounded-2xl sm:rounded-3xl p-5 sm:p-7 mb-6 sm:mb-8 text-center border-[3px] border-[#4A1529] shadow-[0px_4px_0px_0px_#4A1529] relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7C4D5] text-[#4A1529] font-heading font-black text-xs uppercase tracking-wider mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D42F6B]" />
              Daily Clinical Inspiration
            </span>
            <h2 className="font-heading font-black text-lg sm:text-2xl md:text-3xl text-[#F7C4D5] leading-snug sm:leading-tight max-w-xl">
              "The character of the nurse is as important as the knowledge she possesses."
            </h2>
            <p className="font-heading font-bold text-xs sm:text-sm text-white/90 mt-2 tracking-wide uppercase">
              — Florence Nightingale
            </p>
          </div>
        </div>

        {/* Feature Spotlight: Review of the Day (3D Flip Card - Side by side on all screen sizes) */}
        <div className="mb-8">
          <div className="flex flex-row items-center sm:items-start gap-2.5 sm:gap-6 relative">
            {/* Mascot Avatar */}
            <div className="w-28 h-28 min-[380px]:w-32 min-[380px]:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 shrink-0 relative z-10 flex items-center justify-center self-center">
              <img
                key={showRationale ? 'explain' : 'mascot'}
                src={showRationale ? explainIcon : mascot}
                alt="Mascot Avatar"
                className="w-full h-full object-contain drop-shadow-md transition-all duration-500 animate-bounce-pop"
              />
            </div>

            {/* Interactive Flip Card Container */}
            <div
              className="flex-1 min-w-0 w-full perspective-1000 cursor-pointer min-h-[190px] sm:min-h-[220px] group select-none"
              onClick={() => setShowRationale(!showRationale)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${showRationale ? 'rotate-x-180' : ''}`}>

                {/* Front: Question */}
                <div className="relative z-20 w-full h-full border-[3px] border-[#4A1529] bg-white rounded-2xl sm:rounded-3xl shadow-[0px_4px_0px_0px_#4A1529] flex flex-col overflow-hidden backface-hidden transition-all duration-300 min-h-[190px] sm:min-h-[220px] group-hover:shadow-[0px_6px_0px_0px_#4A1529] group-hover:-translate-y-0.5">
                  <div className="border-b-[3px] border-[#4A1529] py-2 px-3 sm:py-2.5 sm:px-4 bg-[#FDF5F7] flex items-center justify-between">
                    <span className="text-xs sm:text-base font-heading font-black text-[#4A1529] uppercase tracking-wide truncate mr-1">
                      Review of the Day
                    </span>
                    <span className="flex items-center gap-1 text-[11px] sm:text-xs font-heading font-bold text-primary shrink-0">
                      <RotateCw className="w-3.5 h-3.5" />
                      Flip
                    </span>
                  </div>
                  <div className="p-3 sm:p-6 flex-1 flex flex-col justify-center">
                    <p className="text-[#4A1529] font-body font-bold text-xs sm:text-base md:text-lg leading-relaxed text-center">
                      {dailyQuestion.question_stem}
                    </p>
                  </div>
                  <div className="py-1.5 sm:py-2.5 px-2 sm:px-4 bg-[#F7C4D5]/30 border-t-2 border-[#4A1529]/10 text-center">
                    <span className="text-[10px] sm:text-xs font-heading font-black text-primary uppercase tracking-wider flex items-center justify-center gap-1">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> Tap card to reveal answer
                    </span>
                  </div>
                </div>

                {/* Back: Answer & Rationale */}
                <div className="absolute z-10 inset-0 w-full h-full border-[3px] border-[#4A1529] bg-white rounded-2xl sm:rounded-3xl shadow-[0px_-4px_0px_0px_#4A1529] flex flex-col overflow-hidden backface-hidden rotate-x-180 transition-all duration-300 min-h-[190px] sm:min-h-[220px] group-hover:shadow-[0px_-6px_0px_0px_#4A1529]">
                  <div className="border-b-[3px] border-[#4A1529] py-2 px-3 sm:py-2.5 sm:px-4 bg-[#FDF5F7] flex items-center justify-between shrink-0">
                    <span className="text-xs sm:text-base font-heading font-black text-[#4A1529] uppercase tracking-wide truncate mr-1">
                      Answer & Rationale
                    </span>
                    <span className="flex items-center gap-1 text-[11px] sm:text-xs font-heading font-bold text-[#4A1529] shrink-0">
                      <RotateCw className="w-3.5 h-3.5" />
                      Flip Back
                    </span>
                  </div>
                  <div className="p-3 sm:p-6 flex-1 flex flex-col items-center justify-start overflow-y-auto space-y-2.5 sm:space-y-3 scrollbar-thin">
                    <div className="bg-[#4A1529] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-heading font-black text-xs sm:text-sm text-center shadow-sm w-full shrink-0">
                      {answerText}
                    </div>
                    <p className="text-[#4A1529] font-body font-semibold text-[11px] sm:text-sm leading-relaxed text-center">
                      {dailyQuestion.rationale || "No extended explanation published for this item."}
                    </p>
                  </div>
                  <div className="py-1.5 sm:py-2 px-2 sm:px-4 bg-[#FDF5F7] border-t-2 border-[#4A1529]/10 text-center shrink-0">
                    <span className="text-[10px] sm:text-xs font-heading font-bold text-[#855264] uppercase tracking-wider">
                      Tap card to return to question
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-[3px] border-[#855264]/40 my-6 sm:my-8 w-full"></div>

        {/* Course Cards: Learn something new... */}
        <div className="pb-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="font-heading font-black text-xl sm:text-2xl text-[#4A1529] tracking-wide">
              Learn something new...
            </h3>
            <button
              onClick={() => onViewChange('topics')}
              className="font-heading font-bold text-xs sm:text-sm text-primary hover:underline flex items-center gap-1 cursor-pointer"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {dailyTopics.map((topic, index) => {
              const isFirst = index === 0;
              const borderColor = isFirst ? 'border-[#4A1529]' : 'border-[#D42F6B]';
              const shadowColor = isFirst ? 'shadow-[0px_4px_0px_0px_#4A1529]' : 'shadow-[0px_4px_0px_0px_#D42F6B]';
              const hoverShadow = isFirst ? 'hover:shadow-[0px_6px_0px_0px_#4A1529]' : 'hover:shadow-[0px_6px_0px_0px_#D42F6B]';
              const btnBg = isFirst ? 'bg-[#4A1529] hover:bg-[#3d1122]' : 'bg-[#D42F6B] hover:bg-[#b02456]';
              const badgeBg = isFirst ? 'bg-[#F7C4D5] text-[#4A1529]' : 'bg-[#F7C4D5] text-[#D42F6B]';

              return (
                <div 
                  key={topic.topicKey} 
                  className={`bg-white border-[3px] ${borderColor} rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row overflow-hidden ${shadowColor} ${hoverShadow} hover:-translate-y-0.5 transition-all duration-200`}
                >
                  <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider ${badgeBg}`}>
                        Featured Topic
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold bg-[#855264]/10 text-[#855264]">
                        {topic.count} Questions
                      </span>
                    </div>

                    <h4 className="font-heading font-black text-base sm:text-xl text-[#4A1529] mb-1 leading-snug">
                      {topic.title}
                    </h4>
                    <p className="font-body font-bold italic text-[#855264] text-xs sm:text-sm">
                      {topic.subtitle}
                    </p>
                  </div>

                  <div className="border-t-[3px] sm:border-t-0 sm:border-l-[3px] border-[#4A1529]/20 p-3 sm:p-6 flex items-center justify-end sm:justify-center bg-[#FDF5F7]/40 shrink-0">
                    <button
                      onClick={() => onStartQuiz(topic.topicKey)}
                      className={`w-full sm:w-auto px-6 py-3 rounded-xl ${btnBg} text-white font-heading font-black text-sm sm:text-base transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]`}
                    >
                      <span>LEARN</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        {tryQuestions.length > 0 && (
          <div className="border-t-[3px] border-[#855264]/40 my-6 sm:my-8 w-full"></div>
        )}

        {/* Interactive Widget: Try some questions... */}
        {tryQuestions.length > 0 && (
          <div className="pb-12">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-[#4A1529] tracking-wide">
                  Try some questions...
                </h3>
                <span className="font-bold text-xs sm:text-sm text-[#855264] uppercase tracking-wider">
                  {tryTopic.title}
                </span>
              </div>
            </div>

            {!tryFinished ? (
              <div className="bg-white border-[3px] border-[#4A1529] rounded-2xl sm:rounded-3xl flex flex-col overflow-hidden shadow-[0px_4px_0px_0px_#4A1529]">
                <div className="p-4 sm:p-6">
                  {/* Progress bar header */}
                  <div className="flex items-center justify-between mb-3 text-xs sm:text-sm font-heading font-bold text-[#855264]">
                    <span>Question {currentTryIndex + 1} of {tryQuestions.length}</span>
                    <span>Score: {tryCorrectCount} / {currentTryIndex + (showTryFeedback ? 1 : 0)}</span>
                  </div>

                  <div className="w-full bg-[#4A1529]/10 h-2.5 rounded-full overflow-hidden mb-5">
                    <div 
                      className="bg-primary h-full transition-all duration-300 rounded-full"
                      style={{ width: `${((currentTryIndex + (showTryFeedback ? 1 : 0)) / tryQuestions.length) * 100}%` }}
                    />
                  </div>

                  <p className="text-[#4A1529] font-body font-bold text-base sm:text-lg mb-6 leading-relaxed">
                    {tryQuestions[currentTryIndex].question_stem}
                  </p>

                  {/* Options List with Choice Badges */}
                  <div className="space-y-3">
                    {tryQuestions[currentTryIndex].options.map(opt => {
                      const isSelected = selectedTryChoice === opt.id;
                      const isCorrect = tryQuestions[currentTryIndex].correct_option === opt.id;

                      let btnStyle = "bg-white border-[#4A1529] hover:bg-[#F7C4D5]/30 text-[#4A1529] cursor-pointer shadow-[0px_2px_0px_0px_#4A1529]";
                      let badgeStyle = "bg-[#4A1529]/10 text-[#4A1529]";

                      if (showTryFeedback) {
                        if (isCorrect) {
                          btnStyle = "bg-[#D1FAE5] border-[#16a34a] text-[#065F46] font-bold shadow-[0px_2px_0px_0px_#16a34a]";
                          badgeStyle = "bg-[#16a34a] text-white";
                        } else if (isSelected) {
                          btnStyle = "bg-[#FEE2E2] border-[#dc2626] text-[#991B1B] font-bold shadow-[0px_2px_0px_0px_#dc2626]";
                          badgeStyle = "bg-[#dc2626] text-white";
                        } else {
                          btnStyle = "bg-white border-[#4A1529]/30 text-[#4A1529]/40 opacity-50 cursor-not-allowed";
                          badgeStyle = "bg-[#4A1529]/10 text-[#4A1529]/40";
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleTryChoice(opt.id)}
                          disabled={showTryFeedback}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-[2px] transition-all flex items-center justify-start gap-3 ${btnStyle}`}
                        >
                          <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-heading font-black text-xs sm:text-sm flex items-center justify-center shrink-0 ${badgeStyle}`}>
                            {opt.id}
                          </span>
                          <span className="flex-1 font-body text-xs sm:text-base leading-snug">
                            {opt.text}
                          </span>
                          {showTryFeedback && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-[#16a34a] shrink-0" />
                          )}
                          {showTryFeedback && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-[#dc2626] shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Explanation Drawer & Next Question Button */}
                  {showTryFeedback && (
                    <div className="mt-5 p-4 rounded-2xl bg-[#F7C4D5]/25 border-2 border-[#4A1529]/20 animate-bounce-pop">
                      <div className="flex items-center gap-2 mb-2">
                        {selectedTryChoice === tryQuestions[currentTryIndex].correct_option ? (
                          <span className="inline-flex items-center gap-1 text-xs font-heading font-black text-[#16a34a] uppercase">
                            <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-heading font-black text-[#dc2626] uppercase">
                            <XCircle className="w-4 h-4" /> Incorrect
                          </span>
                        )}
                      </div>
                      
                      {tryQuestions[currentTryIndex].rationale && (
                        <p className="text-[#4A1529] text-xs sm:text-sm font-body font-semibold leading-relaxed mb-4">
                          <strong>Rationale: </strong>{tryQuestions[currentTryIndex].rationale}
                        </p>
                      )}

                      <button
                        onClick={handleNextTry}
                        className="w-full py-3 rounded-xl bg-primary text-white font-heading font-black text-sm sm:text-base border-[2px] border-[#4A1529] shadow-[0px_3px_0px_0px_#4A1529] hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>{currentTryIndex < tryQuestions.length - 1 ? 'Next Question' : 'Complete Mini-Review'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Upgraded Completion State */
              <div className="bg-[#4A1529] border-[3px] border-[#4A1529] rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center p-6 sm:p-10 text-center shadow-[0px_4px_0px_0px_#4A1529] relative overflow-hidden">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 animate-bounce-pop">
                  <img src={avatarNurse} alt="Celebration" className="w-full h-full object-contain drop-shadow-md" />
                </div>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7C4D5] text-[#4A1529] font-heading font-black text-xs uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4 text-primary" /> Mini-Practice Complete
                </span>
                
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-white mb-2 leading-tight">
                  Awesome Job!
                </h2>
                
                <p className="text-[#F7C4D5] font-body font-bold text-sm sm:text-base mb-6 max-w-sm">
                  You scored <strong className="text-white text-lg">{tryCorrectCount}</strong> out of <strong className="text-white text-lg">{tryQuestions.length}</strong> questions ({Math.round((tryCorrectCount / tryQuestions.length) * 100)}%).
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <button
                    onClick={() => onStartQuiz(tryTopic.topicKey)}
                    className="flex-1 bg-[#D42F6B] text-white py-3.5 px-6 rounded-xl font-heading font-black text-sm sm:text-base hover:bg-[#b02456] transition-all border-[2px] border-[#4A1529] shadow-[0px_3px_0px_0px_#4A1529] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    Practice Full Set
                  </button>
                  <button
                    onClick={handleRestartTry}
                    className="flex-1 bg-white text-[#4A1529] py-3.5 px-6 rounded-xl font-heading font-black text-sm sm:text-base hover:bg-[#FDF5F7] transition-all border-[2px] border-[#4A1529] shadow-[0px_3px_0px_0px_#4A1529] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Back To Top Floating Button */}
        <BackToTop threshold={350} />
      </div>
    </Layout>
  );
}
