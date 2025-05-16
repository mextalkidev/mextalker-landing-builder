
import React from 'react';

const FooterSection: React.FC = () => {
  return (
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
  );
};

export default FooterSection;
