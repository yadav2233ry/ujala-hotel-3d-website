import React from 'react';
import { ASSET_IMAGES, BUSINESS_INFO } from '../data/restaurantData';
import { MapPin, Clock, Users, Utensils } from 'lucide-react';

export const RestaurantStory: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#121212] overflow-hidden border-t border-b border-[#C9A45C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C9A45C]">
              <span className="font-hindi text-base text-[#F59A23]">उजाला होटल</span>
              <span aria-hidden="true">·</span>
              <span>Mahimapur, Uttar Pradesh</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#FFF2D9] leading-tight text-balance">
              A Place to Pause and Enjoy
            </h2>

            <p className="text-base sm:text-lg text-[#FFF2D9]/85 leading-relaxed">
              Situated along the active Belwai–Phulpur road in Darbeshpur, Mahimapur, <strong className="text-[#FFF2D9]">Ujala Hotel</strong> provides a reliable, welcoming stop for families, local diners, and road travellers seeking fresh vegetarian meals.
            </p>

            <p className="text-sm sm:text-base text-[#FFF2D9]/75 leading-relaxed">
              Whether you are passing through Uttar Pradesh on a journey or stopping by for a comforting evening dinner, our kitchen focuses purely on vegetarian food — from hearty thalis and simmering curries to piping hot masala chai and freshly fried pakodis.
            </p>

            {/* Verified Feature Points (No fake claims or awards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-[#1a1917] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-[#F59A23]">
                  <Utensils className="w-4 h-4" />
                  <span className="text-sm font-semibold text-[#FFF2D9]">Pure Vegetarian</span>
                </div>
                <p className="text-xs text-[#FFF2D9]/60">
                  Focused entirely on vegetarian food, based on verified diner experiences.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#1a1917] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-[#C9A45C]">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-semibold text-[#FFF2D9]">Family Dining</span>
                </div>
                <p className="text-xs text-[#FFF2D9]/60">
                  Welcoming roadside space for families and groups travelling the route.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#1a1917] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-[#F59A23]">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold text-[#FFF2D9]">Late Hours Stop</span>
                </div>
                <p className="text-xs text-[#FFF2D9]/60">
                  Listed with late 2:00 AM closing to accommodate night travel.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#1a1917] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-[#C9A45C]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-semibold text-[#FFF2D9]">Belwai–Phulpur Rd</span>
                </div>
                <p className="text-xs text-[#FFF2D9]/60">
                  Direct roadside accessibility with parking room for road commuters.
                </p>
              </div>
            </div>

            {/* Address snippet */}
            <div className="pt-2 text-xs text-[#FFF2D9]/60 border-t border-white/10">
              <span>Verified Address: {BUSINESS_INFO.address}</span>
            </div>
          </div>

          {/* Right Visual Column (Layered parallax editorial frame) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative background frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F59A23]/20 via-[#C9A45C]/10 to-transparent rounded-2xl filter blur-xl opacity-70 pointer-events-none" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C9A45C]/30 shadow-2xl bg-[#1a1917]">
                <img
                  src={ASSET_IMAGES.diningAmbience}
                  alt="Welcoming dining atmosphere at Ujala Hotel, Mahimapur"
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-hindi text-xl text-[#F59A23] font-semibold block mb-1">
                    सफर में सुकून भरा भोजन
                  </span>
                  <p className="text-xs text-[#FFF2D9]/80">
                    A welcoming atmosphere for travellers pausing on the Belwai–Phulpur route.
                  </p>
                </div>
              </div>

              {/* Floating Overlaid Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 p-4 rounded-xl bg-[#151515]/95 backdrop-blur-md border border-[#C9A45C]/40 shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F59A23]/20 flex items-center justify-center text-[#F59A23] shrink-0 font-bold text-sm">
                    3.1★
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#FFF2D9]">Google Rated Dining</h4>
                    <p className="text-[11px] text-[#FFF2D9]/65">50 verified customer reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
