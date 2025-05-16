
import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import { MessageSquare, Utensils, Users, Calendar, Car, Gift } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: "3–4 hours of in-person classes per day",
      description: "Immersive lessons with expert teachers focusing on real Mexican Spanish.",
      bgColor: "bg-mexgreen/10",
      iconColor: "text-mexgreen"
    },
    {
      icon: Utensils,
      title: "Daily cultural and culinary activities",
      description: "Experience authentic Mexican culture and cuisine with guided activities.",
      bgColor: "bg-mexcotta/10",
      iconColor: "text-mexcotta"
    },
    {
      icon: Users,
      title: "Live conversation clubs",
      description: "Practice your Spanish in real-life situations with native speakers.",
      bgColor: "bg-mexyellow/10",
      iconColor: "text-mexyellow"
    },
    {
      icon: Calendar,
      title: "Comfortable and central lodging",
      description: "Stay in a well-located accommodation with all amenities included.",
      bgColor: "bg-mexpink/10",
      iconColor: "text-mexpink"
    },
    {
      icon: Car,
      title: "Transportation and entry fees included",
      description: "All local transportation and activity admission costs are covered.",
      bgColor: "bg-mexblue/10",
      iconColor: "text-mexblue"
    },
    {
      icon: Gift,
      title: "Welcome kit + exclusive content",
      description: "Receive a special welcome package and post-retreat digital content.",
      bgColor: "bg-mexgreen/10",
      iconColor: "text-mexgreen"
    }
  ];

  return (
    <section id="benefits" className="section-padding benefits-gradient">
      <div className="container mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-16">Top Benefits</h2>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className={`${benefit.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                </div>
                <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
