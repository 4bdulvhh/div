import React from "react";
import { useNavigate } from "react-router-dom";

const SocialResponsibility = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Freelance işi öyrədirik",
      description: "Məkan, fiziki güc asılılığını ortadan qaldıran ən müasir iş modelini öyrədirik",
      position: "left"
    },
    {
      title: "Peşəkar spikerlər dəvət edirik",
      description: "Sahənin tanınmış ekspertlərini onlara dəstək üçün səfərbər edirik",
      position: "left"
    },
    {
      title: "Düzgün istiqamət veririk",
      description: "Fiziki məhdudiyyətli gənclərin proqramlaşdırma ilə bağlı suallarını cavabladıq",
      position: "right"
    },
    {
      title: "'Balıq tutmağı' öyrədirik",
      description: "Öz ayaqları üstündə durması üçün onlara 'balıq vermirik, balıq tutmağı' öyrədirik",
      position: "right"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Sosial məsuliyyət</h2>
        <p className="text-xl text-gray-600 mb-16">#bacararsan</p>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 items-center">
          {/* Sol yazılar */}
          <div className="space-y-8 w-full max-w-xs mx-auto px-4">
            {features
              .filter(f => f.position === "left")
              .map((feature, index) => (
                <div key={index} className="text-left">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
          </div>

          {/* Mərkəzi şəkil */}
          <div className="relative w-full max-w-[300px] md:max-w-[400px] mx-auto px-4">
            <img
              src="/images/sosialmehsuliyyet.png"
              alt="Laptop"
              className="w-full h-auto md:h-[350px] rounded-lg shadow-lg object-cover"
              onClick={() => navigate("/social")}
              style={{ cursor: "pointer" }}
            />
            {/* Xətlər yalnız desktop görünüşdə göstərilir */}
            <div className="hidden lg:block">
              <div 
                className="line-effect absolute top-1/4 left-[-40px]" 
                data-aos="fade-up"
              ></div>
              <div 
                className="line-effect absolute bottom-1/4 left-[-40px]" 
                data-aos="fade-up"
              ></div>
              <div 
                className="line-effect absolute top-1/4 right-[-40px]" 
                data-aos="fade-up"
              ></div>
              <div 
                className="line-effect absolute bottom-1/4 right-[-40px]" 
                data-aos="fade-up"
              ></div>
            </div>
          </div>

          {/* Sağ yazılar */}
          <div className="space-y-8 w-full max-w-xs mx-auto px-4">
            {features
              .filter(f => f.position === "right")
              .map((feature, index) => (
                <div key={index} className="text-left">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibility;