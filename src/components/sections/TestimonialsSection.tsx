
import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mextalki student for 1 year",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      quote: "Mextalki transformed my Spanish learning journey. Their engaging content and cultural insights make learning Mexican Spanish fun and authentic!"
    },
    {
      name: "David Rodriguez",
      role: "Patreon member",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The team at Mextalki truly understand what makes learning effective. Their methods are engaging and the community is incredibly supportive."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container max-w-4xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-12">What our students say</h2>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TestimonialsSection;
