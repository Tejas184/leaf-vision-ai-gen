
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AboutProject: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll('.animate-item'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-[#121212] to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animate-item">About the Project</h2>
        
        <div className="bg-gray-900/40 p-8 rounded-lg border border-gray-800 animate-item">
          <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
          <p className="text-gray-300 mb-6">
            This project combines StyleGAN (Generative Adversarial Network) with Natural Language Processing to transform plant leaf images between healthy and diseased states. The model was trained on thousands of leaf images to understand the visual patterns of both healthy and diseased foliage.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">How it Works</h3>
          <p className="text-gray-300 mb-6">
            When you upload an image, our AI analyzes the leaf structure, vein patterns, and color distribution. Based on your selection, it generates either a healthy version (removing disease markers) or a diseased version (adding realistic disease features like spotting, discoloration, or wilting).
          </p>
          
          <h3 className="text-xl font-semibold mb-6">Applications</h3>
          <ul className="list-disc ml-6 text-gray-300 space-y-2">
            <li>Educational tool for plant pathology students</li>
            <li>Research aid for botanists and agricultural scientists</li>
            <li>Early disease visualization for farmers</li>
            <li>Dataset augmentation for machine learning models</li>
          </ul>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 animate-item">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="white"/>
            </svg>
            GitHub Repository
          </a>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452Z" fill="white"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
