import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formError, setFormError] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = [
    "Fullstack Proqramlaşdırma",
    "Digital Marketing",
    "Data Science",
    "Product Owner",
    "IT Project Management",
    "IT Biznes Analitika"
  ];

  const slides = [
    {
      title: 'Proqramlaşdırma kursları haqqında bildiklərini unut',
      text: 'İntensiv formada hər gün tədris + praktiki məşğələ ilə proqramlaşdırmanı rahat və qalıcı şəkildə öyrəndikdən sonra təcrübə proqramlarına birbaşa qəbul ol.'
    },
    {
      title: 'İş axtarışında artıq qaydaları sən yaz!',
      text: 'Seçim sənindir: Prestijli şirkətlərə yüksək maaşla işləmək, yaxud freelancer olaraq öz evindən çıxmadan dünyaya xidmət satmaq...'
    },
    {
      title: '#GələcəyiYazanlar dəstəsinə qoşul',
      text: 'Gələcəyi yazanlar olmaq üçün ilk addımını at, proqramlaşdırma öyrən, öz gələcəyini özün yaz!'
    }
  ];

  const handleSlide = (direction) => {
    let newIndex;
    if (direction === 'right') {
      newIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    } else if (direction === 'left') {
      newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    }
    setActiveIndex(newIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCourse || selectedCourse === "Tədrisi seçin") {
      setFormError(true);
    } else {
      setFormError(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide('right');
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleSelectChange = (e) => {
    setSelectedCourse(e.target.value);
    if (e.target.value !== "Tədrisi seçin") {
      setFormError(false);
    }
  };

  return (
    <>
      <style jsx>{`
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        
        select option {
          padding: 12px 16px;
          min-height: 40px;
          display: flex;
          align-items: center;
          background: white;
          color: #14142B;
          font-size: 15px;
          cursor: pointer;
        }
        
        select option:checked,
        select option:hover {
          background: #EFF0F6;
        }
        
        select:focus {
          box-shadow: 0 0 0 2px rgba(149, 193, 31, 0.2);
        }

        select::-ms-expand {
          display: none;
        }
        
        input::placeholder {
          color: #6E7191;
          opacity: 1;
        }

        input:focus {
          box-shadow: 0 0 0 2px rgba(149, 193, 31, 0.2);
        }
          
      `}</style>

      <div className="relative flex flex-col h-[55vh] lg:min-h-[calc(100vh-64px)] bg-[#F5F7FA] overflow-hidden">
        <div className="flex relative h-full max-h-[calc(100vh-64px)]">
          <div className="w-full md:w-[40%]  px-6 md:pl-20 pt-16 relative overflow-hidden">
            <div className="relative h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute w-full transition-all duration-500 ease-in-out ${
                    index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  style={{
                    transform: `translateX(${(index - activeIndex) * 100}%)`,
                    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
                  }}
                >
                  <h1 className="text-[2rem] font-bold mb-4 leading-tight text-[#14142B] max-w-xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-[#4E4B66] mb-8 max-w-xl leading-relaxed">
                    {slide.text}
                  </p>
                  <a href="/courses">
                    <button className="px-6 py-3 bg-[#6E7191] text-white rounded-lg hover:bg-[#5A5E82] transition-colors">
                      Daha ətraflı
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex w-[60%] justify-center items-start pt-16">
            <div className="w-[450px] ml-[20%] bg-[#95c11f] rounded-xl p-8">
              <h3 className="text-white text-2xl font-medium mb-6">
                Qeydiyyatdan keç
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <select 
                    value={selectedCourse}
                    onChange={handleSelectChange}
                    className="w-full h-[46px] px-4 rounded-[4px] bg-white text-[#6E7191] cursor-pointer 
                    border-0 focus:outline-none text-[15px] font-normal appearance-none"
                    style={{
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <option value="" className="text-[#6E7191]">Tədrisi seçin</option>
                    {courses.map((course, index) => (
                      <option 
                        key={index} 
                        value={course}
                        className="py-3 px-4 text-[#14142B] hover:bg-[#EFF0F6]"
                      >
                        {course}
                      </option>
                    ))}
                  </select>
                  
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 2L6 6.5L10.5 2" stroke="#6E7191" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>

                  {formError && (
                    <p className="text-red-100 text-sm mt-1">Zəhmət olmasa, kursu seçin</p>
                  )}
                </div>

                <input 
                  type="text" 
                  placeholder="Adınızı qeyd edin"
                  className="w-full h-[46px] px-4 rounded-[4px] bg-white text-[#6E7191] 
                  border-0 focus:outline-none text-[15px] placeholder:text-[#6E7191]"
                  style={{
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                  }}
                />
                
                <input 
                  type="tel" 
                  placeholder="(055) 000 00 00"
                  className="w-full h-[46px] px-4 rounded-[4px] bg-white text-[#6E7191] 
                  border-0 focus:outline-none text-[15px] placeholder:text-[#6E7191]"
                  style={{
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                  }}
                />
                
                <input 
                  type="email" 
                  placeholder="Emaili daxil edin"
                  className="w-full h-[46px] px-4 rounded-[4px] bg-white text-[#6E7191] 
                  border-0 focus:outline-none text-[15px] placeholder:text-[#6E7191]"
                  style={{
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                  }}
                />
                
                <button className="w-full h-[46px] bg-[#14142B] text-white rounded-[4px] font-medium 
                  text-[15px] hover:bg-[#2a2b4a] transition-colors">
                  Göndər
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-[#95c11f]' : 'bg-[#D9DBE9]'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={() => handleSlide('left')}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white 
          rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 z-10
          transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-[#4E4B66]" />
        </button>
        
        <button 
          onClick={() => handleSlide('right')}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white 
          rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 z-10
          transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5 text-[#4E4B66]" />
        </button>
      </div>
    </>
  );
};

export default Hero;