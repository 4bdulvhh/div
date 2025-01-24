import React from 'react';
import Technologies from '../common/Technologies';
import RoomGallery from '../sections/RoomGallery';




const FullstackProgramming = () => {
  const programFeatures = {
    mainDifferences: [
      'Hər modulda ayrı müəllim. Proqram bir neçə moduldan ibarətdir. Hər modul fərqli instruktor tərəfindən tədris olunur.',
      'Müxtəlif HR-lar. Ölkənin aparıcı şirkətlərinin HR-ları tələbələrə intervyu sırları, işə qəbul ipuçları, effektiv iş müraciəti haqda incəlikləri açıqlayır və netvörkinq imkanı yaradılır.',
      'Karyera dəstəyi. Proqram boyunca qrup üzvləri karyera mərkəzi tərəfindən müxtəlif təlim və seminarlar ilə peşəkar kadr həyatına hazırlaşdırılır. Həmçinin, mərkəzin partnyorluq etdiyi şirkətlərə tələbələrin CV-ləri yönləndirilir və müsahibələrə yönləndirilir.',
      '100% Təcrübə zəmanəti. Ölkədə rəsmi qaydada təcrübə zəmanəti verən tək akademiya olaraq proqramı bitirən bütün iştirakçılar partnyor şirkətlərdə təcrübə proqramına birbaşa qəbul alır.',
      'Öyrənənədək dəstək. Öyrənə bilməsən, digər yeni başlayan qruplara transfer ola bilər və dərslərə heç bir ödəniş etmədən yenidən qatıla bilərsən.'
    ],
    technologies: [
      'HTML',
      'CSS',
      'Advanced CSS (Flex, Grid)',
      'RWD (Responsive Web Design)',
      'CSS Frameworks (Tailwind, Bootstrap, Materialize)',
      'SASS, SCSS',
      'javascript Core',
      'javascript Advanced',
      'jQuery',
      'Asynchronous JS (AJAX, Fetch)',
      'Version Control Systems (GIT, GitHub)',
      'NodeJS Introduction',
      'Package Manages (NPM)',
      'Module Bundler (WebPack)',
      'React JS',
      'NextJS',
      'NodeJS Advanced',
      'MongoDB',
      'Express JS',
      'XML, JSON',
      'REST API',
      'Project',
      'Web Server \\ Hosting',
      'Publishing \\ Deploy'
    ],
    whyChooseUs: [
      '100% təcrübə zəmanəti',
      '24 saat açıq mərkəz',
      'Hər gün dərs + praktiki məşğələ',
      'Nəhəng layihələrdə və xarici şirkətlərdə işləmiş müəllimlər',
      'Bootcamp sistemi',
      'Mentor dəstəyi',
      'Karyera dəstəyi',
      'Diplom və dərəcəli sertifikat'
    ],
    careerSupport: [
      'Karyera mərkəzimizin İnsan resursları mütəxəssisi tərəfindən tamilə ödənişsiz konsultasiyalar',
      'Partnyor şirkətlərə iş üçün CV-lərin yönləndirilməsi',
      'LinkedIn profili üçün ideyaların verilməsi',
      'GitHub hesabının açılması, istifadəsi və idarə olunması',
      'Düzgün CV və portfel hazırlanması',
      'İş müsahibəsində veriləcək suallara hazırlıq',
      'IT tədbir, forum, ekskursiyalarda ödənişsiz iştirak',
      'Sahənin tanınmış spikerlərindən birəbir konsultasiya'
    ]
  };

  const schedule = [
    {
      phase: "1-ci mərhələ",
      title: "Proqramlaşdırmanın tədrisi",
      groups: [
        { name: "A qrupu", time: "10:00" },
        { name: "B qrupu", time: "15:00" },
        { name: "C qrupu", time: "19:00" }
      ]
    },
    {
      phase: "Fasilə",
      title: "Kofe breyk",
      groups: [
        { name: "A qrupu", time: "11:30" },
        { name: "B qrupu", time: "16:30" },
        { name: "C qrupu", time: "20:30" }
      ]
    },
    {
      phase: "2-ci mərhələ",
      title: "Praktiki məşğələ",
      groups: [
        { name: "A qrupu", time: "11:45" },
        { name: "B qrupu", time: "16:45" },
        { name: "C qrupu", time: "20:45" }
      ]
    }
  ];

  const weekDays = [
    { short: "B.e", full: "Bazar ertəsi" },
    { short: "Ç.a", full: "Çərşənbə axşamı" },
    { short: "Ç", full: "Çərşənbə" },
    { short: "C.a", full: "Cümə axşamı" },
    { short: "C", full: "Cümə" },
    { short: "Ş", full: "Şənbə" }
  ];

  return (<>
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Full-stack proqramlaşdırma dərsləri</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-4">
          Proqram intensiv formada həftədə 3 gün, 12 ay davam edir. Hər gün dərslər 50% tədris, 50% 
          praktiki məşğələdən ibarətdir. Hansı ki, bu - ən sürətli öyrənmə metodudur ⚡
        </p>
        
        <p className="text-lg mb-4">
          Proqramı bitirdikdən sonra birbaşa partnyor şirkətlərin birində təcrübə proqramına
          qoşulursan və karyera dəstəyi alırsan.
        </p>
        
        <p className="text-lg mb-8">
          Beləliklə özünə etdiyin bu yatırımı ən qısa zamanda işləyərək geri qaytarmış olursan və
          həyatını artıq fullstack proqramçı olaraq davam etdirirsən 💪
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-6">
        Fullstack proqramlaşdırma dərslərinin klassik fullstack proqramlaşdırma kurslarından nə fərqi var?
      </h2>
      
      <div className="mb-8">
        {programFeatures.mainDifferences.map((difference, index) => (
          <div key={index} className="flex items-start mb-4">
            <span className="w-1 h-1 bg-blue-600 rounded-full mr-2 mt-2"></span>
            <span>{difference}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">
        Fullstack proqramlaşdırma dərslərində hansı texnologiyalara hakim olacaqsan?
      </h2>
      
      <div className="mb-8">
        {programFeatures.technologies.map((tech, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
            <span>{tech}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">
        Niyə Div Academy-də fullstack proqramlaşdırma öyrənməlisən?
      </h2>
      
      <div className="mb-8">
        {programFeatures.whyChooseUs.map((feature, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">
        Fullstack proqramçı tələbəsi kimi hansı karyera dəstəyi alacaqsan?
      </h2>
      
      <div className="mb-8">
        {programFeatures.careerSupport.map((support, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
            <span>{support}</span>
          </div>
        ))}
      </div>

      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 mb-12">
        Müraciət et
      </button>

      {/* RoomGallery komponenti əlavə edildi */}
      

      <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="border-b border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Tədris planı</h2>
        </div>
        
        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="grid grid-cols-7 gap-1 bg-gray-50">
              <div className="p-4 border-b"></div>
              {weekDays.map((day, index) => (
                <div 
                  key={index} 
                  className="p-4 text-center border-b text-sm font-medium text-gray-700"
                  title={day.full}
                >
                  {day.short}
                </div>
              ))}
            </div>
            
            <div>
              {schedule.map((item, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-7 gap-1 ${
                    item.phase === "Fasilə" 
                      ? "bg-gray-50" 
                      : "bg-orange-50"
                  }`}
                >
                  <div className="p-4 text-sm text-gray-600 border-r">
                    {item.phase}
                  </div>
                  <div className="col-span-6 p-4">
                    <div className="flex flex-col">
                      <div className="font-medium text-gray-800 mb-2 flex items-center">
                        {item.title}
                        <svg 
                          className="w-4 h-4 ml-2 text-gray-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-600 space-x-4">
                        {item.groups.map((group, idx) => (
                          <span key={idx}>
                            {group.time} ({group.name})
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 text-sm text-gray-500 border-t">
          * Qruplar üzrə dərs saatları tələbə sayına görə dəyişə bilər
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        Tədris həftədə 3 gün olmaqla 12 ay davam edir. Hər dərs günü nəzəri və praktiki olmaqla 2 
        mərhələdən ibarətdir. Tədris boyunca əlavə ödənişsiz mentor dəstəyi də təmin olunur.
      </div> 
      
    </div>
      <Technologies showFullstack={true} showDataScience={false} />
      <RoomGallery /></>
  );
};

export default FullstackProgramming;