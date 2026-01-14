
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Heart, ShieldCheck, Users, Zap, ScrollText, Cross, Flame, Book, Sun, UserPlus, Scale, Sparkles, Droplets, ArrowUpCircle, AlertTriangle, Calendar, Building2, Infinity, Instagram, Linkedin, Mail } from 'lucide-react';

const statementOfFaith = [
  {
    title: "God",
    icon: <Sun className="text-yellow-500" size={20} />,
    content: "We believe there is only one true, almighty God, existing in three Persons: Father, Son, and Holy Spirit. These three are co-eternal and coequal from all eternity, each with distinct personalities but of one essence. (1 John 5:7; 1 Peter 1:2; Ephesians 4:6; John 10:30; Matthew 28:19)"
  },
  {
    title: "Jesus Christ",
    icon: <Cross className="text-red-500" size={20} />,
    content: "We believe that Jesus Christ is the eternal Son of God who entered into the world through the virgin birth, living among us without sin as perfect man and perfect God. (John 1:1, 14; John 10:30; Matthew 1:23; Luke 1:35; 2 Corinthians 5:21; 1 Peter 2:22; 1 John 3:5)"
  },
  {
    title: "Holy Spirit",
    icon: <Flame className="text-orange-500" size={20} />,
    content: "We believe that the Holy Spirit convicts and regenerates the sinner, sanctifies and indwells the believer, and fills them for effective service. We believe that God has made provision for each believer to be victorious by being led of the Spirit and not walking after the flesh. (John 14:6; 16:8-11; 1 Cor. 6:11; Titus 3:5; 2 Thess. 2:13; 2 Cor. 3:18; Ephesians 5:18; Acts 1:8; Gal. 5:16, 25)"
  },
  {
    title: "Bible",
    icon: <Book className="text-blue-500" size={20} />,
    content: "We believe that the Bible is verbally inspired by God in it’s original writings, is truth without any mixture of error, and is the sole rule of faith and practice. (2 Timothy 3:16, 17; 2 Peter 1:21; Psalm 19:7; Psalm 33:4; Proverbs 30:5; 1 Thessalonians 2:13)"
  },
  {
    title: "Creation",
    icon: <Zap className="text-emerald-500" size={20} />,
    content: "We believe that God created all things, both visible and invisible, in six literal days. (Genesis 1:1-2:3; Exodus 20:11)"
  },
  {
    title: "Man",
    icon: <UserPlus className="text-indigo-500" size={20} />,
    content: "We believe Adam was directly created in innocence and in the image of God and was not evolved from pre-existing forms of life. By voluntary transgression he fell. The whole race is now sinful by nature and practice; therefore, under just condemnation to eternal separation from God. (Genesis 1:27, 2:7; Genesis 3:6; Romans 5:12; Romans 3:23; Isaiah 59:2)"
  },
  {
    title: "Law",
    icon: <Scale className="text-slate-500" size={20} />,
    content: "We believe that the law is God’s holy standard of righteousness. It defines sin, judges us transgressors, and leads us to faith in Christ who alone has kept the law and fulfilled it’s demands. (Matthew 5:17; Romans 3:19, 20, 28; 7:7-13)"
  },
  {
    title: "Righteousness",
    icon: <Sparkles className="text-cyan-500" size={20} />,
    content: "We believe that the sure righteousness which is acceptable to God is only found in Jesus Christ and can be obtained by faith as a free gift apart from any works of the law. (Genesis 15:6; Psalm 24:5; Romans 1:17; 3:21, 22, 26; 5:17, 18)"
  },
  {
    title: "Atonement",
    icon: <Heart className="text-pink-500" size={20} />,
    content: "We believe that Jesus Christ shed His blood on Calvary as a substitute for all sinners, was buried and rose again bodily, and ascended to the right hand of the Father from whence He will personally return. (Matthew 20:28; Romans 3:25; 5:9; Ephesians 1:7; Colossians 1:14; 1 Peter 2:24)"
  },
  {
    title: "Salvation",
    icon: <ShieldCheck className="text-green-500" size={20} />,
    content: "We believe that men are justified by grace through faith in the shed blood of the Lord Jesus Christ without any mixture of works. (John 3:16; 5:24; Acts 13:39; Romans 3:24, 28; 5:1; 10:9-13; Gal. 2:16; Eph. 2:8, 9; Titus 3:7)"
  }
];

