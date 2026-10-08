import React, { useState } from 'react';
import { SPECIALTIES_DATA, HOSPITAL_INFO } from '../data/omcData';
import { Check, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

interface SpecialtiesSectionProps {
  onOpenAppointmentModal: () => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onOpenAppointmentModal,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentSpecialty = SPECIALTIES_DATA[activeTab];

  return (
    <section id="specialties" className="py-20 lg:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
            <span>Clinical Scope</span>
            <span aria-hidden="true">·</span>
            <span className="font-urdu normal-case font-bold" dir="rtl">خصوصی شعبہ جات</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Comprehensive Orthopaedic Specialties
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Our medical staff focuses on targeted areas of musculoskeletal and spinal health to deliver evidence-guided care for both sudden mechanical injuries and degenerative pain conditions.
          </p>
        </div>

        {/* Tab Selector & Detailed Editorial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Tab Navigation Buttons */}
          <div className="lg:col-span-5 space-y-2">
            {SPECIALTIES_DATA.map((specialty, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={specialty.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono tabular-nums ${isSelected ? 'text-teal-400' : 'text-slate-400'}`}>
                        0{idx + 1}
                      </span>
                      <h3 className="font-editorial text-base sm:text-lg font-bold leading-none">
                        {specialty.title}
                      </h3>
                    </div>
                    <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {specialty.subtitle}
                    </p>
                  </div>

                  <span
                    className={`font-urdu text-xs font-semibold px-2 py-1 rounded ${
                      isSelected ? 'bg-slate-800 text-teal-300' : 'bg-slate-100 text-slate-600'
                    }`}
                    dir="rtl"
                  >
                    {specialty.urduTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Specialty Detail Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm relative">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-5 mb-6">
              <div>
                <span className="text-xs font-medium text-teal-800 tracking-wide uppercase">
                  {currentSpecialty.subtitle}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  {currentSpecialty.title}
                </h3>
              </div>
              <span className="font-urdu text-base font-bold text-teal-800" dir="rtl">
                {currentSpecialty.urduTitle}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              {currentSpecialty.description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-teal-600" />
              <span>Specialized Clinical Scope &amp; Focus:</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {currentSpecialty.clinicalScope.map((scopeItem) => (
                <div
                  key={scopeItem}
                  className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5"
                >
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 leading-snug">
                    {scopeItem}
                  </span>
                </div>
              ))}
            </div>

            {/* Note on Medical Consultation */}
            <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100/80 flex items-start gap-3 mb-6">
              <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <p className="text-xs text-teal-900 leading-relaxed">
                Treatment pathways are established after individual physician examination and diagnostic correlation. Contact OMC to schedule a dedicated consultation for your condition.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium transition-colors shadow-xs cursor-pointer"
              >
                <span>Request Specialty Consultation</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>

              <a
                href={HOSPITAL_INFO.phoneTel}
                className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors"
              >
                Inquiries: {HOSPITAL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
