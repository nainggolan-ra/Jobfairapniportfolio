import { LayoutGrid, Table, Palette, Sidebar, BarChart, CheckCircle, Layers } from "lucide-react";

export function DesignDecision() {
  const decisions = [
    {
      icon: LayoutGrid,
      title: "Card-based Layout for Readability",
      description: "Modular card components improve scannability and content organization across dense data interfaces"
    },
    {
      icon: Table,
      title: "Advanced Table with Filtering & Horizontal Scroll",
      description: "Enterprise-grade tables support large datasets with inline actions, sorting, and responsive overflow"
    },
    {
      icon: Palette,
      title: "Color-coded Recruitment Status",
      description: "Visual status indicators provide instant recognition of application stages and pipeline position"
    },
    {
      icon: Sidebar,
      title: "Modular Sidebar Component",
      description: "Consistent navigation system adapts to different user roles while maintaining familiar patterns"
    },
    {
      icon: BarChart,
      title: "Separated Analytics & Management Dashboards",
      description: "Distinct views optimize for data analysis versus operational management tasks"
    },
    {
      icon: CheckCircle,
      title: "Confirmation Modal for Actions",
      description: "Critical actions require explicit confirmation to prevent accidental data modification"
    },
    {
      icon: Layers,
      title: "Scalable Data-heavy Interface Approach",
      description: "Progressive disclosure and smart defaults handle complexity without overwhelming users"
    }
  ];

  return (
    <section id="design" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Design Decisions
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-gray-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Strategic design choices that balance enterprise functionality with intuitive user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {decisions.map((decision, index) => {
            const Icon = decision.icon;
            
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-600 hover:shadow-2xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-indigo-50 group-hover:bg-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl mb-3 group-hover:text-indigo-600 transition-colors"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                    >
                      {decision.title}
                    </h3>
                    <p 
                      className="text-base leading-relaxed text-gray-700"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {decision.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}