import { Download, UserCheck, Mail, LogIn, Home, CreditCard, FileCheck, Target, Search, FileText, Send, Clock, Users, Briefcase, ClipboardCheck, FileSignature, CheckCircle, XCircle, Globe, LayoutDashboard, Package, DollarSign, AlertCircle, Lock, Unlock, FileEdit, FilePlus, Info, Award, GraduationCap, Wrench, Settings, Eye, RefreshCw, ArrowRight, Shield, Building2, FileWarning, BarChart3, Tag, UserCog, Bell, Megaphone, Calendar, Database } from "lucide-react";

export function UXStructure() {
  const jobHunterFlow = {
    phases: [
      {
        title: "Onboarding",
        color: "indigo",
        steps: [
          { icon: Download, label: "Download App", type: "start" },
          { icon: UserCheck, label: "Onboarding", type: "process" },
          { icon: UserCheck, label: "Register", type: "process" },
          { icon: Mail, label: "Email Verification", type: "process" },
          { icon: LogIn, label: "Login", type: "process" }
        ]
      },
      {
        title: "Competency Assessment",
        color: "purple",
        steps: [
          { icon: Home, label: "Home (Banner Tes APNI)", type: "process" },
          { icon: CreditCard, label: "Pembayaran Test", type: "payment" },
          { icon: FileCheck, label: "Mengikuti Test", type: "process" },
          { icon: Target, label: "Matchmaking Score", type: "result" }
        ]
      },
      {
        title: "Job Search & Application",
        color: "blue",
        steps: [
          { icon: Search, label: "Search/Find Job", type: "process" },
          { icon: FileText, label: "Detail Job", type: "process" },
          { icon: Send, label: "Apply", type: "action" }
        ]
      },
      {
        title: "Application Tracking",
        color: "green",
        steps: [
          { icon: Clock, label: "Applied", type: "status" },
          { icon: Users, label: "Screening", type: "status" },
          { icon: Briefcase, label: "Interview", type: "status" },
          { icon: ClipboardCheck, label: "Test Assigned", type: "optional", note: "(Optional)" },
          { icon: FileCheck, label: "Test Submitted", type: "status" },
          { icon: FileSignature, label: "Negotiation", type: "status", note: "(Offer Letter)" },
          { icon: CheckCircle, label: "Hired", type: "success" }
        ]
      }
    ]
  };

  const companyFlow = {
    phases: [
      {
        title: "Registration & Subscription",
        color: "blue",
        steps: [
          { icon: Globe, label: "Browse Web", type: "start" },
          { icon: Home, label: "Landing Page", type: "process" },
          { icon: UserCheck, label: "Register", type: "process" },
          { icon: LogIn, label: "Login", type: "process" },
          { icon: LayoutDashboard, label: "Dashboard", type: "process" },
          { icon: Package, label: "Choose Plan", type: "process" },
          { icon: CreditCard, label: "Payment Form", type: "payment" },
          { icon: Clock, label: "Awaiting Verification", type: "pending" }
        ],
        branches: [
          { icon: CheckCircle, label: "Plan Active", type: "success", condition: "Success" },
          { icon: XCircle, label: "Access Blocked", type: "failed", condition: "Failed" }
        ]
      },
      {
        title: "Job Creation (6-Step Form)",
        color: "indigo",
        isConditional: true,
        steps: [
          { icon: FilePlus, label: "Job List Menu", type: "process" },
          { icon: FileEdit, label: "Create Job", type: "action" }
        ],
        substeps: [
          { icon: Info, label: "1. Basic Information", type: "form" },
          { icon: FileText, label: "2. Description", type: "form" },
          { icon: DollarSign, label: "3. Compensation", type: "form" },
          { icon: GraduationCap, label: "4. Education", type: "form" },
          { icon: Wrench, label: "5. Skills", type: "form" },
          { icon: Settings, label: "6. Matching Config", type: "form" }
        ],
        final: [
          { icon: Send, label: "Publish", type: "success" },
          { icon: FileCheck, label: "Draft", type: "draft" }
        ]
      },
      {
        title: "Test Bank Setup (Optional)",
        color: "purple",
        isOptional: true,
        steps: [
          { icon: ClipboardCheck, label: "Test Bank Menu", type: "process" },
          { icon: FilePlus, label: "Create Test", type: "action" },
          { icon: Target, label: "Target Job", type: "process" },
          { icon: CheckCircle, label: "Test Assigned to Job", type: "result" }
        ]
      },
      {
        title: "Applicant Tracking & Management",
        color: "green",
        steps: [
          { icon: Users, label: "Applicant Menu", type: "process" },
          { icon: FileText, label: "Select Job", type: "process" },
          { icon: Eye, label: "View Applicant", type: "action" }
        ],
        pipeline: {
          locked: [
            { icon: Send, label: "Applied", type: "locked", note: "One-way" },
            { icon: Search, label: "Screening", type: "locked", note: "One-way" }
          ],
          flexible: [
            { icon: Briefcase, label: "Interview", type: "flexible", note: "Repeatable" },
            { icon: ClipboardCheck, label: "Test Assigned", type: "optional", note: "Optional" },
            { icon: FileCheck, label: "Test Submitted", type: "flexible", note: "Skippable" },
            { icon: FileSignature, label: "Negotiation", type: "flexible", note: "Repeatable" },
            { icon: CheckCircle, label: "Hired", type: "success" }
          ]
        }
      }
    ]
  };

  const superAdminFlow = {
    phases: [
      {
        title: "Company Onboarding & Compliance",
        color: "orange",
        steps: [
          { icon: Building2, label: "Company Registration Review", type: "review" },
          { icon: Shield, label: "Safety Records Review", type: "review" },
          { icon: FileWarning, label: "Compliance Request Review", type: "review" }
        ],
        branches: [
          { icon: CheckCircle, label: "Approved & Active", type: "success", condition: "Approve" },
          { icon: XCircle, label: "Rejected", type: "failed", condition: "Reject" }
        ]
      },
      {
        title: "Subscription & Payment Verification",
        color: "red",
        steps: [
          { icon: Package, label: "Subscription Plan Management", type: "process" },
          { icon: CreditCard, label: "Payment Verification", type: "review" },
          { icon: FileText, label: "Invoice Management", type: "process" }
        ],
        branches: [
          { icon: CheckCircle, label: "Plan Activated", type: "success", condition: "Verified" },
          { icon: XCircle, label: "Access Suspended", type: "failed", condition: "Failed" }
        ]
      },
      {
        title: "Job Post Approval",
        color: "amber",
        steps: [
          { icon: FilePlus, label: "Job Post Queue", type: "process" },
          { icon: Eye, label: "Review Details", type: "review" }
        ],
        branches: [
          { icon: CheckCircle, label: "Approved & Published", type: "success", condition: "Approve" },
          { icon: FileEdit, label: "Request Edit", type: "edit", condition: "Edit" },
          { icon: XCircle, label: "Rejected", type: "failed", condition: "Reject" }
        ]
      },
      {
        title: "Assessment Management",
        color: "orange",
        steps: [
          { icon: Database, label: "Bank Soal Setup", type: "process" },
          { icon: Calendar, label: "Jadwal Test", type: "process" },
          { icon: Target, label: "Assign to Job", type: "action" },
          { icon: BarChart3, label: "Monitor Results", type: "process" }
        ]
      },
      {
        title: "Platform Operations",
        color: "red",
        steps: [
          { icon: BarChart3, label: "Analytics & Monitoring", type: "process" },
          { icon: Tag, label: "Promo & Discount", type: "process" },
          { icon: Bell, label: "Notification Management", type: "process" },
          { icon: UserCog, label: "Access Control", type: "process" }
        ],
        substeps: [
          { icon: Megaphone, label: "Broadcast Message", type: "notification" },
          { icon: Clock, label: "Notification History", type: "notification" },
          { icon: FileText, label: "Template", type: "notification" },
          { icon: Settings, label: "Trigger", type: "notification" },
          { icon: Target, label: "Campaigns", type: "notification" },
          { icon: Settings, label: "Preferences", type: "notification" }
        ]
      }
    ]
  };

  const colorMap: { [key: string]: { bg: string; text: string; border: string; light: string } } = {
    indigo: { bg: "bg-indigo-600", text: "text-indigo-600", border: "border-indigo-600", light: "bg-indigo-50" },
    purple: { bg: "bg-purple-600", text: "text-purple-600", border: "border-purple-600", light: "bg-purple-50" },
    blue: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-600", light: "bg-blue-50" },
    green: { bg: "bg-green-600", text: "text-green-600", border: "border-green-600", light: "bg-green-50" },
    orange: { bg: "bg-orange-600", text: "text-orange-600", border: "border-orange-600", light: "bg-orange-50" },
    red: { bg: "bg-red-600", text: "text-red-600", border: "border-red-600", light: "bg-red-50" },
    amber: { bg: "bg-amber-600", text: "text-amber-600", border: "border-amber-600", light: "bg-amber-50" }
  };

  const typeStyles: { [key: string]: string } = {
    start: "border-indigo-600 bg-indigo-50",
    process: "border-gray-300 bg-white",
    payment: "border-purple-600 bg-purple-50",
    result: "border-purple-600 bg-purple-50",
    action: "border-blue-600 bg-blue-50",
    status: "border-green-300 bg-white",
    optional: "border-orange-300 bg-orange-50 border-dashed",
    success: "border-green-600 bg-green-50",
    pending: "border-gray-300 bg-gray-50",
    failed: "border-red-600 bg-red-50",
    draft: "border-gray-300 bg-gray-50",
    locked: "border-gray-300 bg-gray-50",
    flexible: "border-gray-300 bg-gray-50",
    review: "border-amber-400 bg-amber-50",
    edit: "border-blue-400 bg-blue-50",
    notification: "border-gray-300 bg-white"
  };

  return (
    <section id="ux" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            User Journey & Flow Architecture
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Visualizing the complete Job Hunter journey from onboarding to successful hire, 
            showcasing the multi-stage application pipeline and unique competency assessment flow.
          </p>
        </div>

        {/* Job Hunter Journey Header */}
        <div className="mb-12 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg">
            <h3 
              className="text-xl sm:text-2xl"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              Job Hunter Journey
            </h3>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Flow Diagram */}
        <div className="space-y-16">
          {jobHunterFlow.phases.map((phase, phaseIndex) => {
            const colors = colorMap[phase.color];
            
            return (
              <div key={phaseIndex} className="space-y-6">
                {/* Phase Header */}
                <div className="flex items-center gap-4">
                  <div className={`px-6 py-3 ${colors.bg} text-white rounded-xl shadow-lg`}>
                    <h3 
                      className="text-lg sm:text-xl"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                    >
                      {phaseIndex + 1}. {phase.title}
                    </h3>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>

                {/* Flow Steps */}
                <div className="relative">
                  {/* Horizontal scrollable container for mobile */}
                  <div className="overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
                    <div className="flex items-center gap-4 min-w-max">
                      {phase.steps.map((step, stepIndex) => {
                        const Icon = step.icon;
                        const isLast = stepIndex === phase.steps.length - 1;
                        const isRejectable = phase.title === "Application Tracking" && step.type === "status";
                        
                        return (
                          <div key={stepIndex} className="flex items-center">
                            {/* Step Node */}
                            <div className="relative group">
                              <div 
                                className={`
                                  w-48 sm:w-52 p-5 rounded-xl border-2 
                                  ${typeStyles[step.type]} 
                                  hover:shadow-xl transition-all
                                  ${step.type === 'optional' ? 'opacity-80' : ''}
                                `}
                              >
                                <div className="flex flex-col items-center text-center gap-3">
                                  <div className={`
                                    w-12 h-12 rounded-xl flex items-center justify-center
                                    ${step.type === 'success' ? 'bg-green-600' : 
                                      step.type === 'start' ? 'bg-indigo-600' : 
                                      step.type === 'payment' || step.type === 'result' ? 'bg-purple-600' :
                                      step.type === 'action' ? 'bg-blue-600' :
                                      step.type === 'optional' ? 'bg-orange-400' :
                                      'bg-gray-700'}
                                    group-hover:scale-110 transition-transform
                                  `}>
                                    <Icon className="w-6 h-6 text-white" />
                                  </div>
                                  <p 
                                    className="text-sm font-semibold text-gray-800 leading-tight"
                                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                  >
                                    {step.label}
                                  </p>
                                  {step.note && (
                                    <span className="text-xs text-gray-600 italic">{step.note}</span>
                                  )}
                                </div>
                              </div>

                              {/* Rejection Path (for Application Tracking) */}
                              {isRejectable && (
                                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                                  <div className="w-0.5 h-8 bg-red-400"></div>
                                  <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-300 rounded-lg">
                                    <XCircle className="w-4 h-4 text-red-600" />
                                    <span className="text-xs text-red-600 font-medium">Reject</span>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Arrow Connector */}
                            {!isLast && (
                              <div className="flex items-center px-2">
                                <div className={`
                                  w-8 h-0.5 
                                  ${step.type === 'optional' || phase.steps[stepIndex + 1]?.type === 'optional' 
                                    ? 'bg-orange-300 border-t-2 border-dashed border-orange-400' 
                                    : 'bg-gray-400'}
                                `}></div>
                                <div className={`
                                  w-0 h-0 border-l-8 border-y-4 border-y-transparent
                                  ${step.type === 'optional' || phase.steps[stepIndex + 1]?.type === 'optional'
                                    ? 'border-l-orange-400'
                                    : 'border-l-gray-400'}
                                `}></div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-16 p-6 bg-white rounded-xl border border-gray-200">
          <h4 
            className="text-sm font-semibold text-gray-900 mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Legend:
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded bg-white"></div>
              <span className="text-sm text-gray-700">Standard Step</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-orange-300 border-dashed rounded bg-orange-50"></div>
              <span className="text-sm text-gray-700">Optional Step</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-green-600 rounded bg-green-50"></div>
              <span className="text-sm text-gray-700">Success State</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-600" />
              <span className="text-sm text-gray-700">Rejection Point</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-24 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg">
            <h3 
              className="text-xl sm:text-2xl"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              Company Journey
            </h3>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Company Flow */}
        <div className="space-y-20">
          {companyFlow.phases.map((phase, phaseIndex) => {
            const colors = colorMap[phase.color];
            
            return (
              <div key={phaseIndex} className="space-y-6">
                {/* Phase Header with Conditional Badge */}
                <div className="flex items-center gap-4 flex-wrap">
                  <div className={`px-6 py-3 ${colors.bg} text-white rounded-xl shadow-lg`}>
                    <h3 
                      className="text-lg sm:text-xl"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                    >
                      {phaseIndex + 1}. {phase.title}
                    </h3>
                  </div>
                  {phase.isConditional && (
                    <div className="px-4 py-2 bg-amber-100 border border-amber-400 rounded-lg flex items-center gap-2">
                      <Lock className="w-4 h-4 text-amber-700" />
                      <span className="text-sm font-medium text-amber-700">Requires Active Subscription</span>
                    </div>
                  )}
                  {phase.isOptional && (
                    <div className="px-4 py-2 bg-orange-100 border border-orange-300 rounded-lg flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-700" />
                      <span className="text-sm font-medium text-orange-700">Optional Feature</span>
                    </div>
                  )}
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>

                {/* Main Steps */}
                <div className="relative">
                  <div className="overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
                    <div className="flex items-center gap-4 min-w-max">
                      {phase.steps.map((step, stepIndex) => {
                        const Icon = step.icon;
                        const isLast = stepIndex === phase.steps.length - 1;
                        
                        return (
                          <div key={stepIndex} className="flex items-center">
                            <div className="relative group">
                              <div 
                                className={`
                                  w-48 sm:w-52 p-5 rounded-xl border-2 
                                  ${typeStyles[step.type]} 
                                  hover:shadow-xl transition-all
                                `}
                              >
                                <div className="flex flex-col items-center text-center gap-3">
                                  <div className={`
                                    w-12 h-12 rounded-xl flex items-center justify-center
                                    ${step.type === 'success' ? 'bg-green-600' : 
                                      step.type === 'start' ? 'bg-blue-600' : 
                                      step.type === 'payment' ? 'bg-purple-600' :
                                      step.type === 'action' ? 'bg-blue-600' :
                                      step.type === 'pending' ? 'bg-gray-500' :
                                      'bg-gray-700'}
                                    group-hover:scale-110 transition-transform
                                  `}>
                                    <Icon className="w-6 h-6 text-white" />
                                  </div>
                                  <p 
                                    className="text-sm font-semibold text-gray-800 leading-tight"
                                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                  >
                                    {step.label}
                                  </p>
                                  {step.note && (
                                    <span className="text-xs text-gray-600 italic">{step.note}</span>
                                  )}
                                </div>
                              </div>
                            </div>

                            {!isLast && (
                              <div className="flex items-center px-2">
                                <div className="w-8 h-0.5 bg-gray-400"></div>
                                <div className="w-0 h-0 border-l-8 border-y-4 border-y-transparent border-l-gray-400"></div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Branches (Success/Failed) */}
                {phase.branches && (
                  <div className="flex items-start justify-center gap-8 mt-8">
                    {phase.branches.map((branch, branchIndex) => {
                      const BranchIcon = branch.icon;
                      return (
                        <div key={branchIndex} className="flex flex-col items-center gap-3">
                          <div className="w-0.5 h-12 bg-gray-400"></div>
                          <div className={`
                            px-6 py-4 rounded-xl border-2 shadow-lg
                            ${branch.type === 'success' ? 'border-green-600 bg-green-50' : 'border-red-600 bg-red-50'}
                          `}>
                            <div className="flex flex-col items-center gap-2">
                              <BranchIcon className={`w-8 h-8 ${branch.type === 'success' ? 'text-green-600' : 'text-red-600'}`} />
                              <p className="text-sm font-bold text-gray-800">{branch.condition}</p>
                              <p className="text-xs text-gray-700">{branch.label}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Substeps (6-Step Form) */}
                {phase.substeps && (
                  <div className="mt-8 p-6 bg-indigo-50 rounded-xl border-2 border-indigo-200">
                    <h4 className="text-sm font-semibold text-indigo-900 mb-4 flex items-center gap-2">
                      <FileEdit className="w-5 h-5" />
                      Job Creation Form Steps:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                      {phase.substeps.map((substep, subIndex) => {
                        const SubIcon = substep.icon;
                        return (
                          <div key={subIndex} className="p-3 bg-white rounded-lg border border-indigo-200 hover:shadow-md transition-all">
                            <div className="flex flex-col items-center text-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                                <SubIcon className="w-4 h-4 text-white" />
                              </div>
                              <p className="text-xs font-medium text-gray-800 leading-tight">{substep.label}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Final Options (Publish/Draft) */}
                {phase.final && (
                  <div className="flex items-center justify-center gap-6 mt-6">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    {phase.final.map((finalStep, finalIndex) => {
                      const FinalIcon = finalStep.icon;
                      return (
                        <div key={finalIndex} className={`
                          px-8 py-4 rounded-xl border-2 shadow-lg
                          ${finalStep.type === 'success' ? 'border-green-600 bg-green-50' : 'border-gray-300 bg-gray-50'}
                        `}>
                          <div className="flex items-center gap-3">
                            <FinalIcon className={`w-6 h-6 ${finalStep.type === 'success' ? 'text-green-600' : 'text-gray-600'}`} />
                            <span className="font-semibold text-gray-800">{finalStep.label}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Pipeline (Applicant Tracking) */}
                {phase.pipeline && (
                  <div className="space-y-8 mt-8">
                    {/* Locked Pipeline */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Lock className="w-5 h-5 text-gray-600" />
                        <h4 className="text-sm font-semibold text-gray-900">Sequential Steps (One-Way)</h4>
                      </div>
                      <div className="overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
                        <div className="flex items-center gap-4 min-w-max">
                          {phase.pipeline.locked.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                              <div key={idx} className="flex items-center">
                                <div className="w-48 p-4 rounded-xl border-2 border-gray-400 bg-gray-50">
                                  <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
                                      <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-800">{step.label}</p>
                                    <div className="flex items-center gap-1 text-xs text-gray-600">
                                      <Lock className="w-3 h-3" />
                                      <span>{step.note}</span>
                                    </div>
                                  </div>
                                </div>
                                {idx < phase.pipeline.locked.length - 1 && (
                                  <div className="flex items-center px-2">
                                    <div className="w-8 h-0.5 bg-gray-400"></div>
                                    <div className="w-0 h-0 border-l-8 border-y-4 border-y-transparent border-l-gray-400"></div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Flexible Pipeline */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <RefreshCw className="w-5 h-5 text-green-600" />
                        <h4 className="text-sm font-semibold text-gray-900">Flexible Steps (Skip/Repeat/Go Back)</h4>
                      </div>
                      <div className="overflow-x-auto pb-12 -mx-6 px-6 sm:mx-0 sm:px-0">
                        <div className="flex items-center gap-4 min-w-max">
                          {phase.pipeline.flexible.map((step, idx) => {
                            const Icon = step.icon;
                            const isRejectable = step.type !== 'success';
                            return (
                              <div key={idx} className="flex items-center">
                                <div className="relative group">
                                  <div className={`
                                    w-48 p-4 rounded-xl border-2
                                    ${step.type === 'optional' ? 'border-orange-300 bg-orange-50 border-dashed' :
                                      step.type === 'success' ? 'border-green-600 bg-green-50' :
                                      'border-gray-300 bg-white'}
                                  `}>
                                    <div className="flex flex-col items-center gap-2">
                                      <div className={`
                                        w-10 h-10 rounded-lg flex items-center justify-center
                                        ${step.type === 'optional' ? 'bg-orange-500' :
                                          step.type === 'success' ? 'bg-green-600' :
                                          'bg-gray-700'}
                                      `}>
                                        <Icon className="w-5 h-5 text-white" />
                                      </div>
                                      <p className="text-sm font-semibold text-gray-800">{step.label}</p>
                                      <span className="text-xs text-gray-600 italic">{step.note}</span>
                                    </div>
                                  </div>
                                  {isRejectable && (
                                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                                      <div className="w-0.5 h-8 bg-red-400"></div>
                                      <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-300 rounded-lg">
                                        <XCircle className="w-4 h-4 text-red-600" />
                                        <span className="text-xs text-red-600 font-medium">Reject</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                {idx < phase.pipeline.flexible.length - 1 && (
                                  <div className="flex items-center px-2">
                                    <div className={`
                                      w-8 h-0.5
                                      ${step.type === 'optional' || phase.pipeline.flexible[idx + 1]?.type === 'optional'
                                        ? 'bg-orange-300'
                                        : 'bg-gray-400'}
                                    `}></div>
                                    <div className={`
                                      w-0 h-0 border-l-8 border-y-4 border-y-transparent
                                      ${step.type === 'optional' || phase.pipeline.flexible[idx + 1]?.type === 'optional'
                                        ? 'border-l-orange-400'
                                        : 'border-l-gray-400'}
                                    `}></div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Updated Legend */}
        <div className="mt-16 p-6 bg-white rounded-xl border border-gray-200">
          <h4 
            className="text-sm font-semibold text-gray-900 mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Legend:
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded bg-white"></div>
              <span className="text-sm text-gray-700">Standard Step</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-orange-300 border-dashed rounded bg-orange-50"></div>
              <span className="text-sm text-gray-700">Optional Step</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-green-600 rounded bg-green-50"></div>
              <span className="text-sm text-gray-700">Success State</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">One-Way Lock</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-700">Flexible Flow</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-600" />
              <span className="text-sm text-gray-700">Rejection Point</span>
            </div>
          </div>
        </div>

        {/* Super Admin Divider */}
        <div className="my-24 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl shadow-lg">
            <h3 
              className="text-xl sm:text-2xl"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              Super Admin Journey
            </h3>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Super Admin Flow */}
        <div className="space-y-20">
          {superAdminFlow.phases.map((phase, phaseIndex) => {
            const colors = colorMap[phase.color];
            
            return (
              <div key={phaseIndex} className="space-y-6">
                {/* Phase Header */}
                <div className="flex items-center gap-4 flex-wrap">
                  <div className={`px-6 py-3 ${colors.bg} text-white rounded-xl shadow-lg`}>
                    <h3 
                      className="text-lg sm:text-xl"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                    >
                      {phaseIndex + 1}. {phase.title}
                    </h3>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>

                {/* Main Steps */}
                <div className="relative">
                  <div className="overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
                    <div className="flex items-center gap-4 min-w-max">
                      {phase.steps.map((step, stepIndex) => {
                        const Icon = step.icon;
                        const isLast = stepIndex === phase.steps.length - 1;
                        
                        return (
                          <div key={stepIndex} className="flex items-center">
                            <div className="relative group">
                              <div 
                                className={`
                                  w-48 sm:w-52 p-5 rounded-xl border-2 
                                  ${typeStyles[step.type]} 
                                  hover:shadow-xl transition-all
                                `}
                              >
                                <div className="flex flex-col items-center text-center gap-3">
                                  <div className={`
                                    w-12 h-12 rounded-xl flex items-center justify-center
                                    ${step.type === 'review' ? 'bg-amber-600' : 
                                      step.type === 'action' ? 'bg-blue-600' :
                                      'bg-gray-700'}
                                    group-hover:scale-110 transition-transform
                                  `}>
                                    <Icon className="w-6 h-6 text-white" />
                                  </div>
                                  <p 
                                    className="text-sm font-semibold text-gray-800 leading-tight"
                                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                  >
                                    {step.label}
                                  </p>
                                  {step.note && (
                                    <span className="text-xs text-gray-600 italic">{step.note}</span>
                                  )}
                                </div>
                              </div>
                            </div>

                            {!isLast && (
                              <div className="flex items-center px-2">
                                <div className="w-8 h-0.5 bg-gray-400"></div>
                                <div className="w-0 h-0 border-l-8 border-y-4 border-y-transparent border-l-gray-400"></div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Branches (Approve/Reject/Edit) */}
                {phase.branches && (
                  <div className="flex items-start justify-center gap-6 mt-8 flex-wrap">
                    {phase.branches.map((branch, branchIndex) => {
                      const BranchIcon = branch.icon;
                      return (
                        <div key={branchIndex} className="flex flex-col items-center gap-3">
                          <div className="w-0.5 h-12 bg-gray-400"></div>
                          <div className={`
                            px-6 py-4 rounded-xl border-2 shadow-lg
                            ${branch.type === 'success' ? 'border-green-600 bg-green-50' : 
                              branch.type === 'edit' ? 'border-blue-600 bg-blue-50' :
                              'border-red-600 bg-red-50'}
                          `}>
                            <div className="flex flex-col items-center gap-2">
                              <BranchIcon className={`w-8 h-8 ${
                                branch.type === 'success' ? 'text-green-600' : 
                                branch.type === 'edit' ? 'text-blue-600' :
                                'text-red-600'}`} />
                              <p className="text-sm font-bold text-gray-800">{branch.condition}</p>
                              <p className="text-xs text-gray-700">{branch.label}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Substeps (Notification Management Details) */}
                {phase.substeps && (
                  <div className="mt-8 p-6 bg-red-50 rounded-xl border-2 border-red-200">
                    <h4 className="text-sm font-semibold text-red-900 mb-4 flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Notification Management Features:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                      {phase.substeps.map((substep, subIndex) => {
                        const SubIcon = substep.icon;
                        return (
                          <div key={subIndex} className="p-3 bg-white rounded-lg border border-red-200 hover:shadow-md transition-all">
                            <div className="flex flex-col items-center text-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                                <SubIcon className="w-4 h-4 text-white" />
                              </div>
                              <p className="text-xs font-medium text-gray-800 leading-tight">{substep.label}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Legend for All Journeys */}
        <div className="mt-24 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 shadow-xl">
          <h4 
            className="text-lg font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Complete Journey Legend:
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white"></div>
              <span className="text-sm font-medium text-gray-700">Standard Step</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-amber-400 rounded bg-amber-50"></div>
              <span className="text-sm font-medium text-gray-700">Review Step</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-orange-300 border-dashed rounded bg-orange-50"></div>
              <span className="text-sm font-medium text-gray-700">Optional Step</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-green-600 rounded bg-green-50"></div>
              <span className="text-sm font-medium text-gray-700">Success/Approved</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-blue-400 rounded bg-blue-50"></div>
              <span className="text-sm font-medium text-gray-700">Edit Request</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-red-600 rounded bg-red-50"></div>
              <span className="text-sm font-medium text-gray-700">Failed/Rejected</span>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">One-Way Lock</span>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Flexible Flow</span>
            </div>
            <div className="flex items-center gap-3">
              <XCircle className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-gray-700">Rejection Point</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}