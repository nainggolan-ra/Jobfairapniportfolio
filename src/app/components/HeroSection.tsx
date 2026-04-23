import { ArrowRight, Layers } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="text-center space-y-8">
          {/* Label */}
          <div 
            className="inline-block px-5 py-2.5 bg-indigo-100 backdrop-blur-sm rounded-full text-xs tracking-wider uppercase text-indigo-700 border border-indigo-200 shadow-sm"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Enterprise SaaS System • Real Project
          </div>
          
          {/* Main Title */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight max-w-6xl mx-auto text-gray-900"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Designing an Enterprise<br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Recruitment SaaS Platform
            </span>
            <br />
            for Indonesia's Mining Industry
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A multi-role recruitment ecosystem connecting companies and job hunters 
            through AI matchmaking, paid assessments, and centralized monitoring.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('overview')}
              className="group flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:scale-105 w-full sm:w-auto"
            >
              <span 
                className="text-base sm:text-lg"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                View System Overview
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => scrollToSection('architecture')}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl border-2 border-indigo-100 hover:border-indigo-200 w-full sm:w-auto"
            >
              <Layers className="w-5 h-5" />
              <span 
                className="text-base sm:text-lg"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                Explore UX Architecture
              </span>
            </button>
          </div>

          {/* Illustration Placeholder */}
          <div className="pt-12 sm:pt-16">
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-10"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden border-2 border-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBkYXNoYm9hcmQlMjB0ZWFtfGVufDF8fHx8MTczOTAwNzMxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Enterprise SaaS Platform"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-white/90 rounded-2xl flex items-center justify-center shadow-xl">
                        <Layers className="w-12 h-12 text-indigo-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}