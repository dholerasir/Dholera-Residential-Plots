import React from 'react';
import { INFRASTRUCTURE_PILLARS } from '../data/dholeraData';
import { Cpu, Plane, Zap, Gauge, Train, ShieldCheck, ArrowRight } from 'lucide-react';

interface SmartCityInfraProps {
  onOpenBrochureModal: () => void;
}

export const SmartCityInfra: React.FC<SmartCityInfraProps> = ({ onOpenBrochureModal }) => {
  return (
    <section id="dholera-sir-infrastructure" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Focus Keywords */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-4 h-4 text-emerald-600" />
            <span>Transformative Growth Drivers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Every <span className="text-emerald-700">Plot in Dholera Smart City</span> Has Massive Appreciation Potential
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Backed by both Central and Gujarat State Governments under the National Industrial Corridor Development Programme (NICDC), <strong className="text-slate-900 font-semibold">Dholera SIR</strong> integrates global-standard infrastructure before residential construction even commences.
          </p>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INFRASTRUCTURE_PILLARS.map((pillar, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={pillar.image}
                  alt={`${pillar.title} - Dholera SIR Infrastructure`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/90 text-slate-900 shadow-sm backdrop-blur-sm">
                    {pillar.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold text-emerald-300">
                    {pillar.completionTimeline}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/90 text-[10px] font-bold text-slate-950">
                    {pillar.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Appreciation Impact:</span>
                  <span className="font-bold text-emerald-700">{pillar.impactScore}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Master Plan Highlight Box */}
        <div className="mt-14 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Underground Infrastructure Blueprint
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Subterranean Utility Ducts Mean Zero Road Digging Forever in Dholera SIR
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Unlike haphazard urban centers, every residential <strong className="text-white">Plot in Dholera Smart City</strong> is backed by dedicated underground trunk infrastructure: separate lines for drinking water, treated recycled wastewater for gardening, stormwater drainage canals, gas pipelines, electrical cables, and high-bandwidth optical fiber.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenBrochureModal}
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Download Dholera SIR Master Plan PDF</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#plots-in-dholera"
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
              >
                Browse Residential Plots
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
