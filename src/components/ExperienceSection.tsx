import React from 'react';
import { HOSPITAL_INFO } from '../data/omcData';
import { MessageSquare, FileText, Heart, Clock, UserCheck } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                Patient-Centered Care Experience
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                A Thorough, Dignified Medical Consultation
              </h2>
              <p className="font-urdu text-base text-teal-800 font-medium" dir="rtl">
                صحت کی بحالی کے لیے پرسکون ماحول اور مکمل توجہ
              </p>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              We understand that joint stiffness and persistent spinal pain can impact every dimension of your life—from your work productivity to restful sleep. That is why our consultations are built around unhurried listening, clear answers, and transparent explanations.
            </p>

            {/* Experience Feature List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:bg-slate-50/80">
                <div className="w-10 h-10 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Unhurried Physician Communication</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Ample time to explain your symptoms timeline, prior treatments, and specific mobility goals without feeling rushed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:bg-slate-50/80">
                <div className="w-10 h-10 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Clear Treatment Planning</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Step-by-step guidance outlining conservative rehabilitation first, with explicit rationale for any medical intervention.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:bg-slate-50/80">
                <div className="w-10 h-10 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Comfortable Clinical Setting</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Clean, respectful, and organized hospital rooms at Chungi Amar Sidhu designed for patient peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:bg-slate-50/80">
                <div className="w-10 h-10 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Dedicated Follow-up Continuity</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Structured check-ins to monitor symptom progression and refine exercise and ergonomics as your recovery evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200">
              <img
                src={HOSPITAL_INFO.images.experience}
                alt="Patient consultation and doctor guidance at OMC Lahore"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-4 sm:p-5 bg-slate-900 text-white">
                <div className="flex items-center justify-between text-xs text-teal-300 font-medium mb-1">
                  <span>Clinical Dialogue &amp; Empathy</span>
                  <span className="font-urdu" dir="rtl">او ایم سی ہسپتال</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Every patient roadmap is formulated through personalized doctor-patient discussion.
                </p>
                <p className="text-[10px] text-slate-500 mt-1">
                  * Illustrative medical consultation photo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
