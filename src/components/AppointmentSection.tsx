import React from 'react';
import { AppointmentForm } from './AppointmentForm';
import { HOSPITAL_INFO } from '../data/omcData';
import { Phone, Calendar, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

interface AppointmentSectionProps {
  onOpenAppointmentModal: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  onOpenAppointmentModal,
}) => {
  return (
    <section id="appointment" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative architectural medical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: High Conversion Copy & Direct Call Actions */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
                <span>Appointment Booking</span>
                <span className="text-slate-600">·</span>
                <span className="font-urdu normal-case font-bold" dir="rtl">معائنہ کا وقت حاصل کریں</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Your Orthopaedic Care Starts Here
              </h2>
              <p className="font-urdu text-base text-teal-300 font-medium" dir="rtl">
                او ایم سی ہسپتال — لاہور میں بروقت معائنہ اور مشاورت
              </p>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              Contact OMC to discuss your appointment and next steps. Our team coordinates directly with attending consultants to allocate suitable consultation slots.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Orthopaedic &amp; Spine Surgery Unit LGH Affiliated</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Chungi Amar Sidhu, LGH, Lahore (Postal: 42000)</span>
              </div>
            </div>

            {/* Direct Phone Dial Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={HOSPITAL_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm sm:text-base transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {HOSPITAL_INFO.phone}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-colors border border-slate-700"
              >
                <span>View Hospital Location</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Request Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-100 text-slate-900">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <h3 className="font-editorial text-2xl font-bold text-slate-900">
                Request a Consultation
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Please complete the form below. We will review specialist availability and confirm via telephone.
              </p>
            </div>

            <AppointmentForm isModal={false} />
          </div>
        </div>
      </div>
    </section>
  );
};
