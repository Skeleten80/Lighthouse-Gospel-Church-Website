
import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Shield, FileText, Lock, Scale } from 'lucide-react';

const LegalLayout: React.FC<{ 
  title: string; 
  updated: string; 
  icon: React.ReactNode; 
  children: React.ReactNode 
}> = ({ title, updated, icon, children }) => (
  <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-12">
    <div className="text-center space-y-6 animate-apple-slide-up">
      <div className="w-20 h-20 bg-blue-500/10 dark:bg-blue-500/20 rounded-3xl flex items-center justify-center mx-auto border border-blue-500/20 backdrop-blur-xl">
        {icon}
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white tracking-tighter">{title}</h1>
      <p className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Last Updated: {updated}</p>
    </div>

    <GlassCard className="p-8 md:p-12 space-y-10 animate-apple-fade-in">
      {children}
    </GlassCard>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight">{title}</h2>
    <div className="text-black/70 dark:text-white/70 leading-relaxed space-y-4 text-lg">
      {children}
    </div>
  </section>
);

export const PrivacyPolicy: React.FC = () => {
  return (
    <LegalLayout 
      title="Privacy Policy" 
      updated="October 24, 2024" 
      icon={<Lock className="text-blue-600 dark:text-blue-400 w-10 h-10" />}
    >
      <Section title="1. Introduction">
        <p>
          Lighthouse Gospel Church ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li><strong>Identity Data:</strong> includes first name, last name, and username.</li>
          <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
          <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Data">
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li>To register you as a new member or guest.</li>
          <li>To manage our relationship with you including notifying you about changes to our terms or privacy policy.</li>
          <li>To administer and protect our organization and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data).</li>
        </ul>
      </Section>

      <Section title="4. Data Security">
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>
      </Section>

      <Section title="5. Contact Us">
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at:
        </p>
        <p className="font-medium text-black dark:text-white mt-2">
          Lighthouse Gospel Church<br/>
          4817 Line 80, Listowel ON N4W 3G9<br/>
          Email: pedroneufeld47@gmail.com
        </p>
      </Section>
    </LegalLayout>
  );
};

export const TermsOfService: React.FC = () => {
  return (
    <LegalLayout 
      title="Terms of Service" 
      updated="October 24, 2024" 
      icon={<Scale className="text-blue-600 dark:text-blue-400 w-10 h-10" />}
    >
      <Section title="1. Agreement to Terms">
        <p>
          By accessing or using the Lighthouse Gospel Church website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
      </Section>

      <Section title="2. Use License">
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on Lighthouse Gospel Church's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>Attempt to decompile or reverse engineer any software contained on Lighthouse Gospel Church's website;</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
      </Section>

      <Section title="3. Disclaimer">
        <p>
          The materials on Lighthouse Gospel Church's website are provided on an 'as is' basis. Lighthouse Gospel Church makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
      </Section>

      <Section title="4. Limitations">
        <p>
          In no event shall Lighthouse Gospel Church or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lighthouse Gospel Church's website.
        </p>
      </Section>

      <Section title="5. Governing Law">
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of Ontario, Canada and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </Section>
    </LegalLayout>
  );
};
