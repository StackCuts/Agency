import React, { useState } from 'react';
import { X, Zap, CheckCircle2, ArrowRight, UploadCloud, Link as LinkIcon, Lock, Sparkles } from 'lucide-react';

export default function BriefModal({ isOpen, onClose, selectedPackageName }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pkg: selectedPackageName || 'Growth Pack ($495 Trial)',
    websiteUrl: '',
    targetNiche: '',
    adAngle: '',
    driveLink: '',
    email: '',
    agencyName: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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

        {!submitted ? (
          <>
            {/* Modal Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E599]/10 text-[#00E599] border border-[#00E599]/30 text-xs font-mono">
                <Zap className="w-3.5 h-3.5" />
                <span>100% ASYNCHRONOUS INTAKE • 48H SLA</span>
              </div>
              <h3 className="text-2xl font-display font-extrabold text-white">
                Submit 2-Min Asynchronous Order Brief
              </h3>
              <p className="text-xs text-[#94A3B8]">
                No Zoom calls needed. Fill in your offer details to launch production in 48 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                  Selected Package:
                </label>
                <input
                  type="text"
                  readOnly
                  value={formData.pkg}
                  className="w-full bg-[#0B0F17] border border-[#2A3447] rounded-xl px-4 py-2.5 text-sm font-bold text-[#00E599] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                    Website / Offer URL *
                  </label>
                  <div className="relative">
                    <LinkIcon className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
                    <input
                      type="url"
                      required
                      placeholder="https://yourbrand.com"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full bg-[#0B0F17] border border-[#2A3447] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:border-[#00E599] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                    Your Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0B0F17] border border-[#2A3447] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#00E599] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                  Target Audience / Primary Hook Angles
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Meta advertisers suffering high CPL, local medspas needing high CTR split-grids..."
                  value={formData.adAngle}
                  onChange={(e) => setFormData({ ...formData, adAngle: e.target.value })}
                  className="w-full bg-[#0B0F17] border border-[#2A3447] rounded-xl p-3 text-sm text-white focus:border-[#00E599] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                  Drive Link for Logo / Assets (Optional)
                </label>
                <div className="relative">
                  <UploadCloud className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Google Drive or Dropbox folder link"
                    value={formData.driveLink}
                    onChange={(e) => setFormData({ ...formData, driveLink: e.target.value })}
                    className="w-full bg-[#0B0F17] border border-[#2A3447] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:border-[#00E599] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-shimmer w-full py-4 rounded-full bg-[#00E599] text-[#0B0F17] font-extrabold text-sm hover:bg-[#00E599]/90 transition-all shadow-mint-glow flex items-center justify-center gap-2"
                >
                  <span>Submit Order Brief & Start 48H SLA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-center text-[#94A3B8] font-mono flex items-center justify-center gap-1">
                <Lock className="w-3 h-3 text-[#00E599]" />
                100% NDA Protected • Production starts within 1 hour
              </div>
            </form>
          </>
        ) : (
          /* Confirmation View */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#00E599]/20 border-2 border-[#00E599] text-[#00E599] flex items-center justify-center mx-auto shadow-mint-glow animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-bold text-white">
              Order Brief Received!
            </h3>

            <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
              Our direct-response studio is reviewing your offer parameters. You will receive your Frame.io / Drive preview link directly at <span className="text-[#00E599] font-bold">{formData.email}</span> within 48 hours.
            </p>

            <div className="p-4 rounded-xl bg-[#0B0F17] border border-[#2A3447] font-mono text-xs text-[#00E599]">
              ⚡ Zero Zoom Calls Required • Track status via email
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#161C27] border border-[#2A3447] text-white font-bold text-xs hover:border-[#00E599]"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
