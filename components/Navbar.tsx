
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Church, Menu, X, Sun, Moon } from 'lucide-react';

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

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center py-6 px-4 ${scrolled ? 'pt-4' : 'pt-8'}`}>
      <div className={`
        relative flex items-center justify-between w-full max-w-6xl px-4 py-2.5
        bg-white/40 dark:bg-black/40 backdrop-blur-[24px] saturate-[180%]
        border border-white/40 dark:border-white/10 
        ring-1 ring-black/5 dark:ring-white/5
        shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
        rounded-[24px] transition-all duration-500 ease-apple
        ${scrolled ? 'scale-[0.98]' : 'scale-100'}
      `}>
        {/* Logo Section with Glow Effect */}
        <Link to="/" className="flex items-center gap-3 group pl-2 transition-all duration-500">
          <div className="relative">
            {/* Logo Glow Aura - Triggers on group hover */}
            <div className="absolute inset-0 bg-blue-500/60 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-apple scale-150" />
            <div className="absolute inset-0 bg-indigo-500/40 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-apple scale-110" />
            
            <div className="relative p-2.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg transition-all duration-500 ease-apple group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] group-active:scale-95">
              <Church className="text-white w-5 h-5 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-black dark:text-white font-bold text-base tracking-tight transition-colors duration-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">Lighthouse</span>
            <span className="text-[10px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">Gospel</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-2xl border border-black/5 dark:border-white/5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 text-sm font-semibold
                  ${isActive 
                    ? 'text-black dark:text-white' 
                    : 'text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white'}`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-white dark:bg-white/10 shadow-sm rounded-lg z-0 animate-apple-fade-in" />
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
            className="p-2.5 rounded-xl text-black/60 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-300 active:scale-90"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10 mx-1 hidden md:block" />

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-black dark:text-white p-2 w-10 h-10 flex items-center justify-center focus:outline-none rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
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

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden absolute top-full left-4 right-4 mt-4 p-4 
          bg-white/90 dark:bg-black/80 backdrop-blur-3xl border border-white/40 dark:border-white/10 
          rounded-[32px] shadow-2xl transition-all duration-500 ease-apple origin-top
          ${isOpen 
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
            : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'}`}
      >
        <div className="flex flex-col gap-1.5">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${index * 40}ms` : '0ms' }}
              className={`px-6 py-4 rounded-2xl transition-all duration-300 transform
                ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}
                ${location.pathname === item.path 
                  ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold' 
                  : 'text-black/60 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/giving"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black text-center shadow-xl"
          >
            Support Our Mission
          </Link>
        </div>
      </div>
    </nav>
  );
};
