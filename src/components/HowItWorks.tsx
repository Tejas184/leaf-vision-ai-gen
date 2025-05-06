
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionRef.current && stepsRef.current.length) {
      gsap.from(sectionRef.current.querySelector('h2'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8
      });

      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.from(step, {
            scrollTrigger: {
              trigger: step,
              start: "top 80%"
            },
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2
          });
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div 
            ref={el => stepsRef.current[0] = el}
            className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800 hover:border-leaf-healthy transition-colors duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-leaf-healthy/20 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-leaf-healthy" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Upload Image</h3>
            <p className="text-gray-400 text-center">Upload your plant leaf image using our easy drag-and-drop interface.</p>
          </div>
          
          {/* Step 2 */}
          <div 
            ref={el => stepsRef.current[1] = el}
            className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800 hover:border-leaf-healthy transition-colors duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-leaf-healthy/20 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-leaf-healthy" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4" 
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Choose Mode</h3>
            <p className="text-gray-400 text-center">Select whether you want to generate a healthy or diseased version of your leaf.</p>
          </div>
          
          {/* Step 3 */}
          <div 
            ref={el => stepsRef.current[2] = el}
            className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800 hover:border-leaf-healthy transition-colors duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-leaf-healthy/20 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-leaf-healthy" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">View Result</h3>
            <p className="text-gray-400 text-center">Compare the original and generated images side by side with our AI visualization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
