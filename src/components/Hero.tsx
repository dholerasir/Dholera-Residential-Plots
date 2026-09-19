import React, { useState } from 'react';
import { Shield, CheckCircle2, ArrowRight, Download, PhoneCall, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_NAP } from '../data/dholeraData';
import { OmanaLogo } from './OmanaLogo';

interface HeroProps {
  onOpenBrochureModal: (defaultPlot?: string) => void;
  onOpenSiteVisitModal: () => void;
  onQuickLeadSuccess: (data: { name: string; phone: string; size: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenBrochureModal, 
  onOpenSiteVisitModal,
  onQuickLeadSuccess 
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sizePreference, setSizePreference] = useState('150 Sq. Yd (1,350 Sq. Ft)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
    onQuickLeadSuccess({ name, phone, size: sizePreference });
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setPhone('');
    }, 4000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Subtle Gradient & Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `url('/plots/residential-plot-1.jpg')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Keywords */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Omana Projects Brand Header Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
                <OmanaLogo variant="mark" size="sm" />
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black tracking-wider text-white uppercase font-['Plus_Jakarta_Sans']">
                    OMANA PROJECTS
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium hidden sm:inline">
                    • One <span className="text-red-400 font-bold">Dholera</span> So Many Cities
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sanctioned TP4 & TP1 Schemes in Dholera SIR</span>
              </div>
            </div>

            {/* Main H1 Headline with Exact Search Keywords */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
              High-Yield <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Plots In Dholera</span> – Build Your Wealth in India's Premier <span className="text-emerald-300">Dholera Smart City</span>
            </h1>

            {/* Keyword-Rich Original Descriptive Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Own a certified residential <strong className="text-white font-semibold">Plot in Dholera</strong> inside the government-planned master corridors of <strong className="text-white font-semibold">Dholera SIR</strong>. Benefit from ready underground utilities, 100% clear-title registries, wide asphalt roads, and prime proximity to the Ahmedabad-Dholera Expressway and upcoming International Greenfield Airport.
            </p>

            {/* Key Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Immediate Sale Deed & Registry</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>N.A. & Town Planning (TP) Approved</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>45 Mins from Ahmedabad via Expressway</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Adjacent to Tata ₹91K Cr Semiconductor Hub</span>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#plots-in-dholera"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.01]"
                id="hero-view-plots-btn"
              >
                <span>Explore Plots In Dholera</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenBrochureModal()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base border border-slate-700 transition-colors"
                id="hero-download-brochure-btn"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Master Plan (PDF)</span>
              </button>

              <button
                onClick={onOpenSiteVisitModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-emerald-300 font-semibold text-sm sm:text-base border border-emerald-400/40 transition-colors"
                id="hero-schedule-visit-btn"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Book Free VIP Site Visit</span>
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Guaranteed 100% Free Title Verification & Legal Opinion by High Court Advocates</span>
            </div>
          </div>

          {/* Right Column: High-Converting Quick Lead Box */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Get Instant Price Sheet
                  </h2>
                  <p className="text-xs text-slate-700 mt-0.5">
                    Official TP1 & TP2 inventory rates for Dholera SIR
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  2026 Updated
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Inquiry Received!</h3>
                  <p className="text-xs text-slate-700 max-w-xs mx-auto">
                    Thank you, {name}. Our Dholera SIR investment manager is dispatching the updated layout plan and price breakdown to your phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900 bg-slate-50"
                      id="hero-lead-name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      WhatsApp / Mobile Number *
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
                        className="w-full px-3.5 py-2.5 text-sm rounded-r-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900 bg-slate-50"
                        id="hero-lead-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Plot Configuration
                    </label>
                    <select
                      value={sizePreference}
                      onChange={(e) => setSizePreference(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900 bg-slate-50"
                      id="hero-lead-size"
                    >
                      <option value="100 Sq. Yd (900 Sq. Ft) – ₹14.9L">100 Sq. Yd (900 Sq. Ft) – From ₹14.9 Lakhs</option>
                      <option value="150 Sq. Yd (1,350 Sq. Ft) – ₹22.5L">150 Sq. Yd (1,350 Sq. Ft) – Prime Residential</option>
                      <option value="200 Sq. Yd (1,800 Sq. Ft) – ₹29.8L">200 Sq. Yd (1,800 Sq. Ft) – Villa Sized</option>
                      <option value="300 Sq. Yd (2,700 Sq. Ft) – ₹45.0L">300 Sq. Yd (2,700 Sq. Ft) – Luxury Estate</option>
                      <option value="500+ Sq. Yd Commercial / Executive">500+ Sq. Yd (Commercial Corner / Multiple Plots)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    id="hero-lead-submit"
                  >
                    <span>Request Price Sheet & Layout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] text-slate-700 text-center flex items-center justify-center gap-1.5 pt-1">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    <span>Instant callback & PDF delivery to WhatsApp</span>
                  </div>
                </form>
              )}

              {/* Direct Call Sub-bar */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-700">Need immediate counseling?</span>
                <a 
                  href={`tel:${BUSINESS_NAP.primaryPhone}`} 
                  className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_NAP.primaryPhone}</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
