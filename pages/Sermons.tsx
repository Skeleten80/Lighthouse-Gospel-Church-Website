
import React, { useState, useRef, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Sermon } from '../types';
import * as LucideIcons from 'lucide-react';

const { 
  Play, 
  Pause, 
  Search, 
  Headset, 
  Mic2, 
  BookOpen, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  X,
  Youtube,
  Tv,
  Radio,
  Video
} = LucideIcons;

const sermonData: Sermon[] = [
  { 
    id: '1', 
    title: 'The Digital Sabbath', 
    speaker: 'Pastor Pedro Neufeld', 
    date: 'Oct 6, 2024', 
    series: 'Ancient Rhythms', 
    duration: '42:15',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    youtubeId: 'dQw4w9WgXcQ',
    featured: true
  },
  { 
    id: '2', 
    title: 'Grace in the Modern Age', 
    speaker: 'Marcus Thorne', 
    date: 'Sep 29, 2024', 
    series: 'Faith & Tech', 
    duration: '38:40',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    youtubeId: '9bZkp7q19f0'
  },
  { 
    id: '3', 
    title: 'Community Beyond Borders', 
    speaker: 'Pastor Pedro Neufeld', 
    date: 'Sep 22, 2024', 
    series: 'Ancient Rhythms', 
    duration: '45:02',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    youtubeId: 'dQw4w9WgXcQ'
  },
  { 
    id: '4', 
    title: 'The Heart of Worship', 
    speaker: 'Elena Rodriguez', 
    date: 'Sep 15, 2024', 
    series: 'Heart Matters', 
    duration: '35:20',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    youtubeId: '9bZkp7q19f0'
  },
];

const AudioVisualizer: React.FC<{ isPlaying: boolean; color?: string }> = ({ isPlaying, color = '#3b82f6' }) => {
  return (
    <div className="flex items-end gap-1 h-4">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className={`w-1 rounded-full transition-all duration-500 ${isPlaying ? 'animate-bounce' : 'h-1 opacity-40'}`}
          style={{ 
            backgroundColor: color,
            height: isPlaying ? `${40 + Math.random() * 60}%` : '4px',
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.6s'
          }}
        />
      ))}
    </div>
  );
};

