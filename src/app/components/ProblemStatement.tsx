export function ProblemStatement() {
  const problems = [
    {
      title: 'Lack of Standardization',
      description: 'No unified recruitment system across nickel mining companies, leading to inconsistent hiring practices and candidate evaluation methods.'
    },
    {
      title: 'Manual Processes & Paper-Based Workflow',
      description: 'Heavy reliance on manual documentation, physical forms, and spreadsheets resulted in slow processing times and data entry errors.'
    },
    {
      title: 'Limited Candidate Visibility',
      description: 'Job seekers had no centralized platform to discover opportunities across different mining companies in Indonesia.'
    },
    {
      title: 'Inefficient Assessment System',
      description: 'Lack of standardized skill assessment tools made it difficult to objectively evaluate technical competencies of candidates.'
    }
  ];

  return (
    <section id="problem" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Challenges in Traditional Recruitment Process
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            The mining industry faced critical inefficiencies in recruitment operations that 
            required a comprehensive digital solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-red-500 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl bg-red-100 group-hover:bg-red-500 flex items-center justify-center flex-shrink-0 transition-colors"
                >
                  <span 
                    className="text-red-600 group-hover:text-white text-lg transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 
                    className="text-xl mb-2 group-hover:text-red-600 transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  >
                    {problem.title}
                  </h3>
                  <p 
                    className="text-base leading-relaxed text-gray-700"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {problem.description}
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