export function SystemComplexity() {
  const metrics = [
    { label: "User Roles", value: "3", color: "blue" },
    { label: "Admin Modules", value: "20+", color: "indigo" },
    { label: "Complex Data Architecture", value: "✓", color: "purple" },
    { label: "Multi-tenant Architecture", value: "✓", color: "pink" }
  ];

  const features = [
    "AI-based Matchmaking",
    "Monetization System",
    "Recruitment Status Pipeline",
    "Assessment Ecosystem"
  ];

  const colorMap: { [key: string]: { bg: string; text: string; from: string; to: string } } = {
    blue: { bg: "bg-blue-600", text: "text-blue-600", from: "from-blue-600", to: "to-blue-400" },
    indigo: { bg: "bg-indigo-600", text: "text-indigo-600", from: "from-indigo-600", to: "to-indigo-400" },
    purple: { bg: "bg-purple-600", text: "text-purple-600", from: "from-purple-600", to: "to-purple-400" },
    pink: { bg: "bg-pink-600", text: "text-pink-600", from: "from-pink-600", to: "to-pink-400" }
  };

  return (
    <section id="complexity" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Enterprise-Level Complexity
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A sophisticated platform handling multi-dimensional recruitment workflows at enterprise scale.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const colors = colorMap[metric.color];
            
            return (
              <div 
                key={index}
                className={`relative overflow-hidden bg-gradient-to-br ${colors.from} ${colors.to} p-8 rounded-2xl shadow-2xl group hover:scale-105 transition-transform`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <div className="relative z-10">
                  <p 
                    className="text-6xl sm:text-7xl text-white mb-3"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
                  >
                    {metric.value}
                  </p>
                  <p 
                    className="text-lg text-white/90"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  >
                    {metric.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-indigo-600 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 group-hover:bg-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <span 
                    className="text-white text-sm"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p 
                  className="text-base text-gray-900 group-hover:text-indigo-600 transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                >
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}