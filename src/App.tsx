import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CareersSection } from './components/CareersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingActions } from './components/FloatingActions';
import { ServiceCategory } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<ServiceCategory>('software-development');
  const [prefilledContactService, setPrefilledContactService] = useState('Software Development');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentService, setAppointmentService] = useState('Software Development');

  // Handle smooth navigation
  const handleNavigate = (sectionId: string, serviceParam?: string) => {
    setActiveSection(sectionId);

    if (serviceParam) {
      setSelectedServiceCategory(serviceParam as ServiceCategory);
    }

    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectServiceForQuote = (serviceName: string) => {
    setPrefilledContactService(serviceName);
    handleNavigate('contact');
  };

  const handleOpenAppointment = (serviceType?: string) => {
    if (serviceType) {
      setAppointmentService(serviceType);
    }
    setIsAppointmentOpen(true);
  };

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'about', 'industries', 'testimonials', 'careers', 'services', 'hero'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section === 'hero' && window.scrollY < 300) {
          setActiveSection('hero');
          break;
        }
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Main Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onNavigate={handleNavigate}
          onOpenAppointment={handleOpenAppointment}
        />

        {/* 4 Core Services: Software Development, IT Services, Web Designing, Job Order Works */}
        <ServicesSection
          selectedCategory={selectedServiceCategory}
          onSelectService={handleSelectServiceForQuote}
          onOpenAppointment={handleOpenAppointment}
        />

        {/* Dedicated Client Testimonials Section */}
        <TestimonialsSection />

        {/* Industries Served */}
        <IndustriesSection
          onSelectIndustry={(industry) => {
            setPrefilledContactService(`${industry} Digital Solution`);
            handleNavigate('contact');
          }}
        />

        {/* Why Choose Luxonixstacks & 5-Step Process */}
        <WhyChooseUs />

        {/* About Luxonixstacks & Salem HQ Identity */}
        <AboutSection />

        {/* Official Contact & Inquiry Section */}
        <ContactSection prefilledService={prefilledContactService} />

        {/* Final Slide: Careers & Internship Opportunities */}
        <CareersSection />
      </main>

      {/* Comprehensive Enterprise Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        initialService={appointmentService}
      />

      {/* Speed Dial Floating Actions (WhatsApp, Phone, Scroll-Top) */}
      <FloatingActions />

    </div>
  );
}
