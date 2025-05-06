
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.7');
  }, []);

  const scrollToUpload = () => {
    gsap.to(window, {
      duration: 1.2, 
      scrollTo: { y: "#upload-section", offsetY: 50 },
      ease: "power3.inOut"
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-leaf-healthy/20 to-transparent opacity-20"></div>
      </div>
      <div className="text-center z-10 max-w-3xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          AI-Powered Leaf Health Visualizer
        </h1>
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          Upload a plant leaf image and generate its healthy or reddened version using GenAI.
        </p>
        <Button 
          ref={buttonRef}
          onClick={scrollToUpload}
          className="bg-leaf-healthy hover:bg-leaf-healthy/80 text-white px-8 py-6 text-lg rounded-md animate-pulse-glow"
        >
          Try Demo
        </Button>
      </div>
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-white opacity-70"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
