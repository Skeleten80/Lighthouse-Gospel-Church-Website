import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star, Users, Heart, Music, Globe, BookOpen,
  Sunrise, Zap, ArrowRight, ChevronDown,
} from 'lucide-react';

/* ── Data ─────────────────────────────────────────────────────────────────── */
interface Ministry {
  id: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  when: string;
  who: string;
  contact: string;
  icon: React.ReactNode;
  color: string;
}

const ministries: Ministry[] = [
  {
    id: 'kids',
    title: "Kids' Lighthouse",
    tagline: 'Sparks of faith for the next generation',
    description:
      "Kids' Lighthouse provides safe, joyful, and age-appropriate faith formation for children from birth through Grade 6. Every Sunday morning, children experience dynamic worship, Bible teaching through creative storytelling and crafts, and the kind of belonging that lasts a lifetime.",
    details: [
      'Nursery (0–2 years) — staffed by caring volunteers during both services',
      'Preschool (3–5 years) — structured play, songs, and Bible stories',
      'Kids\' Church (Grades 1–6) — curriculum-based teaching in a fun, safe environment',
      'All volunteers are background-checked and trained',
    ],
    when: 'Every Sunday during both services (9:00 AM & 11:00 AM)',
    who: 'Ages 0–12',
    contact: 'Ask at the Welcome Desk',
    icon: <Star size={26} />,
    color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
  },
  {
    id: 'youth',
    title: 'Youth Ministry',
    tagline: 'A place to belong, grow, and lead',
    description:
      "Youth Ministry at Lighthouse is a Friday-night community for students in Grades 7–12. We believe teenagers are not the church of tomorrow — they are the church of today. Friday nights are filled with authentic worship, honest teaching, small group discussions, and a whole lot of fun.",
    details: [
      'Friday Night Youth — weekly gathering for Grades 7–12',
      'Tuesday Bible Study — deeper dive into Scripture (7:30 PM)',
      'Annual Youth Retreat — weekend away for relationship and renewal',
      'Summer mission opportunities — local and away',
    ],
    when: 'Fridays 7:00–9:30 PM · Tuesdays 7:30 PM Bible Study',
    who: 'Grades 7–12',
    contact: 'youth@lighthousegospel.ca',
    icon: <Zap size={26} />,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  },
  {
    id: 'lifegroups',
    title: 'Life Groups',
    tagline: 'Doing life together, week by week',
    description:
      "Life Groups are the heartbeat of Lighthouse. These small groups of 8–12 people meet in homes throughout the week to study Scripture, pray together, and carry one another\'s burdens. In a Life Group, you move from being known by face to known by name — and eventually, by heart.",
    details: [
      'Groups meet on various weeknights — find one that fits your schedule',
      'Topical studies, book studies, and expository series',
      'Groups for young adults, couples, parents, and seniors',
      'New groups forming regularly — ask about joining or starting one',
    ],
    when: 'Various weeknights — see the schedule for details',
    who: 'All adults welcome',
    contact: 'lifegroups@lighthousegospel.ca',
    icon: <Users size={26} />,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  },
  {
    id: 'women',
    title: "Women's Ministry",
    tagline: 'Rooted, renewed, and reaching out',
    description:
      "Women's Ministry at Lighthouse creates spaces where women can be honest about their struggles, strengthened in their faith, and equipped to live purposefully. From monthly gatherings to annual retreats, there's a community here for every season of life.",
    details: [
      'Monthly Women\'s Evening — worship, teaching, and connection',
      'Annual Women\'s Retreat — a weekend to rest, reflect, and renew',
      'Book and Bible study circles',
      'Mentorship pairings for young women',
    ],
    when: 'Monthly evening gatherings (see Events for dates)',
    who: 'All women welcome',
    contact: 'women@lighthousegospel.ca',
    icon: <Heart size={26} />,
    color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
  },
  {
    id: 'men',
    title: "Men's Ministry",
    tagline: 'Iron sharpens iron',
    description:
      "Men's Ministry calls the men of Lighthouse to authentic brotherhood — the kind where masks come off and real growth happens. Monthly breakfasts kick off honest conversations about faith, fatherhood, marriage, and purpose, grounded always in the Word.",
    details: [
      'Monthly Men\'s Breakfast — third Saturday of each month at 8:00 AM',
      'Scripture-based discussion and prayer',
      'Annual Men\'s Retreat',
      'Accountability partnerships available',
    ],
    when: 'Third Saturday of each month, 8:00 AM',
    who: 'All men welcome',
    contact: 'men@lighthousegospel.ca',
    icon: <Sunrise size={26} />,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  },
  {
    id: 'worship',
    title: 'Worship Team',
    tagline: 'Serving the congregation through song and art',
    description:
      "The Lighthouse Worship Team leads our congregation into authentic encounters with God every Sunday morning. Led by Willy Braun, the team welcomes vocalists, instrumentalists, sound technicians, and visual artists who want to use their gifts in service to the church.",
    details: [
      'Vocalists and instrumentalists — guitar, keys, bass, drums, and more',
      'Sound, audio-visual, and lighting volunteers',
      'Bi-weekly rehearsals on Saturday mornings',
      'All skill levels welcome — we invest in training',
    ],
    when: 'Sundays (both services) · Saturday rehearsals',
    who: 'Musicians, vocalists, and tech volunteers',
    contact: 'worship@lighthousegospel.ca',
    icon: <Music size={26} />,
    color: 'bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400',
  },
  {
    id: 'outreach',
    title: 'Outreach & Missions',
    tagline: 'The Gospel sends us outward',
    description:
      "We believe the Church exists for those who aren't in it yet. Our Outreach team serves the Listowel community through food drives, senior support, and partnerships with local organizations. We also support global missionaries and short-term mission projects.",
    details: [
      'Monthly Community Outreach Days — hands-on local service',
      'Annual food hamper drive for families in need',
      'Financial support for global missionary partners',
      'Short-term mission trip opportunities (enquire annually)',
    ],
    when: 'Monthly outreach days — check the Events calendar',
    who: 'All ages welcome',
    contact: 'outreach@lighthousegospel.ca',
    icon: <Globe size={26} />,
    color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
  },
  {
    id: 'prayer',
    title: 'Prayer Ministry',
    tagline: 'Conversation with the God who listens',
    description:
      "Prayer is the lifeblood of Lighthouse. Our Prayer Ministry gathers every Tuesday evening for corporate intercession, and our prayer team is available after every Sunday service to pray with anyone who has a need. We believe prayer changes things — and people.",
    details: [
      'Tuesday Evening Prayer Meeting — open to all (7:30 PM)',
      'Sunday prayer team available after each service',
      'Confidential prayer request submission',
      '24-hour prayer chain for urgent needs',
    ],
    when: 'Tuesdays 7:30 PM · After every Sunday service',
    who: 'Everyone — no experience required',
    contact: 'prayer@lighthousegospel.ca',
    icon: <BookOpen size={26} />,
    color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
  },
];

