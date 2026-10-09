import React, { useState, useRef } from 'react';
import { Sparkles, UtensilsCrossed, Eye } from 'lucide-react';
import { FOOD_HIGHLIGHTS } from '../data/restaurantData';
import { FoodItem } from '../types/restaurant';

interface FoodHighlightsProps {
  onSelectDish: (dish: FoodItem) => void;
}

interface TiltCardProps {
  dish: FoodItem;
  index: number;
  onSelect: (dish: FoodItem) => void;
}

const TiltCard: React.FC<TiltCardProps> = ({ dish, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt angles
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(dish)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className="glass-card rounded-xl overflow-hidden group cursor-pointer transition-shadow duration-300 flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1f1d1a]">
        <img
          src={dish.image}
          alt={`${dish.name} - ${dish.hindiName}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Scrim overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Category Label (Unboxed text) */}
        <div className="absolute top-3 left-3 text-xs tracking-wider uppercase font-semibold text-[#FFF2D9]/90 drop-shadow">
          <span>{dish.category}</span>
        </div>

        {/* Hover Inspect Icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#FFF2D9] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Eye className="w-4 h-4 text-[#F59A23]" />
        </div>

        {/* Hindi Title Overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between">
          <span className="font-hindi text-lg font-semibold text-[#F59A23] drop-shadow-md">
            {dish.hindiName}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-serif-display font-semibold text-[#FFF2D9] group-hover:text-[#F59A23] transition-colors mb-2">
            {dish.name}
          </h3>

          <p className="text-sm text-[#FFF2D9]/75 leading-relaxed line-clamp-3 mb-4">
            {dish.description}
          </p>
        </div>

        {/* Highlights as unboxed metadata with dot separators */}
        <div className="pt-4 border-t border-white/10 mt-auto">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#C9A45C]/90">
            {dish.highlights.map((item, idx) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {idx < dish.highlights.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-[#FFF2D9]/60">
            <span>{dish.serviceType}</span>
            <span className="text-[#F59A23] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium">
              View details →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FoodHighlights: React.FC<FoodHighlightsProps> = ({ onSelectDish }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Thali', 'Curry', 'Breads & Rice', 'Snacks & Chai'];

  const filteredDishes =
    selectedCategory === 'All'
      ? FOOD_HIGHLIGHTS
      : FOOD_HIGHLIGHTS.filter((dish) => dish.category === selectedCategory);

  return (
    <section id="food-highlights" className="relative py-24 sm:py-32 bg-[#151515] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="ambient-gold-glow w-[500px] h-[500px] -top-32 -left-32" />
      <div className="ambient-gold-glow w-[600px] h-[600px] -bottom-32 -right-32" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C9A45C] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59A23]" />
            <span>Customer Review Mentions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#FFF2D9] mb-4 text-balance">
            Food Highlights
          </h2>

          <p className="text-base sm:text-lg text-[#FFF2D9]/80 leading-relaxed max-w-2xl">
            Popular vegetarian items frequently mentioned in customer reviews at Ujala Hotel. Fresh, hearty roadside flavours prepared daily for local diners and highway travellers.
          </p>

          <p className="text-xs text-[#C9A45C]/80 mt-2 italic">
            * Note: These are review-mentioned food highlights, not a confirmed complete menu. Prices are not listed to preserve verified accuracy.
          </p>
        </div>

        {/* Category Filter Tabs (Functional interactive segmented control) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 bg-[#1f1d1a]/80 border border-white/10 rounded-xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#F59A23] to-[#C9A45C] text-[#151515] shadow-md font-semibold'
                  : 'text-[#FFF2D9]/70 hover:text-[#FFF2D9] hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredDishes.map((dish, index) => (
            <TiltCard
              key={dish.id}
              dish={dish}
              index={index}
              onSelect={onSelectDish}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-xs text-[#FFF2D9]/60 max-w-xl mx-auto">
          <p>
            All dishes are 100% vegetarian. Prepared hot on order for dine-in patrons and packaged neatly for takeaway travellers.
          </p>
        </div>
      </div>
    </section>
  );
};
