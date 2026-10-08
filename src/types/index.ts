export interface ServiceItem {
  id: string;
  title: string;
  urduTitle: string;
  shortDesc: string;
  fullDesc: string;
  focusAreas: string[];
  icon: 'spine' | 'joint' | 'bone' | 'consultation' | 'diagnosis' | 'treatment' | 'followup';
}

export interface SpecialtyItem {
  id: string;
  title: string;
  subtitle: string;
  urduTitle: string;
  description: string;
  clinicalScope: string[];
}

export interface DoctorPlaceholder {
  id: string;
  role: string;
  department: string;
  status: string;
  clinicalFocus: string[];
  consultationDays: string;
}

export interface JourneyStep {
  number: string;
  title: string;
  urduTitle: string;
  shortDesc: string;
  details: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'consultation' | 'clinical' | 'spaces';
  imageUrl: string;
  caption: string;
}

export interface TestimonialItem {
  id: string;
  patientNote: string;
  focusArea: string;
  context: string;
  verifiedStatus: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  specialtyOrReason: string;
  notes: string;
}
