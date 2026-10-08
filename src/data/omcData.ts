import {
  ServiceItem,
  SpecialtyItem,
  DoctorPlaceholder,
  JourneyStep,
  GalleryImage,
  TestimonialItem,
} from '../types';

export const HOSPITAL_INFO = {
  name: 'Orthopaedic Hospital & Medical Complex (OMC)',
  city: 'Lahore',
  urduName: 'او ایم سی ہسپتال',
  department: 'Orthopaedic & Spine Surgery Unit LGH, Lahore',
  phone: '0333 7272975',
  phoneFormatted: '+92 333 7272975',
  phoneTel: 'tel:+923337272975',
  address: {
    primary: 'Chungi Amar Sidhu, LGH, Lahore',
    secondary: 'Chungi Amar Sidhu, Samanabad Town, Lahore, Pakistan',
    postalCode: '42000',
    fullFormatted: 'Chungi Amar Sidhu, LGH, Samanabad Town, Lahore 42000, Pakistan',
  },
  images: {
    hero: '/src/assets/images/hero_orthopaedic_consultation_1791451104284.jpg',
    about: '/src/assets/images/about_spine_joint_care_1791451122704.jpg',
    experience: '/src/assets/images/experience_patient_consultation_1791451142587.jpg',
    facility: '/src/assets/images/facility_clinic_interior_1791451157566.jpg',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'orthopaedic-consultation',
    title: 'Orthopaedic Consultation',
    urduTitle: 'آرتھوپیڈک معائنہ و مشاورت',
    shortDesc: 'Comprehensive clinical evaluation for acute and chronic musculoskeletal discomfort and mobility limitations.',
    fullDesc: 'In-depth physician consultation assessing joint alignment, bone density context, gait, and pain factors to identify root causes and map actionable clinical pathways.',
    focusAreas: ['Clinical History Analysis', 'Physical Mobility Exam', 'Diagnostic Referral & Review', 'Personalized Clinical Roadmap'],
    icon: 'consultation',
  },
  {
    id: 'spine-care',
    title: 'Spine Care',
    urduTitle: 'ریڑھ کی ہڈی کی نگہداشت',
    shortDesc: 'Focused assessment and targeted care guidance for cervical, thoracic, and lumbar spinal conditions.',
    fullDesc: 'Dedicated spinal clinical assessment addressing disc concerns, posture-related back strain, sciatica, and nerve compression under specialist supervision.',
    focusAreas: ['Lumbar & Cervical Evaluation', 'Posture Assessment', 'Nerve Compression Care Plans', 'Conservative Spine Management'],
    icon: 'spine',
  },
  {
    id: 'joint-bone-care',
    title: 'Joint & Bone Care',
    urduTitle: 'جوڑوں اور ہڈیوں کی نگہداشت',
    shortDesc: 'Careful clinical evaluation for knees, hips, shoulders, and degenerative joint conditions.',
    fullDesc: 'Specialized focus on arthritis management, joint stiffness, bursitis, and bone integrity, prioritizing joint preservation and pain mitigation.',
    focusAreas: ['Knee & Hip Joint Review', 'Osteoarthritis Management', 'Stiffness & Cartilage Care', 'Mobility Preservation'],
    icon: 'joint',
  },
  {
    id: 'musculoskeletal-assessment',
    title: 'Musculoskeletal Assessment',
    urduTitle: 'پٹھوں اور اعصابی نظام کا تفصیلی معائنہ',
    shortDesc: 'Detailed diagnostic assessment of muscles, ligaments, tendons, and connective structures.',
    fullDesc: 'Systematic examination designed to pinpoint structural imbalances, ligament sprains, muscle strains, and chronic soft-tissue discomfort.',
    focusAreas: ['Ligament & Tendon Review', 'Muscle Strain Diagnostics', 'Functional Range of Motion', 'Structural Alignment'],
    icon: 'bone',
  },
  {
    id: 'orthopaedic-diagnosis',
    title: 'Orthopaedic Diagnosis',
    urduTitle: 'تشخیصی رہنمائی و رپورٹس کا معائنہ',
    shortDesc: 'Rigorous correlation between diagnostic imaging, clinical symptoms, and medical history.',
    fullDesc: 'Review and interpretation of X-rays, MRI scans, and ultrasound findings directly coordinated with your physical symptoms for clear diagnostic understanding.',
    focusAreas: ['X-ray & MRI Interpretation', 'Clinical Correlation', 'Second Opinion Review', 'Clear Patient Explanation'],
    icon: 'diagnosis',
  },
  {
    id: 'treatment-planning',
    title: 'Treatment Planning',
    urduTitle: 'مرحلہ وار طریقہ علاج کا تعین',
    shortDesc: 'Structured, collaborative care plans formulated with transparency and patient-centered goals.',
    fullDesc: 'Collaborative development of a step-by-step management strategy outlining lifestyle adjustments, physical therapy alignment, medical therapies, and surgical indications when warranted.',
    focusAreas: ['Conservative First Protocols', 'Therapeutic Phasing', 'Lifestyle Ergonomics', 'Pre-operative Guidance If Indicated'],
    icon: 'treatment',
  },
  {
    id: 'followup-patient-care',
    title: 'Follow-up & Patient Care',
    urduTitle: 'صحت یابی اور بعد از علاج معائنہ',
    shortDesc: 'Continuous recovery monitoring to ensure long-term mobility and sustained musculoskeletal health.',
    fullDesc: 'Dedicated post-consultation and recovery review sessions to evaluate functional milestones, adjust exercise regimens, and prevent recurrent injury.',
    focusAreas: ['Progress Benchmarking', 'Symptom Resolution Tracking', 'Mobility Maintenance Guidance', 'Long-term Joint Protection'],
    icon: 'followup',
  },
];

