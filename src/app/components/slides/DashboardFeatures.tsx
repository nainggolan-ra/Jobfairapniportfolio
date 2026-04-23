export function DashboardFeatures() {
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
          className="text-5xl mb-16"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          Component Showcase
        </h2>
        
        <div className="space-y-8">
          {/* Table Component Example */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 
                className="text-lg"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                User Management Table
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th 
                      className="px-6 py-4 text-left text-sm text-gray-600"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      Name
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm text-gray-600"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      Email
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm text-gray-600"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      Role
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm text-gray-600"
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
                      <td className="px-6 py-4 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {user.email}
                      </td>
                      <td className="px-6 py-4 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {user.role}
                      </td>
                      <td className="px-6 py-4">
                        <span 
                          className={`inline-flex px-3 py-1 rounded-full text-xs ${
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
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: "Total Users", value: "1,284" },
              { label: "Active Sessions", value: "432" },
              { label: "Revenue", value: "$12.4K" },
              { label: "Growth", value: "+23%" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-600 transition-colors"
              >
                <p 
                  className="text-sm text-gray-600 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.label}
                </p>
                <p 
                  className="text-3xl"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
