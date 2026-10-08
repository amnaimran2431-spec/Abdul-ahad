import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/omcData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close legal modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-teal-800 mb-2">
              <Shield className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Patient Privacy Notice</span>
            </div>
            <h2 className="font-editorial text-2xl font-bold text-slate-900">
              Privacy Policy — OMC Lahore
            </h2>
            <p className="text-xs text-slate-500">Last updated: October 2026</p>

            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                Orthopaedic Hospital &amp; Medical Complex (OMC), Lahore is committed to safeguarding the privacy and confidentiality of our patients and site visitors.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Information Collection</h4>
              <p>
                When you submit an appointment inquiry through our website, we collect your name, phone number, email (if provided), and appointment preferences solely for the purpose of communicating with you and scheduling consultations with our orthopaedic medical team.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Confidentiality of Clinical Records</h4>
              <p>
                All medical consultations, physical examinations, and diagnostic imaging discussed or reviewed at OMC are handled under strict patient-doctor confidentiality standards. We never sell or distribute patient contact details to third-party commercial vendors.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Inquiries</h4>
              <p>
                For questions regarding patient data or scheduling privacy, contact OMC at {HOSPITAL_INFO.phone} or visit our desk at Chungi Amar Sidhu, LGH, Lahore.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-teal-800 mb-2">
              <FileText className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Terms of Service</span>
            </div>
            <h2 className="font-editorial text-2xl font-bold text-slate-900">
              Terms &amp; Conditions — OMC Lahore
            </h2>
            <p className="text-xs text-slate-500">Last updated: October 2026</p>

            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                Please review these website terms regarding appointments and clinical information provided by Orthopaedic Hospital &amp; Medical Complex (OMC), Lahore.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Appointment Requests</h4>
              <p>
                Submitting an appointment form via this website represents an inquiry and reservation request. Official appointment confirmation and timing tokens are established directly with the hospital reception desk via telephone or in person.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Informational Medical Disclaimer</h4>
              <p>
                The information provided on this website is for general educational and informational guidance regarding orthopaedic and spine care. It does not replace professional face-to-face physician consultation, diagnosis, or clinical prescription.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Hospital Contact</h4>
              <p>
                For direct confirmation of hospital schedules, please telephone our desk at {HOSPITAL_INFO.phone}.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
};
