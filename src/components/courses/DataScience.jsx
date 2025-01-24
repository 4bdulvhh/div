import React from 'react';
import Technologies from '../common/Technologies';
import RoomGallery from '../sections/RoomGallery';

const DataScience = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center mt-16">
          {/* Main heading with specific width and text wrapping */}
          <div className="w-full max-w-[700px] mb-16">
            <h1 className="text-[24px] md:text-[32px] font-bold leading-tight text-center">
              Div Academy-də Data Science öyrənməklə həm gələcəyinizə sərmayə yatırırsınız, həm də real layihələrdə iştirak edərək praktiki biliklər qazanırsınız.
            </h1>
          </div>

          {/* Content container with consistent width */}
          <div className="w-full max-w-[700px] space-y-8">
            {/* Program description */}
            <p className="text-base leading-relaxed">
              Proqram intensiv formada həftədə 3 gün, 6 ay davam edir. Hər gün dərslər 50% tədris, 50% praktiki məşğələdən ibarətdir. Təcrübələr göstərir ki, bu — ən keyfiyyətli öyrənmə metodudur ⚡.
            </p>

            {/* Key features */}
            <p className="text-base leading-relaxed">
              Data Science dərslərinin klassik data analitika kurslarından fərqləri:
              <ul className="list-disc list-inside mt-4">
                <li>Müxtəlif HR-lar: Ölkənin aparıcı şirkətlərinin HR-ları tələbələrə intervyu sirləri, işə qəbul ipucları və netvörkinq imkanı yaradır.</li>
                <li>Karyera dəstəyi: Proqram boyunca qrup üzvləri karyera mərkəzi tərəfindən müxtəlif təlim və seminarlarla peşəkar həyata hazırlaşdırılır. Tələbələrin CV-ləri partnyor şirkətlərə göndərilir.</li>
                <li>Öyrənənədək dəstək: Öyrənə bilməsən, digər yeni başlayan qruplara heç bir ödəniş etmədən qoşula bilərsən.</li>
              </ul>
            </p>

            {/* Program benefits */}
            <p className="text-base leading-relaxed">
              Div Academy-də Data Science təhsili alaraq aşağıdakı üstünlükləri əldə edəcəksiniz:
              <ul className="list-disc list-inside mt-4">
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
              <h2 className="text-[24px] md:text-[32px] font-bold mb-8">
                Data Science tələbəsi kimi hansı karyera dəstəyi alacaqsınız?
              </h2>
              <ul className="list-disc list-inside space-y-4">
                <li>Karyera mərkəzimizin İnsan resursları mütəxəssisi tərəfindən tamamilə ödənişsiz konsultasiyalar</li>
                <li>Partnyor şirkətlərə iş üçün CV-lərin yönləndirilməsi</li>
                <li>Düzgün CV və portfel hazırlanması</li>
                <li>İş müsahibəsində veriləcək suallara hazırlıq</li>
                <li>Data sahəsi üzrə tədbir, forum, ekskursiyalarda ödənişsiz iştirak</li>
                <li>Sahənin tanınmış spikerlərindən birəbir konsultasiya</li>
              </ul>
            </div>

            {/* Program structure */}
            <div className="mt-16">
              <h2 className="text-[24px] md:text-[32px] font-bold mb-8">
                Data Science dərslərində hansı bilikləri əldə edəcəksiniz?
              </h2>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <strong>FOUNDATIONS OF DATA & ANALYTICS:</strong> SQL, məlumatların idarəedilməsi və əsas data analiz texnikaları.
                </li>
                <li>
                  <strong>PROGRAMMING PRINCIPLES WITH PYTHON:</strong> Python proqramlaşdırma əsasları, obyekt yönümlü proqramlaşdırma və məlumatların işlənməsi.
                </li>
                <li>
                  <strong>DATA WRANGLING AND ANALYSIS WITH PYTHON:</strong> Pandas və NumPy ilə məlumatların təmizlənməsi və hazırlanması.
                </li>
                <li>
                  <strong>DATA VISUALIZATION:</strong> Power BI, Matplotlib və hipotez yoxlanışı ilə məlumatların vizuallaşdırılması.
                </li>
                <li>
                  <strong>FOUNDATIONS OF DATA SCIENCE:</strong> Maşın öyrənmə modelləri, xüsusiyyət mühəndisliyi, klassifikasiya və klasterinq texnikaları.
                </li>
                <li>
                  <strong>FOUNDATIONS OF DATA ENGINEERING:</strong> NoSQL, bulud həlləri, məlumat boruları və məlumat anbarı dizaynı.
                </li>
                <li>
                  <strong>INTRODUCTORY TOPICS IN ARTIFICIAL INTELLIGENCE AND BIG DATA:</strong> Hadoop, Apache Spark və Amazon xidmətləri ilə böyük məlumatlar və süni intellekt.
                </li>
              </ol>
            </div>

            {/* Call to action */}
            <p className="text-base leading-relaxed mt-8">
              Şübhəsiz ki, Data Science öyrənmək ən müasir və ağıllı seçimdir. Akademiyamızda təhsil alaraq <span className="text-[#95C11F]">#MəlumatAnalitikləri</span> arasında yerinizi alın!
            </p>
          </div>
        </div>
      </div>
      <Technologies showFullstack={false} showDataScience={true} />
      <RoomGallery />
    </>
  );
};

export default DataScience;
