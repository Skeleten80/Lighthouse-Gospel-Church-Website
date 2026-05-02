import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Play, Clock, Calendar, Users,
  Heart, BookOpen, Music, Star, ChevronRight,
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

/* ── Sermon data ──────────────────────────────────────────────────────────── */
const featuredSeries = {
  title: 'Anchor Points',
  subtitle: 'Finding Stability in Uncertain Times',
  latestTitle: 'When the Waves Rise',
  latestDate: 'October 27, 2024',
  latestSpeaker: 'Pastor Pedro Neufeld',
};

/* ── Upcoming Events ──────────────────────────────────────────────────────── */
const upcomingEvents = [
  {
    title: 'Sunday Worship Service',
    day: 'Every Sunday',
    time: '9:00 AM & 11:00 AM',
    tag: 'Worship',
  },
  {
    title: 'Prayer & Bible Study',
    day: 'Every Tuesday',
    time: '7:30 PM',
    tag: 'Prayer',
  },
  {
    title: 'Youth Night',
    day: 'Every Friday',
    time: '7:00 PM',
    tag: 'Youth',
  },
];

/* ── Ministry previews ────────────────────────────────────────────────────── */
const ministryPreviews = [
  { icon: <Star  size={22} />, title: "Kids' Lighthouse",  desc: 'Creative, engaging faith formation for children ages 0–11.'          },
  { icon: <Users size={22} />, title: 'Youth Ministry',    desc: 'A Friday-night community for teens to belong, grow, and lead.'        },
  { icon: <Heart size={22} />, title: 'Life Groups',       desc: 'Small groups meeting in homes throughout the week.'                    },
  { icon: <Music size={22} />, title: 'Worship Team',      desc: 'Serving the congregation through music and creative arts.'            },
];

