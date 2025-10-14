"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Search, Filter, FolderKanban, Users, Heart, Eye, ExternalLink, Github, Calendar, Tag, Star, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [likedProjects, setLikedProjects] = useState([]);

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

  const categories = ['all', 'web-dev', 'mobile-app', 'ai-ml', 'iot', 'blockchain', 'game-dev', 'data-science'];
  const techStack = ['all', 'react', 'python', 'nodejs', 'flutter', 'tensorflow', 'arduino', 'django'];

  const projects = [
    {
      id: 1,
      title: 'Smart Campus Navigation System',
      description: 'An AI-powered indoor navigation app that helps students find classrooms, labs, and facilities using AR technology.',
      category: 'mobile-app',
      techStack: ['flutter', 'firebase', 'tensorflow'],
      author: 'Rahul Sharma',
      authorImage: 'https://i.pravatar.cc/150?img=12',
      department: 'Computer Science',
      year: '3rd Year',
      likes: 124,
      views: 450,
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      githubUrl: '#',
      liveUrl: '#',
      tags: ['AR', 'Navigation', 'Mobile']
    },
    {
      id: 2,
      title: 'EcoTrack - Carbon Footprint Tracker',
      description: 'Web application to track and analyze personal carbon emissions with AI-powered recommendations for sustainable living.',
      category: 'web-dev',
      techStack: ['react', 'nodejs', 'mongodb'],
      author: 'Priya Patel',
      authorImage: 'https://i.pravatar.cc/150?img=5',
      department: 'Information Technology',
      year: '4th Year',
      likes: 98,
      views: 380,
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
      githubUrl: '#',
      liveUrl: '#',
      tags: ['Sustainability', 'Analytics', 'Web']
    },
    {
      id: 3,
      title: 'MediBot - Healthcare Assistant',
      description: 'AI chatbot for preliminary medical diagnosis and health advice using natural language processing.',
      category: 'ai-ml',
      techStack: ['python', 'tensorflow', 'flask'],
      author: 'Amit Kumar',
      authorImage: 'https://i.pravatar.cc/150?img=33',
      department: 'Artificial Intelligence',
      year: '3rd Year',
      likes: 156,
      views: 520,
      date: '2024-03-08',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      githubUrl: '#',
      liveUrl: '#',
      tags: ['Healthcare', 'NLP', 'Chatbot']
    },
    {
      id: 4,
      title: 'Smart Home Automation',
      description: 'IoT-based home automation system with voice control, motion sensors, and energy monitoring.',
      category: 'iot',
      techStack: ['arduino', 'raspberry-pi', 'mqtt'],
      author: 'Sneha Reddy',
      authorImage: 'https://i.pravatar.cc/150?img=9',
      department: 'Electronics',
      year: '4th Year',
      likes: 142,
      views: 490,
      date: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
      githubUrl: '#',
      liveUrl: '#',
      tags: ['IoT', 'Automation', 'Smart Home']
    },
    {
      id: 5,
      title: 'CryptoWallet - Blockchain Payment',
      description: 'Decentralized cryptocurrency wallet with multi-chain support and secure transaction management.',
      category: 'blockchain',
      techStack: ['solidity', 'web3js', 'react'],
      author: 'Vikram Singh',
      authorImage: 'https://i.pravatar.cc/150?img=15',
      department: 'Computer Science',
      year: '4th Year',
      likes: 187,
      views: 620,
      date: '2024-03-01',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      githubUrl: '#',
      liveUrl: '#',
      tags: ['Blockchain', 'Crypto', 'DeFi']
    },
    {
      id: 6,
      title: 'RetroRun - 2D Platformer Game',
      description: 'A nostalgic pixel-art platformer game with challenging levels and retro sound effects.',
      category: 'game-dev',
      techStack: ['unity', 'csharp'],
      author: 'Ananya Gupta',
      authorImage: 'https://i.pravatar.cc/150?img=23',
      department: 'Game Design',
      year: '2nd Year',
      likes: 203,
      views: 780,
      date: '2024-02-28',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      githubUrl: '#',
      liveUrl: '#',
      tags: ['Gaming', '2D', 'Unity']
    },
    {
      id: 7,
      title: 'StudySync - Collaborative Learning',
      description: 'Platform for students to create study groups, share notes, and collaborate on assignments in real-time.',
      category: 'web-dev',
      techStack: ['react', 'nodejs', 'socket.io'],
      author: 'Rohan Mehta',
      authorImage: 'https://i.pravatar.cc/150?img=68',
      department: 'Information Technology',
      year: '3rd Year',
      likes: 167,
      views: 550,
      date: '2024-02-25',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      githubUrl: '#',
      liveUrl: '#',
      tags: ['Education', 'Collaboration', 'Real-time']
    },
    {
      id: 8,
      title: 'SentimentScope - Social Media Analytics',
      description: 'ML-powered tool to analyze sentiment trends across social media platforms with visual insights.',
      category: 'data-science',
      techStack: ['python', 'pandas', 'matplotlib'],
      author: 'Kavya Iyer',
      authorImage: 'https://i.pravatar.cc/150?img=44',
      department: 'Data Science',
      year: '4th Year',
      likes: 134,
      views: 470,
      date: '2024-02-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      githubUrl: '#',
      liveUrl: '#',
      tags: ['Analytics', 'ML', 'Visualization']
    },
    {
      id: 9,
      title: 'FitTrack - Fitness Companion',
      description: 'Mobile app for workout tracking, meal planning, and fitness goal management with AI coaching.',
      category: 'mobile-app',
      techStack: ['flutter', 'firebase', 'ml-kit'],
      author: 'Arjun Nair',
      authorImage: 'https://i.pravatar.cc/150?img=52',
      department: 'Computer Science',
      year: '3rd Year',
      likes: 189,
      views: 640,
      date: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
      githubUrl: '#',
      liveUrl: '#',
      tags: ['Fitness', 'Health', 'AI']
    }
  ];

  const toggleLike = (projectId) => {
    setLikedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const filteredProjects = projects
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesTech = selectedTech === 'all' || project.techStack.includes(selectedTech);
      return matchesSearch && matchesCategory && matchesTech;
    })
    .sort((a, b) => {
      if (sortBy === 'recent') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'popular') return b.likes - a.likes;
      if (sortBy === 'views') return b.views - a.views;
      return 0;
    });

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
              <a href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Gallery</a>
              <a href="/communities" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Communities</a>
              <a href="/projects/new" className="group relative px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium overflow-hidden">
                <span className="relative z-10">Submit Project</span>
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
              <a href="/gallery" className="block text-gray-300 hover:text-white transition-colors">Gallery</a>
              <a href="/communities" className="block text-gray-300 hover:text-white transition-colors">Communities</a>
              <a href="/projects/new" className="block w-full text-center bg-white text-black px-6 py-3 rounded-full font-medium">
                Submit Project
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
            <FolderKanban className="w-10 h-10" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light tracking-tight">
            Project
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Discover innovative projects built by talented students
          </p>

          <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {projects.length}+
              </div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-gray-400">Contributors</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-gray-400">Technologies</div>
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
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full sm:w-auto pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50 appearance-none cursor-pointer"
                >
                  <option value="all" className="bg-black">All Categories</option>
                  {categories.slice(1).map(cat => (
                    <option key={cat} value={cat} className="bg-black">
                      {cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Tag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="w-full sm:w-auto pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50 appearance-none cursor-pointer"
                >
                  <option value="all" className="bg-black">All Technologies</option>
                  {techStack.slice(1).map(tech => (
                    <option key={tech} value={tech} className="bg-black">
                      {tech.charAt(0).toUpperCase() + tech.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50 appearance-none cursor-pointer"
              >
                <option value="recent" className="bg-black">Most Recent</option>
                <option value="popular" className="bg-black">Most Popular</option>
                <option value="views" className="bg-black">Most Viewed</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <p className="text-gray-400 font-light">
            Showing <span className="text-white font-medium">{filteredProjects.length}</span> projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => toggleLike(project.id)}
                  className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-sm transition-all ${
                    likedProjects.includes(project.id)
                      ? 'bg-red-500 text-white scale-110'
                      : 'bg-white/10 text-white hover:bg-red-500 hover:scale-110'
                  }`}
                >
                  <Heart className="w-5 h-5" fill={likedProjects.includes(project.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs font-medium border border-violet-500/30">
                    {project.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                  {project.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white/5 text-gray-300 rounded-full text-xs border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-light text-white group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-300 rounded-lg text-xs border border-violet-500/20"
                    >
                      {tech.charAt(0).toUpperCase() + tech.slice(1)}
                    </span>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={project.authorImage}
                    alt={project.author}
                    className="w-10 h-10 rounded-full border-2 border-white/10"
                  />
                  <div>
                    <p className="font-medium text-white text-sm">{project.author}</p>
                    <p className="text-xs text-gray-400">{project.department} • {project.year}</p>
                  </div>
                </div>

                {/* Stats and Actions */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4" />
                      <span>{project.views}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      title="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2 text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 rounded-lg transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* View Details Button */}
                <a
                  href={`/projects/${project.id}`}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white transition-all"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/10">
              <FolderKanban className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-light text-white mb-3">No projects found</h3>
            <p className="text-gray-400 mb-8 font-light">Try adjusting your search or filter criteria</p>
            <a
              href="/projects/new"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white transition-all"
            >
              <span>Submit Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
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