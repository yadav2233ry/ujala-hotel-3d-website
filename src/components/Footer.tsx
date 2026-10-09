import React from 'react';
import { ArrowUp, Phone, MapPin, Navigation, ExternalLink, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0d0d0d] text-[#FFF2D9] pt-20 pb-12 border-t border-[#C9A45C]/20 overflow-hidden">
      {/* Subtle Gold Ambient Glow */}
      <div className="ambient-gold-glow w-[500px] h-[300px] bottom-0 left-1/2 -translate-x-1/2 opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Introduction */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#F59A23]/20 border border-[#C9A45C]/50 flex items-center justify-center text-[#C9A45C] font-bold">
                <span className="font-hindi text-base">उ</span>
              </div>
              <div>
                <span className="text-2xl font-serif-display font-bold tracking-tight text-[#FFF2D9]">
                  Ujala Hotel
                </span>
                <span className="font-hindi text-lg text-[#F59A23] ml-2 font-normal">
                  उजाला होटल
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FFF2D9]/75 max-w-sm leading-relaxed">
              Family restaurant located in Mahimapur, Uttar Pradesh. Serving authentic Indian vegetarian meals, hearty thalis, fresh rotis, pakodi, and hot masala chai along the Belwai–Phulpur road.
            </p>

            <div className="flex items-center gap-4 text-xs text-[#C9A45C]">
              <span>Dine-in Available</span>
              <span aria-hidden="true">·</span>
              <span>Takeaway Orders</span>
              <span aria-hidden="true">·</span>
              <span>Pure Vegetarian</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF2D9]/80">
              <li>
                <a href="#home" className="hover:text-[#F59A23] transition-colors">Home</a>
              </li>
              <li>
                <a href="#food-highlights" className="hover:text-[#F59A23] transition-colors">Food Highlights</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F59A23] transition-colors">Food Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F59A23] transition-colors">About Ujala Hotel</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F59A23] transition-colors">Customer Reviews (3.1★)</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F59A23] transition-colors">Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact & Map Directions */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
              Official Location & Inquiries
            </h4>

            <div className="space-y-2 text-sm text-[#FFF2D9]/80">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59A23] shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F59A23] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[#F59A23] transition-colors font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#151515] bg-[#F59A23] hover:bg-[#e08915] rounded-md transition-colors whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5 fill-current" />
                <span>Google Directions</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#FFF2D9] border border-white/15 hover:border-white/30 rounded-md transition-colors"
              >
                <span>Google Listing</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Smooth Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF2D9]/60">
          <div>
            © {new Date().getFullYear()} Ujala Hotel (उजाला होटल). Mahimapur, Uttar Pradesh. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#FFF2D9]/50">
              Price Range: ₹1–₹1,000 / person · Verified details
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1e1c19] hover:bg-[#2a2723] border border-white/10 hover:border-[#C9A45C]/50 text-[#FFF2D9] transition-all cursor-pointer group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#F59A23]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
