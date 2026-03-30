
import React from 'react';
import { GlassCard } from '../components/GlassCard';

export const Home: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 space-y-24 max-w-7xl mx-auto">
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
      </section>

      {/* Service Times */}
      <section className="text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight">Join Us This Sunday</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { time: "9:00 AM - 10:15 AM", label: "First Service", location: "Main Sanctuary" },
            { time: "11:00 AM - 12:15 PM", label: "Second Service", location: "Main Sanctuary" }
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
