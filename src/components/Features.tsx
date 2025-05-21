import React, { useRef, useState, useEffect } from 'react';
import { MessageSquare, BrainCircuit, Workflow, LineChart, ShieldCheck, Zap } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-primary-800 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-800 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Features & Capabilities"
          subtitle="Cutting-edge AI technology to power your business automation"
          isVisible={isVisible}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay,
  isVisible
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`p-6 rounded-lg border border-primary-600 relative overflow-hidden transition-all duration-500 transform translate-y-10 opacity-0 ${
        isVisible ? 'transform-none opacity-100' : ''
      } ${
        isHovered ? 'bg-primary-700/50 border-accent-glow/30 shadow-glow-sm' : 'bg-primary-700/20'
      }`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div 
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-glow/10 to-accent-purple/5 opacity-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : ''
        }`}
      ></div>
      
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mb-4 text-accent-glow transition-all duration-300 ${
          isHovered ? 'bg-accent-glow/20' : ''
        }`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
        
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const features = [
  {
    icon: <MessageSquare size={20} />,
    title: "Natural Language Processing",
    description: "Advanced algorithms that understand and respond to human language with remarkable accuracy and context awareness."
  },
  {
    icon: <BrainCircuit size={20} />,
    title: "Machine Learning Integration",
    description: "Self-improving systems that adapt to your business patterns and customer behaviors for increasingly effective automation."
  },
  {
    icon: <Workflow size={20} />,
    title: "Workflow Automation",
    description: "Streamline complex business processes with intelligent automation that handles repetitive tasks and decision-making."
  },
  {
    icon: <LineChart size={20} />,
    title: "Data Analytics",
    description: "Comprehensive analytics and reporting tools that provide actionable insights from customer interactions and business processes."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Enterprise Security",
    description: "Robust security measures ensuring your data and customer information remains protected throughout all automated processes."
  },
  {
    icon: <Zap size={20} />,
    title: "Real-time Responses",
    description: "Instant processing and response capabilities that ensure your customers and team members get immediate assistance 24/7."
  }
];

export default Features;