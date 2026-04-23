import { Mail, Linkedin, MessageCircle, Globe, Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:ridhonainggolan660@gmail.com',
      color: 'hover:text-red-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ridhoanshory',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/62895310991179',
      color: 'hover:text-green-600'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#context' },
    { label: 'Research', href: '#competitive' },
    { label: 'Process', href: '#approach' },
    { label: 'Impact', href: '#outcome' }
  ];

  const projectLinks = [
    { label: 'View Live Demo', href: '#', external: true },
    { label: 'Case Study PDF', href: '#', external: true },
    { label: 'Figma File', href: '#', external: true },
    { label: 'More Projects', href: '#', external: false }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              Let's Work Together
            </h2>
            <p 
              className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              I'm available for freelance projects, collaborations, or full-time opportunities. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:ridhonainggolan660@gmail.com"
                className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-900 rounded-xl font-bold text-base hover:shadow-2xl hover:scale-105 transition-all"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/ridhoanshory"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold text-base hover:bg-white/20 transition-all"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <span 
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  AP
                </span>
              </div>
              <span 
                className="text-2xl font-bold"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                APNI Portfolio
              </span>
            </div>
            <p 
              className="text-gray-300 leading-relaxed mb-6 max-w-md"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              UI/UX Designer specializing in enterprise SaaS products. Passionate about creating 
              intuitive, scalable, and beautiful digital experiences that solve real problems.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center
                      hover:bg-white hover:scale-110 transition-all group
                      ${link.color}
                    `}
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:text-current transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-lg font-bold mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h3 
              className="text-lg font-bold mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Project Resources
            </h3>
            <ul className="space-y-3">
              {projectLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                    {link.external && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p 
            className="text-sm text-gray-400 flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {currentYear} APNI Portfolio Case Study. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-current" /> 
            by Your Name
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
    </footer>
  );
}