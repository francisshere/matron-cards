import logo from '../assets/matron-logo.svg';
import Sidebar from '../Sidebar';

export default function Layout({ children, activeView, onViewChange, contentClassName = "" }) {
  return (
    <div className="min-h-screen bg-transparent flex flex-col lg:flex-row text-text font-body">
      {/* Mobile Header (Hidden on tablet and desktop where left sidebar is shown) */}
      <div className="md:hidden w-full py-4 px-4 border-b-[3px] border-[#855264] flex justify-center bg-bg/95 backdrop-blur-sm shadow-sm z-20 sticky top-0">
        <img src={logo} alt="Matron Logo" className="w-32 sm:w-36 h-auto" />
      </div>

      <Sidebar activeView={activeView} onViewChange={onViewChange} />

      {/* Main Content Area */}
      <main className={`w-full md:w-[calc(100%-6rem)] lg:w-[calc(100%-16rem)] md:ml-24 lg:ml-64 p-3.5 sm:p-6 md:p-8 pb-24 sm:pb-28 md:pb-12 flex justify-center ${contentClassName}`}>
        {children}
      </main>
    </div>
  );
}