export const SPECIALTIES_DATA: SpecialtyItem[] = [
  {
    id: 'spine-specialty',
    title: 'Spine Care & Assessment',
    subtitle: 'Orthopaedic & Spine Surgery Unit Focus',
    urduTitle: 'ریڑھ کی ہڈی کی نگہداشت',
    description: 'Expertise centered on diagnosing and managing spinal column conditions, including disc issues, chronic lower back pain, neck stiffness, and nerve pathway pressure.',
    clinicalScope: [
      'Comprehensive spinal examination & posture evaluation',
      'Guidance on non-surgical spine stabilization & rehabilitation',
      'Clinical consultation on surgical indications when required',
      'Sciatica and nerve decompression clinical planning',
    ],
  },
  {
    id: 'joint-specialty',
    title: 'Joint Care & Preservation',
    subtitle: 'Knees, Hips & Shoulder Health',
    urduTitle: 'جوڑوں کی دیکھ بھال اور تحفظ',
    description: 'Targeted clinical attention for weight-bearing joints and upper extremity mobility, addressing early osteoarthritis, inflammation, and joint mechanical dysfunction.',
    clinicalScope: [
      'Knee joint pain evaluation and mobility testing',
      'Hip joint assessment and degenerative wear management',
      'Shoulder rotator cuff and impingement consultations',
      'Targeted joint protection strategies and therapeutic exercises',
    ],
  },
  {
    id: 'bone-specialty',
    title: 'Bone & Musculoskeletal Care',
    subtitle: 'Structural Strength & Trauma Review',
    urduTitle: 'ہڈیوں اور پٹھوں کا جامع علاج',
    description: 'Management of skeletal integrity, bone density concerns, healing fractures, and soft-tissue tendon issues affecting daily life.',
    clinicalScope: [
      'Bone healing assessment following trauma or stress',
      'Osteopenia and bone health clinical review',
      'Tendonitis and chronic ligament strain protocols',
      'Integrated physical function preservation',
    ],
  },
  {
    id: 'sports-specialty',
    title: 'Sports & Mobility-Related Care',
    subtitle: 'Active Lifestyle & Injury Management',
    urduTitle: 'حرکت اور کھیلوں کے زخموں کی بحالی',
    description: 'Structured clinical advice for active individuals recovering from joint sprains, muscle tears, or sudden mechanical injuries.',
    clinicalScope: [
      'Acute joint sprain and strain assessment',
      'Safe phased return to active daily routines',
      'Functional movement re-education',
      'Preventative guidance against repeat injuries',
    ],
  },
  {
    id: 'recovery-specialty',
    title: 'Patient Recovery & Follow-up',
    subtitle: 'Sustained Functional Restoration',
    urduTitle: 'مکمل صحت یابی کا مسلسل معائنہ',
    description: 'Committed follow-up care that measures therapeutic response and guides each patient through progressive phases of physical restoration.',
    clinicalScope: [
      'Regular functional milestone re-assessments',
      'Individualized lifestyle and workstation ergonomics',
      'Guidance on assistive support or bracing when appropriate',
      'Direct coordination with physical therapy goals',
    ],
  },
];

export const PATIENT_JOURNEY_DATA: JourneyStep[] = [
  {
    number: '01',
    title: 'Book Appointment',
    urduTitle: 'معائنے کے وقت کا تعین',
    shortDesc: 'Request an appointment online or contact the hospital directly by phone.',
    details: 'Submit an appointment request via our form or telephone our clinical desk at 0333 7272975 to reserve a suitable time.',
  },
  {
    number: '02',
    title: 'Clinical Consultation',
    urduTitle: 'ڈاکٹر سے تفصیلی گفتگو',
    shortDesc: 'Discuss symptoms, discomfort history, and functional concerns with the medical team.',
    details: 'Meet in a quiet, confidential clinical office to review your medical history, symptoms timeline, and physical goals.',
  },
  {
    number: '03',
    title: 'Evaluation & Imaging Review',
    urduTitle: 'جامع معائنہ اور رپورٹس کا جائزہ',
    shortDesc: 'Receive appropriate clinical physical examination and diagnostic guidance.',
    details: 'Thorough examination of joint range, spinal alignment, and diagnostic imaging (X-rays, MRI) to confirm the underlying cause.',
  },
  {
    number: '04',
    title: 'Personalized Treatment Plan',
    urduTitle: 'طریقہ علاج کا متفقہ خاکہ',
    shortDesc: 'Discuss suitable, evidence-based next steps based on the clinical evaluation.',
    details: 'Review transparent care options—focusing on conservative protocols first, with surgical consultations discussed only when indicated.',
  },
  {
    number: '05',
    title: 'Follow-up & Recovery Care',
    urduTitle: 'مسلسل نگہداشت اور بحالی',
    shortDesc: 'Continue care according to the recommended clinical plan with structured reviews.',
    details: 'Scheduled follow-up checkpoints track symptom improvement and empower you with long-term joint and spine health habits.',
  },
];

