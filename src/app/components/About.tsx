export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 
          className="text-4xl sm:text-5xl mb-12 sm:mb-16"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          About Me
        </h2>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <p 
              className="text-lg sm:text-xl leading-relaxed text-gray-700"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              I'm a UI/UX designer passionate about creating meaningful digital experiences that solve real problems. With 1 year of professional experience, I focus on user-centered design, translating complex challenges into intuitive and elegant solutions.
            </p>
            <p 
              className="text-lg sm:text-xl leading-relaxed text-gray-700"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              My approach combines thorough research, iterative design, and close collaboration with teams to deliver products that users love and businesses value.
            </p>
          </div>
          
          {/* Right: Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center border border-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRlc2lnbmVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MjAzNDI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Designer workspace"
                className="w-full h-full object-cover rounded-2xl opacity-40"
              />
              
              {/* Geometric Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 sm:gap-4 opacity-20">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-indigo-600 rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
