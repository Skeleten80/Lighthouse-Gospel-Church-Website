
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Connect: React.FC = () => {
  const address = "4817 Line 80, Listowel ON N4W 3G9, Canada";
  const email = "pedroneufeld47@gmail.com";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto space-y-24">
      {/* Contact Section */}
      <div className="flex flex-col items-center space-y-16">
        <div className="text-center space-y-6 max-w-3xl">
          <h1 className="text-6xl font-bold text-black/90 dark:text-white/90 tracking-tight">Let's Connect</h1>
          <p className="text-xl text-black/75 dark:text-white/75 transition-colors duration-500 leading-relaxed">
            We'd love to hear from you. Reach out to us directly or visit us during our service times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group"
          >
            <GlassCard className="h-full group-hover:bg-blue-500/5 dark:group-hover:bg-blue-500/10 transition-colors">
              <div className="flex flex-col items-center text-center gap-4 h-full">
                <div className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 transition-all duration-300 group-hover:bg-blue-500 text-blue-600 dark:text-blue-400 group-hover:text-white shadow-sm mx-auto flex items-center justify-center">
                  <MapPin size={28} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-black dark:text-white">Visit Us</h4>
                  <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-[200px] mx-auto">{address}</p>
                </div>
              </div>
            </GlassCard>
          </a>
          
          <a 
            href={`mailto:${email}`}
            className="group"
          >
            <GlassCard className="h-full group-hover:bg-purple-500/5 dark:group-hover:bg-purple-500/10 transition-colors">
              <div className="flex flex-col items-center text-center gap-4 h-full">
                <div className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 transition-all duration-300 group-hover:bg-purple-500 text-purple-600 dark:text-purple-400 group-hover:text-white shadow-sm mx-auto flex items-center justify-center">
                  <Mail size={28} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-black dark:text-white">Email Us</h4>
                  <p className="text-sm text-black/50 dark:text-white/50">{email}</p>
                </div>
              </div>
            </GlassCard>
          </a>

          <a href="tel:5195215539" className="group">
            <GlassCard className="h-full group-hover:bg-orange-500/5 dark:group-hover:bg-orange-500/10 transition-colors">
              <div className="flex flex-col items-center text-center gap-4 h-full">
                <div className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 transition-all duration-300 group-hover:bg-orange-500 text-orange-600 dark:text-orange-400 group-hover:text-white shadow-sm mx-auto flex items-center justify-center">
                  <Phone size={28} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-black dark:text-white">Call Us</h4>
                  <p className="text-sm text-black/50 dark:text-white/50">519-521-5539</p>
                </div>
              </div>
            </GlassCard>
          </a>
        </div>
      </div>
    </div>
  );
};
