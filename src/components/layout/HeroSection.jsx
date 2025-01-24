import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, image, link = '/', className = '' }) => {
  const detailsRef = useRef(null);

  const handleSlowScroll = () => {
    const targetPosition = detailsRef.current.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    const easeInOutQuad = (time, start, change, duration) => {
      time /= duration / 2;
      if (time < 1) return (change / 2) * time * time + start;
      time--;
      return (-change / 2) * (time * (time - 2) - 1) + start;
    };

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <>
      <div className={`relative w-full h-[80vh] lg:min-h-[calc(100vh-64px)] bg-[#f5f6fa] overflow-hidden ${className}`}>
        <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">
            {/* Left Text Area */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
                {title}
              </h1>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button
                  onClick={handleSlowScroll}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 bg-[#FFD700] rounded-lg 
                         font-normal text-black hover:bg-[#FFD700]/90 transition-colors"
                >
                  Ətraflı
                </button>
                <Link
                  to={link}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 border border-gray-300 
                           rounded-lg font-normal text-[#8B0000] hover:bg-gray-50 
                           transition-colors text-center"
                >
                  İndi qeydiyyatdan keç
                </Link>
              </div>
            </div>

            {/* Right Image Area */}
            {image && (
              <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0">
                <div className="aspect-video md:aspect-square lg:aspect-auto lg:min-h-[400px]">
                  {/* Gray Circle Background */}
                  <div
                    className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] 
                             lg:w-[450px] lg:h-[450px] bg-gray-200 rounded-full 
                             top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />

                  {/* Yellow Corner Shape */}
                  <div
                    className="absolute w-[200px] h-[150px] sm:w-[300px] sm:h-[200px] 
                             lg:w-[350px] lg:h-[250px] bg-[#ffd900c2] top-0 right-0 
                             transform translate-x-10 -translate-y-5 lg:translate-x-20 
                             lg:-translate-y-10"
                  />

                  {/* Image Container */}
                  <div className="relative w-[250px] h-[180px] sm:w-[300px] sm:h-[200px] 
                                lg:w-[400px] lg:h-[250px] mx-auto z-10">
                    <img
                      src={image}
                      alt={`${title} hero section`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
