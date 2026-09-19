import React, { useState } from 'react';
import { FAQS } from '../data/dholeraData';
import { HelpCircle, ChevronDown, ChevronUp, FileText } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Investment', 'Legalities', 'Location', 'Site Visit'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions About <span className="text-emerald-700">Plots In Dholera</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Everything you must know regarding legal clearances, Town Planning sanctions, title searches, and land acquisition inside <strong className="text-slate-900 font-semibold">Dholera SIR Smart City</strong>.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-emerald-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 bg-white hover:bg-slate-50 flex items-center justify-between gap-4 font-bold text-slate-900 text-base transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <span className="p-1 rounded-full bg-slate-100 text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 bg-slate-50/50 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-xs font-semibold text-emerald-700">
                      Tag: {faq.category} clearance in Dholera SIR
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
