"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Search, Users, MessageCircle, Hash, Lock, Globe, Plus, CheckCircle, UserPlus } from 'lucide-react';

export default function CommunitiesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [joinedCommunities, setJoinedCommunities] = useState([1, 3, 5]);

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

  const categories = ['all', 'technology', 'academics', 'sports', 'arts', 'music', 'entrepreneurship', 'social'];
  const types = ['all', 'public', 'private'];

  const communities = [
    {
      id: 1,
      name: 'Web Development Hub',
      description: 'A community for web developers to share knowledge, projects, and collaborate on web technologies.',
      category: 'technology',
      type: 'public',
      members: 342,
      posts: 1250,
      icon: '🌐',
      color: 'from-blue-500 to-cyan-500',
      moderators: ['Rahul Kumar', 'Priya Singh'],
      tags: ['React', 'Node.js', 'JavaScript', 'Frontend'],
      activeNow: 45,
      createdAt: '2023-08-15'
    },
    {
      id: 2,
      name: 'AI & Machine Learning',
      description: 'Discuss AI, ML algorithms, research papers, and work on exciting machine learning projects together.',
      category: 'technology',
      type: 'public',
      members: 298,
      posts: 890,
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
      moderators: ['Amit Sharma'],
      tags: ['Python', 'TensorFlow', 'Deep Learning', 'NLP'],
      activeNow: 32,
      createdAt: '2023-09-01'
    },
    {
      id: 3,
      name: 'Competitive Programming',
      description: 'Practice coding problems, discuss algorithms, and prepare for coding competitions like ACM ICPC.',
      category: 'technology',
      type: 'public',
      members: 456,
      posts: 2100,
      icon: '💻',
      color: 'from-green-500 to-teal-500',
      moderators: ['Sneha Reddy', 'Vikram Patel'],
      tags: ['DSA', 'Algorithms', 'Codeforces', 'LeetCode'],
      activeNow: 78,
      createdAt: '2023-07-20'
    },
    {
      id: 4,
      name: 'Mathematics Study Group',
      description: 'Collaborative learning space for mathematics students. Share notes, solve problems, and help each other.',
      category: 'academics',
      type: 'public',
      members: 234,
      posts: 567,
      icon: '📐',
      color: 'from-orange-500 to-red-500',
      moderators: ['Kavya Iyer'],
      tags: ['Calculus', 'Linear Algebra', 'Statistics'],
      activeNow: 23,
      createdAt: '2023-08-10'
    },
    {
      id: 5,
      name: 'Cricket Enthusiasts',
      description: 'For cricket lovers! Discuss matches, organize practice sessions, and join inter-college tournaments.',
      category: 'sports',
      type: 'public',
      members: 512,
      posts: 1890,
      icon: '🏏',
      color: 'from-yellow-500 to-orange-500',
      moderators: ['Arjun Nair', 'Rohan Mehta'],
      tags: ['Cricket', 'Sports', 'Tournaments'],
      activeNow: 89,
      createdAt: '2023-06-05'
    },
    {
      id: 6,
      name: 'Photography Club',
      description: 'Share your photos, learn photography techniques, and participate in campus photography events.',
      category: 'arts',
      type: 'public',
      members: 387,
      posts: 1450,
      icon: '📷',
      color: 'from-indigo-500 to-purple-500',
      moderators: ['Ananya Gupta'],
      tags: ['Photography', 'Editing', 'Camera'],
      activeNow: 41,
      createdAt: '2023-07-12'
    },
    {
      id: 7,
      name: 'Music Production',
      description: 'For music producers, singers, and musicians. Share your tracks, collaborate, and learn music production.',
      category: 'music',
      type: 'public',
      members: 276,
      posts: 823,
      icon: '🎵',
      color: 'from-pink-500 to-rose-500',
      moderators: ['Karan Desai'],
      tags: ['Music', 'Production', 'Singing', 'Instruments'],
      activeNow: 28,
      createdAt: '2023-08-25'
    },
    {
      id: 8,
      name: 'Startup & Entrepreneurship',
      description: 'Network with aspiring entrepreneurs, discuss startup ideas, and learn about business and innovation.',
      category: 'entrepreneurship',
      type: 'public',
      members: 423,
      posts: 1120,
      icon: '🚀',
      color: 'from-cyan-500 to-blue-500',
      moderators: ['Neha Kapoor', 'Sanjay Verma'],
      tags: ['Startups', 'Business', 'Innovation'],
      activeNow: 56,
      createdAt: '2023-07-28'
    },
    {
      id: 9,
      name: 'Campus Events Planning',
      description: 'Plan and organize campus events, fests, and cultural activities. Open to all event enthusiasts!',
      category: 'social',
      type: 'private',
      members: 145,
      posts: 456,
      icon: '🎉',
      color: 'from-violet-500 to-purple-500',
      moderators: ['Riya Joshi'],
      tags: ['Events', 'Planning', 'Cultural'],
      activeNow: 15,
      createdAt: '2023-09-10'
    },
    {
      id: 10,
      name: 'Graphic Design Community',
      description: 'Share designs, get feedback, learn design tools like Figma, Photoshop, and Illustrator.',
      category: 'arts',
      type: 'public',
      members: 367,
      posts: 1340,
      icon: '🎨',
      color: 'from-red-500 to-pink-500',
      moderators: ['Pooja Agarwal'],
      tags: ['Design', 'UI/UX', 'Figma', 'Creative'],
      activeNow: 44,
      createdAt: '2023-08-05'
    },
    {
      id: 11,
      name: 'Fitness & Wellness',
      description: 'Share fitness tips, workout routines, nutrition advice, and motivate each other to stay healthy.',
      category: 'sports',
      type: 'public',
      members: 289,
      posts: 734,
      icon: '💪',
      color: 'from-emerald-500 to-green-500',
      moderators: ['Aditya Rao'],
      tags: ['Fitness', 'Health', 'Workout', 'Nutrition'],
      activeNow: 37,
      createdAt: '2023-09-15'
    },
    {
      id: 12,
      name: 'Book Club',
      description: 'For book lovers! Discuss books, share recommendations, and organize reading challenges.',
      category: 'social',
      type: 'public',
      members: 198,
      posts: 543,
      icon: '📚',
      color: 'from-amber-500 to-yellow-500',
      moderators: ['Divya Menon'],
      tags: ['Reading', 'Books', 'Literature'],
      activeNow: 19,
      createdAt: '2023-08-18'
    },
    {
      id: 13,
      name: 'Blockchain Developers',
      description: 'Learn and build with blockchain technology. Discuss Web3, smart contracts, and DApps.',
      category: 'technology',
      type: 'public',
      members: 267,
      posts: 678,
      icon: '⛓️',
      color: 'from-slate-500 to-gray-500',
      moderators: ['Harsh Patel'],
      tags: ['Blockchain', 'Web3', 'Solidity', 'Crypto'],
      activeNow: 31,
      createdAt: '2023-09-05'
    },
    {
      id: 14,
      name: 'Gaming Arena',
      description: 'Connect with fellow gamers, organize gaming sessions, and discuss the latest games and esports.',
      category: 'social',
      type: 'public',
      members: 534,
      posts: 2345,
      icon: '🎮',
      color: 'from-fuchsia-500 to-purple-500',
      moderators: ['Mohit Sharma', 'Tanvi Kulkarni'],
      tags: ['Gaming', 'Esports', 'Multiplayer'],
      activeNow: 95,
      createdAt: '2023-06-15'
    },
    {
      id: 15,
      name: 'Environmental Club',
      description: 'Discuss sustainability, organize eco-friendly initiatives, and work towards a greener campus.',
      category: 'social',
      type: 'public',
      members: 223,
      posts: 489,
      icon: '🌱',
      color: 'from-lime-500 to-green-500',
      moderators: ['Meera Nair'],
      tags: ['Environment', 'Sustainability', 'Green'],
      activeNow: 26,
      createdAt: '2023-07-30'
    }
  ];

  const toggleJoin = (communityId) => {
    setJoinedCommunities(prev =>
      prev.includes(communityId)
        ? prev.filter(id => id !== communityId)
        : [...prev, communityId]
    );
  };

  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || community.category === selectedCategory;
    const matchesType = selectedType === 'all' || community.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
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
              <a href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Projects</a>
              <a href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Gallery</a>
              <button className="group relative px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium overflow-hidden flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span className="relative z-10">Create Community</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
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
              <a href="/gallery" className="block text-gray-300 hover:text-white transition-colors">Gallery</a>
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
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Communities
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Connect with students who share your interests and passions
          </p>

          <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {communities.length}
              </div>
              <div className="text-sm text-gray-400">Communities</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {communities.reduce((sum, c) => sum + c.members, 0)}
              </div>
              <div className="text-sm text-gray-400">Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {communities.reduce((sum, c) => sum + c.activeNow, 0)}
              </div>
              <div className="text-sm text-gray-400">Active Now</div>
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
                placeholder="Search communities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Hash className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
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
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50 appearance-none cursor-pointer"
              >
                <option value="all" className="bg-black">All Types</option>
                <option value="public" className="bg-black">Public</option>
                <option value="private" className="bg-black">Private</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Communities Grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-gray-400 font-light">
            Showing <span className="text-white font-medium">{filteredCommunities.length}</span> communities
          </p>
          <div className="text-sm text-gray-400">
            You've joined <span className="text-violet-400 font-medium">{joinedCommunities.length}</span> communities
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((community) => (
            <div
              key={community.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300"
            >
              {/* Community Header */}
              <div className={`bg-gradient-to-r ${community.color} p-6 relative`}>
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2">{community.icon}</div>
                  <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                    {community.type === 'private' ? (
                      <Lock className="w-3 h-3 text-white" />
                    ) : (
                      <Globe className="w-3 h-3 text-white" />
                    )}
                    <span className="text-xs text-white font-medium capitalize">{community.type}</span>
                  </div>
                </div>
                <h3 className="text-xl font-light text-white mb-1">{community.name}</h3>
                <p className="text-white text-opacity-90 text-sm">
                  {community.category.charAt(0).toUpperCase() + community.category.slice(1)}
                </p>
              </div>

              {/* Community Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                  {community.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {community.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/5 text-gray-300 rounded-lg text-xs border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {community.tags.length > 3 && (
                    <span className="px-2.5 py-1 bg-white/5 text-gray-300 rounded-lg text-xs border border-white/10">
                      +{community.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      <span>{community.members}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4" />
                      <span>{community.posts}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-green-400 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>{community.activeNow}</span>
                  </div>
                </div>

                {/* Moderators */}
                <div className="pt-2">
                  <p className="text-xs text-gray-500 mb-1">Moderators</p>
                  <p className="text-sm text-gray-300">{community.moderators.join(', ')}</p>
                </div>

                {/* Action Button */}
                {joinedCommunities.includes(community.id) ? (
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => toggleJoin(community.id)}
                      className="w-full bg-green-500/10 text-green-400 py-3 rounded-xl font-medium hover:bg-green-500/20 transition flex items-center justify-center gap-2 border border-green-500/20"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Joined
                    </button>
                    <a
                      href={`/communities/${community.id}/chat`}
                      className="block w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-center py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-violet-500/25 transition"
                    >
                      Open Chat
                    </a>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleJoin(community.id)}
                    className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white transition flex items-center justify-center gap-2 mt-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    Join Community
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCommunities.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/10">
              <Users className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-light text-white mb-3">No communities found</h3>
            <p className="text-gray-400 mb-8 font-light">Try adjusting your search or filter criteria</p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white transition-all">
              <Plus className="w-5 h-5" />
              Create New Community
            </button>
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