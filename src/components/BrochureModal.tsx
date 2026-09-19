import React, { useState } from 'react';
import { X, Download, CheckCircle2, ShieldCheck, FileText, Phone } from 'lucide-react';
import { BUSINESS_NAP } from '../data/dholeraData';
import { OmanaLogo } from './OmanaLogo';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  plotTitle?: string;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, plotTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsDone(true);
    setTimeout(() => {
      // Simulate file download
      const element = document.createElement("a");
      const file = new Blob([
        `=== DHOLERA SIR MASTER PLAN & PLOT RATE CARD 2026 ===\n\nProject: ${plotTitle || "Comprehensive Dholera Smart City Portfolio"}\nClient: ${name}\nPhone: ${phone}\n\nTown Planning Sanction: TP1 & TP2 Government Gazetted\nStatus: Clear Legal Title, NA Approved, Immediate Registry\nAdvisory: ${BUSINESS_NAP.name}\nHelpline: ${BUSINESS_NAP.primaryPhone}\n`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `Dholera-Plots-Master-Plan-2026-${(plotTitle || "Brochure").replace(/\s+/g, '-')}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsDone(false);
    setName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 pr-14">
          <div className="flex items-center justify-between gap-4 mb-3 pb-3 border-b border-slate-800">
            <OmanaLogo variant="horizontal" theme="dark" size="sm" />
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
              <FileText className="w-3 h-3" />
              <span>Official Kit</span>
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {plotTitle ? `Download ${plotTitle} Kit` : "Dholera SIR Master Plan & Rate Card"}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Includes gazetted TP survey layouts, unit dimension schematics, and 2026 payment schedule.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          {isDone ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Brochure Downloaded Successfully!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                We have also dispatched a high-resolution WhatsApp copy of the Dholera Smart City layout directly to <strong className="text-slate-800">{phone}</strong>.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Patel"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                  id="modal-name"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  WhatsApp Number (For Instant Delivery) *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-100 text-slate-700 text-xs font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full px-3.5 py-2.5 text-sm rounded-r-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                    id="modal-phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="ananya@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                  id="modal-email"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                id="modal-download-btn"
              >
                <Download className="w-4 h-4" />
                <span>Download Master Plan & Rates Now</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Free • No obligation • Direct developer prices</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
