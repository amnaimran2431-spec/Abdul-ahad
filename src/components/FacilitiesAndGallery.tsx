import React, { useState } from 'react';
import { GALLERY_ITEMS, HOSPITAL_INFO } from '../data/omcData';
import { GalleryImage } from '../types';
import { Maximize2, X, Sparkles, Building2, Check } from 'lucide-react';

export const FacilitiesAndGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'consultation' | 'clinical' | 'spaces'>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#FAFBFD] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800">
            <span>Environment &amp; Atmosphere</span>
            <span aria-hidden="true">·</span>
            <span className="font-urdu normal-case font-bold" dir="rtl">ہسپتال کا ماحول</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Clean, Tranquil Healthcare Spaces
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A serene, organized clinical environment at Chungi Amar Sidhu designed to foster patient comfort, privacy, and focused medical dialogue.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
            <h3 className="font-editorial text-lg font-bold text-slate-900 mb-2">Private Consultation Rooms</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Quiet, confidential consultation suites where physicians and patients can discuss symptoms, review scans, and plan care without distractions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
            <h3 className="font-editorial text-lg font-bold text-slate-900 mb-2">Comfortable Waiting Areas</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Airy and well-ventilated reception lounges prioritizing patient comfort and clean hygienic seating while awaiting appointments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs">
            <h3 className="font-editorial text-lg font-bold text-slate-900 mb-2">Structured Care Flow</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Organized patient registration, clinical review, and clear follow-up scheduling coordinated by our hospital team.
            </p>
          </div>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8 p-1 bg-slate-200/60 rounded-lg max-w-fit mx-auto">
          {[
            { id: 'all', label: 'All Views' },
            { id: 'consultation', label: 'Consultation Suites' },
            { id: 'clinical', label: 'Clinical Rooms' },
            { id: 'spaces', label: 'Waiting Lounges' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              onClick={() => setLightboxImage(item)}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2 rounded-full bg-white/90 text-slate-900 shadow-xs">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white">
                <h4 className="font-editorial text-base font-bold text-slate-900 line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {item.caption}
                </p>
                <p className="text-[10px] text-slate-400 mt-2">
                  * Illustrative environment representation
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-700 relative animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={lightboxImage.imageUrl}
              alt={lightboxImage.title}
              className="w-full max-h-[70vh] object-cover object-center"
              referrerPolicy="no-referrer"
            />

            <div className="p-5 bg-white">
              <h3 className="font-editorial text-xl font-bold text-slate-900">
                {lightboxImage.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {lightboxImage.caption}
              </p>
              <p className="text-[11px] text-slate-400 mt-2">
                * Photography illustrates representative healthcare environment for OMC Lahore.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
