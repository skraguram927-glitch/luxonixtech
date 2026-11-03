import React from 'react';
import { 
  ShieldCheck, 
  Factory, 
  ShoppingBag, 
  Activity, 
  Truck, 
  Rocket, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { INDUSTRIES } from '../data/mockData';

interface IndustriesSectionProps {
  onSelectIndustry: (industry: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustry }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'Factory': return <Factory className="w-6 h-6 text-sky-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-blue-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'Truck': return <Truck className="w-6 h-6 text-indigo-400" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-teal-400" />;
      default: return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-r-xl rounded-l-sm bg-slate-900/90 border-y border-r border-slate-800 border-l-2 border-l-cyan-400 text-cyan-300 text-[11px] font-mono tracking-[0.18em] uppercase shadow-lg shadow-cyan-950/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></span>
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Sector Specialization & Domain Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tailored Solutions Across Industries
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Every vertical has unique compliance, data density, and operational demands. We craft software, IT networks, and job orders aligned with industry rigor.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 transition-all group flex flex-col justify-between shadow-lg cursor-pointer"
              onClick={() => onSelectIndustry(ind.title)}
            >
              <div>
                <div className="p-3 w-fit rounded-xl bg-slate-800 border border-slate-700/60 group-hover:bg-cyan-950/60 group-hover:border-cyan-700/60 transition-colors mb-5">
                  {getIndustryIcon(ind.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                <span>Explore Domain Use Cases</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
