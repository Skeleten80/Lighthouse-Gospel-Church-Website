
import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { CreditCard, Heart, Smartphone, DollarSign, LayoutGrid } from 'lucide-react';

export const Giving: React.FC = () => {
  const [amount, setAmount] = useState('50');
  const [paymentType, setPaymentType] = useState<'One-time' | 'Recurring'>('One-time');

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold text-black dark:text-white leading-tight transition-colors duration-500">
            Your Generosity <br/> 
            <span className="text-blue-600 dark:text-blue-400">Makes an Impact.</span>
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60 leading-relaxed transition-colors duration-500">
            Every donation supports our local community programs, global mission trips, and helps us maintain a welcoming space for all. Together, we are building a legacy of light.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-4 flex flex-col items-center text-center">
              <Heart className="text-red-500 mb-2" />
              <h4 className="text-black dark:text-white font-bold">100%</h4>
              <p className="text-black/40 dark:text-white/40 text-xs">Direct to Mission</p>
            </GlassCard>
            <GlassCard className="p-4 flex flex-col items-center text-center">
              <DollarSign className="text-green-600 dark:text-green-400 mb-2" />
              <h4 className="text-black dark:text-white font-bold">$2M+</h4>
              <p className="text-black/40 dark:text-white/40 text-xs">Raised in 2023</p>
            </GlassCard>
          </div>
        </div>

        <GlassCard className="bg-white/40 dark:bg-white/5 border-black/10 dark:border-white/20 p-8 shadow-2xl" hoverEffect={false}>
          <div className="space-y-8">
            {/* Recurring Toggle Button */}
            <div className="flex justify-center gap-4 bg-black/5 dark:bg-white/5 p-1.5 rounded-[20px] border border-black/5 dark:border-white/5">
              {(['One-time', 'Recurring'] as const).map(type => (
                <button 
                  key={type} 
                  onClick={() => setPaymentType(type)}
                  className={`flex-1 py-3 rounded-[14px] font-bold transition-all duration-300 ease-apple active:scale-[0.98] ${
                    paymentType === type 
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg scale-[1.02]' 
                    : 'text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <label className="text-black/60 dark:text-white/60 text-sm font-semibold">Select Amount</label>
              <div className="grid grid-cols-3 gap-3">
                {['25', '50', '100', '250', '500', 'Other'].map(val => (
                  <button 
                    key={val} 
                    onClick={() => setAmount(val === 'Other' ? '' : val)}
                    className={`py-4 rounded-xl border font-bold transition-all duration-300 ${
                      amount === (val === 'Other' ? '' : val) || (val === 'Other' && amount === '')
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg' 
                      : 'bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10'
                    }`}
                  >
                    {val === 'Other' ? val : `$${val}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-black/60 dark:text-white/60 text-sm font-semibold">Payment Method</label>
              <div className="space-y-3">
                {/* Express Checkout Options */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-2xl flex items-center justify-center gap-2 font-bold hover:opacity-90 transition-all active:scale-95 shadow-sm">
                    <Smartphone className="w-5 h-5" /> Apple Pay
                  </button>
                  <button className="bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white p-4 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-black/5 dark:hover:bg-white/20 transition-all active:scale-95 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </div>
                    <span>Pay</span>
                  </button>
                </div>

                <div className="relative py-2 flex items-center">
                  <div className="flex-grow border-t border-black/5 dark:border-white/5"></div>
                  <span className="flex-shrink mx-4 text-[10px] uppercase font-black text-black/30 dark:text-white/30 tracking-widest">Or pay with card</span>
                  <div className="flex-grow border-t border-black/5 dark:border-white/5"></div>
                </div>

                <button className="w-full bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 p-4 rounded-2xl flex items-center justify-between text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-blue-600 dark:text-blue-400" />
                    <span className="font-medium">Credit or Debit Card</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-blue-600 dark:border-blue-400 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  </div>
                </button>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/30 dark:shadow-blue-900/40 transition-all active:scale-95">
              Complete {paymentType} Donation
            </button>
            
            <p className="text-center text-black/40 dark:text-white/40 text-[10px] font-black uppercase tracking-widest">
              Secure 256-bit encrypted transaction
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
