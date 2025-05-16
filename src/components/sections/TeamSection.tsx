
import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import TeamCard from '@/components/TeamCard';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Allfa",
      role: "Tour Guide",
      bio: "Experienced tour guide who knows all the hidden gems of Mexico City.",
      image: "/team-allfa.jpg"
    },
    {
      name: "Alondra",
      role: "Conversation Club Host",
      bio: "Host of the Mextalki conversation club, known for her engaging talks and valuable feedback.",
      image: "/team-alondra.jpg"
    },
    {
      name: "Efra",
      role: "Spanish Teacher",
      bio: "Spanish teacher with over 6 years of experience and co-host of the 'Cheleando con Mextalki' podcast.",
      image: "/team-efra.jpg"
    },
    {
      name: "Diego",
      role: "Spanish Teacher",
      bio: "Passionate teacher with 10 years of experience and co-host of the 'Cheleando con Mextalki' podcast.",
      image: "/team-diego.jpg"
    }
  ];

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-6">Meet the Team</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Get to know the four key members who will guide you throughout your Mextalker experience. Our team of experts will ensure you have an unforgettable time in Mexico City.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TeamSection;
