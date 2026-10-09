import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { GalleryItem } from '../types/restaurant';

interface ImageLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative max-w-4xl w-full bg-[#151515] border border-[#C9A45C]/30 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-[#FFF2D9] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close image viewer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High Res Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Details Footer */}
        <div className="p-6 bg-[#181715] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-hindi text-[#F59A23] font-semibold text-lg">{item.hindiTitle}</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="text-xs uppercase tracking-wider text-[#C9A45C]">{item.category}</span>
            </div>
            <h3 className="text-xl font-serif-display font-bold text-[#FFF2D9]">{item.title}</h3>
            <p className="text-sm text-[#FFF2D9]/70 mt-1 max-w-xl">{item.caption}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#151515] bg-gradient-to-r from-[#F59A23] to-[#C9A45C] rounded-lg transition-all hover:brightness-110 cursor-pointer whitespace-nowrap shrink-0"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
