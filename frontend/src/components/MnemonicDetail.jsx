import { useState, useEffect } from 'react';
import Layout from './Layout';
import { getMnemonicById, mnemonicsList } from '../data/mnemonicsData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Bookmark, 
  BookmarkCheck, 
  Lightbulb, 
  AlertTriangle, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  XCircle, 
  RotateCcw,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function MnemonicDetail({ mnemonicId, onBack, onSelectMnemonic, onViewChange }) {
  const [mnemonic, setMnemonic] = useState(null);
  const [isTestMode, setIsTestMode] = useState(false);
  const [revealedLetters, setRevealedLetters] = useState({});
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Practice Question State
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    const data = getMnemonicById(mnemonicId) || mnemonicsList[0];
    setMnemonic(data);
    setIsTestMode(false);
    setRevealedLetters({});
    setSelectedOption(null);
    setHasAnswered(false);

    // Check bookmarks in localStorage
    try {
      const saved = JSON.parse(localStorage.getItem('matron_favorite_mnemonics') || '[]');
      setIsBookmarked(saved.includes(data.id));
    } catch {
      setIsBookmarked(false);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mnemonicId]);

  if (!mnemonic) {
    return (
      <Layout activeView="mnemonics" onViewChange={onViewChange}>
        <div className="text-center py-20">
          <p className="text-lg font-bold text-text">Mnemonic not found.</p>
          <button 
            onClick={onBack}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-xl border-[3px] border-[#4A1529] font-black"
          >
            Back to Mnemonics
          </button>
        </div>
      </Layout>
    );
  }

  const toggleBookmark = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('matron_favorite_mnemonics') || '[]');
      let updated;
      if (saved.includes(mnemonic.id)) {
        updated = saved.filter(id => id !== mnemonic.id);
        setIsBookmarked(false);
      } else {
        updated = [...saved, mnemonic.id];
        setIsBookmarked(true);
      }
      localStorage.setItem('matron_favorite_mnemonics', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const toggleLetterReveal = (index) => {
    setRevealedLetters(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const revealAllLetters = () => {
    const all = {};
    mnemonic.letters.forEach((_, idx) => {
      all[idx] = true;
    });
    setRevealedLetters(all);
  };

  // Find prev/next mnemonics in the full list
  const currentIndex = mnemonicsList.findIndex(m => m.id === mnemonic.id);
  const prevMnemonic = currentIndex > 0 ? mnemonicsList[currentIndex - 1] : mnemonicsList[mnemonicsList.length - 1];
  const nextMnemonic = currentIndex < mnemonicsList.length - 1 ? mnemonicsList[currentIndex + 1] : mnemonicsList[0];

  // Related mnemonics in the same category
  const relatedMnemonics = mnemonicsList
    .filter(m => m.category === mnemonic.category && m.id !== mnemonic.id)
    .slice(0, 3);

  const handleOptionSelect = (index) => {
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);
  };

  const resetQuiz = () => {
    setSelectedOption(null);
    setHasAnswered(false);
  };

  return (
    <Layout activeView="mnemonics" onViewChange={onViewChange}>
      <div className="w-full max-w-4xl flex flex-col gap-6 pb-16">
        
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white border-[3px] border-[#4A1529] rounded-2xl p-4 shadow-[0px_4px_0px_0px_#4A1529]">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-[#FDF5F7] hover:bg-[#F7C4D5] text-[#4A1529] font-black rounded-xl border-[2px] border-[#4A1529] transition-all hover:-translate-y-0.5 shadow-[0px_2px_0px_0px_#4A1529] cursor-pointer text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Mnemonics</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block px-3 py-1 bg-[#F7C4D5]/60 text-[#4A1529] font-bold text-xs rounded-full border border-[#4A1529]">
              {mnemonic.categoryName}
            </span>

            {/* Bookmark button */}
            <button
              onClick={toggleBookmark}
              title={isBookmarked ? "Remove Bookmark" : "Bookmark Mnemonic"}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border-[2px] border-[#4A1529] font-black text-sm transition-all hover:-translate-y-0.5 shadow-[0px_2px_0px_0px_#4A1529] cursor-pointer ${
                isBookmarked 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-[#4A1529] hover:bg-[#F7C4D5]/40'
              }`}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Save"}</span>
            </button>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => onSelectMnemonic(prevMnemonic.id)}
                title={`Previous: ${prevMnemonic.shortCode}`}
                className="p-2 bg-white hover:bg-[#F7C4D5] text-[#4A1529] rounded-xl border-[2px] border-[#4A1529] transition-all hover:-translate-y-0.5 shadow-[0px_2px_0px_0px_#4A1529] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectMnemonic(nextMnemonic.id)}
                title={`Next: ${nextMnemonic.shortCode}`}
                className="p-2 bg-white hover:bg-[#F7C4D5] text-[#4A1529] rounded-xl border-[2px] border-[#4A1529] transition-all hover:-translate-y-0.5 shadow-[0px_2px_0px_0px_#4A1529] cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Card */}
        <div className="bg-white border-[3px] border-[#4A1529] rounded-2xl p-6 sm:p-8 shadow-[0px_6px_0px_0px_#4A1529] relative overflow-hidden">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-[#F7C4D5] text-[#4A1529] text-xs font-black px-3 py-1 rounded-full border-[2px] border-[#4A1529] uppercase tracking-wider">
              {mnemonic.categoryName}
            </span>
            {mnemonic.highYield && (
              <span className="bg-primary text-white text-xs font-black px-3 py-1 rounded-full border-[2px] border-[#4A1529] uppercase tracking-wider flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> High-Yield NCLEX
              </span>
            )}
            {mnemonic.tags && mnemonic.tags.map(tag => (
              <span key={tag} className="hidden md:inline-block bg-[#FDF5F7] text-muted text-xs font-bold px-2.5 py-0.5 rounded-md border border-[#855264]/30">
                #{tag}
              </span>
            ))}
          </div>

          {/* Acronym Visual Tiles */}
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-3">
              {mnemonic.shortCode.split('').map((char, i) => (
                <div 
                  key={i} 
                  className={`w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center font-heading font-black text-xl sm:text-3xl rounded-xl border-[3px] border-[#4A1529] shadow-[0px_4px_0px_0px_#4A1529] transition-transform hover:scale-105 select-none ${
                    char === ' ' || char === '/' || char === '-'
                      ? 'bg-transparent border-none shadow-none text-text w-6'
                      : i % 3 === 0 
                        ? 'bg-primary text-white' 
                        : i % 3 === 1 
                          ? 'bg-[#F7C4D5] text-text' 
                          : 'bg-[#E97CA1] text-white'
                  }`}
                >
                  {char}
                </div>
              ))}
            </div>
            <h1 className="font-heading font-black text-2xl sm:text-4xl text-text mt-3">
              {mnemonic.title}
            </h1>
            <p className="font-body text-base sm:text-lg text-muted mt-2 font-medium leading-relaxed">
              {mnemonic.summary}
            </p>
          </div>

          {/* Memory Hook Box */}
          {mnemonic.memoryTip && (
            <div className="bg-[#FDF5F7] border-[2px] border-[#4A1529] rounded-xl p-4 mt-5 flex items-start gap-3 shadow-[0px_3px_0px_0px_#4A1529]">
              <div className="w-8 h-8 rounded-lg bg-amber-400 border-[2px] border-[#4A1529] flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb className="w-5 h-5 text-[#4A1529]" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-black text-sm text-[#4A1529] uppercase tracking-wide">
                  Memory Hook & Association
                </h4>
                <p className="font-body text-sm sm:text-base text-text font-bold mt-0.5">
                  {mnemonic.memoryTip}
                </p>
              </div>
            </div>
          )}

          {/* Test Yourself Toggle Button */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t-[2px] border-[#855264]/20">
            <span className="text-xs sm:text-sm font-bold text-muted">
              {isTestMode ? "Test Mode: Click any card to reveal definition" : "Study Mode: Full breakdown visible"}
            </span>
            <div className="flex items-center gap-2">
              {isTestMode && (
                <button
                  onClick={revealAllLetters}
                  className="text-xs font-black text-primary hover:underline cursor-pointer"
                >
                  Reveal All
                </button>
              )}
              <button
                onClick={() => setIsTestMode(!isTestMode)}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl border-[2px] border-[#4A1529] font-black text-xs sm:text-sm transition-all hover:-translate-y-0.5 shadow-[0px_3px_0px_0px_#4A1529] cursor-pointer ${
                  isTestMode 
                    ? 'bg-amber-400 text-[#4A1529]' 
                    : 'bg-white hover:bg-[#F7C4D5]/40 text-[#4A1529]'
                }`}
              >
                {isTestMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{isTestMode ? "Exit Test Mode" : "Test Your Memory"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Visual Acronym Breakdown List */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-heading font-black text-xl sm:text-2xl text-text flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <span>Step-by-Step Acronym Breakdown</span>
            </h2>
            <span className="text-xs font-bold text-muted">
              {mnemonic.letters.length} Components
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {mnemonic.letters.map((item, idx) => {
              const isHidden = isTestMode && !revealedLetters[idx];

              return (
                <div
                  key={idx}
                  onClick={() => isTestMode && toggleLetterReveal(idx)}
                  className={`group bg-white border-[3px] border-[#4A1529] rounded-2xl p-4 sm:p-5 shadow-[0px_4px_0px_0px_#4A1529] hover:shadow-[0px_6px_0px_0px_#4A1529] transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
                    isTestMode ? 'cursor-pointer hover:border-primary' : ''
                  }`}
                >
                  {/* Left Badge */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary text-white border-[3px] border-[#4A1529] flex items-center justify-center font-heading font-black text-xl sm:text-2xl shadow-[0px_3px_0px_0px_#4A1529] group-hover:scale-105 transition-transform">
                      {item.letter}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-heading font-black text-lg sm:text-xl text-text">
                        {item.term}
                      </h3>
                      {item.highlight && !isHidden && (
                        <span className="bg-[#F7C4D5]/80 text-[#4A1529] text-xs font-black px-2.5 py-0.5 rounded-full border border-[#4A1529]">
                          {item.highlight}
                        </span>
                      )}
                    </div>

                    {/* Description or Hidden state */}
                    {isHidden ? (
                      <div className="bg-[#FDF5F7] border border-dashed border-[#855264] rounded-lg p-3 text-center text-xs sm:text-sm font-bold text-muted hover:text-primary transition-colors">
                        Click to test your recall & reveal definition
                      </div>
                    ) : (
                      <p className="font-body text-sm sm:text-base text-muted font-medium leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clinical Deep Dive & NCLEX Pearls */}
        <div className="bg-white border-[3px] border-[#4A1529] rounded-2xl p-6 sm:p-8 shadow-[0px_6px_0px_0px_#4A1529] flex flex-col gap-6">
          <div>
            <h2 className="font-heading font-black text-xl sm:text-2xl text-text mb-3 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <span>Clinical Context & Nursing Application</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-text font-medium leading-relaxed">
              {mnemonic.clinicalContext}
            </p>
          </div>

          {mnemonic.nclexPearls && mnemonic.nclexPearls.length > 0 && (
            <div className="bg-amber-50 border-[2px] border-amber-500 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
                <h3 className="font-heading font-black text-base text-amber-900 uppercase tracking-wide">
                  NCLEX Golden Rules & Priority Warnings
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {mnemonic.nclexPearls.map((pearl, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-body text-sm sm:text-base text-amber-950 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                    <span>{pearl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Interactive NCLEX Practice Question */}
        {mnemonic.practiceQuestion && (
          <div className="bg-white border-[3px] border-[#4A1529] rounded-2xl p-6 sm:p-8 shadow-[0px_6px_0px_0px_#4A1529] flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#E97CA1] border-[2px] border-[#4A1529] flex items-center justify-center text-white font-black text-sm">
                  ?
                </div>
                <h2 className="font-heading font-black text-lg sm:text-2xl text-text">
                  NCLEX Knowledge Check
                </h2>
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-muted bg-[#FDF5F7] px-3 py-1 rounded-md border border-[#855264]/30">
                Single Choice
              </span>
            </div>

            <p className="font-body text-base sm:text-lg text-text font-bold leading-snug">
              {mnemonic.practiceQuestion.question}
            </p>

            <div className="flex flex-col gap-2.5 mt-2">
              {mnemonic.practiceQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === mnemonic.practiceQuestion.correctIndex;
                
                let optionStyle = "bg-white hover:bg-[#FDF5F7] border-[#4A1529] text-text";
                if (hasAnswered) {
                  if (isCorrect) {
                    optionStyle = "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold";
                  } else if (isSelected && !isCorrect) {
                    optionStyle = "bg-rose-50 border-rose-600 text-rose-950 font-bold line-through";
                  } else {
                    optionStyle = "bg-gray-50 border-gray-300 text-gray-500 opacity-70";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnswered}
                    onClick={() => handleOptionSelect(idx)}
                    className={`text-left p-4 rounded-xl border-[2.5px] transition-all flex items-center justify-between gap-3 shadow-[0px_3px_0px_0px_#4A1529] cursor-pointer disabled:cursor-default ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#F7C4D5]/60 border border-[#4A1529] flex items-center justify-center font-heading font-black text-xs text-[#4A1529] shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="font-body text-sm sm:text-base font-medium">
                        {option}
                      </span>
                    </div>

                    {hasAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {hasAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Rationale Box */}
            {hasAnswered && (
              <div className={`mt-3 p-5 rounded-xl border-[2px] ${
                selectedOption === mnemonic.practiceQuestion.correctIndex 
                  ? 'bg-emerald-50 border-emerald-600 text-emerald-950' 
                  : 'bg-rose-50 border-rose-600 text-rose-950'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {selectedOption === mnemonic.practiceQuestion.correctIndex ? (
                      <span className="font-heading font-black text-sm uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                      </span>
                    ) : (
                      <span className="font-heading font-black text-sm uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                        <XCircle className="w-4 h-4" /> Incorrect
                      </span>
                    )}
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1 text-xs font-black underline cursor-pointer hover:opacity-80"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Try Again
                  </button>
                </div>
                <p className="font-body text-sm sm:text-base leading-relaxed">
                  <strong className="font-bold">Rationale: </strong> 
                  {mnemonic.practiceQuestion.rationale}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Related Mnemonics in this category */}
        {relatedMnemonics.length > 0 && (
          <div className="mt-4">
            <h3 className="font-heading font-black text-lg sm:text-xl text-text mb-4">
              More {mnemonic.categoryName} Mnemonics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedMnemonics.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => onSelectMnemonic(rel.id)}
                  className="bg-white hover:bg-[#FDF5F7] border-[3px] border-[#4A1529] rounded-xl p-4 shadow-[0px_4px_0px_0px_#4A1529] hover:shadow-[0px_6px_0px_0px_#4A1529] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-[#F7C4D5] text-[#4A1529] text-[11px] font-black rounded border border-[#4A1529] mb-2 uppercase">
                      {rel.shortCode}
                    </span>
                    <h4 className="font-heading font-black text-base text-text line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <span className="font-heading font-black text-xs text-primary mt-3 flex items-center gap-1">
                    Study Now <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}
