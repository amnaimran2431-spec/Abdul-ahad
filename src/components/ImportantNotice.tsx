import React from 'react';
import { HOSPITAL_INFO } from '../data/omcData';
import { AlertCircle, Phone, MapPin, Calendar } from 'lucide-react';

export const ImportantNotice: React.FC<{ onOpenAppointmentModal: () => void }> = ({
  onOpenAppointmentModal,
}) => {
  return (
    <section className="bg-slate-900 text-white py-10 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5 border border-teal-500/30">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Important Patient Information
                </span>
                <span className="text-slate-600">·</span>
                <span className="font-urdu text-xs text-teal-300" dir="rtl">ضروری معلومات برائے مریض</span>
              </div>
              <h3 className="font-editorial text-lg sm:text-xl font-bold">
                Contact OMC for Appointment and Care Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Please contact our reception desk to confirm attending surgeon schedules, consultation hours, and appointment slots before your visit to Chungi Amar Sidhu, Lahore.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={HOSPITAL_INFO.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors border border-white/10"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>{HOSPITAL_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
