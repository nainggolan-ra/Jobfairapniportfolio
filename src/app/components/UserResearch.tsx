import { Users, MessageSquare, LineChart, Target, CheckCircle2, Lightbulb, Calendar, Code } from 'lucide-react';

export function UserResearch() {
  const methodology = [
    {
      icon: Calendar,
      title: "Sprint Reviews with APNI",
      description: "Bi-weekly stakeholder sessions",
      details: "Requirements gathering, design presentations, and feedback sessions every 2 weeks throughout 3-month design phase"
    },
    {
      icon: Code,
      title: "Daily Team Collaboration",
      description: "Daily standups with dev team",
      details: "Coordinated with Elisoft developers to ensure technical feasibility and smooth design-to-development handoff"
    },
    {
      icon: LineChart,
      title: "Competitive Analysis",
      description: "Analyzed 4 major platforms",
      details: "LinkedIn, Glints, Dealls, and JobStreet to identify UX patterns and differentiation opportunities"
    },
    {
      icon: Users,
      title: "Stakeholder Input",
      description: "Requirements from APNI",
      details: "Business goals, pain points, and feature priorities gathered from APNI leadership and member companies"
    }
  ];

  const keyFindings = [
    {
      emoji: "💼",
      finding: "Industry-specific job platforms are rare in the mining sector",
      insight: "General job boards lack specialized features, terminology, and competency frameworks for mining roles"
    },
    {
      emoji: "⏱️",
      finding: "Manual screening processes create inefficiencies for HR teams",
      insight: "Need for competency-based filtering and standardized skills verification system"
    },
    {
      emoji: "📊",
      finding: "Fragmented candidate tracking systems cause operational challenges",
      insight: "Companies need centralized tools to manage applicants across multiple job postings"
    },
    {
      emoji: "🎯",
      finding: "Lack of transparency in mining job requirements",
      insight: "Candidates need clear guidance on competencies and skills required for specific roles"
    },
    {
      emoji: "💰",
      finding: "No industry benchmark data for mining sector salaries",
      insight: "Salary transparency tools can help facilitate fair compensation discussions"
    }
  ];

  return (
    <section id="research" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-indigo-600" />
            <span 
              className="text-sm text-indigo-700"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Research & Discovery
            </span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Understanding the Problem Through Research
          </h2>
          <p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Through stakeholder collaboration and competitive analysis, I identified key pain points and opportunities to create a specialized recruitment platform for the mining industry.
          </p>
        </div>

        {/* Research Methodology */}
        <div className="mb-20">
          <h3 
            className="text-2xl sm:text-3xl mb-8"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Research Methodology
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((method, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-indigo-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                  <method.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h4 
                  className="text-lg mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                >
                  {method.title}
                </h4>
                <p 
                  className="text-sm text-indigo-600 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  {method.description}
                </p>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {method.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Findings */}
        <div>
          <h3 
            className="text-2xl sm:text-3xl mb-8"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Key Research Findings
          </h3>
          <div className="space-y-6">
            {keyFindings.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-600 hover:shadow-lg transition-all"
              >
                <div className="flex gap-4 sm:gap-6">
                  <div className="text-4xl flex-shrink-0">{item.emoji}</div>
                  <div className="flex-1">
                    <p 
                      className="text-lg sm:text-xl mb-3 text-gray-900"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      {item.finding}
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <p 
                        className="text-base text-gray-600"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <span className="font-semibold text-gray-900">Design Opportunity:</span> {item.insight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}