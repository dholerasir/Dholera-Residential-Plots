import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { PropertyShowcase } from './components/PropertyShowcase';
import { SmartCityInfra } from './components/SmartCityInfra';
import { ZoneExplainer } from './components/ZoneExplainer';
import { SiteVisitBanner } from './components/SiteVisitBanner';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { BuyerGuidelinesSection } from './components/BuyerGuidelinesSection';
import { ContactNAPSection } from './components/ContactNAPSection';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { SiteVisitModal } from './components/SiteVisitModal';
import { StickyContactBar } from './components/StickyContactBar';
import { LeadFormPayload } from './types';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [selectedPlotForBrochure, setSelectedPlotForBrochure] = useState<string | undefined>(undefined);
  const [siteVisitModalOpen, setSiteVisitModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenBrochure = (plotTitle?: string) => {
    setSelectedPlotForBrochure(plotTitle);
    setBrochureModalOpen(true);
  };

  const handleOpenSiteVisit = () => {
    setSiteVisitModalOpen(true);
  };

  const handleQuickLeadSuccess = (data: { name: string; phone: string; size: string }) => {
    setToastMessage(`Thank you, ${data.name}! Dholera SIR Price Sheet for ${data.size} dispatched to ${data.phone}.`);
    setTimeout(() => setToastMessage(null), 6000);
  };

  const handleFullFormSubmitted = (data: LeadFormPayload) => {
    setToastMessage(`Plot dossier requested for ${data.preferredZone}! Our land consultant will connect with you shortly.`);
    setTimeout(() => setToastMessage(null), 6000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-600 selection:text-white pb-14 md:pb-0">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 max-w-md bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-emerald-500/50 flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="flex-1 text-xs">
            <span className="font-bold block text-emerald-400">Request Confirmed</span>
            <p className="text-slate-200 mt-0.5">{toastMessage}</p>
          </div>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header Navigation with NAP and CTAs */}
      <Header 
        onOpenBrochureModal={handleOpenBrochure} 
        onOpenSiteVisitModal={handleOpenSiteVisit} 
      />

      <main className="flex-1">
        {/* Hero Section with Keywords and Quick Lead Box */}
        <Hero 
          onOpenBrochureModal={handleOpenBrochure}
          onOpenSiteVisitModal={handleOpenSiteVisit}
          onQuickLeadSuccess={handleQuickLeadSuccess}
        />

        {/* Real Estate Trust Metrics */}
        <TrustBar />

        {/* Featured Plots Showcase with Anchor URLs */}
        <PropertyShowcase 
          onSelectPlotForBrochure={handleOpenBrochure}
          onSelectPlotForVisit={handleOpenSiteVisit}
        />

        {/* Growth Drivers & Megaprojects in Dholera SIR */}
        <SmartCityInfra 
          onOpenBrochureModal={() => handleOpenBrochure()}
        />

        {/* Town Planning (TP) Zones Explainer */}
        <ZoneExplainer 
          onOpenBrochureModal={handleOpenBrochure}
        />

        {/* VIP Site Visit & Cab Transportation Banner */}
        <SiteVisitBanner 
          onOpenSiteVisitModal={handleOpenSiteVisit}
        />

        {/* 2026 Buyer Guidelines, Connectivity Milestones & Inside vs Outside SIR Guide */}
        <BuyerGuidelinesSection 
          onOpenBrochureModal={handleOpenBrochure}
          onOpenSiteVisitModal={handleOpenSiteVisit}
        />

        {/* Internal Blog Articles & Knowledge Base from dholeraresidentialplot.com/blog */}
        <BlogSection />

        {/* Keyword-Rich FAQs */}
        <FaqSection />

        {/* Official Contact & NAP (Name, Address, Phone) Section */}
        <ContactNAPSection 
          onFormSubmitted={handleFullFormSubmitted}
        />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Download Brochure Modal */}
      <BrochureModal 
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        plotTitle={selectedPlotForBrochure}
      />

      {/* VIP Site Visit Booking Modal */}
      <SiteVisitModal 
        isOpen={siteVisitModalOpen}
        onClose={() => setSiteVisitModalOpen(false)}
      />

      {/* Sticky Quick Contact Bar for Mobile & Floating WhatsApp */}
      <StickyContactBar 
        onOpenBrochureModal={() => handleOpenBrochure()}
        onOpenSiteVisitModal={handleOpenSiteVisit}
      />

    </div>
  );
}
