'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Globe, 
  Users, 
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Award,
  Clock,
  DollarSign,
  Activity,
  Target,
  Brain,
  Cpu,
  Database,
  Lock,
  Eye,
  BarChart,
  LineChart,
  PieChart,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react'
import { LoginModal } from '@/components/auth/LoginModal'
import { RegisterModal } from '@/components/auth/RegisterModal'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { VidalityLogo } from '@/components/ui/VidalityLogo'
import { AuthGuard } from '@/components/auth/AuthGuard'
import { Footer } from '@/components/layout/Footer'
import { useAuthStore } from '@/store'
import { useRouter } from 'next/navigation'

// Animated background component
const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
    
    {/* Animated grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
    
    {/* Floating particles */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  </div>
)

// Hero section component
const HeroSection = ({ onOpenLogin, onOpenRegister }: { 
  onOpenLogin: () => void
  onOpenRegister: () => void 
}) => (
  <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
    <div className="max-w-7xl mx-auto text-center">
      {/* Logo and main heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="flex justify-center mb-6">
          <VidalityLogo className="h-16 w-auto text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          The Future of
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {' '}Trading
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Advanced AI-powered trading platform with real-time data, professional tools, 
          and institutional-grade security for the modern trader.
        </p>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
      >
        <Button
          onClick={onOpenRegister}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
        >
          Start Trading Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          onClick={onOpenLogin}
          variant="outline"
          size="lg"
          className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
        >
          Sign In
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
      >
        {[
          { label: 'Active Traders', value: '50K+', icon: Users },
          { label: 'Markets', value: '10K+', icon: Globe },
          { label: 'Success Rate', value: '95%', icon: Target },
          { label: 'Uptime', value: '99.9%', icon: Clock },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center mb-2">
              <stat.icon className="h-8 w-8 text-blue-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
)

// Features section component
const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms provide real-time market insights and predictive analytics.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Real-Time Data',
      description: 'Ultra-low latency market data from multiple exchanges with millisecond precision.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Institutional Security',
      description: 'Bank-grade security with multi-factor authentication and encrypted data transmission.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Charts',
      description: 'Professional charting tools with 100+ technical indicators and drawing tools.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'Paper Trading',
      description: 'Risk-free trading simulation with real market conditions and unlimited virtual capital.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Database,
      title: 'Portfolio Analytics',
      description: 'Comprehensive portfolio tracking with performance metrics and risk analysis.',
      color: 'from-red-500 to-pink-500'
    }
  ]

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Vidality?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built by traders, for traders. Experience the next generation of trading technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
          <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
          </CardContent>
        </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Demo section component
const DemoSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          See Vidality in Action
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Watch how our platform transforms your trading experience with cutting-edge technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Mock trading interface */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
            <div className="text-white/60 text-sm">Vidality Trading Platform</div>
                </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart area */}
            <div className="lg:col-span-2 bg-slate-700 rounded-lg p-4 h-64">
              <div className="flex items-center justify-between mb-4">
                <div className="text-white font-semibold">AAPL - Apple Inc.</div>
                <div className="text-green-400 font-bold">$185.50 +2.34%</div>
              </div>
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded flex items-center justify-center">
                <LineChart className="h-16 w-16 text-blue-400" />
              </div>
            </div>
            
            {/* Trading panel */}
            <div className="bg-slate-700 rounded-lg p-4">
              <div className="text-white font-semibold mb-4">Quick Trade</div>
              <div className="space-y-3">
                <div className="bg-slate-600 rounded p-2">
                  <div className="text-white/60 text-xs">Symbol</div>
                  <div className="text-white">AAPL</div>
                </div>
                <div className="bg-slate-600 rounded p-2">
                  <div className="text-white/60 text-xs">Quantity</div>
                  <div className="text-white">100</div>
                </div>
                <div className="bg-slate-600 rounded p-2">
                  <div className="text-white/60 text-xs">Price</div>
                  <div className="text-white">$185.50</div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Buy AAPL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

// Testimonials section component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Professional Trader',
      company: 'Quantum Capital',
      content: 'Vidality has revolutionized my trading. The AI insights are incredibly accurate and the real-time data is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Portfolio Manager',
      company: 'Global Investments',
      content: 'The platform\'s security and reliability give me confidence to trade with large positions. Outstanding performance.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Day Trader',
      company: 'Independent',
      content: 'From the advanced charts to the paper trading feature, everything is designed for serious traders. Highly recommended.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Professional Traders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of successful traders who trust Vidality with their investments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</div>
            </div>
          </CardContent>
        </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA section component
const CTASection = ({ onOpenRegister }: { onOpenRegister: () => void }) => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Trading?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of traders who are already experiencing the future of trading with Vidality.
        </p>
        <Button
          onClick={onOpenRegister}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
        >
          Get Started Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-sm text-gray-400 mt-4">No credit card required • Free forever</p>
      </motion.div>
    </div>
  </section>
)

function LandingPageContent() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const { isAuthenticated, user, token } = useAuthStore()

  // Debug logging to track authentication state
  useEffect(() => {
    console.log('🔐 Landing Page: Auth state changed:', {
      isAuthenticated,
      hasUser: !!user,
      hasToken: !!token,
      modalsOpen: { login: isLoginOpen, register: isRegisterOpen }
    })
  }, [isAuthenticated, user, token, isLoginOpen, isRegisterOpen])

  const handleOpenLogin = () => {
    setIsRegisterOpen(false)
    setIsLoginOpen(true)
  }

  const handleOpenRegister = () => {
    setIsLoginOpen(false)
    setIsRegisterOpen(true)
  }

  const handleCloseLogin = () => setIsLoginOpen(false)
  const handleCloseRegister = () => setIsRegisterOpen(false)

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false)
    setIsRegisterOpen(true)
  }

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false)
    setIsLoginOpen(true)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <VidalityLogo className="h-8 w-auto text-white" />
            <div className="flex items-center space-x-4">
              <Button
                onClick={handleOpenLogin}
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                Sign In
              </Button>
              <Button
                onClick={handleOpenRegister}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <HeroSection onOpenLogin={handleOpenLogin} onOpenRegister={handleOpenRegister} />
        <FeaturesSection />
        <DemoSection />
        <TestimonialsSection />
        <CTASection onOpenRegister={handleOpenRegister} />
      </main>

      <Footer />

      {/* Auth Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleCloseLogin}
        onSwitchToRegister={handleSwitchToRegister}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </div>
  )
}

export default function LandingPage() {
  return (
    <AuthGuard requireAuth={false} redirectTo="/dashboard">
      <LandingPageContent />
    </AuthGuard>
  )
}