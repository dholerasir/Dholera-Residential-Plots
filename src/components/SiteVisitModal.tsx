import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2, Car, Users, Phone } from 'lucide-react';
import { BUSINESS_NAP } from '../data/dholeraData';
import { OmanaLogo } from './OmanaLogo';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [pickupPoint, setPickupPoint] = useState('Ahmedabad Airport (AMD)');
  const [travelers, setTravelers] = useState('2 Persons');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setName('');
    setPhone('');
    setDate('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-slate-900 text-white p-6 sm:p-7 pr-14">
          <div className="flex items-center justify-between gap-4 mb-3 pb-3 border-b border-slate-800">
            <OmanaLogo variant="horizontal" theme="dark" size="sm" />
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
              <Car className="w-3 h-3" />
              <span>Complimentary Tour</span>
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Book Free Dholera SIR Site Visit
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Chauffeur-driven AC cab pick-up from Ahmedabad & guided on-ground tour of TP1, TP4, and expressway corridors.
          </p>
        </div>

        <div className="p-6 sm:p-7">
          {isBooked ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Site Visit Confirmed!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Thank you, <strong className="text-slate-900">{name}</strong>. Our logistics coordinator will call you at <strong className="text-slate-900">{phone}</strong> to confirm your vehicle allocation for <strong className="text-slate-900">{date || "your selected date"}</strong> from {pickupPoint}.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  WhatsApp / Phone Number *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-100 text-slate-700 text-xs font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full px-3.5 py-2.5 text-sm rounded-r-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Number of Persons
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 Persons">2 Persons</option>
                    <option value="3-4 Persons (Family)">3-4 Persons (Family)</option>
                    <option value="5+ Group / Investor Delegation">5+ Group Delegation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Pickup Location
                </label>
                <select
                  value={pickupPoint}
                  onChange={(e) => setPickupPoint(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-slate-50"
                >
                  <option value="Ahmedabad Airport (AMD)">Ahmedabad Airport (Terminal 1 or 2)</option>
                  <option value="SG Highway (ISKCON / Pakwan Cross Road)">SG Highway (ISKCON / Pakwan Cross Road)</option>
                  <option value="Kalupur Railway Station">Ahmedabad Central Railway Station (Kalupur)</option>
                  <option value="Directly at Dholera Site Office">I will drive directly to Dholera Site Office</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm VIP Site Visit Reservation</span>
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                * Zero charges for vehicle or site escort. Lunch and refreshments provided during the tour.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
