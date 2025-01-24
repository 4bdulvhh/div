import React from 'react';
import RoomGallery from '../sections/RoomGallery';


const BusinessAnalystic = () => {
  return (
    <><div className="max-w-[1200px] mx-auto px-32">
      <div className="flex flex-col items-center mt-16">
        {/* Main heading with specific width and text wrapping */}
        <div className="w-[700px] mb-16">
          <h1 className="text-[32px] font-bold leading-tight">
            IT Biznes Analitika dərsləri
          </h1>
        </div>
        
        {/* Content container with consistent width */}
        <div className="w-[700px] space-y-8">
          {/* Program description */}
          <p className="text-base leading-relaxed">
            Proqram intensiv formada həftədə 2 gün, 4 ay davam edir. Hər gün dərslər 50% tədris, 50% praktiki məşğələdən ibarətdir. Hansı ki, bu - ən sürətli öyrənmə metodudur ⚡
          </p>
          <p className="text-base leading-relaxed">
            Proqram real biznes keysi üzərindən aparılır. Öz təhsilin üçün xərclədiyin məbləğ ən uğurlu investisiyadır. Beləliklə özünə etdiyin bu yatırımı ən qısa zamanda işləyərək geri qaytarmış olacaqsan və həyatına artıq bir biznes analitik olaraq davam edəcəksən 💪
          </p>

          {/* Key advantages */}
          <div>
            <h2 className="text-[32px] font-bold mb-8">Biznes Analitika dərslərinin hansı üstünlükləri var?</h2>
            <ul className="list-none space-y-4">
              <li>• Müxtəlif HR-lar. Ölkənin aparıcı şirkətlərinin HR-ları tələbələrə intervyu sirləri, işə qəbul ipucları, effektiv iş müraciəti haqda incəlikləri açıqlayır və netvörkinq imkanı yaradılır.</li>
              <li>• Karyera dəstəyi. Proqram boyunca qrup üzvləri karyera mərkəzi tərəfindən müxtəlif təlim və seminarlar ilə peşəkar kadr həyatına hazırlaşdırılır.</li>
              <li>• Öyrənənədək dəstək. Öyrənə bilməsən, digər yeni başlayan qruplara transfer ola bilər və dərslərə heç bir ödəniş etmədən yenidən qatıla bilərsən.</li>
            </ul>
          </div>

          {/* Why Div Academy */}
          <div>
            <h2 className="text-[32px] font-bold mb-8">Niyə Div Academy-də Biznes Analitika öyrənməlisən?</h2>
            <ul className="list-none space-y-2">
              <li>• 24 saat açıq mərkəz</li>
              <li>• Hər gün dərs + praktiki məşğələ</li>
              <li>• Nəhəng layihələrdə və xarici şirkətlərdə işləmiş müəllimlər</li>
              <li>• Bootcamp sistemi</li>
              <li>• Mentor dəstəyi</li>
              <li>• Karyera dəstəyi</li>
              <li>• Diplom və dərəcəli sertifikat</li>
            </ul>
          </div>

          {/* Program structure */}
          <div className="mt-16">
            <h2 className="text-[32px] font-bold mb-8">Biznes Analitika dərslərində hansı biliklərə hakim olacaqsan?</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Biznes analitika nədir?</h3>
                <ul className="list-none space-y-2">
                  <li>• SDLC-ə giriş</li>
                  <li>• Biznes Analitik kimdir?</li>
                  <li>• Biznes Analitikin əsas vəzifə və Öhdəlikləri</li>
                  <li>• Ümumi software layihə komandası kimlərdən ibarətdir</li>
                  <li>• Biznes Analitikin layidəki rolu</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Tələblərin müəyyən edilməsi və toplanması</h3>
                <ul className="list-none space-y-2">
                  <li>• Tələb nədir?</li>
                  <li>• Tələblərin düzgün toplanmasının vacibliyi</li>
                  <li>• Tələblərin toplanma üsulları və metodlar</li>
                  <li>• Sualların növləri barədə məlumat</li>
                  <li>• Tələblərin toplanmasında 5 Niyə metodu</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Analiz</h3>
                <ul className="list-none space-y-2">
                  <li>• Əldə olunan məlumatlar necə analiz edilməlidir?</li>
                  <li>• Analiz metodları</li>
                  <li>• Biznes Prosesi nədir?</li>
                  <li>• As Is – To Be Analizi</li>
                  <li>• Biznes Proseslərinin Xəritəçəkmə və Axın Diaqramı</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">UML</h3>
                <ul className="list-none space-y-2">
                  <li>• UML tarixi və qurucuları</li>
                  <li>• UML Diaqramları</li>
                  <li>• İT biznes analitikləri üçün vacib UML diaqramları</li>
                  <li>• UML Struktur Diaqramlarına Baxış</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">BPMN</h3>
                <ul className="list-none space-y-2">
                  <li>• BPMN nədir?</li>
                  <li>• BPMN elementləri</li>
                  <li>• Çarpaz funksional diaqram</li>
                  <li>• Proseslərin Modelləşdirilməsi növləri</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">İT Biznes Analitik üçün SQL</h3>
                <ul className="list-none space-y-2">
                  <li>• Data modeling və SQL (1)</li>
                  <li>• Data modeling və SQL (2)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Texniki backgorund</h3>
                <ul className="list-none space-y-2">
                  <li>• API nədir</li>
                  <li>• REST API</li>
                  <li>• Authentication and Authorisation</li>
                  <li>• HTTP</li>
                  <li>• Postman</li>
                  <li>• Swagger</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">UX & UI</h3>
                <ul className="list-none space-y-2">
                  <li>• UX & UI design mərhələsi</li>
                  <li>• UX və UI arasındaki fərq</li>
                  <li>• BA üçün hansı ilkin prioritet olmalıdır?</li>
                  <li>• Mockupların hazırlanması Balsamiq</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Agile</h3>
                <ul className="list-none space-y-2">
                  <li>• Agile metodologiyası</li>
                  <li>• Scrum barədə ümumi məlumat</li>
                  <li>• Scrum ceremonies</li>
                  <li>• Scrum artifacts</li>
                  <li>• Events</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Career Support Section */}
          <div className="mt-16">
            <h2 className="text-[32px] font-bold mb-8">Biznes Analitika dərslərinin tələbəsi kimi hansı karyera dəstəyi alacaqsan?</h2>
            <ul className="list-none space-y-2">
              <li>• Karyera mərkəzimizin İnsan resursları mütəxəssisi tərəfindən tamamilə ödənişsiz konsultasiyalar</li>
              <li>• Partnyor şirkətlərə iş üçün CV-lərin yönləndirilməsi</li>
              <li>• Düzgün CV və portfel hazırlanması</li>
              <li>• İş müsahibəsində veriləcək suallara hazırlıq</li>
              <li>• Biznes Analitika mövzulu tədbir, forum, ekskursiyalarda ödənişsiz iştirak</li>
              <li>• Sahənin tanınmış spikerlərindən birəbir konsultasiya</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
      <RoomGallery /></>
  );
};

export default BusinessAnalystic;