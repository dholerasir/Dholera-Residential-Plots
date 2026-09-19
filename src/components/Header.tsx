import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Download, Menu, X, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS_NAP } from '../data/dholeraData';
import { OmanaLogo } from './OmanaLogo';

interface HeaderProps {
  onOpenBrochureModal: (defaultPlot?: string) => void;
  onOpenSiteVisitModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBrochureModal, onOpenSiteVisitModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification / NAP Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Gujarat RERA & Dholera SIR Approved TP Schemes</span>
            </span>
            <span className="hidden sm:inline-block text-slate-400">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-emerald-400" />
              TP1 & TP2 Corridor, Dholera Smart City
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${BUSINESS_NAP.primaryPhone}`} 
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 font-semibold transition-colors"
              id="header-top-call"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{BUSINESS_NAP.primaryPhone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`https://wa.me/${BUSINESS_NAP.whatsappNumber}?text=Hello,%20I%20am%20interested%20in%20Plots%20In%20Dholera%20Smart%20City.%20Please%20send%20brochure%20and%20price%20list.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 hover:text-white font-semibold transition-all duration-200 hover:scale-105 group"
              id="header-top-whatsapp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-emerald-300 shrink-0" />
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>WhatsApp: 9217104219</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white py-4 shadow-sm border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand with Keywords */}
          <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
            <OmanaLogo variant="horizontal" size="md" />
            <div className="hidden xl:block h-8 w-px bg-slate-200"></div>
            <div className="hidden xl:block">
              <span className="text-xs font-bold text-slate-800 tracking-tight block">
                Dholera Smart City
              </span>
              <span className="text-[10px] font-semibold text-emerald-700 tracking-wider uppercase block">
                Residential & SCO Plots
              </span>
            </div>
          </a>

          {/* Desktop Nav Anchors */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#plots-in-dholera" className="hover:text-emerald-600 transition-colors">
              Plots In Dholera
            </a>
            <a href="#dholera-sir-infrastructure" className="hover:text-emerald-600 transition-colors">
              Infrastructure
            </a>
            <a href="#town-planning-zones" className="hover:text-emerald-600 transition-colors">
              TP Zones
            </a>
            <a href="#buyer-guidelines" className="hover:text-emerald-600 transition-colors">
              Buyer's Guide
            </a>
            <a href="#dholera-sir-blog" className="hover:text-emerald-600 transition-colors">
              Blog
            </a>
            <a href="#faqs" className="hover:text-emerald-600 transition-colors">
              FAQs
            </a>
            <a href="#contact-us" className="hover:text-emerald-600 transition-colors">
              Contact & NAP
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBrochureModal()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all border border-slate-200"
              id="header-cta-brochure"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Brochure & Rates</span>
            </button>

            <button
              onClick={onOpenSiteVisitModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow transition-all"
              id="header-cta-site-visit"
            >
              <span>Book VIP Site Visit</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenBrochureModal()}
              className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-md"
            >
              Brochure
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-5 space-y-4">
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <OmanaLogo variant="horizontal" size="sm" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Official Partner
            </span>
          </div>
          <nav className="flex flex-col space-y-2.5 text-base font-semibold text-slate-800">
            <a 
              href="#plots-in-dholera" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 text-slate-900"
            >
              Plots In Dholera (TP1 & TP2)
            </a>
            <a 
              href="#dholera-sir-infrastructure" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 text-slate-900"
            >
              Dholera SIR Infrastructure
            </a>
            <a 
              href="#town-planning-zones" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 text-slate-900"
            >
              Dholera Smart City Zones
            </a>
            <a 
              href="#buyer-guidelines" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 text-slate-900"
            >
              Buyer's Guide & 2026 News
            </a>
            <a 
              href="#dholera-sir-blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 text-slate-900"
            >
              Dholera SIR Blog & Guides
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 text-slate-900"
            >
              Frequently Asked Questions
            </a>
            <a 
              href="#contact-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 text-slate-900"
            >
              Contact Us & NAP Details
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSiteVisitModal();
              }}
              className="w-full py-2.5 px-4 text-center font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm"
            >
              Book Free Site Visit
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochureModal();
              }}
              className="w-full py-2.5 px-4 text-center font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm border border-slate-200"
            >
              Download PDF Master Plan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
