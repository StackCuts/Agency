import React from 'react';
import { Zap, Mail, ExternalLink, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F17] border-t border-[#2A3447] pt-12 pb-8 text-[#94A3B8] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#2A3447]/60">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#161C27] border border-[#00E599]/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#00E599]" />
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-white">
                STACK<span className="text-[#00E599]">CUTS</span>
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              StackCuts is a tech-enabled, high-speed Direct-Response Creative & Conversion Studio. Engineering static split-grids, multi-frame carousels, and thumb-stopping motion videos for Meta advertisers.
            </p>
            <div className="font-mono text-[11px] text-[#00E599]">
              100% Asynchronous Operating Protocol • 48-Hour SLA
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3 font-mono">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Visual Portfolio</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why StackCuts</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Pricing Packages</a></li>
              <li><a href="#system" className="hover:text-white transition-colors">Closed-Loop System</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">48H Workflow</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3 font-mono">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Direct Studio Contact</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00E599]" />
                <a href="mailto:team@stackcuts.agency" className="text-white hover:text-[#00E599] transition-colors font-bold">
                  team@stackcuts.agency
                </a>
              </div>
              <p className="text-[11px] text-[#94A3B8] pt-1">
                Zero Zoom calls required. 100% email & Drive async communication.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} StackCuts Studio (`stackcuts.agency`). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              <span>Meta Ads Native</span>
              <ExternalLink className="w-3 h-3 text-[#00E599]" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
