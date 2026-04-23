import { Layout, Smartphone, Monitor, Tablet } from 'lucide-react';

// Import all wireframe images
import wireframeJobHunter1 from 'figma:asset/057c8ebb3b852524be32d6eafd10797c4c3cab8b.png';
import wireframeJobHunter2 from 'figma:asset/2bff7bd17a66e0a494e79b688d9f50f3a79decd9.png';
import wireframeJobHunter3 from 'figma:asset/387722eaf4e9cbbe6b9c8956e9f26ff9e4b48efe.png';
import wireframeCompany1 from 'figma:asset/ba53d92e0cc9f686b076117906745d23b5fb7985.png';
import wireframeCompany2 from 'figma:asset/39ce4649a29c685063bd8f89d610382f4db8c82f.png';
import wireframeCompany3 from 'figma:asset/5da772d792811a6828925155a0ec3f0475855c0c.png';
import wireframeCompany4 from 'figma:asset/9f055753fe86a5e70c2cc8bfee2f6c3223abd47e.png';
import wireframeSuperAdmin1 from 'figma:asset/26b1cdd34161a65ec44d4793463b6c420c6c360d.png';

export function Wireframes() {
  const wireframesByRole = {
    superadmin: {
      role: "Super Admin",
      color: "purple",
      description: "System-wide analytics, user management, and platform monitoring",
      wireframes: [
        {
          title: "Super Admin Dashboard",
          device: "Desktop",
          description: "Comprehensive analytics dashboard with KPIs, user management, and system monitoring",
          image: wireframeSuperAdmin1,
          icon: Monitor
        }
      ]
    },
    jobhunter: {
      role: "Job Hunter",
      color: "blue",
      description: "Job search, application tracking, and profile management",
      wireframes: [
        {
          title: "Find Job",
          device: "Mobile",
          description: "Mobile-first job search interface with match scoring and quick filters",
          image: wireframeJobHunter1,
          icon: Smartphone
        },
        {
          title: "Job List Application",
          device: "Mobile",
          description: "Card-based layout for browsing available job opportunities with match scores",
          image: wireframeJobHunter2,
          icon: Smartphone
        },
        {
          title: "Detail Application Track",
          device: "Mobile",
          description: "Detailed application timeline view with status updates and progress tracking",
          image: wireframeJobHunter3,
          icon: Smartphone
        }
      ]
    },
    company: {
      role: "Company HR Manager",
      color: "green",
      description: "Recruitment management, candidate review, and job posting",
      wireframes: [
        {
          title: "Dashboard Company",
          device: "Desktop",
          description: "Recruitment metrics, competency assessments, and applicant pipeline overview",
          image: wireframeCompany1,
          icon: Monitor
        },
        {
          title: "Detail Applicant Apply",
          device: "Desktop",
          description: "Comprehensive candidate profile with detailed competency scores and application information",
          image: wireframeCompany2,
          icon: Monitor
        },
        {
          title: "Applicant Tracking Table",
          device: "Desktop",
          description: "Data table view for managing multiple applicants with sorting and filtering capabilities",
          image: wireframeCompany3,
          icon: Monitor
        },
        {
          title: "Filter & Chat AI",
          device: "Desktop",
          description: "Advanced filtering system with AI-powered chat assistant for applicant screening",
          image: wireframeCompany4,
          icon: Monitor
        }
      ]
    }
  };

  const getRoleColorClasses = (color: string) => {
    const colors = {
      purple: {
        badge: 'bg-purple-100 text-purple-700 border-purple-300',
        title: 'text-purple-900',
        accent: 'border-purple-400'
      },
      blue: {
        badge: 'bg-blue-100 text-blue-700 border-blue-300',
        title: 'text-blue-900',
        accent: 'border-blue-400'
      },
      green: {
        badge: 'bg-green-100 text-green-700 border-green-300',
        title: 'text-green-900',
        accent: 'border-green-400'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="wireframes" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full mb-6">
            <Layout className="w-4 h-4 text-gray-700" />
            <span 
              className="text-sm text-gray-800"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Low-Fidelity Designs
            </span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Wireframes
          </h2>
          <p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Initial low-fidelity wireframes establishing information architecture, layout structure, and user flows across all 3 user roles before moving to high-fidelity designs.
          </p>
        </div>

        {/* Wireframes by Role */}
        <div className="space-y-16">
          {Object.keys(wireframesByRole).map((roleKey) => {
            const roleData = wireframesByRole[roleKey as keyof typeof wireframesByRole];
            const colorClasses = getRoleColorClasses(roleData.color);
            
            return (
              <div key={roleKey}>
                {/* Role Header */}
                <div className="mb-8">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 ${colorClasses.badge} border-2 rounded-full mb-3`}>
                    <span 
                      className="text-sm font-semibold"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      {roleData.role}
                    </span>
                  </div>
                  <p 
                    className="text-base text-gray-600"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {roleData.description}
                  </p>
                </div>

                {/* Wireframes Grid for this Role */}
                <div className={`grid grid-cols-1 gap-8 ${roleKey === 'jobhunter' ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                  {roleData.wireframes.map((wireframe, index) => {
                    const Icon = wireframe.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-white rounded-2xl border-2 border-gray-300 overflow-hidden hover:border-gray-400 hover:shadow-xl transition-all group"
                      >
                        {/* Wireframe Image */}
                        <div className="bg-gray-50 p-6 border-b-2 border-gray-300">
                          <img 
                            src={wireframe.image} 
                            alt={wireframe.title}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>

                        {/* Info */}
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs flex items-center gap-1.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
                              <Icon className="w-3.5 h-3.5" />
                              {wireframe.device}
                            </div>
                          </div>
                          <h3 
                            className="text-xl mb-2"
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                          >
                            {wireframe.title}
                          </h3>
                          <p 
                            className="text-sm text-gray-600 leading-relaxed"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {wireframe.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-300 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              8
            </div>
            <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Wireframe Screens
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-300 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              3
            </div>
            <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              User Roles
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-300 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              15+
            </div>
            <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Iterations
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-300 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              3
            </div>
            <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Device Types
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}