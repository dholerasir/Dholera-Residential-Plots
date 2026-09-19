import React from 'react';
import { BUSINESS_NAP, INTERNAL_BLOG_POSTS } from '../data/dholeraData';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, MessageCircle, BookOpen, ArrowUpRight } from 'lucide-react';
import { OmanaLogo } from './OmanaLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top CTA Band */}
      <div className="bg-emerald-900/40 border-b border-emerald-800/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to Secure Your Plot in Dholera Smart City?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Speak directly with an accredited Dholera SIR Town Planning advisor today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_NAP.primaryPhone}`}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Call Now: {BUSINESS_NAP.primaryPhone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_NAP.whatsappNumber}?text=Hello,%20please%20send%20details%20for%20Plots%20In%20Dholera.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & NAP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <OmanaLogo variant="horizontal" theme="dark" size="md" />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Specialized real estate consultancy guiding domestic and international investors to acquire verified, clear-title residential <strong className="text-slate-200">Plots In Dholera</strong> and commercial SCO projects across sanctioned TP-4 and TP-1 schemes in India's pioneering <strong className="text-slate-200">Dholera Smart City</strong>.
            </p>

            <div className="pt-2 text-slate-500 text-[11px] space-y-1">
              <p>✓ Gujarat RERA Compliant Layouts</p>
              <p>✓ 100% Non-Agricultural (N.A.) Residential & SCO Approval</p>
              <p>✓ Immediate Sub-Registrar Sale Deed Registry</p>
            </div>
          </div>

          {/* Properties on dholeraresidentialplot.com */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Properties
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#ridhi-966-1" className="hover:text-emerald-400 transition-colors">
                  Ridhi 966/1 SCO (TP 4-B2)
                </a>
              </li>
              <li>
                <a href="#ridhi-249-2" className="hover:text-emerald-400 transition-colors">
                  Ridhi 249/2 SCO (TP 1)
                </a>
              </li>
              <li>
                <a href="#sidhi-857" className="hover:text-emerald-400 transition-colors">
                  Sidhi 857 Plots (TP 4-B2)
                </a>
              </li>
              <li>
                <a 
                  href="https://dholeraresidentialplot.com/properties" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 font-semibold text-emerald-400"
                >
                  <span>All Properties Page</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#buyer-guidelines" className="hover:text-emerald-400 transition-colors">
                  Buyer's Due Diligence & 2026 News
                </a>
              </li>
              <li>
                <a href="#plots-in-dholera" className="hover:text-emerald-400 transition-colors">
                  Plots In Dholera Showcase
                </a>
              </li>
            </ul>
          </div>

          {/* Internal Blog Links from dholeraresidentialplot.com/blog */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Dholera SIR Blog</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {INTERNAL_BLOG_POSTS.slice(0, 6).map((post) => (
                <li key={post.slug}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors line-clamp-1"
                    title={post.title}
                  >
                    {post.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://dholeraresidentialplot.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 font-semibold text-emerald-400"
                >
                  <span>View All 10+ Blog Guides</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* NAP Quick Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official NAP Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_NAP.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_NAP.primaryPhone}`} className="hover:text-emerald-400">
                  {BUSINESS_NAP.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${BUSINESS_NAP.email}`} className="hover:text-emerald-400">
                  {BUSINESS_NAP.email}
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Legal Disclaimer & RERA */}
        <div className="mt-12 pt-6 border-t border-slate-900 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong>Disclaimer:</strong> {BUSINESS_NAP.reraDisclaimer} All artistic impressions, layout representations, and computer-generated mockups shown on this landing page are indicative for visualization purposes. The final plot dimensions, road widths, and zoning boundaries are governed strictly by the official gazetted Town Planning (TP) maps issued by the Dholera Special Investment Region Development Authority (DSIRDA) and revenue sub-registrar records.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 text-slate-600">
            <p>© {new Date().getFullYear()} {BUSINESS_NAP.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#faqs" className="hover:text-slate-400">Privacy & Terms</a>
              <span>•</span>
              <a href="#contact-us" className="hover:text-slate-400">RERA Inquiries</a>
              <span>•</span>
              <a href="#plots-in-dholera" className="hover:text-slate-400">Plots In Dholera</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
