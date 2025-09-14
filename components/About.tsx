import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Clock, Star } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied customers trust our work"
    },
    {
      icon: <Award className="w-6 h-6 text-pink-400" />,
      number: "5+",
      label: "Years Experience",
      description: "Professional automotive care"
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      number: "24/7",
      label: "Support",
      description: "Always here to help you"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      number: "4.9/5",
      label: "Rating",
      description: "Excellent customer reviews"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/30">
                <Award className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm">About Us</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Passionate About{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Perfection
                </span>
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  We're automotive enthusiasts who understand the passion behind every ride. 
                  Whether it's a JDM legend, a European supercar, or your daily driver, 
                  we treat every vehicle with the same level of care and attention to detail.
                </p>
                
                <p className="text-lg">
                  Our team combines cutting-edge technology with traditional craftsmanship 
                  to deliver results that exceed expectations. From Paint Protection Film 
                  installation to complete detailing services, we ensure your car looks 
                  and performs at its absolute best.
                </p>
                
                <p className="text-lg">
                  Join our community of satisfied customers who trust us to keep their 
                  vehicles looking anime-perfect, rain or shine!
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    {stat.icon}
                    <span className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {stat.number}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white mb-1">{stat.label}</h4>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNhciUyMHdhbGxwYXBlcnxlbnwxfHx8fDE3NTc4NDUzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Anime Car Wallpaper"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Anime-Inspired Excellence
                  </h4>
                  <p className="text-gray-300">
                    We bring the same attention to detail and passion for perfection 
                    that you see in your favorite anime to every vehicle we service.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl" />
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}