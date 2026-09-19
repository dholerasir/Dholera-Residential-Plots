import React, { useState } from 'react';
import { FEATURED_PLOTS } from '../data/dholeraData';
import { PropertyPlot } from '../types';
import { OmanaLogo } from './OmanaLogo';
import { 
  Check, 
  MapPin, 
  Download, 
  Share2, 
  Compass, 
  Layers, 
  ChevronRight, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

interface PropertyShowcaseProps {
  onSelectPlotForBrochure: (plotTitle: string) => void;
  onSelectPlotForVisit: (plotTitle: string) => void;
}

export const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({
  onSelectPlotForBrochure,
  onSelectPlotForVisit
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const types = ['All', 'SCO (Shop-Cum-Office)', 'Residential Plot'];

  const filteredPlots = selectedType === 'All' 
    ? FEATURED_PLOTS 
    : FEATURED_PLOTS.filter(p => p.propertyType === selectedType);

  const handleCopyAnchor = (slug: string, id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="plots-in-dholera" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <OmanaLogo variant="mark" size="sm" className="w-4 h-4" />
              <span>Omana Projects Portfolio • DholeraResidentialPlot.com</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Featured <span className="text-emerald-700">Plots In Dholera</span> – SCO & Residential Schemes
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Explore government-sanctioned Shop-Cum-Office (SCO) and premium residential plots in <strong className="text-slate-800 font-semibold">Dholera Smart City</strong>. Clear titles, N.A. status, and strategic positions on 70M, 55M, and 48M Town Planning roads in TP-4 and TP-1.
            </p>
          </div>

          {/* Type Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  selectedType === type
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {type === 'All' ? 'All Projects' : type}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid with Anchor URLs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {filteredPlots.map((plot: PropertyPlot) => (
            <article 
              key={plot.id} 
              id={plot.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col scroll-mt-24"
            >
              {/* Image & Status Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={plot.image}
                  alt={`${plot.title} - Plots In Dholera Smart City`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                {/* Top Overlay Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold shadow-md ${
                    plot.status === 'Available'
                      ? 'bg-emerald-500 text-slate-950 animate-pulse'
                      : 'bg-rose-500 text-white'
                  }`}>
                    {plot.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/80 text-white backdrop-blur-sm border border-white/20">
                    {plot.propertyType}
                  </span>
                </div>

                {/* Direct Anchor URL Share Button */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => handleCopyAnchor(plot.slug, plot.id)}
                    title="Copy Anchor Link for this Property"
                    className="p-2 rounded-full bg-slate-900/70 hover:bg-emerald-600 text-white backdrop-blur-sm transition-colors text-xs flex items-center gap-1.5"
                    aria-label={`Copy link for ${plot.title}`}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    {copiedId === plot.id && (
                      <span className="text-[11px] font-bold pr-1">Link Copied!</span>
                    )}
                  </button>
                </div>

                {/* Bottom Image Info: Price & Rate */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold block">
                      Investment Status
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-white">
                      {plot.startingPrice}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-300 block">TP Scheme</span>
                    <span className="text-xs font-bold text-emerald-300">
                      {plot.tpScheme}
                    </span>
                  </div>
                </div>
              </div>

              {/* Property Details Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="line-clamp-1">{plot.location}</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                    <a href={`#${plot.id}`} className="hover:underline">
                      {plot.title}
                    </a>
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 italic">
                    "{plot.tagline}"
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {plot.description}
                  </p>
                </div>

                {/* Available Plot Sizes */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Configurations</span>
                    <span className="text-emerald-700 font-semibold">Total: {plot.totalArea}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {plot.sizes.map((sz, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] font-semibold text-slate-800 shadow-2xs"
                      >
                        {sz}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Specifications & Features */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Scheme Highlights
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {plot.features.slice(0, 3).map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dimensions and Road Access */}
                <div className="flex items-center justify-between text-[11px] py-1.5 px-2.5 bg-emerald-50/50 rounded-lg text-slate-700 border border-emerald-100">
                  <div>
                    <span className="text-slate-500">Road: </span>
                    <strong className="text-slate-900">{plot.boundaryRoad}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Status: </span>
                    <strong className={plot.status === 'Available' ? 'text-emerald-700' : 'text-slate-700'}>{plot.status}</strong>
                  </div>
                </div>

                {/* Call to Actions for this Property */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectPlotForBrochure(plot.title)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors shadow-sm"
                    id={`btn-brochure-${plot.id}`}
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Price Sheet</span>
                  </button>

                  <button
                    onClick={() => onSelectPlotForVisit(plot.title)}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors shadow-sm"
                    id={`btn-visit-${plot.id}`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Site Visit</span>
                  </button>
                </div>

                {/* Direct Anchor URL badge & Original Link */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                  <a 
                    href={`#${plot.id}`}
                    className="font-semibold text-slate-400 hover:text-emerald-600 inline-flex items-center gap-1"
                  >
                    <span>Anchor: #{plot.id}</span>
                  </a>
                  <a
                    href={plot.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-0.5"
                  >
                    <span>Official Page</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner for Custom Inquiries */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-emerald-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Looking for Bulk / Commercial Land?
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
              Need a 1,000+ Sq. Yd Commercial or Farm Plot in Dholera SIR?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              We provide tailored land acquisition across Industrial, Commercial High-Street, and Hospitality zones in Dholera Smart City with full NA/NOC due diligence.
            </p>
          </div>
          <a
            href="#contact-us"
            className="shrink-0 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm shadow-md transition-transform hover:scale-105"
          >
            Request Custom Allotment
          </a>
        </div>

      </div>
    </section>
  );
};
