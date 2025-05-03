import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import DestinationsSection from '../components/home/DestinationsSection';
import ToursSection from '../components/home/ToursSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';
import CTASection from '../components/home/CTASection';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Lindberg Safaris - Unforgettable African Travel Experiences</title>
        <meta name="description" content="Since 1996, Lindberg Holidays & Safaris has been crafting unforgettable journeys across Africa. Discover our safari tours, hotel bookings, transport services, and ticketing." />
      </Helmet>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <ToursSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </>
  );
};

export default HomePage;