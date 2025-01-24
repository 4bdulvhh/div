// DigitalMarketing.jsx

import React from 'react';
import RoomGallery from '../sections/RoomGallery';

const DigitalMarketing = () => {
  return (
    <div className="w-full px-4"> {/* Container genişliyini 100% edirik */}
      <div className="flex flex-col items-center mt-16">
        {/* Main heading with specific width and text wrapping */}
        <div className="w-full md:w-[700px] mb-16"> {/* Daha geniş ekranlarda mərkəzləşdiririk */}
          <h1 className="text-[32px] font-bold leading-tight">
            Digital marketinq dərsləri ilə rəqəmsal dünyada karyeranızı qurun və real layihələrdə təcrübə qazanın.
          </h1>
        </div>
        
        {/* Content container with consistent width */}
        <div className="w-full md:w-[700px] space-y-8"> {/* Bu da eyni şəkildə genişlənir */}
          {/* Program description */}
          <p className="text-base leading-relaxed">
            Proqram intensiv formada həftədə 2 gün, 4 ay davam edir. Hər gün dərslər 50% tədris, 50% praktiki məşğələdən ibarətdir. Hansı ki, bu - ən sürətli öyrənmə metodudur ⚡. Proqram real biznes keysi üzərindən aparılır.
          </p>

          {/* Key features */}
          <p className="text-base leading-relaxed">
            Digital Marketing dərslərinin klassik rəqəmsal marketinq kurslarından fərqləri:
            <ul className="list-disc list-inside mt-4">
              <li>Hər modulda ayrı müəllim: Proqram bir neçə moduldan ibarətdir. Hər modul fərqli instruktor tərəfindən tədris olunur.</li>
              <li>Müxtəlif HR-lar: Ölkənin aparıcı şirkətlərinin HR-ları tələbələrə intervyu sirləri, işə qəbul ipucları təqdim edir.</li>
              <li>Karyera dəstəyi: Proqram boyunca qrup üzvləri karyera mərkəzi tərəfindən peşəkar həyata hazırlaşdırılır.</li>
              <li>100% Təcrübə zəmanəti: Proqramı bitirən bütün iştirakçılar partnyor şirkətlərdə təcrübə proqramına qəbul alır.</li>
              <li>Öyrənənədək dəstək: Öyrənə bilməsən, digər qruplara heç bir ödəniş etmədən transfer ola bilərsən.</li>
            </ul>
          </p>

          {/* Program benefits */}
          <p className="text-base leading-relaxed">
            Div Academy-də Digital Marketing öyrənməklə əldə edəcəyiniz üstünlüklər:
            <ul className="list-disc list-inside mt-4">
              <li>100% təcrübə zəmanəti</li>
              <li>24 saat açıq mərkəz</li>
              <li>Hər gün dərs + praktiki məşğələ</li>
              <li>Nəhəng layihələrdə və xarici şirkətlərdə işləmiş müəllimlər</li>
              <li>Bootcamp sistemi</li>
              <li>Mentor dəstəyi</li>
              <li>Karyera dəstəyi</li>
              <li>Diplom və dərəcəli sertifikat</li>
            </ul>
          </p>

          {/* Career support */}
          <div className="mt-16">
            <h2 className="text-[32px] font-bold mb-8">Digital Marketing tələbəsi kimi hansı karyera dəstəyi alacaqsınız?</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>Karyera mərkəzimizin İnsan resursları mütəxəssisi tərəfindən tamamilə ödənişsiz konsultasiyalar</li>
              <li>Partnyor şirkətlərə iş üçün CV-lərin yönləndirilməsi</li>
              <li>Düzgün CV və portfel hazırlanması</li>
              <li>İş müsahibəsində veriləcək suallara hazırlıq</li>
              <li>Marketinq tədbir, forum, ekskursiyalarda ödənişsiz iştirak</li>
              <li>Sahənin tanınmış spikerlərindən birəbir konsultasiya</li>
            </ul>
          </div>

          {/* Program structure with updated styling */}
          <div className="mt-16">
            <h2 className="text-[32px] font-bold mb-8">Digital Marketing dərslərində hansı biliklərə hakim olacaqsınız?</h2>
            <div className="space-y-8">
              {/* Similar content sections */}
            </div>
          </div>

          {/* Call to action */}
          <p className="text-base leading-relaxed mt-8">
            Digital Marketing sahəsində karyera qurmaq istəyirsinizsə, Div Academy ilə #RəqəmsalMarketinq sahəsində öz yerinizi tutun!
          </p>
        </div>
      </div>
      <RoomGallery />
    </div>
  );
};

export default DigitalMarketing;
