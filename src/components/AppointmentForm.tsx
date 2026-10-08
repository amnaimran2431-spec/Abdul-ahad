import React, { useState } from 'react';
import { AppointmentFormData } from '../types';
import { HOSPITAL_INFO, SERVICES_DATA } from '../data/omcData';
import { CheckCircle2, AlertCircle, Calendar, Clock, User, Phone, Mail, FileText, Send } from 'lucide-react';

interface AppointmentFormProps {
  initialService?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialService = '',
  onSuccess,
  isModal = false,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    specialtyOrReason: initialService || 'Orthopaedic Consultation',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AppointmentFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your complete name';
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(03\d{9}|\+923\d{9}|042\d{7,8})$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid Pakistan phone number (e.g., 0333 1234567)';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate request dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 3000);
      }
    }, 800);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      specialtyOrReason: 'Orthopaedic Consultation',
      notes: '',
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-teal-200 shadow-sm animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mx-auto mb-4 border border-teal-100">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-editorial text-2xl font-bold text-slate-900 mb-2">
          Appointment Request Received
        </h3>
        <p className="font-urdu text-sm text-teal-800 font-semibold mb-3" dir="rtl">
          آپ کی درخواست موصول ہو گئی ہے۔ شکریہ
        </p>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
          Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your request for <span className="font-semibold text-teal-800">{formData.specialtyOrReason}</span> has been logged. Our clinical desk will contact you at <span className="font-semibold text-slate-900">{formData.phone}</span> to confirm available timings.
        </p>
        <div className="p-4 bg-slate-50 rounded-xl max-w-sm mx-auto text-xs text-slate-600 border border-slate-200/80 mb-6">
          <p className="font-semibold text-slate-800 mb-1">Direct Verification</p>
          <p>For urgent scheduling queries, telephone OMC at {HOSPITAL_INFO.phone}.</p>
        </div>
        <button
          type="button"
          onClick={resetForm}
          className="px-5 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  // Calculate today for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Muhammad Ahmad"
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border transition-colors ${
              errors.fullName
                ? 'border-red-400 focus:ring-1 focus:ring-red-400 focus:outline-hidden'
                : 'border-slate-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 focus:outline-hidden'
            }`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>Phone Number (Pakistan) *</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 0333 1234567"
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border transition-colors ${
              errors.phone
                ? 'border-red-400 focus:ring-1 focus:ring-red-400 focus:outline-hidden'
                : 'border-slate-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 focus:outline-hidden'
            }`}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      {/* Email & Specialty */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Email Address (Optional)</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@example.com"
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border transition-colors ${
              errors.email
                ? 'border-red-400 focus:ring-1 focus:ring-red-400 focus:outline-hidden'
                : 'border-slate-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 focus:outline-hidden'
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Reason for Visit / Department</span>
          </label>
          <select
            value={formData.specialtyOrReason}
            onChange={(e) => setFormData({ ...formData, specialtyOrReason: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-slate-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 focus:outline-hidden text-slate-800"
          >
            {SERVICES_DATA.map((srv) => (
              <option key={srv.id} value={srv.title}>
                {srv.title}
              </option>
            ))}
            <option value="General Spine Review">General Spine Review</option>
            <option value="Knee & Joint Pain">Knee &amp; Joint Pain</option>
            <option value="Post-Trauma Bone Check">Post-Trauma Bone Check</option>
          </select>
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Preferred Date *</span>
          </label>
          <input
            type="date"
            min={today}
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border transition-colors ${
              errors.preferredDate
                ? 'border-red-400 focus:ring-1 focus:ring-red-400 focus:outline-hidden'
                : 'border-slate-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 focus:outline-hidden'
            }`}
          />
          {errors.preferredDate && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.preferredDate}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Preferred Time Window</span>
          </label>
          <select
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-slate-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 focus:outline-hidden text-slate-800"
          >
            <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
            <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
            <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
          </select>
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Additional Clinical Message / Symptoms Note (Optional)
        </label>
        <textarea
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Briefly describe your symptoms (e.g., lower back stiffness, knee pain after walking, duration)..."
          className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-slate-300 focus:border-teal-700 focus:ring-1 focus:ring-teal-700 focus:outline-hidden text-slate-800 resize-none"
        />
      </div>

      {/* Transparency Note */}
      <div className="p-3 bg-slate-50 rounded-lg text-[11px] text-slate-500 leading-relaxed border border-slate-200/70">
        Submitting this form sends an appointment request. Confirmation details should be verified with the hospital. Our staff will confirm the attending consultant and time slot with you via phone.
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-4 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <span>Processing Request...</span>
        ) : (
          <>
            <Send className="w-4 h-4 text-teal-200" />
            <span>Request Appointment</span>
          </>
        )}
      </button>
    </form>
  );
};
