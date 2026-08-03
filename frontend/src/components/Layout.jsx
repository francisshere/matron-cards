import logo from '../assets/matron-logo.svg';
import Sidebar from '../Sidebar';

export default function Layout({ children, activeView, onViewChange, contentClassName = "" }) {
  return (
    <div className="min-h-screen bg-transparent flex flex-col lg:flex-row text-text font-body">
      {/* Mobile Header */}
      <div className="lg:hidden w-full p-6 border-b-[4px] border-[#855264] flex justify-center bg-bg shadow-sm z-20">
        <img src={logo} alt="Matron Logo" className="w-40 h-auto" />
      </div>

      <Sidebar activeView={activeView} onViewChange={onViewChange} />

      {/* Main Content Area */}
      <main className={`w-full md:w-[calc(100%-6rem)] lg:w-[calc(100%-16rem)] md:ml-24 lg:ml-64 p-4 sm:p-8 pb-28 md:pb-8 flex justify-center ${contentClassName}`}>
        {children}
      </main>
    </div>
  );
}
