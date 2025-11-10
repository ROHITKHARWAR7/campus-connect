"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Github, Linkedin, Chrome, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    admissionId: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.admissionId.trim()) {
        newErrors.admissionId = 'Admission ID is required';
      }
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    try {
      const loadingToast = toast.loading("Signing in with Google...");
      
      const result = await signIn('google', {
        callbackUrl: '/',
        redirect: false,
      });

      toast.dismiss(loadingToast);

      if (result?.error) {
        toast.error("Google sign in failed. Please try again.");
      } else if (result?.url) {
        toast.success("Signed in successfully!");
        setTimeout(() => {
          router.push(result.url || '/');
        }, 1500);
      }
    } catch (error) {
      toast.error("Google sign in failed. Please try again.");
    }
  };

  // GitHub Sign-In Handler
  const handleGitHubSignIn = async () => {
    try {
      const loadingToast = toast.loading("Signing in with GitHub...");
      
      const result = await signIn('github', {
        callbackUrl: '/',
        redirect: false,
      });

      toast.dismiss(loadingToast);

      if (result?.error) {
        toast.error("GitHub sign in failed. Please try again.");
      } else if (result?.url) {
        toast.success("Signed in successfully!");
        setTimeout(() => {
          router.push(result.url || '/');
        }, 1500);
      }
    } catch (error) {
      toast.error("GitHub sign in failed. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading(isLogin ? "Signing you in..." : "Creating your account...");

    try {
      if (isLogin) {
        // Handle login with NextAuth
        const result = await signIn('credentials', {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (result?.error) {
          toast.error("Invalid email or password");
          toast.dismiss(loadingToast);
          setIsSubmitting(false);
          return;
        }

        if (result?.ok) {
          toast.dismiss(loadingToast);
          toast.success("Signed in successfully!");
          setTimeout(() => {
            router.push('/');
          }, 1500);
        }
      } else {
        // Handle registration
        const response = await axios.post("/api/routes/register", formData);
        
        if (response.data.success) {
          toast.dismiss(loadingToast);
          toast.success("Account created successfully!");
          setSubmitSuccess(true);
          
          setTimeout(() => {
            setSubmitSuccess(false);
            setFormData({
              name: '',
              email: '',
              admissionId: '',
              password: '',
              confirmPassword: '',
              rememberMe: false
            });
            setIsLogin(true); // Switch to login mode
          }, 2000);
        } else {
          throw new Error(response.data.message || "Registration failed");
        }
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.response?.data?.message || error.message || "Something went wrong");
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      name: '',
      email: '',
      admissionId: '',
      password: '',
      confirmPassword: '',
      rememberMe: false
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex items-center justify-center p-6">
      <Toaster />
      
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
        <div 
          className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
            top: '50%',
            right: '20%'
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-linear-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30">
              <span className="text-white font-bold text-2xl">CC</span>
            </div>
            <span className="text-2xl font-light tracking-wide">Campus Connect</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-light leading-tight">
              Connect with your
              <br />
              <span className="bg-linear-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                campus community
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 font-light max-w-md">
              Join clubs, collaborate on projects, and build lasting connections with fellow students.
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center shrink-0 border border-violet-500/20">
                <CheckCircle className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">50+ Active Clubs</h3>
                <p className="text-sm text-gray-400">Discover communities that match your interests</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center shrink-0 border border-violet-500/20">
                <CheckCircle className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Real-time Collaboration</h3>
                <p className="text-sm text-gray-400">Work together on exciting projects and events</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center shrink-0 border border-violet-500/20">
                <CheckCircle className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Build Your Network</h3>
                <p className="text-sm text-gray-400">Connect with peers who share your passions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-linear-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <span className="text-xl font-light tracking-wide">Campus Connect</span>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-light mb-2">
                {isLogin ? 'Welcome back' : 'Create account'}
              </h2>
              <p className="text-gray-400 text-sm">
                {isLogin 
                  ? 'Enter your credentials to access your account' 
                  : 'Join the campus community today'}
              </p>
            </div>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                <p className="text-sm text-green-400">
                  {isLogin ? 'Login successful! Redirecting...' : 'Account created successfully!'}
                </p>
              </div>
            )}

            <div className="space-y-3 mb-6">
              <button 
                onClick={handleGoogleSignIn}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 flex items-center justify-center gap-3 transition group"
              >
                <Chrome className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
                <span className="text-sm font-medium">Continue with Google</span>
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={handleGitHubSignIn}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 flex items-center justify-center gap-2 transition group"
                >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
                  <span className="text-sm font-medium">GitHub</span>
                </button>
                
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 flex items-center justify-center gap-2 transition group">
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </button>
              </div>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-black/50 text-gray-400">Or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        placeholder="John Doe"
                        className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition`}
                      />
                    </div>
                    {errors.name && (
                      <div className="flex items-center gap-2 mt-2 text-red-400 text-xs">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Admission ID
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="admissionId"
                        value={formData.admissionId}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter your admission ID"
                        className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${errors.admissionId ? 'border-red-500/50' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition`}
                      />
                    </div>
                    {errors.admissionId && (
                      <div className="flex items-center gap-2 mt-2 text-red-400 text-xs">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.admissionId}</span>
                      </div>
                    )}
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="you@example.com"
                    className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition`}
                  />
                </div>
                {errors.email && (
                  <div className="flex items-center gap-2 mt-2 text-red-400 text-xs">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="••••••••"
                    className={`w-full pl-12 pr-12 py-3 bg-white/5 border ${errors.password ? 'border-red-500/50' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <div className="flex items-center gap-2 mt-2 text-red-400 text-xs">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.password}</span>
                  </div>
                )}
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      placeholder="••••••••"
                      className={`w-full pl-12 pr-12 py-3 bg-white/5 border ${errors.confirmPassword ? 'border-red-500/50' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <div className="flex items-center gap-2 mt-2 text-red-400 text-xs">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.confirmPassword}</span>
                    </div>
                  )}
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-white/10 bg-white/5 text-violet-500 focus:ring-violet-500 focus:ring-offset-0" 
                    />
                    <span className="text-gray-300">Remember me</span>
                  </label>
                  <button type="button" className="text-violet-400 hover:text-violet-300 transition">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-violet-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-violet-500/25 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>{isLogin ? 'Sign in' : 'Create account'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                onClick={switchMode}
                className="text-violet-400 hover:text-violet-300 transition font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-20 h-20 bg-linear-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}