import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Tag, ChevronRight, ArrowRight } from 'lucide-react';

/* ── Data ─────────────────────────────────────────────────────────────────── */
type Category = 'All' | 'Worship' | 'Community' | 'Youth' | 'Prayer' | 'Missions';

interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: Exclude<Category, 'All'>;
  recurring?: boolean;
}

const events: ChurchEvent[] = [
  {
    id: '1',
    title: 'Sunday Morning Worship',
    date: 'Every Sunday',
    time: '9:00 AM & 11:00 AM',
    location: 'Main Sanctuary',
    description: 'Join us for uplifting worship, a practical message from God\'s Word, and warm community. Children\'s programming available for all ages during both services.',
    category: 'Worship',
    recurring: true,
  },
  {
    id: '2',
    title: 'Prayer & Bible Study',
    date: 'Every Tuesday',
    time: '7:30 PM – 8:30 PM',
    location: 'Fellowship Hall',
    description: 'A midweek gathering to deepen our roots in Scripture and carry each other\'s burdens in prayer. Open to all — bring your Bible and your questions.',
    category: 'Prayer',
    recurring: true,
  },
  {
    id: '3',
    title: 'Friday Night Youth',
    date: 'Every Friday',
    time: '7:00 PM – 9:30 PM',
    location: 'Youth Room',
    description: 'High-energy Friday nights for teens 12–18 — worship, games, small groups, and real conversations about faith and life.',
    category: 'Youth',
    recurring: true,
  },
  {
    id: '4',
    title: 'Community Outreach Day',
    date: 'Nov 2, 2024',
    time: '10:00 AM – 2:00 PM',
    location: 'Listowel Community Centre',
    description: 'We\'re serving our neighbours! Come help us package food hampers, run errands for seniors, and share the love of Christ in practical ways.',
    category: 'Community',
  },
  {
    id: '5',
    title: 'Mission Breakfast',
    date: 'Nov 10, 2024',
    time: '8:30 AM',
    location: 'Fellowship Hall',
    description: 'Hear from missionaries we support locally and globally over a hot breakfast. A great opportunity to learn how your giving is changing lives.',
    category: 'Missions',
  },
  {
    id: '6',
    title: 'Men\'s Ministry Breakfast',
    date: 'Nov 16, 2024',
    time: '8:00 AM',
    location: 'Fellowship Hall',
    description: 'Monthly gathering for the men of Lighthouse — real talk, good food, and brotherhood rooted in Scripture.',
    category: 'Community',
  },
  {
    id: '7',
    title: 'Women\'s Evening of Worship',
    date: 'Nov 21, 2024',
    time: '7:00 PM',
    location: 'Sanctuary',
    description: 'An evening of worship, prayer, and encouragement for the women of our church. Guest speaker and dessert reception to follow.',
    category: 'Community',
  },
  {
    id: '8',
    title: 'Christmas Concert',
    date: 'Dec 15, 2024',
    time: '6:30 PM',
    location: 'Main Sanctuary',
    description: 'Celebrate the Advent season with our annual Christmas concert — featuring the Lighthouse worship team, choir, and a children\'s presentation.',
    category: 'Worship',
  },
];

const categories: Category[] = ['All','Worship','Prayer','Youth','Community','Missions'];

const catColor: Record<Exclude<Category,'All'>, string> = {
  Worship:   'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700/30',
  Prayer:    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-700/30',
  Youth:     'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-700/30',
  Community: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/30',
  Missions:  'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 border-rose-200 dark:border-rose-700/30',
};

