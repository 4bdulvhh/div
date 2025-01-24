import React from 'react';
import RoomGallery from '../sections/RoomGallery';

const ProjectManagement = () => {
  const courseStructure = [
    {
      title: "Overview of IT Project Management",
      items: [
        "Definition of agile and waterfall approaches",
        "Difference between agile and waterfall approaches",
        "Adaptability",
        "Collaboration"
      ]
    },
    {
      title: "Projects and the Project Manager",
      items: [
        "The project manager's role Internal and external environment",
        "Project structures",
        "Project and product life cycles",
        "Agile software development PM processes",
        "The Project Management Office",
        "Portfolio management"
      ]
    },
    {
      title: "IT Project Life Cycle",
      items: [
        "Initiation",
        "Planning",
        "Execution",
        "Monitoring and Control",
        "Closure"
      ]
    },
    {
      title: "Project Integration Management",
      items: [
        "The Charter",
        "The PM Plan",
        "Manage Project Knowledge",
        "The Triple constraints"
      ]
    },
    {
      title: "Agile Practice Guide",
      items: [
        "Common Agile practices",
        "Scrum",
        "Kanban method",
        "Typical agile metrics such as product list, iteration burn-down and release burn-up charts"
      ]
    },
    {
      title: "Project Scope Management",
      items: [
        "The specification",
        "Constraints, limits, assumptions",
        "Technical requirements",
        "Scoping agile projects, WBS",
        "Product backlog list",
        "Various deliverables for the short agile iterations"
      ]
    },
    {
      title: "Project Schedule Management",
      items: [
        "Plan and Develop schedule",
        "Control schedule",
        "Identify stakeholders",
        "Manage stakeholder expectations",
        "Communications tools"
      ]
    },
    {
      title: "Project Cost Management",
      items: [
        "Plan cost management",
        "Estimate cost",
        "Determine and control budget",
        "Planned value, earned value and actual cost",
        "Cost and Schedule Performance Indicates",
        "Cost and schedule analyses"
      ]
    },
    {
      title: "Project Resource Management",
      items: [
        "Plan resource management",
        "Estimate activity resources",
        "Acquire resources",
        "Develop team",
        "Manage team",
        "Control resources"
      ]
    },
    {
      title: "Project Risk Management",
      items: [
        "Positive and negative risks",
        "Risk strategies",
        "Qualitative risk analyses",
        "Contingencies and reserves"
      ]
    },
    {
      title: "Challenges of IT Project Managers",
      items: [
        "Unclear business requirements",
        "Changing end-user needs and preferences",
        "Rapidly changing technology",
        "Remote work"
      ]
    },
    {
      title: "Keys to Successful IT Projects",
      items: [
        "Clear end objective",
        "End-user training/hand-holding",
        "Defined roles and responsibilities",
        "Transparent workflow",
        "Management of scope change",
        "Risk management",
        "Adequate documentation",
        "Project governance"
      ]
    }
  ];

  const careerSupportItems = [
    "Karyera mərkəzimizin İnsan resursları mütəxəssisi tərəfindən konsultasiyalar",
    "Partnyor şirkətlərə iş üçün CV-lərin yönləndirilməsi",
    "LinkedIn profili üçün ideyaların verilməsi",
    "GitHub hesabının açılması, istifadəsi və idarə olunması",
    "Düzgün CV və portfel hazırlanması",
    "İş müsahibəsində veriləcək suallara hazırlıq",
    "IT tədbir, forum, ekskursiyalarda ödənişsiz iştirak",
    "Sahənin tanınmış spikerlərindən maraqlı təlimlər"
  ];

  return (<>
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-32">
      <div className="flex flex-col items-center mt-8 sm:mt-16">
        {/* Main heading with responsive width and text */}
        <div className="w-full sm:w-[700px] mb-8 sm:mb-16 px-4 sm:px-0">
          <h1 className="text-2xl sm:text-[32px] font-bold leading-tight text-center sm:text-left">
            IT Project Management kursunda iştirak edərək IT sahəsində peşəkar karyeranızı qurun və real layihələrdə təcrübə qazanın.
          </h1>
        </div>
        
        {/* Content container with responsive width */}
        <div className="w-full sm:w-[700px] space-y-8 px-4 sm:px-0">
          {/* Program description */}
          <p className="text-base leading-relaxed">
            Proqram intensiv formada həftədə 2 gün, 3 ay davam edir. Hər gün dərslər 50% tədris, 50% praktiki məşğələdən ibarətdir. Təcrübələr göstərir ki, bu - ən keyfiyyətli öyrənmə metodudur ⚡ Tədrisi bitirdikdən sonra birbaşa partnyor şirkətlərin birində təcrübə proqramına qoşulursan və karyera dəstəyi alırsan. Beləliklə özünə etdiyin bu yatırımı ən qısa zamanda işləyərək geri qaytarmış olursan və həyatını artıq layihə koordinatoru olaraq davam etdirirsən 💪
          </p>

          {/* Key features */}
          <p className="text-base leading-relaxed">
            IT Project Management kursunun üstünlükləri:
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>24 saat açıq mərkəz</li>
              <li>Hər gün dərs + praktiki məşğələ</li>
              <li>Nəhəng layihələrdə və xarici şirkətlərdə işləmiş müəllimlər</li>
              <li>Bootcamp sistemi</li>
              <li>Mentor dəstəyi</li>
              <li>Karyera dəstəyi</li>
              <li>Diplom və dərəcəli sertifikat</li>
            </ul>
          </p>

          {/* Program structure with responsive styling */}
          <div className="mt-8 sm:mt-16">
            <h2 className="text-2xl sm:text-[32px] font-bold mb-6 sm:mb-8 text-center sm:text-left">
              IT Project Management kursunda hansı biliklərə yiyələnəcəksiniz?
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {courseStructure.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
                    {section.title}
                  </h3>
                  <ul className="list-none space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-base">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Career Support Section */}
          <div className="mt-8 sm:mt-16">
            <h2 className="text-2xl sm:text-[32px] font-bold mb-6 sm:mb-8 text-center sm:text-left">
              Div Academy tələbəsi kimi hansı karyera dəstəyi alacaqsan?
            </h2>
            <ul className="list-none space-y-2">
              {careerSupportItems.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <RoomGallery />
  </>);
};

export default ProjectManagement;