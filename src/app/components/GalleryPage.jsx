"use client"
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Search, Filter, Menu, Home, Image } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const categories = ['all', 'events', 'clubs', 'achievements', 'cultural', 'sports', 'workshops'];

  const galleryImages = [
    { id: 1, title: 'Annual Tech Fest 2024', category: 'events', date: 'March 15, 2024', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800' },
    { id: 2, title: 'Coding Club Hackathon', category: 'clubs', date: 'February 20, 2024', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800' },
    { id: 3, title: 'National Award Winners', category: 'achievements', date: 'January 10, 2024', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800' },
    { id: 4, title: 'Cultural Night Performance', category: 'cultural', date: 'March 5, 2024', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800' },
    { id: 5, title: 'Inter-College Sports Meet', category: 'sports', date: 'February 28, 2024', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800' },
    { id: 6, title: 'AI/ML Workshop', category: 'workshops', date: 'March 10, 2024', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800' },
    { id: 7, title: 'Freshers Welcome 2024', category: 'events', date: 'January 5, 2024', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800' },
    { id: 8, title: 'Robotics Club Exhibition', category: 'clubs', date: 'February 15, 2024', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800' },
    { id: 9, title: 'Best Project Award', category: 'achievements', date: 'March 1, 2024', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800' },
    { id: 10, title: 'Dance Competition Finals', category: 'cultural', date: 'February 25, 2024', image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800' },
    { id: 11, title: 'Cricket Tournament Victory', category: 'sports', date: 'March 8, 2024', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800' },
    { id: 12, title: 'Web Development Bootcamp', category: 'workshops', date: 'February 18, 2024', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800' },
  ];

  const filteredImages = galleryImages.filter(img => {
    const matchesCategory = selectedCategory === 'all' || img.category === selectedCategory;
    const matchesSearch = img.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-violet-500/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
            bottom: '10%',
            right: '10%'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <span className="text-xl font-light tracking-wide">Campus Connect</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-light flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="/dashboard" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Dashboard</a>
              <a href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Projects</a>
              <a href="/communities" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Communities</a>
              <a href="/signin" className="group relative px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium overflow-hidden">
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-6 space-y-4">
              <a href="/" className="block text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/dashboard" className="block text-gray-300 hover:text-white transition-colors">Dashboard</a>
              <a href="/projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="/communities" className="block text-gray-300 hover:text-white transition-colors">Communities</a>
              <a href="/signin" className="block w-full text-center bg-white text-black px-6 py-3 rounded-full font-medium">
                Sign In
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
            <Image className="w-10 h-10" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light tracking-tight">
            Campus
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Capturing memorable moments from our vibrant campus life
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition whitespace-nowrap text-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <p className="text-gray-400 font-light">
            Showing <span className="text-white font-medium">{filteredImages.length}</span> images
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-light text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{image.date}</p>
                  <span className="inline-block px-3 py-1 bg-violet-500/30 backdrop-blur-sm rounded-full text-xs border border-violet-500/50">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/10">
              <Image className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-light text-white mb-3">No images found</h3>
            <p className="text-gray-400 font-light">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/98 backdrop-blur-sm z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-white hover:bg-white/10 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 p-3 text-white hover:bg-white/10 rounded-full transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 p-3 text-white hover:bg-white/10 rounded-full transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-7xl max-h-screen p-8 flex flex-col items-center justify-center">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-8 text-center space-y-3">
              <h2 className="text-3xl font-light">{selectedImage.title}</h2>
              <p className="text-gray-400">{selectedImage.date}</p>
              <span className="inline-block px-4 py-2 bg-violet-500/20 backdrop-blur-sm rounded-full text-sm border border-violet-500/30">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">CC</span>
                </div>
                <span className="text-lg font-light">Campus Connect</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting students, one click at a time.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a></li>
                <li><a href="/communities" className="text-gray-400 hover:text-white transition-colors text-sm">Communities</a></li>
                <li><a href="/events" className="text-gray-400 hover:text-white transition-colors text-sm">Events</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/help" className="text-gray-400 hover:text-white transition-colors text-sm">Help Center</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 text-sm">&copy; 2025 Campus Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}