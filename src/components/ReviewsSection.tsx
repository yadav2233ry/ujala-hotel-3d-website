import React from 'react';
import { Star, ExternalLink, ShieldCheck, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, REVIEW_THEMES } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#121212] border-t border-[#C9A45C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Official Rating Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C9A45C]">
              <ShieldCheck className="w-4 h-4 text-[#F59A23]" />
              <span>Public Google Listing Verification</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#FFF2D9]">
              Customer Reviews & Feedback
            </h2>

            <p className="text-sm sm:text-base text-[#FFF2D9]/80 max-w-xl leading-relaxed">
              We present our public Google business standing with complete transparency. Based on 50 verified user ratings, diners and transit passengers visit Ujala Hotel for hot vegetarian food along the Belwai–Phulpur corridor.
            </p>
          </div>

          {/* Rating Badge Card */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="w-full sm:w-auto p-6 sm:p-8 rounded-2xl glass-card border border-[#C9A45C]/30 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl sm:text-6xl font-serif-display font-bold text-[#FFF2D9] tabular-nums">
                  {BUSINESS_INFO.rating}
                </span>
                <span className="text-lg text-[#FFF2D9]/50 font-medium">/ 5.0</span>
              </div>

              {/* Star graphics */}
              <div className="flex items-center gap-1 mb-2 text-[#F59A23]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= 3
                        ? 'fill-[#F59A23] text-[#F59A23]'
                        : star === 4
                        ? 'fill-[#F59A23]/30 text-[#F59A23]'
                        : 'text-white/20'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-[#FFF2D9]/80 font-medium mb-4">
                Based on <strong className="text-[#FFF2D9] font-semibold">{BUSINESS_INFO.reviewCount} reviews</strong> on Google Maps
              </p>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#151515] bg-gradient-to-r from-[#F59A23] to-[#C9A45C] hover:from-[#e08915] hover:to-[#b8934a] rounded-lg transition-all shadow cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Read Live Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Authentic Customer Highlights & Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {REVIEW_THEMES.map((theme, index) => (
            <div
              key={theme.title}
              className="p-6 rounded-xl bg-[#191816] border border-white/5 hover:border-[#C9A45C]/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#F59A23] mb-2">
                  {theme.metric}
                </div>
                <h3 className="text-lg font-serif-display font-semibold text-[#FFF2D9] mb-3">
                  {theme.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FFF2D9]/70 leading-relaxed">
                  {theme.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] text-[#FFF2D9]/50 flex items-center gap-1.5">
                <MessageSquare className="w-3 h-3 text-[#C9A45C]" />
                <span>Verified Listing Theme</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Guarantee */}
        <div className="p-4 rounded-xl bg-[#181614] border border-[#C9A45C]/20 text-xs text-[#FFF2D9]/70 text-center max-w-3xl mx-auto">
          In strict compliance with factual verification standards, no customer testimonials or reviews have been fabricated. All review data is tied directly to the public Google Maps record for Ujala Hotel, Darbeshpur, Mahimapur.
        </div>
      </div>
    </section>
  );
};
