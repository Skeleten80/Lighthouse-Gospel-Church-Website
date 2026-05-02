import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Anchor, MapPin, Phone, Mail, Facebook, Youtube, Instagram } from 'lucide-react';
import { Navbar }     from './components/Navbar';
import { Home }       from './pages/Home';
import { About }      from './pages/About';
import { Sermons }    from './pages/Sermons';
import { Events }     from './pages/Events';
import { Ministries } from './pages/Ministries';
import { Visit }      from './pages/Visit';
import { Giving }     from './pages/Giving';
import { Connect }    from './pages/Connect';
import { PrivacyPolicy, TermsOfService } from './pages/Legal';

/* Scroll to top on route change */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

/* ── Footer ──────────────────────────────────────────────────────────────── */
const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const links = [
    { label: 'About Us',      to: '/about'      },
    { label: 'Sermons',       to: '/sermons'    },
    { label: 'Events',        to: '/events'     },
    { label: 'Ministries',    to: '/ministries' },
    { label: 'Visit Us',      to: '/visit'      },
    { label: 'Online Giving', to: '/giving'     },
    { label: 'Contact',       to: '/connect'    },
  ];
  const serviceTimes = [
    { when: 'Sunday · 9:00 AM',   note: 'First Service — Main Sanctuary'   },
    { when: 'Sunday · 11:00 AM',  note: 'Second Service — Main Sanctuary'  },
    { when: 'Tuesday · 7:30 PM',  note: 'Prayer & Bible Study'             },
    { when: 'Friday · 7:00 PM',   note: 'Youth Night'                      },
  ];

  return (
    <footer className="relative z-10 bg-navy-DEFAULT dark:bg-navy-900 text-white" aria-label="Site footer">
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group" aria-label="Home">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg">
                <Anchor className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white group-hover:text-gold-200 transition-colors">Lighthouse</span>
                <span className="text-[10px] font-semibold text-gold-300 uppercase tracking-widest">Gospel Church</span>
              </div>
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed mb-6">
              A welcoming non-denominational church in Listowel, Ontario — shining
              the light of Jesus Christ in our community and beyond.
            </p>
            <div className="flex gap-3">
              {[Facebook, Youtube, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  aria-label={['Facebook','YouTube','Instagram'][i]}
                  className="w-9 h-9 rounded-xl bg-navy-700 hover:bg-gold-500 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h2 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Service Times</h2>
            <ul className="space-y-3">
              {serviceTimes.map(({ when, note }) => (
                <li key={when} className="flex gap-3 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-white font-medium">{when}</span>
                    <br />
                    <span className="text-navy-300 text-xs">{note}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Quick Links</h2>
            <ul className="space-y-2">
              {links.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-navy-300 hover:text-gold-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Contact Us</h2>
            <address className="not-italic space-y-3 text-sm">
              <a
                href="https://maps.google.com/?q=4817+Line+80+Listowel+ON+N4W+3G9"
                target="_blank" rel="noopener noreferrer"
                className="flex gap-3 text-navy-300 hover:text-gold-300 transition-colors"
              >
                <MapPin size={16} className="shrink-0 mt-0.5 text-gold-400" aria-hidden="true" />
                <span>4817 Line 80<br />Listowel, ON N4W 3G9</span>
              </a>
              <a href="tel:5195215539" className="flex items-center gap-3 text-navy-300 hover:text-gold-300 transition-colors">
                <Phone size={16} className="shrink-0 text-gold-400" aria-hidden="true" />
                519-521-5539
              </a>
              <a href="mailto:pedroneufeld47@gmail.com" className="flex items-center gap-3 text-navy-300 hover:text-gold-300 transition-colors">
                <Mail size={16} className="shrink-0 text-gold-400" aria-hidden="true" />
                pedroneufeld47@gmail.com
              </a>
            </address>
          </div>
        </div>

        <div className="divider mb-6" aria-hidden="true" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-navy-400">
          <p>© {year} Lighthouse Gospel Church. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms"   className="hover:text-gold-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ── App ─────────────────────────────────────────────────────────────────── */
const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <div className="min-h-screen flex flex-col text-navy-DEFAULT dark:text-cream-100 selection:bg-gold-300/40 transition-colors duration-500">
      <Navbar />
      <main className="relative z-10 flex-1" id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/sermons"    element={<Sermons />} />
          <Route path="/events"     element={<Events />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/visit"      element={<Visit />} />
          <Route path="/giving"     element={<Giving />} />
          <Route path="/connect"    element={<Connect />} />
          <Route path="/privacy"    element={<PrivacyPolicy />} />
          <Route path="/terms"      element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
