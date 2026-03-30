
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

const { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Church
} = LucideIcons;

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
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

  const handleInteractionEnd = (e: React.MouseEvent | React.TouchEvent) => {
    (e.currentTarget as HTMLElement).blur();
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 flex justify-center py-6 px-4 ${scrolled ? 'pt-4' : 'pt-8'}`}>
        <div className={`
          relative flex items-center justify-between w-full max-w-6xl px-4 py-3
          bg-white/40 dark:bg-black/40 backdrop-blur-[24px] saturate-[180%]
          border border-white/40 dark:border-white/10 
          ring-1 ring-black/5 dark:ring-white/5
          shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
          rounded-[28px] transition-all duration-500 ease-apple
          ${scrolled ? 'scale-[0.99]' : 'scale-100'}
        `}>
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center gap-4 group pl-2 transition-all duration-500 outline-none shrink-0"
            onMouseUp={handleInteractionEnd}
            onTouchEnd={handleInteractionEnd}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" />
              <div className="relative p-2.5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg transition-all duration-500 
                group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] 
                group-active:scale-95 group-active:shadow-[0_0_35px_rgba(37,99,235,0.7)]">
                <Church className="text-white w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-col -gap-1 text-left">
              <span className="text-black dark:text-white font-black text-xl tracking-tight transition-colors duration-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 uppercase leading-none">Lighthouse</span>
              <span className="text-[11px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 leading-tight">Gospel</span>
            </div>
          </Link>

          {/* Center Nav Items - Centered using absolute positioning to maintain logo/actions balance */}
          <div className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1.5 rounded-2xl border border-black/5 dark:border-white/5 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-2.5 rounded-xl transition-all duration-500 text-xs font-bold uppercase tracking-wide group/tab outline-none whitespace-nowrap
                    ${isActive 
                      ? 'text-black dark:text-white' 
                      : 'text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:scale-105'}`}
                  onMouseUp={handleInteractionEnd}
                  onTouchEnd={handleInteractionEnd}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-white dark:bg-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-none rounded-lg z-0 transition-all duration-300" />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 pr-1 shrink-0">
            <button 
              onClick={toggleTheme}
              onMouseUp={handleInteractionEnd}
              onTouchEnd={handleInteractionEnd}
              className="p-3 rounded-2xl text-black/60 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 active:scale-90 relative group/theme outline-none focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} className="relative z-10" /> : <Moon size={20} className="relative z-10" />}
            </button>
            <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10 mx-1 hidden md:block" />
            
            {/* Hamburger - Hidden on MD and up */}
            <button 
              className="md:hidden text-black dark:text-white p-2 w-10 h-10 flex items-center justify-center focus:outline-none rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative z-[70] outline-none"
              onClick={() => setIsOpen(!isOpen)}
              onMouseUp={handleInteractionEnd}
              onTouchEnd={handleInteractionEnd}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="transition-transform duration-300 rotate-0" /> : <Menu size={24} className="transition-transform duration-300" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm transition-all duration-700 md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] z-[58] md:hidden
          bg-white/80 dark:bg-black/80 backdrop-blur-[60px] saturate-[250%]
          border-l border-white/40 dark:border-white/10
          shadow-[-20px_0_80px_rgba(0,0,0,0.3)]
          transition-transform duration-[600ms] cubic-bezier(0.16, 1, 0.3, 1)
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-32 px-6 pb-12 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                onMouseUp={handleInteractionEnd}
                onTouchEnd={handleInteractionEnd}
                style={{ 
                  transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
                  transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: isOpen ? 1 : 0
                }}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 transform outline-none
                  ${location.pathname === item.path 
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold' 
                    : 'text-black/60 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10'}`}
              >
                <span className="text-xl tracking-tight">{item.name}</span>
                {location.pathname === item.path && (
                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                )}
              </Link>
            ))}
          </div>
          
          <div 
            className="mt-auto pt-8 transition-all duration-700 delay-300"
            style={{ 
              opacity: isOpen ? 1 : 0, 
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)' 
            }}
          >
            <p className="mt-8 text-center text-[10px] text-black/30 dark:text-white/30 uppercase font-black tracking-[0.3em]">
              Lighthouse Gospel Church
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
