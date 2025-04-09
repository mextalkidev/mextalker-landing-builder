
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold text-mexgreen">
          <span className="inline-block transform -rotate-3">Mextalker</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-800 hover:text-mexgreen transition-colors">About</a>
          <a href="#benefits" className="text-gray-800 hover:text-mexgreen transition-colors">Benefits</a>
          <a href="#itinerary" className="text-gray-800 hover:text-mexgreen transition-colors">Itinerary</a>
          <a href="#gallery" className="text-gray-800 hover:text-mexgreen transition-colors">Gallery</a>
          <a href="#faq" className="text-gray-800 hover:text-mexgreen transition-colors">FAQ</a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Reserve Button - Only visible when scrolled */}
        <div className="hidden md:block">
          {isScrolled && (
            <Button size="sm" className="bg-mexgreen hover:bg-mexgreen/90 text-white">
              Reserve Your Spot
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#about" className="text-gray-800 hover:text-mexgreen transition-colors" onClick={toggleMenu}>About</a>
            <a href="#benefits" className="text-gray-800 hover:text-mexgreen transition-colors" onClick={toggleMenu}>Benefits</a>
            <a href="#itinerary" className="text-gray-800 hover:text-mexgreen transition-colors" onClick={toggleMenu}>Itinerary</a>
            <a href="#gallery" className="text-gray-800 hover:text-mexgreen transition-colors" onClick={toggleMenu}>Gallery</a>
            <a href="#faq" className="text-gray-800 hover:text-mexgreen transition-colors" onClick={toggleMenu}>FAQ</a>
            <Button className="bg-mexgreen hover:bg-mexgreen/90 text-white w-full" onClick={toggleMenu}>
              Reserve Your Spot
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
