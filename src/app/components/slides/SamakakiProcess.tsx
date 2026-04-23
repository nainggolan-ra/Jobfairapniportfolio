import { ArrowRight } from "lucide-react";

export function SamakakiProcess() {
  const steps = [
    { name: "Research", description: "User interviews & surveys" },
    { name: "User Flow", description: "Journey mapping" },
    { name: "Wireframe", description: "Low-fidelity sketches" },
    { name: "UI Design", description: "High-fidelity mockups" },
    { name: "Testing", description: "Usability validation" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-16 bg-white">
      <div className="max-w-6xl w-full">
        {/* Project Label */}
        <div className="mb-8">
          <span 
            className="text-sm tracking-wider uppercase text-indigo-600"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
          >
            Project: Samakaki
          </span>
        </div>
        
        {/* Title */}
        <h2 
          className="text-5xl mb-16"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          Design Process
        </h2>
        
        {/* Process Timeline */}
        <div className="relative">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step Card */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-2xl bg-indigo-600 flex items-center justify-center mb-4">
                    <span 
                      className="text-4xl text-white"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 
                    className="text-xl mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
                  >
                    {step.name}
                  </h3>
                  <p 
                    className="text-sm text-gray-600 text-center"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow */}
                {index < steps.length - 1 && (
                  <ArrowRight className="w-8 h-8 mx-6 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200">
          <p 
            className="text-lg leading-relaxed text-gray-700 text-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            The design process was iterative and collaborative, with continuous feedback loops between research findings, design iterations, and user testing to ensure the final product truly met family needs.
          </p>
        </div>
      </div>
    </div>
  );
}