/* Ministry Card with expand/collapse */
const MinistryCard: React.FC<{ m: Ministry }> = ({ m }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="card-base overflow-hidden">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className={`w-14 h-14 rounded-2xl ${m.color} flex items-center justify-center mb-4`}>
          {m.icon}
        </div>
        <h3 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-xl mb-1">{m.title}</h3>
        <p className="text-sm text-gold-600 dark:text-gold-400 font-medium italic mb-3">{m.tagline}</p>
        <p className="text-sm text-navy-600 dark:text-navy-200 leading-relaxed">{m.description}</p>
      </div>

      {/* Expand */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-3 text-xs font-semibold text-navy-500 dark:text-navy-300 uppercase tracking-wider hover:bg-navy-50 dark:hover:bg-navy-700/30 transition-colors border-t border-navy-100 dark:border-navy-700/40"
      >
        {open ? 'Show Less' : 'Learn More'}
        <ChevronDown size={14} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <div className="px-6 pb-6 pt-2 space-y-4 border-t border-navy-100 dark:border-navy-700/40">
          <ul className="space-y-2">
            {m.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-navy-700 dark:text-navy-200">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy-400 dark:text-navy-500 mb-1">When</p>
              <p className="text-xs text-navy-700 dark:text-navy-200">{m.when}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy-400 dark:text-navy-500 mb-1">Who</p>
              <p className="text-xs text-navy-700 dark:text-navy-200">{m.who}</p>
            </div>
          </div>
          <div className="pt-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-navy-400 dark:text-navy-500 mb-1">Get Involved</p>
            <p className="text-xs text-gold-600 dark:text-gold-400 font-medium">{m.contact}</p>
          </div>
        </div>
      )}
    </article>
  );
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export const Ministries: React.FC = () => (
  <div>

    {/* Header */}
    <header className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-DEFAULT to-navy-800 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25" aria-hidden="true">
        <div className="beam" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="section-label mb-5 inline-block bg-gold-500/20 border-gold-400/40 text-gold-300">
          Get Involved
        </span>
        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-5 leading-tight">
          Ministries
        </h1>
        <p className="text-white/70 text-lg leading-relaxed">
          From the nursery to outreach missions, there's a ministry where your gifts, your story,
          and your season of life fit perfectly.
        </p>
      </div>
    </header>

    {/* Intro */}
    <section className="py-16 px-6" aria-label="Ministries introduction">
      <div className="max-w-3xl mx-auto text-center">
        <span className="section-label mb-4 inline-block">Our Ministries</span>
        <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl mb-5">
          Every Person Has a Place
        </h2>
        <p className="text-navy-600 dark:text-navy-200 leading-relaxed">
          Lighthouse is made up of real people at every stage of life — and we have vibrant ministries
          for all of them. Whether you're looking to serve, grow, connect, or all three, there's a home
          for you here. Tap any card to learn more about each ministry.
        </p>
      </div>
    </section>

    {/* Ministry Grid */}
    <section className="py-10 pb-24 px-6" aria-label="Ministry list">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ministries.map(m => <MinistryCard key={m.id} m={m} />)}
      </div>
    </section>

    {/* Volunteer CTA */}
    <section className="py-20 px-6 bg-cream-200/50 dark:bg-navy-800/30" aria-label="Volunteer">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="section-label mb-4 inline-block">Serve With Us</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl mb-5">
            Your Gifts Matter Here
          </h2>
          <p className="text-navy-600 dark:text-navy-200 leading-relaxed mb-6">
            Every follower of Jesus is given gifts for a reason. Whether you're gifted in teaching,
            hospitality, administration, creative arts, or compassionate service — we want to help
            you find your place to flourish and contribute.
          </p>
          <p className="text-navy-600 dark:text-navy-200 leading-relaxed mb-8">
            Reach out and tell us about yourself. We'll connect you with the right team.
          </p>
          <Link to="/connect" className="btn-navy inline-flex gap-2">
            I'd Like to Serve <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { v:'8',    l:'Active Ministries'        },
            { v:'100+', l:'Volunteers Serving'       },
            { v:'12+',  l:'Life Groups'              },
            { v:'3',    l:'Age-Specific Youth Groups'},
          ].map(({ v, l }) => (
            <div key={l} className="card-base p-6 text-center">
              <p className="font-heading font-bold text-gold-600 dark:text-gold-400 text-3xl mb-1">{v}</p>
              <p className="text-xs text-navy-600 dark:text-navy-200 leading-snug">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="py-20 px-6 bg-navy-DEFAULT dark:bg-navy-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading font-bold text-3xl mb-4">Not Sure Where to Start?</h2>
        <p className="text-white/70 mb-8 leading-relaxed">
          Visit us any Sunday and we'll help you find the right fit. No pressure — just a warm
          conversation and a next step that makes sense for where you are.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/visit"   className="btn-primary flex items-center gap-2">Plan a Visit <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link to="/connect" className="btn-secondary">Ask Us Anything</Link>
        </div>
      </div>
    </section>

  </div>
);
