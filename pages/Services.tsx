
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Headset, Users, BookOpen, Music, Headphones, Radio } from 'lucide-react';

export const Services: React.FC = () => {
  const address = "4817 Line 80, Listowel ON N4W 3G9, Canada";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-24">
      <section className="text-center space-y-8 py-10">
        <h1 className="text-6xl font-bold text-black dark:text-white tracking-tight transition-colors">Worship Experience</h1>
        <p className="text-xl text-black/60 dark:text-white/60 max-w-3xl mx-auto transition-colors">
          We believe worship is a lifestyle, not just a Sunday event. Whether you join us in person or through our high-fidelity audio streams, our services are designed to inspire and renew your spirit.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Music className="text-blue-500" />,
            title: "Dynamic Worship",
            desc: "Immersive music that blends modern sounds with timeless lyrics to create an atmosphere of encounter."
          },
          {
            icon: <BookOpen className="text-purple-500" />,
            title: "Biblical Teaching",
            desc: "Practical, relevant, and challenging messages rooted in scripture for your daily journey."
          },
          {
            icon: <Users className="text-orange-500" />,
            title: "Loving Community",
            desc: "A diverse family where people of all backgrounds and stories find a place to belong through Christ's love."
          }
        ].map((item, i) => (
          <GlassCard key={i} className="text-center space-y-4 py-12">
            <div className="w-16 h-16 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-black/5 dark:border-white/10">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white transition-colors">{item.title}</h3>
            <p className="text-black/50 dark:text-white/50 leading-relaxed transition-colors">{item.desc}</p>
          </GlassCard>
        ))}
      </div>

      <section className="space-y-12">
        <h2 className="text-4xl font-bold text-black dark:text-white text-center transition-colors">Ways to Join</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* In Person Card */}
          <GlassCard className="p-0 overflow-hidden relative min-h-[450px] group">
            <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" alt="In person sanctuary" />
            <div className="relative z-10 p-10 h-full flex flex-col justify-end bg-gradient-to-t from-white dark:from-black via-transparent to-transparent">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-2">In Person</h3>
              <p className="text-black/70 dark:text-white/80 mb-6">Experience the warmth of community and the power of shared worship in our sanctuary.</p>
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="text-black/60 dark:text-white/60">Sunday Morning</span>
                  <span className="text-black dark:text-white font-bold">9am & 11am</span>
                </div>
                <div className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="text-black/60 dark:text-white/60">Midweek Prayer</span>
                  <span className="text-black dark:text-white font-bold">Wed 7pm</span>
                </div>
              </div>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-bold hover:opacity-90 active:scale-95 transition-all text-center block shadow-xl"
              >
                Get Directions
              </a>
            </div>
          </GlassCard>

          {/* Audio Sanctuary Card */}
          <GlassCard className="p-0 overflow-hidden relative min-h-[450px] group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-900/40 dark:to-purple-900/40" />
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Radio size={300} className="text-black dark:text-white" />
            </div>
            
            <div className="relative z-10 p-10 h-full flex flex-col justify-end">
              <div className="mb-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  <Headset size={12} /> Live Audio Feed
                </div>
              </div>

              <h3 className="text-3xl font-bold text-black dark:text-white mb-2">Audio Sanctuary</h3>
              <p className="text-black/70 dark:text-white/80 mb-6">Join our congregation through a high-definition audio stream. Perfect for those on the go or listening from home.</p>
              
              <div className="flex flex-col gap-2 mb-8">
                <div className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="text-black/60 dark:text-white/60">Sunday Stream</span>
                  <span className="text-black dark:text-white font-bold">11:00 AM EST</span>
                </div>
                <div className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="text-black/60 dark:text-white/60">Audio Fidelity</span>
                  <span className="text-black dark:text-white font-bold">320kbps Stereo</span>
                </div>
              </div>

              <button className="bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-500 active:scale-95 transition-all shadow-xl shadow-blue-500/20">
                <Headphones size={20} /> Listen to Live Stream
              </button>
            </div>

            {/* Subtle Animated Visualizer Bars */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 h-32 opacity-20 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 bg-blue-500 dark:bg-blue-400 rounded-t-full animate-bounce" 
                  style={{ 
                    height: `${20 + Math.random() * 60}%`,
                    animationDuration: `${0.8 + Math.random() * 1.2}s`,
                    animationDelay: `${i * 0.05}s`
                  }} 
                />
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};