/* ── Component ─────────────────────────────────────────────────────────────── */
export const Home: React.FC = () => (
  <div>

    {/* ════════════════════════════════════ HERO ════════════════════════════════════ */}
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      aria-label="Welcome hero"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-DEFAULT to-navy-800"
        aria-hidden="true"
      />

      {/* Lighthouse beam */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="beam" />
      </div>

      {/* Subtle star-field dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(24)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left:  `${(i * 37 + 11) % 100}%`,
              top:   `${(i * 53 + 7)  % 80}%`,
              opacity: 0.15 + (i % 5) * 0.06,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <span className="section-label mb-6 inline-block bg-gold-500/20 border-gold-400/40 text-gold-300">
          Listowel, Ontario
        </span>

        <h1 className="font-heading font-bold text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
          A Light in the Dark.
          <br />
          <span className="text-gold-300">A Home for Every Heart.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Lighthouse Gospel Church is a welcoming, non-denominational community in Listowel, Ontario —
          where grace is real, belonging is unconditional, and every life matters to God.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/visit" className="btn-primary text-sm">
            Plan Your Visit
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/sermons" className="btn-secondary text-sm">
            <Play size={16} aria-hidden="true" />
            Watch Sermons
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-gentle-float"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/30" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </div>
    </section>

    {/* ═══════════════════════════════ SERVICE TIMES STRIP ══════════════════════════ */}
    <section
      className="bg-navy-DEFAULT dark:bg-navy-900 py-8 px-6"
      aria-label="Service times"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { time: '9:00 AM',   day: 'Sunday',    note: 'First Service'     },
          { time: '11:00 AM',  day: 'Sunday',    note: 'Second Service'    },
          { time: '7:30 PM',   day: 'Tuesday',   note: 'Prayer & Bible Study' },
          { time: '7:00 PM',   day: 'Friday',    note: 'Youth Night'       },
        ].map(({ time, day, note }) => (
          <div key={`${day}-${time}`} className="text-center">
            <p className="font-heading font-bold text-gold-300 text-xl leading-none">{time}</p>
            <p className="text-white text-sm font-semibold mt-1">{day}</p>
            <p className="text-navy-300 text-xs mt-0.5">{note}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ═════════════════════════════ WELCOME / INTRO ════════════════════════════════ */}
    <section className="py-24 px-6" aria-label="Welcome message">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <span className="section-label mb-4 inline-block">You Belong Here</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-4xl md:text-5xl leading-tight mb-6">
            Wherever You Are on the Journey
          </h2>
          <p className="text-navy-700 dark:text-navy-200 leading-relaxed mb-5">
            Whether you've been following Jesus your whole life or you're just starting to wonder whether
            God is real — there's a place for you at Lighthouse. We're a community of real people with
            real struggles, held together by a very real and loving God.
          </p>
          <p className="text-navy-700 dark:text-navy-200 leading-relaxed mb-8">
            Every Sunday, we gather to worship, learn from Scripture, and remind each other of the hope
            we have in Christ. We'd love for you to join us.
          </p>
          <Link to="/visit" className="btn-navy inline-flex">
            We'd Love to Meet You
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Visual grid of quick facts */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Years Serving Listowel',  value: '15+'  },
            { label: 'Active Ministries',        value: '8'    },
            { label: 'Weekly Service Times',     value: '4'    },
            { label: 'Life Groups',              value: '12+'  },
          ].map(({ label, value }) => (
            <div key={label} className="card-base p-6 text-center">
              <p className="font-heading font-bold text-gold-600 dark:text-gold-400 text-3xl mb-1">{value}</p>
              <p className="text-xs text-navy-600 dark:text-navy-200 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════ FEATURED SERMON ═════════════════════════════ */}
    <section
      className="py-24 px-6 bg-cream-200/50 dark:bg-navy-800/30"
      aria-label="Featured sermon"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <span className="section-label mb-3 inline-block">Current Series</span>
            <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl">
              "{featuredSeries.title}"
            </h2>
            <p className="text-navy-600 dark:text-navy-200 mt-1">{featuredSeries.subtitle}</p>
          </div>
          <Link to="/sermons" className="btn-outline text-sm shrink-0 flex items-center gap-2">
            All Sermons <ChevronRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Video embed placeholder */}
          <div className="md:col-span-3 rounded-2xl overflow-hidden aspect-video bg-navy-900 relative group cursor-pointer shadow-2xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800/80 to-navy-900/60" />
            {/* Beam effect in thumbnail */}
            <div className="absolute inset-0 overflow-hidden opacity-40" aria-hidden="true">
              <div className="beam" />
            </div>
            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gold-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-7 h-7 text-white ml-1" aria-hidden="true" />
              </div>
              <div className="text-center px-6">
                <p className="text-gold-300 text-xs uppercase tracking-widest font-semibold mb-2">Latest Message</p>
                <p className="font-heading font-bold text-white text-xl md:text-2xl leading-tight">
                  {featuredSeries.latestTitle}
                </p>
              </div>
            </div>
            <Link to="/sermons" className="absolute inset-0" aria-label={`Watch sermon: ${featuredSeries.latestTitle}`} />
          </div>

          {/* Info panel */}
          <div className="md:col-span-2 space-y-5">
            <div className="card-base p-5">
              <p className="text-xs text-navy-500 dark:text-navy-300 uppercase tracking-widest mb-2">Latest Message</p>
              <h3 className="font-heading font-semibold text-navy-DEFAULT dark:text-white text-lg leading-snug mb-3">
                {featuredSeries.latestTitle}
              </h3>
              <div className="flex flex-wrap gap-3 text-xs text-navy-600 dark:text-navy-200">
                <span className="flex items-center gap-1"><BookOpen size={12} aria-hidden="true" /> {featuredSeries.latestSpeaker}</span>
                <span className="flex items-center gap-1"><Calendar size={12} aria-hidden="true" /> {featuredSeries.latestDate}</span>
              </div>
            </div>
            <div className="card-base p-5">
              <p className="text-xs text-navy-500 dark:text-navy-300 uppercase tracking-widest mb-3">Also in This Series</p>
              <ul className="space-y-3 text-sm text-navy-700 dark:text-navy-200">
                {['The Peace That Guards', 'Holding On When You Feel Like Letting Go', 'Rooted and Grounded'].map(t => (
                  <li key={t} className="flex items-center gap-2 hover:text-gold-600 dark:hover:text-gold-400 cursor-pointer transition-colors">
                    <Play size={12} className="text-gold-500 shrink-0" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ════════════════════════════════ EVENTS PREVIEW ═════════════════════════════ */}
    <section className="py-24 px-6" aria-label="Upcoming events">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <span className="section-label mb-3 inline-block">Join Us</span>
            <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl">
              Upcoming Events
            </h2>
          </div>
          <Link to="/events" className="btn-outline text-sm flex items-center gap-2 shrink-0">
            Full Calendar <ChevronRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {upcomingEvents.map(({ title, day, time, tag }) => (
            <article key={title} className="card-base p-6 group">
              <span className="section-label text-[10px] mb-4 inline-block">{tag}</span>
              <h3 className="font-heading font-semibold text-navy-DEFAULT dark:text-white text-lg mb-3 group-hover:text-navy-600 dark:group-hover:text-gold-300 transition-colors">
                {title}
              </h3>
              <div className="space-y-1 text-sm text-navy-600 dark:text-navy-300">
                <p className="flex items-center gap-2"><Calendar size={14} aria-hidden="true" /> {day}</p>
                <p className="flex items-center gap-2"><Clock    size={14} aria-hidden="true" /> {time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════ MINISTRIES PREVIEW ══════════════════════════ */}
    <section
      className="py-24 px-6 bg-cream-200/50 dark:bg-navy-800/30"
      aria-label="Ministries overview"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-4 inline-block">Get Involved</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl mb-4">
            There's a Place for You
          </h2>
          <p className="text-navy-600 dark:text-navy-200 leading-relaxed">
            From the youngest member to the most seasoned, Lighthouse has ministries where every person
            can be known, serve others, and grow in faith.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {ministryPreviews.map(({ icon, title, desc }) => (
            <article key={title} className="card-base p-6 group">
              <div className="w-12 h-12 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mb-4 text-gold-600 dark:text-gold-400 transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
              <h3 className="font-heading font-semibold text-navy-DEFAULT dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-navy-600 dark:text-navy-200 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Link to="/ministries" className="btn-navy inline-flex gap-2">
            Explore All Ministries <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════ CTA BAND ════════════════════════════════ */}
    <section
      className="relative py-24 px-6 overflow-hidden"
      aria-label="Visit us call to action"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-DEFAULT to-navy-800" aria-hidden="true" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30" aria-hidden="true">
        <div className="beam" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <span className="section-label mb-5 inline-block bg-gold-500/20 border-gold-400/40 text-gold-300">
          First Time Visiting?
        </span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-6">
          Come Experience It for Yourself
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10">
          We know visiting a new church can feel like a big step. We promise: you'll be warmly welcomed,
          there's no pressure, and you can come just as you are.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/visit" className="btn-primary">
            Plan Your Visit <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/connect" className="btn-secondary">
            Send Us a Message
          </Link>
        </div>
      </div>
    </section>

    {/* ════════════════════════════════ VERSE OF WEEK ═══════════════════════════════ */}
    <section className="py-20 px-6" aria-label="Scripture">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-px bg-gold-400 mx-auto mb-8" aria-hidden="true" />
        <blockquote>
          <p className="font-heading italic text-2xl md:text-3xl text-navy-DEFAULT dark:text-white leading-relaxed mb-4">
            "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm
            you, plans to give you hope and a future."
          </p>
          <footer className="text-sm font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-wider">
            Jeremiah 29:11
          </footer>
        </blockquote>
        <div className="w-12 h-px bg-gold-400 mx-auto mt-8" aria-hidden="true" />
      </div>
    </section>

  </div>
);
