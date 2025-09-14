import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      
      {/* Anime Car Background */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1718354505527-84752f7020ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMHNwb3J0cyUyMGNhciUyMG5lb258ZW58MXx8fHwxNTc3ODQ1MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Anime Sports Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-1 h-1 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-8 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-full animate-bounce" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-purple-900/30 px-3 sm:px-4 py-2 rounded-full border border-purple-500/30">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                <span className="text-purple-300 text-xs sm:text-sm">Premium Car Care</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Protect
                </span>
                <br />
                Your Ride
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
                Professional Paint Protection Film (PPF) installation and premium car detailing services. 
                Keep your car looking anime-perfect!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group">
                Book Service
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                View Gallery
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 pt-6 sm:pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                <span className="text-gray-300 text-sm sm:text-base">Lifetime Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                <span className="text-gray-300 text-sm sm:text-base">Premium Materials</span>
              </div>
            </div>
          </div>

          {/* Right Content - Anime Car */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661770114976-76657acfd2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKRE0lMjBjYXIlMjBhbmltZSUyMHN0eWxlfGVufDF8fHx8MTc1Nzg0NTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="JDM Anime Style Car"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl sm:rounded-3xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}