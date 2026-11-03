import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  Award, 
  Users, 
  MapPin, 
  CheckCircle,
  GitBranch,
  Workflow
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Scope Definition',
      desc: 'We analyze your technical goals, data architecture, or job order parameters, delivering a fixed timeline & SLA agreement.',
    },
    {
      num: '02',
      title: 'Architecture & UX Engineering',
      desc: 'Our engineers design scalable schemas, containerized environments, and responsive user journeys in Figma and code.',
    },
    {
      num: '03',
      title: 'Rapid Sprint & Job Execution',
      desc: 'Agile sprints with weekly demos for software, or rapid 24-72h execution sprints for specialized technical job orders.',
    },
    {
      num: '04',
      title: 'QA, Security & Audit Check',
      desc: 'Rigorous unit testing, vulnerability screening, OWASP compliance, and multi-tier verification before sign-off.',
    },
    {
      num: '05',
      title: 'Handoff & 24/7 SLA Support',
      desc: 'Full IP transfer, comprehensive documentation, and ongoing 24/7 operational monitoring to ensure perpetual uptime.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-r-xl rounded-l-sm bg-slate-900/90 border-y border-r border-slate-800 border-l-2 border-l-cyan-400 text-cyan-300 text-[11px] font-mono tracking-[0.18em] uppercase shadow-lg shadow-cyan-950/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></span>
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Luxonixstacks Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Global Clients Choose Luxonixstacks
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            We bridge deep engineering rigor with responsive client communication, delivering high-tier digital solutions without corporate bloat.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="p-3 w-fit rounded-xl bg-cyan-950/60 text-cyan-400 border border-cyan-800/60">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Rapid Engineering Sprints</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We ship clean code and production-ready modules in tight cycles, eliminating delays and keeping your business ahead of the curve.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="p-3 w-fit rounded-xl bg-sky-950/60 text-sky-400 border border-sky-800/60">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Salem Engineering Advantage</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Headquartered in Mallur, Salem, Tamil Nadu, we provide global clients with world-class technical talent and high cost efficiency.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="p-3 w-fit rounded-xl bg-blue-950/60 text-blue-400 border border-blue-800/60">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">100% IP & NDA Security</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              All source code, proprietary algorithms, and datasets are 100% your property under iron-clad international legal NDAs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="p-3 w-fit rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">24/7 SLA Responsiveness</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our managed IT desk and job order supervisors operate around the clock with a 15-minute emergency response commitment.
            </p>
          </div>

        </div>

        {/* Process Flow Timeline */}
        <div className="bg-slate-900/50 rounded-3xl border border-slate-800 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Seamless Project Lifecycle
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              How We Deliver Zero-Defect Solutions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-mono font-extrabold text-cyan-400 mb-3">
                    {step.num}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
