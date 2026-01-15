
import React, { useEffect, useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { getDailyInspiration } from '../services/gemini';
import { ArrowRight, Calendar, Heart, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [inspiration, setInspiration] = useState<{verse: string, reference: string, reflection: string} | null>(null);

  useEffect(() => {
    getDailyInspiration().then(setInspiration);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 space-y-24 max-w-7xl mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center space-y-8 py-20">
        <div className="absolute -top-40 -z-10 w-full max-w-[500px] aspect-square bg-blue-600/20 dark:bg-blue-600/30 blur-[120px] rounded-full left-1/2 -translate-x-1/2" />
        <div className="absolute top-40 right-0 -z-10 w-full max-w-[400px] aspect-square bg-purple-600/10 dark:bg-purple-600/20 blur-[100px] rounded-full opacity-50 md:opacity-100" />
        
        <h1 className="text-5xl md:text-8xl font-bold text-black dark:text-white tracking-tighter leading-tight max-w-5xl transition-colors duration-500">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Lighthouse Gospel Church.</span>
        </h1>
        <p className="text-2xl md:text-4xl text-black/60 dark:text-white/60 font-medium tracking-tight transition-colors duration-500 px-4">
          Come worship with us.
        </p>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          <Link to="/services" className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl">
            Join a Service <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/sermons" className="w-full sm:w-auto bg-white/30 dark:bg-white/10 text-black dark:text-white backdrop-blur-xl border border-black/5 dark:border-white/20 px-8 py-4 rounded-2xl font-semibold hover:bg-white/40 dark:hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2">
            <Headphones className="w-5 h-5" /> Listen to Messages
          </Link>
        </div>
      </section>

      {/* AI Inspiration Card */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 relative group">
          {/* Enhanced side accent - slightly wider and more luminous */}
          <div className="absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 rounded-full z-20 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          
          <GlassCard className="h-full min-h-[320px] flex flex-col justify-center pl-12 
            bg-white/60 dark:bg-black/40 saturate-[180%] 
            shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)]
            ring-1 ring-white/30 dark:ring-white/10">
            
            {/* Additional internal shine for the featured card */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none skew-x-12 translate-x-1/2" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Daily Inspiration</span>
              </div>
              
              {inspiration ? (
                <>
                  <blockquote className="text-3xl md:text-4xl font-bold text-black dark:text-white italic leading-tight tracking-tight">
                    "{inspiration.verse}"
                  </blockquote>
                  <p className="text-black/60 dark:text-white/50 text-base md:text-lg font-medium">— {inspiration.reference}</p>
                  <div className="pt-6 border-t border-black/5 dark:border-white/10 max-w-xl">
                    <p className="text-black/80 dark:text-white/80 text-sm md:text-base leading-relaxed">
                      {inspiration.reflection}
                    </p>
                  </div>
                </>
              ) : (
                <div className="animate-pulse space-y-4">
                  <div className="h-10 bg-black/5 dark:bg-white/10 rounded-xl w-5/6"></div>
                  <div className="h-6 bg-black/5 dark:bg-white/10 rounded-xl w-1/3"></div>
                  <div className="h-20 bg-black/5 dark:bg-white/10 rounded-xl w-full mt-8"></div>
                </div>
              )}
            </div>
          </GlassCard>
        </div>

        <div className="space-y-4">
          <GlassCard className="bg-gradient-to-br from-blue-600/10 to-blue-900/10 dark:from-blue-600/20 dark:to-blue-900/20 border-blue-500/20">
            <Heart className="text-blue-600 dark:text-white w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Giving</h3>
            <p className="text-black/60 dark:text-white/60 text-sm mb-4">Support our mission and community outreach programs.</p>
            <Link to="/giving" className="text-blue-700 dark:text-white font-medium flex items-center gap-2 hover:translate-x-1 transition-transform">
              Donate Now <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>
          
          <GlassCard className="bg-gradient-to-br from-purple-600/10 to-purple-900/10 dark:from-purple-600/20 dark:to-purple-900/20 border-purple-500/20">
            <Calendar className="text-purple-600 dark:text-white w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Events</h3>
            <p className="text-black/60 dark:text-white/60 text-sm mb-4">See what's happening this week in our community.</p>
            <Link to="/events" className="text-purple-700 dark:text-white font-medium flex items-center gap-2 hover:translate-x-1 transition-transform">
              View Calendar <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* Featured Service Times */}
      <section className="text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight">Join Us This Sunday</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { time: "09:00 AM", label: "First Service", location: "Main Sanctuary" },
            { time: "11:00 AM", label: "Second Service", location: "Main Sanctuary" },
            { time: "06:00 PM", label: "Youth & Young Adults", location: "Lower Studio" }
          ].map((s, i) => (
            <GlassCard key={i} className="py-10">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-2">{s.time}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold mb-4">{s.label}</p>
              <p className="text-black/40 dark:text-white/40 text-sm font-medium">{s.location}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
};
