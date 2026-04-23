import { Mail, Linkedin, QrCode } from "lucide-react";

export function Closing() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 bg-white">
      <div className="max-w-5xl w-full text-center">
        <div className="space-y-12">
          {/* Main Message */}
          <h2 
            className="text-5xl leading-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Let's Build Meaningful<br />Digital Experiences Together
          </h2>
          
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            I'm always excited to collaborate on projects that make a difference. 
            Whether you have a question, opportunity, or just want to connect, feel free to reach out.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-col items-center gap-6 mt-16 pt-12 border-t border-gray-200">
            <div className="flex items-center gap-8">
              <a 
                href="https://linkedin.com"
                className="flex items-center gap-3 px-6 py-3 border-2 border-gray-300 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  LinkedIn
                </span>
              </a>
              
              <a 
                href="mailto:ridho.nainggolan@email.com"
                className="flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all"
              >
                <Mail className="w-5 h-5" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  ridho.nainggolan@email.com
                </span>
              </a>
            </div>
            
            {/* QR Code Placeholder */}
            <div className="mt-8 p-8 bg-gray-50 border-2 border-gray-200 rounded-2xl">
              <div className="w-40 h-40 bg-white border border-gray-300 rounded-xl flex items-center justify-center">
                <QrCode className="w-24 h-24 text-gray-400" />
              </div>
              <p 
                className="text-sm text-gray-600 mt-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Scan to connect
              </p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p 
              className="text-sm text-gray-500"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              © 2026 Ridho Anshory Nainggolan • UI/UX Designer Portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
