import React from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Globe2, 
  Target, 
  Eye, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/mockData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-r-xl rounded-l-sm bg-slate-900/90 border-y border-r border-slate-800 border-l-2 border-l-cyan-400 text-cyan-300 text-[11px] font-mono tracking-[0.18em] uppercase shadow-lg shadow-cyan-950/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></span>
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>About Luxonixstacks IT Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Bridging Salem Engineering Excellence with Global Digital Ambition
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            We are a technology solutions and specialized engineering partner headquartered in Salem, Tamil Nadu, building high-reliability software, IT infrastructure, and job order workflows for forward-looking clients worldwide.
          </p>
        </div>

        {/* Story & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">Luxonixstacks</strong> was built to solve a critical challenge faced by international businesses: finding software, web design, and IT execution partners who combine deep technical craftsmanship with uncompromising deadline integrity.
              </p>
              <p>
                From our engineering center in <span className="text-cyan-400 font-semibold">Assari Kadu, Vengampatti, Mallur, Salem</span>, we operate modern cloud testing benches, agile software squads, and dedicated job order workstations. Whether architecting a distributed enterprise platform or processing complex data transformations overnight, our team delivers with surgical accuracy.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To empower global businesses with robust software, resilient IT systems, and precision job order execution that unlock competitive advantages.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Eye className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To be the most dependable technical execution and digital engineering powerhouse from Tamil Nadu, known internationally for quality and speed.
                </p>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Strict Clean Code & Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Transparent Milestone Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Full Intellectual Property Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct Engineer Access</span>
              </div>
            </div>
          </div>

          {/* Right Col: Official Salem Headquarters Identity Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
                <img 
                  src={COMPANY_INFO.logoSquare} 
                  alt="Luxonixstacks" 
                  className="w-16 h-16 rounded-xl object-contain bg-slate-950 p-1 border border-slate-700" 
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Luxonixstacks</h3>
                  <div className="text-xs text-cyan-400 font-mono">IT SOLUTIONS & ENGINEERING</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Assari Kadu, Mallur, Salem</div>
                </div>
              </div>

              {/* Location details */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Registered Engineering Headquarters</div>
                    <div className="text-slate-300 mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address.fullFormatted}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Official Correspondence Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Phone & WhatsApp Hotline</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-300 hover:text-white">
                      {COMPANY_INFO.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Global Client Hours</div>
                    <div className="text-slate-300">{COMPANY_INFO.hours}</div>
                  </div>
                </div>
              </div>

              {/* Verified badge footer */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Quality Standard</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Enterprise Verified
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-slate-800">
          <div className="text-center mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear answers about working with Luxonixstacks, job order procedures, and global delivery.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 open:border-cyan-500/40 open:bg-slate-900 transition-colors"
              >
                <summary className="text-sm font-bold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-cyan-400 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3 pt-3 border-t border-slate-800">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
