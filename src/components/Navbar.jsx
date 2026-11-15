import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import GetInTouchModal from './GetInTouchModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      // Graceful fallback if URLSearchParams is restricted
    }
  }, []);

  const navLinks = [
    { name: 'The Briefing', href: '#briefing' },
    { name: 'The Vault', href: '#vault' },
    { name: 'The Mechanism', href: '#mechanism' },
    { name: 'Pricing/FAQ', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F9FC]/92 backdrop-blur-md border-b border-slate-200/70 transition-all">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        
        {/* ========================================================================= */}
        {/* BRAND LOGO: Akaya Kanadaka (Regular / Unbolded - Whimsical & Calligraphic)*/}
        {/* ========================================================================= */}
        <a href="#" className="relative group inline-block text-left cursor-pointer">
          <div className="flex items-center gap-2">
            {/* Logo Text in Akaya Kanadaka (Refined, compact regular size) */}
            <span
              style={{ fontFamily: "'Akaya Kanadaka', cursive" }}
              className="text-[20px] sm:text-[23px] font-normal tracking-normal text-[#0F172A] leading-none transition-colors group-hover:text-[#1E293B]"
            >
              Mayur <span className="font-light text-slate-400 text-sm sm:text-base font-sans mx-0.5">//</span> StackCuts
            </span>
          </div>

          {/* Hand-Drawn Blue Brush Stroke Accent under Logo */}
          <svg
            className="w-full h-2.5 text-[#3B82F6] opacity-85 mt-[-2px] transition-transform duration-300 group-hover:scale-x-105"
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

        {/* ========================================================================= */}
        {/* DESKTOP NAV LINKS: Balanced in center for LinkedIn, Pushed Right for Upwork */}
        {/* ========================================================================= */}
        <nav
          className={`hidden md:flex items-center gap-7 lg:gap-9 ${
            isUpworkSource ? 'ml-auto' : ''
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14.5px] lg:text-[15px] font-sans font-semibold text-slate-700 hover:text-[#0F172A] tracking-tight transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0F172A] hover:after:w-full after:transition-all cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ========================================================================= */}
        {/* RIGHT SIDE: 'Get In Touch' in Default/LinkedIn Mode, Hidden on Desktop in Upwork Mode */}
        {/* ========================================================================= */}
        <div className={`flex items-center gap-3 ${isUpworkSource ? 'md:hidden' : ''}`}>
          {/* Default / LinkedIn Mode: Desktop 'Get In Touch' Button */}
          {!isUpworkSource && (
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#EAA779] hover:bg-[#E39864] text-[#2D1B0D] font-sans font-bold text-sm sm:text-[14.5px] tracking-tight shadow-sm hover:shadow-md transition-all hover:scale-103 cursor-pointer"
            >
              <span>Get In Touch</span>
            </button>
          )}

          {/* Default / LinkedIn Mode: Mobile 'Get In Touch' Pill */}
          {!isUpworkSource && (
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="sm:hidden inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#EAA779] text-[#2D1B0D] font-sans font-bold text-xs tracking-tight whitespace-nowrap shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Get In Touch</span>
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-800 hover:text-blue-600 py-1.5 tracking-tight"
            >
              {link.name}
            </a>
          ))}
          {!isUpworkSource && (
            <div className="pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="w-full py-3.5 rounded-full bg-[#EAA779] text-[#2D1B0D] font-bold text-sm tracking-tight flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Direct Contact Modal (Rendered ONLY in LinkedIn / Direct Mode, never in Upwork Mode) */}
      {!isUpworkSource && (
        <GetInTouchModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      )}
    </header>
  );
}
