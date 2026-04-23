import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import LightMode from '../../imports/LightMode';
import { CustomBottomMenu } from './CustomBottomMenu';

// Import PNG images for mobile screens
import findJobImg from 'figma:asset/02c96c143ab690432a94031399eedc483e18beb8.png';
import salaryInsightsImg from 'figma:asset/057223b56b4da714b94dc46c403ebc0f8b024261.png';
import applicationTrackingImg from 'figma:asset/88cb53414708a3d3b8122cf1cd02f2272081339c.png';
import applicationDetailImg from 'figma:asset/7c8dcd6a1de07dfde59f0f9f21633bf8715e6f92.png';
import profileImg from 'figma:asset/d62024c4d7b003da032feba8309fbda6db5a3cc7.png';

// Import PNG images for desktop screens
import dashboardImg from 'figma:asset/5d9cadc1a2903deb47e3c9537426589aa6a239c6.png';
import applicantListImg from 'figma:asset/4536a1e70ff53bb1a57b66dd78e07a3effc1a6be.png';
import candidateProfileImg from 'figma:asset/f530b2abde50404321cdbf1c178cbd57f5845667.png';
import aiFilteringImg from 'figma:asset/31f60b276ef1cc365e77533bc375b7496d4c2286.png';
import superAdminImg from 'figma:asset/15aa0f9cf7674b9a759810fc73032928a657c2c6.png';
import companyMgmtImg from 'figma:asset/a1ba578b59546105a3ea2f911fcb3702592471ef.png';

export function InterfaceShowcase() {
  const desktopMockups = [
    { 
      image: dashboardImg,
      title: "Company Dashboard",
      description: "Real-time analytics and recruitment metrics"
    },
    { 
      image: applicantListImg,
      title: "Applicant Tracking System",
      description: "Comprehensive candidate pipeline management"
    },
    { 
      image: candidateProfileImg,
      title: "Candidate Profile",
      description: "Detailed applicant information and timeline"
    },
    { 
      image: aiFilteringImg,
      title: "AI-Powered Filtering",
      description: "Smart search with conversational AI"
    },
    { 
      image: superAdminImg,
      title: "Super Admin Dashboard",
      description: "Enterprise revenue and subscription analytics"
    },
    { 
      image: companyMgmtImg,
      title: "Company Management",
      description: "Subscription and enterprise client management"
    }
  ];

  const mobileScreens = [
    { image: findJobImg, title: "Find Job", activeMenu: 'findJob' as const },
    { image: profileImg, title: "Profile Completion", activeMenu: 'profile' as const },
    { image: applicationTrackingImg, title: "Application Tracking", activeMenu: 'application' as const },
    { image: applicationDetailImg, title: "Application Detail", activeMenu: 'application' as const },
    { image: salaryInsightsImg, title: "Salary Insights", activeMenu: 'insight' as const }
  ];

  return (
    <section id="showcase" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Interface Mockups
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 rounded-full mb-6"></div>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-gray-600"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            High-fidelity screens from the production APNI Recruitment Platform across desktop and mobile interfaces.
          </p>
        </div>

        <div className="space-y-12">
          {/* Mobile Job Hunter Section */}
          <div className="group">
            {/* Title */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Smartphone className="w-5 h-5 text-orange-600" />
                <h3 
                  className="text-2xl"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                >
                  Mobile Job Hunter Experience
                </h3>
              </div>
              <p 
                className="text-base text-gray-600 ml-8"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Complete mobile experience with job discovery, profile management, and application tracking. Scroll within each screen to explore.
              </p>
            </div>

            {/* Horizontal Scrolling Mobile Frames */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl overflow-x-auto">
              <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
                {mobileScreens.map((screen, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center gap-4">
                      {/* Screen Label */}
                      <p 
                        className="text-sm text-gray-700"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                      >
                        {screen.title}
                      </p>
                      {/* Mobile Frame with iPhone bezel */}
                      <div 
                        className="bg-black rounded-[48px] p-3 shadow-2xl relative" 
                        style={{ width: '419px', height: '878px' }}
                      >
                        {/* White screen area */}
                        <div 
                          className="bg-white rounded-[36px] shadow-inner relative flex flex-col"
                          style={{ 
                            width: '393px', 
                            height: '852px',
                            overflow: 'hidden'
                          }}
                        >
                          {/* Fixed Top Status Bar */}
                          <div 
                            className="absolute top-0 left-0 right-0 z-10 bg-white"
                            style={{ height: '50px' }}
                          >
                            <LightMode />
                          </div>

                          {/* Scrollable Content Area */}
                          <div 
                            className="scrollbar-thin overflow-y-auto overflow-x-hidden"
                            style={{ 
                              marginTop: '50px',
                              marginBottom: '124px',
                              height: 'calc(852px - 50px - 124px)' // Total height - top bar - bottom menu
                            }}
                          >
                            <img 
                              src={screen.image} 
                              alt={screen.title}
                              className="w-full h-auto block"
                              style={{ width: '393px' }}
                            />
                          </div>

                          {/* Fixed Bottom Navigation */}
                          <div 
                            className="absolute bottom-0 left-0 right-0 z-10"
                            style={{ height: '124px' }}
                          >
                            <CustomBottomMenu activeMenu={screen.activeMenu} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop Mockups */}
          {desktopMockups.map((mockup, index) => (
            <div key={index} className="group">
              {/* Title */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Monitor className="w-5 h-5 text-orange-600" />
                  <h3 
                    className="text-2xl"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                  >
                    {mockup.title}
                  </h3>
                </div>
                <p 
                  className="text-base text-gray-600 ml-8"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {mockup.description}
                </p>
              </div>

              {/* Mockup Container */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl">
                {/* Desktop Browser Frame */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-md px-4 py-1.5 text-sm text-gray-500 border border-gray-200">
                      https://apni-recruitment.com
                    </div>
                  </div>
                  {/* Screen Content - Scaled to fit */}
                  <div className="relative bg-white overflow-hidden flex items-start justify-center" style={{ minHeight: '600px' }}>
                    <img 
                      src={mockup.image} 
                      alt={mockup.title}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}