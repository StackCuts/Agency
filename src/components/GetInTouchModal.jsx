import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Mail, Copy, Check, ExternalLink, Send, Sparkles } from 'lucide-react';

const CONTACT_EMAIL = 'mayur@stackcuts.com';

export default function GetInTouchModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === 'undefined') return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      senderEmail ? `Message from ${senderEmail}` : 'Inquiry for Mayur // StackCuts'
    );
    const body = encodeURIComponent(
      `${message || 'Hi Mayur, reaching out regarding a project / inquiry.'}\n\nFrom: ${senderEmail || 'Not provided'}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#0F172A]/75 backdrop-blur-md flex items-start sm:items-center justify-center p-4 pt-10 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-md sm:my-auto rounded-3xl bg-white border border-slate-200 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.3)] overflow-hidden animate-in zoom-in-95 duration-200 p-5 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#EAA779] via-[#BE185D] to-[#3B82F6]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0F172A] text-[10.5px] font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#EAA779]" />
            <span>Direct Connection</span>
          </div>
          <h2 className="font-['Fraunces'] text-2xl font-bold text-[#0F172A] tracking-tight leading-snug">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-[13px] font-sans text-slate-600 leading-relaxed">
            Have a project, a question, or want to collaborate? Reach out directly to Mayur.
          </p>
        </div>

        {/* 1. Direct Email Box */}
        <div className="mt-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
          <div className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-slate-400">
            Direct Email
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 text-[#0F172A] font-mono font-bold text-xs sm:text-sm select-all">
              <Mail className="w-4 h-4 text-[#EAA779] flex-shrink-0" />
              <span className="tracking-tight">{CONTACT_EMAIL}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleCopy}
                className={`flex-1 sm:flex-none px-3 py-2 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  copied
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs hover:border-slate-300'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Hello%20Mayur%20%E2%80%94%20StackCuts`}
                className="flex-1 sm:flex-none px-3 py-2 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-sans font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all hover:scale-102 cursor-pointer"
                title="Open in your default email application"
              >
                <span>Email App</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#EAA779]" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-[10px] font-mono uppercase tracking-wider text-slate-400">
            <span className="bg-white px-2">or send a quick note</span>
          </div>
        </div>

        {/* 2. Frictionless Simple 2-Field Note Box */}
        <form onSubmit={handleSendMessage} className="space-y-3">
          <div>
            <label className="block text-[11px] font-sans font-bold text-slate-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              required
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EAA779] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-sans font-bold text-slate-700 mb-1">
              Message
            </label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Mayur, I wanted to ask about..."
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EAA779] focus:bg-white transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 sm:py-3 rounded-full bg-[#EAA779] hover:bg-[#E39864] text-[#2D1B0D] font-sans font-bold text-xs sm:text-sm tracking-tight flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all hover:scale-101 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-[#2D1B0D]" />
            <span>Send Note</span>
          </button>
        </form>

        {/* Bottom Note */}
        <p className="mt-3.5 text-center text-[10.5px] font-mono text-slate-400">
          Mayur // StackCuts • Direct-Response DTC Creative Engine
        </p>
      </div>
    </div>,
    document.body
  );
}
