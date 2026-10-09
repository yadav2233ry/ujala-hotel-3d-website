import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const LocationContact: React.FC = () => {
  return (
    <section id="location" className="relative py-24 sm:py-32 bg-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C9A45C] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#F59A23]" />
            <span>Find & Visit Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#FFF2D9]">
            Location & Contact
          </h2>
          <p className="text-base text-[#FFF2D9]/80 mt-3 leading-relaxed">
            Conveniently located on the Belwai–Phulpur road in Mahimapur, Uttar Pradesh. Open for both dine-in guests and takeaway travelers.
          </p>
        </div>

        {/* 2-Column Location Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#C9A45C]/30 space-y-6">
            <div>
              {/* Hotel Name Lockup */}
              <div className="border-b border-white/10 pb-6 mb-6">
                <span className="font-hindi text-xl text-[#F59A23] font-semibold block mb-1">
                  उजाला होटल
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#FFF2D9]">
                  {BUSINESS_INFO.name}
                </h3>
                <span className="text-xs uppercase tracking-wider text-[#C9A45C] font-medium mt-1 inline-block">
                  Family Restaurant · Pure Vegetarian
                </span>
              </div>

              {/* Detail Items */}
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F59A23]/15 border border-[#F59A23]/30 flex items-center justify-center text-[#F59A23] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-semibold tracking-wider text-[#C9A45C]">
                      Postal & Plus Code Address
                    </h4>
                    <p className="text-sm text-[#FFF2D9] font-medium mt-0.5 leading-snug">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-xs text-[#FFF2D9]/60 mt-1">
                      Plus Code: <span className="font-mono text-[#F59A23]">{BUSINESS_INFO.plusCode}</span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F59A23]/15 border border-[#F59A23]/30 flex items-center justify-center text-[#F59A23] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-semibold tracking-wider text-[#C9A45C]">
                      Telephone
                    </h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-base text-[#FFF2D9] font-semibold hover:text-[#F59A23] transition-colors mt-0.5 inline-block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-[#FFF2D9]/60 mt-0.5">
                      Direct line for table availability & takeaway orders
                    </p>
                  </div>
                </div>

                {/* Closing Time Notice */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F59A23]/15 border border-[#F59A23]/30 flex items-center justify-center text-[#F59A23] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-semibold tracking-wider text-[#C9A45C]">
                      Operating Schedule Notice
                    </h4>
                    <p className="text-sm text-[#FFF2D9] font-medium mt-0.5">
                      Listed Closing Time: <strong className="text-[#F59A23]">2:00 AM</strong>
                    </p>
                    <div className="mt-1 flex items-start gap-1.5 text-xs text-[#FFF2D9]/70 bg-[#25221e] p-2.5 rounded-lg border border-white/5">
                      <AlertCircle className="w-3.5 h-3.5 text-[#C9A45C] shrink-0 mt-0.5" />
                      <span>
                        Notice: As schedules can vary, please call <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="text-[#F59A23] underline">+91 94517 72419</a> to confirm current daily hours before arriving late.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="flex items-center gap-4 pt-2 text-xs text-[#FFF2D9]/80">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F59A23]" />
                    Dine-in Available
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F59A23]" />
                    Takeaway Available
                  </span>
                </div>
              </div>
            </div>

            {/* Three Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#151515] bg-gradient-to-r from-[#F59A23] to-[#C9A45C] hover:from-[#e08915] hover:to-[#b8934a] rounded-lg transition-all shadow cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Restaurant</span>
              </a>

              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#FFF2D9] bg-[#22201d] hover:bg-[#2c2824] border border-[#C9A45C]/40 rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5 text-[#F59A23] fill-current" />
                <span>Get Directions</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 text-xs font-semibold uppercase tracking-wider text-[#C9A45C] hover:text-[#FFF2D9] bg-[#1c1b18] hover:bg-[#22201d] border border-white/10 rounded-lg transition-all cursor-pointer"
                title="View on Google Maps"
                aria-label="View on Google Maps"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Column */}
          <div id="contact" className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#C9A45C]/30 bg-[#191816] shadow-2xl flex flex-col">
            <div className="p-4 bg-[#1e1c19] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-[#FFF2D9]">
                  Mahimapur, Belwai–Phulpur Road (UP 222136)
                </span>
              </div>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#F59A23] hover:underline flex items-center gap-1 font-medium"
              >
                <span>Open Full Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative flex-1 min-h-[380px] w-full bg-[#151515]">
              <iframe
                title="Ujala Hotel Mahimapur Location Map"
                src="https://maps.google.com/maps?q=Darbeshpur,+Mahimapur,+Uttar+Pradesh+222136&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0 filter grayscale contrast-125 invert-[0.88] hue-rotate-180 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                allowFullScreen
              />

              {/* Floating Overlay Card on Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-[#151515]/95 backdrop-blur-md border border-[#C9A45C]/40 shadow-xl pointer-events-auto">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F59A23]/20 flex items-center justify-center text-[#F59A23] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#FFF2D9]">Ujala Hotel · उजाला होटल</h5>
                    <p className="text-[11px] text-[#FFF2D9]/70 truncate">Belwai–Phulpur Rd, Mahimapur</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <a
                    href={BUSINESS_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 text-[11px] font-semibold text-center uppercase tracking-wider text-[#151515] bg-[#F59A23] rounded hover:bg-[#e08915] transition-colors"
                  >
                    Start Navigation
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                    className="px-3 py-1.5 text-[11px] font-semibold text-center text-[#FFF2D9] border border-white/20 rounded hover:bg-white/10 transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
