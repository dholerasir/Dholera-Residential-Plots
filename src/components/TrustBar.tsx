import React from 'react';
import { KEY_METRICS } from '../data/dholeraData';
import { Award, Building2, Map, ShieldCheck, TrendingUp } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const icons = [
    <Map className="w-6 h-6 text-emerald-600" key="map" />,
    <Building2 className="w-6 h-6 text-emerald-600" key="building" />,
    <TrendingUp className="w-6 h-6 text-emerald-600" key="trending" />,
    <ShieldCheck className="w-6 h-6 text-emerald-600" key="shield" />,
    <Award className="w-6 h-6 text-emerald-600" key="award" />,
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-8 relative shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            India's First Greenfield Industrial Smart City Under DMIC
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Why Every Savvy Investor Is Booking a Plot in Dholera SIR
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {KEY_METRICS.map((metric, index) => (
            <div 
              key={index} 
              className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                {icons[index % icons.length]}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {metric.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
