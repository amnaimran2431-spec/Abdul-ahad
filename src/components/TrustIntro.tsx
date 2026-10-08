import React from 'react';
import { HOSPITAL_INFO } from '../data/omcData';
import { Compass, CheckCircle2, Building2, Stethoscope } from 'lucide-react';

export const TrustIntro: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left statement */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-teal-800">
              Institutional Care &amp; Clinical Focus
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Patient-Centered Orthopaedic Guidance in Lahore
            </h2>
            <div className="flex items-center gap-2">
              <span className="font-urdu text-sm font-semibold text-teal-800" dir="rtl">
                او ایم سی ہسپتال — چنگی امر سدھو، لاہور
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Serving patients at Chungi Amar Sidhu with focused attention on spine stabilization, joint mobility restoration, and musculoskeletal diagnostic reviews.
            </p>
          </div>

          {/* Right 3 Key Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 lg:pt-0">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 transition-all hover:bg-white hover:shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center mb-3">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Clinical Evaluation</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Objective physical examinations coupled with thorough imaging reviews for precise clinical clarity.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 transition-all hover:bg-white hover:shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Conservative Planning</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Evidence-informed care plans emphasizing non-invasive stabilization before procedural considerations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 transition-all hover:bg-white hover:shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Unit Collaboration</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Orthopaedic &amp; Spine Surgery Unit LGH context, bringing structured clinical practices to each visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
