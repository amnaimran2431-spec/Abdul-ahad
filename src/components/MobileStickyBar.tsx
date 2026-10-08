import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/omcData';

interface MobileStickyBarProps {
  onOpenAppointmentModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenAppointmentModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-2.5 px-4 md:hidden shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={HOSPITAL_INFO.phoneTel}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors active:scale-98"
        >
          <Phone className="w-3.5 h-3.5 text-teal-700 shrink-0" />
          <span className="truncate">Call {HOSPITAL_INFO.phone}</span>
        </a>

        <button
          type="button"
          onClick={onOpenAppointmentModal}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold transition-colors shadow-xs active:scale-98 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-teal-200 shrink-0" />
          <span className="truncate">Book Appointment</span>
        </button>
      </div>
    </div>
  );
};
