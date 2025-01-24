import React from 'react';

const CareerSupport = () => {
  return (
    <div className="flex justify-center items-center min-h-screen max-w-4xl mx-auto text-[#14142B] text-center px-4">
      <div>
        {/* Career Center Introduction */}
        <section className="mb-12">
          <h1 className="text-2xl lg:text-4xl text-start font-bold mb-6">
            Karyera mərkəzi haqqında
          </h1>
          <p className="text-base lg:text-lg max-w-3xl text-start leading-relaxed">
            Mərkəz - məzun olan Div Academy tələbələri üçün böyük önəm daşıyır. 
            Nəzərə alsaq ki, akademiyamız illərlə təcrübəsi olan IT şirkət (OKmedia LLC) tərəfindən təsis edilmişdir, 
            deməli işəgötürənlərin tələblərini, CV göndərilməsindən tutmuş  müsahibəyə qədər hansı yolu keçməli olduğunu 
            ən yaxşı burada öyrənə bilərsən.
          </p>
        </section>

        {/* Support List */}
        <section>
          <h2 className="text-xl lg:text-3xl  text-start font-bold mb-6">
            Hansı dəstəkləri alacaqsan?
          </h2>
          <ul className="list-disc space-y-4 text-base text-start lg:text-lg mx-10  max-w-5xl">
            <li >
              Yerli və ya qlobal şirkətlərin proqramçı tələbləri haqqında dəqiq məlumat
            </li>
            <li>
              İş müsahibəsində hansı cümlələr işə qəbul üçün həll edici rol oynayır
            </li>
            <li>
              Qlobal bazarda remote (uzaqdan) iş üçün resurslar və oradakı fəaliyyət planı
            </li>
            <li>
              Şəxsi portfelin yaradılması və real layihələrlə zənginləşdirilməsi
            </li>
            <li>
              Çoxsaylı maillərin arasından "sıyırla bilən" effektiv CV hazırlanması
            </li>
            <li>
              Git profilinin peşəkar hazırlanması
            </li>
            <li>
              Daimi mentor dəstəyi
            </li>
            <li>
              Partnyor şirkətlərə CV-lərin tərəfimizdən yönləndirilməsi və referans dəstəyi
            </li>
            <li>
              Təcrübə proqramlarına birbaşa qəbul
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CareerSupport;
