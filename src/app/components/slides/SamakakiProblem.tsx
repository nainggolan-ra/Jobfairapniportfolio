export function SamakakiProblem() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-16 bg-white">
      <div className="max-w-5xl w-full">
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
          className="text-5xl mb-8"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
        >
          The Problem
        </h2>
        
        {/* Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <div>
              <h3 
                className="text-2xl mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                Who are the users?
              </h3>
              <p 
                className="text-xl leading-relaxed text-gray-700"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Families with members living in different cities or countries who struggle to stay connected and share meaningful moments together in their busy lives.
              </p>
            </div>
            
            <div>
              <h3 
                className="text-2xl mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
              >
                What is the issue?
              </h3>
              <p 
                className="text-xl leading-relaxed text-gray-700"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Existing social media platforms are too public and cluttered, making it difficult for families to create a private, intimate space to share updates, photos, and memories. Family members often miss important moments due to information overload and lack of dedicated family-focused features.
              </p>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="mt-12 p-12 bg-gray-50 rounded-2xl border border-gray-200">
            <p 
              className="text-3xl text-center leading-relaxed text-gray-800"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              "How might we create a private, intuitive platform that brings families closer together?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
