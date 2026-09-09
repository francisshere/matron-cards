import { useState, useMemo } from 'react';
import { Search, X, ChevronDown, ChevronUp, BookOpen, Layers, ArrowRight, Sparkles } from 'lucide-react';
import allQuestions from './data/questions.json';
import { topicsSets } from './data/topics';
import Layout from './components/Layout';
import BackToTop from './components/BackToTop';

const HighlightText = ({ text, highlight }) => {
  if (!highlight || !highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-[#F7C4D5] text-[#4A1529] font-black rounded px-1">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

export default function Topics({ onViewChange, onStartQuiz }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('All Sets');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const sets = useMemo(() => topicsSets, []);

  // Filtered sets for search
  const filteredSets = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase().trim();

    return sets.map(set => {
      const filteredItems = set.items.map(item => {
        let isMatch = false;
        let matchedQuestions = [];

        if (item.title.toLowerCase().includes(query) || item.subtitle.toLowerCase().includes(query)) {
          isMatch = true;
        }

        const topicKey = item.topicKey || `PNLE ${item.subtitle}`;
        const topicQuestions = allQuestions.filter(q => q.topic === topicKey);

        topicQuestions.forEach(q => {
          if (
            q.question_stem.toLowerCase().includes(query) ||
            q.options.some(opt => opt.text.toLowerCase().includes(query)) ||
            (q.rationale && q.rationale.toLowerCase().includes(query))
          ) {
            isMatch = true;
            matchedQuestions.push(q);
          }
        });

        if (isMatch) {
          return { ...item, matchedQuestions };
        }
        return null;
      }).filter(Boolean);

      if (set.name.toLowerCase().includes(query)) {
        return { ...set, items: set.items.map(i => ({ ...i, matchedQuestions: [] })) };
      }

      return { ...set, items: filteredItems };
    }).filter(set => set.items.length > 0 || set.name.toLowerCase().includes(query));
  }, [searchQuery, sets]);

  // Browse sets by Category & Subcategory
  const displayedSets = useMemo(() => {
    if (searchQuery.trim()) {
      return filteredSets || [];
    }

    if (activeCategory === 'All') {
      return sets;
    }

    if (activeCategory === 'Sets') {
      if (activeSubcategory === 'All Sets') {
        return sets.filter(s => s.id >= 1 && s.id <= 3);
      }
      if (activeSubcategory === 'Set 1') return sets.filter(s => s.id === 1);
      if (activeSubcategory === 'Set 2') return sets.filter(s => s.id === 2);
      if (activeSubcategory === 'Set 3') return sets.filter(s => s.id === 3);
      return sets.filter(s => s.id >= 1 && s.id <= 3);
    }

    if (activeCategory === 'Nursing') {
      if (activeSubcategory === 'All Nursing') {
        return sets.filter(s => s.id >= 4 && s.id <= 7);
      }
      if (activeSubcategory === 'Foundation of Nursing') return sets.filter(s => s.id === 4);
      if (activeSubcategory === 'Maternal and Child Nursing') return sets.filter(s => s.id === 5);
      if (activeSubcategory === 'Medical - Surgical Nursing') return sets.filter(s => s.id === 6);
      if (activeSubcategory === 'Community Health Nursing') return sets.filter(s => s.id === 7);
      return sets.filter(s => s.id >= 4 && s.id <= 7);
    }

    if (activeCategory === 'Practice Exams') {
      return sets.filter(s => s.id === 8);
    }

    return sets;
  }, [searchQuery, filteredSets, activeCategory, activeSubcategory, sets]);

  // Search summary numbers
  const totalMatchingTopics = useMemo(() => {
    if (!searchQuery.trim()) return 0;
    return (filteredSets || []).reduce((acc, s) => acc + s.items.length, 0);
  }, [searchQuery, filteredSets]);

  const totalMatchingQuestions = useMemo(() => {
    if (!searchQuery.trim()) return 0;
    return (filteredSets || []).reduce(
      (acc, s) => acc + s.items.reduce((qAcc, item) => qAcc + (item.matchedQuestions?.length || 0), 0),
      0
    );
  }, [searchQuery, filteredSets]);

  const toggleQuestionAccordion = (key) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') setActiveSubcategory('');
    else if (cat === 'Sets') setActiveSubcategory('All Sets');
    else if (cat === 'Nursing') setActiveSubcategory('All Nursing');
    else if (cat === 'Practice Exams') setActiveSubcategory('All Topics');
  };

  return (
    <Layout activeView="topics" onViewChange={onViewChange}>
      <div className="w-full max-w-4xl flex flex-col font-body text-text">
        
        {/* Header & Stats Banner */}
        <div className="mb-6 sm:mb-8 bg-gradient-to-r from-[#D42F6B] to-[#b02456] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-[3px] border-[#4A1529] shadow-[0px_5px_0px_0px_#4A1529] text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-5 h-5 text-[#F7C4D5]" />
                <span className="font-heading font-black text-xs sm:text-sm tracking-wider uppercase text-[#F7C4D5]">Clinical Exam Prep</span>
              </div>
              <h1 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                Nursing Topic Library
              </h1>
              <p className="text-[#FDF5F7]/90 text-sm sm:text-base font-medium mt-1 max-w-xl">
                Browse board exam sets, core nursing fundamentals, and high-yield question banks.
              </p>
            </div>

            {/* Quick Stat Chips */}
            <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 shrink-0">
              <div className="bg-[#4A1529]/40 border border-white/20 rounded-xl px-3.5 py-2 text-center backdrop-blur-sm">
                <span className="block font-heading font-black text-lg sm:text-xl text-white">8</span>
                <span className="font-bold text-[11px] sm:text-xs text-[#F7C4D5] uppercase tracking-wider">Exam Sets</span>
              </div>
              <div className="bg-[#4A1529]/40 border border-white/20 rounded-xl px-3.5 py-2 text-center backdrop-blur-sm">
                <span className="block font-heading font-black text-lg sm:text-xl text-white">1,000+</span>
                <span className="font-bold text-[11px] sm:text-xs text-[#F7C4D5] uppercase tracking-wider">Questions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full mb-6 relative">
          <div className="relative flex items-center">
            <div className="absolute left-4 pointer-events-none text-[#855264]">
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-[3px] border-[#4A1529] rounded-2xl py-3.5 sm:py-4 pl-12 pr-12 text-[#4A1529] placeholder-[#855264]/70 text-base sm:text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-primary/20 shadow-[0px_4px_0px_0px_#4A1529] transition-all"
              placeholder="Search sets, topics, questions, or rationales..."
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 p-1 rounded-full text-[#855264] hover:text-[#4A1529] hover:bg-[#F7C4D5]/40 transition-colors cursor-pointer"
                title="Clear Search"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
          </div>

          {/* Search Result Feedback */}
          {searchQuery.trim() && (
            <div className="mt-3 flex items-center justify-between px-2 text-xs sm:text-sm font-bold text-[#855264]">
              <span>
                Found <strong className="text-[#4A1529]">{totalMatchingTopics}</strong> topics & <strong className="text-[#4A1529]">{totalMatchingQuestions}</strong> matching questions for "{searchQuery}"
              </span>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-primary hover:underline cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Filter Navigation (Hidden while searching) */}
        {!searchQuery.trim() && (
          <div className="mb-6 sm:mb-8 space-y-3">
            {/* Primary Category Tabs (Scrollable on mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full -mx-1 px-1">
              {[
                { id: 'All', label: 'All Topics' },
                { id: 'Sets', label: 'PNLE Sets' },
                { id: 'Nursing', label: 'Core Nursing' },
                { id: 'Practice Exams', label: 'Practice Exams' }
              ].map(category => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl border-[2px] font-heading font-black text-sm sm:text-base whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#4A1529] border-[#4A1529] text-white shadow-[0px_3px_0px_0px_#4A1529] -translate-y-0.5'
                        : 'bg-white border-[#4A1529]/30 text-[#855264] hover:border-[#4A1529] hover:text-[#4A1529] hover:bg-[#F7C4D5]/20'
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Subcategories Pills (Scrollable on mobile) */}
            {activeCategory === 'Sets' && (
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 pl-2 border-l-[3px] border-primary">
                {['All Sets', 'Set 1', 'Set 2', 'Set 3'].map(sub => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    className={`px-3.5 py-1.5 rounded-lg border-[2px] font-body font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                      activeSubcategory === sub
                        ? 'bg-primary border-[#4A1529] text-white shadow-[0px_2px_0px_0px_#4A1529]'
                        : 'bg-white border-[#855264]/30 text-[#855264] hover:bg-[#F7C4D5]/30 hover:text-[#4A1529]'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}

            {activeCategory === 'Nursing' && (
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 pl-2 border-l-[3px] border-primary">
                {[
                  'All Nursing',
                  'Foundation of Nursing',
                  'Maternal and Child Nursing',
                  'Medical - Surgical Nursing',
                  'Community Health Nursing'
                ].map(sub => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    className={`px-3.5 py-1.5 rounded-lg border-[2px] font-body font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                      activeSubcategory === sub
                        ? 'bg-primary border-[#4A1529] text-white shadow-[0px_2px_0px_0px_#4A1529]'
                        : 'bg-white border-[#855264]/30 text-[#855264] hover:bg-[#F7C4D5]/30 hover:text-[#4A1529]'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}

            {activeCategory === 'Practice Exams' && (
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 pl-2 border-l-[3px] border-primary">
                {['All Topics'].map(sub => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    className={`px-3.5 py-1.5 rounded-lg border-[2px] font-body font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                      activeSubcategory === sub
                        ? 'bg-primary border-[#4A1529] text-white shadow-[0px_2px_0px_0px_#4A1529]'
                        : 'bg-white border-[#855264]/30 text-[#855264] hover:bg-[#F7C4D5]/30 hover:text-[#4A1529]'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Topic Cards List */}
        <div className="space-y-8 sm:space-y-10 pb-12">
          {displayedSets.length === 0 && searchQuery.trim() && (
            <div className="bg-white border-[3px] border-[#4A1529] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-[0px_4px_0px_0px_#4A1529] my-6">
              <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-[#855264] mx-auto mb-3 opacity-60" />
              <h3 className="font-heading font-black text-xl sm:text-2xl text-[#4A1529]">No matching topics found</h3>
              <p className="text-[#855264] text-sm sm:text-base font-semibold mt-1 mb-6 max-w-md mx-auto">
                We couldn't find any questions or sets matching "{searchQuery}". Try different search terms or clear the filter.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 rounded-xl bg-primary text-white font-heading font-black border-[2px] border-[#4A1529] shadow-[0px_3px_0px_0px_#4A1529] hover:bg-primary/90 transition-all cursor-pointer"
              >
                Clear Search & Browse All
              </button>
            </div>
          )}

          {displayedSets.map((setData, setIndex) => {
            const isPink = setData.id === 2 || setData.id === 5 || setData.id === 6;
            const borderColor = isPink ? 'border-[#D42F6B]' : 'border-[#4A1529]';
            const shadowStyle = isPink ? 'shadow-[0px_4px_0px_0px_#D42F6B]' : 'shadow-[0px_4px_0px_0px_#4A1529]';
            const hoverShadow = isPink ? 'hover:shadow-[0px_6px_0px_0px_#D42F6B]' : 'hover:shadow-[0px_6px_0px_0px_#4A1529]';
            const btnBg = isPink ? 'bg-[#D42F6B] hover:bg-[#b02456]' : 'bg-[#4A1529] hover:bg-[#3d1122]';
            const badgeBg = isPink ? 'bg-[#F7C4D5] text-[#D42F6B]' : 'bg-[#F7C4D5] text-[#4A1529]';

            return (
              <div key={setData.id || setIndex}>
                {/* Set Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-[#4A1529] font-heading font-black text-base sm:text-lg tracking-wide uppercase">
                    {setData.name}
                  </span>
                  <div className="flex-1 border-t-2 border-[#855264]/30"></div>
                  <span className="text-xs font-bold text-[#855264]">{setData.items.length} Modules</span>
                </div>

                {/* Topic Cards */}
                <div className="space-y-4 sm:space-y-5">
                  {setData.items.map((item, index) => {
                    const cardKey = `${setData.id}-${index}`;
                    const isExpanded = !!expandedQuestions[cardKey];
                    const topicQuizKey = item.topicKey || `PNLE ${item.subtitle}`;

                    return (
                      <div 
                        key={index} 
                        className={`bg-white border-[3px] ${borderColor} rounded-2xl sm:rounded-3xl flex flex-col overflow-hidden ${shadowStyle} ${hoverShadow} hover:-translate-y-0.5 transition-all duration-200`}
                      >
                        {/* Card Main Body */}
                        <div className="flex flex-col sm:flex-row items-stretch justify-between p-4 sm:p-6 gap-4">
                          <div className="flex-1 flex flex-col justify-center">
                            {/* Card Category / Count Tags */}
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className={`px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider ${badgeBg}`}>
                                {setData.name}
                              </span>
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold bg-[#855264]/10 text-[#855264]">
                                {item.count} Questions
                              </span>
                            </div>

                            <h4 className="font-heading font-black text-base sm:text-lg lg:text-xl text-[#4A1529] mb-1 leading-snug">
                              <HighlightText text={item.title} highlight={searchQuery} />
                            </h4>
                            <p className="font-body font-bold italic text-[#855264] text-xs sm:text-sm">
                              <HighlightText text={item.subtitle} highlight={searchQuery} />
                            </p>
                          </div>

                          {/* Action Button Area */}
                          <div className="flex items-center sm:self-center shrink-0">
                            <button 
                              onClick={() => onStartQuiz && onStartQuiz(topicQuizKey)} 
                              className={`w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl ${btnBg} text-white font-heading font-black text-sm sm:text-base transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]`}
                            >
                              <span>LEARN</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Matched Questions Preview (Search mode) */}
                        {item.matchedQuestions && item.matchedQuestions.length > 0 && searchQuery.trim() && (
                          <div className={`border-t-[2px] ${borderColor} bg-[#F7C4D5]/15 p-3.5 sm:p-5`}>
                            <button
                              onClick={() => toggleQuestionAccordion(cardKey)}
                              className="w-full flex items-center justify-between text-left font-heading font-black text-xs sm:text-sm text-[#4A1529] uppercase tracking-wider hover:text-primary transition-colors cursor-pointer"
                            >
                              <span className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-primary" />
                                Matched Questions ({item.matchedQuestions.length})
                              </span>
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>

                            {isExpanded && (
                              <div className="space-y-3 mt-3.5 animate-bounce-pop">
                                {item.matchedQuestions.map((q, qIndex) => (
                                  <div key={qIndex} className="bg-white p-3.5 sm:p-4 rounded-xl border-2 border-[#855264]/20 shadow-sm">
                                    <p className="font-body text-[#4A1529] text-xs sm:text-sm font-semibold mb-2 leading-relaxed">
                                      <span className="font-black text-primary mr-1.5">Q:</span>
                                      <HighlightText text={q.question_stem} highlight={searchQuery} />
                                    </p>
                                    
                                    {q.options && q.options.some(opt => opt.text.toLowerCase().includes(searchQuery.toLowerCase())) && (
                                      <div className="pl-3 border-l-2 border-primary/40 space-y-1 my-2">
                                        {q.options.map((opt, oIndex) =>
                                          opt.text.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                                            <p key={oIndex} className="font-body text-xs text-[#855264] font-medium">
                                              <strong className="text-[#4A1529] mr-1">({opt.id})</strong>
                                              <HighlightText text={opt.text} highlight={searchQuery} />
                                            </p>
                                          ) : null
                                        )}
                                      </div>
                                    )}

                                    {q.rationale && q.rationale.toLowerCase().includes(searchQuery.toLowerCase()) && (
                                      <div className="mt-2 p-2 rounded-lg bg-[#F7C4D5]/20 text-[11px] sm:text-xs text-[#855264] font-medium">
                                        <strong className="text-[#4A1529]">Rationale: </strong>
                                        <HighlightText text={q.rationale} highlight={searchQuery} />
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Back To Top Floating Button */}
        <BackToTop threshold={300} />
      </div>
    </Layout>
  );
}
