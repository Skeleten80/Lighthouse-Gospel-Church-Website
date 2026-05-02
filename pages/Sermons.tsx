import React, { useState } from 'react';
import {
  Play, Search, BookOpen, Calendar, Clock,
  Download, Headphones, Rss,
} from 'lucide-react';

/* ── Data ─────────────────────────────────────────────────────────────────── */
interface Sermon {
  id: string;
  title: string;
  series: string;
  speaker: string;
  date: string;
  duration: string;
  passage: string;
  tag: string;
  featured?: boolean;
}

const sermons: Sermon[] = [
  { id:'1', title:'When the Waves Rise',                         series:'Anchor Points',                        speaker:'Pastor Pedro Neufeld', date:'Oct 27, 2024', duration:'42 min', passage:'Matthew 14:22–33',    tag:'Faith',     featured:true },
  { id:'2', title:'The Peace That Guards',                       series:'Anchor Points',                        speaker:'Pastor Pedro Neufeld', date:'Oct 20, 2024', duration:'38 min', passage:'Philippians 4:4–9',   tag:'Hope'     },
  { id:'3', title:'Holding On When You Feel Like Letting Go',    series:'Anchor Points',                        speaker:'Pastor Pedro Neufeld', date:'Oct 13, 2024', duration:'44 min', passage:'Hebrews 12:1–3',      tag:'Courage'  },
  { id:'4', title:'Rooted and Grounded',                         series:'Anchor Points',                        speaker:'Pastor Pedro Neufeld', date:'Oct 6, 2024',  duration:'41 min', passage:'Ephesians 3:14–21',   tag:'Faith'    },
  { id:'5', title:'The Weight You Were Never Meant to Carry',    series:'Anchor Points',                        speaker:'Pastor Pedro Neufeld', date:'Sep 29, 2024', duration:'39 min', passage:'1 Peter 5:6–7',       tag:'Healing'  },
  { id:'6', title:'What Real Community Looks Like',              series:'Together: A Series on the Church',     speaker:'Pastor Pedro Neufeld', date:'Sep 15, 2024', duration:'43 min', passage:'Acts 2:42–47',        tag:'Community'},
  { id:'7', title:'Why We Gather',                               series:'Together: A Series on the Church',     speaker:'Pastor Pedro Neufeld', date:'Sep 8, 2024',  duration:'40 min', passage:'Hebrews 10:24–25',    tag:'Community'},
  { id:'8', title:'The Practice of Prayer',                      series:'Spiritual Disciplines',                speaker:'Pastor Pedro Neufeld', date:'Aug 25, 2024', duration:'46 min', passage:'Luke 11:1–13',        tag:'Prayer'   },
  { id:'9', title:'Fasting: Hunger That Leads to Fullness',      series:'Spiritual Disciplines',                speaker:'Pastor Pedro Neufeld', date:'Aug 18, 2024', duration:'37 min', passage:'Matthew 6:16–18',     tag:'Prayer'   },
  { id:'10',title:'Generous Life',                               series:'Stewardship &amp; Generosity',         speaker:'Pastor Pedro Neufeld', date:'Aug 11, 2024', duration:'40 min', passage:'2 Corinthians 9:6–8', tag:'Faith'    },
  { id:'11',title:'What the Spirit Is Saying',                   series:'Listening to God',                     speaker:'Pastor Pedro Neufeld', date:'Aug 4, 2024',  duration:'45 min', passage:'Revelation 2:7',      tag:'Courage'  },
  { id:'12',title:'Grace Is Not Permission to Drift',            series:'Listening to God',                     speaker:'Pastor Pedro Neufeld', date:'Jul 28, 2024', duration:'42 min', passage:'Romans 6:1–14',       tag:'Hope'     },
];

const allSeries = ['All Series', ...Array.from(new Set(sermons.map(s => s.series)))];
const allTags   = ['All Topics', ...Array.from(new Set(sermons.map(s => s.tag)))];

const tagColor: Record<string, string> = {
  Faith:     'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Hope:      'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Community: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  Healing:   'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
  Prayer:    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  Courage:   'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
};

