
import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import ImageUpload from '@/components/ImageUpload';
import ImageComparison from '@/components/ImageComparison';
import AboutProject from '@/components/AboutProject';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Index = () => {
  const [comparisonImages, setComparisonImages] = useState<{
    original: string;
    generated: string;
    mode: string;
  } | null>(null);

  useEffect(() => {
    // Initialize GSAP ScrollTrigger for the page
    ScrollTrigger.refresh();
    
    // Update document title
    document.title = 'AI-Powered Leaf Health Visualizer';
  }, []);

  const handleImageGenerated = (originalImage: string, generatedImage: string, mode: string) => {
    setComparisonImages({
      original: originalImage,
      generated: generatedImage,
      mode: mode
    });
    
    // Scroll to the comparison section after a brief delay
    setTimeout(() => {
      const comparisonElement = document.getElementById('comparison-section');
      if (comparisonElement) {
        gsap.to(window, {
          duration: 1, 
          scrollTo: { y: comparisonElement, offsetY: 50 },
          ease: "power3.inOut"
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <HeroSection />
      
      <div className="leaf-section-divider"></div>
      
      <HowItWorks />
      
      <div className="leaf-section-divider"></div>
      
      <ImageUpload onImageGenerated={handleImageGenerated} />
      
      {comparisonImages && (
        <div id="comparison-section">
          <ImageComparison 
            originalImage={comparisonImages.original}
            generatedImage={comparisonImages.generated}
            mode={comparisonImages.mode}
          />
        </div>
      )}
      
      <div className="leaf-section-divider"></div>
      
      <AboutProject />
      
      <Footer />
    </div>
  );
};

export default Index;
