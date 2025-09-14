import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Camera, Sparkles, ZoomIn } from "lucide-react";
import { useState } from "react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1748715512600-b24785bf419a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBkZXRhaWwlMjB3b3JrfGVufDF8fHx8MTc1Nzg0NTYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Sports Car Detail Work",
      category: "PPF Installation",
      description: "Professional paint protection film application"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571402234921-e56d165a3ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwZGV0YWlsaW5nJTIwc2VydmljZXxlbnwxfHx8fDE3NTc4NDU2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Premium Detailing Service",
      category: "Full Detail",
      description: "Complete wash and detailing service"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1708805283092-02a62c9ae48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTc4NDU2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Luxury Car Cleaning",
      category: "Ceramic Coating",
      description: "High-end ceramic coating application"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1706818578818-1ea672a60aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RpZmllZCUyMEpETSUyMGNhcnxlbnwxfHx8fDE3NTc4NDU2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Modified JDM Car",
      category: "Paint Correction",
      description: "JDM car paint correction and enhancement"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1714435821848-a845ef9d4f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmNhciUyMHBhaW50JTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NTc4NDU2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Supercar Paint Protection",
      category: "PPF Installation",
      description: "Premium supercar protection services"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1560024121-1cedc00627b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwY2FyJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzU3ODQ1NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Classic Car Restoration",
      category: "Restoration",
      description: "Classic car restoration and detailing"
    }
  ];

  const categories = ["All", "PPF Installation", "Full Detail", "Ceramic Coating", "Paint Correction", "Restoration"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Camera className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Our Work</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Witness the transformation! See how we bring anime-level perfection to every vehicle we service.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent"
                  : "border-gray-700 text-gray-400 hover:border-purple-500/50 hover:text-purple-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm rounded-full">
                  <span className="text-white text-sm font-medium">{image.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-gray-900/50">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors">
                  {image.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Cars Detailed" },
            { number: "50+", label: "PPF Installs" },
            { number: "4.9/5", label: "Rating" },
            { number: "2-Week", label: "Turnaround" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center border border-purple-500/30 group-hover:border-purple-400 transition-colors">
                  <Sparkles className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl">
            <ImageWithFallback
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}