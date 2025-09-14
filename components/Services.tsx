import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Sparkles, Car, Droplets, Zap, Star } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Paint Protection Film (PPF)",
      description: "Ultimate protection against rock chips, scratches, and UV damage with premium self-healing film.",
      features: ["Self-healing technology", "10-year warranty", "Invisible protection", "Resale value preservation"],
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Ceramic Coating",
      description: "Long-lasting protection with incredible gloss and hydrophobic properties for easy maintenance.",
      features: ["9H hardness", "Hydrophobic coating", "UV protection", "Easy maintenance"],
      gradient: "from-pink-600 to-purple-600"
    },
    {
      icon: <Car className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Full Detailing",
      description: "Complete interior and exterior detailing to restore your car's showroom condition.",
      features: ["Paint correction", "Interior deep clean", "Engine bay detail", "Wheel & tire care"],
      gradient: "from-cyan-600 to-teal-600"
    },
    {
      icon: <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Paint Correction",
      description: "Professional scratch and swirl mark removal to restore your paint's original clarity.",
      features: ["Swirl mark removal", "Scratch elimination", "Paint restoration", "High-gloss finish"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Window Tinting",
      description: "Premium window films for privacy, UV protection, and enhanced aesthetics.",
      features: ["UV protection", "Heat rejection", "Privacy enhancement", "Fade resistance"],
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      icon: <Star className="w-8 h-8 text-green-400" />,
      title: "Maintenance Packages",
      description: "Regular maintenance plans to keep your vehicle looking its absolute best.",
      features: ["Monthly washes", "Quarterly details", "Annual protection", "Priority booking"],
      gradient: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-900/30 px-3 sm:px-4 py-2 rounded-full border border-purple-500/30 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Premium
            </span>{" "}
            Car Care
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Professional automotive services designed to protect, enhance, and maintain your vehicle's appearance and value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-3 sm:p-4 mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center`}>
                  {service.icon}
                </div>
                <CardTitle className="text-white group-hover:text-purple-300 transition-colors text-lg sm:text-xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Anime Car Showcase */}
        <div className="mt-20 relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              See The <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Difference</span>
            </h3>
            <p className="text-gray-400">Professional results that make your car look anime-perfect</p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1746079074371-e28f14c76e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3ODQ1MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional Car Detailing"
              className="w-full h-64 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="text-2xl font-bold text-white mb-2">Professional Results</h4>
              <p className="text-gray-300">Experience the difference our premium services make</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}