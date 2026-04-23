import { Calendar, Users, Monitor, Smartphone, FileText, Palette, Code } from "lucide-react";

export function ProjectContext() {
  return (
    <section id="context" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Project Context
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A comprehensive enterprise SaaS project delivered for Indonesia's mining industry association, 
            spanning mobile and web platforms with a complete design system.
          </p>
        </div>

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Timeline */}
          <div className="bg-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-600 hover:shadow-xl transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 group-hover:bg-blue-700 flex items-center justify-center flex-shrink-0 transition-colors">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 
                  className="text-sm font-bold text-gray-500 mb-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  TIMELINE
                </h3>
                <p 
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  3 Months
                </p>
                <p className="text-sm text-gray-600 mt-1">Design phase</p>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div className="bg-white p-6 rounded-2xl border-2 border-indigo-100 hover:border-indigo-600 hover:shadow-xl transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 group-hover:bg-indigo-700 flex items-center justify-center flex-shrink-0 transition-colors">
                <div className="relative">
                  <Monitor className="w-5 h-5 text-white" />
                  <Smartphone className="w-4 h-4 text-white absolute -bottom-1 -right-1" />
                </div>
              </div>
              <div>
                <h3 
                  className="text-sm font-bold text-gray-500 mb-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  PLATFORM
                </h3>
                <p 
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Mobile + Web
                </p>
                <p className="text-sm text-gray-600 mt-1">Cross-platform design</p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white p-6 rounded-2xl border-2 border-purple-100 hover:border-purple-600 hover:shadow-xl transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600 group-hover:bg-purple-700 flex items-center justify-center flex-shrink-0 transition-colors">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 
                  className="text-sm font-bold text-gray-500 mb-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  TEAM STRUCTURE
                </h3>
                <p 
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Cross-functional
                </p>
                <p className="text-sm text-gray-600 mt-1">Designer + Dev team</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Role */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 sm:p-10 rounded-3xl border-2 border-indigo-200 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <h3 
              className="text-2xl sm:text-3xl font-bold text-gray-900"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              My Role & Responsibilities
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 
                className="text-lg font-bold text-gray-900 mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Role
              </h4>
              <p 
                className="text-base leading-relaxed text-gray-700 mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="font-bold text-indigo-600">UI/UX Designer</span> at <span className="font-semibold">Elisoft Technology</span>
              </p>
              <p 
                className="text-base leading-relaxed text-gray-700"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="font-bold text-indigo-600">Client:</span> APNI (Asosiasi Penambang Nikel Indonesia)
              </p>
            </div>

            <div>
              <h4 
                className="text-lg font-bold text-gray-900 mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Stakeholders
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                  <span>APNI Management Team</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                  <span>Development Team (Elisoft Technology)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                  <span>APNI Intern Program Participants</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Responsibilities */}
          <div>
            <h4 
              className="text-lg font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Key Responsibilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Translating business requirements into intuitive user flows",
                "Designing complete UI for 3 user roles (Job Hunter, Company, Super Admin)",
                "Creating multi-step forms and complex workflow systems",
                "Designing innovative Job Auction bidding mechanism",
                "Building comprehensive design system with reusable components",
                "Collaborating with development team for seamless handoff"
              ].map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-indigo-100">
                  <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* High-Fidelity Mockups */}
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-xl bg-blue-600 group-hover:bg-blue-700 flex items-center justify-center mb-4 transition-colors">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h4 
              className="text-lg font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              High-Fidelity Mockups
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Complete pixel-perfect designs for mobile app and web dashboard interfaces
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">Job Hunter</span>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">Company</span>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">Super Admin</span>
            </div>
          </div>

          {/* Design System */}
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-indigo-600 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-xl bg-indigo-600 group-hover:bg-indigo-700 flex items-center justify-center mb-4 transition-colors">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <h4 
              className="text-lg font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Design System
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Comprehensive design system with guidelines and reusable components
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">Typography</span>
              <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">Colors</span>
              <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">Icons</span>
            </div>
          </div>

          {/* Component Library */}
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-purple-600 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-xl bg-purple-600 group-hover:bg-purple-700 flex items-center justify-center mb-4 transition-colors">
              <Code className="w-7 h-7 text-white" />
            </div>
            <h4 
              className="text-lg font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Component Library
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Local variable components with variants for efficient design handoff
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded">Buttons</span>
              <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded">Cards</span>
              <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded">Forms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}