/* Date badge */
const DateBadge: React.FC<{ date: string; recurring?: boolean }> = ({ date, recurring }) => {
  if (recurring) {
    const parts = date.split(' ');
    return (
      <div className="shrink-0 w-20 h-20 rounded-2xl bg-navy-50 dark:bg-navy-700/50 border border-navy-100 dark:border-navy-600/40 flex flex-col items-center justify-center gap-0.5">
        <span className="text-[9px] font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">Weekly</span>
        <span className="font-heading font-bold text-navy-DEFAULT dark:text-white text-lg leading-none">
          {parts[1]?.substring(0, 3).toUpperCase()}
        </span>
      </div>
    );
  }
  const [month, day] = date.split(' ');
  return (
    <div className="shrink-0 w-20 h-20 rounded-2xl bg-gold-50 dark:bg-gold-900/20 border border-gold-200 dark:border-gold-700/30 flex flex-col items-center justify-center gap-0.5">
      <span className="text-[9px] font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">{month}</span>
      <span className="font-heading font-bold text-navy-DEFAULT dark:text-white text-2xl leading-none">{day?.replace(',','')}</span>
    </div>
  );
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export const Events: React.FC = () => {
  const [active, setActive] = useState<Category>('All');

  const filtered = events.filter(e => active === 'All' || e.category === active);

  return (
    <div>

      {/* Header */}
      <header className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-DEFAULT to-navy-800 text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25" aria-hidden="true">
          <div className="beam" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="section-label mb-5 inline-block bg-gold-500/20 border-gold-400/40 text-gold-300">
            What's On
          </span>
          <h1 className="font-heading font-bold text-5xl md:text-6xl mb-5 leading-tight">
            Events &amp; Calendar
          </h1>
          <p className="text-white/70 text-lg">
            From Sunday morning worship to community outreach — there's always something happening at Lighthouse.
          </p>
        </div>
      </header>

      {/* Recurring Services Quick-Reference */}
      <section className="py-14 px-6 bg-cream-200/50 dark:bg-navy-800/30" aria-label="Regular service times">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading font-semibold text-navy-DEFAULT dark:text-white text-xl mb-8 text-center">
            Regular Weekly Gatherings
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { day:'Sunday',   times:'9:00 AM · 11:00 AM', name:'Morning Worship',       note:'Main Sanctuary — Children\'s ministry included' },
              { day:'Tuesday',  times:'7:30 PM',             name:'Prayer & Bible Study',  note:'Fellowship Hall — All welcome'                   },
              { day:'Friday',   times:'7:00 PM',             name:'Youth Night',           note:'Youth Room — Ages 12–18'                         },
            ].map(({ day, times, name, note }) => (
              <div key={day} className="card-base p-5 text-center">
                <p className="font-heading font-bold text-gold-600 dark:text-gold-400 text-xl mb-1">{day}</p>
                <p className="font-semibold text-navy-DEFAULT dark:text-white mb-1">{times}</p>
                <p className="text-sm text-navy-700 dark:text-navy-200 font-medium">{name}</p>
                <p className="text-xs text-navy-500 dark:text-navy-400 mt-1">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event List */}
      <section className="py-20 px-6" aria-label="Upcoming events">
        <div className="max-w-4xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter events by category">
            {categories.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  active === cat
                    ? 'bg-navy-DEFAULT text-white shadow-md'
                    : 'bg-white dark:bg-navy-800 border border-navy-200 dark:border-navy-600 text-navy-600 dark:text-navy-200 hover:border-navy-400 dark:hover:border-navy-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-5" role="tabpanel">
            {filtered.map(event => (
              <article
                key={event.id}
                className="card-base p-5 md:p-6 flex flex-col sm:flex-row gap-5 group"
              >
                <DateBadge date={event.date} recurring={event.recurring} />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="font-heading font-semibold text-navy-DEFAULT dark:text-white text-lg group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors leading-tight">
                      {event.title}
                    </h3>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${catColor[event.category]}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-navy-500 dark:text-navy-300 mb-3">
                    <span className="flex items-center gap-1.5"><Clock   size={12} aria-hidden="true" />{event.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin  size={12} aria-hidden="true" />{event.location}</span>
                  </div>
                  <p className="text-sm text-navy-600 dark:text-navy-200 leading-relaxed">{event.description}</p>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-16 text-navy-400 dark:text-navy-500">
                <Calendar size={40} className="mx-auto mb-4 opacity-30" aria-hidden="true" />
                <p>No events in this category right now.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Facility CTA */}
      <section className="py-20 px-6 bg-navy-DEFAULT dark:bg-navy-900 text-white" aria-label="Host an event">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Interested in Hosting an Event?
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Lighthouse Gospel Church offers beautiful spaces for community programs, non-profits,
            and family celebrations. We'd love to serve our neighbours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/connect" className="btn-primary flex items-center gap-2">
              Inquire About Our Spaces <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/visit" className="btn-secondary flex items-center gap-2">
              Directions &amp; Parking <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
