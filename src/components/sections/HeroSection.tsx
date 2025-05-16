
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  scrollToNextSection: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToNextSection }) => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative" 
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/mexico-city-hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container text-center text-white relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Vive la experiencia mextalker.</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          One week in Mexico City to take your Mexican Spanish to the next level — with classes, culture, food, and real human connection.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <Button className="bg-mexgreen hover:bg-mexgreen/90 text-white text-lg px-8 py-6">
            Reserve your spot now
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6">
            <MessageSquare className="mr-2 h-5 w-5" /> Chat with us on WhatsApp
          </Button>
        </div>
        
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 inline-block">
          <div className="text-mexyellow font-bold mb-1">
            <Calendar className="inline-block mr-2" /> September 22–29 · Mexico City
          </div>
          <div className="text-lg">
            🧑‍🎓 <span className="font-bold">8 out of 12</span> spots confirmed
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
