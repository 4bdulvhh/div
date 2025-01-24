// import React from 'react';
// import { Link } from 'react-router-dom';

// const HeroSection = ({ title, image, link = '/', className = '' }) => {
//   return (
//     <div className={`relative w-full bg-white overflow-hidden ${className}`}>
//       <div className="container mx-auto px-4 py-16 md:py-24">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
//           {/* Left Text Area */}
//           <div className="w-full lg:w-1/2">
//             <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-8">
//               {title}
//             </h1>
//             <div className="flex flex-wrap gap-4">
//               <button 
//                 className="px-8 py-3 bg-[#FFD700] rounded-lg font-normal 
//                          text-black hover:bg-[#FFD700]/90 transition-colors"
//               >
//                 Ətraflı
//               </button>
//               <Link
//                 to={link}
//                 className="px-8 py-3 border border-gray-300 rounded-lg 
//                          font-normal text-[#8B0000] hover:bg-gray-50 
//                          transition-colors"
//               >
//                 İndi qeydiyyatdan keç
//               </Link>
//             </div>
//           </div>

//           {/* Right Image Area */}
//           {image && (
//             <div className="relative w-full lg:w-1/2 min-h-[400px]">
//               {/* Gray Circle Background */}
//               <div 
//                 className="absolute w-[500px] h-[500px] bg-gray-100 
//                          rounded-full top-1/2 left-1/2 transform 
//                          -translate-x-1/2 -translate-y-1/2"
//               />

//               {/* Yellow Corner Shape */}
//               <div 
//                 className="absolute w-[300px] h-[300px] bg-[#FFD700]
//                          top-0 right-0 transform translate-x-20 
//                          -translate-y-10"
//               />

//               {/* Image Container */}
//               <div className="relative z-10 h-full">
//                 <img
//                   src={image}
//                   alt={`${title} hero section`}
//                   className="w-full h-full object-cover rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Example usage component
// const HeroSections = () => {
//   return (
//     <div className="space-y-8">
//       <HeroSection
//         title="Div Academy"
//         image="/path-to-your-image.jpg"
//         link="/register"
//       />
//       <HeroSection
//         title="Missiya və vizyon"
//         image="/path-to-mission-image.jpg"
//         link="/mission"
//       />
//     </div>
//   );
// };

// export default HeroSections;