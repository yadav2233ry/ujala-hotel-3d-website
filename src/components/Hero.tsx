import React from 'react';
import { ThaliScene3D } from './ThaliScene3D';
import { Utensils, Navigation2, ArrowDown, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreFood: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFood }) => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#151515]">
      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <ThaliScene3D />
      </div>

      {/* Radial Vignette & Atmospheric Gradients (Keeps text legible without muddying 3D) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#151515] via-transparent to-[#151515]/70 z-10" />
      <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-[#151515]/30 to-[#151515]/90 z-10" />

      {/* Semantic DOM Overlay (Z-20) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 min-h-screen flex flex-col justify-between">
        {/* Top spacer to balance under header */}
        <div className="hidden sm:block" />

        {/* Hero Content Center / Left Align Split */}
        <div className="max-w-3xl pointer-events-auto">
          {/* Unboxed Metadata Kicker (Anti-slop zero pill discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-[#C9A45C] mb-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F59A23]" />
              Mahimapur, Uttar Pradesh
            </span>
            <span aria-hidden="true">·</span>
            <span>Family Restaurant</span>
            <span aria-hidden="true">·</span>
            <span>Pure Vegetarian</span>
          </div>

          {/* Hindi Callout Headline */}
          <div className="font-hindi text-2xl sm:text-3xl md:text-4xl text-[#F59A23] font-semibold tracking-wide mb-2 drop-shadow-sm">
            “स्वाद जो दिल जीत ले”
          </div>

          {/* Main English Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-display font-bold tracking-tight text-[#FFF2D9] leading-[1.08] mb-6 text-balance">
            Authentic Vegetarian Flavours
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#FFF2D9]/80 font-normal leading-relaxed max-w-2xl mb-8">
            Discover comforting Indian vegetarian food at <strong className="text-[#FFF2D9] font-medium">Ujala Hotel</strong>, Mahimapur. Freshly prepared thalis, rich curries, puffed rotis, and steaming hot chai on the Belwai–Phulpur road.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onExploreFood}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#151515] bg-gradient-to-r from-[#F59A23] via-[#e28e1d] to-[#C9A45C] hover:from-[#e08915] hover:to-[#b8934a] rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Utensils className="w-4 h-4 text-[#151515]" />
              <span>Explore Food</span>
            </button>

            <a
              href={BUSINESS_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-medium tracking-wider text-[#FFF2D9] bg-[#22201e]/80 hover:bg-[#2e2a25] border border-[#C9A45C]/40 hover:border-[#F59A23] rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <Navigation2 className="w-4 h-4 text-[#F59A23] fill-current" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Quiet Trust Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#FFF2D9]/70">
            <div>
              <span className="text-[#C9A45C] font-semibold">Google Rating:</span> 3.1 / 5 (50 reviews)
            </div>
            <span aria-hidden="true">·</span>
            <div>
              <span className="text-[#C9A45C] font-semibold">Service:</span> Dine-in & Takeaway
            </div>
            <span aria-hidden="true">·</span>
            <div>
              <span className="text-[#C9A45C] font-semibold">Price Range:</span> ₹1–₹1,000 / person
            </div>
          </div>
        </div>

        {/* Bottom Interactive HUD Indicator */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF2D9]/60 pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F59A23]/80" />
            <span>Interactive 3D Scene · Move cursor or drag to view angle</span>
          </div>

          <button
            type="button"
            onClick={onExploreFood}
            className="flex items-center gap-2 text-[#C9A45C] hover:text-[#F59A23] transition-colors group cursor-pointer"
            aria-label="Scroll to featured dishes"
          >
            <span>Scroll to discover dishes</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
