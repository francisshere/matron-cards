import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop({ threshold = 350, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to Top"
      className={`fixed bottom-24 md:bottom-8 right-4 sm:right-8 z-40 flex items-center justify-center gap-2 px-3.5 py-3 sm:px-4 sm:py-3 bg-[#F7C4D5] hover:bg-primary text-[#4A1529] hover:text-white border-[3px] border-[#4A1529] rounded-2xl shadow-[0px_4px_0px_0px_#4A1529] hover:shadow-[0px_6px_0px_0px_#4A1529] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all duration-200 cursor-pointer group select-none ${className}`}
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      <span className="hidden sm:inline font-heading font-black text-xs uppercase tracking-wider">
        Top
      </span>
    </button>
  );
}
