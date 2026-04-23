export function ProjectOverview() {
  const details = [
    { label: 'Industry', value: 'Mining & Recruitment' },
    { label: 'Type', value: 'Enterprise SaaS' },
    { label: 'Platform', value: 'Mobile & Web' },
    { label: 'Duration', value: '6 Months (3 Design + 3 Dev)' },
    { label: 'Team', value: 'Solo Designer' }
  ];

  return (
    <section id="overview" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Enterprise Recruitment & Assessment Platform
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {details.map((detail, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-indigo-600 hover:shadow-xl transition-all group"
            >
              <p 
                className="text-xs text-gray-500 mb-3 uppercase tracking-wider"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                {detail.label}
              </p>
              <p 
                className="text-base sm:text-lg text-gray-900 leading-relaxed group-hover:text-indigo-600 transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}