import React from 'react';

const coursesData = [
  {
    id: 1,
    title: "Fullstack Proqramlaşdırma",
    description: "HTML, CSS, Tailwind, JS, React, NextJS, NodeJS, MongoDB, XML, API, Git, Deployment"
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Marketingə giriş, Rəqəmsal marketing, SMM, Kontent ilə işləmə, Google Ads və s."
  },
  {
    id: 3,
    title: "Data Science",
    description: "Data Science-a giriş, Python, SQL, Data analitika, Machine Learning, Süni intellekt"
  },
  {
    id: 4,
    title: "IT Project Management",
    description: "Agile, Waterfall metodları, Project structures, Soft skills, Risk analysis və s."
  },
  {
    id: 5,
    title: "Product Owner",
    description: "Product Management, Agile, Scrum, User Stories, Backlog Management"
  },
  {
    id: 6,
    title: "IT Biznes Analitika",
    description: "Business Analysis, Requirements Engineering, Process Modeling, Data Analysis"
  }
];

const Courses = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] font-bold text-center mb-12 text-[#1A1A1A]">
          Gələcəyini necə inşa etmək istəyirsən?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coursesData.map((course) => (
            <div 
              key={course.id} 
              className="bg-[#F9F9F9] rounded-lg transition-all duration-300 p-6 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/assets/images/house-icon.svg" 
                    alt={course.title} 
                    className="w-[120px] h-[120px] object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[22px] font-bold mb-2 text-[#1A1A1A]">{course.title}</h3>
                  <p className="text-[#666666] text-[15px] leading-relaxed">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;