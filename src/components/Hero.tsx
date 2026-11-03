import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  PhoneCall,
  Briefcase
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/mockData';

interface HeroProps {
  onNavigate: (sectionId: string, serviceParam?: string) => void;
  onOpenAppointment?: (serviceType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-slate-950 tech-grid-pattern">
      {/* Background radial cyan/azure glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-600/10 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Main Hero Presentation */}
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Software, Cloud IT</span> & Precision Job Orders.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Luxonixstacks delivers mission-critical software engineering, managed IT infrastructure, responsive web design, and tailored job order works for global clients who require speed, precision, and zero compromises.
          </p>

          {/* 4 Core Pillar Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-3xl mx-auto">
            {CORE_SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => onNavigate('services', service.id)}
                className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 transition-all text-left group cursor-pointer"
              >
                <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>{service.shortTitle}</span>
                  <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                  {service.tagline}
                </div>
              </button>
            ))}
          </div>

          {/* Trust Highlights Checklist */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300 pt-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Custom Software & APIs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>24/7 Managed IT & Cloud</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Modern Web & UI/UX</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Dedicated Job Order Works</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Strict NDA & Code Security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Global Timezone Coverage</span>
            </div>
          </div>

          {/* CTA Group: Removed "Track & Submit Job Order" and "Book 30-Min Call" as requested */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('services')}
              className="px-7 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl shadow-lg shadow-cyan-950/60 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Core Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('careers')}
              className="px-7 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Careers & Internships</span>
            </button>
          </div>

          {/* Quick Contact Micro Info */}
          <div className="pt-4 border-t border-slate-800/70 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span>Direct Mail: <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-200 hover:text-cyan-400 underline font-medium">{COMPANY_INFO.email}</a></span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Hotline: <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-200 hover:text-cyan-400 underline font-medium">{COMPANY_INFO.displayPhone}</a></span>
            </div>
          </div>

        </div>

        {/* Global Performance Metric Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              99.9%
            </div>
            <div className="text-xs text-slate-400 mt-1">Uptime SLA Architecture</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">
              48h
            </div>
            <div className="text-xs text-slate-400 mt-1">Rapid Job Order Turnaround</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              24/7/365
            </div>
            <div className="text-xs text-slate-400 mt-1">Incident & Operations Monitoring</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 tracking-tight">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1">IP & Source Code Ownership</div>
          </div>
        </div>

      </div>
    </section>
  );
};
