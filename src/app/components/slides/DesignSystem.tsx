export function DesignSystem() {
  const typography = [
    { name: "H1", size: "48px", weight: "700", sample: "The Quick Brown Fox" },
    { name: "H2", size: "36px", weight: "600", sample: "The Quick Brown Fox" },
    { name: "Body", size: "16px", weight: "400", sample: "The quick brown fox jumps over the lazy dog" },
    { name: "Caption", size: "14px", weight: "400", sample: "The quick brown fox jumps over the lazy dog" },
  ];

  const colors = [
    { name: "Primary Black", hex: "#000000", bg: "bg-black" },
    { name: "White", hex: "#FFFFFF", bg: "bg-white border border-gray-300" },
    { name: "Light Gray", hex: "#F5F5F7", bg: "bg-gray-100" },
    { name: "Border Gray", hex: "#E5E5E7", bg: "bg-gray-300" },
    { name: "Accent Indigo", hex: "#4F46E5", bg: "bg-indigo-600" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-16 bg-white">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h2 
          className="text-5xl mb-16"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          Design System
        </h2>
        
        <div className="space-y-16">
          {/* Typography */}
          <div>
            <h3 
              className="text-2xl mb-8"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Typography
            </h3>
            <div className="space-y-6">
              {typography.map((type) => (
                <div 
                  key={type.name}
                  className="p-6 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <span 
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {type.name} • {type.size} • {type.weight}
                    </span>
                  </div>
                  <p 
                    style={{ 
                      fontFamily: type.name === 'Body' || type.name === 'Caption' ? 'Inter, sans-serif' : 'Plus Jakarta Sans, sans-serif',
                      fontSize: type.size,
                      fontWeight: type.weight,
                    }}
                  >
                    {type.sample}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Color Palette */}
          <div>
            <h3 
              className="text-2xl mb-8"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Color Palette
            </h3>
            <div className="grid grid-cols-5 gap-4">
              {colors.map((color) => (
                <div key={color.name}>
                  <div className={`w-full h-24 rounded-xl ${color.bg} mb-3`}></div>
                  <p 
                    className="text-sm mb-1"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  >
                    {color.name}
                  </p>
                  <p 
                    className="text-xs text-gray-600"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {color.hex}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Components */}
          <div>
            <h3 
              className="text-2xl mb-8"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Components
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {/* Buttons */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p 
                  className="text-sm text-gray-600 mb-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Buttons
                </p>
                <div className="flex gap-3">
                  <button 
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  >
                    Primary
                  </button>
                  <button 
                    className="px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  >
                    Secondary
                  </button>
                </div>
              </div>
              
              {/* Cards */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p 
                  className="text-sm text-gray-600 mb-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Cards
                </p>
                <div className="p-4 bg-white border-2 border-gray-200 rounded-xl">
                  <p 
                    className="text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Card component with border and padding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
