
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Heart, ShieldCheck, Users, Zap, ScrollText, Cross, Flame, Book, Sun, UserPlus, Scale, Sparkles, Droplets, ArrowUpCircle, AlertTriangle, Calendar, Building2, Infinity } from 'lucide-react';

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
  },
  {
    title: "Ordinances",
    icon: <Droplets className="text-blue-400" size={20} />,
    content: "We believe in the ordinance of water baptism upon the confession of faith and the ordinance of communion. (Matthew 28:19; Acts 2:38; Romans 6:3-5; Matthew 26:26-28; 1 Cor. 11:23-28)"
  },
  {
    title: "Rapture",
    icon: <ArrowUpCircle className="text-purple-500" size={20} />,
    content: "We believe in the bodily return of the Lord Jesus Christ for His Church. (Acts 1:11; Matthew 24:30, 31; 1 Thess. 4:16,17; 2 Thess 1:10; Revelation 1:7)"
  },
  {
    title: "Resurrection",
    icon: <Flame className="text-red-600" size={20} />,
    content: "We believe in the resurrection of both the saved and the lost; the just unto the resurrection of life eternal and the lost unto eternal damnation. (Luke 14:14; John 5:29; Revelation 20:5, 6; 21:8)"
  },
  {
    title: "Judgement",
    icon: <AlertTriangle className="text-orange-600" size={20} />,
    content: "We believe that God judged the world in the days of Noah by a worldwide flood and that the world that now is will be destroyed by fire. (Genesis 6:17; 2 Peter 3:7, 10)"
  },
  {
    title: "Marriage",
    icon: <Infinity className="text-amber-500" size={20} />,
    content: "We believe in the covenant of marriage as the union of one man and one woman for life to the exclusion of all other. (Genesis 2:24; Matthew 19:5, 6; Malachi 2:14-16)"
  },
  {
    title: "Lord’s Day",
    icon: <Calendar className="text-blue-600" size={20} />,
    content: "We believe in gathering for worship and fellowship on Sunday–the first day of the week. (Mark 16:9; Acts 20:7; 1 Cor. 16:2; Rev. 1:10)"
  },
  {
    title: "Civil Government",
    icon: <Building2 className="text-stone-500" size={20} />,
    content: "We believe that Civil government is of divine appointment and that authorities are to be prayed for, honoured and obeyed except in things opposed to the will of our Lord. (Romans 13:1-7; 1 Timothy 2:1-2)"
  }
];

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
      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-black dark:text-white text-center transition-colors duration-500">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Pastor Pedro Neufeld", role: "Lead Pastor", img: "https://picsum.photos/seed/pedro/400/400" },
            { name: "Willie Braun", role: "Worship Leader", img: "https://picsum.photos/seed/willie/400/400" },
            { name: "Marcus Thorne", role: "Youth Leader", img: "https://picsum.photos/seed/marcus/400/400" },
            { name: "Elena Rodriguez", role: "Community Outreach", img: "https://picsum.photos/seed/elena/400/400" }
          ].map((leader, i) => (
            <GlassCard key={i} className="p-0 overflow-hidden text-center group">
              <img src={leader.img} alt={leader.name} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="p-6">
                <h4 className="text-lg font-bold text-black dark:text-white transition-colors duration-500">{leader.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium transition-colors duration-500">{leader.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="p-10">
          {/* Centered Heading at the top */}
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
                  We commit to keeping the person, teachings, and lordship of Jesus at the center of everything we do. Our identity is rooted in Him, and our mission is directed by His Spirit.
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
                  We believe faith is lived out together. Through radical hospitality and mutual support, we create a space where everyone belongs, reflecting the inclusive love of Christ in our daily lives.
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
                  We define worship as more than a Sunday service; it is our whole-life response to God’s grace. We honor Him through our songs, our work, our relationships, and our service to the world.
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
              <p className="text-black/60 dark:text-white/60 transition-colors duration-500">We believe spiritual growth happens best in circles, not just rows. Our small groups are the heartbeat of our church.</p>
            </div>
          </GlassCard>
          
          <GlassCard className="flex items-start gap-6">
            <div className="p-4 bg-orange-500/20 rounded-2xl">
              <Zap className="text-orange-600 dark:text-orange-400 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors duration-500">Spiritual Growth</h3>
              <p className="text-black/60 dark:text-white/60 transition-colors duration-500">Equipping every believer with the tools to live out their faith boldly and effectively in today's world.</p>
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
          <p className="text-black/50 dark:text-white/50 max-w-2xl mx-auto transition-colors duration-500">The foundational truths that guide our worship, our teaching, and our community life.</p>
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
