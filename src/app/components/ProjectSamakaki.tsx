import { ArrowRight } from "lucide-react";

export function ProjectSamakaki() {
  const insights = [
    {
      title: "Privacy is Priority",
      description: "78% of users want a separate space for family content, away from public social media.",
    },
    {
      title: "Simple, Not Complex",
      description: "Older family members find current social platforms overwhelming and need straightforward navigation.",
    },
    {
      title: "Moments Over Noise",
      description: "Families want to focus on meaningful updates without algorithm-driven content.",
    },
  ];

  const steps = [
    { name: "Research", description: "User interviews & surveys" },
    { name: "User Flow", description: "Journey mapping" },
    { name: "Wireframe", description: "Low-fidelity sketches" },
    { name: "UI Design", description: "High-fidelity mockups" },
    { name: "Testing", description: "Usability validation" },
  ];

  const features = [
    "Private family circles",
    "Photo & video sharing",
    "Family calendar integration",
    "Simple, intuitive navigation",
  ];

  const metrics = [
    { value: "85%", label: "User Satisfaction", description: "based on post-launch survey" },
    { value: "3x", label: "More Engagement", description: "compared to general social media" },
    { value: "92%", label: "Return Rate", description: "users active after 30 days" },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
        {/* Project Header */}
        <div>
          <span 
            className="text-xs sm:text-sm tracking-wider uppercase text-indigo-600"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Featured Project
          </span>
          <h2 
            className="text-4xl sm:text-5xl mt-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Samakaki
          </h2>
          <p 
            className="text-lg sm:text-xl text-gray-600 mt-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Family Social Media App
          </p>
        </div>

        {/* Problem */}
        <div className="space-y-8">
          <h3 
            className="text-2xl sm:text-3xl"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            The Problem
          </h3>
          <div className="space-y-6">
            <div>
              <h4 
                className="text-lg sm:text-xl mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                Who are the users?
              </h4>
              <p 
                className="text-base sm:text-lg leading-relaxed text-gray-700"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Families with members living in different cities or countries who struggle to stay connected and share meaningful moments together in their busy lives.
              </p>
            </div>
            
            <div>
              <h4 
                className="text-lg sm:text-xl mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                What is the issue?
              </h4>
              <p 
                className="text-base sm:text-lg leading-relaxed text-gray-700"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Existing social media platforms are too public and cluttered, making it difficult for families to create a private, intimate space to share updates, photos, and memories.
              </p>
            </div>
          </div>
          
          <div className="p-6 sm:p-12 bg-gray-50 rounded-2xl border border-gray-200">
            <p 
              className="text-xl sm:text-3xl text-center leading-relaxed text-gray-800"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              "How might we create a private, intuitive platform that brings families closer together?"
            </p>
          </div>
        </div>

        {/* Research Insights */}
        <div className="space-y-8">
          <h3 
            className="text-2xl sm:text-3xl"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Research Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {insights.map((insight, index) => (
              <div 
                key={index}
                className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-indigo-600 hover:shadow-xl transition-all"
              >
                <div 
                  className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-indigo-600"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h4 
                  className="text-lg sm:text-xl mb-3 sm:mb-4"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                >
                  {insight.title}
                </h4>
                <p 
                  className="text-sm sm:text-base leading-relaxed text-gray-700"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Design Process */}
        <div className="space-y-8">
          <h3 
            className="text-2xl sm:text-3xl"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Design Process
          </h3>
          
          {/* Desktop Timeline */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 rounded-2xl bg-indigo-600 flex items-center justify-center mb-4">
                    <span 
                      className="text-3xl text-white"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 
                    className="text-lg mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  >
                    {step.name}
                  </h4>
                  <p 
                    className="text-sm text-gray-600 text-center"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-8 h-8 mx-4 text-gray-300" />
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile/Tablet Vertical List */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <span 
                    className="text-lg text-white"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h4 
                    className="text-base mb-1"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  >
                    {step.name}
                  </h4>
                  <p 
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final UI */}
        <div className="space-y-8">
          <h3 
            className="text-2xl sm:text-3xl"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Final UI Design
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Left: Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-72 sm:w-80 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1694878981905-b742a32f8121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzb2NpYWwlMjBtZWRpYSUyMG1vY2t1cHxlbnwxfHx8fDE3NzIwMzQyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Samakaki mobile app interface"
                      className="w-full h-[560px] sm:h-[640px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Features */}
            <div>
              <h4 
                className="text-xl sm:text-2xl mb-6 sm:mb-8"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                Key Features
              </h4>
              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-200"
                  >
                    <div 
                      className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0"
                    >
                      <span 
                        className="text-white text-sm"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <p 
                      className="text-base sm:text-lg pt-1"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Results */}
        <div className="space-y-8">
          <h3 
            className="text-2xl sm:text-3xl"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Impact & Results
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="p-6 sm:p-8 bg-indigo-600 rounded-2xl text-center text-white"
              >
                <div 
                  className="text-5xl sm:text-6xl mb-4"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
                >
                  {metric.value}
                </div>
                <div 
                  className="text-lg sm:text-xl mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                >
                  {metric.label}
                </div>
                <p 
                  className="text-sm opacity-90"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
