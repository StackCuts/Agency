import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Packages', href: '#packages' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B0F17]/85 backdrop-blur-md border-b border-[#2A3447]/60 py-3 shadow-xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#161C27] to-[#0B0F17] border border-[#00E599]/40 flex items-center justify-center shadow-mint-glow group-hover:border-[#00E599] transition-all">
              <Zap className="w-5 h-5 text-[#00E599] fill-[#00E599]/20 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                STACK<span className="text-[#00E599]">CUTS</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#94A3B8] -mt-1">
                stackcuts.agency
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#161C27]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#2A3447]/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-[#2A3447]/40 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#94A3B8] font-mono border-r border-[#2A3447] pr-3">
              <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
              Available for Upwork Contracts
            </div>
            <button
              onClick={() => onOpenModal && onOpenModal('Hire on Upwork')}
              className="btn-shimmer relative px-5 py-2.5 rounded-full bg-[#00E599] text-[#0B0F17] font-bold text-sm hover:bg-[#00E599]/90 transition-all shadow-mint-glow hover:shadow-lg flex items-center gap-2 group"
            >
              <span>Hire on Upwork</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#161C27] border border-[#2A3447] text-[#94A3B8] hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#00E599]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F17]/95 backdrop-blur-xl border-b border-[#2A3447] px-4 pt-4 pb-6 mt-2 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-[#94A3B8] hover:text-white hover:bg-[#161C27] rounded-xl"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#2A3447]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenModal) onOpenModal('Hire on Upwork');
              }}
              className="w-full py-3 rounded-full bg-[#00E599] text-[#0B0F17] font-bold text-sm flex items-center justify-center gap-2 shadow-mint-glow"
            >
              <span>Hire on Upwork</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
