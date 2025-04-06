import React from 'react';
import HeroSection from './HeroSection';
import CoursesSection from './CoursesSection';
import VideosSection from './VideosSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

function Homepage() {
  return (
    <div className="bg-white font-readex">
      <HeroSection />
      <CoursesSection />
      <VideosSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default Homepage;
