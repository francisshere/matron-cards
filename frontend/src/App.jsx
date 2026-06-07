import React, { useState } from 'react';
import { Flame, CheckCircle, XCircle, ArrowRight, RotateCw, BookOpen } from 'lucide-react';

const mockData = [
  {
    id: 1,
    concept: "Nursing Process & Assessment",
    question_stem: "A nurse is performing an initial admission assessment on a client admitted to the medical unit. Which of the following data points should the nurse categorize as subjective?",
    options: {
      A: "The client's blood pressure is 140/90 mmHg.",
      B: "The client states, 'I feel a sharp, shooting pain in my lower back.'",
      C: "The nurse notes 2+ pitting edema in the lower extremities.",
      D: "The client's diagnostic report reveals a serum potassium level of 3.4 mEq/L."
    },
    correct_option: "B",
    rationale: "Subjective data are information from the client's point of view (symptoms), including feelings, perceptions, and concerns obtained through interviews. Objective data are observable and measurable signs obtained through physical examination, laboratory results, and vital signs measurement."
  },
  {
    id: 2,
    concept: "Legal & Ethical Considerations",
    question_stem: "A nurse administers an incorrect dose of an antihypertensive medication to a client, resulting in severe hypotension. The nurse immediately notifies the attending physician and documents the incident accurately in the chart. Which ethical principle did the nurse primarily demonstrate by reporting the error?",
    options: {
      A: "Autonomy",
      B: "Beneficence",
      C: "Veracity",
      D: "Non-maleficence"
    },
    correct_option: "C",
    rationale: "Veracity refers to the duty to tell the truth. By immediately reporting the medication error and documenting it truthfully and accurately without concealment, the nurse upholds professional honesty and transparency."
  }
];

export default function App() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [streak, setStreak] = useState(12);

  const currentQuestion = mockData[currentQuestionIdx];

  const handleOptionClick = (key) => {
    if (showAnswer) return;
    setSelectedOption(key);
    setShowAnswer(true);
    if (key === currentQuestion.correct_option) {
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    setCurrentQuestionIdx((prev) => (prev + 1) % mockData.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary font-body text-main p-6 sm:p-12">
      
      {/* Header */}
      <header className="flex justify-between items-center max-w-4xl w-full mx-auto mb-12">
        <div className="flex items-center space-x-3">
          <BookOpen className="text-success w-8 h-8" />
          <h1 className="text-2xl font-heading text-main">CozyCare <span className="font-light">Reviewer</span></h1>
        </div>
        <div className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full shadow-sm">
          <Flame className="text-warm w-5 h-5" />
          <span className="font-semibold text-main">{streak} Day Streak</span>
        </div>
      </header>

      {/* Main Review Area */}
      <main className="flex-grow flex flex-col items-center w-full max-w-4xl mx-auto">
        
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-success font-bold mb-2">Concept of the Day</p>
          <h2 className="text-3xl font-heading">{currentQuestion.concept}</h2>
        </div>

        {/* Flashcard Container */}
        <div className="w-full max-w-2xl perspective-1000">
          <div className={`relative w-full transition-transform duration-700 transform-style-3d ${showAnswer ? 'rotate-y-180' : ''}`}>
            
            {/* Front of Card (Question) */}
            <div className="w-full bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-secondary backface-hidden">
              <p className="text-lg leading-relaxed mb-8">{currentQuestion.question_stem}</p>
              <div className="space-y-4">
                {Object.entries(currentQuestion.options).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => handleOptionClick(key)}
                    className="w-full text-left p-4 rounded-xl border-2 border-secondary hover:border-warm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-warm bg-primary/30"
                  >
                    <span className="font-bold mr-4 text-warm">{key}</span>
                    <span>{value}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Back of Card (Rationale) */}
            <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-secondary backface-hidden rotate-y-180 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6 border-b border-secondary pb-4">
                  {selectedOption === currentQuestion.correct_option ? (
                    <div className="flex items-center text-success space-x-2">
                      <CheckCircle className="w-6 h-6" />
                      <span className="font-bold text-xl font-heading">Correct!</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-warm space-x-2">
                      <XCircle className="w-6 h-6" />
                      <span className="font-bold text-xl font-heading">Not quite.</span>
                    </div>
                  )}
                </div>
                <h3 className="font-bold mb-2 uppercase tracking-wide text-sm text-main/60">Rationale</h3>
                <p className="text-md leading-relaxed text-main">{currentQuestion.rationale}</p>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={nextQuestion}
                  className="flex items-center space-x-2 bg-success text-white px-6 py-3 rounded-full hover:bg-success/90 transition shadow-md font-semibold"
                >
                  <span>Next Concept</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
}
