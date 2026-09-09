import { useState, useMemo, useEffect } from 'react';
import Layout from './components/Layout';
import { mnemonicsList, MNEMONICS_CATEGORIES } from './data/mnemonicsData';

import fundamentalsIcon from './assets/fundamentals.svg';
import maternalIcon from './assets/maternal.svg';
import surgicalIcon from './assets/surgical.svg';
import psychIcon from './assets/psych.svg';
import pharmacologyIcon from './assets/pharmacology.svg';
import communicableIcon from './assets/communicable.svg';
import mnemonicsAvatar from './assets/mnemonics-avatar (1).svg';

import { 
  Search, 
  X, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  LayoutGrid, 
  FolderHeart,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import BackToTop from './components/BackToTop';

const INITIAL_BATCH_SIZE = 12;
const BATCH_INCREMENT = 12;

export default function Mnemonics({ onViewChange, onSelectMnemonic }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'domains'
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);

  // Category Icon Mapping
  const categoryIcons = useMemo(() => ({
    fundamentals: fundamentalsIcon,
    maternal: maternalIcon,
    'med-surg': surgicalIcon,
    psych: psychIcon,
    pharmacology: pharmacologyIcon,
    communicable: communicableIcon,
  }), []);

  // Load bookmarks on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('matron_favorite_mnemonics') || '[]');
      setBookmarkedIds(saved);
    } catch {
      setBookmarkedIds([]);
    }
  }, []);

  const toggleBookmark = (e, id) => {
    e.stopPropagation();
    try {
      let updated;
      if (bookmarkedIds.includes(id)) {
        updated = bookmarkedIds.filter(bId => bId !== id);
      } else {
        updated = [...bookmarkedIds, id];
      }
      setBookmarkedIds(updated);
      localStorage.setItem('matron_favorite_mnemonics', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  // Filtered Mnemonics List
  const filteredMnemonics = useMemo(() => {
    let list = mnemonicsList;

    // Filter by category or bookmarks
    if (activeCategory === 'bookmarked') {
      list = list.filter(m => bookmarkedIds.includes(m.id));
    } else if (activeCategory !== 'all') {
      list = list.filter(m => m.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(m => 
        m.title.toLowerCase().includes(q) ||
        m.shortCode.toLowerCase().includes(q) ||
        m.summary.toLowerCase().includes(q) ||
        m.categoryName.toLowerCase().includes(q) ||
        (m.tags && m.tags.some(t => t.toLowerCase().includes(q))) ||
        (m.letters && m.letters.some(l => 
          l.term.toLowerCase().includes(q) || 
          l.description.toLowerCase().includes(q)
        ))
      );
    }

    return list;
  }, [activeCategory, searchQuery, bookmarkedIds]);

  // Reset visibleCount whenever category or search query changes
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH_SIZE);
  }, [activeCategory, searchQuery]);

  // Sliced mnemonics for progressive disclosure
  const displayedMnemonics = useMemo(() => {
    return filteredMnemonics.slice(0, visibleCount);
  }, [filteredMnemonics, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + BATCH_INCREMENT, filteredMnemonics.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredMnemonics.length);
  };

  const handleCollapse = () => {
    setVisibleCount(INITIAL_BATCH_SIZE);
    const gridEl = document.getElementById('mnemonics-card-grid');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDomainCardClick = (catId) => {
    setActiveCategory(catId);
    setViewMode('cards');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <Layout activeView="mnemonics" onViewChange={onViewChange}>
      <div className="w-full max-w-5xl flex flex-col items-center">

        {/* Hero Card */}
        <div className="bg-white border-[3px] border-[#4A1529] rounded-2xl p-6 sm:p-10 mb-8 w-full shadow-[0px_6px_0px_0px_#4A1529] flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-6 sm:gap-10">
          <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#F7C4D5] text-[#4A1529] text-xs font-black px-3 py-1 rounded-full border-[2px] border-[#4A1529] uppercase tracking-wider">
                NCLEX & PNLE Memory Vault
              </span>
              <span className="bg-primary text-white text-xs font-black px-2.5 py-1 rounded-full border-[2px] border-[#4A1529] uppercase tracking-wider flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> High-Yield
              </span>
            </div>
            
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-text mb-3 uppercase tracking-wide">
              MNEMONICS HUB
            </h1>
            
            <p className="font-body text-sm sm:text-base text-muted font-medium max-w-xl leading-relaxed mb-6">
              Master complex medical concepts, physiological pathways, and exam pharmacology with structured, high-yield memory hooks and visual breakdowns.
            </p>

            {/* Quick Stats Bar */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 w-full">
              <div className="bg-[#FDF5F7] border-[2px] border-[#4A1529] rounded-xl px-3.5 py-2 text-center shadow-[0px_2px_0px_0px_#4A1529]">
                <span className="block font-heading font-black text-lg text-primary leading-tight">
                  {mnemonicsList.length}
                </span>
                <span className="font-body text-xs font-bold text-muted uppercase tracking-wider">
                  Total Mnemonics
                </span>
              </div>
              <div className="bg-[#FDF5F7] border-[2px] border-[#4A1529] rounded-xl px-3.5 py-2 text-center shadow-[0px_2px_0px_0px_#4A1529]">
                <span className="block font-heading font-black text-lg text-[#4A1529] leading-tight">
                  {MNEMONICS_CATEGORIES.length}
                </span>
                <span className="font-body text-xs font-bold text-muted uppercase tracking-wider">
                  Nursing Domains
                </span>
              </div>
              <div className="bg-[#FDF5F7] border-[2px] border-[#4A1529] rounded-xl px-3.5 py-2 text-center shadow-[0px_2px_0px_0px_#4A1529]">
                <span className="block font-heading font-black text-lg text-amber-600 leading-tight">
                  {bookmarkedIds.length}
                </span>
                <span className="font-body text-xs font-bold text-muted uppercase tracking-wider">
                  Saved Bookmarks
                </span>
              </div>
            </div>
          </div>

          <div className="w-36 h-36 sm:w-56 sm:h-56 flex-shrink-0 animate-bounce-pop">
            <img 
              src={mnemonicsAvatar} 
              alt="Mnemonics Avatar Mascot" 
              className="w-full h-full object-contain drop-shadow-md" 
            />
          </div>
        </div>

        {/* Search Bar & View Controls */}
        <div className="w-full mb-6 flex flex-col sm:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search acronyms (e.g. GTPAL, ADPIE, MONA), symptoms, or drugs..."
              className="w-full bg-white border-[3px] border-[#4A1529] rounded-2xl py-3.5 pl-12 pr-10 text-text placeholder-muted text-base font-body focus:outline-none focus:ring-2 focus:ring-primary shadow-[0px_4px_0px_0px_#4A1529] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted hover:text-text cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 bg-white border-[2.5px] border-[#4A1529] p-1.5 rounded-2xl shadow-[0px_3px_0px_0px_#4A1529] shrink-0 self-end sm:self-auto">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-heading font-black text-xs sm:text-sm transition-all cursor-pointer ${
                viewMode === 'cards' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-muted hover:text-text'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewMode('domains')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-heading font-black text-xs sm:text-sm transition-all cursor-pointer ${
                viewMode === 'domains' 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-muted hover:text-text'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Domain Hubs</span>
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="w-full mb-8 overflow-x-auto pb-3.5 pt-1 scrollbar-thin">
          <div className="flex items-center gap-2.5 min-w-max">
            <button
              onClick={() => { setActiveCategory('all'); setViewMode('cards'); }}
              className={`px-4 py-2 rounded-xl font-heading font-black text-xs sm:text-sm border-[2.5px] border-[#4A1529] transition-all cursor-pointer shadow-[0px_3px_0px_0px_#4A1529] hover:-translate-y-0.5 ${
                activeCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-text hover:bg-[#F7C4D5]/40'
              }`}
            >
              All ({mnemonicsList.length})
            </button>

            {MNEMONICS_CATEGORIES.map(cat => {
              const count = mnemonicsList.filter(m => m.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setViewMode('cards'); }}
                  className={`px-4 py-2 rounded-xl font-heading font-black text-xs sm:text-sm border-[2.5px] border-[#4A1529] transition-all cursor-pointer shadow-[0px_3px_0px_0px_#4A1529] hover:-translate-y-0.5 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-text hover:bg-[#F7C4D5]/40'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}

            {/* Bookmarked Filter */}
            <button
              onClick={() => { setActiveCategory('bookmarked'); setViewMode('cards'); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-heading font-black text-xs sm:text-sm border-[2.5px] border-[#4A1529] transition-all cursor-pointer shadow-[0px_3px_0px_0px_#4A1529] hover:-translate-y-0.5 ${
                activeCategory === 'bookmarked'
                  ? 'bg-amber-400 text-[#4A1529]'
                  : 'bg-white text-text hover:bg-[#F7C4D5]/40'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Saved ({bookmarkedIds.length})</span>
            </button>
          </div>
        </div>

        {/* DOMAIN HUBS VIEW */}
        {viewMode === 'domains' && !searchQuery.trim() && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10">
            {MNEMONICS_CATEGORIES.map(cat => {
              const catMnemonics = mnemonicsList.filter(m => m.category === cat.id);
              const icon = categoryIcons[cat.id];

              return (
                <div
                  key={cat.id}
                  onClick={() => handleDomainCardClick(cat.id)}
                  className="group bg-white hover:bg-primary border-[3px] border-[#4A1529] rounded-2xl p-6 flex flex-col justify-between text-center shadow-[0px_6px_0px_0px_#4A1529] hover:shadow-[0px_8px_0px_0px_#4A1529] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer min-h-[260px]"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={icon} alt={cat.name} className="w-full h-full object-contain" />
                    </div>
                    
                    <h2 className="font-heading font-black text-xl text-text group-hover:text-white transition-colors duration-300 mb-2">
                      {cat.name}
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-1.5 my-2">
                      {catMnemonics.slice(0, 3).map(m => (
                        <span 
                          key={m.id} 
                          className="px-2 py-0.5 bg-[#F7C4D5]/60 group-hover:bg-white/20 text-[#4A1529] group-hover:text-white text-[11px] font-black rounded border border-[#4A1529] group-hover:border-white/40"
                        >
                          {m.shortCode}
                        </span>
                      ))}
                      {catMnemonics.length > 3 && (
                        <span className="text-[11px] font-bold text-muted group-hover:text-white/80">
                          +{catMnemonics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#855264]/20 group-hover:border-white/30 flex items-center justify-between text-xs font-black text-muted group-hover:text-white transition-colors">
                    <span>{catMnemonics.length} Mnemonics</span>
                    <span className="flex items-center gap-1 text-primary group-hover:text-white">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* MNEMONICS CARD GRID VIEW */}
        {(viewMode === 'cards' || searchQuery.trim() !== '') && (
          <>
            {filteredMnemonics.length > 0 ? (
              <div id="mnemonics-card-grid" className="w-full mb-12 scroll-mt-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {displayedMnemonics.map(m => {
                    const isSaved = bookmarkedIds.includes(m.id);

                    return (
                      <div
                        key={m.id}
                        onClick={() => onSelectMnemonic && onSelectMnemonic(m.id)}
                        className="group bg-white hover:bg-[#FDF5F7] border-[3px] border-[#4A1529] rounded-2xl p-6 shadow-[0px_6px_0px_0px_#4A1529] hover:shadow-[0px_8px_0px_0px_#4A1529] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between relative"
                      >
                        {/* Top Header */}
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <span className="px-2.5 py-0.5 bg-[#F7C4D5]/70 text-[#4A1529] text-[11px] font-black rounded-full border border-[#4A1529] uppercase tracking-wider">
                              {m.categoryName.split(' ')[0]}
                            </span>

                            <button
                              onClick={(e) => toggleBookmark(e, m.id)}
                              title={isSaved ? "Remove Bookmark" : "Save Mnemonic"}
                              className="p-1 text-muted hover:text-primary transition-colors cursor-pointer"
                            >
                              {isSaved ? (
                                <BookmarkCheck className="w-5 h-5 text-primary fill-primary" />
                              ) : (
                                <Bookmark className="w-5 h-5" />
                              )}
                            </button>
                          </div>

                          {/* Acronym Badge */}
                          <div className="my-2">
                            <span className={`inline-block px-3.5 py-1.5 bg-primary text-white font-heading font-black rounded-xl border-[2.5px] border-[#4A1529] shadow-[0px_3px_0px_0px_#4A1529] group-hover:scale-105 transition-transform max-w-full break-words ${
                              m.shortCode.length > 15 
                                ? 'text-sm sm:text-base' 
                                : m.shortCode.length > 8 
                                  ? 'text-base sm:text-lg' 
                                  : 'text-xl'
                            }`}>
                              {m.shortCode}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="font-heading font-black text-lg text-text mt-3 mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                            {m.title}
                          </h2>

                          {/* Summary */}
                          <p className="font-body text-xs sm:text-sm text-muted font-medium line-clamp-2 leading-relaxed mb-4">
                            {m.summary}
                          </p>

                          {/* Letter Previews */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {m.letters.slice(0, 4).map((l, i) => (
                              <span 
                                key={i}
                                className="px-2 py-0.5 bg-white border border-[#4A1529] rounded text-[10px] font-bold text-text truncate max-w-[140px]"
                              >
                                <strong>{l.letter}:</strong> {l.term}
                              </span>
                            ))}
                            {m.letters.length > 4 && (
                              <span className="px-1.5 py-0.5 text-[10px] font-bold text-muted self-center">
                                +{m.letters.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="pt-3 border-t border-[#855264]/20 flex items-center justify-between text-xs font-black">
                          {m.highYield ? (
                            <span className="text-primary font-bold flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5" /> High-Yield
                            </span>
                          ) : (
                            <span className="text-muted font-bold">
                              {m.letters.length} Steps
                            </span>
                          )}

                          <span className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
                            Study Mnemonic <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Collapsible / Progressive Disclosure Controls */}
                {filteredMnemonics.length > INITIAL_BATCH_SIZE && (
                  <div className="mt-10 pt-6 border-t-[2.5px] border-[#855264]/20 flex flex-col items-center gap-4 w-full">
                    {/* Progress Indicator */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-heading font-black text-xs sm:text-sm text-text tracking-wide">
                        Showing {displayedMnemonics.length} of {filteredMnemonics.length} Mnemonics
                      </span>
                      <div className="w-48 sm:w-64 bg-[#FDF5F7] border-[2px] border-[#4A1529] rounded-full h-3 overflow-hidden shadow-[0px_2px_0px_0px_#4A1529]">
                        <div 
                          className="bg-primary h-full transition-all duration-300 rounded-full"
                          style={{ width: `${Math.round((displayedMnemonics.length / filteredMnemonics.length) * 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
                      {visibleCount < filteredMnemonics.length && (
                        <>
                          <button
                            onClick={handleLoadMore}
                            className="flex items-center gap-2 px-5 py-2.5 bg-[#F7C4D5] hover:bg-primary text-[#4A1529] hover:text-white font-heading font-black text-xs sm:text-sm rounded-xl border-[2.5px] border-[#4A1529] shadow-[0px_3px_0px_0px_#4A1529] hover:shadow-[0px_5px_0px_0px_#4A1529] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer select-none"
                          >
                            <span>See More (+{Math.min(BATCH_INCREMENT, filteredMnemonics.length - visibleCount)})</span>
                            <ChevronDown className="w-4 h-4" />
                          </button>

                          <button
                            onClick={handleShowAll}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#FDF5F7] text-[#4A1529] font-heading font-black text-xs sm:text-sm rounded-xl border-[2.5px] border-[#4A1529] shadow-[0px_3px_0px_0px_#4A1529] hover:shadow-[0px_5px_0px_0px_#4A1529] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer select-none"
                          >
                            <span>Show All ({filteredMnemonics.length})</span>
                          </button>
                        </>
                      )}

                      {visibleCount > INITIAL_BATCH_SIZE && (
                        <button
                          onClick={handleCollapse}
                          className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#FDF5F7] text-[#4A1529] font-heading font-black text-xs sm:text-sm rounded-xl border-[2.5px] border-[#4A1529] shadow-[0px_3px_0px_0px_#4A1529] hover:shadow-[0px_5px_0px_0px_#4A1529] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer select-none"
                        >
                          <ChevronUp className="w-4 h-4" />
                          <span>See Less (Collapse to {INITIAL_BATCH_SIZE})</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Empty Search / Filter State */
              <div className="bg-white border-[3px] border-[#4A1529] rounded-2xl p-8 sm:p-12 text-center w-full max-w-lg shadow-[0px_6px_0px_0px_#4A1529] my-6">
                <FolderHeart className="w-12 h-12 text-muted mx-auto mb-3" />
                <h3 className="font-heading font-black text-xl text-text mb-2">
                  No Mnemonics Found
                </h3>
                <p className="font-body text-sm text-muted font-medium mb-6">
                  {activeCategory === 'bookmarked'
                    ? "You haven't bookmarked any mnemonics yet! Click the bookmark icon on any card to save it for quick review."
                    : `No mnemonics matched your search "${searchQuery}". Try searching for acronyms like GTPAL, ADPIE, or MONA.`}
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="px-6 py-2.5 bg-primary text-white font-black text-sm rounded-xl border-[2px] border-[#4A1529] shadow-[0px_3px_0px_0px_#4A1529] hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </>
        )}

      </div>
      <BackToTop />
    </Layout>
  );
}
