import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, ExternalLink } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "tel:+15551234567"
    },
    {
      icon: <Mail className="w-5 h-5 text-pink-400" />,
      title: "Email",
      details: ["info@autodetailing.com", "bookings@autodetailing.com"],
      action: "mailto:info@autodetailing.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyan-400" />,
      title: "Address",
      details: ["123 Auto Street", "Downtown, CA 90210"],
      action: "https://maps.google.com/maps?q=123+Auto+Street+Downtown+CA+90210"
    },
    {
      icon: <Clock className="w-5 h-5 text-yellow-400" />,
      title: "Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat-Sun: 9AM-5PM"],
      action: null
    }
  ];

  const socialMedia = [
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      handle: "@autodetailing_pro",
      url: "https://instagram.com/autodetailing_pro",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      handle: "AutoDetailing Pro",
      url: "https://facebook.com/autodetailing.pro",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      handle: "@autodetail_pro",
      url: "https://twitter.com/autodetail_pro",
      color: "from-cyan-400 to-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Mail className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact
            </span>{" "}
            Us
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to give your car the anime-perfect treatment it deserves? 
            Get in touch with us today for a free consultation!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-400">
                              {detail}
                            </p>
                          ))}
                        </div>
                        {info.action && (
                          <a 
                            href={info.action}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-purple-400 hover:text-purple-300 mt-2 text-sm"
                          >
                            <span>View</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media & Map Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Social Media */}
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
                    >
                      <div className={`p-2 bg-gradient-to-r ${social.color} rounded-lg`}>
                        {social.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {social.name}
                        </h5>
                        <p className="text-sm text-gray-400">{social.handle}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-purple-400 transition-colors" />
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Google Maps */}
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>Find Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden border border-gray-600">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.176872484537!2d-118.41468!3d34.02014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2b1db45%3A0x1e1b7c7d5c6b7c1a!2s123%20Auto%20St%2C%20Beverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-purple-500 text-purple-400 hover:bg-purple-500/10"
                    onClick={() => window.open("https://maps.google.com/maps?q=123+Auto+Street+Downtown+CA+90210", "_blank")}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}