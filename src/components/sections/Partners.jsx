import React, { useRef, useState } from 'react';

const PartnerCard = ({ name, logo }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      className="relative bg-[#F5F6FA] rounded-xl p-6 overflow-hidden group cursor-pointer"
      style={{
        '--mouse-x': `${position.x}%`,
        '--mouse-y': `${position.y}%`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), rgba(0,0,0,0.09) 0%, rgba(0,0,0,0.06) 40%, transparent 100%)',
        }}
      />
      <div className="relative flex items-center justify-center h-24 w-32 mx-auto">
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-w-full h-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

const Partners = () => {
  const partners = [
    { name: 'ADA', logo: '/images/ada.png' },
    { name: 'Baku Ali Mekteb', logo: '/images/banm.png' },
    { name: 'Dovlet Mesqulluq', logo: '/images/dma.png' },
    { name: 'Sabah Hub', logo: '/images/sabahhub.png' },
    { name: 'Innovation Agency', logo: '/images/rinn.png' },
    { name: 'Kapital Bank', logo: '/images/kapital-bank.png' },
    { name: 'Azerbaijan Republic', logo: '/images/idda.png' },
    { name: 'Special Talent', logo: '/images/tehsil-assosiasiyasi.png' },
    { name: 'ABB', logo: '/images/abb.png' },
    { name: 'Hesab.az', logo: '/images/hesabaz.png' },
    { name: 'Ulduzum', logo: '/images/ulduzum.png' },
    { name: 'Unibank', logo: '/images/unibank.png' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-[2rem] font-bold text-center mb-8 text-[#333]">Partnyorlarımız</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} name={partner.name} logo={partner.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
