import React from 'react';
import { Map, CheckCircle, ArrowRight, Layers, Building, Trees, Landmark } from 'lucide-react';

interface ZoneExplainerProps {
  onOpenBrochureModal: (defaultPlot?: string) => void;
}

export const ZoneExplainer: React.FC<ZoneExplainerProps> = ({ onOpenBrochureModal }) => {
  const zones = [
    {
      name: "Town Planning 1 (TP1)",
      tag: "Immediate Development & Living",
      status: "Sanctioned & Active Registry",
      color: "border-emerald-500",
      icon: <Building className="w-6 h-6 text-emerald-600" />,
      features: [
        "First sanctioned residential cluster in Dholera SIR",
        "Direct connection to central spine & metro alignment",
        "Demarcated residential plotting with internal asphalt roads",
        "Sub-registrar registry open with clear NA title deeds"
      ],
      idealFor: "End-use residential homes, villas, and medium-term capital gains"
    },
    {
      name: "Town Planning 2 (TP2)",
      tag: "Expressway & High-Growth Belt",
      status: "Prime Investment Focus",
      color: "border-teal-500",
      icon: <Landmark className="w-6 h-6 text-teal-600" />,
      features: [
        "Frontage along the 109 km Ahmedabad-Dholera Expressway",
        "Adjacent to designated Knowledge & IT / Financial City",
        "Spacious residential configurations (150 to 500 Sq. Yd)",
        "Rapid land value compounding as expressway traffic opens"
      ],
      idealFor: "High-net-worth investors, NRIs, and long-term asset building"
    },
    {
      name: "Activation Area (22.5 Sq. Km)",
      tag: "Operational Smart City Core",
      status: "100% Utilities Live",
      color: "border-cyan-500",
      icon: <Trees className="w-6 h-6 text-cyan-600" />,
      features: [
        "Houses the iconic ABCD Administrative Command Center",
        "Operating water treatment plant & sewage recycling",
        "Torrent Power 24x7 electrical sub-station commissioned",
        "Direct proximity to Tata ₹91K Cr Semiconductor Mega Fab"
      ],
      idealFor: "Corporate executives, tech managers, and high-yield rentals"
    }
  ];

  return (
    <section id="town-planning-zones" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Map className="w-4 h-4 text-emerald-700" />
            <span>Master Plan Demarcation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Understanding Town Planning Schemes in <span className="text-emerald-700">Dholera SIR</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Every legal <strong className="text-slate-900 font-semibold">Plot in Dholera</strong> is developed within gazetted Town Planning (TP) Schemes. Unlike unorganized agricultural land, TP schemes ensure your plot receives dedicated civic services, legal immunity, and permanent boundary pegs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {zones.map((zone, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-7 border-t-4 ${zone.color} border-slate-200 border-x border-b shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    {zone.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {zone.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {zone.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                  {zone.tag}
                </p>

                <div className="mt-6 space-y-3">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Key Zone Characteristics
                  </span>
                  <ul className="space-y-2.5">
                    {zone.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="text-xs text-slate-500 mb-3">
                  <strong className="text-slate-800">Best Suited For:</strong> {zone.idealFor}
                </div>
                <button
                  onClick={() => onOpenBrochureModal(zone.name)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Request {zone.name} Inventory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
