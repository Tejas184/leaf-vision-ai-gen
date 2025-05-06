
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-leaf-healthy/20 mr-3 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-leaf-healthy" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M7 21h10a2 2 0 0 0 2-2V11H7v10zm2-8h6v2H9v-2zm8-9H7a2 2 0 0 0-2 2v3h14V6a2 2 0 0 0-2-2z"></path>
            </svg>
          </div>
          <span className="font-semibold text-lg">LeafVision AI</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 text-center">
          © {currentYear} LeafVision AI. All rights reserved.
        </p>
        
        <p className="text-gray-500 text-sm flex items-center">
          Built with 
          <span className="text-red-500 mx-1">❤️</span> 
          using GenAI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
