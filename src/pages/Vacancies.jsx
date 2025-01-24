import React from 'react';

const Vacancies = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <p className="mb-8 text-base">
        Proqramlaşdırma kursları dedikdə ilk ağla gələn və rəqəmsal texnologiyalar 
        sahəsində ölkənin aparıcı innovativ şirkətlərindən biri olan Div Academy-də iş 
        imkanları ilə aşağıdan tanış ola bilərsiniz.
      </p>

      <p className="mb-8 text-base">
        Missiyamız Azərbaycanda global bazarda rəqabətə dayanıqlı yerli kadrların 
        hazırlanmasını həyata keçirməkdir. Ancaq bunu tək başına edə bilməyəcəyimizi bilirik.
      </p>

      <p className="mb-8 text-base">
        Bu səbəbdən, eyni hədəf uğrunda mübarizə aparan gənc beyinlərə ehtiyacımız var. 
        İstər proqramlaşdırma, istərsə də digər sahə olsun, vakansiyanın istiqamətindən asılı 
        olmayaraq hər bir üzvün əməyi bizim üçün eyni qədər dəyərli və vacibdir.
      </p>

      <p className="mb-16 text-base">
        Ölkənin IT sektorunda potensial kadrların yetişməsində sənin də rolunun olmasını 
        istəyirsənsə <span className="text-blue-500">#GələcəyiYazanlar</span> ailəsinə qatıl.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Frontend üzrə müəllim" },
          { title: "Marketinq üzrə təcrübəçi" },
          { title: "Marketinq üzrə mütəxəssis" },
          { title: "PHP üzrə müəllim" },
          { title: "Java üzrə müəllim" }
        ].map((position, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center gap-6">
              <img 
                src="/images/canta.png" 
                alt="Briefcase" 
                className="w-16 h-16"
              />
              <h3 className="text-xl">{position.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vacancies;