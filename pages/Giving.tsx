import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Globe, Users, Star, CreditCard,
  Smartphone, Mail, DollarSign, ChevronDown,
  ArrowRight, Shield, Gift,
} from 'lucide-react';

/* ── FAQ ──────────────────────────────────────────────────────────────────── */
interface FAQ { q: string; a: string; }
const faqs: FAQ[] = [
  {
    q: 'Are my donations tax-deductible?',
    a: 'Yes. Lighthouse Gospel Church is a registered charitable organization in Canada. Gifts over $20 qualify for an official donation receipt (T4163), which you can claim on your federal and provincial tax returns.',
  },
  {
    q: 'When are donation receipts issued?',
    a: 'Annual donation receipts are mailed or emailed by the end of February each year. If you need a receipt sooner, contact our office at pedroneufeld47@gmail.com.',
  },
  {
    q: 'Can I designate my giving to a specific ministry?',
    a: 'Yes. You can designate to the General Fund, Missions, Building Fund, or Kids\' & Youth Ministries. Simply note the designation on your cheque, envelope, or e-Transfer.',
  },
  {
    q: 'What if I want to give monthly automatically?',
    a: 'Pre-authorized giving (PAG) is available through cheque authorization or bank draft. Contact the office for a PAG form, or set up a recurring e-Transfer from your online banking.',
  },
  {
    q: 'Is my financial information kept private?',
    a: 'Absolutely. Giving records are kept strictly confidential and are only accessible to the church treasurer and lead pastor for stewardship purposes.',
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
          className={`shrink-0 text-navy-400 transition-transform duration-300 mt-1 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && <p className="pb-5 text-sm text-navy-600 dark:text-navy-200 leading-relaxed pr-8">{faq.a}</p>}
    </div>
  );
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export const Giving: React.FC = () => (
  <div>

    {/* Header */}
    <header className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-DEFAULT to-navy-800 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25" aria-hidden="true">
        <div className="beam" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="section-label mb-5 inline-block bg-gold-500/20 border-gold-400/40 text-gold-300">
          Generosity
        </span>
        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-5 leading-tight">
          Give with a Generous Heart
        </h1>
        <p className="text-white/70 text-lg leading-relaxed">
          Your generosity fuels the mission of Lighthouse Gospel Church — locally in Listowel
          and through our partners around the world.
        </p>
      </div>
    </header>

    {/* Why We Give */}
    <section className="py-20 px-6" aria-label="Why we give">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="section-label mb-4 inline-block">The Heart Behind Giving</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl mb-5">
            Giving Is an Act of Worship
          </h2>
          <p className="text-navy-600 dark:text-navy-200 leading-relaxed mb-4">
            At Lighthouse, we don't give out of guilt or obligation — we give because God first gave to
            us. Generosity is a natural overflow of a life shaped by grace. When we give, we're
            declaring that we trust God as our provider and that His Kingdom matters more than our
            own comfort.
          </p>
          <p className="text-navy-600 dark:text-navy-200 leading-relaxed mb-6">
            Every dollar given to Lighthouse goes toward sharing the love of Jesus in Listowel,
            supporting families in need, funding vibrant children and youth programs, and resourcing
            missionaries both near and far.
          </p>
          <blockquote className="border-l-4 border-gold-400 pl-5 py-2">
            <p className="font-heading italic text-navy-DEFAULT dark:text-white text-lg leading-relaxed">
              "Each of you should give what you have decided in your heart to give, not reluctantly
              or under compulsion, for God loves a cheerful giver."
            </p>
            <footer className="text-sm text-gold-600 dark:text-gold-400 font-semibold mt-2">
              2 Corinthians 9:7
            </footer>
          </blockquote>
        </div>

        {/* Impact stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon:<Heart size={20} />, val:'100+',   label:'Families Supported Annually'   },
            { icon:<Globe size={20} />, val:'4',      label:'Global Missionary Partners'     },
            { icon:<Users size={20} />, val:'200+',   label:'Children & Youth Ministered To' },
            { icon:<Star  size={20} />, val:'15+',    label:'Years Serving Listowel'         },
          ].map(({ icon, val, label }) => (
            <div key={label} className="card-base p-5 text-center group">
              <div className="w-10 h-10 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mx-auto mb-3 text-gold-600 dark:text-gold-400 group-hover:scale-110 transition-transform">
                {icon}
              </div>
              <p className="font-heading font-bold text-gold-600 dark:text-gold-400 text-2xl">{val}</p>
              <p className="text-xs text-navy-600 dark:text-navy-200 leading-snug mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Giving Methods */}
    <section className="py-20 px-6 bg-cream-200/50 dark:bg-navy-800/30" aria-label="Ways to give">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label mb-4 inline-block">How to Give</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl">
            Ways to Give
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">

          {/* Online / E-Transfer */}
          <div className="card-base p-6 md:p-8 border-l-4 border-l-gold-400">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-600 dark:text-gold-400">
                <Smartphone size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-lg">E-Transfer</h3>
                <p className="text-xs text-navy-500 dark:text-navy-300 font-medium">Instant · Secure · Easy</p>
              </div>
            </div>
            <p className="text-sm text-navy-600 dark:text-navy-200 leading-relaxed mb-4">
              Send an Interac e-Transfer from your online banking to our giving address. Set up Auto-Deposit
              so no password is required.
            </p>
            <div className="bg-navy-50 dark:bg-navy-800 rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-navy-500 dark:text-navy-400 mb-1">Send e-Transfer to:</p>
              <p className="text-navy-DEFAULT dark:text-white font-semibold text-sm">pedroneufeld47@gmail.com</p>
              <p className="text-xs text-navy-500 dark:text-navy-400 mt-1">Include your name and any designation in the message field.</p>
            </div>
          </div>

          {/* Cheque */}
          <div className="card-base p-6 md:p-8 border-l-4 border-l-navy-400">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-navy-50 dark:bg-navy-700/50 flex items-center justify-center text-navy-500 dark:text-navy-300">
                <DollarSign size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-lg">Cheque or Cash</h3>
                <p className="text-xs text-navy-500 dark:text-navy-300 font-medium">Sunday Offering</p>
              </div>
            </div>
            <p className="text-sm text-navy-600 dark:text-navy-200 leading-relaxed mb-4">
              Place your offering in the envelope provided at the Welcome Desk. Cheques should be made
              payable to <strong className="text-navy-DEFAULT dark:text-white">Lighthouse Gospel Church</strong>.
            </p>
            <div className="bg-navy-50 dark:bg-navy-800 rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-navy-500 dark:text-navy-400 mb-1">Mail cheques to:</p>
              <p className="text-navy-DEFAULT dark:text-white font-semibold text-sm">Lighthouse Gospel Church</p>
              <p className="text-navy-600 dark:text-navy-200 text-sm">4817 Line 80</p>
              <p className="text-navy-600 dark:text-navy-200 text-sm">Listowel, ON  N4W 3G9</p>
            </div>
          </div>

          {/* Pre-Authorized */}
          <div className="card-base p-6 md:p-8 border-l-4 border-l-emerald-400">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Gift size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-lg">Pre-Authorized Giving</h3>
                <p className="text-xs text-navy-500 dark:text-navy-300 font-medium">Monthly · Automatic · Faithful</p>
              </div>
            </div>
            <p className="text-sm text-navy-600 dark:text-navy-200 leading-relaxed mb-4">
              Set up a recurring monthly gift and give faithfully without thinking about it. Pre-authorized
              giving makes a huge difference for church planning and sustainability.
            </p>
            <Link to="/connect" className="btn-outline text-sm w-full flex items-center justify-center gap-2">
              Request a PAG Form <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Estate / Legacy */}
          <div className="card-base p-6 md:p-8 border-l-4 border-l-purple-400">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Shield size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-lg">Legacy Giving</h3>
                <p className="text-xs text-navy-500 dark:text-navy-300 font-medium">Estate · Planned Gifts</p>
              </div>
            </div>
            <p className="text-sm text-navy-600 dark:text-navy-200 leading-relaxed mb-4">
              Leave a lasting legacy by including Lighthouse Gospel Church in your estate plan. A bequest,
              life insurance gift, or charitable remainder trust can bless the church for generations to come.
            </p>
            <a href="mailto:pedroneufeld47@gmail.com" className="btn-outline text-sm w-full flex items-center justify-center gap-2">
              <Mail size={14} aria-hidden="true" /> Contact Pastor Pedro
            </a>
          </div>

        </div>
      </div>
    </section>

    {/* Designations */}
    <section className="py-20 px-6" aria-label="Giving designations">
      <div className="max-w-4xl mx-auto text-center">
        <span className="section-label mb-4 inline-block">Where Your Gift Goes</span>
        <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl mb-5">
          Giving Designations
        </h2>
        <p className="text-navy-600 dark:text-navy-200 mb-10 max-w-xl mx-auto">
          Unless otherwise noted, all gifts go into the General Fund. You may designate your giving to
          any of the following:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label:'General Fund',             desc:'Supports all church operations, staff, and day-to-day ministry.'                },
            { label:'Missions',                 desc:'Funds our global missionary partners and short-term mission opportunities.'      },
            { label:'Building Fund',            desc:'Maintains and improves our facility for generations to come.'                   },
            { label:'Kids & Youth Ministries',  desc:'Resources children\'s and youth programmes, curriculum, and events.'            },
          ].map(({ label, desc }) => (
            <div key={label} className="card-base p-5 text-left">
              <div className="w-2 h-6 rounded-full bg-gold-400 mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-navy-DEFAULT dark:text-white mb-2 text-sm">{label}</h3>
              <p className="text-xs text-navy-600 dark:text-navy-200 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 px-6 bg-cream-200/50 dark:bg-navy-800/30" aria-label="Giving FAQ">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-label mb-4 inline-block">Questions</span>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl">Giving FAQ</h2>
        </div>
        <div className="card-base p-6 md:p-10">
          {faqs.map(faq => <FaqItem key={faq.q} faq={faq} />)}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-6 bg-navy-DEFAULT dark:bg-navy-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <Heart className="w-12 h-12 text-gold-400 mx-auto mb-5" aria-hidden="true" />
        <h2 className="font-heading font-bold text-3xl mb-4">Every Gift Matters</h2>
        <p className="text-white/70 mb-8 leading-relaxed">
          Whether it's your first time giving or you've been partnering with us for years —
          thank you. Your generosity is changing lives right here in Listowel and around the world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:pedroneufeld47@gmail.com" className="btn-primary flex items-center gap-2">
            <Mail size={16} aria-hidden="true" /> Questions? Email Us
          </a>
          <Link to="/connect" className="btn-secondary">Contact Our Office</Link>
        </div>
      </div>
    </section>

  </div>
);
