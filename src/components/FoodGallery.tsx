import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types/restaurant';
import { Camera, ZoomIn, Info } from 'lucide-react';

interface FoodGalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const FoodGallery: React.FC<FoodGalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Views' },
    { id: 'thali', label: 'Thali & Platters' },
    { id: 'curry', label: 'Curries & Gravies' },
    { id: 'snacks', label: 'Snacks & Chai' },
    { id: 'dining', label: 'Dining Space' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C9A45C] mb-3">
              <Camera className="w-3.5 h-3.5 text-[#F59A23]" />
              <span>Visual Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#FFF2D9]">
              Food & Atmosphere Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#FFF2D9]/75 mt-3 leading-relaxed">
              Curated imagery illustrating the dishes and family dining environment. Click any image to view details in high definition.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1e1c19] border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#F59A23] text-[#151515] font-semibold shadow'
                    : 'text-[#FFF2D9]/70 hover:text-[#FFF2D9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Illustrative Imagery Transparency Note (Complying with user brief) */}
        <div className="mb-8 p-3.5 rounded-lg bg-[#201e1a]/80 border border-[#C9A45C]/20 flex items-start gap-2.5 text-xs text-[#FFF2D9]/75 max-w-3xl">
          <Info className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
          <p>
            Transparency note: Food and dining photographs displayed are high-fidelity illustrative representations of dishes prepared and served at Ujala Hotel to assist guests in choosing dishes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer border border-[#C9A45C]/20 bg-[#1a1917] transition-all duration-300 hover:border-[#F59A23]/60 hover:shadow-2xl ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Inspect Overlay Trigger */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#FFF2D9] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-4 h-4 text-[#F59A23]" />
                </div>

                {/* Bottom Captions */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-hindi text-[#F59A23] font-semibold text-base sm:text-lg">
                      {item.hindiTitle}
                    </span>
                    <span aria-hidden="true" className="text-white/30">·</span>
                    <span className="text-xs uppercase tracking-wider text-[#C9A45C]">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif-display font-semibold text-[#FFF2D9]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FFF2D9]/70 mt-1 line-clamp-2 max-w-lg">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
