export function DashboardOverview() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-16 bg-white">
      <div className="max-w-6xl w-full">
        {/* Project Label */}
        <div className="mb-8">
          <span 
            className="text-sm tracking-wider uppercase text-indigo-600"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Project: Admin Dashboard
          </span>
        </div>
        
        {/* Title */}
        <h2 
          className="text-5xl mb-8"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          Dashboard System
        </h2>
        
        {/* Description */}
        <p 
          className="text-xl leading-relaxed text-gray-700 mb-16 max-w-3xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          A comprehensive admin dashboard designed for data-heavy operations, providing clear insights and efficient management tools for business analytics and user administration.
        </p>
        
        {/* Dashboard Preview */}
        <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-2xl">
          <div className="bg-gray-900 p-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="bg-white">
            <img 
              src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxOTI3NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dashboard interface preview"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Key Points */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 
              className="text-lg mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Complex Layouts
            </h3>
            <p 
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Organized data hierarchy
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 
              className="text-lg mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Data Visualization
            </h3>
            <p 
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Charts and analytics
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 
              className="text-lg mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Responsive Design
            </h3>
            <p 
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Works on all devices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
