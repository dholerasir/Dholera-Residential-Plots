import React, { useState } from 'react';
import { BUSINESS_NAP } from '../data/dholeraData';
import { LeadFormPayload } from '../types';
import { OmanaLogo } from './OmanaLogo';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Navigation, 
  ExternalLink 
} from 'lucide-react';

interface ContactNAPSectionProps {
  onFormSubmitted: (lead: LeadFormPayload) => void;
}

export const ContactNAPSection: React.FC<ContactNAPSectionProps> = ({ onFormSubmitted }) => {
  const [formData, setFormData] = useState<LeadFormPayload>({
    fullName: '',
    email: '',
    phone: '',
    plotSizeInterest: '150 Sq. Yd (1,350 Sq. Ft)',
    preferredZone: 'TP2 Expressway',
    purpose: 'Long-Term Investment',
    siteVisitRequired: true,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
    onFormSubmitted(formData);
  };

  return (
    <section id="contact-us" className="py-16 sm:py-24 bg-slate-900 text-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-4 h-4 text-emerald-400" />
            <span>Official Advisory Contact & NAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect With Our <span className="text-emerald-400">Dholera SIR Land Specialists</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Schedule a confidential consultation, request official revenue survey maps, or reserve your preferred <strong className="text-white font-semibold">Plot in Dholera Smart City</strong> with direct developer pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Structured NAP (Name, Address, Phone) & Office Information */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* NAP Identity Card */}
            <div className="bg-slate-800/90 rounded-2xl p-7 border border-slate-700 shadow-xl space-y-6">
              
              <div className="border-b border-slate-700 pb-5">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <OmanaLogo variant="horizontal" theme="dark" size="md" />
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Official Advisory
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white mt-1">
                  {BUSINESS_NAP.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {BUSINESS_NAP.tradeName}
                </p>
              </div>

              {/* Physical Addresses */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Corporate Headquarters (Ahmedabad)
                    </h4>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {BUSINESS_NAP.headquarters}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      On-Ground Dholera SIR Site Information Hub
                    </h4>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {BUSINESS_NAP.siteOffice}
                    </p>
                    <span className="inline-block mt-1 text-[11px] text-emerald-300 font-semibold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      {BUSINESS_NAP.audaZone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Channels (Phone, Email, Hours) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5 font-bold uppercase">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    Direct Phone Line
                  </span>
                  <a 
                    href={`tel:${BUSINESS_NAP.primaryPhone}`} 
                    className="text-base font-bold text-white hover:text-emerald-400 block transition-colors"
                  >
                    {BUSINESS_NAP.primaryPhone}
                  </a>
                  {BUSINESS_NAP.secondaryPhone && (
                    <a 
                      href={`tel:${BUSINESS_NAP.secondaryPhone}`} 
                      className="text-xs text-slate-400 hover:text-slate-200 block"
                    >
                      {BUSINESS_NAP.secondaryPhone}
                    </a>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5 font-bold uppercase">
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    Official Inquiries
                  </span>
                  <a 
                    href={`mailto:${BUSINESS_NAP.email}`} 
                    className="text-sm font-semibold text-white hover:text-emerald-400 block transition-colors"
                  >
                    {BUSINESS_NAP.email}
                  </a>
                  {BUSINESS_NAP.supportEmail && (
                    <a
                      href={`mailto:${BUSINESS_NAP.supportEmail}`}
                      className="text-xs text-slate-400 block hover:text-slate-200"
                    >
                      {BUSINESS_NAP.supportEmail}
                    </a>
                  )}
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-3 border-t border-slate-700 flex items-start gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-white">{BUSINESS_NAP.hoursWeekday}</p>
                  <p className="text-slate-400">{BUSINESS_NAP.hoursSunday}</p>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_NAP.whatsappNumber}?text=Hi,%20I%20would%20like%20to%20inquire%20about%20Plots%20In%20Dholera%20Smart%20City.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start Live WhatsApp Chat With Consultant</span>
                </a>
              </div>

            </div>

            {/* Simulated Live Route & Map Guidance */}
            <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                  Travel Coordinates & Transit Times
                </span>
                <span className="text-emerald-400 font-semibold">GPS: 22.2464° N, 72.1966° E</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">From Ahmedabad</span>
                  <strong className="text-white font-bold">45 Mins</strong>
                </div>
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">From Vadodara</span>
                  <strong className="text-white font-bold">75 Mins</strong>
                </div>
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">From Bhavnagar</span>
                  <strong className="text-white font-bold">40 Mins</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Comprehensive Booking & Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100">
              
              <div className="pb-4 border-b border-slate-100">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Request Detailed Plot Allotment Kit
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your requirements to receive the official layout blueprints, survey numbers, and customized rate quotation for your desired plot in Dholera SIR.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">
                    Allotment Request Registered!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. An official dossier with TP layout plans for {formData.preferredZone} has been allocated. Our Senior Investment Manager is contacting you at <strong className="text-slate-900">{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                        id="contact-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
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
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-r-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                          id="contact-phone"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address (For PDF Dossier Delivery)
                    </label>
                    <input
                      type="email"
                      placeholder="your.name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                      id="contact-email"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Plot Size
                      </label>
                      <select
                        value={formData.plotSizeInterest}
                        onChange={(e) => setFormData({ ...formData, plotSizeInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                        id="contact-size"
                      >
                        <option value="100 Sq. Yd (900 Sq. Ft)">100 Sq. Yd (900 Sq. Ft)</option>
                        <option value="150 Sq. Yd (1,350 Sq. Ft)">150 Sq. Yd (1,350 Sq. Ft)</option>
                        <option value="200 Sq. Yd (1,800 Sq. Ft)">200 Sq. Yd (1,800 Sq. Ft)</option>
                        <option value="300 Sq. Yd (2,700 Sq. Ft)">300 Sq. Yd (2,700 Sq. Ft)</option>
                        <option value="500+ Sq. Yd Commercial">500+ Sq. Yd Estate / Commercial</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Zone
                      </label>
                      <select
                        value={formData.preferredZone}
                        onChange={(e) => setFormData({ ...formData, preferredZone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                        id="contact-zone"
                      >
                        <option value="Ridhi 966/1 SCO (TP-4 B2)">Ridhi 966/1 SCO (TP-4 B2, 70M Road)</option>
                        <option value="Ridhi 249/2 SCO (TP-1 Kadipur)">Ridhi 249/2 SCO (TP-1 Kadipur, 55M Road)</option>
                        <option value="Sidhi 857 Plots (TP-4 B2)">Sidhi 857 Residential (TP-4 B2, 48M Road)</option>
                        <option value="TP1 Corridor">Town Planning 1 (TP1) General</option>
                        <option value="TP4 Planning Area">Town Planning 4 (TP4) Bhangadh</option>
                        <option value="Ahmedabad-Dholera Expressway">Expressway & Airport Corridor</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Primary Acquisition Objective
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Personal Residence', 'Long-Term Investment', 'Commercial Holding'] as const).map((purp) => (
                        <button
                          key={purp}
                          type="button"
                          onClick={() => setFormData({ ...formData, purpose: purp })}
                          className={`py-2 px-2 text-[11px] font-bold rounded-lg border transition-all ${
                            formData.purpose === purp
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {purp}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Site Visit Checkbox */}
                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="visit-check"
                      checked={formData.siteVisitRequired}
                      onChange={(e) => setFormData({ ...formData, siteVisitRequired: e.target.checked })}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="visit-check" className="text-xs text-slate-700 font-medium cursor-pointer">
                      <strong>Yes, arrange complimentary VIP site visit</strong> with chauffeur pickup from Ahmedabad (Airport / Highway).
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    id="contact-submit-btn"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request & Get Instant Price Sheet</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your privacy is protected. Direct advisory without spam or unauthorized calls.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
