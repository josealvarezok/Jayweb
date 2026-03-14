import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import PartnerBadges from './components/PartnerBadges';
import ServicesGrid from './components/ServicesGrid';
import ProcessSection from './components/ProcessSection';
import SuccessStories from './components/SuccessStories';
import StatsSection from './components/StatsSection';
import AboutMe from './components/AboutMe';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ff5e13] selection:text-white overflow-hidden">
      <Navigation />
      <HeroSection />
      <PartnerBadges />
      <ServicesGrid />
      <ProcessSection />
      <SuccessStories />
      <StatsSection />
      <AboutMe />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}