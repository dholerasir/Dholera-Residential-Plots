import React from 'react';
import { Car, Video, CheckCircle2, PhoneCall, Calendar, MapPin } from 'lucide-react';
import { BUSINESS_NAP } from '../data/dholeraData';

interface SiteVisitBannerProps {
  onOpenSiteVisitModal: () => void;
}

export const SiteVisitBanner: React.FC<SiteVisitBannerProps> = ({ onOpenSiteVisitModal }) => {
  return (
    <section id="site-visit" className="py-16 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-700/70 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Car className="w-4 h-4 text-emerald-400" />
                <span>Complimentary VIP Transportation</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Inspect Real Ground Progress – Book a Free Site Visit to <span className="text-emerald-400">Dholera Smart City</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nothing matches seeing the 4-lane expressway, massive Tata semiconductor construction, and actual demarcated residential plots with your own eyes. We arrange complimentary chauffeur-driven pickup and drop from Ahmedabad, 7 days a week.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Doorstep Pickup from Ahmedabad Airport / SG Highway</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Accompanied by Senior Land Revenue Specialist</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>On-spot GPS Coordinates & Revenue Map Verification</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <Video className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Live 360° Drone Tour Option for NRIs & Remote Buyers</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenSiteVisitModal}
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Site Visit (Pick Your Date)</span>
                </button>

                <a
                  href={`tel:${BUSINESS_NAP.primaryPhone}`}
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 flex items-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call {BUSINESS_NAP.primaryPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-950/60 rounded-2xl border border-slate-800 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Daily Site Trips Available</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Morning Slot: 9:30 AM | Afternoon Slot: 1:30 PM
                </p>
              </div>
              <div className="text-xs text-emerald-300 font-semibold bg-emerald-950/80 px-3 py-1.5 rounded-md border border-emerald-800/80">
                Over 180+ Families Visited This Month
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
