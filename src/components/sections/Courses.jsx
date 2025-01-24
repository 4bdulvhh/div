import React from 'react';
import { Link } from 'react-router-dom';

const coursesData = [
  {
    id: 1,
    title: "Fullstack Proqramlaşdırma",
    description: "HTML, CSS, Tailwind, JS, React, NextJS, NodeJS, MongoDB, XML, API, Git, Deployment",
    link: "/courses/fullstack-programming"
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Marketingə giriş, Rəqəmsal marketing, SMM, Kontent ilə işləmə, Google Ads və s.",
    link: "/courses/digital-marketing"
  },
  {
    id: 3,
    title: "Data Science",
    description: "Data Science-a giriş, Python, SQL, Data analitika, Machine Learning, Süni intellekt",
    link: "/courses/data-science"
  },
  {
    id: 4,
    title: "IT Project Management",
    description: "Agile, Waterfall metodları, Project structures, Soft skills, Risk analysis və s.",
    link: "/courses/it-project-management"
  },
  {
    id: 5,
    title: "Product Owner",
    description: "Product Management, Agile, Scrum, User Stories, Backlog Management",
    link: "/courses/product-owner"
  },
  {
    id: 6,
    title: "IT Biznes Analitika",
    description: "Business Analysis, Requirements Engineering, Process Modeling, Data Analysis",
    link: "/courses/business-analytics"
  }
];

const Courses = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-[#1A1A1A]">
          Gələcəyini necə inşa etmək istəyirsən?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {coursesData.map((course) => (
            <Link to={course.link} key={course.id} className="w-full">
              <div className="bg-[#F9F9F9] rounded-lg transition-all duration-300 p-4 md:p-6 transform hover:-translate-y-1 cursor-pointer w-full">
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <img
                      src="/images/house.png"
                      alt={course.title}
                      className="w-20 h-20 md:w-[120px] md:h-[120px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-grow">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-[#1A1A1A]">
                      {course.title}
                    </h3>
                    <p className="text-[#666666] text-sm md:text-[15px] leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;