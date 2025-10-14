"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Search, Users, Award, Calendar, TrendingUp, Mail, Globe, Instagram, Linkedin, Github, Star, UserPlus, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function ClubsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [joinedClubs, setJoinedClubs] = useState([1, 4, 7]);

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

  const categories = ['all', 'technical', 'cultural', 'sports', 'arts', 'social', 'academic', 'entrepreneurship'];
  const types = ['all', 'student-run', 'faculty-led', 'professional'];

  const clubs = [
    {
      id: 1,
      name: 'Coding Club',
      tagline: 'Code. Create. Compete.',
      description: 'A community of passionate programmers working on exciting projects, participating in hackathons, and hosting coding workshops.',
      category: 'technical',
      type: 'student-run',
      members: 342,
      founded: '2018',
      rating: 4.8,
      achievements: ['Won 5 Hackathons', 'Published 20+ Open Source Projects', '100+ Workshop Attendees'],
      upcomingEvents: 3,
      president: 'Rahul Kumar',
      vicePresident: 'Priya Singh',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      logo: '💻',
      color: 'from-blue-500 to-cyan-500',
      social: {
        website: '#',
        instagram: '#',
        linkedin: '#',
        github: '#'
      },
      featured: true
    },
    {
      id: 2,
      name: 'Robotics & AI Club',
      tagline: 'Building the Future',
      description: 'Explore robotics, artificial intelligence, and automation through hands-on projects and competitions.',
      category: 'technical',
      type: 'student-run',
      members: 267,
      founded: '2019',
      rating: 4.7,
      achievements: ['National Robotics Winner', 'AI Research Publications', 'Smart Campus Projects'],
      upcomingEvents: 2,
      president: 'Amit Sharma',
      vicePresident: 'Sneha Reddy',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
      logo: '🤖',
      color: 'from-purple-500 to-pink-500',
      social: {
        website: '#',
        instagram: '#',
        linkedin: '#'
      },
      featured: true
    },
    {
      id: 3,
      name: 'Drama Society',
      tagline: 'Where Stories Come Alive',
      description: 'Bringing theatrical excellence to campus through plays, street performances, and workshops.',
      category: 'cultural',
      type: 'student-run',
      members: 189,
      founded: '2015',
      rating: 4.9,
      achievements: ['Best Play Award 2023', '15 Annual Productions', 'Inter-College Champions'],
      upcomingEvents: 4,
      president: 'Ananya Gupta',
      vicePresident: 'Karan Desai',
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800',
      logo: '🎭',
      color: 'from-pink-500 to-rose-500',
      social: {
        website: '#',
        instagram: '#',
        linkedin: '#'
      },
      featured: false
    },
    {
      id: 4,
      name: 'Photography Club',
      tagline: 'Capturing Moments, Creating Memories',
      description: 'A community of photographers learning, sharing, and showcasing visual storytelling.',
      category: 'arts',
      type: 'student-run',
      members: 298,
      founded: '2017',
      rating: 4.6,
      achievements: ['500+ Photo Exhibitions', 'Professional Collaborations', 'Photography Workshops'],
      upcomingEvents: 2,
      president: 'Vikram Patel',
      vicePresident: 'Divya Menon',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
      logo: '📷',
      color: 'from-indigo-500 to-purple-500',
      social: {
        website: '#',
        instagram: '#'
      },
      featured: false
    },
    {
      id: 5,
      name: 'Entrepreneurship Cell',
      tagline: 'Innovate. Incubate. Inspire.',
      description: 'Fostering entrepreneurial spirit through startup mentorship, pitch competitions, and networking events.',
      category: 'entrepreneurship',
      type: 'student-run',
      members: 412,
      founded: '2016',
      rating: 4.8,
      achievements: ['10 Successful Startups', '₹50L+ Funding Raised', 'Industry Partnerships'],
      upcomingEvents: 5,
      president: 'Neha Kapoor',
      vicePresident: 'Sanjay Verma',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
      logo: '🚀',
      color: 'from-orange-500 to-red-500',
      social: {
        website: '#',
        instagram: '#',
        linkedin: '#'
      },
      featured: true
    },
    {
      id: 6,
      name: 'Music Society',
      tagline: 'Where Melodies Meet Passion',
      description: 'Celebrating music through live performances, jam sessions, and music production workshops.',
      category: 'cultural',
      type: 'student-run',
      members: 234,
      founded: '2014',
      rating: 4.7,
      achievements: ['50+ Live Concerts', 'Original Album Release', 'Music Fest Winners'],
      upcomingEvents: 3,
      president: 'Rohan Mehta',
      vicePresident: 'Kavya Iyer',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800',
      logo: '🎵',
      color: 'from-cyan-500 to-blue-500',
      social: {
        website: '#',
        instagram: '#'
      },
      featured: false
    },
    {
      id: 7,
      name: 'Environmental Club',
      tagline: 'Green Today, Sustainable Tomorrow',
      description: 'Working towards environmental sustainability through awareness campaigns and green initiatives.',
      category: 'social',
      type: 'student-run',
      members: 187,
      founded: '2019',
      rating: 4.5,
      achievements: ['5000+ Trees Planted', 'Zero Waste Drives', 'Sustainability Awards'],
      upcomingEvents: 2,
      president: 'Meera Nair',
      vicePresident: 'Aditya Rao',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      logo: '🌱',
      color: 'from-green-500 to-emerald-500',
      social: {
        website: '#',
        instagram: '#'
      },
      featured: false
    },
    {
      id: 8,
      name: 'Design & Innovation Lab',
      tagline: 'Design Thinking, Creative Solutions',
      description: 'Exploring UI/UX design, product innovation, and creative problem-solving methodologies.',
      category: 'technical',
      type: 'faculty-led',
      members: 156,
      founded: '2020',
      rating: 4.9,
      achievements: ['Award-Winning Designs', 'Industry Projects', 'Design Hackathons'],
      upcomingEvents: 4,
      president: 'Pooja Agarwal',
      vicePresident: 'Harsh Patel',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      logo: '🎨',
      color: 'from-red-500 to-pink-500',
      social: {
        website: '#',
        instagram: '#',
        linkedin: '#'
      },
      featured: false
    },
    {
      id: 9,
      name: 'Sports Committee',
      tagline: 'Teamwork Makes the Dream Work',
      description: 'Organizing sports events, tournaments, and promoting fitness across all disciplines.',
      category: 'sports',
      type: 'student-run',
      members: 523,
      founded: '2013',
      rating: 4.6,
      achievements: ['15 Tournament Wins', 'State Champions', 'Fitness Programs'],
      upcomingEvents: 6,
      president: 'Arjun Nair',
      vicePresident: 'Tanvi Kulkarni',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
      logo: '⚽',
      color: 'from-yellow-500 to-orange-500',
      social: {
        website: '#',
        instagram: '#'
      },
      featured: false
    },
    {
      id: 10,
      name: 'Literary Society',
      tagline: 'Words That Inspire',
      description: 'Celebrating literature through poetry, debates, book clubs, and creative writing workshops.',
      category: 'cultural',
      type: 'student-run',
      members: 145,
      founded: '2016',
      rating: 4.8,
      achievements: ['Published Anthology', 'Debate Championships', 'Poetry Slams'],
      upcomingEvents: 3,
      president: 'Riya Joshi',
      vicePresident: 'Mohit Sharma',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      logo: '📚',
      color: 'from-amber-500 to-yellow-500',
      social: {
        website: '#',
        instagram: '#'
      },
      featured: false
    },
    {
      id: 11,
      name: 'Data Science Club',
      tagline: 'Transforming Data into Insights',
      description: 'Exploring data analytics, machine learning, and big data through projects and competitions.',
      category: 'technical',
      type: 'student-run',
      members: 278,
      founded: '2020',
      rating: 4.7,
      achievements: ['Kaggle Competitions', 'Industry Projects', 'Data Workshops'],
      upcomingEvents: 2,
      president: 'Vikram Singh',
      vicePresident: 'Kavya Iyer',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      logo: '📊',
      color: 'from-violet-500 to-purple-500',
      social: {
        website: '#',
        linkedin: '#',
        github: '#'
      },
      featured: true
    },
    {
      id: 12,
      name: 'Dance Crew',
      tagline: 'Move to the Rhythm',
      description: 'Showcasing diverse dance styles through performances, competitions, and workshops.',
      category: 'cultural',
      type: 'student-run',
      members: 312,
      founded: '2015',
      rating: 4.9,
      achievements: ['National Dance Winners', '100+ Performances', 'International Tours'],
      upcomingEvents: 4,
      president: 'Priya Singh',
      vicePresident: 'Karan Desai',
      image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800',
      logo: '💃',
      color: 'from-fuchsia-500 to-pink-500',
      social: {
        website: '#',
        instagram: '#'
      },
      featured: false
    }
  ];

  const toggleJoin = (clubId) => {
    setJoinedClubs(prev =>
      prev.includes(clubId)
        ? prev.filter(id => id !== clubId)
        : [...prev, clubId]
    );
  };

  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         club.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory;
    const matchesType = selectedType === 'all' || club.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredClubs = filteredClubs.filter(c => c.featured);
  const regularClubs = filteredClubs.filter(c => !c.featured);

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
              <a href="/events" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Events</a>
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
              <a href="/events" className="block text-gray-300 hover:text-white transition-colors">Events</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
            <Users className="w-10 h-10" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light tracking-tight">
            Club
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Directory
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Explore and join clubs that match your interests and passions
          </p>

          <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {clubs.length}
              </div>
              <div className="text-sm text-gray-400">Active Clubs</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {clubs.reduce((sum, c) => sum + c.members, 0)}
              </div>
              <div className="text-sm text-gray-400">Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {joinedClubs.length}
              </div>
              <div className="text-sm text-gray-400">Your Clubs</div>
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
                placeholder="Search clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50 appearance-none cursor-pointer"
              >
                <option value="all" className="bg-black">All Categories</option>
                {categories.slice(1).map(cat => (
                  <option key={cat} value={cat} className="bg-black">
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50 appearance-none cursor-pointer"
              >
                <option value="all" className="bg-black">All Types</option>
                {types.slice(1).map(type => (
                  <option key={type} value={type} className="bg-black">
                    {type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Clubs */}
      {featuredClubs.length > 0 && (
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-violet-400" />
            <h2 className="text-3xl font-light">Featured Clubs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredClubs.map((club) => (
              <div
                key={club.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="text-4xl">{club.logo}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {club.rating}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${club.color} rounded-full text-xs font-medium border border-white/20`}>
                      {club.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-light text-white group-hover:text-violet-300 transition-colors mb-1">
                      {club.name}
                    </h3>
                    <p className="text-sm text-violet-400 italic">{club.tagline}</p>
                  </div>
                  
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                    {club.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4 text-violet-400" />
                      <span>{club.members} members</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4 text-violet-400" />
                      <span>{club.upcomingEvents} events</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs text-gray-500 mb-1">President</p>
                    <p className="text-sm text-gray-300">{club.president}</p>
                  </div>

                  <div className="flex gap-2">
                    {club.social.website && <a href={club.social.website} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"><Globe className="w-4 h-4" /></a>}
                    {club.social.instagram && <a href={club.social.instagram} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"><Instagram className="w-4 h-4" /></a>}
                    {club.social.linkedin && <a href={club.social.linkedin} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"><Linkedin className="w-4 h-4" /></a>}
                    {club.social.github && <a href={club.social.github} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"><Github className="w-4 h-4" /></a>}
                  </div>

                  {joinedClubs.includes(club.id) ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleJoin(club.id)}
                        className="w-full bg-green-500/10 text-green-400 py-3 rounded-xl font-medium hover:bg-green-500/20 transition flex items-center justify-center gap-2 border border-green-500/20"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Member
                      </button>
                      <a
                        href={`/clubs/${club.id}`}
                        className="block w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-center py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-violet-500/25 transition"
                      >
                        View Details
                      </a>
                    </div>
                  ) : (
                    <button
                      onClick={() => toggleJoin(club.id)}
                      className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white transition flex items-center justify-center gap-2"
                    >
                      <UserPlus className="w-4 h-4" />
                      Join Club
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Clubs */}
      <div className="relative max-w-7xl mx-auto px-6 pb-16">
        {featuredClubs.length > 0 && (
          <h2 className="text-3xl font-light mb-8">All Clubs</h2>
        )}
        
        <div className="mb-8">
          <p className="text-gray-400 font-light">
            Showing <span className="text-white font-medium">{filteredClubs.length}</span> clubs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularClubs.map((club) => (
            <div
              key={club.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4 text-3xl">{club.logo}</div>
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {club.rating}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-2.5 py-1 bg-gradient-to-r ${club.color} rounded-full text-xs font-medium`}>
                    {club.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-lg font-light text-white group-hover:text-violet-300 transition-colors mb-1">
                    {club.name}
                  </h3>
                  <p className="text-xs text-violet-400 italic">{club.tagline}</p>
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {club.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-violet-400" />
                    <span>{club.members}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-violet-400" />
                    <span>{club.upcomingEvents} events</span>
                  </div>
                  <div className="px-2 py-1 bg-white/5 rounded text-xs">
                    {club.type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-gray-500 mb-1">President</p>
                  <p className="text-sm text-gray-300">{club.president}</p>
                </div>

                <div className="flex gap-2">
                  {club.social.website && <a href={club.social.website} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"><Globe className="w-3 h-3" /></a>}
                  {club.social.instagram && <a href={club.social.instagram} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"><Instagram className="w-3 h-3" /></a>}
                  {club.social.linkedin && <a href={club.social.linkedin} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"><Linkedin className="w-3 h-3" /></a>}
                  {club.social.github && <a href={club.social.github} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"><Github className="w-3 h-3" /></a>}
                </div>

                {joinedClubs.includes(club.id) ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleJoin(club.id)}
                      className="w-full bg-green-500/10 text-green-400 py-2.5 rounded-xl font-medium hover:bg-green-500/20 transition flex items-center justify-center gap-2 border border-green-500/20 text-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Member
                    </button>
                    <a
                      href={`/clubs/${club.id}`}
                      className="block w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-center py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-violet-500/25 transition text-sm"
                    >
                      View Details
                    </a>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleJoin(club.id)}
                    className="w-full bg-white text-black py-2.5 rounded-xl font-medium hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white transition flex items-center justify-center gap-2 text-sm"
                  >
                    <UserPlus className="w-4 h-4" />
                    Join Club
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-white/5 rounded-full mx-auto flex items-center justify-center mb-6">
              <Search className="w-10 h-10 text-gray-500" />
            </div>
            <h3 className="text-2xl font-light text-gray-400 mb-2">No clubs found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">CC</span>
                </div>
                <span className="text-lg font-light">Campus Connect</span>
              </div>
              <p className="text-sm text-gray-400 font-light">
                Connecting students through clubs, projects, and communities.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/clubs" className="hover:text-white transition">Clubs</a></li>
                <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
                <li><a href="/events" className="hover:text-white transition">Events</a></li>
                <li><a href="/communities" className="hover:text-white transition">Communities</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/guidelines" className="hover:text-white transition">Guidelines</a></li>
                <li><a href="/support" className="hover:text-white transition">Support</a></li>
                <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Campus Connect. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}