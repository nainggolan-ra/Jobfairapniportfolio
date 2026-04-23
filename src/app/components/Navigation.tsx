import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'context', label: 'Context' },
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'research', label: 'Research' },
  { id: 'competitive', label: 'Competitive' },
  { id: 'personas', label: 'Personas' },
  { id: 'journey', label: 'Journey' },
  { id: 'ia', label: 'IA' },
  { id: 'solution', label: 'Solution' },
  { id: 'approach', label: 'Approach' },
  { id: 'wireframes', label: 'Wireframes' },
  { id: 'ux', label: 'UX Flow' },
  { id: 'design', label: 'Design' },
  { id: 'design-system', label: 'System' },
  { id: 'complexity', label: 'Complexity' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'outcome', label: 'Impact' },
  { id: 'contact', label: 'Contact' }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Navigation */}
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Always Visible */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 hover:scale-110 transition-all"
              >
                <span 
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  RAN
                </span>
              </button>
            </div>

            {/* Desktop Navigation - Only visible when scrolled */}
            <div className={`
              hidden lg:flex items-center gap-1 transition-all duration-300
              ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
            `}>
              {sections.slice(0, 8).map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap
                    ${activeSection === section.id
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {section.label}
                </button>
              ))}
              
              {/* Dropdown for remaining sections */}
              <div className="relative group">
                <button
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap text-gray-700 hover:bg-gray-100"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  More ▾
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border-2 border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {sections.slice(8).map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`
                        w-full text-left px-4 py-3 text-sm font-medium transition-all whitespace-nowrap
                        ${activeSection === section.id
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-700 hover:bg-gray-50'
                        }
                        first:rounded-t-xl last:rounded-b-xl
                      `}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button - Desktop - Always visible */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-4 max-h-[70vh] overflow-y-auto">
              <div className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all
                      ${activeSection === section.id
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href="#contact"
                  className="w-full block text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm hover:shadow-xl transition-all"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-20"></div>
    </>
  );
}