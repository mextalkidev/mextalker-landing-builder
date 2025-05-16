
import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const SpecialOfferSection: React.FC = () => {
  return (
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
  );
};

export default SpecialOfferSection;
