import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const courses = [
  'Frontend Development',
  'UI/UX Design', 
  'Digital Marketing (SMM)',
  'Fullstack Proqramlaşdırma',
  'Backend proqramlaşdırma (PHP, Java, Python, NodeJS)'
];

const baseSalaries = {
  'Frontend Development': {
    'div': 1200,
    'özüm': 800,
    'digər': 1000
  },
  'UI/UX Design': {
    'div': 1100,
    'özüm': 700,
    'digər': 900
  },
  'Digital Marketing (SMM)': {
    'div': 1000,
    'özüm': 600,
    'digər': 800
  },
  'Fullstack Proqramlaşdırma': {
    'div': 1500,
    'özüm': 900,
    'digər': 1200
  },
  'Backend proqramlaşdırma (PHP, Java, Python, NodeJS)': {
    'div': 1400,
    'özüm': 850,
    'digər': 1100
  }
};

const futureRoles = {
  'Frontend Development': 'Frontend developer, Software developer, Software engineer, Mobile FrontEnd Developer, Web developer, UI/UX developer, IT project manager',
  'UI/UX Design': 'UI/UX Designer, Product Designer, Web Designer, Mobile Designer',
  'Digital Marketing (SMM)': 'Head of Marketing, Rəqəmsal marketing mütəxəssisi, SMM mütəxəssisi, Marketing direktoru, Sahibkar',
  'Fullstack Proqramlaşdırma': 'Frontend developer, Software developer, Software engineer, Mobile FrontEnd Developer, Web developer, UI/UX developer, IT project manager',
  'Backend proqramlaşdırma (PHP, Java, Python, NodeJS)': 'Backend developer, Web developer, Full-stack developer, Software developer, Software engineer, CTO, IT director, IT project manager'
};

