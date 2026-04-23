import { Mail, Linkedin, QrCode } from "lucide-react";

export function Cover() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 bg-white">
      <div className="max-w-5xl w-full text-center">
        <div className="space-y-6">
          {/* Main Title */}
          <h1 
            className="text-[5rem] leading-[1.1] tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Ridho Anshory<br />Nainggolan
          </h1>
          
          {/* Subtitle */}
          <div className="space-y-2">
            <p 
              className="text-3xl"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}
            >
              UI/UX Designer
            </p>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              1 Year Experience
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="flex items-center justify-center gap-8 mt-16 pt-8 border-t border-gray-200">
            <a 
              href="https://linkedin.com"
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>LinkedIn</span>
            </a>
            
            <a 
              href="mailto:ridho.nainggolan@email.com"
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>ridho.nainggolan@email.com</span>
            </a>
            
            <div className="flex items-center gap-2 text-gray-700">
              <QrCode className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>Scan QR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
