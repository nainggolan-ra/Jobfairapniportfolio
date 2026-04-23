export function ProjectDashboard() {
  const features = [
    {
      title: "Data Tables",
      description: "Sortable, filterable tables with pagination and export functionality",
    },
    {
      title: "Real-time Analytics",
      description: "Live data updates with interactive charts and graphs",
    },
    {
      title: "User Management",
      description: "Comprehensive tools for managing users, roles, and permissions",
    },
    {
      title: "Advanced Filters",
      description: "Multi-parameter filtering system for precise data queries",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Project Header */}
        <div>
          <span 
            className="text-xs sm:text-sm tracking-wider uppercase text-indigo-600"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Project: Admin Dashboard
          </span>
          <h2 
            className="text-4xl sm:text-5xl mt-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Dashboard System
          </h2>
          <p 
            className="text-base sm:text-xl leading-relaxed text-gray-700 mt-6 max-w-3xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A comprehensive admin dashboard designed for data-heavy operations, providing clear insights and efficient management tools for business analytics and user administration.
          </p>
        </div>

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

        {/* Features */}
        <div>
          <h3 
            className="text-2xl sm:text-3xl mb-8"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Core Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-indigo-600 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-600 group-hover:bg-indigo-700 flex items-center justify-center flex-shrink-0 transition-colors">
                    <span 
                      className="text-white text-lg sm:text-xl"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h4 
                      className="text-xl sm:text-2xl mb-2 sm:mb-3"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      {feature.title}
                    </h4>
                    <p 
                      className="text-sm sm:text-base leading-relaxed text-gray-700"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Component Showcase */}
        <div className="space-y-8">
          <h3 
            className="text-2xl sm:text-3xl"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Component Showcase
          </h3>
          
          {/* Table Component Example */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
            <div className="bg-gray-50 px-4 sm:px-6 py-4 border-b border-gray-200">
              <h4 
                className="text-base sm:text-lg"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                User Management Table
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th 
                      className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm text-gray-600"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      Name
                    </th>
                    <th 
                      className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm text-gray-600"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      Email
                    </th>
                    <th 
                      className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm text-gray-600"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      Role
                    </th>
                    <th 
                      className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm text-gray-600"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
                    { name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
                    { name: "Mike Johnson", email: "mike@example.com", role: "Viewer", status: "Inactive" },
                  ].map((user, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {user.name}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {user.email}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {user.role}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <span 
                          className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs ${
                            user.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                        >
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Total Users", value: "1,284" },
              { label: "Active Sessions", value: "432" },
              { label: "Revenue", value: "$12.4K" },
              { label: "Growth", value: "+23%" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-4 sm:p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-600 transition-colors"
              >
                <p 
                  className="text-xs sm:text-sm text-gray-600 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.label}
                </p>
                <p 
                  className="text-2xl sm:text-3xl"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
