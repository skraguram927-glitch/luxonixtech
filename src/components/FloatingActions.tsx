import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700/80 shadow-lg shadow-black/50 hover:bg-slate-800 transition-all transform hover:-translate-y-1 cursor-pointer"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Call Floating Trigger */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="p-3.5 rounded-full bg-slate-900 text-cyan-400 hover:text-cyan-300 border border-slate-700 shadow-xl shadow-cyan-950/40 hover:bg-slate-850 transition-all transform hover:scale-105 flex items-center justify-center cursor-pointer"
        title="Call Luxonixstacks (+91 93423 20225)"
        aria-label="Direct Phone Hotline"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Floating Speed Dial */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/50 transition-all transform hover:scale-105 flex items-center justify-center cursor-pointer group relative"
        title="Chat on WhatsApp (+91 93423 20225)"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden group-hover:block absolute right-full mr-3 whitespace-nowrap bg-slate-900 border border-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded-md shadow-md">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
