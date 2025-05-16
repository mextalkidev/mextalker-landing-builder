
import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface ItinerarySectionProps {
  downloadItinerary: () => void;
}

const ItinerarySection: React.FC<ItinerarySectionProps> = ({ downloadItinerary }) => {
  const days = [
    "Day 1: Welcome",
    "Day 2: Chilango Flavors",
    "Day 3: Living History",
    "Day 4: Urban Art",
    "Day 5: Street Language",
    "Day 6: Real Conversations",
    "Day 7: Mextalker Wrap-Up"
  ];

  return (
    <section id="itinerary" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-12">What you'll experience each day</h2>
        </ScrollAnimation>
        
        <div className="max-w-2xl mx-auto mb-12">
          <ScrollAnimation>
            <div className="space-y-4">
              {days.map((day, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                  <div className="bg-mexgreen text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <p className="font-medium">{day}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation>
          <div className="text-center">
            <Button onClick={downloadItinerary} className="bg-white text-mexgreen border border-mexgreen hover:bg-mexgreen hover:text-white transition-colors">
              <Download className="mr-2 h-5 w-5" /> Download full itinerary PDF
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ItinerarySection;
