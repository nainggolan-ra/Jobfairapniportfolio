import { Search, Layout, GitBranch, Layers, Play, Users, Figma } from "lucide-react";

export function Skillset() {
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
    <div className="min-h-screen flex items-center justify-center px-8 py-16 bg-white">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h2 
          className="text-5xl mb-16"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          Skillset
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Hard Skills */}
          <div>
            <h3 
              className="text-2xl mb-8"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Hard Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {hardSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="p-6 border border-gray-200 rounded-xl hover:border-indigo-600 hover:shadow-lg transition-all group"
                >
                  <skill.icon className="w-8 h-8 mb-4 text-gray-700 group-hover:text-indigo-600 transition-colors" />
                  <p 
                    className="text-base"
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
              className="text-2xl mb-8"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div 
                  key={skill}
                  className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-600 transition-all"
                >
                  <p 
                    className="text-lg"
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
    </div>
  );
}
