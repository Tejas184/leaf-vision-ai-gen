
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ImageComparisonProps {
  originalImage: string;
  generatedImage: string;
  mode: string;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({ 
  originalImage, 
  generatedImage,
  mode
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current, 
        { 
          y: 50,
          opacity: 0 
        },
        { 
          y: 0,
          opacity: 1, 
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }
  }, [originalImage, generatedImage]);

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto my-12">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        {mode === 'healthy' ? 
          'Original vs. Healthy Leaf' : 
          'Original vs. Diseased Leaf'
        }
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900/60 p-4 rounded-lg">
          <h4 className="text-lg font-medium mb-3 text-center">Original Image</h4>
          <div className="aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
            <img 
              src={originalImage} 
              alt="Original leaf" 
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>

        <div className={`p-4 rounded-lg ${mode === 'healthy' ? 'bg-leaf-healthy/10' : 'bg-leaf-diseased/10'}`}>
          <h4 className="text-lg font-medium mb-3 text-center">
            {mode === 'healthy' ? 'Healthy Version' : 'Diseased Version'}
          </h4>
          <div className="aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
            <img 
              src={generatedImage} 
              alt={`${mode} version`} 
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
        <h4 className="text-lg font-medium mb-2">Analysis</h4>
        <p className="text-gray-400">
          {mode === 'healthy' 
            ? "The AI model has analyzed the leaf's structure and removed disease markers, adjusting chlorophyll levels and tissue health indicators to transform it into a healthy state."
            : "The AI model has analyzed the leaf's structure and applied disease markers like reduced chlorophyll, necrotic tissues, and discoloration patterns typical of plant disease."}
        </p>
      </div>
    </div>
  );
};

export default ImageComparison;
