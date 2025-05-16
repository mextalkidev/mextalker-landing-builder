
import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import PastExperiencesGrid from '@/components/sections/PastExperiencesGrid';

const AboutSection: React.FC = () => {
  return (
    <>
      <section id="about" className="section-padding">
        <div className="container max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-center mb-8">What is the Experiencia Mextalker?</h2>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <p className="text-lg text-gray-700 text-center mb-10 leading-relaxed">
              An immersive 7-day language and culture retreat in Mexico City. Perfect for learners who love Mexican Spanish, want to boost their fluency, and explore the city like a local.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <div className="bg-mexgreen-light rounded-xl p-8 text-center">
              <p className="text-2xl font-semibold text-mexgreen italic">
                "Mexican Spanish, but make it real."
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <PastExperiencesGrid />
    </>
  );
};

export default AboutSection;
