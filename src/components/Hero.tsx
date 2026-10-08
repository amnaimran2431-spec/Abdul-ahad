import React from 'react';
import { Calendar, Phone, MapPin, ShieldCheck, ArrowRight, Activity } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/omcData';

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Top Eyebrow / Identity Label */}
            <div className="inline-flex flex-wrap items-center gap-2.5 text-xs text-slate-600 font-medium bg-slate-100/80 border border-slate-200/80 px-3.5 py-1.5 rounded-full">
              <span className="flex items-center gap-1.5 text-teal-800 font-semibold">
                <Activity className="w-3.5 h-3.5 text-teal-600" />
                Orthopaedic &amp; Spine Surgery Unit LGH
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">Lahore</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="font-urdu text-teal-800 font-bold" dir="rtl">او ایم سی ہسپتال</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] text-balance">
                Expert Orthopaedic &amp; Spine Care, Focused on Your Recovery
              </h1>
              <p className="font-urdu text-lg sm:text-xl text-teal-800/90 font-medium pt-1" dir="rtl">
                ہڈیوں اور ریڑھ کی ہڈی کے امراض کا معیاری معائنہ اور علاج
              </p>
            </div>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Orthopaedic Hospital &amp; Medical Complex (OMC) provides specialized clinical consultations, thorough diagnostic evaluations, and structured treatment plans for back, neck, joint, and bone health.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-medium text-sm sm:text-base shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap group"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={HOSPITAL_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm sm:text-base hover:bg-slate-50 transition-all whitespace-nowrap shadow-2xs"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call {HOSPITAL_INFO.phone}</span>
              </a>
            </div>

            {/* Trust and Location Markers */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Hospital Location</h4>
                  <p className="text-xs text-slate-500 leading-tight">Chungi Amar Sidhu, LGH, Lahore</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Clinical Focus</h4>
                  <p className="text-xs text-slate-500 leading-tight">Spine, Joint &amp; Bone Health</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Activity className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Direct Contact</h4>
                  <p className="text-xs text-slate-500 leading-tight">0333 7272975</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-slate-200/60 to-teal-100/50 -rotate-1 pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden bg-white shadow-xl border border-slate-200/90">
                <img
                  src={HOSPITAL_INFO.images.hero}
                  alt="Orthopaedic and spine consultation at Orthopaedic Hospital & Medical Complex Lahore"
                  className="w-full h-80 sm:h-96 lg:h-[430px] object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Scrim overlay for editorial caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white">
                  <div className="flex items-center justify-between text-xs text-slate-200 font-medium mb-1">
                    <span>Clinical Consultation Suite</span>
                    <span className="font-urdu text-teal-300" dir="rtl">او ایم سی ہسپتال</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-100 font-light leading-snug">
                    Dedicated doctor-patient evaluation with focused attention on spine and musculoskeletal conditions.
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    * Illustrative healthcare environment representation for OMC Lahore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
