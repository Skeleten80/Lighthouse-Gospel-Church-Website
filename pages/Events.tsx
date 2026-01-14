
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Clock, Calendar as CalIcon } from 'lucide-react';

const events = [
  { id: '1', title: 'Sunday Main Worship', date: 'Every Sunday', time: '11:00 AM', category: 'Worship' },
  { id: '2', title: 'Friday Night Youth', date: 'Every Friday', time: '07:00 PM - 09:30 PM', category: 'Youth' },
  { id: '3', title: 'Family Prayer Meeting', date: 'Every Tuesday', time: '07:30 PM - 08:30 PM', category: 'Worship' },
  { id: '4', title: 'Youth Bible Study', date: 'Every Tuesday', time: '07:30 PM - 08:30 PM', category: 'Youth' },
  { id: '5', title: 'Community Garden Kickoff', date: 'Oct 15, 2024', time: '10:00 AM', category: 'Community' },
  { id: '6', title: 'Mission Breakfast', date: 'Oct 22, 2024', time: '08:30 AM', category: 'Mission' },
];

export const Events: React.FC = () => {
  const renderDateBadge = (dateStr: string) => {
    const isWeekly = dateStr.toLowerCase().includes('every');
    
    if (isWeekly) {
      // Extract day from "Every Tuesday" -> "TUE"
      const dayName = dateStr.split(' ')[1].substring(0, 3).toUpperCase();
      return (
        <div className="flex flex-col items-center justify-center bg-blue-600/10 dark:bg-blue-600/20 rounded-2xl px-4 py-2 min-w-[85px] h-[85px] border border-blue-500/20 shadow-inner transition-colors">
          <span className="text-[10px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest mb-1">Weekly</span>
          <span className="text-2xl text-black dark:text-white font-black leading-none">
            {dayName}
          </span>
        </div>
      );
    } else {
      // Handle specific dates like "Oct 15, 2024"
      const parts = dateStr.split(' ');
      const month = parts[0].toUpperCase();
      const day = parts[1].replace(',', '');
      return (
        <div className="flex flex-col items-center justify-center bg-black/5 dark:bg-white/10 rounded-2xl px-4 py-2 min-w-[85px] h-[85px] border border-black/5 dark:border-white/10 transition-colors">
          <span className="text-[10px] text-black/40 dark:text-white/40 font-black uppercase tracking-widest mb-1">{month}</span>
          <span className="text-2xl text-black dark:text-white font-black leading-none">
            {day}
          </span>
        </div>
      );
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-black/5 dark:border-white/10 pb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 rounded-full text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <CalIcon size={12} /> Seasonal Calendar
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white tracking-tighter transition-colors">Upcoming Events</h1>
          <p className="text-black/50 dark:text-white/50 max-w-lg transition-colors">Join us for our weekly gatherings and special community events. There is a place for you here.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {['All', 'Worship', 'Community', 'Youth', 'Mission'].map(cat => (
            <button key={cat} className="px-5 py-2.5 rounded-xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/5 backdrop-blur-md text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-bold transition-all active:scale-95 shadow-sm">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map(event => (
          <GlassCard key={event.id} className="group cursor-pointer hover:ring-2 hover:ring-blue-500/20">
            <div className="flex gap-6 items-center">
              {renderDateBadge(event.date)}
              
              <div className="flex-1 space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-black/40 dark:text-white/40 text-sm font-medium">
                      <Clock size={14} className="text-blue-500/70" /> {event.time}
                    </div>
                  </div>
                  <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-lg text-[9px] uppercase tracking-widest font-black whitespace-nowrap border border-blue-500/10">
                    {event.category}
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
      
      <div className="pt-12">
        <GlassCard className="bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10 border-blue-500/20 text-center p-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-150 animate-pulse" />
            <div className="relative bg-white dark:bg-black/50 p-5 rounded-[24px] border border-white/50 dark:border-white/10 shadow-xl">
              <CalIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">Host Your Community Event</h2>
          <p className="text-black/60 dark:text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
            Lighthouse Gospel Church offers various spaces for local community programs, non-profits, and family celebrations. Our facility is equipped for both small gatherings and large audiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-2xl active:scale-95">
              Inquire About Space
            </button>
            <button className="bg-white/50 dark:bg-white/10 text-black dark:text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/80 dark:hover:bg-white/20 transition-all backdrop-blur-xl border border-black/5 dark:border-white/10 active:scale-95">
              Download Guidelines
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
