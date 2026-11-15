import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight, ShieldCheck, Sparkles, Globe, Clock, Check } from 'lucide-react';
import GetInTouchModal from './GetInTouchModal';

export default function Footer() {
  const [isUpworkSource, setIsUpworkSource] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const refParam = params.get('ref')?.toLowerCase();
      const sourceParam = params.get('source')?.toLowerCase();
      const utmParam = params.get('utm_source')?.toLowerCase();
      const referrer = typeof document !== 'undefined' ? (document.referrer?.toLowerCase() || '') : '';
      const isFromUpwork = referrer.includes('upwork.com');

      if (
        refParam === 'upwork' ||
        sourceParam === 'upwork' ||
        utmParam === 'upwork' ||
        isFromUpwork
      ) {
        setIsUpworkSource(true);
      } else {
        setIsUpworkSource(false);
      }
    } catch {
      // Graceful fallback
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'The Briefing', href: '#briefing' },
    { name: 'The Vault', href: '#vault' },
    { name: 'The Mechanism', href: '#mechanism' },
    { name: 'Scope & FAQ', href: '#pricing' },
  ];

  return (
    <footer className="bg-[#0B1120] text-slate-400 border-t border-slate-800/90 relative overflow-hidden">
      
      {/* Decorative Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-32 bg-gradient-to-b from-[#3B82F6]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-16 pb-10 sm:pb-12 relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* ROW 1: BRAND LOGO + STATUS + BACK TO TOP                                  */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 sm:pb-10 border-b border-slate-800/70">
          
          {/* Brand Signature + Mobile Back to Top */}
          <div className="space-y-3 w-full md:w-auto">
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <a href="#" className="relative group inline-block text-left cursor-pointer">
                <div className="flex items-center gap-2">
                  <span
                    style={{ fontFamily: "'Akaya Kanadaka', cursive" }}
                    className="text-[24px] sm:text-[26px] font-normal tracking-normal text-white leading-none transition-colors group-hover:text-slate-200"
                  >
                    Mayur <span className="font-light text-slate-500 text-base sm:text-lg font-sans mx-0.5">//</span> StackCuts
                  </span>
                </div>
                <svg
                  className="w-full h-2.5 text-[#3B82F6] opacity-85 mt-[-1px] transition-transform duration-300 group-hover:scale-x-105"
                  viewBox="0 0 130 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9.5C38 4.5 90 4 127 8.5"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>

              {/* Mobile Back to Top (Aligned with logo on top row of mobile) */}
              <button
                type="button"
                onClick={scrollToTop}
                className="md:hidden px-3.5 py-2 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer border border-slate-700/70 min-h-[38px] shadow-xs active:scale-95"
                aria-label="Back to top"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs sm:text-[13px] font-sans text-slate-400 max-w-md leading-relaxed">
              Direct-response creative architecture, high-velocity ad production, and message-matched Shopify CRO for ambitious DTC brands & growth agencies.
            </p>

            {/* Mobile Availability Badge (cleanly nested under description) */}
            <div className="md:hidden pt-0.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Q4/Q1 Agile Sprints</span>
              </div>
            </div>
          </div>

          {/* Desktop Right: Availability Badge & Back to Top Button */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open for Q4/Q1 Agile Sprints</span>
            </div>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="px-3.5 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer border border-slate-700/60"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 2: QUICK NAVIGATION + OPERATING MODEL + COMPLIANCE                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-[13px]">
          
          {/* Column 1: Fast Navigation Links (2x2 Grid on Mobile, 1-Col on Desktop) */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-200">
              Section Index
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 font-sans font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 py-1 sm:py-0.5 px-2 -mx-2 rounded-lg hover:bg-slate-800/40 cursor-pointer"
                  >
                    <span className="text-[#3B82F6]">→</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Working Model & Timezone */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Operating Cadence</span>
            </div>
            <div className="space-y-1.5 font-sans text-slate-400 leading-relaxed">
              <p>
                <strong className="text-slate-200 font-semibold">100% Async-First:</strong> No meeting bloat. High-speed async communication, clear written sprint updates, and organized Notion review drops.
              </p>
              <p className="text-slate-500 font-mono text-[11.5px] pt-1">
                Based in India (IST) • Seamless overlap across US, UK & EU operational hours.
              </p>
            </div>
          </div>

          {/* Column 3: Trust & Platform Protocol */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Collaboration Protocol</span>
            </div>
            
            {isUpworkSource ? (
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 font-sans">
                <div className="font-semibold text-white text-xs flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Upwork Escrow Protected</span>
                </div>
                <p className="text-[11.5px] text-slate-400 leading-snug">
                  All contracts, milestones, and payments managed directly inside Upwork for 100% compliance and security.
                </p>
              </div>
            ) : (
              <div className="p-3.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5 sm:space-y-2 font-sans">
                <div className="text-xs text-slate-300 font-medium">
                  Ready to discuss your creative pipeline?
                </div>
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-1.5 rounded-lg bg-[#EAA779] hover:bg-[#E39864] text-[#2D1B0D] font-bold text-xs tracking-tight transition-all cursor-pointer shadow-xs active:scale-98"
                >
                  <span>Start an Async Note</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 3: COPYRIGHT & SUBTLE CREDITS                                         */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-[11.5px] font-mono text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Mayur // StackCuts. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3 text-slate-500">
            <span>DTC Creative Strategy</span>
            <span className="text-slate-700">•</span>
            <span>Shopify CRO Architecture</span>
            <span className="text-slate-700">•</span>
            <span>White-Label Agency Partner</span>
          </div>
        </div>

      </div>

      {/* Direct Contact Modal (Rendered ONLY in LinkedIn / Direct Mode, never in Upwork Mode) */}
      {!isUpworkSource && (
        <GetInTouchModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      )}

    </footer>
  );
}