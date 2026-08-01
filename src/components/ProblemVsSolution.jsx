import React from 'react';
import { XCircle, CheckCircle2, Zap, AlertTriangle } from 'lucide-react';

export default function ProblemVsSolution() {
  const traditionalPainPoints = [
    'Endless 60-minute Zoom kickoffs & status meetings wasting founder bandwidth.',
    'Slow 2-week turnarounds causing Meta ad account fatigue & rising CPLs.',
    'Boring stock graphics with zero direct-response psychology or visual hook.',
    'High retainers ($4,000+/mo) with zero revision speed or asset guarantees.'
  ];

  const stackcutsEnginePoints = [
    'Seamless Upwork Collaboration — clear scope, fast async communication, and zero friction.',
    'Rapid Turnaround — 48H delivery for static creatives & 3-5 days for complete conversion funnels.',
    'High-Contrast Visuals — split-grids, multi-frame carousels & editorial frames engineered for high CTR.',
    'Iterative Refinement — 2 free rounds of visual revisions included with every milestone.'
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161C27] border border-red-500/30 text-xs font-mono text-red-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>AGENCY WORKFLOW BREAKDOWN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Why Traditional Ad Creative <br className="hidden sm:block" />
            <span className="text-red-400">Workflows Fail</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Traditional agency friction drains performance. Here is how StackCuts eliminates meeting bloat to deliver pure direct-response velocity.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column A: Traditional Agencies */}
          <div className="bg-[#161C27]/40 border border-red-500/30 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-red-500/20">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold block mb-1">
                    THE OLD WAY
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">Traditional Creative Agencies</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <XCircle className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4">
                {traditionalPainPoints.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0B0F17]/60 border border-[#2A3447]/80">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-red-500/20 text-center text-xs font-mono text-red-400">
              ⚠️ Result: High CPL, Creative Fatigue, Lost Scale Momentum
            </div>
          </div>

          {/* Column B: The StackCuts System */}
          <div className="bg-[#161C27] border border-[#00E599]/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-mint-glow relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-[#00E599]/30">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00E599] font-bold block mb-1">
                    THE STACKCUTS ENGINE
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">High-Performance Growth System</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#00E599]/10 border border-[#00E599]/40 flex items-center justify-center text-[#00E599]">
                  <Zap className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4">
                {stackcutsEnginePoints.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0B0F17] border border-[#00E599]/30">
                    <CheckCircle2 className="w-5 h-5 text-[#00E599] shrink-0 mt-0.5" />
                    <p className="text-sm text-white font-medium leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#00E599]/30 text-center text-xs font-mono text-[#00E599] font-bold">
              ⚡ Result: Lower CPL, Higher CTR & Scalable Conversion Infrastructure
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
