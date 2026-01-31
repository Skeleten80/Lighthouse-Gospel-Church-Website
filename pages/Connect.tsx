
import React, { useState, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { Send, MapPin, Phone, Mail, Instagram, Twitter, Facebook, CheckCircle2, Heart, Sparkles } from 'lucide-react';

export const Connect: React.FC = () => {
  const address = "4817 Line 80, Listowel ON N4W 3G9, Canada";
  const email = "pedroneufeld47@gmail.com";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
  // Contact Form State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResetLink, setShowResetLink] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: 'Just saying hello',
    message: ''
  });

  // Prayer Request State
  const [isPrayerSubmitted, setIsPrayerSubmitted] = useState(false);
  const [showPrayerReset, setShowPrayerReset] = useState(false);
  const [prayerData, setPrayerData] = useState({
    name: '',
    email: '',
    prayer: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      reason: 'Just saying hello',
      message: ''
    });
  };

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPrayerSubmitted(true);
    setPrayerData({
      name: '',
      email: '',
      prayer: ''
    });
  };

  useEffect(() => {
    let timer: number;
    if (isSubmitted) {
      setShowResetLink(false);
      timer = window.setTimeout(() => {
        setShowResetLink(true);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  useEffect(() => {
    let timer: number;
    if (isPrayerSubmitted) {
      setShowPrayerReset(false);
      timer = window.setTimeout(() => {
        setShowPrayerReset(true);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [isPrayerSubmitted]);

  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto space-y-24">
      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-black/90 dark:text-white/90 tracking-tight">Let's Connect</h1>
            <p className="text-xl text-black/75 dark:text-white/75 transition-colors duration-500 leading-relaxed">
              We'd love to hear from you. Whether you have a question, want to volunteer, or just want to say hi, we're here.
            </p>
          </div>

          <div className="space-y-6">
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-start gap-6 group hover-mail-pop cursor-pointer"
            >
              <div className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 transition-all duration-300 group-hover:bg-blue-500/10 group-hover:border-blue-500/30">
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
              <div className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 transition-all duration-300 group-hover:bg-purple-500/10 group-hover:border-purple-500/30">
                <Mail className="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="text-black dark:text-white font-bold">Email Us</h4>
                <p className="text-black/50 dark:text-white/50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{email}</p>
              </div>
            </a>

            <div className="flex items-start gap-6 group hover-ring">
              <div className="p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 transition-all duration-300 group-hover:bg-orange-500/10 group-hover:border-orange-500/30">
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

        <GlassCard className="p-8 min-h-[500px] flex flex-col overflow-hidden">
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

              <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl active:scale-95">
                Send Message <Send size={18} />
              </button>
            </form>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 animate-apple-fade-in relative">
              <div className="p-8 bg-green-500/10 dark:bg-green-500/20 rounded-[32px] border border-green-500/20 shadow-inner group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 pointer-events-none" />
                <CheckCircle2 size={64} className="text-green-600 dark:text-green-400 relative z-10" />
              </div>
              
              <div className="space-y-3 px-4">
                <h3 className="text-4xl font-bold text-black dark:text-white tracking-tight animate-apple-fade-in" style={{ animationDelay: '200ms' }}>
                  Message Sent!
                </h3>
                <p className="text-black/60 dark:text-white/60 max-w-xs mx-auto leading-relaxed animate-apple-fade-in" style={{ animationDelay: '400ms' }}>
                  Thank you for reaching out to Lighthouse Gospel. A member of our team will review your message and connect with you shortly.
                </p>
              </div>

              <div 
                className={`transition-all duration-700 transform ${showResetLink ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
              >
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-blue-600 dark:text-blue-400 font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-all active:scale-90"
                >
                  Send another message
                </button>
              </div>
            </div>
          )}
        </GlassCard>
      </div>

      {/* Prayer Request Section */}
      <section className="pt-12">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 rounded-full text-red-600 dark:text-red-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <Heart size={12} className="fill-current" /> Prayer Sanctuary
          </div>
          <h2 className="text-5xl font-bold text-black dark:text-white tracking-tight">Need Prayer?</h2>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            Our prayer team is dedicated to interceding on your behalf. Share your burdens or praises with us.
          </p>
        </div>

        <GlassCard className="max-w-3xl mx-auto p-10 overflow-hidden relative">
          {!isPrayerSubmitted ? (
            <form className="space-y-8 animate-apple-fade-in" onSubmit={handlePrayerSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-black/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Your name"
                    value={prayerData.name}
                    onChange={(e) => setPrayerData({...prayerData, name: e.target.value})}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-red-500/50 transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-black/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest">Email (Optional)</label>
                  <input 
                    type="email" 
                    placeholder="To receive a blessing"
                    value={prayerData.email}
                    onChange={(e) => setPrayerData({...prayerData, email: e.target.value})}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-red-500/50 transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-black/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest">How can we pray for you?</label>
                <textarea 
                  required
                  rows={6} 
                  placeholder="Tell us what's on your heart..."
                  value={prayerData.prayer}
                  onChange={(e) => setPrayerData({...prayerData, prayer: e.target.value})}
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-4 py-4 text-black dark:text-white focus:outline-none focus:border-red-500/50 transition-all resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-red-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                Submit Prayer Request <Sparkles size={20} />
              </button>
            </form>
          ) : (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-8 animate-apple-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/30 blur-3xl rounded-full scale-150 animate-pulse" />
                <div className="relative p-8 bg-white/40 dark:bg-black/40 rounded-full border border-red-500/20 shadow-2xl">
                  <Heart size={56} className="text-red-500 fill-current" />
                </div>
              </div>
              
              <div className="space-y-4 px-4 relative z-10">
                <h3 className="text-4xl font-bold text-black dark:text-white tracking-tight">Blessings be upon you.</h3>
                <p className="text-black/60 dark:text-white/60 max-w-md mx-auto leading-relaxed">
                  Your request has been received. Our prayer team will lift this up to the Lord. You are not alone on this journey.
                </p>
              </div>

              <div 
                className={`transition-all duration-700 transform ${showPrayerReset ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
              >
                <button 
                  onClick={() => setIsPrayerSubmitted(false)}
                  className="px-10 py-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-red-600 dark:text-red-400 font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-all active:scale-90"
                >
                  New Prayer Request
                </button>
              </div>
            </div>
          )}
        </GlassCard>
      </section>
    </div>
  );
};