interface LeaderProps {
  name: string;
  role: string;
  glow: string;
  accent: string;
}

const LeadershipCard: React.FC<LeaderProps> = ({ name, role, glow, accent }) => (
  <div className="relative group">
    <div className={`absolute -inset-1 bg-gradient-to-br ${glow} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
    <GlassCard className="relative py-12 px-8 text-center overflow-hidden border-black/10 dark:border-white/20 bg-white/60 dark:bg-black/40 backdrop-blur-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] h-full flex flex-col">
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 ${accent} rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
      <div className="relative mb-8 flex-1">
        <h4 className="text-xl font-bold text-black dark:text-white transition-colors duration-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-tight">
          {name}
        </h4>
        <p className="text-black/50 dark:text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-3">
          {role}
        </p>
      </div>
      <div className="flex justify-center gap-3 mt-auto pt-4 border-t border-black/5 dark:border-white/5 opacity-40 group-hover:opacity-100 transition-all duration-500">
        <button className="p-2 bg-black/5 dark:bg-white/10 rounded-xl hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-90">
          <Instagram size={14} />
        </button>
        <button className="p-2 bg-black/5 dark:bg-white/10 rounded-xl hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-90">
          <Linkedin size={14} />
        </button>
        <button className="p-2 bg-black/5 dark:bg-white/10 rounded-xl hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-90">
          <Mail size={14} />
        </button>
      </div>
    </GlassCard>
  </div>
);

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-black dark:text-white tracking-tight transition-colors duration-500">Our Mission & Vision</h1>
        <p className="text-xl text-black/60 dark:text-white/60 transition-colors duration-500">
          Founded in 2007, Lighthouse Gospel Church was born from a desire to create a sanctuary where ancient wisdom meets the possibilities of the future.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="space-y-24">
        {/* Pastoral Team */}
        <div className="space-y-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase">The Heart of our Church</span>
            <h2 className="text-4xl font-bold text-black dark:text-white text-center transition-colors duration-500 tracking-tight">Pastoral Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <LeadershipCard name="Pastor Pedro Neufeld" role="Lead Pastor" glow="from-blue-500/20" accent="bg-blue-500/50" />
            <LeadershipCard name="Willie Braun" role="Worship Leader" glow="from-purple-500/20" accent="bg-purple-500/50" />
            <LeadershipCard name="Marcus Thorne" role="Youth Leader" glow="from-indigo-500/20" accent="bg-indigo-500/50" />
            <LeadershipCard name="Elena Rodriguez" role="Community Outreach" glow="from-emerald-500/20" accent="bg-emerald-500/50" />
          </div>
        </div>

        {/* Elders */}
        <div className="space-y-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-amber-600 dark:text-amber-400 text-[10px] font-black tracking-widest uppercase">Spiritual Oversight</span>
            <h2 className="text-4xl font-bold text-black dark:text-white text-center transition-colors duration-500 tracking-tight">Our Elders</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <LeadershipCard name="Johnathan Wick" role="Elder of Fellowship" glow="from-amber-500/15" accent="bg-amber-500/50" />
            <LeadershipCard name="Samuel Peters" role="Elder of Education" glow="from-amber-500/15" accent="bg-amber-500/50" />
            <LeadershipCard name="David Miller" role="Elder of Stewardship" glow="from-amber-500/15" accent="bg-amber-500/50" />
          </div>
        </div>

        {/* Deacons */}
        <div className="space-y-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] font-black tracking-widest uppercase">Service & Logistics</span>
            <h2 className="text-4xl font-bold text-black dark:text-white text-center transition-colors duration-500 tracking-tight">The Deacons</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <LeadershipCard name="Robert Chen" role="Facility Deacon" glow="from-slate-500/15" accent="bg-slate-500/50" />
            <LeadershipCard name="Thomas Wright" role="Benevolence Deacon" glow="from-slate-500/15" accent="bg-slate-500/50" />
            <LeadershipCard name="Mark Jansen" role="Hospitality Deacon" glow="from-slate-500/15" accent="bg-slate-500/50" />
            <LeadershipCard name="Sarah Klassen" role="Admin Deacon" glow="from-slate-500/15" accent="bg-slate-500/50" />
          </div>
        </div>

        {/* Ministry Couples */}
        <div className="space-y-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-rose-500 dark:text-rose-400 text-[10px] font-black tracking-widest uppercase">Family & Life</span>
            <h2 className="text-4xl font-bold text-black dark:text-white text-center transition-colors duration-500 tracking-tight">Ministry Couples</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LeadershipCard name="Jacob & Maria Neufeld" role="Marriage Ministry" glow="from-rose-500/15" accent="bg-rose-500/50" />
            <LeadershipCard name="Peter & Anna Sawatzky" role="Young Couples Ministry" glow="from-rose-500/15" accent="bg-rose-500/50" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="p-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center shadow-lg">
              <ShieldCheck className="text-blue-600 dark:text-blue-400 w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold text-black dark:text-white tracking-tight transition-colors duration-500">Our Values</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full" />
          </div>
          
          <ul className="space-y-8">
            <li className="flex gap-4 group">
              <div className="shrink-0 mt-1">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Cross className="text-blue-600 dark:text-blue-400" size={18} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-black dark:text-white font-bold text-lg">1. Christ-Centeredness</p>
                <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed transition-colors duration-500">
                  We commit to keeping the person, teachings, and lordship of Jesus at the center of everything we do.
                </p>
              </div>
            </li>
            <li className="flex gap-4 group">
              <div className="shrink-0 mt-1">
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <Users className="text-purple-600 dark:text-purple-400" size={18} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-black dark:text-white font-bold text-lg">2. Authentic Community</p>
                <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed transition-colors duration-500">
                  Through radical hospitality, we create a space where everyone belongs, reflecting the inclusive love of Christ.
                </p>
              </div>
            </li>
            <li className="flex gap-4 group">
              <div className="shrink-0 mt-1">
                <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <Sparkles className="text-orange-600 dark:text-orange-400" size={18} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-black dark:text-white font-bold text-lg">3. Lifestyle Worship</p>
                <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed transition-colors duration-500">
                  Worship is our whole-life response to God’s grace—in our songs, our work, and our relationships.
                </p>
              </div>
            </li>
          </ul>
        </GlassCard>

        <div className="grid grid-cols-1 gap-8">
          <GlassCard className="flex items-start gap-6">
            <div className="p-4 bg-purple-500/20 rounded-2xl">
              <Users className="text-purple-600 dark:text-purple-400 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors duration-500">Strong Community</h3>
              <p className="text-black/60 dark:text-white/60 transition-colors duration-500">Spiritual growth happens best in circles. Our small groups are the heartbeat of our church.</p>
            </div>
          </GlassCard>
          
          <GlassCard className="flex items-start gap-6">
            <div className="p-4 bg-orange-500/20 rounded-2xl">
              <Zap className="text-orange-600 dark:text-orange-400 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors duration-500">Spiritual Growth</h3>
              <p className="text-black/60 dark:text-white/60 transition-colors duration-500">Equipping believers with the tools to live out their faith boldly in today's world.</p>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Statement of Faith Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-500">
            <ScrollText size={16} /> Foundations
          </div>
          <h2 className="text-5xl font-bold text-black dark:text-white transition-colors duration-500">Statement of Faith</h2>
          <p className="text-black/50 dark:text-white/50 max-w-2xl mx-auto transition-colors duration-500">Foundational truths that guide our worship and our community life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statementOfFaith.map((item, index) => (
            <GlassCard key={index} className="flex flex-col gap-4 h-full">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black/5 dark:bg-white/5 rounded-lg border border-black/5 dark:border-white/10 transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-black dark:text-white transition-colors duration-500">{item.title}</h3>
              </div>
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed transition-colors duration-500">
                {item.content}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
};
