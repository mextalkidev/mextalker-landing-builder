
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollAnimation from './ScrollAnimation';

const faqs = [
  {
    question: "What level of Spanish do I need?",
    answer: "This retreat is designed for intermediate to advanced learners of Spanish."
  },
  {
    question: "What's included in the price?",
    answer: "Lodging, meals, transport, entry to all activities, classes, materials, and guided experiences."
  },
  {
    question: "How do I reserve my spot?",
    answer: "Simply pay a $450 USD deposit (refundable within the first 30 days). Payment via PayPal or Stripe."
  },
  {
    question: "How many participants will there be?",
    answer: "The experience is limited to 12 people to ensure personalized attention."
  },
  {
    question: "What's your cancellation policy?",
    answer: "You can get a full refund of your deposit within the first 30 days of payment."
  },
  {
    question: "Where will we be staying?",
    answer: "Lodging will be in a comfortable, well-located area of Mexico City. Full details are shared after registration."
  },
  {
    question: "Can I pay in installments?",
    answer: "Reach out to us and we'll find a custom solution for you."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container max-w-3xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        </ScrollAnimation>

        <ScrollAnimation>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FAQSection;
