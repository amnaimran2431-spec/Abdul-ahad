import React from 'react';
import { DOCTOR_ROSTER_DATA, HOSPITAL_INFO } from '../data/omcData';
import { User, Calendar, Phone, CheckCircle, Info, Stethoscope } from 'lucide-react';

interface DoctorsSectionProps {
  onOpenAppointmentModal: () => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="doctors" className="py-20 lg:py-28 bg-[#FAFBFD] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800">
            <span>Clinical Specialists</span>
            <span aria-hidden="true">·</span>
            <span className="font-urdu normal-case font-bold" dir="rtl">طبی ماہرین</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Our Medical Specialist Team
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Specialist clinicians affiliated with the Orthopaedic &amp; Spine Surgery Unit LGH providing consultations at OMC Lahore.
          </p>
        </div>

        {/* Informational Guidance Notice (Transparent & Professional) */}
        <div className="max-w-2xl mx-auto mb-10 p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div className="text-xs text-blue-900 leading-relaxed">
            <p className="font-semibold mb-0.5">Verified Medical Roster Structure</p>
            <p>
              Doctor consultation schedules and OPD timings at Chungi Amar Sidhu vary by clinical rotation. Please contact OMC directly at <strong className="font-bold">{HOSPITAL_INFO.phone}</strong> or request an appointment below to confirm consultant availability on your preferred day.
            </p>
          </div>
        </div>

        {/* Doctors Grid / Editable Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTOR_ROSTER_DATA.map((doctor, index) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Profile Indicator */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
                    <Stethoscope className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono tabular-nums text-teal-700 font-semibold tracking-wide">
                      CLINICAL SPECIALIST {index + 1}
                    </span>
                    <h3 className="font-editorial text-lg font-bold text-slate-900 leading-snug">
                      {doctor.role}
                    </h3>
                  </div>
                </div>

                <div className="text-xs text-slate-500 pb-3 mb-4 border-b border-slate-100">
                  <p className="font-medium text-slate-700">{doctor.department}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Chungi Amar Sidhu, LGH, Lahore</p>
                </div>

                {/* Clinical Areas */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Clinical Focus Areas:
                  </span>
                  <ul className="space-y-1.5">
                    {doctor.clinicalFocus.map((focus) => (
                      <li key={focus} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-[11px]">{doctor.consultationDays}</span>
                </div>

                <button
                  type="button"
                  onClick={onOpenAppointmentModal}
                  className="w-full py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>Inquire Specialist Timing</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Call Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-600">
            Need immediate verification of today's attending orthopaedic surgeon?
          </p>
          <a
            href={HOSPITAL_INFO.phoneTel}
            className="inline-flex items-center gap-2 mt-2 text-sm font-bold text-teal-800 hover:text-teal-900 underline underline-offset-4"
          >
            <Phone className="w-4 h-4 text-teal-600" />
            <span>Call OMC Desk: {HOSPITAL_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
