import React, { useState } from 'react';

const Corporate = () => {
  const [employeeCount, setEmployeeCount] = useState(1);
  const [formData, setFormData] = useState({
    course: '',
    schedule: '',
    company: '',
    position: '',
    fullName: '',
    phone: '',
    email: ''
  });

  const courses = [
    'Fullstack Proqramlaşdırma',
    'Digital Marketing',
    'Data Science',
    'Product Owner',
    'IT Project Management',
    'IT Biznes Analitika'
  ];

  const schedules = [
    '18:00-ə qədər',
    '18:00-dən sonra'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      employeeCount
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Info Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8 mb-16">
          <p className="text-lg text-gray-700">
            Əgər hal-hazırda bu yazını oxuyursunuzsa, əməkdaşlarınızın şirkətin ən vacib hissəsi 
            olduğunun fərqindəsiniz və onların inkişafına dəyər verirsiniz deməkdir.
          </p>

          <p className="text-lg text-gray-700">
            Hədəfə gedən yolda ən böyük dəstəkçiniz əməkdaşlarınızdır. Keyfiyyətli məhsul və ya 
            xidmətin ortaya çıxmasına təsir edən ən vacib nüans isə əməkdaşların bilik və bacarığıdır. Bu 
            o deməkdir ki, əgər siz də rəqiblərinizdan 1 addım öndə olmaq və klassik şirkətlərdən fərqli 
            yolu izləmək istəyirsinizsə əməkdaşlarınızı inkişaf etdirməkdən başlamalısınız.
          </p>

          <p className="text-lg text-gray-700">
            Araşdırmalar ona göstərir ki, əməkdaşın inkişafına önəm verən şirkətlərdə şirkətə olan 
            loyallıq və məhsuldarlıq səviyyəsi nə qədər yüksəkdirsə, əksi olan şirkətlərdə bir o qədər azdır.
          </p>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Nə təklif edirik?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-lg">1</span>
                <div>
                  <h3 className="font-semibold text-xl">Cari kadrlarınızı təkmilləşdirək</h3>
                  <p>Hazırki əməkdaşlarınızı öz sahəsi üzrə təkmilləşdirək</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-lg">2</span>
                <div>
                  <h3 className="font-semibold text-xl">Yeni kadr yetişdirək</h3>
                  <p>Sizin seçdiyiniz şəxsi sıfırdan mütəxəssis səviyyəsinə gətirək</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-lg">3</span>
                <div>
                  <h3 className="font-semibold text-xl">Məzun tələbəmizi yönləndirək</h3>
                  <p>Ən uğurlu nəticə göstərən tələbəni şirkətinizə yönləndirək</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Nə dəyişəcək?</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
              <li>Cari əməkdaşın markanıza qatqısı bir neçə misli artacaq</li>
              <li>Əməkdaşın özgüvəni artacaq və verilən tapşırıqları daha məhsuldar şəkildə həyata keçirə biləcək</li>
              <li>Daha peşəkar əməkdaşlarla çalışdığınız üçün şirkət xərcləri azalacaq</li>
              <li>Cari əməkdaşı itirmək əvəzinə əməkdaşın şirkətə olan loyallığı artacaq</li>
              <li>Əməkdaşın şirkətə adaptasiya prosesi daha sürətli olacaq</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#C41E3A] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-16">
            Korporativ kurslar haqqında qiymət təklifi
            <br />
            almaq üçün sorğu göndərin
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-8">
              {/* Existing form fields */}
              <div className="space-y-2">
                <label className="block text-white">Tədrisi seçin</label>
                <select 
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg px-4 focus:outline-none bg-white"
                  required
                >
                  <option value="">Tədrisi seçin</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-white">Tədris alacaq əməkdaş sayı</label>
                <div className="flex h-12 rounded-lg overflow-hidden">
                  <button 
                    type="button"
                    className="w-12 bg-white border-r border-gray-200 flex items-center justify-center text-xl"
                    onClick={() => setEmployeeCount(Math.max(1, employeeCount - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="flex-1 text-center bg-white border-0 focus:outline-none min-w-0"
                    min="1"
                  />
                  <button 
                    type="button"
                    className="w-12 bg-white border-l border-gray-200 flex items-center justify-center text-xl"
                    onClick={() => setEmployeeCount(employeeCount + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-white">Dərs qrafiki</label>
                <select 
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg px-4 focus:outline-none bg-white"
                  required
                >
                  <option value="">Seçin</option>
                  {schedules.map((schedule, index) => (
                    <option key={index} value={schedule}>{schedule}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-white">Təmsil etdiyiniz müəssisə</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg px-4 focus:outline-none bg-white"
                  placeholder="Müəssisə adı"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white">Müəssisədəki vəzifəniz</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg px-4 focus:outline-none bg-white"
                  placeholder="Vəzifəniz"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white">Ad soyadınız</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg px-4 focus:outline-none bg-white"
                  placeholder="Adınız və soyadınız"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white">Əlaqə nömrəniz</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg px-4 focus:outline-none bg-white"
                  placeholder="(055) 000 00 00"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white">Korporativ mail adresiniz</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg px-4 focus:outline-none bg-white"
                  placeholder="mail@corporate.com"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#95C11F] text-white px-8 py-3 rounded-lg hover:bg-[#86AD1B] transition-colors"
            >
              Sorğu göndər
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Corporate;