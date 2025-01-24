import React from 'react';

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12 max-w-3xl text-center overflow-x-hidden sm:px-2 sm:py-8">
        <div className="mb-8">
          <p className="leading-relaxed text-lg">
            Div Academy innovativ sahələri tədris edən, Azərbaycanın ən böyük IT akademiyalarından 
            biridir. 10+ illik təcrübəsi olan IT şirkəti tərəfindən təsis olunmuşdur. Hazırda 2000-dən çox 
            tələbə və məzunu olan akademiya, Bakıda və ölkənin müxtəlif regionlarında tədris 
            təcrübəsinə malikdir.
          </p>
        </div>

        <div className="mb-8">
          <p className="leading-relaxed text-lg">
            Akademiya Azərbaycanda 24 saat fasiləsiz fəaliyyət göstərən yeganə IT akademiyası olaraq 
            tələbələrə müasir icma və şəbəkələşmə təmin edir.
          </p>
        </div>

        <div className="mb-8">
          <p className="leading-relaxed text-lg">
            Akademiyanın nəzdində fəaliyyət göstərən karyera mərkəzi 100-dən çox özəl şirkət və dövlət 
            qurumu ilə partnyorluq edərək, tələbə və məzunlara iş imkanları yaradır.
          </p>
        </div>

        <div className="mb-12">
          <p className="leading-relaxed text-lg">
            100% təcrübə zəmanətli təhsil imkanı ilə tələbələrə klassik kurs metodunu unutduraraq 
            birbaşa əmək bazarına qədər yetişdirmə rolu oynayır.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8">Niyə innovasiya sektorunda olmalısan?</h2>
        <ul className="mb-16 space-y-4 leading-relaxed text-lg text-left">
          <li>• Ölkəmizdə və dünyada ən yüksək maaşlar məhz bu sektordakı vakansiyalardadır</li>
          <li>• Həm ofisdən, həm evdən işləyə biləcəyin bir işdir</li>
          <li>• Hansısa şirkətin işçisi olmasan belə, özün freelance xidmət göstərə bilərsən</li>
          <li>• Ölkə xaricinə asanlıqla köçə və orada yüksək maaşa işləyə bilərsən</li>
          <li>• Linkedin üzərindən daim xarici şirkətlərdən təkliflər ala bilərsən</li>
          <li>• Gələcək nəsillərə daha yaxşı bir dünya inşa edə bilərsən...</li>
        </ul>

        <h2 className="text-3xl font-bold mb-8">Akademiya kimlər üçündür?</h2>
        <ul className="mb-16 space-y-4 leading-relaxed text-lg text-left">
          <li>• İstənilən ixtisasda oxuyan ancaq texnologiyaya və müasir peşələrə həvəsli tələbələr</li>
          <li>• Universiteti yeni bitirmiş məzunlar</li>
          <li>• Tamamılə fərqli sahədə işləyən şəxslər</li>
          <li>• Yaxın 2-5 ildə xaricə köçməyi planlaşdıranlar</li>
          <li>• Özü öyrənməkdə (self study) çətinlik çəkənlər</li>
          <li>• Evdən (remote) və ya sərbəst (freelance) işlərdə işləməyi xoşlayanlar</li>
        </ul>

        <h2 className="text-3xl font-bold mb-8">Niyə Div Academy?</h2>
        <div className="space-y-8 leading-relaxed text-lg">
          <div>
            <h3 className="font-bold mb-2">Qısa yol:</h3>
            <p>
              Akademiya 10 illik proqramlaşdırma təcrübəsi olan IT şirkət tərəfindən təsis edilmişdir. 
              Bu nə deməkdir? Yəni, şirkətlərin kadr axtararkən nələrə fikir verdiyini, nələri bilməli 
              olduğunu, müsahibələrdə nələri soruşduğunu artıq bu akademiya yaxşı bilir və səni iş 
              həyatına qısa yoldan hazırlayır.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Birbaşa qəbul:</h3>
            <p>
              Akademiyanı bitirdikdən sonra dərhal partnyor IT şirkətlərdə real təcrübəyə başlayırsan 
              və CV-in digər kurs məzunlarından 1-0 öndə olur.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Karyera mərkəzi:</h3>
            <p>
              CV demişkən, həm də burada peşəkar CV hazırlanması, müsahibələrdə verilən suallar 
              haqda sınaqdan keçmiş taktikalar sənə öyrədiləcək.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Qısa müddət:</h3>
            <p>
              Həftədə 3 dəfə, intensiv proqram nəticəsində sürətli formada proqramlaşdırma öyrənəcəksən.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Hər gün praktika:</h3>
            <p>
              Hər gün tədris + hər gün praktiki məşğələ metodu ilə proqramçı olmaq çətinliyi geridə qaldı.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
