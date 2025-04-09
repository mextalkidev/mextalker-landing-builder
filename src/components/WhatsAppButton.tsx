
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/yourphonenumber?text=Hi!%20I%27m%20interested%20in%20the%20Experiencia%20Mextalker...', '_blank');
  };

  return (
    <button 
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5C] transition-colors duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;