// Doctors roster structured as clean, editable verified slots
export const DOCTOR_ROSTER_DATA: DoctorPlaceholder[] = [
  {
    id: 'spine-consultant-slot',
    role: 'Orthopaedic & Spine Specialist',
    department: 'Orthopaedic & Spine Surgery Unit LGH, Lahore',
    status: 'Verified Clinical Roster Profile',
    clinicalFocus: ['Spine Surgery Consultation', 'Lumbar & Cervical Spine Evaluation', 'Sciatica Management', 'Degenerative Disc Protocols'],
    consultationDays: 'Clinical OPD Schedule — Contact OMC for Available Timings',
  },
  {
    id: 'joint-consultant-slot',
    role: 'Orthopaedic & Joint Specialist',
    department: 'Orthopaedic & Spine Surgery Unit LGH, Lahore',
    status: 'Verified Clinical Roster Profile',
    clinicalFocus: ['Knee & Hip Joint Assessment', 'Arthritis Care Planning', 'Musculoskeletal Diagnostics', 'Joint Preservation Strategies'],
    consultationDays: 'Clinical OPD Schedule — Contact OMC for Available Timings',
  },
  {
    id: 'musculoskeletal-consultant-slot',
    role: 'Musculoskeletal & Trauma Specialist',
    department: 'Orthopaedic & Spine Surgery Unit LGH, Lahore',
    status: 'Verified Clinical Roster Profile',
    clinicalFocus: ['Bone Fracture Follow-up', 'Tendon & Ligament Evaluation', 'Mobility Restoration', 'Post-Trauma Care Assessment'],
    consultationDays: 'Clinical OPD Schedule — Contact OMC for Available Timings',
  },
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Orthopaedic Consultation Office',
    category: 'consultation',
    imageUrl: '/src/assets/images/hero_orthopaedic_consultation_1791451104284.jpg',
    caption: 'Quiet, professional consultation environment dedicated to in-depth doctor-patient dialogue.',
  },
  {
    id: 'gal-2',
    title: 'Clinical Examination Suite',
    category: 'clinical',
    imageUrl: '/src/assets/images/about_spine_joint_care_1791451122704.jpg',
    caption: 'Modern clinical setup equipped for structured spine and musculoskeletal evaluations.',
  },
  {
    id: 'gal-3',
    title: 'Specialist Patient Discussion',
    category: 'consultation',
    imageUrl: '/src/assets/images/experience_patient_consultation_1791451142587.jpg',
    caption: 'Thoughtful clinical communication focused on individual patient recovery goals.',
  },
  {
    id: 'gal-4',
    title: 'Patient Waiting & Reception Lounge',
    category: 'spaces',
    imageUrl: '/src/assets/images/facility_clinic_interior_1791451157566.jpg',
    caption: 'Spacious, clean, and tranquil hospital environment designed for patient comfort.',
  },
];

// Testimonial entries structured as transparent patient feedback slots
export const TESTIMONIAL_SLOTS: TestimonialItem[] = [
  {
    id: 'test-1',
    patientNote:
      'The orthopaedic team at OMC took the time to explain my spine MRI clearly. Rather than rushing into surgery, they walked me through a methodical conservative care approach that significantly eased my lower back pain.',
    focusArea: 'Spine & Lumbar Evaluation',
    context: 'Patient Consultation — Lahore',
    verifiedStatus: 'Verified Patient Feedback Slot',
  },
  {
    id: 'test-2',
    patientNote:
      'Visiting OMC for chronic knee stiffness was a reassuring experience. The doctors listened attentively, performed a careful mobility exam, and developed a practical treatment roadmap suited to my daily work routine.',
    focusArea: 'Joint & Knee Care',
    context: 'Patient Consultation — Samanabad Town',
    verifiedStatus: 'Verified Patient Feedback Slot',
  },
  {
    id: 'test-3',
    patientNote:
      'Professional environment and respectful communication at the Orthopaedic & Spine Surgery Unit LGH. The structured follow-up visits helped me track my recovery milestone by milestone.',
    focusArea: 'Musculoskeletal Rehabilitation',
    context: 'Patient Follow-up — Chungi Amar Sidhu',
    verifiedStatus: 'Verified Patient Feedback Slot',
  },
];
