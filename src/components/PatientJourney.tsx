import React from 'react';
import { PATIENT_JOURNEY_DATA } from '../data/omcData';
import { ArrowRight, Calendar, UserCheck, Stethoscope, Compass, Repeat } from 'lucide-react';

interface PatientJourneyProps {
  onOpenAppointmentModal: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenAppointmentModal }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar className="w-5 h-5 text-teal-700" />;
      case 1:
        return <UserCheck className="w-5 h-5 text-teal-700" />;
      case 2:
        return <Stethoscope className="w-5 h-5 text-teal-700" />;
      case 3:
        return <Compass className="w-5 h-5 text-teal-700" />;
      default:
        return <Repeat className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section id="journey" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800">
            <span>Clinical Pathway</span>
            <span aria-hidden="true">·</span>
            <span className="font-urdu normal-case font-bold" dir="rtl">علاج کے مراحل</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            The Patient Care Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From your initial appointment booking to structured recovery check-ins, our process is designed to be clear, supportive, and transparent at every milestone.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {PATIENT_JOURNEY_DATA.map((step, idx) => (
            <div
              key={step.number}
              className="relative bg-[#FAFBFD] rounded-xl p-5 sm:p-6 border border-slate-200/80 hover:border-teal-300 transition-all duration-200 flex flex-col justify-between hover:shadow-sm"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-editorial text-2xl font-bold text-slate-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-editorial text-lg font-bold text-slate-900 mb-1 leading-snug">
                  {step.title}
                </h3>

                <p className="font-urdu text-xs text-teal-800 font-semibold mb-3" dir="rtl">
                  {step.urduTitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-3 font-medium">
                  {step.shortDesc}
                </p>

                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {step.details}
                </p>
              </div>

              {idx < PATIENT_JOURNEY_DATA.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-editorial text-xl sm:text-2xl font-bold">Ready to Begin Step 01?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit your appointment inquiry or call OMC directly at 0333 7272975.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenAppointmentModal}
            className="px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer whitespace-nowrap"
          >
            Request Appointment Now
          </button>
        </div>
      </div>
    </section>
  );
};
