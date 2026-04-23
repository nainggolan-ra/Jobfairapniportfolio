import { FileText, MessageSquare, Workflow, Users, Palette, Code, CheckCircle } from "lucide-react";

export function DesignApproach() {
  const phases = [
    {
      icon: FileText,
      title: "Requirements Analysis",
      color: "blue",
      description: "Deep-dive sessions with APNI stakeholders to understand business goals and feature requirements",
      activities: [
        "Stakeholder interviews to clarify objectives",
        "Feature requirement documentation review",
        "Business goal mapping for each module",
        "Pain point identification from manual processes"
      ]
    },
    {
      icon: MessageSquare,
      title: "Competitive Benchmarking",
      color: "indigo",
      description: "Analyzed major job platforms to identify UX patterns and differentiation opportunities",
      activities: [
        "Evaluated Deals, Glints, LinkedIn, JobStreet",
        "Identified successful recruitment UX patterns",
        "Found gaps for innovation (Job Auction system)",
        "Extracted design best practices"
      ]
    },
    {
      icon: Workflow,
      title: "Flow-First Design",
      color: "purple",
      description: "Mapped complex user journeys before visual design to ensure logical information architecture",
      activities: [
        "Created user flows for 3 distinct roles",
        "Designed multi-step form progressions",
        "Mapped conditional logic and access gates",
        "Balanced feature complexity with usability"
      ]
    },
    {
      icon: Palette,
      title: "Design System Creation",
      color: "pink",
      description: "Built comprehensive design system for consistency and scalability across platforms",
      activities: [
        "Typography and color guidelines",
        "Icon set standardization",
        "Reusable component library (Buttons, Cards, Forms)",
        "Local variables for design tokens"
      ]
    },
    {
      icon: Users,
      title: "Iterative Collaboration",
      color: "orange",
      description: "Regular feedback loops with development team and stakeholders for alignment",
      activities: [
        "Weekly design reviews with dev team",
        "Stakeholder presentations for approval",
        "Technical feasibility discussions",
        "Design refinement based on feedback"
      ]
    },
    {
      icon: Code,
      title: "Developer Handoff",
      color: "green",
      description: "Prepared detailed specifications and assets for seamless implementation",
      activities: [
        "High-fidelity mockups for mobile + web",
        "Component specifications and variants",
        "Design system documentation",
        "Asset export and organization"
      ]
    }
  ];

  const colorMap: { [key: string]: { bg: string; border: string; text: string } } = {
    blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600" },
    indigo: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-600" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-600" },
    pink: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-600" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-600" },
    green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-600" }
  };

  return (
    <section id="approach" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Design Approach & Methodology
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Working within client-driven requirements, I adopted a structured, flow-first methodology 
            that prioritized user journey clarity while balancing business needs with UX best practices.
          </p>
        </div>

        {/* Design Process Timeline */}
        <div className="space-y-8 mb-12">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const colors = colorMap[phase.color];
            
            return (
              <div key={index} className="relative">
                {/* Connector Line (except last item) */}
                {index < phases.length - 1 && (
                  <div className="absolute left-7 top-20 w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent z-0"></div>
                )}

                <div className={`
                  relative z-10 bg-white p-6 sm:p-8 rounded-2xl border-2 ${colors.border} 
                  hover:shadow-2xl transition-all group
                `}>
                  <div className="flex items-start gap-6">
                    {/* Phase Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        w-14 h-14 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 
                        flex items-center justify-center mb-3 group-hover:scale-110 transition-transform
                      `}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-center">
                        <span className={`text-sm font-bold ${colors.text}`}>
                          Phase {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 
                        className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {phase.title}
                      </h3>
                      <p 
                        className="text-base leading-relaxed text-gray-700 mb-4"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {phase.description}
                      </p>

                      {/* Activities */}
                      <div className={`p-4 ${colors.bg} rounded-xl border ${colors.border}`}>
                        <h4 className="text-sm font-bold text-gray-900 mb-3">Key Activities:</h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-2">
                              <CheckCircle className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                              <span className="text-sm text-gray-700">{activity}</span>
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

        {/* Biggest Challenge Highlight */}
        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 p-8 sm:p-10 rounded-3xl border-2 border-orange-200 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h3 
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Biggest Challenge
              </h3>
              <p 
                className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="font-bold text-orange-600">
                  "Designing flows that are both effective and efficient while maintaining clean, 
                  aesthetic UI in the midst of dense information requirements."
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Challenge Aspect 1 */}
            <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
              <h4 
                className="text-lg font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Information Density
              </h4>
              <p className="text-sm leading-relaxed text-gray-700">
                Balancing comprehensive data requirements (6-step job form, safety records, 
                compliance docs) with visual simplicity and user cognitive load.
              </p>
            </div>

            {/* Challenge Aspect 2 */}
            <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
              <h4 
                className="text-lg font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Multi-Role Complexity
              </h4>
              <p className="text-sm leading-relaxed text-gray-700">
                Creating distinct yet cohesive experiences for 3 user types (Job Hunter, Company, 
                Super Admin) with vastly different workflows and priorities.
              </p>
            </div>

            {/* Challenge Aspect 3 */}
            <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
              <h4 
                className="text-lg font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Flow Optimization
              </h4>
              <p className="text-sm leading-relaxed text-gray-700">
                Designing logical progressions with conditional branching, one-way gates, 
                and flexible pipelines without overwhelming users.
              </p>
            </div>
          </div>

          {/* Solution Approach */}
          <div className="mt-6 p-6 bg-white rounded-xl border-2 border-green-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Solution Strategy
                </h4>
                <p 
                  className="text-sm leading-relaxed text-gray-700"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  I tackled this by adopting a <span className="font-bold text-green-600">progressive disclosure approach</span> with 
                  clear visual hierarchy, breaking complex forms into digestible steps with progress indicators, 
                  using card-based layouts to chunk information, and applying consistent design patterns across 
                  roles while customizing workflows to match mental models.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Constraints Note */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
          <h4 
            className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="text-xl">💡</span>
            Design Without User Research
          </h4>
          <p 
            className="text-base leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            While traditional UX process emphasizes user research, this project operated within 
            <span className="font-bold text-blue-600"> client-driven requirements</span>. I compensated by: 
            (1) conducting thorough stakeholder interviews to understand user needs, 
            (2) leveraging competitive analysis to apply proven UX patterns, and 
            (3) designing flexible systems that could adapt based on post-launch feedback.
          </p>
        </div>
      </div>
    </section>
  );
}