import React, { useState } from 'react';
import { X, Zap, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

export default function BriefModal({ isOpen, onClose, selectedPackageName }) {
  const [formData, setFormData] = useState({
    name: '',
    projectFocus: selectedPackageName || 'Ad Creatives Growth Pack',
    message: ''
  });

  if (!isOpen) return null;

  const handleContinueOnUpwork = (e) => {
    e.preventDefault();
    // Open Upwork profile/messaging in a new tab
    window.open('https://www.upwork.com', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0F17]/90 backdrop-blur-md">
      <div className="bg-[#161C27] border border-[#00E599]/60 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-mint-glow space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#0B0F17] border border-[#2A3447] text-[#94A3B8] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E599]/10 text-[#00E599] border border-[#00E599]/30 text-xs font-mono font-bold">
            <Zap className="w-3.5 h-3.5" />
            <span>⚡ DIRECT UPWORK COLLABORATION</span>
          </div>
          <h3 className="text-2xl font-display font-extrabold text-white">
            Let's Discuss Your Project on Upwork
          </h3>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Need high-converting split-grids, multi-frame carousels, or a custom MedSpa funnel? Reach out directly on Upwork for custom proposals and instant hiring.
          </p>
        </div>

        {/* Upwork Direct Action Form */}
        <form onSubmit={handleContinueOnUpwork} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 font-bold">
              Your Name / Brand Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Morgan / Apex Aesthetics"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#0B0F17] border border-[#2A3447] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#00E599] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 font-bold">
              Project Focus
            </label>
            <select
              value={formData.projectFocus}
              onChange={(e) => setFormData({ ...formData, projectFocus: e.target.value })}
              className="w-full bg-[#0B0F17] border border-[#2A3447] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#00E599] focus:outline-none"
            >
              <option value="Ad Creatives Growth Pack">Ad Creatives Growth Pack ($495)</option>
              <option value="Full Conversion Stack">Full Conversion Stack ($895)</option>
              <option value="Custom MedSpa Funnel">Custom MedSpa Funnel ($600)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 font-bold">
              Short Message / Requirements
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your offer, target CTR goals, or custom deliverables..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#0B0F17] border border-[#2A3447] rounded-xl p-3 text-sm text-white focus:border-[#00E599] focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn-shimmer w-full py-4 rounded-full bg-[#00E599] text-[#0B0F17] font-extrabold text-sm hover:bg-[#00E599]/90 transition-all shadow-mint-glow flex items-center justify-center gap-2"
            >
              <span>Continue Discussion on Upwork</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Footer */}
          <div className="text-xs text-center text-[#94A3B8] font-mono flex items-center justify-center gap-1.5 pt-1">
            <ShieldCheck className="w-4 h-4 text-[#00E599]" />
            <span>🛡️ Safe & Verified Engagement via Upwork Escrow & Messaging</span>
          </div>
        </form>

      </div>
    </div>
  );
}
