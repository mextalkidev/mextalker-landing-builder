
import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-center mb-10">Past Experiences</h2>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {experiences.map((exp) => (
            <ScrollAnimation key={exp.id} parallax={true} parallaxSpeed={0.1}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-[1.02]">
                <AspectRatio ratio={3/4} className="bg-gray-100">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{exp.title}</h3>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastExperiencesGrid;
