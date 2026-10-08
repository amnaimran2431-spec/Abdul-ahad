import React, { useState } from 'react';
import { HOSPITAL_INFO } from '../data/omcData';
import { MapPin, Phone, Copy, Check, ExternalLink, Calendar, Building, Clock } from 'lucide-react';

interface ContactSectionProps {
  onOpenAppointmentModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenAppointmentModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOSPITAL_INFO.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Chungi Amar Sidhu, LGH, Samanabad Town, Lahore, Pakistan'
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFBFD] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800">
            <span>Location &amp; Inquiries</span>
            <span aria-hidden="true">·</span>
            <span className="font-urdu normal-case font-bold" dir="rtl">رابطہ اور پتہ</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Contact &amp; Visit OMC Lahore
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Conveniently situated at Chungi Amar Sidhu near LGH in Lahore. Reach out to our front desk for appointment coordination and directions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono text-teal-700 font-bold tracking-wider uppercase">
                  Hospital Headquarters
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Orthopaedic Hospital &amp; Medical Complex (OMC)
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-urdu text-base font-bold text-teal-800" dir="rtl">
                    او ایم سی ہسپتال — لاہور
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {HOSPITAL_INFO.department}
                </p>
              </div>

              {/* Address Block */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Written Physical Address:
                    </h4>
                    <p className="text-sm text-slate-800 font-medium mt-1">
                      {HOSPITAL_INFO.address.primary}
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {HOSPITAL_INFO.address.secondary}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Postal Code: <strong className="font-semibold text-slate-700">{HOSPITAL_INFO.address.postalCode}</strong>
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-700 px-3 py-1.5 bg-white rounded-md border border-slate-200 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-teal-600" />
                        <span>Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 px-3 py-1.5 bg-white rounded-md border border-slate-200 transition-colors"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone Block */}
              <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-800">
                      Direct Appointment Desk
                    </span>
                    <p className="text-lg font-bold text-slate-900">{HOSPITAL_INFO.phone}</p>
                  </div>
                </div>

                <a
                  href={HOSPITAL_INFO.phoneTel}
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Please contact OMC to verify doctor consultation timings.
              </span>
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="text-xs font-bold text-teal-700 hover:text-teal-900 underline underline-offset-4 cursor-pointer"
              >
                Request Appointment Online &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: Directions & Visiting Guidance */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-7 sm:p-9 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                  Visitor Information
                </span>
                <h3 className="font-editorial text-2xl font-bold text-white mt-1">
                  Reaching OMC at Chungi Amar Sidhu
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Located along the Chungi Amar Sidhu transit corridor adjacent to LGH, Samanabad Town, Lahore. The complex is easily accessible from Ferozepur Road and surrounding arterial roads.
                </p>
              </div>

              {/* Practical Guidance Checklist */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                  <Building className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Clinical OPD Registration</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Upon arrival, please check in at the front reception desk to confirm your appointment token.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Pre-Visit Consultation Check</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Always bring any existing diagnostic X-ray plates, MRI scans, or prescription records for doctor review.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Telephone Assistance</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Dial {HOSPITAL_INFO.phone} if you need directions from your current location in Lahore.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs"
              >
                <MapPin className="w-4 h-4" />
                <span>Open Destination in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
