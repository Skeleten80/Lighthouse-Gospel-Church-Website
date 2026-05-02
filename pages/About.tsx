import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor, BookOpen, Heart, Users, Zap, Globe,
  Sun, Flame, ShieldCheck, ScrollText, Music,
  ArrowRight, ChevronDown,
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

/* ── Data ─────────────────────────────────────────────────────────────────── */
const coreValues = [
  {
    icon: <Anchor  size={22} />,
    title: 'Christ-Centred',
    desc:  'Everything we do flows from our relationship with Jesus. He is not a programme — He is our life.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Scripture-Grounded',
    desc:  'The Bible is our foundation, our compass, and the living word through which God still speaks today.',
  },
  {
    icon: <Flame   size={22} />,
    title: 'Spirit-Led',
    desc:  'We make room for the Holy Spirit to move — in our worship, our decisions, and our individual lives.',
  },
  {
    icon: <Users   size={22} />,
    title: 'Community-Rooted',
    desc:  'We believe the Christian life was never meant to be lived alone. We do life together — honestly and lovingly.',
  },
  {
    icon: <Globe   size={22} />,
    title: 'Outward-Focused',
    desc:  'The Gospel sends us outward. We serve our neighbours, support global missions, and welcome the stranger.',
  },
  {
    icon: <Heart   size={22} />,
    title: 'Multigenerational',
    desc:  'From the nursery to the elder pew, every generation belongs here. We learn from each other.',
  },
];

const faithStatements = [
  {
    title:   'God',
    icon:    <Sun size={18} />,
    content: 'We believe there is one true, almighty God, eternally existing in three Persons: Father, Son, and Holy Spirit — co-equal, co-eternal, and worthy of all worship.',
    ref:     '1 John 5:7 · 1 Peter 1:2 · Eph 4:6',
  },
  {
    title:   'Jesus Christ',
    icon:    <Anchor size={18} />,
    content: 'We believe Jesus Christ is the eternal Son of God who became flesh through the virgin birth, lived a sinless life, died as the atoning sacrifice for our sin, rose bodily from the dead, and ascended to reign at the right hand of the Father.',
    ref:     'John 1:1,14 · Matt 1:23 · Rom 5:8 · 1 Cor 15:4',
  },
  {
    title:   'Holy Spirit',
    icon:    <Flame size={18} />,
    content: 'We believe the Holy Spirit convicts, regenerates, indwells, and empowers every believer. He is our Counsellor, giving gifts for the building of the Church and the advance of the Kingdom.',
    ref:     'John 14:16–17 · Acts 1:8 · 1 Cor 12:4–11',
  },
  {
    title:   'Scripture',
    icon:    <BookOpen size={18} />,
    content: 'We believe the Bible is the verbally inspired, fully authoritative Word of God — inerrant in its original writings, sufficient for all matters of faith and practice.',
    ref:     '2 Tim 3:16–17 · 2 Pet 1:21',
  },
  {
    title:   'Salvation',
    icon:    <ShieldCheck size={18} />,
    content: 'We believe that all have sinned and that salvation is by grace alone, through faith alone, in Christ alone — not earned by works, but evidenced by a transformed life.',
    ref:     'Eph 2:8–9 · John 3:16 · Rom 10:9–10',
  },
  {
    title:   'The Church',
    icon:    <Users size={18} />,
    content: 'We believe the Church is the Body of Christ — the community of all believers — called to make disciples of all nations, to love one another, and to reflect the character of Jesus in the world.',
    ref:     'Matt 28:19–20 · Eph 5:25–27 · Acts 2:42–47',
  },
];

const leadership = {
  pastors: [{ name: 'Pedro & Lisa Neufeld', role: 'Lead Pastors', bio: 'Pedro and Lisa have shepherded Lighthouse Gospel Church with grace and compassion for over fifteen years. Their heart is for every person — regardless of background — to encounter the love of Jesus and find a true spiritual home.' }],
  elders:  [
    { name: 'Jake & Maggie Hiebert', role: 'Elder' },
    { name: 'Jacob & Susie Wall',    role: 'Elder' },
  ],
  deacons: [
    { name: 'Dave & Anna Harms',   role: 'Deacon' },
    { name: 'Henry & Mary Janzen', role: 'Deacon' },
    { name: 'John & Lisa Berg',    role: 'Deacon' },
    { name: 'Dave & Tina Bose',    role: 'Deacon' },
  ],
  staff: [{ name: 'Willy Braun', role: 'Worship Leader', icon: <Music size={18} /> }],
};

