import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck,
  Building
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: prefilledService || 'Software Development',
    budget: '$1,000 - $5,000 / ₹75k - ₹4L',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In production, can forward to backend or email webhook
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-r-xl rounded-l-sm bg-slate-900/90 border-y border-r border-slate-800 border-l-2 border-l-cyan-400 text-cyan-300 text-[11px] font-mono tracking-[0.18em] uppercase shadow-lg shadow-cyan-950/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></span>
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get in Touch with our Salem & Global Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Start Your Next Digital Initiative
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Have a question, need an urgent job order quote, or seeking long-term software development and IT services? We respond within 2 to 4 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Salem Office */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-cyan-400" />
                <span>Contact Channels</span>
              </h3>

              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-950 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Official Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / Mobile */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-950 text-sky-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Phone & WhatsApp</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                      {COMPANY_INFO.displayPhone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.phone, 'phone')}
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-800/60 hover:bg-emerald-900/60 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Direct Call</span>
                </a>
              </div>
            </div>

            {/* Salem Physical Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Salem Headquarters & Engineering Center</span>
                </h3>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  PIN 636203
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="font-semibold text-white">Luxonixstacks IT Solutions</div>
                <p className="leading-relaxed">
                  Assari Kadu, Vengampatti,<br />
                  Mallur, Salem, Tamil Nadu,<br />
                  PIN Code: <strong className="text-cyan-400 font-mono">636203</strong>, India
                </p>
                <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{COMPANY_INFO.hours}</span>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Assari+Kadu+Vengampatti+Mallur+Salem+Tamil+Nadu+636203"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-xs font-semibold text-cyan-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-white">Send Us a Project Inquiry</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Tell us about your software specifications, IT needs, web design vision, or job order scope.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500/60 flex items-center justify-center mx-auto text-cyan-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Inquiry Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. A senior technical solutions architect from Luxonixstacks will review your message and reply to <span className="text-white font-mono">{formData.email}</span> within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'Software Development',
                        budget: '$1,000 - $5,000 / ₹75k - ₹4L',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rachel Adams"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rachel@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 or International prefix..."
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Company or Project Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Innovations Ltd"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Service Category *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Software Development">Software Development (Custom SaaS, CRM, APIs)</option>
                        <option value="IT Services">IT Services & Managed Cloud Infrastructure</option>
                        <option value="Web Designing">Web Designing & High-Speed UI/UX Portals</option>
                        <option value="Job Order Works">Job Order Works (Specialized Technical Tasks)</option>
                        <option value="Comprehensive Digital Transformation">Full-Stack Digital Transformation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Below $1,000 / ₹75k">Under $1,000 / ₹75k (Rapid Job Order)</option>
                        <option value="$1,000 - $5,000 / ₹75k - ₹4L">$1,000 - $5,000 / ₹75k - ₹4L (Standard Project)</option>
                        <option value="$5,000 - $15,000 / ₹4L - ₹12L">$5,000 - $15,000 / ₹4L - ₹12L (Enterprise MVP)</option>
                        <option value="$15,000+ / ₹12L+">$15,000+ / ₹12L+ (Full Scale / Retainer)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Details, Requirements & Timelines *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline what you are building or the job orders to be completed..."
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>Data protected by strict confidentiality</span>
                    </span>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-cyan-950/40 flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Request</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
