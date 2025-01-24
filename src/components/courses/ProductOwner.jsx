import React from 'react';
import RoomGallery from '../sections/RoomGallery';

const ProductOwner = () => {
  return (
    <div className="w-full px-4"> {/* Container genişliyini 100% edirik */}
      <div className="flex flex-col items-center mt-16">
        {/* Main heading with specific width and text wrapping */}
        <div className="w-full md:w-[700px] mb-16"> {/* Daha geniş ekranlarda mərkəzləşdiririk */}
          <h1 className="text-[32px] font-bold leading-tight text-center">
            Product Owner kursunda iştirak edərək IT sahəsində peşəkar karyeranızı qurun və real layihələrdə təcrübə qazanın.
          </h1>
        </div>

        {/* Content container with consistent width */}
        <div className="w-full md:w-[700px] space-y-8"> {/* Bu da eyni şəkildə genişlənir */}
          {/* Program description */}
          <p className="text-base leading-relaxed text-center">
            Proqram intensiv formada həftədə 2 gün, 3 ay davam edir. Hər gün dərslər 50% tədris, 50% praktiki məşğələdən ibarətdir. Hansı ki, bu - ən sürətli öyrənmə metodudur ⚡. Proqram real layihələr üzərindən aparılır.
          </p>

          {/* Key features */}
          <p className="text-base leading-relaxed text-center">
            Product Owner kursunun digər kurslardan fərqləri:
            <ul className="list-disc list-inside mt-4 mx-auto max-w-[800px]">
              <li>Real layihələr: Tədris real layihələr üzərindən aparılır və hər tələbə öz portfoliosunu yaradır.</li>
              <li>Müxtəlif HR-lar: Ölkənin aparıcı IT şirkətlərinin HR-ları tələbələrə intervyu sirləri və işə qəbul ipucları təqdim edir.</li>
              <li>Karyera dəstəyi: Proqram boyunca qrup üzvləri karyera mərkəzi tərəfindən peşəkar həyata hazırlaşdırılır.</li>
              <li>Təcrübə proqramı: Məzunlar partnyor şirkətlərdə təcrübə proqramına yönləndirilir.</li>
              <li>Öyrənənədək dəstək: Öyrənə bilməsən, digər qruplara heç bir ödəniş etmədən transfer ola bilərsən.</li>
            </ul>
          </p>

          {/* Program structure */}
          <div className="mt-16 text-center">
            <h2 className="text-[32px] font-bold mb-8">Product Owner kursunda hansı biliklərə yiyələnəcəksiniz?</h2>
            <div className="space-y-8 mx-auto max-w-[800px]">
              <div>
                <h3 className="text-2xl font-bold mb-4">1. Product Management əsasları</h3>
                <ul className="list-none space-y-2">
                  <li>• Product Management-ə giriş</li>
                  <li>• Product Owner rolu və məsuliyyətləri</li>
                  <li>• Məhsul strategiyası və vizyon</li>
                  <li>• Məhsul həyat dövrü</li>
                  <li>• Məhsul yol xəritəsi (Product Roadmap)</li>
                  <li>• Məhsul backlogu və prioritetləşdirmə</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">2. Agile və Scrum</h3>
                <ul className="list-none space-y-2">
                  <li>• Agile prinsipləri və manifestosu</li>
                  <li>• Scrum framework</li>
                  <li>• Sprint planlaması</li>
                  <li>• Daily Scrum</li>
                  <li>• Sprint Review və Retrospective</li>
                  <li>• Agile estimation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">3. User Research və Analytics</h3>
                <ul className="list-none space-y-2">
                  <li>• İstifadəçi tədqiqatı metodları</li>
                  <li>• User persona yaradılması</li>
                  <li>• Customer journey mapping</li>
                  <li>• Analytics və metrikalar</li>
                  <li>• A/B testing</li>
                  <li>• User feedback analizi</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">4. Product Design və UX</h3>
                <ul className="list-none space-y-2">
                  <li>• UX/UI əsasları</li>
                  <li>• Wireframe və prototipləmə</li>
                  <li>• User story yazma</li>
                  <li>• Acceptance criteria</li>
                  <li>• Design thinking</li>
                  <li>• Məhsul spesifikasiyaları</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">5. Stakeholder Management</h3>
                <ul className="list-none space-y-2">
                  <li>• Stakeholder analizi və əməkdaşlıq</li>
                  <li>• Təqdimat bacarıqları</li>
                  <li>• Komanda ilə iş</li>
                  <li>• Kommunikasiya strategiyaları</li>
                  <li>• Konflikt idarəetməsi</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <p className="text-base leading-relaxed mt-8 text-center">
            IT sahəsində Product Owner kimi karyera qurmaq istəyirsinizsə, Div Academy ilə #ProductOwner sahəsində öz yerinizi tutun!
          </p>
        </div>
      </div>
      <RoomGallery />
    </div>
  );
};

export default ProductOwner;
