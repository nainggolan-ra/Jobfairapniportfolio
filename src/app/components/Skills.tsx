import { Search, Layout, GitBranch, Layers, Play, Users, Figma } from "lucide-react";

export function Skills() {
  const hardSkills = [
    { name: "UX Research", icon: Search },
    { name: "Wireframing", icon: Layout },
    { name: "User Flow", icon: GitBranch },
    { name: "Design System", icon: Layers },
    { name: "Prototyping", icon: Play },
    { name: "Usability Testing", icon: Users },
    { name: "Figma", icon: Figma },
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Collaboration",
    "Critical Thinking",
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 
          className="text-4xl sm:text-5xl mb-12 sm:mb-16"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          Skillset
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Hard Skills */}
          <div>
            <h3 
              className="text-xl sm:text-2xl mb-6 sm:mb-8"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Hard Skills
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {hardSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="p-4 sm:p-6 bg-white border border-gray-200 rounded-xl hover:border-indigo-600 hover:shadow-lg transition-all group"
                >
                  <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-gray-700 group-hover:text-indigo-600 transition-colors" />
                  <p 
                    className="text-sm sm:text-base"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  >
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 
              className="text-xl sm:text-2xl mb-6 sm:mb-8"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div 
                  key={skill}
                  className="p-4 sm:p-6 bg-white border border-gray-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-600 transition-all"
                >
                  <p 
                    className="text-base sm:text-lg"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  >
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