export const Sermons: React.FC = () => {
  const [activeSermon, setActiveSermon] = useState<Sermon | null>(null);
  const [activeVideo, setActiveVideo] = useState<Sermon | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [filter, setFilter] = useState('All');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const seriesOptions = ['All', ...new Set(sermonData.map(s => s.series))];
  const filteredSermons = sermonData.filter(s => filter === 'All' || s.series === filter);
  const featuredSermon = sermonData.find(s => s.featured) || sermonData[0];

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying && activeSermon) {
        audio.play().catch(() => setIsPlaying(false));
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, activeSermon]);

  const onTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleSermonToggle = (sermon: Sermon) => {
    if (activeSermon?.id === sermon.id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveSermon(sermon);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto space-y-20">
      <audio 
        ref={audioRef}
        src={activeSermon?.audioUrl}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/5 dark:border-white/5 pb-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <Radio size={12} className="animate-pulse" /> Live Now: Sunday Worship
          </div>
          <h1 className="text-6xl font-bold text-black dark:text-white tracking-tighter">Sermon Library</h1>
          <p className="text-black/50 dark:text-white/50 max-w-lg text-lg">
            Immerse yourself in our latest messages. Available in 4K Video and High-Fidelity Audio.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative group flex-1 md:min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 dark:text-white/30 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search speakers or topics..." 
              className="w-full bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all backdrop-blur-md"
            />
          </div>
          <div className="flex items-center gap-2 bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-1.5 rounded-2xl backdrop-blur-md overflow-x-auto no-scrollbar">
            {seriesOptions.map(opt => (
              <button 
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${filter === opt ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' : 'text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Section (Removed Thumbnail) */}
      <section className="animate-apple-slide-up">
        <div className="relative group rounded-[48px] overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 aspect-video max-h-[550px] shadow-[0_50px_120px_rgba(0,0,0,0.3)] dark:shadow-[0_50px_120px_rgba(0,0,0,0.7)] border border-white/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.5),transparent)]" />
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
             <Video size={300} className="text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-end">
            <div className="space-y-6 max-w-2xl relative z-10">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-red-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
                  <Youtube size={12} className="inline mr-1" /> Latest Video
                </div>
                <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg text-[10px] font-black uppercase tracking-widest">
                  {featuredSermon.series}
                </div>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">{featuredSermon.title}</h2>
              <p className="text-white/80 font-medium text-xl">{featuredSermon.speaker} • {featuredSermon.date}</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => setActiveVideo(featuredSermon)}
                  className="bg-white text-black px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-white/90 transition-all active:scale-95 shadow-2xl"
                >
                  <Play className="fill-current" size={24} /> Watch Message
                </button>
                <button 
                   onClick={() => handleSermonToggle(featuredSermon)}
                   className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-white/20 transition-all active:scale-95"
                >
                  <Mic2 size={24} /> Listen to Audio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Grid (Removed Thumbnails) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredSermons.filter(s => !s.featured).map(sermon => (
          <GlassCard 
            key={sermon.id} 
            className={`group transition-all duration-500 hover:ring-1 hover:ring-blue-500/30 ${activeSermon?.id === sermon.id ? 'ring-2 ring-blue-500/50 scale-[1.02]' : ''}`}
          >
            <div className="flex flex-col sm:flex-row gap-8">
              <div className={`relative w-full sm:w-56 aspect-video sm:aspect-square rounded-3xl overflow-hidden shrink-0 shadow-2xl bg-gradient-to-tr from-black/5 to-black/20 dark:from-white/5 dark:to-white/10 border border-black/5 dark:border-white/5 flex items-center justify-center group/img`}>
                <Mic2 className="text-black/10 dark:text-white/10 w-24 h-24 group-hover/img:scale-110 transition-transform duration-700 ease-apple" />
                
                {activeSermon?.id === sermon.id && isPlaying && (
                  <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                    <AudioVisualizer isPlaying={true} color="#ffffff" />
                  </div>
                )}

                <button 
                  onClick={() => handleSermonToggle(sermon)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center text-black dark:text-white scale-90 group-hover/img:scale-100 transition-transform">
                    {activeSermon?.id === sermon.id && isPlaying ? (
                      <Pause className="fill-current" size={28} />
                    ) : (
                      <Play className="fill-current ml-1" size={28} />
                    )}
                  </div>
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest">{sermon.series}</span>
                    <span className="text-[10px] text-black/30 dark:text-white/30 font-bold uppercase tracking-widest">{sermon.duration}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-black dark:text-white tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-black/50 dark:text-white/50 font-medium text-base">{sermon.speaker} • {sermon.date}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => setActiveVideo(sermon)}
                    className="flex items-center gap-2 px-6 py-3 bg-red-600/10 dark:bg-red-500/10 rounded-2xl text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-600/20 dark:hover:bg-red-500/20 transition-all border border-red-500/20"
                  >
                    <Youtube size={16} /> Watch Video
                  </button>
                  <button 
                    onClick={() => handleSermonToggle(sermon)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold transition-all border ${activeSermon?.id === sermon.id && isPlaying ? 'bg-blue-600 text-white border-blue-500' : 'bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10 border-black/5 dark:border-white/5'}`}>
                    {activeSermon?.id === sermon.id && isPlaying ? <Pause size={16} /> : <Play size={16} />} Audio
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-black/5 dark:bg-white/5 rounded-2xl text-xs font-bold text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10 transition-all border border-black/5 dark:border-white/5">
                    <BookOpen size={16} /> Notes
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-apple-fade-in">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-[60px]" onClick={() => setActiveVideo(null)} />
          
          <div className="relative w-full max-w-6xl aspect-video rounded-[40px] overflow-hidden bg-black shadow-[0_60px_150px_rgba(0,0,0,0.8)] border border-white/20 group/video-container animate-apple-slide-up">
            <div className="absolute top-0 left-0 right-0 p-8 z-20 flex justify-between items-start opacity-0 group-hover/video-container:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-black/90 to-transparent">
               <div className="space-y-2">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 rounded-lg text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                   <Youtube size={12} /> Live Broadcast Feed
                 </div>
                 <h4 className="text-white font-bold text-3xl tracking-tight leading-none">{activeVideo.title}</h4>
                 <p className="text-white/60 text-base font-medium tracking-wide uppercase">{activeVideo.speaker} • {activeVideo.series}</p>
               </div>
               <button 
                onClick={() => setActiveVideo(null)}
                className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20 active:scale-90"
               >
                 <X size={32} />
               </button>
            </div>
            
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&hd=1&vq=hd1080`}
              title={activeVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="relative z-10 w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* Bottom Audio Player (Removed Thumbnail) */}
      {activeSermon && !activeVideo && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 transition-all duration-700 animate-apple-slide-up">
          <div className="relative group/player">
            <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-[50px] saturate-[200%] rounded-[36px] border border-white/40 dark:border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.6)]" />
            <div className="relative p-5 md:p-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex items-center gap-5 w-full md:w-auto min-w-0">
                <div className="w-16 h-16 rounded-[22px] bg-gradient-to-br from-blue-600 to-indigo-700 shrink-0 relative overflow-hidden group/thumb cursor-pointer flex items-center justify-center" onClick={() => setActiveVideo(activeSermon)}>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/thumb:bg-black/40 transition-colors">
                    <Youtube size={20} className="text-white opacity-80" />
                  </div>
                  <Mic2 size={24} className="text-white/20" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-black dark:text-white text-base truncate">{activeSermon.title}</h4>
                  <p className="text-black/40 dark:text-white/40 text-[11px] uppercase font-black tracking-[0.2em] truncate">{activeSermon.speaker}</p>
                </div>
                <button onClick={() => setActiveSermon(null)} className="md:hidden p-2 text-black/40 hover:bg-black/5 rounded-full"><X size={20} /></button>
              </div>

              <div className="flex-1 w-full space-y-4">
                <div className="flex items-center gap-5">
                  <span className="text-[11px] font-mono font-bold text-black/40 dark:text-white/40 w-12 text-right">{formatTime(currentTime)}</span>
                  <div className="flex-1 relative h-6 flex items-center">
                    <input 
                      type="range"
                      min="0"
                      max={duration || 100}
                      value={currentTime}
                      onChange={(e) => {
                        const time = parseFloat(e.target.value);
                        setCurrentTime(time);
                        if (audioRef.current) audioRef.current.currentTime = time;
                      }}
                      className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-600 relative z-20"
                    />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-black/40 dark:text-white/40 w-12">{formatTime(duration)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <button onClick={() => { if (audioRef.current) audioRef.current.currentTime -= 15; }} className="text-black/40 dark:text-white/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><SkipBack size={26} /></button>
                    <button onClick={() => setIsPlaying(!isPlaying)} className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl">
                      {isPlaying ? <Pause size={28} className="fill-current" /> : <Play size={28} className="fill-current ml-1" />}
                    </button>
                    <button onClick={() => { if (audioRef.current) audioRef.current.currentTime += 15; }} className="text-black/40 dark:text-white/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><SkipForward size={26} /></button>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center gap-1.5 bg-black/5 dark:bg-white/5 p-1 rounded-xl">
                      {[1, 1.5, 2].map(speed => (
                        <button key={speed} className="px-3 py-1.5 rounded-lg text-[10px] font-black text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-all">
                          {speed}x
                        </button>
                      ))}
                    </div>
                    <button className="p-2 text-black/40 dark:text-white/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Volume2 size={24} /></button>
                  </div>
                </div>
              </div>
              <button onClick={() => setActiveSermon(null)} className="hidden md:block p-3 text-black/20 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-full transition-all"><X size={24} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
