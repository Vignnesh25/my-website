import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Copy, Check, Radio } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'internship',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        inquiryType: 'internship',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="flex flex-col space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b-2 border-[#1c1b1b] pb-2">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-[#a73918]" />
          <h2 className="font-heading text-lg sm:text-xl text-[#1c1b1b] uppercase font-bold tracking-tight">
            05 // Contact & Uplink
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[#a73918] uppercase bg-[#ffdbd1]/50 px-2 py-0.5 border border-[#1c1b1b] font-bold">
          OPEN FOR HIRES
        </span>
      </div>

      {/* Main Contact Enclosure */}
      <div className="bg-white border-2 border-[#1c1b1b] p-4 sm:p-5 brutal-shadow flex flex-col space-y-4">
        {/* Availability Status Banner */}
        <div className="p-3 bg-[#eae8e3] border border-[#1c1b1b] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d95d39] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d95d39]"></span>
            </span>
            <span className="font-mono text-xs text-[#1c1b1b] uppercase font-bold">
              AVAILABILITY STATUS:
            </span>
          </div>
          <span className="font-mono text-[11px] sm:text-xs text-[#1c1b1b]">
            Open for AI/IoT Internships & Engineering Roles (Bengaluru / Hybrid)
          </span>
        </div>

        {/* Direct Link Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Phone */}
          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
            className="p-3 bg-[#f6f3ee] border-2 border-[#1c1b1b] flex items-center justify-between hover:bg-[#f0eee9] transition-all group brutal-shadow-sm brutal-btn-active"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-white border border-[#1c1b1b] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#a73918]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-[#747878] uppercase font-bold">
                  Direct Cellular
                </span>
                <span className="font-mono text-[12px] sm:text-[13px] text-[#1c1b1b] font-bold">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </div>
            <span className="font-mono text-xs text-[#a73918] group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          {/* Email */}
          <div className="p-3 bg-[#f6f3ee] border-2 border-[#1c1b1b] flex items-center justify-between hover:bg-[#f0eee9] transition-all group brutal-shadow-sm">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2.5 min-w-0 flex-1"
            >
              <div className="w-9 h-9 bg-white border border-[#1c1b1b] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#a73918]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-[#747878] uppercase font-bold">
                  Email Transmission
                </span>
                <span className="font-mono text-[12px] sm:text-[13px] text-[#1c1b1b] font-bold truncate">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            <button
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              className="px-2 py-1 bg-white border border-[#1c1b1b] text-[#1c1b1b] font-mono text-[10px] uppercase font-bold hover:bg-[#eae8e3] transition-colors flex items-center gap-1 shrink-0 ml-1"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3 h-3 text-green-700" />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Transmission Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-3 pt-2 border-t border-[#1c1b1b]/15"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#1c1b1b] uppercase font-bold">
              DIRECT MESSAGE / COLLABORATION INQUIRY
            </span>
            <span className="font-mono text-[10px] text-[#747878]">
              SECURE CHANNEL
            </span>
          </div>

          {/* Category Selector */}
          <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
            {[
              { id: 'internship', label: 'AI/IoT Internship' },
              { id: 'project', label: 'Hardware Collaboration' },
              { id: 'fulltime', label: 'Engineering Role' },
              { id: 'general', label: 'Technical Query' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFormData({ ...formData, inquiryType: cat.id })}
                className={`px-2 py-1 border border-[#1c1b1b] uppercase transition-all ${
                  formData.inquiryType === cat.id
                    ? 'bg-[#1c1b1b] text-white font-bold'
                    : 'bg-[#eae8e3] text-[#1c1b1b] hover:bg-[#dcdad5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name / Organization"
              className="p-2.5 bg-[#eae8e3] border-2 border-[#1c1b1b] font-mono text-xs sm:text-[13px] text-[#1c1b1b] focus:bg-white focus:outline-none placeholder:text-[#747878]"
            />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Your Email Address"
              className="p-2.5 bg-[#eae8e3] border-2 border-[#1c1b1b] font-mono text-xs sm:text-[13px] text-[#1c1b1b] focus:bg-white focus:outline-none placeholder:text-[#747878]"
            />
          </div>

          <textarea
            required
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Describe project scope, engineering requirements, or interview invitation..."
            className="w-full p-2.5 bg-[#eae8e3] border-2 border-[#1c1b1b] font-body text-[14px] text-[#1c1b1b] focus:bg-white focus:outline-none placeholder:text-[#747878]"
          />

          {submitted && (
            <div className="p-3 bg-green-50 border-2 border-green-800 text-green-900 font-mono text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0" />
              <span>
                TRANSMISSION LOGGED: Your message has been safely received. JS Vignnesh will respond shortly!
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[#1c1b1b] text-white border-2 border-[#1c1b1b] font-mono text-xs sm:text-[13px] uppercase tracking-wider brutal-shadow-orange brutal-btn-active transition-all flex items-center justify-center gap-2 font-bold cursor-pointer disabled:opacity-75"
          >
            {isSubmitting ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>PACKET TRANSMITTING...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>SEND TRANSMISSION →</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
