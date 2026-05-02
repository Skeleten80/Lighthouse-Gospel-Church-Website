import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gold?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export const GlassCard: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  gold = false,
}) => {
  return (
    <div
      className={[
        'card-base relative overflow-hidden',
        hover ? 'cursor-default' : '',
        gold ? 'border-gold-300/30 dark:border-gold-600/20' : '',
        className,
      ].join(' ')}
    >
      {/* Subtle inner shine */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none rounded-[inherit]"
        aria-hidden="true"
      />
      <div className="relative z-10 p-6">{children}</div>
    </div>
  );
};

/* ── Stat Card ───────────────────────────────────────────────────────────── */
interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}
export const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => (
  <div className="card-base p-6 text-center">
    {icon && (
      <div className="w-10 h-10 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mx-auto mb-3 text-gold-600 dark:text-gold-400">
        {icon}
      </div>
    )}
    <p className="font-heading text-3xl font-bold text-navy-DEFAULT dark:text-white mb-1">{value}</p>
    <p className="text-sm text-navy-600 dark:text-navy-200 font-medium">{label}</p>
  </div>
);

/* ── Feature Card ────────────────────────────────────────────────────────── */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: string;
}
export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, accent = 'bg-navy-50 dark:bg-navy-800' }) => (
  <div className="card-base p-6 group">
    <div className={`w-12 h-12 rounded-xl ${accent} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
      {icon}
    </div>
    <h3 className="font-heading text-lg font-semibold text-navy-DEFAULT dark:text-white mb-2">{title}</h3>
    <p className="text-sm text-navy-700 dark:text-navy-200 leading-relaxed">{description}</p>
  </div>
);

export default GlassCard;
