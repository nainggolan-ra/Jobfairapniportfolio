import { Frown, Meh, Smile, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export function UserJourneyMaps() {
  const journeys = [
    {
      role: "Job Hunter",
      color: "blue",
      persona: "Andi - Fresh Graduate Mining Engineer",
      goal: "Find and apply for suitable mining jobs with transparent competency matching",
      stages: [
        {
          stage: "Discovery",
          action: "Searching for mining jobs online",
          touchpoints: ["Job boards", "Social media", "APNI website"],
          emotion: "frustrated",
          emotionScore: -1,
          thoughts: "\"Too many irrelevant jobs, unclear requirements\"",
          painPoints: ["Generic job listings", "No competency visibility", "Unclear match level"]
        },
        {
          stage: "Registration",
          action: "Creating profile & uploading documents",
          touchpoints: ["Registration form", "Document upload", "Profile setup"],
          emotion: "cautious",
          emotionScore: 0,
          thoughts: "\"Hope this platform is different from others\"",
          painPoints: ["Time-consuming process", "Uncertainty about data usage"]
        },
        {
          stage: "Job Search",
          action: "Browsing jobs with competency matching",
          touchpoints: ["Job list", "Filters", "Match scoring"],
          emotion: "optimistic",
          emotionScore: 1,
          thoughts: "\"Finally! I can see which jobs match my skills\"",
          opportunities: ["Clear competency requirements", "Match percentage visibility"]
        },
        {
          stage: "Application",
          action: "Applying to matched positions",
          touchpoints: ["Application form", "Competency test", "Document submission"],
          emotion: "confident",
          emotionScore: 2,
          thoughts: "\"I understand what they're looking for\"",
          opportunities: ["Transparent requirements", "Fair assessment process"]
        },
        {
          stage: "Tracking",
          action: "Monitoring application status",
          touchpoints: ["Dashboard", "Status notifications", "Timeline view"],
          emotion: "satisfied",
          emotionScore: 2,
          thoughts: "\"I always know where my applications stand\"",
          opportunities: ["Real-time updates", "Clear progress tracking", "No more uncertainty"]
        }
      ]
    },
    {
      role: "Company HR Manager",
      color: "green",
      persona: "Sarah - HR Manager at PT Mining Solutions",
      goal: "Find qualified candidates efficiently with competency-based screening",
      stages: [
        {
          stage: "Job Posting",
          action: "Creating job listing with requirements",
          touchpoints: ["Job form", "Competency selector", "Assessment builder"],
          emotion: "overwhelmed",
          emotionScore: -1,
          thoughts: "\"How do I define competency requirements accurately?\"",
          painPoints: ["Complex competency framework", "Time-consuming setup"]
        },
        {
          stage: "Receiving Applications",
          action: "Initial candidate screening",
          touchpoints: ["Applicant list", "Bulk notifications", "Filters"],
          emotion: "stressed",
          emotionScore: -2,
          thoughts: "\"Too many unqualified applicants to review\"",
          painPoints: ["High volume", "Manual screening", "No prioritization"]
        },
        {
          stage: "Competency Review",
          action: "Evaluating candidates by competency match",
          touchpoints: ["Match scoring", "Competency breakdown", "AI filters"],
          emotion: "relieved",
          emotionScore: 1,
          thoughts: "\"The system helps me identify top candidates quickly\"",
          opportunities: ["Automated scoring", "Visual competency comparison"]
        },
        {
          stage: "Shortlisting",
          action: "Selecting candidates for interview",
          touchpoints: ["Candidate profiles", "Comparison view", "Tracking table"],
          emotion: "confident",
          emotionScore: 2,
          thoughts: "\"I can justify my selection with data\"",
          opportunities: ["Evidence-based decisions", "Easy comparison tools"]
        },
        {
          stage: "Hiring Decision",
          action: "Making final selection",
          touchpoints: ["Final assessment", "Approval workflow", "Offer generation"],
          emotion: "satisfied",
          emotionScore: 2,
          thoughts: "\"We hired the right person based on competencies\"",
          opportunities: ["Reduced hiring time", "Quality hires", "Transparent process"]
        }
      ]
    },
    {
      role: "Super Admin",
      color: "purple",
      persona: "Budi - APNI Platform Administrator",
      goal: "Monitor platform health and ensure smooth operations for all stakeholders",
      stages: [
        {
          stage: "Platform Monitoring",
          action: "Checking system metrics & user activity",
          touchpoints: ["Analytics dashboard", "KPI widgets", "Activity logs"],
          emotion: "cautious",
          emotionScore: 0,
          thoughts: "\"Need to ensure everything runs smoothly\"",
          painPoints: ["Multiple data sources", "Complex metrics"]
        },
        {
          stage: "User Management",
          action: "Managing company & job hunter accounts",
          touchpoints: ["User list", "Approval queue", "Access controls"],
          emotion: "neutral",
          emotionScore: 0,
          thoughts: "\"Routine verification work\"",
          painPoints: ["Manual approval process", "Time-consuming verification"]
        },
        {
          stage: "Issue Detection",
          action: "Identifying platform issues or anomalies",
          touchpoints: ["Alert system", "Support tickets", "Error logs"],
          emotion: "concerned",
          emotionScore: -1,
          thoughts: "\"Something needs attention\"",
          painPoints: ["Late issue discovery", "Limited diagnostic tools"]
        },
        {
          stage: "Resolution",
          action: "Resolving issues and supporting users",
          touchpoints: ["Admin tools", "User communication", "System controls"],
          emotion: "focused",
          emotionScore: 0,
          thoughts: "\"Working to fix this quickly\"",
          opportunities: ["Centralized admin tools", "Quick action buttons"]
        },
        {
          stage: "Reporting",
          action: "Generating insights for APNI stakeholders",
          touchpoints: ["Report builder", "Data exports", "Presentation views"],
          emotion: "accomplished",
          emotionScore: 2,
          thoughts: "\"Clear metrics show platform success\"",
          opportunities: ["Automated reporting", "Visual insights", "Data-driven decisions"]
        }
      ]
    }
  ];

  const getEmotionIcon = (emotion: string) => {
    switch(emotion) {
      case 'frustrated':
      case 'stressed':
      case 'overwhelmed':
      case 'concerned':
        return Frown;
      case 'cautious':
      case 'neutral':
      case 'focused':
        return Meh;
      case 'optimistic':
      case 'confident':
      case 'relieved':
      case 'satisfied':
      case 'accomplished':
        return Smile;
      default:
        return Meh;
    }
  };

  const getEmotionColor = (emotionScore: number, color: string) => {
    if (emotionScore <= -1) {
      return color === 'blue' ? 'text-red-600' : color === 'green' ? 'text-red-600' : 'text-red-600';
    } else if (emotionScore === 0) {
      return color === 'blue' ? 'text-yellow-600' : color === 'green' ? 'text-yellow-600' : 'text-yellow-600';
    } else {
      return color === 'blue' ? 'text-green-600' : color === 'green' ? 'text-green-600' : 'text-green-600';
    }
  };

  const getEmotionBg = (emotionScore: number) => {
    if (emotionScore <= -1) return 'bg-red-50 border-red-200';
    if (emotionScore === 0) return 'bg-yellow-50 border-yellow-200';
    return 'bg-green-50 border-green-200';
  };

  const getRoleColorClasses = (color: string) => {
    const colors = {
      blue: {
        badge: 'bg-blue-100 text-blue-700 border-blue-300',
        gradient: 'from-blue-600 via-blue-500 to-cyan-500'
      },
      green: {
        badge: 'bg-green-100 text-green-700 border-green-300',
        gradient: 'from-green-600 via-emerald-500 to-teal-500'
      },
      purple: {
        badge: 'bg-purple-100 text-purple-700 border-purple-300',
        gradient: 'from-purple-600 via-violet-500 to-indigo-500'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="journey" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 border-2 border-indigo-300 rounded-full mb-6">
            <span 
              className="text-sm font-semibold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              User Journey Maps
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Understanding Emotional Journeys
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p 
            className="text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Mapping the complete user experience for each role, from initial pain points through 
            moments of frustration to eventual satisfaction—identifying opportunities to reduce 
            friction and enhance positive emotions throughout their journey.
          </p>
        </div>

        {/* Journey Maps by Role */}
        <div className="space-y-20">
          {journeys.map((journey, journeyIndex) => {
            const colorClasses = getRoleColorClasses(journey.color);
            
            return (
              <div key={journeyIndex}>
                {/* Role Header */}
                <div className="mb-8">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 ${colorClasses.badge} border-2 rounded-full mb-3`}>
                    <span 
                      className="text-sm font-semibold"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      {journey.role}
                    </span>
                  </div>
                  <h3 
                    className="text-2xl mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  >
                    {journey.persona}
                  </h3>
                  <p 
                    className="text-base text-gray-600"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="font-semibold">Goal:</span> {journey.goal}
                  </p>
                </div>

                {/* Emotion Curve Visualization */}
                <div className="mb-8 bg-white rounded-2xl border-2 border-gray-200 p-8">
                  <h4 
                    className="text-lg mb-6 text-gray-700"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  >
                    Emotional Journey Curve
                  </h4>
                  
                  {/* Curve Graph */}
                  <div className="relative h-48 mb-4">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <div className="flex items-center gap-2">
                        <Smile className="w-4 h-4 text-green-600" />
                        <span>Satisfied</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Meh className="w-4 h-4 text-yellow-600" />
                        <span>Neutral</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Frown className="w-4 h-4 text-red-600" />
                        <span>Frustrated</span>
                      </div>
                    </div>

                    {/* Grid lines */}
                    <div className="absolute left-16 right-0 top-0 h-full">
                      <div className="relative h-full border-l-2 border-gray-300">
                        <div className="absolute w-full border-t-2 border-dashed border-gray-200 top-0"></div>
                        <div className="absolute w-full border-t-2 border-dashed border-gray-300 top-1/2 -translate-y-px"></div>
                        <div className="absolute w-full border-t-2 border-dashed border-gray-200 bottom-0"></div>

                        {/* Emotion points */}
                        <div className="relative h-full flex items-stretch">
                          {journey.stages.map((stage, idx) => {
                            // Map emotion score (-2 to +2) to position (0% to 100%)
                            const position = ((2 - stage.emotionScore) / 4) * 100;
                            const EmotionIcon = getEmotionIcon(stage.emotion);
                            
                            return (
                              <div key={idx} className="flex-1 relative">
                                {/* Dot */}
                                <div 
                                  className="absolute w-4 h-4 rounded-full bg-white border-3 shadow-md -translate-x-2 -translate-y-2"
                                  style={{ 
                                    top: `${position}%`,
                                    borderWidth: '3px',
                                    borderColor: stage.emotionScore <= -1 ? '#dc2626' : stage.emotionScore === 0 ? '#d97706' : '#16a34a'
                                  }}
                                >
                                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <EmotionIcon className={`w-6 h-6 ${getEmotionColor(stage.emotionScore, journey.color)}`} />
                                  </div>
                                </div>

                                {/* Connecting line */}
                                {idx < journey.stages.length - 1 && (
                                  <svg 
                                    className="absolute left-0 w-full h-full pointer-events-none"
                                    style={{ top: 0 }}
                                  >
                                    <line
                                      x1="50%"
                                      y1={`${position}%`}
                                      x2="150%"
                                      y2={`${((2 - journey.stages[idx + 1].emotionScore) / 4) * 100}%`}
                                      stroke="#94a3b8"
                                      strokeWidth="2"
                                      strokeDasharray="4 4"
                                    />
                                  </svg>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stage labels below curve */}
                  <div className="flex ml-16">
                    {journey.stages.map((stage, idx) => (
                      <div key={idx} className="flex-1 text-center">
                        <p className="text-xs font-semibold text-gray-700" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
                          {stage.stage}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Journey Stages Detail */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {journey.stages.map((stage, stageIndex) => {
                    const EmotionIcon = getEmotionIcon(stage.emotion);
                    
                    return (
                      <div 
                        key={stageIndex}
                        className={`${getEmotionBg(stage.emotionScore)} border-2 rounded-2xl p-6 hover:shadow-lg transition-all`}
                      >
                        {/* Stage Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="text-xs font-bold text-gray-500 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
                              STAGE {stageIndex + 1}
                            </div>
                            <h4 
                              className="text-lg"
                              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                            >
                              {stage.stage}
                            </h4>
                          </div>
                          <EmotionIcon className={`w-6 h-6 ${getEmotionColor(stage.emotionScore, journey.color)}`} />
                        </div>

                        {/* Action */}
                        <p 
                          className="text-sm mb-4 text-gray-700 font-medium"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {stage.action}
                        </p>

                        {/* Touchpoints */}
                        <div className="mb-4">
                          <p className="text-xs font-bold text-gray-500 mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            TOUCHPOINTS
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {stage.touchpoints.map((touchpoint, tpIndex) => (
                              <span 
                                key={tpIndex}
                                className="px-2 py-1 bg-white border border-gray-300 rounded-md text-xs text-gray-700"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                              >
                                {touchpoint}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* User Thoughts */}
                        <div className="mb-4">
                          <p 
                            className="text-sm italic text-gray-700 bg-white/70 border-l-4 border-gray-400 pl-3 py-2 rounded"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {stage.thoughts}
                          </p>
                        </div>

                        {/* Pain Points or Opportunities */}
                        {stage.painPoints && (
                          <div>
                            <p className="text-xs font-bold text-red-700 mb-2 flex items-center gap-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              <TrendingDown className="w-3.5 h-3.5" />
                              PAIN POINTS
                            </p>
                            <ul className="space-y-1.5">
                              {stage.painPoints.map((pain, pIndex) => (
                                <li key={pIndex} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0"></div>
                                  <span className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {pain}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {stage.opportunities && (
                          <div>
                            <p className="text-xs font-bold text-green-700 mb-2 flex items-center gap-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              <TrendingUp className="w-3.5 h-3.5" />
                              OPPORTUNITIES
                            </p>
                            <ul className="space-y-1.5">
                              {stage.opportunities.map((opp, oIndex) => (
                                <li key={oIndex} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5 flex-shrink-0"></div>
                                  <span className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {opp}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Insights Summary */}
        <div className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-3xl p-8">
          <h3 
            className="text-2xl mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Key Journey Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Job Hunters
              </div>
              <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Experience frustration early in discovery, but satisfaction increases dramatically 
                with competency matching and transparent tracking
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                HR Managers
              </div>
              <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                High stress during initial screening phases, relieved by AI-powered competency 
                filtering and data-driven shortlisting tools
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Super Admins
              </div>
              <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Neutral-to-positive journey with peaks during successful issue resolution and 
                automated reporting capabilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}