import { Palette, Type, Box, Download } from 'lucide-react';
import colorSystemImg from 'figma:asset/e42652d12d5b2db3faf352ba68f41044ebe761b5.png';
import typographySystemImg from 'figma:asset/6667b19d89792e3cb3a15037f5ac4ffc9c708b26.png';
import componentLibraryImg from 'figma:asset/d0e5971dd3545067b73cb3c2d2e0106d64b0042d.png';

export function DesignSystemSection() {
  const systemElements = [
    {
      icon: Palette,
      title: "Color System",
      description: "Comprehensive palette with semantic tokens for consistency",
      image: colorSystemImg,
      details: ["Primary & Greyscale", "Status colors (Success/Warning/Error)", "12-shade scales", "Accessible contrast ratios"]
    },
    {
      icon: Type,
      title: "Typography Scale",
      description: "Plus Jakarta Sans with systematic sizing and weights",
      image: typographySystemImg,
      details: ["8 type scales (48px - 12px)", "4 weight variations", "Consistent line heights", "Optimized readability"]
    },
    {
      icon: Box,
      title: "Component Library",
      description: "Comprehensive component library for rapid development",
      image: componentLibraryImg,
      details: ["Buttons, inputs, cards", "Data tables & charts", "Navigation patterns", "Form elements"]
    }
  ];

  return (
    <section id="design-system" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 border-2 border-orange-300 rounded-full mb-6">
            <span 
              className="text-sm font-semibold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Design System
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Systematic Design Foundation
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 rounded-full mb-6"></div>
          <p 
            className="text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Built a comprehensive design system to ensure consistency across 3 user roles, 
            175-200 screens, and enable efficient developer handoff for enterprise scalability.
          </p>
        </div>

        {/* System Elements Grid */}
        <div className="space-y-12">
          {systemElements.map((element, index) => {
            const Icon = element.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}
              >
                {/* Image - Compact Size */}
                <div className="lg:w-1/2">
                  <div className="bg-gray-50 rounded-2xl border-2 border-gray-300 p-4 hover:border-orange-400 transition-all">
                    <img 
                      src={element.image} 
                      alt={element.title}
                      className="w-full h-auto rounded-lg"
                      style={{ maxHeight: '400px', objectFit: 'contain' }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 border-2 border-orange-300 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 
                      className="text-2xl"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                    >
                      {element.title}
                    </h3>
                  </div>
                  
                  <p 
                    className="text-base text-gray-700 mb-6 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {element.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {element.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                        <span 
                          className="text-sm text-gray-700"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Summary - Compact */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200 text-center">
            <div 
              className="text-3xl font-bold text-orange-600 mb-1"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              80+
            </div>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Components
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200 text-center">
            <div 
              className="text-3xl font-bold text-orange-600 mb-1"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              24
            </div>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Color Scales
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200 text-center">
            <div 
              className="text-3xl font-bold text-orange-600 mb-1"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              8
            </div>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Type Scales
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200 text-center">
            <div 
              className="text-3xl font-bold text-orange-600 mb-1"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              50+
            </div>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Screens
            </p>
          </div>
        </div>

        {/* Key Benefits - Compact */}
        <div className="mt-12 bg-gradient-to-br from-gray-50 to-orange-50 border-2 border-gray-300 rounded-2xl p-8">
          <h3 
            className="text-xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            System Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Design Consistency
                </p>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Unified experience across 50+ screens and 3 user roles
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Development Efficiency
                </p>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Reusable components accelerate implementation
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Scalability
                </p>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Easy to extend for future features and iterations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}