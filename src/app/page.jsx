"use client"
import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X, Users, FolderKanban, Calendar, MessageCircle, Image, Award, ArrowRight, Sparkles, User, Settings, LogOut, ChevronDown } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [navbarDisplay, setNavbarDisplay] = useState('');
  const [displayPhase, setDisplayPhase] = useState(0); // 0: name, 1: greeting, 2: activity
  const { data: session, status } = useSession();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const greetings = [
    'Good morning',
    'Good afternoon', 
    'Good evening',
    'Hello',
    'Hi',
    'Welcome back'
  ];

  const activities = [
    'showcasing projects',
    'joining communities',
    'attending events',
    'connecting with peers',
    'building networks',
    'exploring opportunities'
  ];

  // Get appropriate greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return greetings[0]; // Good morning
    if (hour < 18) return greetings[1]; // Good afternoon
    return greetings[2]; // Good evening
  };

  // Navbar display rotation effect with animations
  useEffect(() => {
    if (!session?.user) return;

    const userName = session.user.name?.split(' ')[0] || 'User';
    const currentGreeting = getGreeting();
    const currentActivity = activities[Math.floor(Math.random() * activities.length)];

    const phases = [
      { text: userName, duration: 2000 }, // Show name for 2 seconds
      { text: currentGreeting, duration: 2000 }, // Show greeting for 2 seconds
      { text: `Keep ${currentActivity}`, duration: 3000 } // Show activity for 3 seconds
    ];

    const currentPhase = phases[displayPhase];
    
    const animateTextChange = async () => {
      setIsAnimating(true);
      
      // Wait for slide out animation
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setNavbarDisplay(currentPhase.text);
      
      // Wait for slide in animation
      await new Promise(resolve => setTimeout(resolve, 300));
      setIsAnimating(false);
    };

    animateTextChange();

    const timer = setTimeout(() => {
      setDisplayPhase((prev) => (prev + 1) % phases.length);
    }, currentPhase.duration);

    return () => clearTimeout(timer);
  }, [displayPhase, session]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Close dropdown when clicking outside
    const handleClickOutside = (e) => {
      if (isProfileOpen && !e.target.closest('.profile-dropdown')) {
        setIsProfileOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileOpen]);

  const features = [
    {
      icon: <FolderKanban className="w-6 h-6" />,
      title: "Project Showcase",
      description: "Curate and present your portfolio with elegance. Gain recognition from industry leaders and peers.",
      gradient: "from-violet-500 to-purple-500",
      link: "/projects"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Communities",
      description: "Engage in meaningful conversations. Connect with brilliant minds across disciplines.",
      gradient: "from-blue-500 to-cyan-500",
      link: "/communities"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Events & Activities",
      description: "Never miss an opportunity. Stay informed about workshops, talks, and cultural experiences.",
      gradient: "from-pink-500 to-rose-500",
      link: "/events"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Club Directory",
      description: "Discover communities that resonate with your passions. Track achievements and milestones.",
      gradient: "from-amber-500 to-orange-500",
      link: "/clubs"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Campus Gallery",
      description: "Relive cherished moments. Browse through beautifully captured memories and stories.",
      gradient: "from-emerald-500 to-teal-500",
      link: "/gallery"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognition",
      description: "Celebrate excellence. Receive acknowledgment for your contributions and achievements.",
      gradient: "from-indigo-500 to-blue-500",
      link: "/recognition"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Students", description: "Growing daily" },
    { number: "150+", label: "Projects", description: "Showcased" },
    { number: "25+", label: "Active Clubs", description: "Thriving communities" },
    { number: "100+", label: "Events", description: "Hosted annually" }
  ];

  // Function to render user profile dropdown with rotating text
  const renderUserDropdown = () => {
    if (!session?.user) return null;

    return (
      <div className="profile-dropdown relative">
        <button 
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors group"
        >
          {/* User Info with Rotating Text */}
          <div className="flex items-center gap-3">
            {session.user.image ? (
              <img 
                src={session.user.image} 
                alt={session.user.name || 'User'} 
                className="w-10 h-10 rounded-full border-2 border-white/20 object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            )}
            
            {/* Rotating Text Display with Animation */}
            <div className="hidden lg:block">
              <div className="text-right relative h-10 overflow-hidden">
                <div className={`absolute right-0 transition-all duration-500 ease-in-out ${
                  isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}>
                  <div className="text-sm font-medium text-white min-h-5 flex items-center justify-end">
                    {navbarDisplay}
                    <span className="ml-0.5 animate-pulse">|</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {session.user.email}
                  </div>
                </div>
                
                {/* Next text sliding in from bottom */}
                <div className={`absolute right-0 transition-all duration-500 ease-in-out ${
                  isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                  <div className="text-sm font-medium text-white min-h-5 flex items-center justify-end">
                    {navbarDisplay}
                    <span className="ml-0.5 animate-pulse">|</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {session.user.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
        </button>

        {isProfileOpen && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-2 z-50">
            {/* User Info */}
            <div className="px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                {session.user.image ? (
                  <img 
                    src={session.user.image} 
                    alt={session.user.name || 'User'} 
                    className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{session.user.name}</p>
                  <p className="text-gray-400 text-sm truncate">{session.user.email}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <a 
                href="/profile" 
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setIsProfileOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>My Profile</span>
              </a>
              
              <a 
                href="/settings" 
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setIsProfileOpen(false)}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </a>
              
              <button 
                onClick={() => {
                  signOut();
                  setIsProfileOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Function to render user section in navigation
  const renderUserSection = () => {
    if (status === 'loading') {
      return (
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse"></div>
          <div className="hidden lg:block text-right">
            <div className="w-20 h-4 bg-gray-700 rounded animate-pulse mb-1"></div>
            <div className="w-24 h-3 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      );
    }

    if (session?.user) {
      return (
        <div className="flex items-center gap-6">
          <a 
            href="/dashboard" 
            className="text-gray-300 hover:text-white transition-colors text-sm font-light hidden md:block"
          >
            Dashboard
          </a>
          {renderUserDropdown()}
        </div>
      );
    }

    return (
      <div className="flex items-center gap-4">
        <a href="/signin" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Sign In</a>
        <a href="/signup" className="group relative px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium overflow-hidden">
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-linear-to-r from-violet-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    );
  };

  // Mobile menu user section with animation
  const renderMobileUserSection = () => {
    if (status === 'loading') {
      return (
        <div className="w-16 h-16 rounded-full bg-gray-700 animate-pulse mx-auto mb-4"></div>
      );
    }

    if (session?.user) {
      return (
        <div className="text-center mb-6">
          <div className="flex flex-col items-center gap-2 mb-4">
            {session.user.image ? (
              <img 
                src={session.user.image} 
                alt={session.user.name || 'User'} 
                className="w-16 h-16 rounded-full border-2 border-white/20 object-cover mb-2"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-2">
                <User className="w-8 h-8 text-white" />
              </div>
            )}
            
            {/* Mobile rotating text with animation */}
            <div className="relative h-8 overflow-hidden">
              <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}>
                <span className="text-white font-medium block">{navbarDisplay}</span>
              </div>
              
              <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                <span className="text-white font-medium block">{navbarDisplay}</span>
              </div>
            </div>
            
            <span className="text-gray-400 text-sm">{session.user.email}</span>
          </div>
          <div className="space-y-2 border-t border-white/10 pt-4">
            <a href="/dashboard" className="block text-gray-300 hover:text-white transition-colors py-2">
              Dashboard
            </a>
            <a href="/profile" className="block text-gray-300 hover:text-white transition-colors py-2">
              My Profile
            </a>
            <a href="/settings" className="block text-gray-300 hover:text-white transition-colors py-2">
              Settings
            </a>
            <button 
              onClick={() => signOut()}
              className="block w-full text-red-400 hover:text-red-300 transition-colors py-2 text-center"
            >
              Logout
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <a href="/signin" className="block text-gray-300 hover:text-white transition-colors py-2">Sign In</a>
        <a href="/signup" className="block w-full text-center bg-white text-black px-6 py-3 rounded-full font-medium">
          Get Started
        </a>
      </div>
    );
  };

  // Rest of the component remains exactly the same...
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
              <div className="w-11 h-11 bg-linear-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <span className="text-xl font-light tracking-wide">Campus Connect</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-light">About</a>
              <a href="#gallery" className="text-gray-300 hover:text-white transition-colors text-sm font-light">Gallery</a>
              {renderUserSection()}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-6">
              {renderMobileUserSection()}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <a href="#features" className="block text-gray-300 hover:text-white transition-colors py-2">Features</a>
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors py-2">About</a>
                <a href="#gallery" className="block text-gray-300 hover:text-white transition-colors py-2">Gallery</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-gray-300">Trusted by 500+ students</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-tight">
            Connect,
            <br />
            <span className="bg-linear-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Collaborate
            </span>
            <br />
            & Create
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            An elegant platform for college students to showcase projects, join communities, 
            and build meaningful connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {session?.user ? (
              <a href="/dashboard" className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ) : (
              <>
                <a href="/signup" className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Join Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a href="#features" className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors">
                  Explore Features
                </a>
              </>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-5xl md:text-6xl font-light mb-2 bg-linear-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-white font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Powerful features designed for the modern college experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-14 h-14 bg-linear-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-light mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                <ArrowRight className="w-5 h-5 mt-4 text-gray-500 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-light leading-tight">
                Built by Students,
                <br />
                <span className="bg-linear-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  For Students
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Campus Connect is more than a platform—it's an elegant ecosystem where 
                students express creativity, learn from peers, and build professional 
                networks right from campus.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Whether showcasing your latest project, joining a tech community, 
                or staying updated with campus events, we've created the perfect space for you.
              </p>
              <a href={session?.user ? "/dashboard" : "/signup"} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium group">
                <span>{session?.user ? "Go to Dashboard" : "Start Your Journey"}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="relative">
              <div className="relative p-12 bg-linear-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-linear-to-br from-violet-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center">
                    <Users className="w-12 h-12" />
                  </div>
                  <div>
                    <div className="text-4xl font-light mb-2">Join 500+ Students</div>
                    <p className="text-gray-400">Already connecting and collaborating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-light">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Join Campus Connect today and become part of a thriving student community
          </p>
          <a href={session?.user ? "/dashboard" : "/signup"} className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black rounded-full font-medium text-lg group">
            <span>{session?.user ? "Go to Dashboard" : "Create Your Account"}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
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
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/help" className="text-gray-400 hover:text-white transition-colors text-sm">Help Center</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a></li>
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
            <p className="text-gray-500 text-sm">&copy; 2025 Campus Connect. All rights reserved by Rohit.</p>
          </div>
        </div>
      </footer>
    </div>
    );
}
