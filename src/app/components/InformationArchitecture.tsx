import { Network, Users, Building2, Shield, Layers, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function InformationArchitecture() {
  const [selectedRole, setSelectedRole] = useState<'jobhunter' | 'company' | 'admin'>('jobhunter');

  return (
    <section id="ia" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 border-2 border-orange-300 rounded-full mb-6">
            <span 
              className="text-sm font-semibold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Information Architecture
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Structuring Complex Ecosystem
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 rounded-full mb-6"></div>
          <p 
            className="text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Organized 175-200 screens across 3 user roles with distinct navigation hierarchies, 
            ensuring intuitive wayfinding and seamless role-based experiences for enterprise scalability.
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 text-center">
            <div 
              className="text-3xl font-bold text-orange-600 mb-1"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              175-200
            </div>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Total Screens
            </p>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 text-center">
            <div 
              className="text-3xl font-bold text-orange-600 mb-1"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              36
            </div>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Total Modules
            </p>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 text-center">
            <div 
              className="text-3xl font-bold text-orange-600 mb-1"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              3
            </div>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              User Roles
            </p>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 text-center">
            <div 
              className="text-3xl font-bold text-orange-600 mb-1"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              15+
            </div>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Unique Features
            </p>
          </div>
        </div>

        {/* Role Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedRole('jobhunter')}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
              selectedRole === 'jobhunter'
                ? 'bg-orange-50 border-orange-400 shadow-lg'
                : 'bg-white border-gray-300 hover:border-orange-300'
            }`}
          >
            <Users className={`w-5 h-5 ${selectedRole === 'jobhunter' ? 'text-orange-600' : 'text-gray-600'}`} />
            <div className="text-left">
              <div 
                className={`text-sm font-semibold ${selectedRole === 'jobhunter' ? 'text-orange-700' : 'text-gray-900'}`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Job Hunter
              </div>
              <div className="text-xs text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                8 modules • Most feature-rich role
              </div>
            </div>
          </button>

          <button
            onClick={() => setSelectedRole('company')}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
              selectedRole === 'company'
                ? 'bg-blue-50 border-blue-400 shadow-lg'
                : 'bg-white border-gray-300 hover:border-blue-300'
            }`}
          >
            <Building2 className={`w-5 h-5 ${selectedRole === 'company' ? 'text-blue-600' : 'text-gray-600'}`} />
            <div className="text-left">
              <div 
                className={`text-sm font-semibold ${selectedRole === 'company' ? 'text-blue-700' : 'text-gray-900'}`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Company
              </div>
              <div className="text-xs text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                8 modules • Focused on hiring workflows
              </div>
            </div>
          </button>

          <button
            onClick={() => setSelectedRole('admin')}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
              selectedRole === 'admin'
                ? 'bg-purple-50 border-purple-400 shadow-lg'
                : 'bg-white border-gray-300 hover:border-purple-300'
            }`}
          >
            <Shield className={`w-5 h-5 ${selectedRole === 'admin' ? 'text-purple-600' : 'text-gray-600'}`} />
            <div className="text-left">
              <div 
                className={`text-sm font-semibold ${selectedRole === 'admin' ? 'text-purple-700' : 'text-gray-900'}`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Super Admin
              </div>
              <div className="text-xs text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                20 modules • Complete platform control
              </div>
            </div>
          </button>
        </div>

        {/* Diagrams */}
        <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 mb-16">
          {/* Job Hunter Diagram */}
          {selectedRole === 'jobhunter' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 
                  className="text-2xl text-orange-600 mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                >
                  Job Hunter Navigation Structure
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Most complex role featuring AI-powered tools and innovative auction system
                </p>
              </div>

              {/* Root Node */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl border-2 border-orange-600 shadow-lg">
                  <div 
                    className="text-lg font-bold"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    JOB HUNTER PLATFORM
                  </div>
                </div>
              </div>

              {/* Vertical Line */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gray-300"></div>
              </div>

              {/* Main Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Module 1: Find Jobs */}
                <div className="flex flex-col items-center">
                  <div className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-4 hover:shadow-lg transition-all">
                    <h4 
                      className="text-sm font-bold text-orange-700 mb-3"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      1. Find Jobs
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-white border border-orange-200 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Job Search/Browse
                        </p>
                      </div>
                      <div className="bg-white border border-orange-200 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Job Details
                        </p>
                      </div>
                      <div className="bg-white border border-orange-200 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Apply Job
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 2: Company Discovery */}
                <div className="flex flex-col items-center">
                  <div className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-4 hover:shadow-lg transition-all">
                    <h4 
                      className="text-sm font-bold text-orange-700 mb-3"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      2. Company Discovery
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-white border border-orange-200 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          List Companies
                        </p>
                      </div>
                      <div className="bg-white border border-orange-200 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Company Profile
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 3: Salary Insight */}
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gradient-to-br from-orange-100 to-red-100 border-2 border-orange-400 rounded-xl p-4 hover:shadow-lg transition-all">
                    <h4 
                      className="text-sm font-bold text-orange-700 mb-1 flex items-center gap-1"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      3. Salary Insight ⭐
                    </h4>
                    <p className="text-xs text-orange-600 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Unique Feature</p>
                    <div className="space-y-2">
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs font-semibold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Overview
                        </p>
                        <p className="text-xs text-gray-600">Submit Salary, Trends, Compare</p>
                      </div>
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          My Submissions
                        </p>
                      </div>
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Compare Companies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 4: Application */}
                <div className="flex flex-col items-center">
                  <div className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-4 hover:shadow-lg transition-all">
                    <h4 
                      className="text-sm font-bold text-orange-700 mb-3"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      4. Application
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-white border border-orange-200 rounded-lg p-2">
                        <p className="text-xs font-semibold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                          My Applications
                        </p>
                        <p className="text-xs text-gray-600">Track Status & Flow</p>
                      </div>
                      <div className="bg-white border border-orange-200 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          My Auction Bids
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 5: Job Auction */}
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gradient-to-br from-orange-100 to-red-100 border-2 border-orange-400 rounded-xl p-4 hover:shadow-lg transition-all">
                    <h4 
                      className="text-sm font-bold text-orange-700 mb-1 flex items-center gap-1"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      5. Job Auction ⭐
                    </h4>
                    <p className="text-xs text-orange-600 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Unique Feature</p>
                    <div className="space-y-2">
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          List Job Auctions
                        </p>
                      </div>
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Place Your Bid
                        </p>
                      </div>
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Bid Status
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 6: Profile */}
                <div className="flex flex-col items-center md:col-span-1">
                  <div className="w-full bg-gradient-to-br from-orange-100 to-red-100 border-2 border-orange-400 rounded-xl p-4 hover:shadow-lg transition-all">
                    <h4 
                      className="text-sm font-bold text-orange-700 mb-3"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      6. Profile & AI Tools ⭐⭐⭐
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs font-semibold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Account Setup
                        </p>
                        <p className="text-xs text-gray-600">Experience, Education, Skills</p>
                      </div>
                      <div className="bg-gradient-to-r from-orange-200 to-red-200 border-2 border-orange-400 rounded-lg p-2">
                        <p className="text-xs font-bold text-orange-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                          🤖 AI Resume Assistant
                        </p>
                        <p className="text-xs text-gray-700">Cover Letter, ATS, Manage</p>
                      </div>
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          AI Career Navigator
                        </p>
                      </div>
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Career Assessment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 7: Site Readiness Check */}
                <div className="flex flex-col items-center md:col-span-1">
                  <div className="w-full bg-gradient-to-br from-orange-100 to-red-100 border-2 border-orange-400 rounded-xl p-4 hover:shadow-lg transition-all">
                    <h4 
                      className="text-sm font-bold text-orange-700 mb-1 flex items-center gap-1"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      7. Site Readiness Check ⭐
                    </h4>
                    <p className="text-xs text-orange-600 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Unique Feature</p>
                    <div className="space-y-2">
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs font-semibold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Multi-step Form
                        </p>
                        <p className="text-xs text-gray-600">5 Categories Assessment</p>
                      </div>
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Draft Auto-save
                        </p>
                      </div>
                      <div className="bg-white border border-orange-300 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Compliance Verification
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 8: Chat & Notifications */}
                <div className="flex flex-col items-center md:col-span-1">
                  <div className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-4 hover:shadow-lg transition-all">
                    <h4 
                      className="text-sm font-bold text-orange-700 mb-3"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      8. Chat & Notifications
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-white border border-orange-200 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Inbox & Messages
                        </p>
                      </div>
                      <div className="bg-white border border-orange-200 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Notification Center
                        </p>
                      </div>
                      <div className="bg-white border border-orange-200 rounded-lg p-2">
                        <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Real-time Updates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Company Diagram */}
          {selectedRole === 'company' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 
                  className="text-2xl text-blue-600 mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                >
                  Company Navigation Structure
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Focused on job posting and applicant management
                </p>
              </div>

              {/* Root Node */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-xl border-2 border-blue-600 shadow-lg">
                  <div 
                    className="text-lg font-bold"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    COMPANY PLATFORM
                  </div>
                </div>
              </div>

              {/* Vertical Line */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gray-300"></div>
              </div>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { title: "1. Dashboard", items: ["Overview Metrics", "Recent Activity", "Quick Actions"] },
                  { title: "2. Management Job", items: ["Job List", "Create/Edit Job (6-step)", "Job Auction (5-step)"], highlight: true },
                  { title: "3. Company Profile", items: ["Edit Profile", "About", "Culture & Jobs"] },
                  { title: "4. Applicant Management", items: ["Job List", "Applications", "Track Status"] },
                  { title: "5. Test Bank", items: ["Test Library", "Create Test", "Edit/Delete"] },
                  { title: "6. Chat", items: ["Conversations", "Messages Inbox", "Notifications"] },
                  { title: "7. Invoice", items: ["List Invoices", "Payment (CC/VA/QRIS)", "Status Tracking"] },
                  { title: "8. Management User", items: ["List Users", "Create/Edit", "Delete User"] }
                ].map((module, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-full ${module.highlight ? 'bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-blue-400' : 'bg-blue-50 border-2 border-blue-300'} rounded-xl p-4 hover:shadow-lg transition-all`}>
                      <h4 
                        className="text-xs font-bold text-blue-700 mb-3"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {module.title}
                      </h4>
                      <div className="space-y-1.5">
                        {module.items.map((item, i) => (
                          <div key={i} className="bg-white border border-blue-200 rounded-lg p-1.5">
                            <p className="text-xs text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Super Admin Diagram */}
          {selectedRole === 'admin' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 
                  className="text-2xl text-purple-600 mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                >
                  Super Admin Navigation Structure
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Most comprehensive role with complete platform control (20 modules)
                </p>
              </div>

              {/* Root Node */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl border-2 border-purple-600 shadow-lg">
                  <div 
                    className="text-lg font-bold"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    SUPER ADMIN PLATFORM
                  </div>
                </div>
              </div>

              {/* Vertical Line */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gray-300"></div>
              </div>

              {/* Modules Grid - Compact */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { num: "1", title: "Dashboard", highlight: false },
                  { num: "2", title: "Jobs", highlight: false },
                  { num: "3", title: "Companies", highlight: false },
                  { num: "4", title: "Invoices", highlight: false },
                  { num: "5", title: "Assessments", highlight: false },
                  { num: "6", title: "Users", highlight: false },
                  { num: "7", title: "Applications", highlight: false },
                  { num: "8", title: "Access Control", highlight: false },
                  { num: "9", title: "Vouchers", highlight: true },
                  { num: "10", title: "Subscriptions", highlight: true },
                  { num: "11", title: "News", highlight: true },
                  { num: "12", title: "Master Data", highlight: true },
                  { num: "13", title: "Reports", highlight: true },
                  { num: "14", title: "Notifications", highlight: true },
                  { num: "15", title: "Analytics", highlight: true },
                  { num: "16", title: "Resume DB", highlight: true },
                  { num: "17", title: "Verification", highlight: true },
                  { num: "18", title: "Ads & Banners", highlight: true },
                  { num: "19", title: "Settings", highlight: true },
                  { num: "20", title: "Audit", highlight: true }
                ].map((module, index) => (
                  <div 
                    key={index} 
                    className={`${module.highlight ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-400' : 'bg-purple-50 border-2 border-purple-300'} rounded-lg p-3 hover:shadow-lg transition-all text-center`}
                  >
                    <div 
                      className="text-lg font-bold text-purple-600 mb-1"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {module.num}
                    </div>
                    <p 
                      className="text-xs font-semibold text-purple-900"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {module.title}
                    </p>
                    {module.highlight && (
                      <span className="text-xs text-purple-600">⭐</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                <p className="text-sm text-center text-purple-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <strong>⭐ Highlighted modules</strong> represent unique enterprise features: Marketing automation, Content CMS, Advanced reporting, Resume database, and Compliance tools
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-orange-100 border-2 border-orange-300 flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-orange-600" />
            </div>
            <h3 
              className="text-lg font-semibold text-gray-900 mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Role-Based Architecture
            </h3>
            <p 
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Each role has tailored navigation and features with no overlap, reducing cognitive load and improving task efficiency
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-orange-100 border-2 border-orange-300 flex items-center justify-center mb-4">
              <Network className="w-6 h-6 text-orange-600" />
            </div>
            <h3 
              className="text-lg font-semibold text-gray-900 mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Scalable Structure
            </h3>
            <p 
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Modular organization allows easy feature expansion without disrupting existing user flows or navigation patterns
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-orange-100 border-2 border-orange-300 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <h3 
              className="text-lg font-semibold text-gray-900 mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Complexity Management
            </h3>
            <p 
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              175-200 screens organized into logical categories with clear hierarchy for intuitive wayfinding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}