import { Mail, Linkedin, QrCode, Menu, X } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <h1 
            className="text-lg sm:text-xl"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            RAN
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-indigo-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-indigo-600 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-indigo-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('design-system')} className="hover:text-indigo-600 transition-colors">Design System</button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Contact</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-indigo-600">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 hover:text-indigo-600">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-indigo-600">Projects</button>
              <button onClick={() => scrollToSection('design-system')} className="block w-full text-left py-2 hover:text-indigo-600">Design System</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="max-w-5xl w-full text-center mt-16">
        <div className="space-y-6 sm:space-y-8">
          {/* Main Title */}
          <h1 
            className="text-4xl sm:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Ridho Anshory<br />Nainggolan
          </h1>
          
          {/* Subtitle */}
          <div className="space-y-2">
            <p 
              className="text-2xl sm:text-3xl"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              UI/UX Designer
            </p>
            <p className="text-lg sm:text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              1 Year Experience
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 border-t border-gray-200">
            <a 
              href="https://linkedin.com"
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>LinkedIn</span>
            </a>
            
            <a 
              href="mailto:ridho.nainggolan@email.com"
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline" style={{ fontFamily: 'Inter, sans-serif' }}>ridho.nainggolan@email.com</span>
              <span className="sm:hidden" style={{ fontFamily: 'Inter, sans-serif' }}>Email</span>
            </a>
            
            <div className="flex items-center gap-2 text-gray-700">
              <QrCode className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>Scan QR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
