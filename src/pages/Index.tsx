
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import ScrollAnimation from '@/components/ScrollAnimation';
import TeamCard from '@/components/TeamCard';
import { Button } from '@/components/ui/button';
import { Download, Calendar, Users, MessageSquare, Utensils, Car, Gift, ArrowRight, ChevronDown } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const downloadItinerary = () => {
    // In a real implementation, this would download a PDF file
    alert('In a real implementation, this would download the itinerary PDF');
    // window.open('/path-to-itinerary.pdf', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Benefits Section */}
      <section id="benefits" className="section-padding benefits-gradient">
        <div className="container mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-center mb-16">Top Benefits</h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-mexgreen/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-mexgreen" />
                </div>
                <h3 className="font-semibold text-xl mb-2">3–4 hours of in-person classes per day</h3>
                <p className="text-gray-600">Immersive lessons with expert teachers focusing on real Mexican Spanish.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-mexcotta/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-mexcotta" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Daily cultural and culinary activities</h3>
                <p className="text-gray-600">Experience authentic Mexican culture and cuisine with guided activities.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-mexyellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-mexyellow" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Live conversation clubs</h3>
                <p className="text-gray-600">Practice your Spanish in real-life situations with native speakers.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-mexpink/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-mexpink" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Comfortable and central lodging</h3>
                <p className="text-gray-600">Stay in a well-located accommodation with all amenities included.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-mexblue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-mexblue" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Transportation and entry fees included</h3>
                <p className="text-gray-600">All local transportation and activity admission costs are covered.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-mexgreen/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-mexgreen" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Welcome kit + exclusive content</h3>
                <p className="text-gray-600">Receive a special welcome package and post-retreat digital content.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-center mb-12">What you'll experience each day</h2>
          </ScrollAnimation>
          
          <div className="max-w-2xl mx-auto mb-12">
            <ScrollAnimation>
              <div className="space-y-4">
                {[
                  "Day 1: Welcome",
                  "Day 2: Chilango Flavors",
                  "Day 3: Living History",
                  "Day 4: Urban Art",
                  "Day 5: Street Language",
                  "Day 6: Real Conversations",
                  "Day 7: Mextalker Wrap-Up"
                ].map((day, index) => (
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

      {/* Gallery Section */}
      <section id="gallery" className="section-padding">
        <div className="container mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-center mb-12">A sneak peek of what's waiting for you</h2>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-md">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="/mexican-cuisine.jpg" 
                    alt="Mexican Cuisine" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">Mexican Cuisine</h3>
                  <p className="text-gray-600 text-sm">Experience the rich flavors of authentic Mexican dishes</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="/mexican-architecture.jpg" 
                    alt="Mexico City Architecture" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">Mexican Architecture</h3>
                  <p className="text-gray-600 text-sm">Discover the beautiful and historic buildings around the city</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="/mexican-culture.jpg" 
                    alt="Mexican Culture" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">Mexican Culture</h3>
                  <p className="text-gray-600 text-sm">Immerse yourself in the vibrant cultural experiences</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Meet the Team Section */}
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
              <TeamCard
                name="Allfa"
                role="Tour Guide"
                bio="Experienced tour guide who knows all the hidden gems of Mexico City."
                image="/team-allfa.jpg"
              />
              <TeamCard
                name="Alondra"
                role="Conversation Club Host"
                bio="Host of the Mextalki conversation club, known for her engaging talks and valuable feedback."
                image="/team-alondra.jpg"
              />
              <TeamCard
                name="Efra"
                role="Spanish Teacher"
                bio="Spanish teacher with over 6 years of experience and co-host of the 'Cheleando con Mextalki' podcast."
                image="/team-efra.jpg"
              />
              <TeamCard
                name="Diego"
                role="Spanish Teacher"
                bio="Passionate teacher with 10 years of experience and co-host of the 'Cheleando con Mextalki' podcast."
                image="/team-diego.jpg"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Limited Time Offer Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-mexcotta/20 to-mexyellow/20">
        <div className="container max-w-3xl mx-auto">
          <ScrollAnimation>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="inline-block bg-mexpink text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                💥 Special Offer
              </div>
              <h2 className="text-3xl font-bold mb-4">50% off your deposit for the first 5 participants!</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Reserve your spot for just $225 USD (instead of $450). Refundable within 30 days.
              </p>
              <Button className="bg-mexgreen hover:bg-mexgreen/90 text-white px-8 py-6 text-lg">
                Secure your place <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-center mb-12">What our students say</h2>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://randomuser.me/api/portraits/women/42.jpg" 
                      alt="Sarah Johnson" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Mextalki student for 1 year</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Mextalki transformed my Spanish learning journey. Their engaging content and cultural insights make learning Mexican Spanish fun and authentic!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="David Rodriguez" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">David Rodriguez</h3>
                    <p className="text-sm text-gray-500">Patreon member</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The team at Mextalki truly understand what makes learning effective. Their methods are engaging and the community is incredibly supportive."
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-4">
                <span className="inline-block transform -rotate-3">Mextalker</span>
              </div>
              <p className="text-gray-400">
                Taking your Mexican Spanish to the next level
              </p>
            </div>
            
            <div className="flex flex-col space-y-2 text-center md:text-right">
              <a href="mailto:contact@mextalki.com" className="text-gray-400 hover:text-white transition-colors">
                contact@mextalki.com
              </a>
              <div className="flex space-x-4 justify-center md:justify-end">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  YouTube
                </a>
              </div>
              <div className="text-sm text-gray-500 mt-4">
                <a href="#" className="hover:text-gray-400 transition-colors">Refund Policy</a> | 
                <a href="#" className="hover:text-gray-400 transition-colors ml-2">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Mextalki. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
