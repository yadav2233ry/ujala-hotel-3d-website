import React, { useEffect } from 'react';
import { X, Phone, UtensilsCrossed, CheckCircle2 } from 'lucide-react';
import { FoodItem } from '../types/restaurant';
import { BUSINESS_INFO } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: FoodItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (dish) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={dish.name}
    >
      <div
        className="relative max-w-2xl w-full bg-[#181614] border border-[#C9A45C]/40 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-[#FFF2D9] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dish details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Dish Hero Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-transparent to-transparent opacity-90" />

          <div className="absolute bottom-4 left-6 right-6">
            <span className="font-hindi text-xl sm:text-2xl text-[#F59A23] font-semibold block mb-1">
              {dish.hindiName}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#FFF2D9]">
              {dish.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
            <span>{dish.category}</span>
            <span aria-hidden="true">·</span>
            <span>{dish.serviceType}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#F59A23]">Pure Vegetarian</span>
          </div>

          <p className="text-sm sm:text-base text-[#FFF2D9]/85 leading-relaxed">
            {dish.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-[#C9A45C]">
              Preparation & Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {dish.highlights.map((item) => (
                <div
                  key={item}
                  className="p-2.5 rounded-lg bg-[#201e1a] border border-white/5 flex items-center gap-2 text-xs text-[#FFF2D9]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F59A23] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#FFF2D9]/60">
              Freshly cooked on order. Call the restaurant to place takeaway or check current availability.
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#151515] bg-gradient-to-r from-[#F59A23] to-[#C9A45C] hover:from-[#e08915] hover:to-[#b8934a] rounded-lg transition-all shadow whitespace-nowrap cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call to Inquire</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFF2D9] border border-white/15 hover:bg-white/5 rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
