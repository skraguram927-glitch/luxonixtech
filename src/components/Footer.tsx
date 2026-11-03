import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Code2, 
  Server, 
  Layout, 
  Cpu, 
  Globe2, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/mockData';

interface FooterProps {
  onNavigate: (sectionId: string, serviceParam?: string) => void;
  onOpenAppointment: (serviceType?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAppointment }) => {
  return (
    <footer className="bg-black text-slate-300 border-t border-slate-850 relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-850">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={COMPANY_INFO.logoSquare} 
                alt="Luxonixstacks" 
                className="w-10 h-10 object-contain rounded-lg border border-slate-800 bg-slate-900" 
              />
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-xl font-bold tracking-tight text-white">
                    Luxonix
                  </span>
                  <span className="text-xl font-extrabold tracking-tight text-cyan-400">
                    stacks
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
                  IT SOLUTIONS
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering global clients with high-velocity software development, resilient managed IT infrastructure, responsive web design, and precision job order execution.
            </p>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 text-xs space-y-1">
              <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                Registered Engineering Center
              </div>
              <p className="text-slate-300 leading-snug">
                {COMPANY_INFO.address.fullFormatted}
              </p>
            </div>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Core Engineering Services
            </h4>
            <ul className="space-y-2 text-xs">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services', s.id)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <span className="text-cyan-500">›</span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span className="text-cyan-400">›</span>
                  <span>Careers & Internships</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Portals & Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Company & Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('hero')} className="text-slate-400 hover:text-white cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="text-slate-400 hover:text-white cursor-pointer">
                  Careers & Hiring
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="text-slate-400 hover:text-white cursor-pointer">
                  Client Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="text-slate-400 hover:text-white cursor-pointer">
                  Industries Served
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-slate-400 hover:text-white cursor-pointer">
                  About Luxonixstacks
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-slate-400 hover:text-white cursor-pointer">
                  Contact & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct Hotlines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-200 hover:text-cyan-400 font-medium">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-200 hover:text-cyan-400 font-medium">
                  {COMPANY_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Global Client Delivery & Remote SLAs</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-800 text-xs font-medium text-emerald-300 hover:text-emerald-200"
              >
                <span>WhatsApp Business Direct</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Micro Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300 font-medium">Luxonixstacks IT Solutions</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Salem, Tamil Nadu (636203)</span>
            <span>·</span>
            <span>Enterprise SLA</span>
            <span>·</span>
            <span>Non-Disclosure Assured</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
