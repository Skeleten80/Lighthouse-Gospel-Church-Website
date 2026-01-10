
import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Play, Download, Share2, Search, Headset, Mic2, BookOpen, Music } from 'lucide-react';

const sermons = [
  { 
    id: '1', 
    title: 'The Digital Sabbath', 
    speaker: 'Pastor Pedro Neufeld', 
    date: 'Oct 6, 2024', 
    series: 'Ancient Rhythms', 
    duration: '42:15',
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  { 
    id: '2', 
    title: 'Grace in the Modern Age', 
    speaker: 'Marcus Thorne', 
    date: 'Sep 29, 2024', 
    series: 'Faith & Tech', 
    duration: '38:40',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  { 
    id: '3', 
    title: 'Community Beyond Borders', 
    speaker: 'Pastor Pedro Neufeld', 
    date: 'Sep 22, 2024', 
    series: 'Ancient Rhythms', 
    duration: '45:02',
    color: 'from-orange-500/20 to-red-500/20'
  },
  { 
    id: '4', 
    title: 'The Heart of Worship', 
    speaker: 'Elena Rodriguez', 
    date: 'Sep 15, 2024', 
    series: 'Heart Matters', 
    duration: '35:20',
    color: 'from-emerald-500/20 to-teal-500/20'
  },
];

export const Sermons: React.FC = () => {
  const [activeSermon, setActiveSermon] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/5 dark:border-white/5 pb-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
            <Headset size={12} /> Audio Sanctuary
          </div>
          <h1 className="text-5xl font-bold text-black dark:text-white tracking-tight">Sermon Library</h1>
          <p className="text-black/50 dark:text-white/50 max-w-lg">Listen to the latest messages from our teaching team. High-fidelity audio for your spiritual journey.</p>
        </div>
        <div className="relative max-w-md w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 dark:text-white/30 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search topics, speakers, or verses..." 
            className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all backdrop-blur-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sermons.map(sermon => (
          <GlassCard 
            key={sermon.id} 
            className={`group transition-all duration-500 ${activeSermon === sermon.id ? 'ring-2 ring-blue-500/50 scale-[1.02]' : ''}`}
          >
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Audio Visual Representation */}
              <div className={`relative w-full sm:w-40 aspect-square rounded-2xl bg-gradient-to-br ${sermon.color} border border-black/5 dark:border-white/10 flex items-center justify-center overflow-hidden shrink-0`}>
                <div className="absolute inset-0 bg-white/5 dark:bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mic2 className="text-black/20 dark:text-white/20 w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
                
                {activeSermon === sermon.id && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1 h-8">
                    {[0, 1, 2, 3, 4].map(i => (
                      <div 
                        key={i} 
                        className="w-1 bg-blue-500 rounded-full animate-bounce" 
                        style={{ 
                          height: `${Math.random() * 100}%`,
                          animationDuration: `${0.5 + Math.random()}s`,
                          animationDelay: `${i * 0.1}s`
                        }} 
                      />
                    ))}
                  </div>
                )}
                
                <button 
                  onClick={() => setActiveSermon(activeSermon === sermon.id ? null : sermon.id)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-14 h-14 bg-white dark:bg-black rounded-full shadow-2xl flex items-center justify-center text-black dark:text-white scale-90 group-hover:scale-100 transition-transform">
                    {activeSermon === sermon.id ? (
                      <div className="w-4 h-4 bg-current rounded-sm" />
                    ) : (
                      <Play className="fill-current ml-1" size={24} />
                    )}
                  </div>
                </button>
              </div>

              {/* Sermon Info */}
              <div className="flex-1 space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest">{sermon.series}</span>
                    <span className="text-[10px] text-black/30 dark:text-white/30 font-bold">{sermon.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-black/50 dark:text-white/50 font-medium text-sm">{sermon.speaker} • {sermon.date}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 rounded-xl text-xs font-bold text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                    <BookOpen size={14} /> Notes
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 rounded-xl text-xs font-bold text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                    <Download size={14} /> MP3
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 rounded-xl text-xs font-bold text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                    <Share2 size={14} /> Share
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Featured Series Section */}
      <section className="pt-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white">Recent Series</h2>
          <button className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">View All Series</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Ancient Rhythms', 'Faith & Tech', 'Heart Matters', 'Grace Notes'].map((series, i) => (
            <GlassCard key={i} className="text-center p-8 group cursor-pointer border-dashed">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Music size={20} />
              </div>
              <h4 className="font-bold text-sm text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{series}</h4>
              <p className="text-[10px] text-black/40 dark:text-white/40 mt-1 uppercase font-black tracking-tighter">8 Episodes</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Audio Podcast Link */}
      <GlassCard className="bg-gradient-to-r from-blue-600 to-indigo-600 border-none text-white p-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-4xl font-bold tracking-tight">Subscribe to our Podcast</h3>
          <p className="text-white/80 max-w-lg text-lg leading-relaxed">
            Take the word with you. Subscribe on Apple Podcasts or Spotify for automatic updates every Sunday afternoon.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
          <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all text-base min-w-[200px]">
            Apple Podcasts
          </button>
          <button className="bg-black/30 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black/50 active:scale-95 transition-all text-base min-w-[200px]">
            Spotify
          </button>
        </div>
      </GlassCard>
    </div>
  );
};