const RadioOption = ({ label, checked, onChange }) => (
  <div 
    onClick={onChange}
    className="relative inline-flex items-center gap-2 cursor-pointer"
  >
    <div className={`
      w-6 h-6 rounded-full flex items-center justify-center
      ${checked 
        ? 'bg-[#8DC63F]' 
        : 'bg-gray-100'
      }
    `}>
      {checked && (
        <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
    </div>
    <span className="text-sm text-gray-700">{label}</span>
  </div>
);

const InputRange = ({ label, value, unit, max, onChange }) => (
  <div className="space-y-2">
    <p className="text-gray-600 text-sm">{label}</p>
    <div className="relative bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-900">{value}</span>
        <span className="text-gray-500">{unit}</span>
      </div>
      <input
        type="range"
        min="0"
        max={max}
        value={value}
        onChange={onChange}
        className="w-full mt-2 accent-[#8DC63F]"
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>0</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  </div>
);

function SalaryCalculator() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [studyLocation, setStudyLocation] = useState('div');
  const [hoursPerDay, setHoursPerDay] = useState(0);
  const [englishLevel, setEnglishLevel] = useState('Zəif');
  const [experience, setExperience] = useState(0);
  const [calculatedResults, setCalculatedResults] = useState({
    salary: 0,
    returnTime: '',
    futureRole: '',
    offerChance: ''
  });

  useEffect(() => {
    if (selectedCourse && studyLocation) {
      calculateSalary();
    }
  }, [selectedCourse, studyLocation, hoursPerDay, englishLevel, experience]);

  const calculateSalary = () => {
    const baseSalary = baseSalaries[selectedCourse][studyLocation];
    
    // Balanced experience multiplier with exact values
    const experienceMultiplier = 
      experience === 0 ? 0 :
      experience === 1 ? 200 :
      experience === 2 ? 400 :
      experience === 3 ? 600 :
      experience === 4 ? 800 :
      experience === 5 ? 1000 : 0;
    
    const hoursEffect = Number(hoursPerDay) * 10;
    
    const englishEffect = 
      englishLevel === 'Əla' ? baseSalary * 0.1 :
      englishLevel === 'Orta' ? baseSalary * 0.05 : 0;

    const totalSalary = Math.min(
      Math.round(baseSalary + experienceMultiplier + hoursEffect + englishEffect), 
      4000
    );

    setCalculatedResults({
      salary: totalSalary,
      returnTime: studyLocation === 'div' ? '1.5' : studyLocation === 'özüm' ? '3.5' : '2.5',
      futureRole: futureRoles[selectedCourse],
      offerChance: englishLevel === 'Əla' ? '70' : englishLevel === 'Orta' ? '35' : '20'
    });
  };

  return (
    <section className="min-h-screen bg-[#92b33a] py-8 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-[#1E1E1E]">
                Gələcək maaşını 
                <br />
                hesabla <span className="text-3xl">🤔</span>
              </h1>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full p-4 text-left rounded-lg
                    ${selectedCourse ? 'text-black' : 'text-gray-400'}
                    bg-white border border-gray-200
                    hover:border-[#8DC63F]/50 transition-colors
                  `}
                >
                  <span>{selectedCourse || '-- Sahəni seçin --'}</span>
                  <svg
                    className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
                    {courses.map((course) => (
                      <button
                        key={course}
                        className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setSelectedCourse(course);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <p className="text-gray-900 font-medium mb-3">Necə öyrənəcəksən?</p>
                <div className="flex flex-wrap gap-6">
                  <RadioOption
                    label="Div Academy-də"
                    checked={studyLocation === 'div'}
                    onChange={() => setStudyLocation('div')}
                  />
                  <RadioOption
                    label="Özüm"
                    checked={studyLocation === 'özüm'}
                    onChange={() => setStudyLocation('özüm')}
                  />
                  <RadioOption
                    label="Digər kurslarda"
                    checked={studyLocation === 'digər'}
                    onChange={() => setStudyLocation('digər')}
                  />
                </div>
              </div>

              <InputRange
                label="Gündə neçə saat məşğul olacaqsan?"
                value={hoursPerDay}
                unit="saat"
                max={12}
                onChange={(e) => setHoursPerDay(e.target.value)}
              />

              <div>
                <p className="text-gray-900 font-medium mb-3">İngilis dili biliyin</p>
                <div className="flex flex-wrap gap-6">
                  <RadioOption
                    label="Zəif"
                    checked={englishLevel === 'Zəif'}
                    onChange={() => setEnglishLevel('Zəif')}
                  />
                  <RadioOption
                    label="Orta"
                    checked={englishLevel === 'Orta'}
                    onChange={() => setEnglishLevel('Orta')}
                  />
                  <RadioOption
                    label="Əla"
                    checked={englishLevel === 'Əla'}
                    onChange={() => setEnglishLevel('Əla')}
                  />
                </div>
              </div>

              <InputRange
                label="Sahə üzrə iş təcrübən"
                value={experience}
                unit="il"
                max={5}
                onChange={(e) => setExperience(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2 text-gray-700">
                Ortalama maaşın <Rocket className="w-6 h-6" />
              </h2>
              <div className="w-40 h-40 mx-auto rounded-full border-8 border-[#8DC63F] flex items-center justify-center bg-gray-50">
                <span className="text-4xl font-bold text-gray-700">{calculatedResults.salary}₼</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-gray-500 text-sm mb-2">İnvestisiyanın geri dönüş müddəti:</p>
                <p className="font-semibold text-lg text-gray-700">
                  {calculatedResults.returnTime ? `${calculatedResults.returnTime} ay` : '--'}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-2">Gələcək vəzifən:</p>
                <p className="font-semibold text-lg text-gray-700">{calculatedResults.futureRole || '--'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-2">Xarici şirkətlərdən iş təklifi alma ehtimalın:</p>
                <p className="font-semibold text-lg text-gray-700">
                  {calculatedResults.offerChance ? `${calculatedResults.offerChance}%` : '--'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalaryCalculator;