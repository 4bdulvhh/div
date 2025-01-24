import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl mb-2">Biz sənə zəng edək</h1>
          <p className="text-gray-600 mb-8">Əlaqə nömrəni saxla, ən qısa zamanda biz səninlə əlaqə saxlayaq</p>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Adınız"
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-[#95C11F]"
            />
            
            <input 
              type="tel" 
              placeholder="(055) 000 00 00"
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-[#95C11F]"
            />
            
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="whatsapp"
                className="w-4 h-4"
              />
              <label htmlFor="whatsapp" className="text-gray-600">
                nömrəmdə whatsapp var
              </label>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-[#95C11F] text-white py-3 rounded hover:bg-opacity-90 transition"
            >
              Göndər
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full md:w-1/2">
          <div className="space-y-8">
            <div>
              <h2 className="font-semibold mb-2">Elmlər filialı:</h2>
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#95C11F] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Mətbuat prospekti 25 (Elmlər m. yaxınlığı) Bakı, Azərbaycan</span>
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Nərimanov filialı:</h2>
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#95C11F] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ə.Rəcəbli küç. 20 (N.Nərimanov m. yaxınlığı) Bakı, Azərbaycan</span>
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Əlaqə:</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#95C11F] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@div.edu.az" className="text-[#95C11F] hover:underline">
                    info@div.edu.az
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#95C11F] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+994702569600" className="text-[#95C11F] hover:underline">
                    + (994) 70 256 96 00
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academy Description Section */}
      <div className="mt-12">
        <p className="text-gray-600 mb-6">
          Div Academy günümüzün yüksək tələb olunan sahələrini müasir və yaddaqalan metodika ilə öyrədir. Dərslərin əksəriyyəti hər dərs günü tədris + praktika metodu ilə keçilir. Hansı ki bu, ən sürətli öyrənmə metodudur. Akademiya IT sektorunda 10 illik təcrübəsi olan IT şirkəti tərəfindən təsis edilmişdir. Kurs boyunca həm maraqlı aktivitələr, interaktiv yarışmalarda iştirak edə bilər və peşəkar insan resursları konsultantlarından ödənişsiz karyera dəstəyi ala bilərsiniz.
        </p>

        <div>
          <h2 className="text-2xl font-medium mb-4">Akademiya kimlər üçündür?</h2>
          <div className="ml-2 flex flex-col gap-2">
            <div>— İstənilən ixtisasda oxuyan ancaq texnologiyaya və müasir peşələrə həvəsli tələbələr</div>
            <div>— Universiteti yeni bitirmiş məzunlar</div>
            <div>— Tamamılə fərqli sahədə işləyən şəxslər</div>
            <div>— Yaxın 2-5 ildə xaricə köçməyi planlaşdıranlar</div>
            <div>— Özü öyrənməkdə (self study) çətinlik çəkənlər</div>
            <div>— Evdən (remote) və ya sərbəst (freelance) işlərdə işləməyi xoşlayanlar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;