import { Briefcase, Target, Frown, Zap, Smartphone, Laptop } from 'lucide-react';

export function UserPersonas() {
  const personas = [
    {
      avatar: "👨‍🔧",
      name: "Budi Santoso",
      age: 28,
      role: "Job Hunter",
      occupation: "Mining Equipment Operator",
      location: "Morowali, Sulawesi Tengah",
      color: "blue",
      quote: "Saya ingin berkembang di industri tambang, tapi tidak tahu skill apa yang harus saya upgrade.",
      demographics: {
        education: "D3 Mechanical Engineering",
        experience: "3 years in mining operations",
        techSavvy: "Moderate - uses smartphone daily"
      },
      goals: [
        "Find better career opportunities in mining industry",
        "Understand what competencies are required for advancement",
        "Get fair salary based on industry standards",
        "Track application progress easily"
      ],
      frustrations: [
        "No transparency on job requirements and salary range",
        "Difficult to showcase technical competencies",
        "No feedback after applying to multiple positions",
        "Unclear what skills to develop for career growth"
      ],
      behaviors: [
        "Checks job boards 2-3 times per week",
        "Prefers mobile apps over desktop",
        "Relies on colleagues for job referrals",
        "Active in mining professional WhatsApp groups"
      ],
      devices: ["Smartphone (Primary)", "Laptop (Occasional)"]
    },
    {
      avatar: "👩‍💼",
      name: "Sarah Maharani",
      age: 35,
      role: "Company HR Manager",
      occupation: "HR Manager at PT Nikel Sejahtera",
      location: "Jakarta",
      color: "purple",
      quote: "Kami butuh cara yang lebih efisien untuk menemukan kandidat yang benar-benar kompeten, tidak hanya mengandalkan CV.",
      demographics: {
        education: "S2 Human Resource Management",
        experience: "8 years in HR, 4 years in mining sector",
        techSavvy: "High - uses multiple HR tools daily"
      },
      goals: [
        "Reduce time spent screening unqualified candidates",
        "Find candidates with verified mining competencies",
        "Manage multiple job postings efficiently",
        "Improve candidate experience and employer branding",
        "Get data-driven insights on recruitment performance"
      ],
      frustrations: [
        "Majority of applicants are not qualified for the role",
        "Manual screening process is time-consuming",
        "Difficult to verify technical competencies",
        "No centralized system to track all candidates",
        "Generic job boards don't understand mining industry needs"
      ],
      behaviors: [
        "Posts jobs on multiple platforms simultaneously",
        "Spends 4-5 hours daily reviewing applications",
        "Uses Excel to track candidate pipeline",
        "Conducts initial screening via phone calls",
        "Works primarily on desktop during office hours"
      ],
      devices: ["Desktop (Primary)", "Smartphone (Email checks)"]
    },
    {
      avatar: "👨‍💻",
      name: "Dimas Prasetyo",
      age: 42,
      role: "Super Admin (APNI)",
      occupation: "Platform Administrator at APNI",
      location: "Jakarta",
      color: "indigo",
      quote: "Kami perlu platform yang scalable untuk manage ratusan perusahaan member dan ribuan job seeker dengan sistem yang terorganisir.",
      demographics: {
        education: "S1 Information Systems",
        experience: "15 years managing association operations",
        techSavvy: "High - manages multiple enterprise systems"
      },
      goals: [
        "Manage all member companies efficiently",
        "Track subscription revenue and payment status",
        "Monitor platform usage and engagement metrics",
        "Ensure data integrity across the system",
        "Provide value to APNI members through the platform"
      ],
      frustrations: [
        "Current system is spreadsheet-based and error-prone",
        "Difficult to track which companies are active subscribers",
        "No visibility into platform performance metrics",
        "Manual onboarding process for new member companies",
        "Cannot generate reports for stakeholder meetings"
      ],
      behaviors: [
        "Logs in daily to check platform status",
        "Generates monthly reports for APNI leadership",
        "Responds to member company inquiries",
        "Conducts quarterly business reviews",
        "Works across desktop and tablet"
      ],
      devices: ["Desktop (Primary)", "Tablet (Meetings)", "Smartphone"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        badge: "bg-blue-100"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        badge: "bg-purple-100"
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        text: "text-indigo-600",
        badge: "bg-indigo-100"
      }
    };
    return colors[color];
  };

  return (
    <section id="personas" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Target className="w-4 h-4 text-purple-600" />
            <span 
              className="text-sm text-purple-700"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              User Personas
            </span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Meet Our Users
          </h2>
          <p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Based on stakeholder requirements and business goals, I developed three primary personas representing each user role in the APNI ecosystem.
          </p>
        </div>

        {/* Personas */}
        <div className="space-y-12">
          {personas.map((persona, index) => {
            const colors = getColorClasses(persona.color);
            return (
              <div 
                key={index}
                className={`bg-white rounded-3xl border-2 ${colors.border} overflow-hidden hover:shadow-2xl transition-all`}
              >
                {/* Persona Header */}
                <div className={`${colors.bg} p-6 sm:p-8 border-b-2 ${colors.border}`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="text-6xl sm:text-7xl">{persona.avatar}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 
                          className="text-2xl sm:text-3xl"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                        >
                          {persona.name}
                        </h3>
                        <span 
                          className={`px-3 py-1 ${colors.badge} ${colors.text} rounded-full text-sm`}
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                        >
                          {persona.role}
                        </span>
                      </div>
                      <p 
                        className="text-base sm:text-lg text-gray-700 mb-1"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        {persona.occupation}
                      </p>
                      <p 
                        className="text-sm text-gray-500"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {persona.age} years old • {persona.location}
                      </p>
                    </div>
                  </div>
                  <div className={`mt-6 p-4 bg-white rounded-xl border-2 ${colors.border}`}>
                    <p 
                      className="text-base sm:text-lg text-gray-700 italic"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      "{persona.quote}"
                    </p>
                  </div>
                </div>

                {/* Persona Content */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Demographics */}
                      <div>
                        <h4 
                          className={`text-lg mb-3 ${colors.text}`}
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                        >
                          Demographics
                        </h4>
                        <div className="space-y-2">
                          {Object.entries(persona.demographics).map(([key, value]) => (
                            <div key={key} className="flex gap-2">
                              <span 
                                className="text-sm text-gray-500 capitalize min-w-[120px]"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                              >
                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                              </span>
                              <span 
                                className="text-sm text-gray-900"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                              >
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Goals */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Target className={`w-5 h-5 ${colors.text}`} />
                          <h4 
                            className={`text-lg ${colors.text}`}
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                          >
                            Goals
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {persona.goals.map((goal, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              <Zap className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Devices */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Smartphone className={`w-5 h-5 ${colors.text}`} />
                          <h4 
                            className={`text-lg ${colors.text}`}
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                          >
                            Devices
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {persona.devices.map((device, idx) => (
                            <span 
                              key={idx}
                              className={`px-3 py-1.5 ${colors.badge} ${colors.text} rounded-lg text-sm`}
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                            >
                              {device}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Frustrations */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Frown className={`w-5 h-5 ${colors.text}`} />
                          <h4 
                            className={`text-lg ${colors.text}`}
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                          >
                            Frustrations
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {persona.frustrations.map((frustration, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              <span className="text-red-500 flex-shrink-0 mt-0.5">⚠️</span>
                              {frustration}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Behaviors */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase className={`w-5 h-5 ${colors.text}`} />
                          <h4 
                            className={`text-lg ${colors.text}`}
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                          >
                            Behaviors
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {persona.behaviors.map((behavior, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              <span className="flex-shrink-0 mt-0.5">•</span>
                              {behavior}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}