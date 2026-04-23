export function SamakakiImpact() {
  const metrics = [
    { value: "85%", label: "User Satisfaction", description: "based on post-launch survey" },
    { value: "3x", label: "More Engagement", description: "compared to general social media" },
    { value: "92%", label: "Return Rate", description: "users active after 30 days" },
  ];

  const outcomes = [
    "Families can now share moments in a dedicated, clutter-free environment",
    "Older family members report feeling more connected and less overwhelmed",
    "Users spend more quality time viewing family updates vs. scrolling aimlessly",
    "Positive feedback on the intuitive design and thoughtful features",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-16 bg-white">
      <div className="max-w-6xl w-full">
        {/* Project Label */}
        <div className="mb-8">
          <span 
            className="text-sm tracking-wider uppercase text-indigo-600"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Project: Samakaki
          </span>
        </div>
        
        {/* Title */}
        <h2 
          className="text-5xl mb-16"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          Impact & Results
        </h2>
        
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="p-8 bg-indigo-600 rounded-2xl text-center text-white"
            >
              <div 
                className="text-6xl mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
              >
                {metric.value}
              </div>
              <div 
                className="text-xl mb-2"
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
        
        {/* User Benefits */}
        <div>
          <h3 
            className="text-2xl mb-8"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            What Improved
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200"
              >
                <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p 
                  className="text-base leading-relaxed text-gray-700"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
