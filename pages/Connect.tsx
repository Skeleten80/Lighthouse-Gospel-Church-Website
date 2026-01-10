
import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Send, MapPin, Phone, Mail, Instagram, Twitter, Facebook, CheckCircle2 } from 'lucide-react';

export const Connect: React.FC = () => {
  const address = "4817 Line 80, Listowel ON N4W 3G9, Canada";
  const email = "pedroneufeld47@gmail.com";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: 'Just saying hello',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      reason: 'Just saying hello',
      message: ''
    });
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-black dark:text-white">Let's Connect</h1>
            <p className="text-xl text-black/60 dark:text-white/60 transition-colors duration-500">We'd love to hear from you. Whether you have a question, need prayer, or want to volunteer, we're here.</p>
          </div>

          <div className="space-y-6">
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-start gap-6 group hover-mail-pop cursor-pointer"
            >
              <div className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 transition-all duration-300 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 animate-subtle-float" style={{ animationDelay: '0s' }}>
                <MapPin className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-black dark:text-white font-bold">Visit Us</h4>
                <p className="text-black/50 dark:text-white/50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{address}</p>
              </div>
            </a>
            
            <a 
              href={`mailto:${email}`}
              className="flex items-start gap-6 group hover-mail-pop"
            >
              <div className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 transition-all duration-300 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 animate-subtle-float" style={{ animationDelay: '0.5s' }}>
                <Mail className="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="text-black dark:text-white font-bold">Email Us</h4>
                <p className="text-black/50 dark:text-white/50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{email}</p>
              </div>
            </a>

            <div className="flex items-start gap-6 group hover-ring">
              <div className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 transition-all duration-300 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 animate-subtle-float" style={{ animationDelay: '1s' }}>
                <Phone className="text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h4 className="text-black dark:text-white font-bold">Call Us</h4>
                <p className="text-black/50 dark:text-white/50">+1 (555) 0123-4567</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10 transition-all hover:-translate-y-1">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <GlassCard className="p-8 min-h-[500px] flex flex-col">
          {!isSubmitted ? (
            <form className="space-y-6 animate-apple-fade-in" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-black/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest">First Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-blue-500/50 transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-black/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest">Last Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-blue-500/50 transition-all" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-black/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-blue-500/50 transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-black/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest">Reason for Connecting</label>
                <select 
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  className="w-full bg-white/50 dark:bg-black border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-blue-500/50 transition-all"
                >
                  <option>Just saying hello</option>
                  <option>Request for prayer</option>
                  <option>Joining a small group</option>
                  <option>Volunteer opportunities</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-black/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest">Message</label>
                <textarea 
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-blue-500/50 transition-all"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl">
                Send Message <Send size={18} />
              </button>
            </form>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 animate-apple-fade-in">
              <div className="p-6 bg-green-500/20 rounded-full animate-subtle-float">
                <CheckCircle2 size={48} className="text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-black dark:text-white">Message Sent!</h3>
                <p className="text-black/60 dark:text-white/60 max-w-xs">Thank you for reaching out. A member of our team will be in touch with you shortly.</p>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline transition-all"
              >
                Send another message
              </button>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
};
