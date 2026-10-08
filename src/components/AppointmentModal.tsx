import React, { useEffect } from 'react';
import { AppointmentForm } from './AppointmentForm';
import { X, Calendar, Phone } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/omcData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedService = '',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4 text-teal-600" />
            <span>Consultation Request</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
            Book an Appointment at OMC
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <p className="font-urdu text-sm text-teal-800" dir="rtl">
              او ایم سی ہسپتال — چنگی امر سدھو، لاہور
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Please fill out your details below to schedule an orthopaedic or spine consultation. For immediate inquiries, you can call us at {HOSPITAL_INFO.phone}.
          </p>
        </div>

        <AppointmentForm
          initialService={selectedService}
          onSuccess={onClose}
          isModal={true}
        />
      </div>
    </div>
  );
};
