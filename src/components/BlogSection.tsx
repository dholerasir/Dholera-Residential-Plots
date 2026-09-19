import React from 'react';
import { INTERNAL_BLOG_POSTS } from '../data/dholeraData';
import { BookOpen, ArrowUpRight, Clock, Tag } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section id="dholera-sir-blog" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Dholera SIR Research & Knowledge Base</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Latest Insights & Guides on <span className="text-emerald-700">Plots In Dholera</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Expert articles and market reports from <strong className="text-slate-800 font-semibold">dholeraresidentialplot.com/blog</strong> covering the Tata Semiconductor fab, TP zones, SCO land potential, airport updates, and legal registry processes in <strong className="text-slate-800 font-semibold">Dholera Smart City</strong>.
            </p>
          </div>

          <div>
            <a
              href="https://dholeraresidentialplot.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all"
            >
              <span>Visit Official Blog</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERNAL_BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-start justify-between gap-2"
                  >
                    <span>{post.title}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-emerald-600 transition-colors mt-1" />
                  </a>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-slate-500">
                  Dholera SIR Insights
                </span>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
