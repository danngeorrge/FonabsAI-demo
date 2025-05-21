import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  isVisible?: boolean;
  alignment?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  isVisible = true,
  alignment = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto'
  };

  return (
    <div className={`max-w-2xl ${alignmentClasses[alignment]}`}>
      <h2 
        className={`text-3xl md:text-4xl font-display font-bold mb-4 transition-all duration-700 opacity-0 transform translate-y-6 ${
          isVisible ? 'opacity-100 transform-none' : ''
        }`}
      >
        <span className="relative">
          {title}
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent-glow"></span>
        </span>
      </h2>
      
      <p 
        className={`text-lg text-white/70 transition-all duration-700 delay-200 opacity-0 ${
          isVisible ? 'opacity-100' : ''
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;