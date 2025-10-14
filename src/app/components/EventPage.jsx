"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Search, Calendar, MapPin, Clock, Users, Tag, Star, Bookmark, Bell, ArrowRight, Sparkles } from 'lucide-react';

export default function EventsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');
  const [registeredEvents, setRegisteredEvents] = useState([1, 3, 7]);

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

  const categories = ['all', 'technical', 'cultural', 'sports', 'workshop', 'seminar', 'competition', 'social'];
  const timeFilters = ['all', 'today', 'this-week', 'this-month', 'upcoming'];

  const events = [
    {
      id: 1,
      title: 'TechFest 2024 - Innovation Summit',
      description: 'Annual technical festival featuring hackathons, coding competitions, tech talks, and project exhibitions.',
      category: 'technical',
      date: '2024-03-20',
      time: '09:00 AM',
      duration: '3 days',
      venue: 'Main Auditorium',
      organizer: 'Tech Club',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      participants: 450,
      maxCapacity: 500,
      tags: ['Hackathon', 'Innovation', 'Tech'],
      prize: '₹1,00,000',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop',
      description: 'Hands-on workshop covering deep learning, neural networks, and practical AI applications.',
      category: 'workshop',
      date: '2024-03-18',
      time: '02:00 PM',
      duration: '4 hours',
      venue: 'Computer Lab A',
      organizer: 'AI Club',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
      participants: 85,
      maxCapacity: 100,
      tags: ['AI', 'ML', 'Hands-on'],
      prize: 'Certificate',
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Cultural Night - Symphony',
      description: 'An evening of music, dance, and drama performances showcasing student talent and creativity.',
      category: 'cultural',
      date: '2024-03-22',
      time: '06:00 PM',
      duration: '3 hours',
      venue: 'Open Air Theatre',
      organizer: 'Cultural Committee',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      participants: 320,
      maxCapacity: 500,
      tags: ['Music', 'Dance', 'Performance'],
      prize: 'N/A',
      featured: true,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 4,
      title: 'Inter-College Cricket Tournament',
      description: 'Competitive cricket tournament with teams from various colleges across the region.',
      category: 'sports',
      date: '2024-03-25',
      time: '08:00 AM',
      duration: '5 days',
      venue: 'Sports Ground',
      organizer: 'Sports Department',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800',
      participants: 180,
      maxCapacity: 200,
      tags: ['Cricket', 'Tournament', 'Sports'],
      prize: '₹50,000',
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Startup Pitch Competition',
      description: 'Present your startup ideas to investors and industry experts. Win funding and mentorship.',
      category: 'competition',
      date: '2024-03-19',
      time: '10:00 AM',
      duration: '6 hours',
      venue: 'Conference Hall',
      organizer: 'E-Cell',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
      participants: 65,
      maxCapacity: 80,
      tags: ['Startup', 'Pitch', 'Business'],
      prize: '₹2,00,000',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      title: 'Photography Exhibition & Contest',
      description: 'Showcase your photography skills and compete for the best photo award across multiple categories.',
      category: 'competition',
      date: '2024-03-21',
      time: '11:00 AM',
      duration: '2 days',
      venue: 'Art Gallery',
      organizer: 'Photography Club',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
      participants: 120,
      maxCapacity: 150,
      tags: ['Photography', 'Art', 'Contest'],
      prize: '₹25,000',
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 7,
      title: 'Web Development Bootcamp',
      description: 'Intensive 2-day bootcamp covering full-stack web development with React, Node.js, and MongoDB.',
      category: 'workshop',
      date: '2024-03-23',
      time: '09:00 AM',
      duration: '2 days',
      venue: 'Computer Center',
      organizer: 'Coding Club',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
      participants: 95,
      maxCapacity: 100,
      tags: ['Web Dev', 'Coding', 'MERN'],
      prize: 'Certificate',
      featured: false,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 8,
      title: 'Career Guidance Seminar',
      description: 'Industry experts share insights on career paths, placement preparation, and skill development.',
      category: 'seminar',
      date: '2024-03-17',
      time: '03:00 PM',
      duration: '2 hours',
      venue: 'Seminar Hall',
      organizer: 'Placement Cell',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      participants: 280,
      maxCapacity: 300,
      tags: ['Career', 'Guidance', 'Professional'],
      prize: 'N/A',
      featured: false,
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 9,
      title: 'Green Campus Initiative Drive',
      description: 'Join us in planting trees, cleaning drives, and environmental awareness activities.',
      category: 'social',
      date: '2024-03-24',
      time: '07:00 AM',
      duration: '4 hours',
      venue: 'Campus Grounds',
      organizer: 'Environmental Club',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      participants: 150,
      maxCapacity: 200,
      tags: ['Environment', 'Social', 'Green'],
      prize: 'N/A',
      featured: false,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 10,
      title: 'Dance Battle Championship',
      description: 'Show off your dance moves in this electrifying solo and group dance competition.',
      category: 'cultural',
      date: '2024-03-26',
      time: '05:00 PM',
      duration: '3 hours',
      venue: 'Main Stage',
      organizer: 'Dance Society',
      image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800',
      participants: 210,
      maxCapacity: 250,
      tags: ['Dance', 'Competition', 'Performance'],
      prize: '₹30,000',
      featured: false,
      color: 'from-fuchsia-500 to-pink-500'
    },
    {
      id: 11,
      title: 'Blockchain & Crypto Summit',
      description: 'Explore the world of blockchain, cryptocurrencies, and decentralized applications.',
      category: 'seminar',
      date: '2024-03-27',
      time: '11:00 AM',
      duration: '5 hours',
      venue: 'Auditorium B',
      organizer: 'Blockchain Club',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      participants: 175,
      maxCapacity: 200,
      tags: ['Blockchain', 'Crypto', 'Web3'],
      prize: 'N/A',
      featured: true,
      color: 'from-slate-500 to-gray-500'
    },
    {
      id: 12,
      title: 'Gaming Tournament - BGMI',
      description: 'Battle royale gaming tournament with exciting prizes and live streaming.',
      category: 'sports',
      date: '2024-03-28',
      time: '02:00 PM',
      duration: '6 hours',
      venue: 'Gaming Arena',
      organizer: 'E-Sports Club',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
      participants: 128,
      maxCapacity: 128,
      tags: ['Gaming', 'E-Sports', 'BGMI'],
      prize: '₹75,000',
      featured: false,
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const toggleRegister = (eventId) => {
    setRegisteredEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredEvents = filteredEvents.filter(e => e.featured);
  const regularEvents = filteredEvents.filter(e => !e.featured);

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
              <a href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Gallery</a>
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
              <a href="/gallery" className="block text-gray-300 hover:text-white transition-colors">Gallery</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
            <Calendar className="w-10 h-10" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light tracking-tight">
            Events &
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Activities
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Discover exciting campus events, workshops, and competitions
          </p>

          <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {events.length}
              </div>
              <div className="text-sm text-gray-400">Events</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {events.reduce((sum, e) => sum + e.participants, 0)}
              </div>
              <div className="text-sm text-gray-400">Participants</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {registeredEvents.length}
              </div>
              <div className="text-sm text-gray-400">Registered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Tag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full sm:w-auto pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50 appearance-none cursor-pointer"
                >
                  <option value="all" className="bg-black">All Categories</option>
                  {categories.slice(1).map(cat => (
                    <option key={cat} value={cat} className="bg-black">
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50 appearance-none cursor-pointer"
              >
                <option value="all" className="bg-black">All Time</option>
                <option value="today" className="bg-black">Today</option>
                <option value="this-week" className="bg-black">This Week</option>
                <option value="this-month" className="bg-black">This Month</option>
                <option value="upcoming" className="bg-black">Upcoming</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-violet-400" />
            <h2 className="text-3xl font-light">Featured Events</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 bg-gradient-to-r ${event.color} rounded-full text-xs font-medium border border-white/20`}>
                        {event.category.toUpperCase()}
                      </span>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        FEATURED
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-light text-white group-hover:text-violet-300 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4 text-violet-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4 text-violet-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4 text-violet-400" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4 text-violet-400" />
                      <span>{event.participants}/{event.maxCapacity}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white/5 text-gray-300 rounded-lg text-xs border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {registeredEvents.includes(event.id) ? (
                    <button
                      onClick={() => toggleRegister(event.id)}
                      className="w-full bg-green-500/10 text-green-400 py-3 rounded-xl font-medium hover:bg-green-500/20 transition flex items-center justify-center gap-2 border border-green-500/20"
                    >
                      <Bell className="w-4 h-4" />
                      Registered
                    </button>
                  ) : (
                    <button
                      onClick={() => toggleRegister(event.id)}
                      className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white transition flex items-center justify-center gap-2"
                    >
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Events */}
      <div className="relative max-w-7xl mx-auto px-6 pb-16">
        {featuredEvents.length > 0 && (
          <h2 className="text-3xl font-light mb-8">All Events</h2>
        )}
        
        <div className="mb-8">
          <p className="text-gray-400 font-light">
            Showing <span className="text-white font-medium">{filteredEvents.length}</span> events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularEvents.map((event) => (
            <div
              key={event.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${event.color} rounded-full text-xs font-medium border border-white/20`}>
                    {event.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-light text-white group-hover:text-violet-300 transition-colors line-clamp-1">
                  {event.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-violet-400" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-violet-400" />
                    <span>{event.participants}/{event.maxCapacity} participants</span>
                  </div>
                </div>

                {registeredEvents.includes(event.id) ? (
                  <button
                    onClick={() => toggleRegister(event.id)}
                    className="w-full bg-green-500/10 text-green-400 py-2.5 rounded-xl text-sm font-medium hover:bg-green-500/20 transition flex items-center justify-center gap-2 border border-green-500/20"
                  >
                    <Bell className="w-4 h-4" />
                    Registered
                  </button>
                ) : (
                  <button
                    onClick={() => toggleRegister(event.id)}
                    className="w-full bg-white text-black py-2.5 rounded-xl text-sm font-medium hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white transition"
                  >
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/10">
              <Calendar className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-light text-white mb-3">No events found</h3>
            <p className="text-gray-400 font-light">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

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