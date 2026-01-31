
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Events } from './pages/Events';
import { Sermons } from './pages/Sermons';
import { Giving } from './pages/Giving';
import { Connect } from './pages/Connect';
import * as LucideIcons from 'lucide-react';

const { MessageCircle } = LucideIcons;

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
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/giving" element={<Giving />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>

        <footer className="relative z-10 py-16 px-6 bg-white/20 dark:bg-black/40 backdrop-blur-3xl border-t border-black/5 dark:border-white/10 transition-colors duration-500">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold tracking-tighter text-black/90 dark:text-white/90">Lighthouse Gospel</h4>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-black dark:text-white">Quick Links</h5>
              <ul className="space-y-2 text-black/70 dark:text-white/70 text-sm">
                <li><a href="#/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Our Story</a></li>
                <li><a href="#/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Worship Times</a></li>
                <li><a href="#/events" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Calendar</a></li>
                <li><a href="#/sermons" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resources</a></li>
                <li>
                  <a 
                    href="https://wa.me/15195550123" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-green-500 dark:hover:text-green-400 transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle size={14} /> Join WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-black dark:text-white">Get Involved</h5>
              <ul className="space-y-2 text-black/70 dark:text-white/70 text-sm">
                <li><a href="#/connect" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Join a Group</a></li>
                <li><a href="#/connect" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Volunteer</a></li>
                <li><a href="#/giving" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Give Online</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-black dark:text-white">Stay Connected</h5>
              <p className="text-black/70 dark:text-white/70 text-sm mb-4">Subscribe for weekly inspiration.</p>
              <div className="flex gap-2">
                <input type="text" placeholder="Email" className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-blue-500" />
                <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-xs font-bold transition-colors">Go</button>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-black/10 dark:border-white/10 text-center">
            <p className="text-black/60 dark:text-white/60 text-[10px] uppercase tracking-[0.2em] font-black inline-flex flex-wrap justify-center gap-x-8 gap-y-2">
              <span>© {currentYear} Lighthouse Gospel Church. All Rights Reserved.</span>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
