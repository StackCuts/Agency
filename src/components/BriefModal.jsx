import React from 'react';
import { X, Zap, ShieldCheck, ExternalLink, Check } from 'lucide-react';

export default function BriefModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOpenUpwork = () => {
    window.open('https://www.upwork.com', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0F17]/90 backdrop-blur-md">
      <div className="bg-[#161C27] border border-[#00E599]/60 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-mint-glow space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#0B0F17] border border-[#2A3447] text-[#94A3B8] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E599]/10 text-[#00E599] border border-[#00E599]/30 text-xs font-mono font-bold">
            <Zap className="w-3.5 h-3.5" />
            <span>⚡ DIRECT UPWORK COLLABORATION</span>
          </div>

          <h3 className="text-2xl font-display font-extrabold text-white">
            Let's Discuss Your Project on Upwork
          </h3>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Ready to scale your Meta ad campaigns, launch multi-frame carousels, or build a custom MedSpa funnel? Connect with me directly on Upwork for secure hiring and custom proposals.
          </p>
        </div>

        {/* 3 Benefit Checkmarks */}
        <div className="space-y-3 p-4 rounded-2xl bg-[#0B0F17] border border-[#2A3447]">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <div className="w-5 h-5 rounded-full bg-[#00E599]/10 border border-[#00E599]/30 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 text-[#00E599]" />
            </div>
            <span>100% Safe & Verified Engagement via Upwork Escrow</span>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <div className="w-5 h-5 rounded-full bg-[#00E599]/10 border border-[#00E599]/30 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 text-[#00E599]" />
            </div>
            <span>Fast Async Communication & Rapid Delivery</span>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <div className="w-5 h-5 rounded-full bg-[#00E599]/10 border border-[#00E599]/30 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 text-[#00E599]" />
            </div>
            <span>Custom Scope & Tailored Campaign Strategy</span>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="space-y-3 pt-1">
          <button
            onClick={handleOpenUpwork}
            className="btn-shimmer w-full py-4 rounded-full bg-[#00E599] text-[#0B0F17] font-extrabold text-sm hover:bg-[#00E599]/90 transition-all shadow-mint-glow flex items-center justify-center gap-2"
          >
            <span>Message Me on Upwork</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          {/* Trust Footer */}
          <div className="text-xs text-center text-[#94A3B8] font-mono flex items-center justify-center gap-1.5 pt-1">
            <ShieldCheck className="w-4 h-4 text-[#00E599]" />
            <span>🛡️ Verified Upwork Freelancer Profile</span>
          </div>
        </div>

      </div>
    </div>
  );
}
