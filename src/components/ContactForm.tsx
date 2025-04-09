
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import ScrollAnimation from './ScrollAnimation';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
    
    // In a real application, you would submit the form data to a backend service
    // For example:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   if (response.ok) {
    //     toast({
    //       title: "Message sent!",
    //       description: "We'll get back to you as soon as possible."
    //     });
    //     setFormData({ name: '', email: '', message: '' });
    //   } else {
    //     throw new Error('Failed to send message');
    //   }
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Failed to send your message. Please try again later.",
    //     variant: "destructive"
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-2xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-2">Got questions?</h2>
          <p className="text-center text-gray-600 mb-8">Let's talk! We're here to help you.</p>
        </ScrollAnimation>

        <ScrollAnimation>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="w-full min-h-[120px]"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-mexgreen hover:bg-mexgreen/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ContactForm;
