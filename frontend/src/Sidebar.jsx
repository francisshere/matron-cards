
import logo from './assets/matron-logo.svg';
import learnIcon from './assets/learn-icon.svg';
import topicsIcon from './assets/topics-icon.svg';

import mnemonicsIcon from './assets/mnemonics-icon.svg';
import tipsIcon from './assets/speech-bubble.svg';
import { motion } from 'framer-motion';

export default function Sidebar({ activeView, onViewChange }) {
  const navItems = [
    { id: 'home', label: 'Learn', icon: learnIcon },
    { id: 'topics', label: 'Topics', icon: topicsIcon },
    { id: 'mnemonics', label: 'Mnemonics', icon: mnemonicsIcon },
    { id: 'tips', label: 'Tips', icon: tipsIcon },
  ];

  return (
    <aside className="fixed bottom-0 left-0 w-full md:w-24 lg:w-64 md:top-0 h-20 md:h-full bg-bg border-t-[2px] md:border-t-0 md:border-r-[2px] border-muted flex flex-row md:flex-col p-2 md:p-4 z-50 justify-around md:justify-start">
      <div className="hidden md:flex items-center justify-center mb-8 mt-2 px-2">
        <a href="#" onClick={(e) => { e.preventDefault(); onViewChange('home'); }}>
          <img src={logo} alt="Matron Logo" className="w-12 lg:w-48 h-auto object-contain hover:opacity-80 transition-opacity" />
        </a>
      </div>

      <nav className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 flex-1 w-full items-center justify-around md:justify-start">
        {navItems.map(item => {
          const isActive = activeView === item.id;
          return (
            <a 
              key={item.id}
              href="#" 
              onClick={(e) => { e.preventDefault(); onViewChange(item.id); }} 
              className={`relative flex items-center justify-center lg:justify-start md:w-full py-2 px-2 md:py-3 md:px-4 rounded-xl border-[2px] border-transparent transition-all duration-300 ease-in-out group ${isActive ? 'text-primary scale-110 md:scale-105 shadow-sm' : 'hover:border-muted hover:bg-primary/5 text-muted hover:scale-105 md:hover:scale-105'}`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSidebarSelector"
                  className="absolute inset-0 bg-primary/10 border-[2px] border-primary rounded-xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 lg:mr-4 flex items-center justify-center shrink-0">
                <img src={item.icon} alt={item.label} className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className={`relative z-10 hidden lg:block font-black tracking-widest uppercase text-sm transition-all duration-300 ${isActive ? 'opacity-100 translate-x-1' : 'opacity-80 group-hover:translate-x-1'}`}>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
