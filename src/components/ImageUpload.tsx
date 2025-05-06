
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

interface ImageUploadProps {
  onImageGenerated: (originalImage: string, generatedImage: string, mode: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageGenerated }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (dropZoneRef.current) {
      gsap.from(dropZoneRef.current, {
        scrollTrigger: {
          trigger: dropZoneRef.current,
          start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      });
    }
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      processFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  // Placeholder function for generating images
  const generateImage = (mode: string) => {
    setLoading(mode);
    console.log(`Generating ${mode} version of the leaf image`);
    
    // Simulate API call delay
    setTimeout(() => {
      // For demo purposes, we're using placeholder images
      // In a real application, this would be replaced with the actual API call
      let placeholderGenerated = '';
      
      if (mode === 'healthy') {
        placeholderGenerated = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop';
      } else {
        placeholderGenerated = 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop';
      }

      // Call the callback with both the original and generated images
      if (image) {
        onImageGenerated(image, placeholderGenerated, mode);
      }
      
      setLoading(null);
    }, 2000);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="upload-section" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Upload Your Leaf Image</h2>
        
        <div 
          ref={dropZoneRef}
          className={`drop-zone p-10 rounded-lg text-center cursor-pointer mb-8 ${isDragging ? 'active' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerFileInput}
        >
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*" 
            className="hidden" 
          />
          
          {image ? (
            <div className="mb-6">
              <img 
                src={image} 
                alt="Uploaded leaf" 
                className="max-h-64 mx-auto rounded-md" 
              />
              <p className="mt-4 text-gray-400">Click or drag to upload a different image</p>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 text-gray-500 mx-auto" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </div>
              <p className="text-lg font-medium">Drag & drop your leaf image here</p>
              <p className="mt-2 text-gray-400">or click to browse</p>
            </>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            onClick={() => generateImage('healthy')}
            disabled={!image || loading !== null}
            className={`bg-leaf-healthy hover:bg-leaf-healthy/80 text-white px-6 py-6 text-lg rounded-md ${!image ? 'opacity-50 cursor-not-allowed' : 'animate-pulse-glow'}`}
          >
            {loading === 'healthy' ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </div>
            ) : (
              'Generate Healthy Version'
            )}
          </Button>
          
          <Button 
            onClick={() => generateImage('diseased')}
            disabled={!image || loading !== null}
            className={`bg-leaf-diseased hover:bg-leaf-diseased/80 text-white px-6 py-6 text-lg rounded-md ${!image ? 'opacity-50 cursor-not-allowed' : 'animate-pulse-glow-red'}`}
          >
            {loading === 'diseased' ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </div>
            ) : (
              'Generate Diseased Version'
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
