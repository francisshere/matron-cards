import Layout from './components/Layout';
import tiredIcon from './assets/tired.svg';

export default function Tips({ onViewChange }) {
  return (
    <Layout activeView="tips" onViewChange={onViewChange}>
      <div className="w-full max-w-2xl flex flex-col items-center">
          
          {/* Main Card */}
          <div className="bg-white border-[3px] border-[#4A1529] rounded-2xl p-8 sm:p-12 w-full shadow-[0px_6px_0px_0px_#4A1529] flex flex-col items-center text-center gap-6 relative overflow-hidden">
            
            {/* Mascot Container with subtle floating animation */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0 animate-bounce-pop">
              <img 
                src={tiredIcon} 
                alt="Tired Nurse Mascot" 
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            <div className="flex flex-col items-center max-w-md">
              <span className="bg-[#F7C4D5] text-[#4A1529] text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-[2px] border-[#4A1529] uppercase tracking-wider mb-3">
                Under Construction
              </span>
              <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#4A1529] mb-4 uppercase tracking-wide">
                Coming Soon!
              </h1>
              <p className="font-body text-sm sm:text-base text-[#855264] font-bold leading-relaxed mb-6">
                Our matron is currently compiling the best clinical tips, tricks, and mnemonics for your exams. Take a deep breath and rest for a bit—you've been studying hard!
              </p>
            </div>

            <button
              onClick={() => onViewChange('home')}
              className="bg-[#D42F6B] text-white px-8 py-4 rounded-xl font-black hover:bg-[#b02456] transition-colors border-[3px] border-[#4A1529] text-lg shadow-[0px_4px_0px_0px_#4A1529] hover:translate-y-1 hover:shadow-none cursor-pointer"
            >
              Back to Learning
            </button>
          </div>

        </div>
    </Layout>
  );
}
