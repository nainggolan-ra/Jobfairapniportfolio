export function DashboardDetails() {
  const features = [
    {
      title: "Data Tables",
      description: "Sortable, filterable tables with pagination and export functionality",
    },
    {
      title: "Real-time Analytics",
      description: "Live data updates with interactive charts and graphs",
    },
    {
      title: "User Management",
      description: "Comprehensive tools for managing users, roles, and permissions",
    },
    {
      title: "Advanced Filters",
      description: "Multi-parameter filtering system for precise data queries",
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
            Project: Admin Dashboard
          </span>
        </div>
        
        {/* Title */}
        <h2 
          className="text-5xl mb-16"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          Core Features
        </h2>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-indigo-600 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 group-hover:bg-indigo-700 flex items-center justify-center flex-shrink-0 transition-colors">
                  <span 
                    className="text-white text-xl"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 
                    className="text-2xl mb-3"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-base leading-relaxed text-gray-700"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Design Approach */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200">
          <h3 
            className="text-xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Design Approach
          </h3>
          <p 
            className="text-lg leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            The dashboard was designed with a focus on information density without sacrificing clarity. Each component follows a consistent design language, making complex data easy to digest and act upon.
          </p>
        </div>
      </div>
    </div>
  );
}
