
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import * as LucideIcons from 'lucide-react';

const { Heart, ShieldCheck, Users, Zap, ScrollText, Cross, Flame, Book, Sun, Sparkles, Music } = LucideIcons;

const statementOfFaith = [
  {
    title: "God",
    icon: <Sun className="text-yellow-500" size={20} />,
    content: "We believe there is only one true, almighty God, existing in three Persons: Father, Son, and Holy Spirit. (1 John 5:7; 1 Peter 1:2; Ephesians 4:6)"
  },
  {
    title: "Jesus Christ",
    icon: <Cross className="text-red-500" size={20} />,
    content: "We believe that Jesus Christ is the eternal Son of God who entered into the world through the virgin birth. (John 1:1, 14; Matthew 1:23)"
  },
  {
    title: "Holy Spirit",
    icon: <Flame className="text-orange-500" size={20} />,
    content: "We believe that the Holy Spirit convicts and regenerates the sinner, and indwells the believer. (John 14:6; Titus 3:5; Acts 1:8)"
  },
  {
    title: "Bible",
    icon: <Book className="text-blue-500" size={20} />,
    content: "We believe that the Bible is verbally inspired by God and is the sole rule of faith and practice. (2 Timothy 3:16, 17; 2 Peter 1:21)"
  },
  {
    title: "Righteousness",
    icon: <Sparkles className="text-cyan-500" size={20} />,
    content: "We believe that the sure righteousness which is acceptable to God is only found in Jesus Christ. (Genesis 15:6; Romans 1:17)"
  },
  {
    title: "Salvation",
    icon: <ShieldCheck className="text-green-500" size={20} />,
    content: "We believe that men are justified by grace through faith in the shed blood of the Lord Jesus Christ. (John 3:16; Ephesians 2:8, 9)"
  }
];

interface LeaderProps {
  name: string;
  role: string;
  glow: string;
  accent: string;
  icon?: React.ReactNode;
}

const LeadershipCard: React.FC<LeaderProps> = ({ name, role, glow, accent, icon }) => (
  <div className="relative group h-full w-full max-w-[280px] mx-auto">
    <div className={`absolute -inset-1 bg-gradient-to-br ${glow} to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
    <GlassCard className="relative text-center overflow-hidden border-black/10 dark:border-white/20 bg-white/60 dark:bg-black/40 backdrop-blur-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] h-full flex flex-col py-8 px-6 min-h-[180px] justify-center">
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 ${accent} rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
      
      {icon && (
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-500 group-hover:scale-110 bg-black/5 dark:bg-white/5`}>
          {icon}
        </div>
      )}
      
      <div className="relative flex flex-col justify-center">
        <h4 className="font-bold text-black dark:text-white transition-colors duration-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-tight text-lg">
          {name}
        </h4>
        <p className="text-black/40 dark:text-white/30 text-[9px] font-black uppercase tracking-[0.2em] mt-2">
          {role}
        </p>
      </div>
    </GlassCard>
  </div>
);

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold text-black dark:text-white tracking-tight">Our Story</h1>
        <p className="text-xl text-black/60 dark:text-white/60">
          Rooted in Listowel, Lighthouse Gospel Church is a community dedicated to sharing the grace of Christ.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="space-y-16">
        <div className="text-center space-y-2">
          <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase">Servant Leadership</span>
          <h2 className="text-5xl font-bold text-black dark:text-white tracking-tight">Our Leadership Team</h2>
        </div>

        {/* Head Pastors */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/10" />
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">Head Pastors</h3>
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/10" />
          </div>
          <div className="flex justify-center">
            <LeadershipCard name="Pedro & Lisa Neufeld" role="Head Pastors" glow="from-blue-500/30" accent="bg-blue-500" />
          </div>
        </div>

        {/* Elders */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/10" />
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">Elders</h3>
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[584px] mx-auto">
            <LeadershipCard name="Jake & Maggie Hiebert" role="Elder" glow="from-cyan-500/20" accent="bg-cyan-400" />
            <LeadershipCard name="Jacob & Susie Wall" role="Elder" glow="from-cyan-500/20" accent="bg-cyan-400" />
          </div>
        </div>

        {/* Deacons */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/10" />
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 dark:text-rose-400">Deacons</h3>
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
            <LeadershipCard name="Dave & Anna Harms" role="Deacon" glow="from-rose-500/20" accent="bg-rose-500" />
            <LeadershipCard name="Henry & Mary Janzen" role="Deacon" glow="from-rose-500/20" accent="bg-rose-500" />
            <LeadershipCard name="John & Lisa Berg" role="Deacon" glow="from-rose-500/20" accent="bg-rose-500" />
            <LeadershipCard name="Dave & Tina Bose" role="Deacon" glow="from-rose-500/20" accent="bg-rose-500" />
          </div>
        </div>

        {/* Ministry Staff */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/10" />
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">Ministry Staff</h3>
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/10" />
          </div>
          <div className="flex justify-center">
            <LeadershipCard 
              name="Willy Braun" 
              role="Worship Leader" 
              glow="from-purple-500/30" 
              accent="bg-purple-500" 
              icon={<Music className="text-purple-600 dark:text-purple-400" size={20} />} 
            />
          </div>
        </div>
      </section>

      {/* Values & Statement of Faith */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-20">
        <div className="lg:col-span-1">
          <GlassCard className="p-10 h-full">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="text-blue-600 dark:text-blue-400 w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-black dark:text-white tracking-tight">Core Values</h2>
            </div>
            <ul className="space-y-10">
              {[
                { icon: <Cross className="text-blue-600" size={24} />, title: "Christ-Centeredness", text: "Jesus at the heart of everything." },
                { icon: <Users className="text-purple-600" size={24} />, title: "Authentic Community", text: "Radical hospitality for all." },
                { icon: <Zap className="text-orange-600" size={24} />, title: "Spiritual Growth", text: "Living out faith boldly." }
              ].map((v, i) => (
                <li key={i} className="flex flex-col items-center text-center gap-3 group">
                  <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <div>
                    <p className="text-black dark:text-white font-bold text-lg">{v.title}</p>
                    <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="lg:col-span-2">
          <GlassCard className="p-10 h-full">
            <div className="flex items-center gap-4 mb-10">
              <ScrollText className="text-blue-600" size={32} />
              <h2 className="text-3xl font-bold text-black dark:text-white tracking-tight">Statement of Faith</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {statementOfFaith.map((item, index) => (
                <div key={index} className="space-y-2 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <h3 className="font-bold text-black dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
