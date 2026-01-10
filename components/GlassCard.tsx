
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
      bg-white/40 dark:bg-white/10 backdrop-blur-2xl
      border border-black/5 dark:border-white/20
      shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
      rounded-3xl
      transition-all duration-300
      ${hoverEffect ? 'hover:bg-white/50 dark:hover:bg-white/15 hover:border-black/10 dark:hover:border-white/30 hover:-translate-y-1' : ''}
      ${className}
    `}>
      {/* Subtle shine effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/10 dark:to-transparent pointer-events-none" />
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};
