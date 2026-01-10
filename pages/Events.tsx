
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Clock, Calendar as CalIcon } from 'lucide-react';

const events = [
  { id: '1', title: 'Community Garden Kickoff', date: 'Oct 15, 2024', time: '10:00 AM', category: 'Community' },
  { id: '2', title: 'Tuesday Family Prayer', date: 'Every Tuesday', time: '07:30 PM - 08:30 PM', category: 'Worship' },
  { id: '3', title: 'Tuesday Youth Bible Study', date: 'Every Tuesday', time: '07:30 PM - 08:30 PM', category: 'Youth' },
  { id: '4', title: 'Friday Night Youth', date: 'Every Friday', time: '07:00 PM - 09:30 PM', category: 'Youth' },
  { id: '5', title: 'Sunday Main Worship', date: 'Oct 20, 2024', time: '11:00 AM', category: 'Worship' },
  { id: '6', title: 'Mission Breakfast', date: 'Oct 22, 2024', time: '08:30 AM', category: 'Mission' },
];

export const Events: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-black dark:text-white transition-colors">Upcoming Events</h1>
          <p className="text-black/50 dark:text-white/50 transition-colors">Join us as we serve, grow, and celebrate together.</p>
        </div>
        <div className="flex gap-2">
          {['All', 'Worship', 'Community', 'Youth', 'Mission'].map(cat => (
            <button key={cat} className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 text-xs font-medium transition-all">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map(event => (
          <GlassCard key={event.id} className="group cursor-pointer">
            <div className="flex gap-6">
              <div className="flex flex-col items-center justify-center bg-black/5 dark:bg-white/10 rounded-2xl px-4 py-2 min-w-[80px] h-[80px] border border-black/5 dark:border-white/10 transition-colors">
                <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase">
                  {event.date.includes('Every') ? 'Weekly' : event.date.split(' ')[0]}
                </span>
                <span className="text-lg text-black dark:text-white font-bold leading-tight text-center">
                  {event.date.includes('Every') ? event.date.split(' ')[1] : event.date.split(' ')[1].replace(',', '')}
                </span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {event.title}
                  </h3>
                  <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
                    {event.category}
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-black/50 dark:text-white/50 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-blue-500" /> {event.time}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
      
      <GlassCard className="bg-blue-600/5 dark:bg-blue-600/20 border-blue-500/30 text-center p-12">
        <CalIcon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-black dark:text-white mb-2">Want to host an event?</h2>
        <p className="text-black/60 dark:text-white/60 mb-6 max-w-md mx-auto">Our facilities are open for community programs and local non-profit activities. Contact our office to inquire about space.</p>
        <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg">
          Inquire About Space
        </button>
      </GlassCard>
    </div>
  );
};
