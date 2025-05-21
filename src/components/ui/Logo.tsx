import React from 'react';
import { BrainCircuit } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <BrainCircuit className="text-white mr-2 h-8 w-8" />
      <span className="font-display font-bold text-xl tracking-widest">
        Fonabs<span className="text-white text-shadow-subtle">AI</span>
      </span>
    </div>
  );
};

export default Logo;