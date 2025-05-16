
import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  parallax?: boolean;
  parallaxSpeed?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '',
  parallax = false,
  parallaxSpeed = 0.2
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Add parallax effect
  useEffect(() => {
    if (!parallax) return;

    const handleScroll = () => {
      if (ref.current) {
        const scrollPosition = window.scrollY;
        setOffsetY(scrollPosition * parallaxSpeed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax, parallaxSpeed]);

  const parallaxStyle = parallax ? {
    transform: `translateY(${offsetY}px)`,
  } : {};

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
      style={parallaxStyle}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
