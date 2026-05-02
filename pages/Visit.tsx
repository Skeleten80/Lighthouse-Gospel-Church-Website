import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Clock, Calendar, Car, Accessibility,
  Coffee, Baby, Smile, ChevronDown, ArrowRight, Phone,
} from 'lucide-react';

/* ── FAQ Data ─────────────────────────────────────────────────────────────── */
interface FAQ {
  q: string;
  a: string;
}
const faqs: FAQ[] = [
  {
    q: 'What should I wear?',
    a: 'Come as you are — jeans and a t-shirt are just as welcome as Sunday best. We care about you, not your outfit.',
  },
  {
    q: 'How long does a service last?',
    a: 'Services run approximately 75–90 minutes, including worship, a message, and a short time of response.',
  },
  {
    q: 'Do I need to bring anything?',
    a: 'Nothing at all. Bibles and printed sermon notes are available at the welcome desk, or you can follow along digitally.',
  },
  {
    q: 'Will I be singled out as a visitor?',
    a: 'We make a point of not putting guests on the spot. You\'re welcome to observe, participate as you feel comfortable, and leave without pressure.',
  },
  {
    q: 'What about my kids?',
    a: 'Kids\' Lighthouse runs concurrently with both Sunday services for children from nursery age through Grade 6. Safe, trained volunteers and background-checked staff in every room.',
  },
  {
    q: 'Is there parking?',
    a: 'Yes — free parking is available in our main lot and along the adjacent field entrance. Accessible spots are located closest to the main entrance.',
  },
  {
    q: 'Is the building wheelchair accessible?',
    a: 'Absolutely. The main entrance is at grade level, there is a wheelchair-accessible washroom, and seating is flexible in the sanctuary. Please let us know in advance if you have specific needs and we\'ll gladly accommodate.',
  },
  {
    q: 'What kind of music do you have?',
    a: 'Our worship is a blend of modern contemporary praise and classic hymns, led by a full live band. It\'s heartfelt, not performance-driven.',
  },
];

const FaqItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-navy-100 dark:border-navy-700/40 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-start justify-between py-4 text-left gap-4 group"
      >
        <span className="font-semibold text-navy-DEFAULT dark:text-white group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors text-sm md:text-base">
          {faq.q}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-navy-400 dark:text-navy-300 transition-transform duration-300 mt-1 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <p className="pb-5 text-sm text-navy-600 dark:text-navy-200 leading-relaxed pr-8">
          {faq.a}
        </p>
      )}
    </div>
  );
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export const Visit: React.FC = () => (
  <div>

    {/* Header */}
    <header className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-DEFAULT to-navy-800 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25" aria-hidden="true">
        <div className="beam" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="section-label mb-5 inline-block bg-gold-500/20 border-gold-400/40 text-gold-300">
          We Can't Wait to Meet You
        </span>
        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-5 leading-tight">
          Plan Your Visit
        </h1>
        <p className="text-white/70 text-lg leading-relaxed">
          We know visiting a new church can feel like a big step. We've tried to make it as
          easy and welcoming as possible — here's everything you need to know.
        </p>
      </div>
    </header>

    {/* Service Times */}
    <section className="py-16 px-6 bg-cream-200/50 dark:bg-navy-800/30" aria-label="Service times">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-label mb-4 inline-block">When to Come</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl">Service Times</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { day:'Sunday',  time:'9:00 AM',   name:'First Service',         icon:<Calendar size={20} />, note:'Main Sanctuary · Kids\' ministry included' },
            { day:'Sunday',  time:'11:00 AM',  name:'Second Service',        icon:<Calendar size={20} />, note:'Main Sanctuary · Kids\' ministry included' },
            { day:'Tuesday', time:'7:30 PM',   name:'Prayer & Bible Study',  icon:<Clock    size={20} />, note:'Fellowship Hall · All welcome'             },
            { day:'Friday',  time:'7:00 PM',   name:'Youth Night',           icon:<Clock    size={20} />, note:'Youth Room · Grades 7–12'                  },
          ].map(({ day, time, name, icon, note }) => (
            <div key={`${day}-${time}`} className="card-base p-5 text-center group">
              <div className="w-12 h-12 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mx-auto mb-4 text-gold-600 dark:text-gold-400">
                {icon}
              </div>
              <p className="font-heading font-bold text-gold-600 dark:text-gold-400 text-xl">{time}</p>
              <p className="font-semibold text-navy-DEFAULT dark:text-white mt-1">{day}</p>
              <p className="text-sm text-navy-700 dark:text-navy-200 mt-0.5">{name}</p>
              <p className="text-xs text-navy-500 dark:text-navy-400 mt-1 leading-snug">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What to Expect */}
    <section className="py-20 px-6" aria-label="What to expect">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-block">First Time?</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl">
            What to Expect
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon:<Smile        size={22} />, title:'A Warm Welcome',         desc:'Friendly greeters will meet you at the door. We\'ll point you where you need to go — no wandering alone.' },
            { icon:<Coffee       size={22} />, title:'Coffee & Refreshments',  desc:'Arrive early and help yourself to complimentary coffee and tea in the foyer. Stay after for more conversation.' },
            { icon:<Baby         size={22} />, title:'Care for Your Kids',     desc:'Check your children into Kids\' Lighthouse at the welcome desk. A receipt tag system keeps everything secure.' },
            { icon:<Clock        size={22} />, title:'75–90 Minute Service',   desc:'We start on time and finish on time. Plan for about 90 minutes including worship, a message, and response.' },
            { icon:<Car          size={22} />, title:'Easy Parking',           desc:'Free parking in our lot and along the field entrance. Accessible spots right at the front door.' },
            { icon:<Accessibility size={22}/>, title:'Accessibility',          desc:'Wheelchair ramp at the main entrance, accessible seating, large-print materials available on request.' },
          ].map(({ icon, title, desc }) => (
            <article key={title} className="card-base p-6 group">
              <div className="w-12 h-12 rounded-xl bg-navy-50 dark:bg-navy-700/50 flex items-center justify-center mb-4 text-gold-600 dark:text-gold-400 transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
              <h3 className="font-heading font-semibold text-navy-DEFAULT dark:text-white text-lg mb-2">{title}</h3>
              <p className="text-sm text-navy-600 dark:text-navy-200 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Location & Map */}
    <section className="py-20 px-6 bg-cream-200/50 dark:bg-navy-800/30" aria-label="Location and directions">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label mb-4 inline-block">Find Us</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl">
            Getting Here
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Map embed */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-navy-100 dark:border-navy-700/40" style={{ height: '420px' }}>
            <iframe
              title="Lighthouse Gospel Church on Google Maps"
              src="https://maps.google.com/maps?q=4817+Line+80+Listowel+ON+N4W+3G9&output=embed&z=14"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address & details */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card-base p-6">
              <h3 className="font-heading font-semibold text-navy-DEFAULT dark:text-white text-lg mb-4">Address</h3>
              <address className="not-italic space-y-3">
                <div className="flex gap-3">
                  <MapPin size={18} className="shrink-0 mt-0.5 text-gold-500" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-navy-DEFAULT dark:text-white">Lighthouse Gospel Church</p>
                    <p className="text-navy-600 dark:text-navy-200 text-sm">4817 Line 80</p>
                    <p className="text-navy-600 dark:text-navy-200 text-sm">Listowel, ON N4W 3G9</p>
                  </div>
                </div>
                <a href="tel:5195215539" className="flex items-center gap-3 text-navy-600 dark:text-navy-200 hover:text-gold-700 dark:hover:text-gold-400 transition-colors text-sm">
                  <Phone size={16} className="shrink-0 text-gold-500" aria-hidden="true" />
                  519-521-5539
                </a>
              </address>
              <a
                href="https://maps.google.com/?q=4817+Line+80+Listowel+ON+N4W+3G9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy text-sm mt-5 w-full flex items-center justify-center gap-2"
              >
                <MapPin size={14} aria-hidden="true" /> Get Directions
              </a>
            </div>

            <div className="card-base p-6">
              <h3 className="font-heading font-semibold text-navy-DEFAULT dark:text-white mb-4">Driving Directions</h3>
              <ul className="space-y-3 text-sm text-navy-600 dark:text-navy-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" />
                  <span><strong className="text-navy-DEFAULT dark:text-white">From Listowel:</strong> Head north on Wallace Street, turn right onto Line 80 — the church is approximately 3 km on your left.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" />
                  <span><strong className="text-navy-DEFAULT dark:text-white">From Stratford:</strong> Take Hwy 23 north to Listowel, then follow Wallace Street north to Line 80.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" />
                  <span><strong className="text-navy-DEFAULT dark:text-white">Parking:</strong> Main lot is off Line 80. Overflow parking available in the adjacent field.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 px-6" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label mb-4 inline-block">Questions</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl">
            First-Time Visitor FAQ
          </h2>
        </div>
        <div className="card-base p-6 md:p-10">
          {faqs.map(faq => <FaqItem key={faq.q} faq={faq} />)}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-6 bg-navy-DEFAULT dark:bg-navy-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Have More Questions?</h2>
        <p className="text-white/70 mb-8 leading-relaxed">
          We'd love to hear from you before you come. Send us a message and we'll get back to you quickly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/connect" className="btn-primary flex items-center gap-2">
            Contact Us <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a href="tel:5195215539" className="btn-secondary flex items-center gap-2">
            <Phone size={16} aria-hidden="true" /> Call 519-521-5539
          </a>
        </div>
      </div>
    </section>

  </div>
);
