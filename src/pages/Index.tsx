
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';

// Import section components
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import ItinerarySection from '@/components/sections/ItinerarySection';
import GallerySection from '@/components/sections/GallerySection';
import TeamSection from '@/components/sections/TeamSection';
import SpecialOfferSection from '@/components/sections/SpecialOfferSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const downloadItinerary = () => {
    // In a real implementation, this would download a PDF file
    alert('In a real implementation, this would download the itinerary PDF');
    // window.open('/path-to-itinerary.pdf', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      <HeroSection scrollToNextSection={scrollToNextSection} />
      <AboutSection />
      <BenefitsSection />
      <ItinerarySection downloadItinerary={downloadItinerary} />
      <GallerySection />
      <TeamSection />
      <SpecialOfferSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
      <FooterSection />
    </div>
  );
};

export default Index;
