
import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const GallerySection: React.FC = () => {
  const galleryItems = [
    {
      image: "/mexican-cuisine.jpg",
      title: "Mexican Cuisine",
      description: "Experience the rich flavors of authentic Mexican dishes"
    },
    {
      image: "/mexican-architecture.jpg",
      title: "Mexico City Architecture",
      description: "Discover the beautiful and historic buildings around the city"
    },
    {
      image: "/mexican-culture.jpg",
      title: "Mexican Culture",
      description: "Immerse yourself in the vibrant cultural experiences"
    }
  ];

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-12">A sneak peek of what's waiting for you</h2>
        </ScrollAnimation>
        
        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {galleryItems.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default GallerySection;
