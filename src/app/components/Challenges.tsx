import { AlertTriangle } from "lucide-react";

export function Challenges() {
  const challenges = [
    {
      title: "Designing with Limited End-User Testing",
      description: "Without extensive usability testing, design decisions relied heavily on competitive analysis and stakeholder feedback rather than direct user validation"
    },
    {
      title: "Complex Relational Data Structure",
      description: "Managing interconnected data between users, companies, jobs, applications, and assessments demanded careful information architecture"
    },
    {
      title: "Short Development Timeline",
      description: "Tight deadlines required prioritization of core features while maintaining design quality and consistency"
    },
    {
      title: "Feature Expansion During Development",
      description: "Scope changes mid-project necessitated flexible design systems that could accommodate new requirements"
    },
    {
      title: "Deciding Essential vs Non-essential Data",
      description: "Balancing comprehensive data display with clean interfaces required constant evaluation of information hierarchy"
    },
    {
      title: "Balancing Density & Readability",
      description: "Enterprise users need detailed information, but overwhelming interfaces reduce usability and adoption"
    }
  ];

  return (
    <section id="challenges" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Design Challenges
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Navigating complex constraints while delivering a production-ready enterprise system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 group-hover:bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 
                    className="text-lg mb-3 group-hover:text-orange-600 transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  >
                    {challenge.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed text-gray-700"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {challenge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}