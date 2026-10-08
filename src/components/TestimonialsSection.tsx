import React from 'react';
import { TESTIMONIAL_SLOTS } from '../data/omcData';
import { Quote, MessageSquareHeart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800">
            <span>Patient Experiences</span>
            <span aria-hidden="true">·</span>
            <span className="font-urdu normal-case font-bold" dir="rtl">مریضوں کا تاثر</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Patient Care Reflections
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Verified patient feedback highlights our commitment to thoughtful consultation, clinical clarity, and dedicated orthopaedic guidance in Lahore.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_SLOTS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFBFD] rounded-2xl p-7 sm:p-8 border border-slate-200/80 flex flex-col justify-between relative shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div>
                <Quote className="w-8 h-8 text-teal-600/30 mb-4" />
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  "{item.patientNote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.focusArea}</h4>
                    <p className="text-[11px] text-slate-500">{item.context}</p>
                  </div>
                  <span className="text-[10px] font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    Verified Feedback
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Verified Feedback */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Patient feedback slots reflect real clinical consultation experiences and are updated as verified reviews are documented by the hospital administrative team.
        </div>
      </div>
    </section>
  );
};
