import React from 'react';
import { HOSPITAL_INFO, SERVICES_DATA } from '../data/omcData';
import { Phone, MapPin, Calendar, Heart, Shield } from 'lucide-react';

interface FooterProps {
  onOpenAppointmentModal: () => void;
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAppointmentModal,
  onOpenPrivacyModal,
  onOpenTermsModal,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      {/* Main Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Hospital Identity (Col span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-600 text-white font-bold text-lg flex items-center justify-center">
                OMC
              </div>
              <div>
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-white tracking-tight leading-none">
                  Orthopaedic Hospital &amp; Medical Complex
                </h3>
                <p className="font-urdu text-sm text-teal-400 font-semibold mt-0.5" dir="rtl">
                  او ایم سی ہسپتال — لاہور
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Orthopaedic &amp; Spine Surgery Unit LGH, Lahore. Dedicated to thorough diagnostic evaluation, patient-first consultations, and structured joint and spine care plans.
            </p>

            <div className="pt-2 text-slate-400 space-y-1.5 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Chungi Amar Sidhu, LGH, Samanabad Town, Lahore 42000, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={HOSPITAL_INFO.phoneTel} className="text-white hover:text-teal-300 font-semibold transition-colors">
                  {HOSPITAL_INFO.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About OMC</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Clinical Services</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">Specialties</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">Medical Specialists</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">Patient Journey</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Clinical Spaces</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Location &amp; Visit</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Focus (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Orthopaedic Care
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Appointment Action (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Care Access
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book your consultation with our orthopaedic desk or call directly.
            </p>
            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="w-full py-2.5 px-3 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
            <a
              href={HOSPITAL_INFO.phoneTel}
              className="w-full py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-xs transition-colors border border-slate-800 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{HOSPITAL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Sub-Footer */}
      <div className="border-t border-slate-900/80 py-6 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            &copy; 2026 Orthopaedic Hospital &amp; Medical Complex (OMC), Lahore. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTermsModal}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
