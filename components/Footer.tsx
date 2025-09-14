import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    { label: "Paint Protection Film", href: "#services" },
    { label: "Ceramic Coating", href: "#services" },
    { label: "Full Detailing", href: "#services" },
    { label: "Paint Correction", href: "#services" },
    { label: "Window Tinting", href: "#services" },
    { label: "Maintenance Packages", href: "#services" }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/autodetailing_pro", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/autodetailing.pro", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/autodetail_pro", label: "Twitter" }
  ];

  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AD</span>
              </div>
              <span className="text-white text-xl font-bold">AutoDetailing</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Premium automotive care services designed to protect, enhance, and maintain your vehicle's appearance. 
              Making every car look anime-perfect!
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>123 Auto Street</p>
                  <p>Downtown, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-purple-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@autodetailing.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  info@autodetailing.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} AutoDetailing. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
    </footer>
  );
}