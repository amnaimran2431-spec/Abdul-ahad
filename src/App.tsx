import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { DoctorsSection } from './components/DoctorsSection';
import { PatientJourney } from './components/PatientJourney';
import { FacilitiesAndGallery } from './components/FacilitiesAndGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ImportantNotice } from './components/ImportantNotice';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { AppointmentModal } from './components/AppointmentModal';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenAppointmentModal = (serviceName: string = '') => {
    setSelectedService(serviceName);
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-800 flex flex-col antialiased pb-16 md:pb-0">
      {/* Top Sticky Header */}
      <Header onOpenAppointmentModal={() => handleOpenAppointmentModal('')} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenAppointmentModal={() => handleOpenAppointmentModal('')} />

        {/* 2. Trust Intro Strip */}
        <TrustIntro />

        {/* 3. About OMC */}
        <AboutSection onOpenAppointmentModal={() => handleOpenAppointmentModal('')} />

        {/* 4. Services Grid */}
        <ServicesSection
          onSelectServiceForAppointment={(serviceTitle) => handleOpenAppointmentModal(serviceTitle)}
        />

        {/* 5. Specialties Detailed View */}
        <SpecialtiesSection onOpenAppointmentModal={() => handleOpenAppointmentModal('')} />

        {/* 6. Medical Experience & Consultation Atmosphere */}
        <ExperienceSection />

        {/* 7. Doctors Section (Verified Structure Roster) */}
        <DoctorsSection onOpenAppointmentModal={() => handleOpenAppointmentModal('')} />

        {/* 8. Patient Journey */}
        <PatientJourney onOpenAppointmentModal={() => handleOpenAppointmentModal('')} />

        {/* 9. Facilities & Photo Showcase Gallery */}
        <FacilitiesAndGallery />

        {/* 10. Patient Reflections & Feedback */}
        <TestimonialsSection />

        {/* 11. Important Notice Strip (No fabricated emergency claims, verified telephone) */}
        <ImportantNotice onOpenAppointmentModal={() => handleOpenAppointmentModal('')} />

        {/* 12. Appointment CTA & Integrated Form */}
        <AppointmentSection onOpenAppointmentModal={() => handleOpenAppointmentModal('')} />

        {/* 13. Contact & Location Information */}
        <ContactSection onOpenAppointmentModal={() => handleOpenAppointmentModal('')} />
      </main>

      {/* Multi-Column Footer */}
      <Footer
        onOpenAppointmentModal={() => handleOpenAppointmentModal('')}
        onOpenPrivacyModal={() => setLegalModalType('privacy')}
        onOpenTermsModal={() => setLegalModalType('terms')}
      />

      {/* Mobile Sticky Action Bar (< md) */}
      <MobileStickyBar onOpenAppointmentModal={() => handleOpenAppointmentModal('')} />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        selectedService={selectedService}
      />

      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
