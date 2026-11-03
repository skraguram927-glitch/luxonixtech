import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Layout, 
  Cpu, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { CORE_SERVICES } from '../data/mockData';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  selectedCategory?: ServiceCategory;
  onSelectService: (serviceName: string) => void;
  onOpenAppointment: (serviceType?: string) => void;
  onNavigateToJobPortal?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedCategory,
  onSelectService,
  onOpenAppointment,
}) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>(selectedCategory || 'software-development');

  const currentService = CORE_SERVICES.find((s) => s.id === activeTab) || CORE_SERVICES[0];

  const getServiceIcon = (id: string, className = "w-6 h-6") => {
    switch (id) {
      case 'software-development':
        return <Code2 className={`${className} text-cyan-400`} />;
      case 'it-services':
        return <Server className={`${className} text-sky-400`} />;
      case 'web-designing':
        return <Layout className={`${className} text-blue-400`} />;
      case 'job-order-works':
        return <Cpu className={`${className} text-teal-400`} />;
      default:
        return <Code2 className={`${className} text-cyan-400`} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-r-xl rounded-l-sm bg-slate-900/90 border-y border-r border-slate-800 border-l-2 border-l-cyan-400 text-cyan-300 text-[11px] font-mono tracking-[0.18em] uppercase shadow-lg shadow-cyan-950/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></span>
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Capabilities & Engineering Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            High-Impact Services for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Modern Global Enterprises
            </span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            From architecture to deployment, Luxonixstacks provides end-to-end software development, 24/7 IT services, next-generation web designing, and specialized job order execution.
          </p>
        </div>

        {/* 4 Interactive Service Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800/90 mb-12 shadow-xl shadow-black/40">
          {CORE_SERVICES.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`p-4 rounded-xl text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-slate-800 border border-cyan-500/50 shadow-md shadow-cyan-950/30'
                    : 'hover:bg-slate-850/60 text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-950/80 border border-cyan-700/60' : 'bg-slate-800/80'}`}>
                    {getServiceIcon(service.id, "w-5 h-5")}
                  </div>
                  {isActive && (
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/90 px-2 py-0.5 rounded border border-cyan-800/60">
                      ACTIVE
                    </span>
                  )}
                </div>
                <div>
                  <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {service.title}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {service.tagline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Showcase Card */}
        <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Col: Overview, Highlights, and Ideal For */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                  {getServiceIcon(currentService.id, "w-8 h-8")}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {currentService.title}
                  </h3>
                  <p className="text-sm text-cyan-400 font-medium">
                    {currentService.tagline}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {currentService.description}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Core Engineering Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium leading-tight">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Chips */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Technology Stack & Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-950 border border-slate-800 text-slate-300 hover:border-cyan-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal for statement */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Ideal For:</strong> {currentService.idealFor}
                </div>
              </div>
            </div>

            {/* Right Col: Deliverables, SLA, and Call to Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/90 rounded-2xl border border-slate-800/90 p-6 space-y-6">
              <div className="space-y-5">
                <div className="border-b border-slate-800/90 pb-3 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Deliverables & SLA
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Quality
                  </span>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-slate-200">
                    What You Receive:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Level Agreement */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>SLA Commitment</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {currentService.sla}
                  </p>
                </div>
              </div>

              {/* Action Buttons for this service */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onSelectService(currentService.title)}
                  className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl shadow-md shadow-cyan-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Quote & Scope for {currentService.shortTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectService(`${currentService.title} - Priority Consultation`)}
                  className="w-full py-2.5 px-4 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire for Custom Enterprise Execution</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Cards Quick Grid for Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((s) => (
            <div 
              key={s.id} 
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 w-fit rounded-lg bg-slate-800 mb-4">
                  {getServiceIcon(s.id, "w-5 h-5")}
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">{s.title}</h4>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {s.description}
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab(s.id);
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group pt-2 border-t border-slate-800/80 cursor-pointer"
              >
                <span>View Full Specifications</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
