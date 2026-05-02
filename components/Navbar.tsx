import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Anchor } from 'lucide-react';

const navItems = [
  { name: 'Home',       path: '/' },
  { name: 'About',      path: '/about' },
  { name: 'Sermons',    path: '/sermons' },
  { name: 'Ministries', path: '/ministries' },
  { name: 'Events',     path: '/events' },
  { name: 'Visit',      path: '/visit' },
];

export const Navbar: React.FC = () => {
  const [isOpen,  setIsOpen]  = useState(false);
  const [isDark,  setIsDark]  = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Dark-mode sync */
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* Close drawer on route change */
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* ── Main Nav Bar ──────────────────────────────────────────────── */}
      <header
        role="banner"
        className={`
          fixed top-0 left-0 right-0 z-50 flex justify-center px-4
          transition-all duration-500
          ${scrolled ? 'py-2' : 'py-4'}
        `}
      >
        <nav
          aria-label="Main navigation"
          className={`
            relative flex items-center justify-between w-full max-w-6xl
            px-4 py-2.5 rounded-[22px] transition-all duration-500
            ${scrolled
              ? 'bg-white/80 dark:bg-navy-900/80 backdrop-blur-2xl saturate-150 shadow-[0_8px_40px_rgba(27,58,107,.15)] dark:shadow-[0_8px_40px_rgba(0,0,0,.4)] border border-navy-100/60 dark:border-white/[0.06]'
              : 'bg-white/50 dark:bg-navy-900/50 backdrop-blur-xl border border-navy-100/40 dark:border-white/[0.04]'
            }
          `}
        >
          {/* ── Logo ─────────────────────────────────────────────────── */}
          <Link
            to="/"
            className="flex items-center gap-3 group outline-none shrink-0"
            aria-label="Lighthouse Gospel Church — Home"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold-400/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-navy-DEFAULT to-navy-800 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Anchor className="w-5 h-5 text-gold-300" aria-hidden="true" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-base text-navy-DEFAULT dark:text-white tracking-tight group-hover:text-navy-600 dark:group-hover:text-gold-300 transition-colors">
                Lighthouse
              </span>
              <span className="text-[10px] font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-widest">
                Gospel Church
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav Pills ────────────────────────────────────── */}
          <ul
            role="list"
            className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 bg-navy-50/60 dark:bg-navy-800/40 rounded-2xl p-1.5 border border-navy-100/40 dark:border-white/[0.05]"
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 outline-none
                    ${isActive(item.path)
                      ? 'bg-white dark:bg-navy-700 text-navy-DEFAULT dark:text-white shadow-sm'
                      : 'text-navy-600 dark:text-navy-200 hover:text-navy-DEFAULT dark:hover:text-white hover:bg-white/70 dark:hover:bg-navy-700/50'
                    }
                  `}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Right-side Actions ───────────────────────────────────── */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Give CTA */}
            <Link
              to="/giving"
              className="hidden md:inline-flex items-center gap-1.5 btn-primary text-sm py-2 px-4"
              aria-label="Online Giving"
            >
              Give
            </Link>

            {/* Contact */}
            <Link
              to="/connect"
              className="hidden md:inline-flex btn-outline text-sm py-2 px-4"
              aria-label="Contact us"
            >
              Contact
            </Link>

            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-navy-500 dark:text-navy-200 hover:bg-navy-100 dark:hover:bg-navy-700/60 transition-colors"
            >
              {isDark
                ? <Sun  size={18} aria-hidden="true" />
                : <Moon size={18} aria-hidden="true" />
              }
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-navy-DEFAULT dark:text-white hover:bg-navy-100 dark:hover:bg-navy-700/60 transition-colors"
            >
              {isOpen
                ? <X    size={20} aria-hidden="true" />
                : <Menu size={20} aria-hidden="true" />
              }
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Backdrop ───────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-40 bg-navy-900/40 backdrop-blur-sm lg:hidden
          transition-opacity duration-500
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* ── Mobile Drawer ─────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed top-0 right-0 bottom-0 w-[82%] max-w-[340px] z-50 lg:hidden
          bg-cream dark:bg-navy-900
          border-l border-navy-100 dark:border-navy-700/40
          shadow-[-20px_0_60px_rgba(27,58,107,.2)]
          transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-10 overflow-y-auto">
          {/* Nav links */}
          <nav aria-label="Mobile navigation">
            <ul role="list" className="flex flex-col gap-1">
              {[...navItems,
                { name: 'Give',    path: '/giving'  },
                { name: 'Contact', path: '/connect' },
              ].map((item, i) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{
                      transitionDelay: isOpen ? `${i * 35}ms` : '0ms',
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateX(0)' : 'translateX(16px)',
                    }}
                    className={`
                      flex items-center justify-between px-5 py-3.5 rounded-2xl
                      text-base font-medium transition-all duration-400
                      ${isActive(item.path)
                        ? 'bg-navy-DEFAULT text-white'
                        : 'text-navy-700 dark:text-navy-200 hover:bg-navy-100 dark:hover:bg-navy-800'
                      }
                    `}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer of drawer */}
          <div
            className="mt-auto pt-8 border-t border-navy-100 dark:border-navy-700/40"
            style={{ opacity: isOpen ? 1 : 0, transition: 'opacity .5s ease .3s' }}
          >
            <p className="text-xs text-navy-500 dark:text-navy-300 font-medium mb-1">Service Times</p>
            <p className="text-sm text-navy-700 dark:text-navy-200">Sunday · 9:00 AM &amp; 11:00 AM</p>
            <p className="text-sm text-navy-700 dark:text-navy-200">Tuesday · 7:30 PM Prayer</p>
            <p className="text-sm text-navy-700 dark:text-navy-200">Friday · 7:00 PM Youth</p>
            <p className="mt-4 text-[10px] text-navy-400 dark:text-navy-500 uppercase tracking-widest font-semibold">
              Lighthouse Gospel Church
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
