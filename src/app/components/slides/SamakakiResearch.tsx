export function SamakakiResearch() {
  const insights = [
    {
      title: "Privacy is Priority",
      description: "78% of users want a separate space for family content, away from public social media. They value privacy and intimate sharing.",
    },
    {
      title: "Simple, Not Complex",
      description: "Older family members (45+) find current social platforms overwhelming. They need straightforward navigation and clear actions.",
    },
    {
      title: "Moments Over Noise",
      description: "Families want to focus on meaningful updates—birthdays, achievements, daily life—without algorithm-driven content competing for attention.",
    },
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
          Research Insights
        </h2>
        
        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className="p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-indigo-600 hover:shadow-xl transition-all"
            >
              <div 
                className="text-5xl mb-6 text-indigo-600"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 
                className="text-xl mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                {insight.title}
              </h3>
              <p 
                className="text-base leading-relaxed text-gray-700"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
