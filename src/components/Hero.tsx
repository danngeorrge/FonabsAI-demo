import React, { useEffect, useRef } from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const glowElements = heroRef.current.querySelectorAll('.glow-element');
      glowElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.transform = `translate(${moveX * -1}px, ${moveY * -1}px)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-primary-900 bg-tech-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-light opacity-5 rounded-full filter blur-[100px] animate-pulse-subtle glow-element"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light opacity-5 rounded-full filter blur-[100px] animate-pulse-subtle glow-element" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-fade-in tracking-tight">
            <span className="block">Intelligence</span>
            <span className="text-accent-light text-shadow-strong">Automated.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up opacity-0 font-mono tracking-wide" style={{ animationDelay: '0.3s' }}>
            Transform your business with AI-powered automation. 
            Our solutions streamline workflows, engage customers, and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <Button
              variant="primary"
              href="#contact"
              className="text-lg py-3 px-8 tracking-wider"
            >
              Book a Call
            </Button>
            <Button
              variant="outline"
              href="#features"
              className="text-lg py-3 px-8 tracking-wider"
            >
              Explore Features
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-3 bg-white/30 rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;