import React from 'react';
import { Phone, MessageCircle, Download, Calendar } from 'lucide-react';
import { BUSINESS_NAP } from '../data/dholeraData';

interface StickyContactBarProps {
  onOpenBrochureModal: () => void;
  onOpenSiteVisitModal: () => void;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({
  onOpenBrochureModal,
  onOpenSiteVisitModal
}) => {
  return (
    <>
      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-2xl">
        <div className="grid grid-cols-4 gap-1.5">
          
          <a
            href={`tel:${BUSINESS_NAP.primaryPhone}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors"
            id="sticky-mobile-call"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span className="text-[10px] font-extrabold mt-1">Call Now</span>
          </a>

          <a
            href={`https://wa.me/${BUSINESS_NAP.whatsappNumber}?text=Hi,%20I%20am%20interested%20in%20Plots%20In%20Dholera%20Smart%20City.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors border border-emerald-200"
            id="sticky-mobile-whatsapp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span className="text-[10px] font-extrabold mt-1">WhatsApp</span>
          </a>

          <button
            onClick={onOpenBrochureModal}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-slate-900 text-white transition-colors"
            id="sticky-mobile-brochure"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-extrabold mt-1">Brochure</span>
          </button>

          <button
            onClick={onOpenSiteVisitModal}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-600 text-white transition-colors"
            id="sticky-mobile-visit"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-[10px] font-extrabold mt-1">Free Visit</span>
          </button>

        </div>
      </div>

      {/* Floating Desktop WhatsApp & Call Badge */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        
        <button
          onClick={onOpenSiteVisitModal}
          className="group flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-xl border border-slate-700 transition-all hover:scale-105"
        >
          <Calendar className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold">Book Free Site Visit</span>
        </button>

        <a
          href={`https://wa.me/${BUSINESS_NAP.whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20Plots%20In%20Dholera%20Smart%20City.%20Please%20send%20brochure%20and%20rates.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all hover:scale-105"
          id="floating-desktop-whatsapp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="text-xs font-bold">Chat On WhatsApp</span>
        </a>

      </div>
    </>
  );
};
