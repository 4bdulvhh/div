import React from 'react';
import { Clock, Briefcase, RefreshCcw, HandshakeIcon, Target, Umbrella, ScrollText } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Clock,
    title: "24 saat açıq mərkəz",
    color: "#CAB052"
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Karyera mərkəzi",
    color: "#8CC751"
  },
  {
    id: 3,
    icon: RefreshCcw,
    title: "Hər gün praktiki məşğələ",
    color: "#8CC751"
  },
  {
    id: 4,
    icon: HandshakeIcon,
    title: "Mentor dəstəyi",
    color: "#8CC751"
  },
  {
    id: 5,
    icon: Target,
    title: "İnternshiplərə qəbul",
    color: "#8CC751"  
  },
  {
    id: 6,
    icon: Umbrella,
    title: "Bootcamp sistemi",
    color: "#8CC751"
  },
  {
    id: 7,
    icon: ScrollText,
    title: "Dərəcəli diplom və sertifikat",
    color: "#CAB052"
  }
];

const WhyUs = () => {
  return (
    <section className="py-16 px-4 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Niyə biz?
        </h2>
        
        {/* Üstteki 4 Kart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {features.slice(0, 4).map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 h-auto min-h-[250px] max-h-[300px]"
            >
              <feature.icon
                className="w-16 h-16 mb-6"
                strokeWidth={1}
                color={feature.color}
              />
              <h3 className="text-lg font-medium text-[#1A1A1A]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Alttaki 3 Kart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.slice(4).map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 h-auto min-h-[250px] max-h-[300px] w-full"
            >
              <feature.icon
                className="w-16 h-16 mb-6"
                strokeWidth={1}
                color={feature.color}
              />
              <h3 className="text-lg font-medium text-[#1A1A1A]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
