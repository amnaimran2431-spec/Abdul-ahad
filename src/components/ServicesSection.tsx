import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/omcData';
import { ServiceItem } from '../types';
import {
  Stethoscope,
  Activity,
  Bone,
  CheckCircle2,
  ArrowRight,
  ClipboardList,
  Compass,
  Repeat,
  X,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForAppointment: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForAppointment,
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconType: ServiceItem['icon']) => {
    switch (iconType) {
      case 'spine':
        return <Activity className="w-5 h-5" />;
      case 'joint':
      case 'bone':
        return <Bone className="w-5 h-5" />;
      case 'diagnosis':
        return <ClipboardList className="w-5 h-5" />;
      case 'treatment':
        return <Compass className="w-5 h-5" />;
      case 'followup':
        return <Repeat className="w-5 h-5" />;
      default:
        return <Stethoscope className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800">
            <span>Clinical Services</span>
            <span aria-hidden="true">·</span>
            <span className="font-urdu normal-case font-bold" dir="rtl">طبی خدمات</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Specialized Orthopaedic &amp; Spine Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our clinical team at OMC Lahore evaluates musculoskeletal conditions with transparent communication, careful physical examination, and dedicated treatment guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-[#FAFBFD] hover:bg-white rounded-xl p-6 sm:p-7 border border-slate-200/80 hover:border-teal-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Editorial Index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono tabular-nums text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Urdu */}
                <div className="space-y-1 mb-3">
                  <h3 className="font-editorial text-xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-urdu text-xs text-teal-700 font-medium" dir="rtl">
                    {service.urduTitle}
                  </p>
                </div>

                {/* Short description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Focus areas */}
                <ul className="space-y-1.5 mb-6">
                  {service.focusAreas.slice(0, 3).map((area) => (
                    <li key={area} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setActiveModalService(service)}
                  className="font-medium text-slate-700 hover:text-teal-700 underline underline-offset-4 cursor-pointer"
                >
                  Clinical Overview
                </button>

                <button
                  type="button"
                  onClick={() => onSelectServiceForAppointment(service.title)}
                  className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-900 group/btn cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                {getServiceIcon(activeModalService.icon)}
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-bold text-slate-900">
                  {activeModalService.title}
                </h3>
                <p className="font-urdu text-sm text-teal-700" dir="rtl">
                  {activeModalService.urduTitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Included Clinical Assessment Focus:
            </h4>
            <div className="space-y-2 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
              {activeModalService.focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForAppointment(title);
                }}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg shadow-xs cursor-pointer"
              >
                Request Consultation for this Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
