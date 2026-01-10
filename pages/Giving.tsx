
import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { CreditCard, Heart, Smartphone, DollarSign } from 'lucide-react';

export const Giving: React.FC = () => {
  const [amount, setAmount] = useState('50');

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold text-white leading-tight">Your Generosity <br/> <span className="text-blue-400">Makes an Impact.</span></h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Every donation supports our local community programs, global mission trips, and helps us maintain a welcoming space for all. Together, we are building a legacy of light.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-4 flex flex-col items-center text-center">
              <Heart className="text-red-400 mb-2" />
              <h4 className="text-white font-bold">100%</h4>
              <p className="text-white/40 text-xs">Direct to Mission</p>
            </GlassCard>
            <GlassCard className="p-4 flex flex-col items-center text-center">
              <DollarSign className="text-green-400 mb-2" />
              <h4 className="text-white font-bold">$2M+</h4>
              <p className="text-white/40 text-xs">Raised in 2023</p>
            </GlassCard>
          </div>
        </div>

        <GlassCard className="bg-white/5 border-white/20 p-8">
          <div className="space-y-8">
            <div className="flex justify-center gap-4">
              {['One-time', 'Recurring'].map(type => (
                <button key={type} className={`flex-1 py-3 rounded-xl font-bold transition-all ${type === 'One-time' ? 'bg-white text-black' : 'bg-white/10 text-white'}`}>
                  {type}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <label className="text-white/60 text-sm font-medium">Select Amount</label>
              <div className="grid grid-cols-3 gap-3">
                {['25', '50', '100', '250', '500', 'Other'].map(val => (
                  <button 
                    key={val} 
                    onClick={() => setAmount(val === 'Other' ? '' : val)}
                    className={`py-4 rounded-xl border border-white/10 font-bold transition-all ${amount === val ? 'bg-blue-500 border-blue-400 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                  >
                    {val === 'Other' ? val : `$${val}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-white/60 text-sm font-medium">Payment Method</label>
              <div className="space-y-3">
                <button className="w-full bg-white/10 border border-white/10 p-4 rounded-2xl flex items-center justify-between text-white hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-blue-400" />
                    <span>Credit or Debit Card</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-blue-400 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-blue-400 rounded-full" />
                  </div>
                </button>
                <button className="w-full bg-black border border-white/10 p-4 rounded-2xl flex items-center justify-center gap-3 text-white">
                  <Smartphone /> Apple Pay
                </button>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/40 transition-all">
              Complete Donation
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
