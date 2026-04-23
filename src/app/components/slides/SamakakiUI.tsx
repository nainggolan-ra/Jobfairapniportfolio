export function SamakakiUI() {
  const features = [
    "Private family circles",
    "Photo & video sharing",
    "Family calendar integration",
    "Simple, intuitive navigation",
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
          Final UI Design
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1694878981905-b742a32f8121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzb2NpYWwlMjBtZWRpYSUyMG1vY2t1cHxlbnwxfHx8fDE3NzIwMzQyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Samakaki mobile app interface"
                    className="w-full h-[640px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Features */}
          <div>
            <h3 
              className="text-2xl mb-8"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Key Features
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200"
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
                    className="text-lg pt-1"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-indigo-50 rounded-xl border border-indigo-200">
              <p 
                className="text-base leading-relaxed text-gray-700"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                The design prioritizes clarity and ease of use, with a clean interface that works seamlessly across all age groups in the family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
