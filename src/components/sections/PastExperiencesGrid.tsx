
import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

const PastExperiencesGrid: React.FC = () => {
  const experiences = [
    {
      id: 1,
      image: "/experience-1.jpg",
      title: "Language Immersion Classes",
      description: "Students practicing conversation skills with native speakers"
    },
    {
      id: 2,
      image: "/experience-2.jpg",
      title: "Cultural Tours",
      description: "Exploring historic sites and landmarks with expert guides"
    },
    {
      id: 3,
      image: "/experience-3.jpg",
      title: "Culinary Experiences",
      description: "Discovering authentic Mexican cuisine and cooking techniques"
    },
    {
      id: 4,
      image: "/experience-4.jpg",
      title: "Community Events",
      description: "Connecting with locals through cultural exchange activities"
    }
  ];

  return (
    <section className="py-6 px-6 bg-gray-50">
      <div className="container mx-auto">
        <ScrollAnimation>
          <h2 className="text-2xl font-bold text-center mb-6">Past Experiences</h2>
        </ScrollAnimation>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {experiences.map((exp) => (
            <ScrollAnimation key={exp.id} parallax={true} parallaxSpeed={0.1}>
              <Card className="bg-white overflow-hidden shadow-sm transform transition-transform hover:scale-[1.02] h-full">
                <AspectRatio ratio={4/3} className="bg-gray-100">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <CardContent className="p-3">
                  <h3 className="font-bold text-sm mb-0.5">{exp.title}</h3>
                  <p className="text-gray-600 text-xs">{exp.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastExperiencesGrid;
