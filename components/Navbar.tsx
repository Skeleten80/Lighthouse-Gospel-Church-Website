
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

const { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowRight,
  Church
} = LucideIcons;

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Events', path: '/events' },
  { name: 'Sermons', path: '/sermons' },
  { name: 'Giving', path: '/giving' },
  { name: 'Connect', path: '/connect' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 flex justify-center py-6 px-4 ${scrolled ? 'pt-4' : 'pt-8'}`}>
        <div className={`
          relative flex items-center justify-between w-full max-w-6xl px-4 py-2.5
          bg-white/40 dark:bg-black/40 backdrop-blur-[24px] saturate-[180%]
          border border-white/40 dark:border-white/10 
          ring-1 ring-black/5 dark:ring-white/5
          shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
          rounded-[24px] transition-all duration-500 ease-apple
          ${scrolled ? 'scale-[0.98]' : 'scale-100'}
        `}>
          {/* Church Logo Section */}
          <Link to="/" className="flex items-center gap-3 group pl-2 transition-all duration-500">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-apple scale-150 animate-pulse" />
              <div className="relative p-2.5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-blue-500/50">
                <Church className="text-white w-5 h-5 filter drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]" />
              </div>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-black dark:text-white font-black text-lg tracking-tight transition-colors duration-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">LIGHTHOUSE</span>
              <span className="text-[9px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] opacity-80 group-hover:opacity-100 transition-opacity">GOSPEL CHURCH</span>
            </div>
          </Link>

          {/* Desktop Nav - Clean transition logic to prevent glow flicker */}
          <div className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-2xl border border-black/5 dark:border-white/5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-500 text-sm font-semibold group/tab
                    ${isActive 
                      ? 'text-black dark:text-white' 
                      : 'text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:scale-105'}`}
                >
                  {/* High-priority Active Backdrop */}
                  {isActive && (
                    <div className="absolute inset-0 bg-white dark:bg-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-none rounded-lg z-0 transition-all duration-300" />
                  )}
                  
                  {/* Hover Glow Effect: Conditional rendering removes flicker when tab becomes active */}
                  {!isActive && (
                    <div className="absolute inset-0 opacity-0 group-hover/tab:opacity-100 transition-opacity duration-300 z-0 pointer-events-none">
                      <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/20 rounded-lg blur-[8px] scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-lg" />
                    </div>
                  )}
                  
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pr-1">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-black/60 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 active:scale-90 relative group/theme"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 bg-white/20 dark:bg-white/5 rounded-xl blur-lg opacity-0 group-hover/theme:opacity-100 transition-opacity" />
              {isDark ? <Sun size={18} className="relative z-10" /> : <Moon size={18} className="relative z-10" />}
            </button>
            
            <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10 mx-1 hidden md:block" />

            <button 
              className="md:hidden text-black dark:text-white p-2 w-10 h-10 flex items-center justify-center focus:outline-none rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative z-[70]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative">
                <div className={`absolute transition-all duration-500 ease-apple transform ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
                  <Menu size={22} />
                </div>
                <div className={`transition-all duration-500 ease-apple transform ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
                  <X size={22} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Mobile Drawer Backdrop */}
      <div 
        className={`fixed inset-0 z-[55] bg-black/20 dark:bg-black/40 backdrop-blur-sm transition-opacity duration-500 md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Mobile Drawer Container */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] z-[58] md:hidden
          bg-white/80 dark:bg-black/60 backdrop-blur-[40px] saturate-[200%]
          border-l border-white/20 dark:border-white/10
          shadow-[-20px_0_60px_rgba(0,0,0,0.2)]
          transition-transform duration-700 ease-apple
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-32 px-6 pb-12 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{ 
                  transitionDelay: isOpen ? `${index * 60 + 150}ms` : '0ms'
                }}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 transform
                  ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
                  ${location.pathname === item.path 
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold' 
                    : 'text-black/60 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10'}`}
              >
                <span className="text-lg">{item.name}</span>
                {location.pathname === item.path && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />}
              </Link>
            ))}
          </div>

          <div className={`mt-auto pt-8 transition-all duration-700 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <Link
              to="/giving"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-5 rounded-[22px] bg-black dark:bg-white text-white dark:text-black font-bold text-center shadow-2xl active:scale-95 transition-all"
            >
              Support Our Mission <ArrowRight size={18} />
            </Link>
            
            <p className="mt-6 text-center text-black/30 dark:text-white/30 text-[10px] uppercase font-black tracking-widest">
              Lighthouse Gospel Church
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
