import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { PortfolioSection } from '../sections/PortfolioSection';
import { PricingSection } from '../sections/PricingSection';
import { TechStackSection } from '../sections/TechStackSection';
import { ContactSection } from '../sections/ContactSection';

interface HomePageProps {
  onShowToast: (type: 'success' | 'error' | 'info', message: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onShowToast }) => {
  const location = useLocation();
  const [selectedPlanTitle, setSelectedPlanTitle] = useState<string>('');

  useEffect(() => {
    // If navigated with scroll state (e.g. from Resume page)
    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection onSelectPlan={(plan) => setSelectedPlanTitle(plan)} />
      <TechStackSection />
      <ContactSection onShowToast={onShowToast} selectedPlanTitle={selectedPlanTitle} />
    </div>
  );
};
