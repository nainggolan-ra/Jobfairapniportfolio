import { Mail, Linkedin, ArrowUp } from "lucide-react";

export function ClosingSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Contact CTA */}
          <div className="pt-12 sm:pt-16">
            <div 
              className="inline-block px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-xs tracking-wider uppercase text-indigo-700 border border-indigo-200 shadow-sm mb-8"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Let's Connect
            </div>
            
            <h2 
              className="text-3xl sm:text-4xl mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              Interested in Working Together?
            </h2>
            <p 
              className="text-lg sm:text-xl mb-8 text-gray-700 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              I'm open to discussing enterprise SaaS projects, design systems, 
              and complex product challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:ridho.nainggolan@email.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:scale-105 w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
                  Email Me
                </span>
              </a>
              
              <a 
                href="https://linkedin.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-50 transition-all shadow-lg border-2 border-indigo-100 hover:border-indigo-200 w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-12 sm:pt-16 space-y-4">
            <button
              onClick={scrollToTop}
              className="mx-auto flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Back to top
              </span>
            </button>
            
            <div className="pt-8 border-t border-gray-300">
              <p 
                className="text-sm text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                Ridho Anshory Nainggolan
              </p>
              <p 
                className="text-sm text-gray-500 mt-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                UI/UX Designer • Enterprise SaaS • Complex Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}