import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

/* ── Form state ───────────────────────────────────────────────────────────── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim())                        errors.name    = 'Please enter your name.';
  if (!data.email.trim())                       errors.email   = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                                                errors.email   = 'Please enter a valid email address.';
  if (!data.subject.trim())                     errors.subject = 'Please enter a subject.';
  if (!data.message.trim())                     errors.message = 'Please enter a message.';
  else if (data.message.trim().length < 10)     errors.message = 'Please write at least a sentence.';
  return errors;
};

/* ── Field Component ──────────────────────────────────────────────────────── */
const Field: React.FC<{
  id: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  textarea?: boolean;
  rows?: number;
  placeholder?: string;
  onChange: (v: string) => void;
}> = ({ id, label, type = 'text', value, error, required, optional, textarea, rows = 4, placeholder, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-navy-DEFAULT dark:text-white mb-1.5">
      {label}
      {optional && <span className="text-navy-400 dark:text-navy-400 font-normal ml-1">(optional)</span>}
      {required && <span className="text-rose-500 ml-0.5" aria-hidden="true">*</span>}
    </label>
    {textarea ? (
      <textarea
        id={id}
        name={id}
        value={value}
        rows={rows}
        placeholder={placeholder}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={e => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-xl border text-navy-DEFAULT dark:text-white bg-white dark:bg-navy-800 placeholder-navy-400 text-sm resize-vertical focus:outline-none focus:ring-2 transition-colors ${
          error
            ? 'border-rose-400 dark:border-rose-500 focus:ring-rose-300'
            : 'border-navy-200 dark:border-navy-600 focus:ring-gold-400 hover:border-navy-300 dark:hover:border-navy-400'
        }`}
      />
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={e => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-xl border text-navy-DEFAULT dark:text-white bg-white dark:bg-navy-800 placeholder-navy-400 text-sm focus:outline-none focus:ring-2 transition-colors ${
          error
            ? 'border-rose-400 dark:border-rose-500 focus:ring-rose-300'
            : 'border-navy-200 dark:border-navy-600 focus:ring-gold-400 hover:border-navy-300 dark:hover:border-navy-400'
        }`}
      />
    )}
    {error && (
      <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
        <AlertCircle size={12} aria-hidden="true" /> {error}
      </p>
    )}
  </div>
);

/* ── Page ─────────────────────────────────────────────────────────────────── */
export const Connect: React.FC = () => {
  const [form, setForm]       = useState<FormData>({ name:'', email:'', phone:'', subject:'', message:'' });
  const [errors, setErrors]   = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key: keyof FormData) => (v: string) => {
    setForm(f => ({ ...f, [key]: v }));
    if (errors[key as keyof FormErrors]) setErrors(e => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    /* Simulate submission — replace with real API call */
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <div>

      {/* Header */}
      <header className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-DEFAULT to-navy-800 text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25" aria-hidden="true">
          <div className="beam" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="section-label mb-5 inline-block bg-gold-500/20 border-gold-400/40 text-gold-300">
            Reach Out
          </span>
          <h1 className="font-heading font-bold text-5xl md:text-6xl mb-5 leading-tight">
            Let's Connect
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Whether you have a question, want prayer, are ready to get involved, or just want to say
            hello — we'd love to hear from you.
          </p>
        </div>
      </header>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 bg-cream-200/50 dark:bg-navy-800/30" aria-label="Contact information">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-5">

          <a
            href="https://maps.google.com/?q=4817+Line+80+Listowel+ON+N4W+3G9"
            target="_blank" rel="noopener noreferrer"
            className="card-base p-6 text-center group"
            aria-label="Open map to 4817 Line 80, Listowel ON N4W 3G9"
          >
            <div className="w-12 h-12 rounded-xl bg-navy-50 dark:bg-navy-700/50 flex items-center justify-center mx-auto mb-3 text-gold-600 dark:text-gold-400 group-hover:bg-gold-100 dark:group-hover:bg-gold-900/30 transition-colors">
              <MapPin size={22} aria-hidden="true" />
            </div>
            <p className="font-semibold text-navy-DEFAULT dark:text-white mb-1">Visit Us</p>
            <p className="text-sm text-navy-600 dark:text-navy-200">4817 Line 80</p>
            <p className="text-sm text-navy-600 dark:text-navy-200">Listowel, ON N4W 3G9</p>
          </a>

          <a
            href="tel:5195215539"
            className="card-base p-6 text-center group"
            aria-label="Call us at 519-521-5539"
          >
            <div className="w-12 h-12 rounded-xl bg-navy-50 dark:bg-navy-700/50 flex items-center justify-center mx-auto mb-3 text-gold-600 dark:text-gold-400 group-hover:bg-gold-100 dark:group-hover:bg-gold-900/30 transition-colors">
              <Phone size={22} aria-hidden="true" />
            </div>
            <p className="font-semibold text-navy-DEFAULT dark:text-white mb-1">Call Us</p>
            <p className="text-sm text-navy-600 dark:text-navy-200">519-521-5539</p>
            <p className="text-xs text-navy-500 dark:text-navy-400 mt-1">Mon–Fri · 9 AM – 5 PM</p>
          </a>

          <a
            href="mailto:pedroneufeld47@gmail.com"
            className="card-base p-6 text-center group"
            aria-label="Email us at pedroneufeld47@gmail.com"
          >
            <div className="w-12 h-12 rounded-xl bg-navy-50 dark:bg-navy-700/50 flex items-center justify-center mx-auto mb-3 text-gold-600 dark:text-gold-400 group-hover:bg-gold-100 dark:group-hover:bg-gold-900/30 transition-colors">
              <Mail size={22} aria-hidden="true" />
            </div>
            <p className="font-semibold text-navy-DEFAULT dark:text-white mb-1">Email Us</p>
            <p className="text-sm text-navy-600 dark:text-navy-200 break-all">pedroneufeld47@gmail.com</p>
            <p className="text-xs text-navy-500 dark:text-navy-400 mt-1">We reply within 24–48 hours</p>
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6" aria-label="Send us a message">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-10">
            <span className="section-label mb-4 inline-block">Send a Message</span>
            <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-3xl md:text-4xl">
              We'd Love to Hear From You
            </h2>
            <p className="text-navy-600 dark:text-navy-200 mt-3">
              Fill in the form below and we'll get back to you shortly.
            </p>
          </div>

          {submitted ? (
            /* Success state */
            <div className="card-base p-10 text-center">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-5" aria-hidden="true" />
              <h3 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-2xl mb-3">
                Message Sent — Thank You!
              </h3>
              <p className="text-navy-600 dark:text-navy-200 leading-relaxed mb-6">
                We've received your message and will be in touch within 24–48 hours. In the meantime,
                you're always welcome to call us at 519-521-5539.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', subject:'', message:'' }); }}
                className="btn-outline text-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="card-base p-6 md:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="name"    label="Full Name"     value={form.name}    error={errors.name}    required placeholder="Jane Smith"       onChange={set('name')} />
                <Field id="email"   label="Email Address" type="email" value={form.email}   error={errors.email}   required placeholder="jane@example.com"    onChange={set('email')} />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="phone"   label="Phone Number"  type="tel" value={form.phone}  optional placeholder="519-555-0100"         onChange={set('phone')} />
                <Field id="subject" label="Subject"       value={form.subject} error={errors.subject} required placeholder="How can we help?" onChange={set('subject')} />
              </div>
              <Field
                id="message"
                label="Message"
                value={form.message}
                error={errors.message}
                required
                textarea
                rows={5}
                placeholder="Share your question, prayer request, or anything on your heart…"
                onChange={set('message')}
              />

              <p className="text-xs text-navy-500 dark:text-navy-400">
                Fields marked <span className="text-rose-500" aria-hidden="true">*</span> are required.
                Your contact information will never be shared or sold.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 disabled:opacity-70 disabled:cursor-wait"
                aria-label="Submit contact form"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} aria-hidden="true" /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Prayer Request callout */}
      <section className="py-16 px-6 bg-cream-200/50 dark:bg-navy-800/30" aria-label="Prayer requests">
        <div className="max-w-3xl mx-auto card-base p-8 md:p-10 text-center border-t-4 border-t-gold-400">
          <div className="w-14 h-14 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mx-auto mb-5">
            <Mail className="w-6 h-6 text-gold-600 dark:text-gold-400" aria-hidden="true" />
          </div>
          <h2 className="font-heading font-bold text-navy-DEFAULT dark:text-white text-2xl mb-3">
            Need Prayer?
          </h2>
          <p className="text-navy-600 dark:text-navy-200 leading-relaxed mb-6">
            Our prayer team would be honoured to stand with you. Submit a prayer request using the
            form above, or speak with a member of our prayer team after any Sunday service.
            All requests are held in strict confidence.
          </p>
          <p className="text-sm font-semibold text-gold-600 dark:text-gold-400">
            "Do not be anxious about anything, but in every situation, by prayer and petition, with
            thanksgiving, present your requests to God." — Philippians 4:6
          </p>
        </div>
      </section>

    </div>
  );
};