/* Accordion item for faith statements */
const FaithAccordion: React.FC<{ item: typeof faithStatements[0] }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-navy-100 dark:border-navy-700/40 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
      >
        <div className="flex items-center gap-3">
          <span className="text-gold-600 dark:text-gold-400">{item.icon}</span>
          <span className="font-semibold text-navy-DEFAULT dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
            {item.title}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-navy-400 dark:text-navy-300 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="pb-5 pl-9 pr-2 space-y-2">
          <p className="text-sm text-navy-700 dark:text-navy-200 leading-relaxed">{item.content}</p>
          <p className="text-xs text-gold-600 dark:text-gold-400 font-medium">{item.ref}</p>
        </div>
      )}
    </div>
  );
};

/* ── Page ──────────────────────────────────────────────────────────────────── */
export const About: React.FC = () => (
  <div>

    {/* ─── Page Header ──────────────────────────────────────────────────────── */}
    <header className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-DEFAULT to-navy-800 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25" aria-hidden="true">
        <div className="beam" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="section-label mb-5 inline-block bg-gold-500/20 border-gold-400/40 text-gold-300">
          Our Story
        </span>
        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-5 leading-tight">
          Who We Are
        </h1>
        <p className="text-white/70 text-lg leading-relaxed">
          A non-denominational family of faith in Listowel, Ontario — rooted in Scripture,
          moved by the Spirit, and devoted to one another and our community.
        </p>
      </div>
    </header>

    {/* ─── Mission & Vision ─────────────────────────────────────────────────── */}
    <section className="py-24 px-6" aria-label="Mission and vision">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="card-base p-8 md:p-10 border-l-4 border-l-gold-400">
          <span className="section-label mb-4 inline-block">Our Mission</span>
          <p className="font-heading text-xl md:text-2xl text-navy-DEFAULT dark:text-white leading-relaxed">
            To shine the light of Jesus Christ in Listowel and beyond — welcoming every person,
            building authentic community, and equipping believers to live out their God-given calling.
          </p>
        </div>

        <div className="card-base p-8 md:p-10 border-l-4 border-l-navy-400">
          <span className="section-label mb-4 inline-block">Our Vision</span>
          <p className="font-heading text-xl md:text-2xl text-navy-DEFAULT dark:text-white leading-relaxed">
            A church where every generation encounters the living God, walks in freedom, and pours into
            the lives of others — here in Perth County and to the ends of the earth.
          </p>
        </div>
      </div>
    </section>

    {/* ─── Core Values ──────────────────────────────────────────────────────── */}
    <section className="py-24 px-6 bg-cream-200/50 dark:bg-navy-800/30" aria-label="Core values">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-4 inline-block">What We Stand For</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl">
            Our Core Values
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map(({ icon, title, desc }) => (
            <article key={title} className="card-base p-6 group">
              <div className="w-12 h-12 rounded-xl bg-navy-50 dark:bg-navy-700/50 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
              <h3 className="font-heading font-semibold text-navy-DEFAULT dark:text-white text-lg mb-2">{title}</h3>
              <p className="text-sm text-navy-600 dark:text-navy-200 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ─── Pastor's Welcome ─────────────────────────────────────────────────── */}
    <section className="py-24 px-6" aria-label="A word from the pastor">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-start">

        {/* Avatar / placeholder */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-navy-200 to-navy-400 dark:from-navy-700 dark:to-navy-600 flex items-center justify-center mb-5 shadow-xl">
            <Anchor className="w-16 h-16 text-white/60" aria-hidden="true" />
          </div>
          <p className="font-heading font-bold text-xl text-navy-DEFAULT dark:text-white text-center md:text-left">
            Pedro &amp; Lisa Neufeld
          </p>
          <p className="text-gold-600 dark:text-gold-400 text-sm font-medium mt-1 text-center md:text-left">
            Lead Pastors
          </p>
        </div>

        {/* Letter */}
        <div className="md:col-span-2">
          <span className="section-label mb-5 inline-block">A Word From Our Pastors</span>
          <blockquote className="space-y-4">
            <p className="font-heading italic text-xl md:text-2xl text-navy-DEFAULT dark:text-white leading-relaxed">
              "We started with a simple conviction: every person deserves to know they are loved by God
              and wanted by His people."
            </p>
            <p className="text-navy-700 dark:text-navy-200 leading-relaxed">
              Over fifteen years ago, a small group of families gathered with a dream of building something
              genuine — a place where you wouldn't have to pretend, where questions were welcome, and where
              the grace of Jesus was more than a Sunday message.
            </p>
            <p className="text-navy-700 dark:text-navy-200 leading-relaxed">
              That's still who we are. We've grown, and we've grown through hardship and joy together. But
              the door is as wide open today as it was on day one. Wherever you've been, whatever you've
              done — you are welcome at Lighthouse.
            </p>
            <p className="text-navy-700 dark:text-navy-200 leading-relaxed font-medium">
              We'd love to shake your hand some Sunday.
            </p>
            <footer className="text-sm text-gold-600 dark:text-gold-400 font-semibold pt-2">
              — Pedro &amp; Lisa Neufeld
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    {/* ─── Statement of Faith ───────────────────────────────────────────────── */}
    <section className="py-24 px-6 bg-cream-200/50 dark:bg-navy-800/30" aria-label="Statement of faith">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label mb-4 inline-block">What We Believe</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl mb-4">
            Statement of Faith
          </h2>
          <p className="text-navy-600 dark:text-navy-200 max-w-xl mx-auto">
            We hold the historic Christian faith as revealed in Scripture. Tap any heading to read more.
          </p>
        </div>
        <div className="card-base p-6 md:p-10">
          <ScrollText className="w-8 h-8 text-gold-600 dark:text-gold-400 mb-6" aria-hidden="true" />
          <div>
            {faithStatements.map((item) => (
              <FaithAccordion key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ─── Leadership Team ──────────────────────────────────────────────────── */}
    <section className="py-24 px-6" aria-label="Leadership team">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-block">Servant Leadership</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl">
            Our Leadership Team
          </h2>
          <p className="text-navy-600 dark:text-navy-200 mt-3 max-w-lg mx-auto">
            Led by a team of humble, Spirit-filled servants committed to the health of this family.
          </p>
        </div>

        {/* Lead Pastors */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-navy-100 dark:bg-navy-700/40" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">Lead Pastors</span>
            <div className="h-px flex-1 bg-navy-100 dark:bg-navy-700/40" aria-hidden="true" />
          </div>
          <div className="flex justify-center">
            <div className="card-base p-8 max-w-md w-full text-center border-t-4 border-t-gold-400">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center mx-auto mb-5">
                <Anchor className="w-9 h-9 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy-DEFAULT dark:text-white mb-1">Pedro &amp; Lisa Neufeld</h3>
              <p className="text-gold-600 dark:text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4">Lead Pastors</p>
              <p className="text-sm text-navy-600 dark:text-navy-200 leading-relaxed">
                Pedro and Lisa have shepherded Lighthouse Gospel Church with grace and compassion for over
                fifteen years. Their heart is for every person to encounter the love of Jesus and find a
                true spiritual home.
              </p>
            </div>
          </div>
        </div>

        {/* Elders */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-navy-100 dark:bg-navy-700/40" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-navy-500 dark:text-navy-300">Elders</span>
            <div className="h-px flex-1 bg-navy-100 dark:bg-navy-700/40" aria-hidden="true" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-xl mx-auto">
            {leadership.elders.map(({ name, role }) => (
              <div key={name} className="card-base p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-navy-100 dark:bg-navy-700/60 flex items-center justify-center mx-auto mb-3">
                  <Users size={20} className="text-navy-500 dark:text-navy-300" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-navy-DEFAULT dark:text-white">{name}</h3>
                <p className="text-xs text-navy-500 dark:text-navy-400 uppercase tracking-wider mt-1 font-semibold">{role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deacons */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-navy-100 dark:bg-navy-700/40" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-navy-500 dark:text-navy-300">Deacons</span>
            <div className="h-px flex-1 bg-navy-100 dark:bg-navy-700/40" aria-hidden="true" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.deacons.map(({ name, role }) => (
              <div key={name} className="card-base p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-cream-200 dark:bg-navy-700/60 flex items-center justify-center mx-auto mb-3">
                  <Heart size={20} className="text-gold-500 dark:text-gold-400" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-navy-DEFAULT dark:text-white text-sm">{name}</h3>
                <p className="text-xs text-navy-500 dark:text-navy-400 uppercase tracking-wider mt-1 font-semibold">{role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ministry Staff */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-navy-100 dark:bg-navy-700/40" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-navy-500 dark:text-navy-300">Ministry Staff</span>
            <div className="h-px flex-1 bg-navy-100 dark:bg-navy-700/40" aria-hidden="true" />
          </div>
          <div className="flex justify-center">
            <div className="card-base p-5 text-center max-w-xs w-full">
              <div className="w-12 h-12 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mx-auto mb-3">
                <Music size={20} className="text-gold-600 dark:text-gold-400" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-navy-DEFAULT dark:text-white">Willy Braun</h3>
              <p className="text-xs text-navy-500 dark:text-navy-400 uppercase tracking-wider mt-1 font-semibold">Worship Leader</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ─── CTA ──────────────────────────────────────────────────────────────── */}
    <section className="py-20 px-6 bg-navy-DEFAULT dark:bg-navy-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading font-bold text-3xl mb-4">Ready to Take the Next Step?</h2>
        <p className="text-white/70 mb-8 leading-relaxed">
          We'd love to connect with you personally. Whether you have questions, want to visit,
          or are ready to get involved — we're here.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/visit"   className="btn-primary">Plan a Visit <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link to="/connect" className="btn-secondary">Get in Touch</Link>
        </div>
      </div>
    </section>

  </div>
);
