
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Connect } from './pages/Connect';
import { PrivacyPolicy, TermsOfService } from './pages/Legal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative text-black dark:text-white selection:bg-blue-500/30 transition-colors duration-500">
        <div className="mesh-gradient" />
        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>

        <footer className="relative z-10 py-16 px-6 bg-white/20 dark:bg-black/40 backdrop-blur-3xl border-t border-black/5 dark:border-white/10 transition-colors duration-500">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-8">
            <h4 className="text-2xl font-bold tracking-tighter text-black/90 dark:text-white/90">Lighthouse Gospel</h4>
            
            <div className="flex flex-col items-center gap-4">
              <span className="text-black/60 dark:text-white/60 text-[10px] uppercase tracking-[0.2em] font-black">
                © {currentYear} Lighthouse Gospel Church. All Rights Reserved.
              </span>
              <div className="flex gap-8">
                <Link to="/privacy" className="text-black/60 dark:text-white/60 text-[10px] uppercase tracking-[0.2em] font-black hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-black/60 dark:text-white/60 text-[10px] uppercase tracking-[0.2em] font-black hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
