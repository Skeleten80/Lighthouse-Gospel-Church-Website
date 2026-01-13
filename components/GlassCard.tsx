
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = true }) => {
  return (
    <div className={`
      relative overflow-hidden
      bg-white/40 dark:bg-black/20 backdrop-blur-2xl
      border border-black/[0.08] dark:border-white/[0.08]
      shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
      rounded-3xl
      transition-all duration-500 ease-apple
      ${hoverEffect ? 'hover:bg-white/50 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 hover:-translate-y-1' : ''}
      ${className}
    `}>
      {/* Subtle shine effect overlay - adjusted opacity to prevent edge bleed */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none" />
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};
