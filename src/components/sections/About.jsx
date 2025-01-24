import React from 'react';

const About = () => {
  return (
    
    
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Akademiya haqqında</h1>
        
        <section className="mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-[#92C43E]">Div Academy</h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Div Academy, Azərbaycanda IT təhsilinin inkişafına töhfə verən və texnologiya sahəsində 
              peşəkar kadrların yetişdirilməsi ilə məşğul olan təhsil mərkəzidir.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Biz tələbələrimizə praktiki təcrübə və nəzəri bilikləri birləşdirən müasir tədris 
              proqramları təqdim edirik.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Təcrübəli Təlimçilər</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sahəsində təcrübəli mütəxəssislər tərəfindən keçirilən dərslər və praktiki tapşırıqlar
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Müasir Tədris Metodları</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Real layihələr üzərində işləmək və portfolio yaratmaq imkanı
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#92C43E]">Niyə Biz?</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#92C43E]"></span>
              <span>Praktiki təcrübəyə əsaslanan tədris</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#92C43E]"></span>
              <span>Karyera dəstəyi və məsləhət xidməti</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#92C43E]"></span>
              <span>Flexible ödəniş şərtləri</span>
            </li>
          </ul>
        </section>
      </div>
      <Partners/>
    </div>
    
  );
};

export default About;