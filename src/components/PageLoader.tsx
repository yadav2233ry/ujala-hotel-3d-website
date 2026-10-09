import React, { useEffect, useState } from 'react';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(finishTimer);
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#151515] transition-opacity duration-700 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={fading}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Animated Brand Emblem */}
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#F59A23]/20 via-[#C9A45C]/10 to-transparent border border-[#C9A45C]/50 flex items-center justify-center shadow-2xl animate-pulse">
          <span className="font-hindi text-3xl font-bold text-[#F59A23]">
            उ
          </span>
          <div className="absolute inset-0 rounded-full border-t-2 border-[#F59A23] animate-spin" />
        </div>

        {/* Text */}
        <div className="space-y-1">
          <h2 className="text-2xl font-serif-display font-bold text-[#FFF2D9] tracking-wider">
            UJALA HOTEL
          </h2>
          <p className="font-hindi text-base text-[#F59A23] font-medium">
            उजाला होटल · महिमपुर
          </p>
        </div>

        {/* Subtle Loading Bar */}
        <div className="w-36 h-0.5 bg-white/10 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-gradient-to-r from-[#F59A23] to-[#C9A45C] w-full animate-[progress_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};
