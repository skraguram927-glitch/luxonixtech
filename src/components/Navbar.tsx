import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronRight, 
  Phone, 
  Mail, 
  Code2, 
  Server, 
  Layout, 
  Cpu, 
  Briefcase,
  Building,
  Sparkles,
  Layers,
  Star,
  Compass,
  MessageSquare,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Send
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/mockData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string, serviceParam?: string) => void;
  onOpenAppointment?: (serviceType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'software-development': return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'it-services': return <Server className="w-4 h-4 text-sky-400" />;
      case 'web-designing': return <Layout className="w-4 h-4 text-blue-400" />;
      case 'job-order-works': return <Cpu className="w-4 h-4 text-teal-400" />;
      default: return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  const handleNavClick = (sectionId: string, serviceParam?: string) => {
    setMenuOpen(false);
    onNavigate(sectionId, serviceParam);
  };

  const navMenuItems = [
    { id: 'hero', index: '01', label: 'Home', subtitle: 'Live Cluster & Salem HQ Overview' },
    { id: 'services', index: '02', label: 'Core Services', subtitle: 'Software, IT Cloud, Web Design, Job Orders' },
    { id: 'testimonials', index: '03', label: 'Client Testimonials', subtitle: 'Verified Global Client Reviews (4.9/5)' },
    { id: 'industries', index: '04', label: 'Industries & Solutions', subtitle: 'FinTech, Manufacturing, E-Commerce, Logistics' },
    { id: 'about', index: '05', label: 'About Luxonixstacks', subtitle: 'Salem HQ Engineering & Operating Principles' },
    { id: 'contact', index: '06', label: 'Contact & Inquiry Desk', subtitle: 'Direct Scoping, Mail & WhatsApp Support' },
    { id: 'careers', index: '07', label: 'Careers & Internships', subtitle: 'Job & Internship Intake · Direct CV Dispatch', isHighlight: true },
  ];

  return (
    <>
      {/* Front Sticky Header Bar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/50 py-3.5' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Brand on Front */}
            <button 
              onClick={() => handleNavClick('hero')} 
              className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl p-1 cursor-pointer"
            >
              <img 
                src={COMPANY_INFO.logoSquare} 
                alt="Luxonixstacks Logo" 
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-xl border border-slate-700/60 group-hover:border-cyan-500/60 transition-colors bg-slate-900 shadow-sm shadow-cyan-950" 
              />
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-slate-100 transition-colors">
                    Luxonix
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    stacks
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
                  IT SOLUTIONS
                </span>
              </div>
            </button>

            {/* FRONT RIGHT: ONLY THE THREE SMALL LINES MENU BUTTON (All other items hidden inside menu) */}
            <div className="flex items-center">
              <button
                onClick={() => setMenuOpen(true)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 hover:border-cyan-400 text-slate-100 hover:text-white transition-all shadow-lg shadow-black/40 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Open Navigation Menu"
              >
                {/* Three small lines icon */}
                <div className="flex flex-col justify-center gap-1.5 w-5">
                  <span className="w-5 h-0.5 bg-cyan-400 rounded-full transition-all group-hover:w-5"></span>
                  <span className="w-3.5 h-0.5 bg-slate-300 rounded-full transition-all group-hover:w-5 group-hover:bg-cyan-400"></span>
                  <span className="w-5 h-0.5 bg-cyan-400 rounded-full transition-all group-hover:w-5"></span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200 group-hover:text-cyan-300">
                  Menu
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* FULLY REDESIGNED MENU UI/UX: Obsidian Architectural Command Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          
          {/* Backdrop Click Area */}
          <div 
            className="flex-1 hidden lg:block cursor-pointer" 
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Menu Drawer Container */}
          <div className="w-full max-w-2xl bg-slate-950 border-l border-slate-800/90 shadow-2xl h-full flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            
            {/* 1. Header Bar of the Menu */}
            <div className="p-5 sm:p-6 border-b border-slate-800/90 flex items-center justify-between bg-slate-900/80 sticky top-0 z-20 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <img 
                  src={COMPANY_INFO.logoSquare} 
                  alt="Luxonixstacks" 
                  className="w-10 h-10 object-contain rounded-xl border border-slate-700 bg-slate-950 p-1" 
                />
                <div>
                  <div className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                    <span>Luxonix</span>
                    <span className="text-cyan-400">stacks</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Salem HQ · Mallur (636203)</span>
                  </div>
                </div>
              </div>

              {/* Close Button with ESC hint */}
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-[10px] font-mono uppercase text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  ESC
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer group"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
                </button>
              </div>
            </div>

            {/* 2. Menu Navigation Content Grid */}
            <div className="p-5 sm:p-7 space-y-6 flex-1">
              
              {/* Category Label */}
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-slate-400 pb-1 border-b border-slate-800/60">
                <span>Directory & Navigation</span>
                <span className="text-cyan-400">Luxonix Stacks</span>
              </div>

              {/* Numbered Menu Rows */}
              <div className="space-y-1.5">
                {navMenuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full group p-3.5 sm:p-4 rounded-2xl text-left transition-all cursor-pointer flex items-center justify-between border ${
                        isActive
                          ? 'bg-slate-900 text-cyan-400 border-cyan-500/50 shadow-md shadow-cyan-950/40'
                          : item.isHighlight
                          ? 'bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border-slate-800 hover:border-cyan-500/40 text-white'
                          : 'bg-slate-950/40 hover:bg-slate-900/70 border-transparent hover:border-slate-800 text-slate-200 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className={`text-xs font-mono font-bold px-2 py-1 rounded-lg border ${
                          isActive 
                            ? 'bg-cyan-500 text-slate-950 border-cyan-400' 
                            : 'bg-slate-900 text-slate-500 border-slate-800 group-hover:text-cyan-400 group-hover:border-slate-700'
                        }`}>
                          {item.index}
                        </span>
                        <div>
                          <div className="text-sm sm:text-base font-bold flex items-center gap-2">
                            <span>{item.label}</span>
                            {item.isHighlight && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">
                                Intake Open
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-400 line-clamp-1 font-normal">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          isActive ? 'text-cyan-400' : 'text-slate-600 group-hover:text-slate-300'
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 4 Core Services Quick-Access Tiles */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-3">
                  <span>Core Engineering Pillars</span>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="text-cyan-400 hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CORE_SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleNavClick('services', s.id)}
                      className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/40 text-left transition-all cursor-pointer group flex items-center gap-3"
                    >
                      <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform">
                        {getServiceIcon(s.id)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-white group-hover:text-cyan-300 truncate">
                          {s.shortTitle}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {s.sla}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Careers Callout Tile in Menu */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500 text-slate-950">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Join Luxonixstacks</div>
                    <div className="text-xs text-slate-400">Apply for Job or Internship · Send CV</div>
                  </div>
                </div>

                <button
                  onClick={() => handleNavClick('careers')}
                  className="w-full sm:w-auto py-2 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Go to Application Slide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* 3. Redesigned Menu Footer with Contacts & HQ Address */}
            <div className="p-5 sm:p-6 border-t border-slate-800 bg-slate-900/90 space-y-4">
              
              {/* Direct Communication Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/50 text-slate-300 hover:text-white flex items-center gap-2.5 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-mono truncate">{COMPANY_INFO.email}</span>
                </a>

                <a 
                  href={`tel:${COMPANY_INFO.phone}`} 
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/50 text-slate-300 hover:text-white flex items-center gap-2.5 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{COMPANY_INFO.displayPhone}</span>
                </a>
              </div>

              {/* Physical Address */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Salem Headquarters: </span>
                  Assari Kadu, Vengampatti, Mallur, Salem, Tamil Nadu - PIN Code: 636203
                </div>
              </div>

              {/* WhatsApp Business Action */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/80 text-emerald-300 hover:text-emerald-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect via WhatsApp Hotline (+91 93423 20225)</span>
              </a>

            </div>

          </div>
        </div>
      )}
    </>
  );
};
