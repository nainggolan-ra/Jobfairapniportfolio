import { Check, X, Zap, Award, Users, Target } from "lucide-react";

export function CompetitiveAnalysis() {
  const competitors = [
    {
      name: "Dealls",
      logo: "D",
      color: "blue",
      features: {
        jobPosting: true,
        competencyTest: false,
        jobAuction: false,
        industrySpecific: false,
        subscription: true
      }
    },
    {
      name: "Glints",
      logo: "G",
      color: "green",
      features: {
        jobPosting: true,
        competencyTest: true,
        jobAuction: false,
        industrySpecific: false,
        subscription: true
      }
    },
    {
      name: "LinkedIn",
      logo: "Li",
      color: "blue",
      features: {
        jobPosting: true,
        competencyTest: false,
        jobAuction: false,
        industrySpecific: false,
        subscription: true
      }
    },
    {
      name: "JobStreet",
      logo: "JS",
      color: "purple",
      features: {
        jobPosting: true,
        competencyTest: false,
        jobAuction: false,
        industrySpecific: false,
        subscription: true
      }
    },
    {
      name: "APNI",
      logo: "AP",
      color: "indigo",
      features: {
        jobPosting: true,
        competencyTest: true,
        jobAuction: true,
        industrySpecific: true,
        subscription: true
      },
      highlight: true
    }
  ];

  const featureLabels = [
    { key: "jobPosting", label: "Job Posting & Matching" },
    { key: "competencyTest", label: "Competency-Based Assessment" },
    { key: "jobAuction", label: "Job Auction System" },
    { key: "industrySpecific", label: "Mining Industry Specific" },
    { key: "subscription", label: "Subscription Model" }
  ];

  return (
    <section id="competitive" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Market Research & Competitive Landscape
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Analyzing existing job platforms to identify gaps and opportunities for innovation 
            in Indonesia's mining recruitment space.
          </p>
        </div>

        {/* Competitive Matrix */}
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 sm:p-10 rounded-3xl border-2 border-gray-200 shadow-xl mb-12">
          <h3 
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Feature Comparison Matrix
          </h3>
          <p className="text-sm text-gray-600 mb-6 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
            * Based on publicly available information and platform research at the time of design phase
          </p>

          {/* Desktop View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 pr-6">
                    <span 
                      className="text-sm font-bold text-gray-600"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      FEATURES
                    </span>
                  </th>
                  {competitors.map((competitor, index) => (
                    <th key={index} className="text-center py-4 px-4">
                      <div className={`inline-flex flex-col items-center gap-2 ${competitor.highlight ? 'scale-110' : ''}`}>
                        <div className={`
                          w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-lg
                          ${competitor.highlight ? 'bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg' : 'bg-gray-400'}
                        `}>
                          {competitor.logo}
                        </div>
                        <span 
                          className={`text-sm font-bold ${competitor.highlight ? 'text-indigo-600' : 'text-gray-700'}`}
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          {competitor.name}
                        </span>
                        {competitor.highlight && (
                          <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">
                            Our Platform
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureLabels.map((feature, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-5 pr-6">
                      <span 
                        className="text-sm font-medium text-gray-800"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {feature.label}
                      </span>
                    </td>
                    {competitors.map((competitor, compIndex) => (
                      <td key={compIndex} className="text-center py-5 px-4">
                        {competitor.features[feature.key as keyof typeof competitor.features] ? (
                          <div className={`
                            inline-flex items-center justify-center w-8 h-8 rounded-lg
                            ${competitor.highlight ? 'bg-green-600' : 'bg-green-500'}
                          `}>
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-200">
                            <X className="w-5 h-5 text-gray-400" />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {competitors.map((competitor, index) => (
              <div 
                key={index} 
                className={`
                  p-6 rounded-2xl border-2 
                  ${competitor.highlight 
                    ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-300' 
                    : 'bg-white border-gray-200'}
                `}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-lg
                    ${competitor.highlight ? 'bg-gradient-to-br from-indigo-600 to-purple-600' : 'bg-gray-400'}
                  `}>
                    {competitor.logo}
                  </div>
                  <div>
                    <h4 
                      className={`text-lg font-bold ${competitor.highlight ? 'text-indigo-600' : 'text-gray-900'}`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {competitor.name}
                    </h4>
                    {competitor.highlight && (
                      <span className="text-xs text-indigo-600 font-semibold">Our Platform</span>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  {featureLabels.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-700">{feature.label}</span>
                      {competitor.features[feature.key as keyof typeof competitor.features] ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Differentiator 1 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h4 
              className="text-lg font-bold text-gray-900 mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Unique Job Auction System
            </h4>
            <p className="text-sm leading-relaxed text-gray-700">
              Revolutionary bidding mechanism where companies compete for top talent - 
              a feature no other platform offers, creating a candidate-centric marketplace.
            </p>
          </div>

          {/* Differentiator 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h4 
              className="text-lg font-bold text-gray-900 mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Mining Industry Focused
            </h4>
            <p className="text-sm leading-relaxed text-gray-700">
              Purpose-built for Indonesia's mining sector with industry-specific requirements, 
              competency assessments, and compliance tracking tailored to APNI standards.
            </p>
          </div>

          {/* Differentiator 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h4 
              className="text-lg font-bold text-gray-900 mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Competency-Based Matching
            </h4>
            <p className="text-sm leading-relaxed text-gray-700">
              Shifts focus from resume-based to skill-based hiring with mandatory competency 
              assessments, ensuring better job-candidate fit and reducing hiring bias.
            </p>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-12 p-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-2xl border-2 border-indigo-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 
                className="text-lg font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Key Insight from Analysis
              </h4>
              <p 
                className="text-base leading-relaxed text-gray-700"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                While existing platforms like LinkedIn, Glints, and JobStreet excel at broad job matching, 
                none offer <span className="font-bold text-indigo-600">industry-specific solutions</span> or 
                <span className="font-bold text-indigo-600"> auction-based hiring mechanisms</span>. 
                This gap presented an opportunity to create a specialized platform that empowers both 
                candidates and companies in Indonesia's mining sector with innovative features that 
                drive competitive compensation and better hiring outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}