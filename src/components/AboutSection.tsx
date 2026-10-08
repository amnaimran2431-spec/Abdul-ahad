import React from 'react';
import { HOSPITAL_INFO } from '../data/omcData';
import { Check, Shield, UserCheck, HeartHandshake, Phone } from 'lucide-react';

export const AboutSection: React.FC<{ onOpenAppointmentModal: () => void }> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column (Asymmetric with overlapping elements) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200">
              <img
                src={HOSPITAL_INFO.images.about}
                alt="Orthopaedic clinical suite and anatomical assessment at OMC Lahore"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-5 bg-white border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900 tracking-wide">
                    Orthopaedic &amp; Spine Care
                  </span>
                  <span className="font-urdu text-xs font-bold text-teal-800" dir="rtl">
                    او ایم سی ہسپتال
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Dedicated clinical consultation rooms for comprehensive musculoskeletal assessment.
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  * Illustrative clinical environment representation.
                </p>
              </div>
            </div>

            {/* Floating Info Card */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 bg-slate-900 text-white p-5 rounded-xl shadow-xl max-w-xs border border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-xs font-bold tracking-wide uppercase text-teal-300">
                  LGH Lahore Affiliated Unit
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Orthopaedic &amp; Spine Surgery Unit LGH, providing structured care at Chungi Amar Sidhu.
              </p>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800">
                <span>About Our Hospital</span>
                <span aria-hidden="true">·</span>
                <span className="font-urdu normal-case font-bold" dir="rtl">تعارف او ایم سی ہسپتال</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight text-balance">
                Orthopaedic Hospital &amp; Medical Complex (OMC), Lahore
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              At Orthopaedic Hospital &amp; Medical Complex (OMC), our focus is centered squarely on the clinical evaluation, diagnostic interpretation, and careful management of orthopaedic and spine-related conditions.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are experiencing chronic lower back stiffness, radiating nerve symptoms, knee discomfort, or post-injury physical limitations, our objective is to provide attentive medical consultations and realistic, stepwise recovery plans.
            </p>

            {/* Core Practice Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200/80">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Spine Assessment</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Detailed examination of cervical and lumbar disc and nerve symptoms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200/80">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Joint Preservation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Structured management of knee, hip, and shoulder joint degeneration.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200/80">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Patient-First Diagnostics</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Correlating medical imaging directly with clinical physical examination.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200/80">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Collaborative Planning</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Clear explanations so you understand every phase of your recovery.</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium transition-colors shadow-xs cursor-pointer"
              >
                Schedule Consultation
              </button>

              <a
                href={HOSPITAL_INFO.phoneTel}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call {HOSPITAL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
