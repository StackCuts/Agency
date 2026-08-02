import React from 'react';
import { Zap, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function FinalCTA({ onOpenModal }) {
  return (
    <section className="py-20 sm:py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00E599]/15 to-[#3B82F6]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#161C27] to-[#0B0F17] border-2 border-[#00E599] p-6 sm:p-14 text-center shadow-mint-glow space-y-8 relative">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E599]/10 border border-[#00E599]/40 text-xs font-mono text-[#00E599] font-bold">
            <Zap className="w-4 h-4" />
            <span>⚡ DIRECT UPWORK COLLABORATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Ready to Fix Ad Fatigue & <br />
            <span className="bg-gradient-to-r from-white via-[#F8FAFC] to-[#00E599] bg-clip-text text-transparent">
              Scale Your CTR?
            </span>
          </h2>

          <p className="text-base sm:text-xl text-[#94A3B8] max-w-2xl mx-auto font-normal">
            Launch high-converting Meta ad creatives and custom funnels with zero scheduling friction.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => onOpenModal && onOpenModal('Start Project on Upwork')}
              className="btn-shimmer w-full py-4 px-8 rounded-full bg-[#00E599] text-[#0B0F17] font-extrabold text-base hover:bg-[#00E599]/90 transition-all shadow-mint-glow flex items-center justify-center gap-2 group"
            >
              <span>Start Project on Upwork →</span>
            </button>
          </div>

          {/* Micro Features under CTA */}
          <div className="pt-6 border-t border-[#2A3447]/60 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00E599]" />
              <span>✓ 100% Upwork Escrow Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#3B82F6]" />
              <span>✓ 48H – 5D Rapid Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#00E599]" />
              <span>✓ Direct Async Workflow</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
