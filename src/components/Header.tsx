import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/omcData';

interface HeaderProps {
  onOpenAppointmentModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About OMC', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Specialties', href: '#specialties' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Patient Journey', href: '#journey' },
    { label: 'Contact & Location', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
            : 'bg-white/90 backdrop-blur-xs border-b border-slate-100 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              className="group flex items-center gap-3 transition-opacity hover:opacity-90 shrink-0"
              aria-label="OMC Lahore - Orthopaedic Hospital & Medical Complex Home"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-teal-400 flex items-center justify-center font-bold text-lg tracking-wider border border-slate-800 shadow-xs">
                OMC
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-none">
                    Orthopaedic Hospital &amp; Medical Complex
                  </span>
                  <span className="font-urdu text-sm font-semibold text-teal-700 leading-none hidden sm:inline" dir="rtl">
                    او ایم سی ہسپتال
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 tracking-wide mt-0.5">
                  Orthopaedic &amp; Spine Surgery Unit LGH, Lahore
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (4-6 links) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 relative py-1 transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Direct Phone */}
            <div className="flex items-center gap-3">
              <a
                href={HOSPITAL_INFO.phoneTel}
                className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-teal-700 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                title="Call OMC Lahore"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span className="tracking-wide">{HOSPITAL_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Book Appointment</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-teal-400 flex items-center justify-center font-bold text-sm">
                    OMC
                  </div>
                  <div>
                    <h2 className="font-editorial text-base font-bold text-slate-900">OMC Lahore</h2>
                    <p className="font-urdu text-xs text-teal-700" dir="rtl">او ایم سی ہسپتال</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-2 py-2 text-xs text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Chungi Amar Sidhu, LGH, Lahore</span>
              </div>

              <nav className="mt-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50/50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href={HOSPITAL_INFO.phoneTel}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-slate-200 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call {HOSPITAL_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Request Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
