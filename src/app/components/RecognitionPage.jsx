"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Award, Trophy, Medal, Star, Crown, Target, TrendingUp, Users, Calendar, ChevronRight, Filter, Search, Download, Share2, Sparkles, CheckCircle } from 'lucide-react';

export default function RecognitionPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('achievements');

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

  const categories = ['all', 'academic', 'sports', 'cultural', 'technical', 'leadership', 'social'];

  const achievements = [
    {
      id: 1,
      title: 'Winner - Smart India Hackathon 2024',
      student: 'Aryan Sharma',
      school: 'School of Computing Science & Engineering',
      category: 'technical',
      date: 'March 2024',
      description: 'Led a team to victory in the national-level hackathon with an innovative AI-based solution for smart agriculture.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
      badge: 'Gold',
      points: 500,
      verified: true
    },
    {
      id: 2,
      title: 'Best Research Paper - IEEE Conference',
      student: 'Priya Mehta',
      school: 'School of Computing Science & Engineering',
      category: 'academic',
      date: 'February 2024',
      description: 'Published groundbreaking research on quantum computing applications in cybersecurity.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      badge: 'Platinum',
      points: 750,
      verified: true
    },
    {
      id: 3,
      title: 'Gold Medal - National Athletics Championship',
      student: 'Rohit Kumar',
      school: 'School of Mechanical Engineering',
      category: 'sports',
      date: 'January 2024',
      description: 'Won gold medal in 100m sprint at the National Inter-University Athletics Meet.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
      badge: 'Gold',
      points: 600,
      verified: true
    },
    {
      id: 4,
      title: 'Best Cultural Performance - Rang De GU',
      student: 'Kavya Iyer',
      school: 'School of Business Administration',
      category: 'cultural',
      date: 'December 2023',
      description: 'Outstanding performance in classical dance at the annual cultural fest, representing Indian heritage.',
      image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800',
      badge: 'Silver',
      points: 400,
      verified: true
    },
    {
      id: 5,
      title: 'President - Robotics Club',
      student: 'Aditya Singh',
      school: 'School of Electronics Engineering',
      category: 'leadership',
      date: 'November 2023',
      description: 'Led the robotics club to win multiple competitions and organized 10+ workshops for students.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
      badge: 'Gold',
      points: 550,
      verified: true
    },
    {
      id: 6,
      title: 'Social Impact Initiative - Swachh Campus',
      student: 'Meera Nair',
      school: 'School of Liberal Arts',
      category: 'social',
      date: 'October 2023',
      description: 'Organized campus-wide cleanliness drive reaching 5000+ students and planted 1000+ trees.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      badge: 'Silver',
      points: 450,
      verified: true
    },
    {
      id: 7,
      title: 'Topper - B.Tech CSE Batch 2024',
      student: 'Vikram Patel',
      school: 'School of Computing Science & Engineering',
      category: 'academic',
      date: 'May 2024',
      description: 'Graduated with a CGPA of 9.8/10, highest in the batch, with multiple research publications.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      badge: 'Platinum',
      points: 1000,
      verified: true
    },
    {
      id: 8,
      title: 'Winner - Code Wars 2024',
      student: 'Sneha Reddy',
      school: 'School of Computing Science & Engineering',
      category: 'technical',
      date: 'April 2024',
      description: 'First place in the university-wide coding competition with 500+ participants.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      badge: 'Gold',
      points: 500,
      verified: true
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Vikram Patel', school: 'CSE', points: 2450, achievements: 8, avatar: '👨‍💻' },
    { rank: 2, name: 'Priya Mehta', school: 'CSE', points: 2200, achievements: 7, avatar: '👩‍🔬' },
    { rank: 3, name: 'Aryan Sharma', school: 'CSE', points: 2100, achievements: 6, avatar: '👨‍💼' },
    { rank: 4, name: 'Rohit Kumar', school: 'Mechanical', points: 1950, achievements: 7, avatar: '⚡' },
    { rank: 5, name: 'Aditya Singh', school: 'Electronics', points: 1800, achievements: 6, avatar: '🤖' },
    { rank: 6, name: 'Kavya Iyer', school: 'Business', points: 1650, achievements: 5, avatar: '💃' },
    { rank: 7, name: 'Meera Nair', school: 'Liberal Arts', points: 1500, achievements: 5, avatar: '🌱' },
    { rank: 8, name: 'Sneha Reddy', school: 'CSE', points: 1400, achievements: 4, avatar: '💻' }
  ];

  const stats = [
    { label: 'Total Achievements', value: '1,200+', icon: <Trophy className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
    { label: 'Students Recognized', value: '850+', icon: <Users className="w-6 h-6" />, color: 'from-violet-500 to-purple-500' },
    { label: 'National Awards', value: '45', icon: <Medal className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { label: 'International Awards', value: '18', icon: <Crown className="w-6 h-6" />, color: 'from-pink-500 to-rose-500' }
  ];

  const filteredAchievements = achievements.filter(achievement => {
    const matchesCategory = selectedCategory === 'all' || achievement.category === selectedCategory;
    const matchesSearch = achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         achievement.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         achievement.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Platinum': return 'from-slate-300 to-slate-400';
      case 'Gold': return 'from-yellow-400 to-yellow-600';
      case 'Silver': return 'from-gray-300 to-gray-400';
      default: return 'from-orange-400 to-orange-600';
    }
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
              <a href="/clubs" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Clubs</a>
              <a href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Projects</a>
              <a href="/recognition" className="text-white font-medium transition-colors text-sm">Recognition</a>
              <a href="/events" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Events</a>
              <a href="/auth" className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-violet-500/25 transition">
                Submit Achievement
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
              <a href="/clubs" className="block text-gray-300 hover:text-white transition-colors">Clubs</a>
              <a href="/projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="/recognition" className="block text-white font-medium transition-colors">Recognition</a>
              <a href="/events" className="block text-gray-300 hover:text-white transition-colors">Events</a>
              <a href="/auth" className="block bg-gradient-to-r from-violet-500 to-purple-600 text-white text-center px-4 py-3 rounded-lg font-medium mt-4">
                Submit Achievement
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
            <Award className="w-10 h-10" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light tracking-tight">
            Student
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Recognition
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Celebrating excellence and achievements of Galgotias University students
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-light text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`py-4 border-b-2 transition ${activeTab === 'achievements' ? 'border-violet-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`py-4 border-b-2 transition ${activeTab === 'leaderboard' ? 'border-violet-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
              Leaderboard
            </button>
          </div>
        </div>
      </div>

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <>
          {/* Search and Filter */}
          <div className="relative max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search achievements..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
              
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
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="relative max-w-7xl mx-auto px-6 pb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1.5 bg-gradient-to-r ${getBadgeColor(achievement.badge)} rounded-full text-xs font-medium flex items-center gap-1 shadow-lg`}>
                        <Award className="w-3 h-3" />
                        {achievement.badge}
                      </div>
                    </div>

                    {achievement.verified && (
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1.5 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full text-xs text-green-400 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium">
                        {achievement.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-light text-white mb-2 group-hover:text-violet-300 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                        {achievement.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Student:</span>
                        <span className="text-white font-medium">{achievement.student}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">School:</span>
                        <span className="text-white text-xs">{achievement.school}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Date:</span>
                        <span className="text-white">{achievement.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{achievement.points} pts</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredAchievements.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-white/5 rounded-full mx-auto flex items-center justify-center mb-6">
                  <Search className="w-10 h-10 text-gray-500" />
                </div>
                <h3 className="text-2xl font-light text-gray-400 mb-2">No achievements found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </>
      )}

      {/* Leaderboard Tab */}
      {activeTab === 'leaderboard' && (
        <div className="relative max-w-5xl mx-auto px-6 py-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-light flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-violet-400" />
                Top Achievers
              </h2>
              <p className="text-sm text-gray-400 mt-2">Students ranked by recognition points</p>
            </div>

            <div className="divide-y divide-white/10">
              {leaderboard.map((student, index) => (
                <div
                  key={student.rank}
                  className={`p-6 hover:bg-white/5 transition ${index < 3 ? 'bg-white/5' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      student.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' :
                      student.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-black' :
                      student.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-black' :
                      'bg-white/10 text-white'
                    }`}>
                      {student.rank <= 3 ? (
                        student.rank === 1 ? <Crown className="w-6 h-6" /> :
                        student.rank === 2 ? <Medal className="w-6 h-6" /> :
                        <Trophy className="w-5 h-5" />
                      ) : (
                        `#${student.rank}`
                      )}
                    </div>

                    <div className="text-3xl">{student.avatar}</div>

                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white">{student.name}</h3>
                      <p className="text-sm text-gray-400">{student.school}</p>
                    </div>

                    <div className="hidden sm:flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-lg font-medium">{student.points}</span>
                      </div>
                      <p className="text-xs text-gray-400">{student.achievements} achievements</p>
                    </div>

                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>

                  <div className="sm:hidden mt-4 pt-4 border-t border-white/10 flex justify-between">
                    <div className="flex items-center gap-2 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium">{student.points} pts</span>
                    </div>
                    <p className="text-sm text-gray-400">{student.achievements} achievements</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-violet-500/25 transition">
              View Full Leaderboard
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Galgotias University. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}