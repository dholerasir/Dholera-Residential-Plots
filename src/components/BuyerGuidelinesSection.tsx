import React, { useState } from 'react';
import { 
  Train, 
  Route, 
  Building2, 
  CheckCircle2, 
  AlertCircle, 
  FileCheck, 
  Compass, 
  Layers, 
  ShieldCheck, 
  ExternalLink, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Landmark
} from 'lucide-react';
import { OmanaLogo } from './OmanaLogo';
import { BUSINESS_NAP } from '../data/dholeraData';

interface BuyerGuidelinesSectionProps {
  onOpenBrochureModal: (topic?: string) => void;
  onOpenSiteVisitModal: () => void;
}

export const BuyerGuidelinesSection: React.FC<BuyerGuidelinesSectionProps> = ({
  onOpenBrochureModal,
  onOpenSiteVisitModal,
}) => {
  const [activeTab, setActiveTab] = useState<'connectivity' | 'comparison' | 'checklist'>('connectivity');

  return (
    <section 
      id="buyer-guidelines" 
      className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Omana Logo */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-slate-200/80 shadow-sm mb-4">
            <OmanaLogo variant="mark" size="sm" />
            <div className="text-left">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-900 block font-['Plus_Jakarta_Sans']">
                OMANA PROJECTS INTELLIGENCE
              </span>
              <span className="text-[10px] font-semibold text-emerald-700 tracking-wide block">
                2026 Dholera SIR Plot Buyer's Guide
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Key Due Diligence & <span className="text-emerald-700">Connectivity News 2026</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Essential market facts, legal checklists, and mega infrastructure breakthroughs curated by Omana Projects to empower smart land acquisitions in Dholera SIR.
          </p>

          {/* Interactive Navigation Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('connectivity')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'connectivity'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Train className="w-4 h-4 text-emerald-600" />
              <span>September 2026 Connectivity</span>
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'comparison'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Inside vs Outside SIR</span>
            </button>

            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'checklist'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>Pre-Booking Checklist</span>
            </button>
          </div>
        </div>

        {/* Tab 1: September 2026 Connectivity Milestones */}
        {activeTab === 'connectivity' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Highlight Card 1: Semi-High-Speed Rail */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
                
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <Train className="w-3.5 h-3.5 text-emerald-700" />
                    <span>EPC Tendering Phase</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight block">
                      ₹18,901.68 Cr
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Sarkhej-Dholera Semi-High-Speed Railway
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    The semi-high-speed rail corridor tender links Sarkhej (Ahmedabad) directly to the Dholera Central Railway Station. Designed for rapid commuter and cargo transit, drastically reducing inter-city travel time to under 40 minutes.
                  </p>

                  <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>160 km/h Design Speed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Direct Station in SIR TP4</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlight Card 2: Expressway Interchange */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
                
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
                    <Route className="w-3.5 h-3.5 text-teal-700" />
                    <span>Access Controlled Expressway</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight block">
                      ₹124.40 Cr
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Sardar Patel Ring Road Interchange
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    A dedicated high-speed trumpet interchange seamlessly merges the 109 km Ahmedabad-Dholera 4-lane expressway with Ahmedabad's Sardar Patel Ring Road, enabling zero-signal transit from SG Highway to Dholera SIR.
                  </p>

                  <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>45 Minutes Transit Time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Adjacent to Airport Link</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner with Slogans from User Graphics */}
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-7 sm:p-10 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 text-emerald-400 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Invest Today, Build Tomorrow</span>
                </div>
                <h4 className="text-2xl font-black text-white">
                  Your Dream Home, A Smarter Tomorrow
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Clear-title residential and SCO plots in Dholera Smart City backed by Omana Projects. Fully demarcated boundaries and immediate registration.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => onOpenBrochureModal("2026 Connectivity & Price Sheet")}
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  Download Rate Card
                </button>
                <button
                  onClick={onOpenSiteVisitModal}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors border border-white/20"
                >
                  Schedule Site Visit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Inside Dholera SIR vs Outside SIR Comparison Matrix */}
        {activeTab === 'comparison' && (
          <div className="animate-in fade-in duration-300 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Comparative Analysis
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    Inside Dholera SIR vs. Outside SIR — What Every Buyer Should Know
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Understanding the regulatory, infrastructural, and legal differences before committing capital.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <OmanaLogo variant="mark" size="sm" />
                  <span className="text-xs font-semibold text-slate-300">Verified by Omana Projects</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-bold uppercase tracking-wider text-slate-700">
                      <th className="py-4 px-6 w-1/4">Evaluation Parameter</th>
                      <th className="py-4 px-6 w-3/8 text-emerald-900 bg-emerald-50/50">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Inside Dholera SIR (Sanctioned TP)</span>
                        </div>
                      </th>
                      <th className="py-4 px-6 w-3/8 text-slate-700 bg-slate-100/50">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-600" />
                          <span>Outside Dholera SIR (Peripheral)</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-4 px-6 font-bold text-slate-900">Planning & Governance</td>
                      <td className="py-4 px-6 bg-emerald-50/20 text-slate-800 text-xs leading-relaxed">
                        <strong className="text-emerald-900 font-bold block mb-1">Dholera SIR Urban Development Authority (DAUDA)</strong>
                        Sanctioned Town Planning Schemes (TP1 to TP6) with legally carved Final Plots (F-Plots) and designated zoning (Residential, SCO, Industrial).
                      </td>
                      <td className="py-4 px-6 bg-slate-50/30 text-slate-600 text-xs leading-relaxed">
                        <strong className="text-slate-800 font-bold block mb-1">Local Gram Panchayat / Taluka</strong>
                        Private developer layouts without unified master-planning; zoning changes subject to local revenue clearances.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-bold text-slate-900">Smart City Infrastructure</td>
                      <td className="py-4 px-6 bg-emerald-50/20 text-slate-800 text-xs leading-relaxed">
                        <strong className="text-emerald-900 font-bold block mb-1">100% Underground Utility Ducts</strong>
                        SCADA-controlled 24/7 potable water, underground power cables, automated storm drainage, recycled wastewater, and optical ICT conduits.
                      </td>
                      <td className="py-4 px-6 bg-slate-50/30 text-slate-600 text-xs leading-relaxed">
                        <strong className="text-slate-800 font-bold block mb-1">Conventional / Private Borewell</strong>
                        Overhead electricity cables, septic tanks, and dependency on developer's private road maintenance.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-bold text-slate-900">Road Connectivity & Width</td>
                      <td className="py-4 px-6 bg-emerald-50/20 text-slate-800 text-xs leading-relaxed">
                        <strong className="text-emerald-900 font-bold block mb-1">55m & 70m Arterial Town Planning Roads</strong>
                        Wide, multi-lane asphalt TP roads with cycle tracks, dedicated pedestrian pathways, and LED smart solar streetlights.
                      </td>
                      <td className="py-4 px-6 bg-slate-50/30 text-slate-600 text-xs leading-relaxed">
                        <strong className="text-slate-800 font-bold block mb-1">9m to 12m Village Access Roads</strong>
                        Narrow internal access roads; often lack formal widening sanctions from national/state highway bodies.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-bold text-slate-900">Legal Title & Registry</td>
                      <td className="py-4 px-6 bg-emerald-50/20 text-slate-800 text-xs leading-relaxed">
                        <strong className="text-emerald-900 font-bold block mb-1">Clear Freehold Registry with Demarcated F-Plot</strong>
                        Government revenue 7/12 extract clearly identifies the specific Final Plot number; zero risk of title overlap.
                      </td>
                      <td className="py-4 px-6 bg-slate-50/30 text-slate-600 text-xs leading-relaxed">
                        <strong className="text-slate-800 font-bold block mb-1">Requires Rigorous Legal Scrutiny</strong>
                        May involve undivided agricultural share (Binkheti pending) or complex family succession disputes on survey numbers.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-bold text-slate-900">Price & Value Trajectory</td>
                      <td className="py-4 px-6 bg-emerald-50/20 text-slate-800 text-xs leading-relaxed">
                        <strong className="text-emerald-900 font-bold block mb-1">High Institutional Demand & Rapid Appreciation</strong>
                        Driven by Tata's ₹91,000 Cr Semiconductor Fab, upcoming International Airport, and Activation Zone operationalization.
                      </td>
                      <td className="py-4 px-6 bg-slate-50/30 text-slate-600 text-xs leading-relaxed">
                        <strong className="text-slate-800 font-bold block mb-1">Lower Entry Price, Longer Horizon</strong>
                        Lower per-square-yard ticket size, but appreciation is heavily contingent on eventual municipal boundary extensions.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-600">
                  <span className="font-bold text-slate-800">Omana Projects Recommendation:</span> For clear legal safety, assured utility access, and maximum resale liquidity, always prioritize sanctioned TP schemes inside Dholera SIR.
                </div>
                <button
                  onClick={() => onOpenBrochureModal("Inside vs Outside SIR Detailed Comparison")}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition-colors shrink-0"
                >
                  Download Comparison PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Pre-Booking Verification Checklist */}
        {activeTab === 'checklist' && (
          <div className="animate-in fade-in duration-300 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Checklist Pillar 1 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-300 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Land Use & Zoning
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verify whether the plot falls within designated Residential (R1/R2), Mixed-Use SCO, or High-Density development zones in the Dholera SIR Development Plan.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg">
                  ✓ Check Master Plan 2040 Zoning Map
                </div>
              </div>

              {/* Checklist Pillar 2 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-300 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  TP Schemes & Final Plots
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ensure the layout is sanctioned under an official Town Planning Scheme (e.g. TP 4 or TP 1) with an allotted Final Plot (FP) number, not just unverified raw survey land.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg">
                  ✓ Match FP Number with Revenue Record
                </div>
              </div>

              {/* Checklist Pillar 3 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-300 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Road Access & Utilities
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Inspect the on-ground access width (70m / 55m TP road), internal black-top roads, boundary demarcation stones, and proximity to SCADA utility ducts.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg">
                  ✓ On-Ground Physical Verification
                </div>
              </div>

              {/* Checklist Pillar 4 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-300 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Documents & Registry
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Review the 7/12 land revenue extract, NA (Non-Agricultural) order, 30-year legal search report, and confirm immediate sub-registrar sale deed execution.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg">
                  ✓ 100% Clear Title & Immediate Sale Deed
                </div>
              </div>
            </div>

            {/* Verification Support Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
              <div className="space-y-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Omana Projects Legal Assurance
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  Need Our Legal Team to Verify Land Papers?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Every plot in our portfolio undergoes exhaustive title search, DAUDA zoning check, and demarcation inspection before being presented to buyers.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={`tel:${BUSINESS_NAP.primaryPhone}`}
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  Call +91 92171 04219
                </a>
                <button
                  onClick={onOpenSiteVisitModal}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors border border-white/20"
                >
                  Book On-Ground Inspection
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
