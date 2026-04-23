import { Mail, Linkedin, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ridhonainggolan660@gmail.com",
      link: "mailto:ridhonainggolan660@gmail.com",
      color: "blue",
      description: "Send me an email"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ridhoanshory",
      link: "https://www.linkedin.com/in/ridhoanshory",
      color: "indigo",
      description: "Connect on LinkedIn"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+62 895-3109-9179",
      link: "https://wa.me/62895310991179",
      color: "green",
      description: "Chat on WhatsApp"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium text-white">Let's Work Together</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-white"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
          >
            Ready to Start a Project?
          </h2>
          <p 
            className="text-lg sm:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const colorClasses = {
              blue: {
                bg: "bg-blue-500",
                hover: "hover:bg-blue-600",
                text: "text-blue-100",
                border: "border-blue-400"
              },
              indigo: {
                bg: "bg-indigo-500",
                hover: "hover:bg-indigo-600",
                text: "text-indigo-100",
                border: "border-indigo-400"
              },
              green: {
                bg: "bg-green-500",
                hover: "hover:bg-green-600",
                text: "text-green-100",
                border: "border-green-400"
              }
            }[method.color];

            return (
              <a
                key={index}
                href={method.link}
                target={method.label !== "Email" ? "_blank" : undefined}
                rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl ${colorClasses.bg} ${colorClasses.hover} flex items-center justify-center mb-4 transition-colors`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {method.label}
                </h3>
                <p className="text-sm text-white/70 mb-3">{method.description}</p>
                <p className="text-white font-medium break-all">{method.value}</p>
                <div className="mt-4 flex items-center gap-2 text-white/90 group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">Get in touch</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <a
            href="mailto:ridhonainggolan660@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-700 rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <Mail className="w-5 h-5" />
            <span>Send Me an Email</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