/* ── Sermon Card ─────────────────────────────────────────────────────────── */
const SermonCard: React.FC<{ s: Sermon }> = ({ s }) => (
  <article className="card-base flex flex-col overflow-hidden group">
    {/* Thumbnail */}
    <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 relative overflow-hidden cursor-pointer">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none" aria-hidden="true">
        <div className="beam" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play className="w-5 h-5 text-white ml-0.5" aria-hidden="true" />
        </div>
      </div>
      {s.tag && (
        <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${tagColor[s.tag] ?? 'bg-gray-100 text-gray-700'}`}>
          {s.tag}
        </span>
      )}
    </div>

    {/* Info */}
    <div className="flex flex-col flex-1 p-5 gap-3">
      <p className="text-xs text-gold-600 dark:text-gold-400 font-semibold">{s.series}</p>
      <h3 className="font-heading font-semibold text-navy-DEFAULT dark:text-white leading-snug group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors">
        {s.title}
      </h3>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-navy-500 dark:text-navy-300 mt-auto">
        <span className="flex items-center gap-1"><BookOpen size={11} aria-hidden="true" />{s.passage}</span>
        <span className="flex items-center gap-1"><Calendar size={11} aria-hidden="true" />{s.date}</span>
        <span className="flex items-center gap-1"><Clock    size={11} aria-hidden="true" />{s.duration}</span>
      </div>
    </div>

    {/* Actions */}
    <div className="flex gap-2 px-5 pb-5 border-t border-navy-100 dark:border-navy-700/40 pt-4">
      <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-navy-DEFAULT hover:bg-navy-800 dark:hover:bg-navy-700 rounded-lg py-2 transition-colors" aria-label={`Watch ${s.title}`}>
        <Play size={12} aria-hidden="true" /> Watch
      </button>
      <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-navy-600 dark:text-navy-200 border border-navy-200 dark:border-navy-600 rounded-lg py-2 hover:bg-navy-50 dark:hover:bg-navy-700/40 transition-colors" aria-label={`Listen to ${s.title}`}>
        <Headphones size={12} aria-hidden="true" /> Listen
      </button>
      <button className="w-9 flex items-center justify-center text-navy-500 dark:text-navy-300 border border-navy-200 dark:border-navy-600 rounded-lg hover:bg-navy-50 dark:hover:bg-navy-700/40 transition-colors" aria-label={`Download ${s.title}`}>
        <Download size={12} aria-hidden="true" />
      </button>
    </div>
  </article>
);

/* ── Page ─────────────────────────────────────────────────────────────────── */
export const Sermons: React.FC = () => {
  const [search,       setSearch]       = useState('');
  const [activeSeries, setActiveSeries] = useState('All Series');
  const [activeTag,    setActiveTag]    = useState('All Topics');

  const featured = sermons.find(s => s.featured)!;
  const filtered  = sermons.filter(s => {
    const q = search.toLowerCase();
    return (
      (s.title.toLowerCase().includes(q) || s.passage.toLowerCase().includes(q) || s.series.toLowerCase().includes(q)) &&
      (activeSeries === 'All Series' || s.series === activeSeries) &&
      (activeTag    === 'All Topics' || s.tag    === activeTag)
    );
  });

  return (
    <div>

      {/* Header */}
      <header className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-DEFAULT to-navy-800 text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25" aria-hidden="true">
          <div className="beam" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="section-label mb-5 inline-block bg-gold-500/20 border-gold-400/40 text-gold-300">
            Sermons &amp; Media
          </span>
          <h1 className="font-heading font-bold text-5xl md:text-6xl mb-5 leading-tight">
            Every Week, a Fresh Word
          </h1>
          <p className="text-white/70 text-lg mb-8">
            Accessible wherever you are — watch online, listen on the go, or join us in person.
          </p>
          <button className="btn-secondary text-sm inline-flex items-center gap-2">
            <Rss size={15} aria-hidden="true" /> Subscribe to Podcast
          </button>
        </div>
      </header>

      {/* Featured Sermon */}
      <section className="py-20 px-6" aria-label="Featured sermon">
        <div className="max-w-6xl mx-auto">
          <span className="section-label mb-6 inline-block">Latest Message</span>
          <div className="grid md:grid-cols-5 gap-8 items-start">

            <div className="md:col-span-3 rounded-2xl overflow-hidden aspect-video bg-navy-900 relative group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700/60 to-navy-900/80" />
              <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none" aria-hidden="true">
                <div className="beam" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-8">
                <div className="w-20 h-20 rounded-full bg-gold-400 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <Play className="w-9 h-9 text-white ml-1" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gold-300 text-xs uppercase tracking-widest font-semibold mb-2">{featured.series}</p>
                  <p className="font-heading font-bold text-white text-2xl md:text-3xl leading-tight">{featured.title}</p>
                  <p className="text-white/60 text-sm mt-2">{featured.passage}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-5">
              <div className="card-base p-6">
                <p className="text-xs text-gold-600 dark:text-gold-400 font-semibold mb-1 uppercase tracking-wider">Current Series</p>
                <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-xl mb-4">{featured.series}</h2>
                <div className="space-y-2 text-sm text-navy-600 dark:text-navy-200 mb-5">
                  <p className="flex items-center gap-2"><BookOpen size={14} aria-hidden="true" />{featured.passage}</p>
                  <p className="text-navy-500 dark:text-navy-300 pl-5">{featured.speaker}</p>
                  <p className="flex items-center gap-2"><Calendar size={14} aria-hidden="true" />{featured.date}</p>
                  <p className="flex items-center gap-2"><Clock    size={14} aria-hidden="true" />{featured.duration}</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 btn-navy text-sm py-2.5 flex items-center justify-center gap-1.5">
                    <Play size={14} aria-hidden="true" /> Watch Now
                  </button>
                  <button className="flex-1 btn-outline text-sm py-2.5 flex items-center justify-center gap-1.5">
                    <Headphones size={14} aria-hidden="true" /> Listen
                  </button>
                </div>
              </div>

              <div className="card-base p-5">
                <p className="text-xs text-navy-500 dark:text-navy-300 uppercase tracking-widest mb-3 font-semibold">Previous in Series</p>
                <ul className="space-y-3">
                  {sermons.slice(1, 4).map(s => (
                    <li key={s.id} className="flex items-center gap-3 cursor-pointer group/item">
                      <div className="w-8 h-8 rounded-lg bg-navy-50 dark:bg-navy-700/60 flex items-center justify-center shrink-0 group-hover/item:bg-gold-100 dark:group-hover/item:bg-gold-900/30 transition-colors">
                        <Play size={12} className="text-navy-500 dark:text-navy-300 group-hover/item:text-gold-600 dark:group-hover/item:text-gold-400 ml-0.5" aria-hidden="true" />
                      </div>
                      <span className="text-sm text-navy-700 dark:text-navy-200 group-hover/item:text-gold-700 dark:group-hover/item:text-gold-400 transition-colors leading-tight">{s.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-20 px-6 bg-cream-200/50 dark:bg-navy-800/30" aria-label="Sermon archive">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl mb-8">Sermon Archive</h2>

          {/* Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search sermons, passages, series…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-navy-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-navy-DEFAULT dark:text-white placeholder-navy-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                aria-label="Search sermons"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allSeries.map(s => (
                <button
                  key={s}
                  onClick={() => setActiveSeries(s)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    activeSeries === s
                      ? 'bg-navy-DEFAULT text-white'
                      : 'bg-white dark:bg-navy-800 border border-navy-200 dark:border-navy-600 text-navy-600 dark:text-navy-200 hover:border-navy-400'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Topic pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {allTags.map(t => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeTag === t
                    ? 'bg-gold-500 text-white'
                    : 'bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 hover:bg-gold-100 dark:hover:bg-gold-900/40'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-navy-500 dark:text-navy-300">
              <Search size={40} className="mx-auto mb-4 opacity-30" aria-hidden="true" />
              <p>No sermons found — try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(s => <SermonCard key={s.id} s={s} />)}
            </div>
          )}
        </div>
      </section>

      {/* Podcast */}
      <section className="py-20 px-6 bg-navy-DEFAULT dark:bg-navy-900 text-white text-center" aria-label="Podcast">
        <div className="max-w-3xl mx-auto">
          <Headphones className="w-12 h-12 text-gold-400 mx-auto mb-5" aria-hidden="true" />
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Take the Message With You</h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Subscribe to the Lighthouse Gospel Church podcast and never miss a message —
            available on Apple Podcasts, Spotify, and wherever you listen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Apple Podcasts','Spotify','Google Podcasts','RSS Feed'].map(p => (
              <button key={p} className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-sm font-semibold hover:bg-white/20 transition-colors">
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
