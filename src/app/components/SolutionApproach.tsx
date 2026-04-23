import { Shield, Building2, User } from "lucide-react";

export function SolutionApproach() {
  const roles = [
    {
      title: 'Job Hunter',
      color: 'blue',
      icon: User,
      features: [
        'Browse jobs from multiple companies',
        'Complete skill assessments',
        'Track application status in real-time',
        'Build professional profile',
        'Receive job recommendations'
      ]
    },
    {
      title: 'Company/HR',
      color: 'green',
      icon: Building2,
      features: [
        'Post and manage job openings',
        'Screen candidates with filters',
        'Conduct assessments & interviews',
        'Bid on talent via job auction',
        'Analytics & hiring metrics'
      ]
    },
    {
      title: 'Super Admin (APNI)',
      color: 'purple',
      icon: Shield,
      features: [
        'Manage all companies & users',
        'Monitor platform activities',
        'Configure system settings',
        'Generate reports & insights',
        'Ensure compliance & quality'
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string; hover: string }> = {
    blue: {
      bg: 'bg-blue-100',
      icon: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:border-blue-600'
    },
    green: {
      bg: 'bg-green-100',
      icon: 'text-green-600',
      border: 'border-green-200',
      hover: 'hover:border-green-600'
    },
    purple: {
      bg: 'bg-purple-100',
      icon: 'text-purple-600',
      border: 'border-purple-200',
      hover: 'hover:border-purple-600'
    }
  };

  return (
    <section id="solution" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Designing a Scalable Hiring Ecosystem
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            The platform is built around three distinct user roles, each with specialized 
            features and workflows tailored to their needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => {
            const colors = colorMap[role.color];
            const Icon = role.icon;
            
            return (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl border-2 ${colors.border} ${colors.hover} hover:shadow-2xl transition-all group`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                
                <h3 
                  className="text-2xl mb-6"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                >
                  {role.title}
                </h3>
                
                <ul className="space-y-3">
                  {role.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-3 text-base text-gray-700"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
