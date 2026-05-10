import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView, AnimatePresence } from 'motion/react';
import { ThemeProvider, ThemeToggle } from './context/ThemeContext';
import { Header } from './components/Header';
import { AnimatedPhone } from './components/AnimatedPhone';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { Testimonials } from './components/Testimonials';
import { WhatsAppDemo } from './components/WhatsAppDemo';
import { LiveDemoSection } from './components/LiveDemoSection';
import {
  Clock,
  Globe,
  Zap,
  Shield,
  BarChart3,
  Users,
  CheckCircle,
  MessageSquare,
  TrendingUp,
  Activity
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/27764370246?text=Hello%20VELORA%20AI,%20I'd%20like%20to%20make%20a%20booking.";

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Parallax transforms for various sections
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const stats = [
    { label: 'Chats', value: '50K+', icon: MessageSquare },
    { label: 'Uptime', value: '99.9%', icon: Activity },
    { label: 'Languages', value: '40+', icon: Globe },
    { label: 'Customers', value: '1K+', icon: Users }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry with round-the-clock automated responses'
    },
    {
      icon: Zap,
      title: 'Instant Responses',
      description: 'Respond to customer queries in milliseconds, not hours'
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Communicate with customers in over 40 different languages'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security to protect your customer data'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into customer conversations and behavior'
    },
    {
      icon: Users,
      title: 'Scalable',
      description: 'Handle thousands of conversations simultaneously'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'R299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1,000 conversations/month',
        'Basic analytics',
        '5 languages',
        'Email support',
        'WhatsApp integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'R999',
      period: '/month',
      description: 'For growing companies',
      features: [
        '10,000 conversations/month',
        'Advanced analytics',
        '20 languages',
        'Priority support',
        'WhatsApp + Web chat',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Enterprise analytics',
        'All 40+ languages',
        '24/7 dedicated support',
        'All integrations',
        'Custom AI training',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500" ref={containerRef}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 z-[60]"
        style={{ scaleX, originX: 0 }}
      />
      
      <Header />

      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50/50 via-blue-50/30 to-white relative overflow-hidden"
      >
        {/* Premium background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-blue-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-emerald-400/20 rounded-full blur-3xl"
          />
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/40 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Automate Customer Conversations with AI
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Transform your customer service with intelligent AI responses on WhatsApp. Available 24/7, multilingual, and incredibly fast. <strong>All bookings are managed directly through WhatsApp.</strong>
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.button
                  onClick={() => window.open(WHATSAPP_URL, '_blank')}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 211, 102, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#128C7E] transition-all text-lg font-semibold shadow-lg shadow-green-500/30 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    <MessageSquare size={20} />
                    Book on WhatsApp
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <AnimatedPhone />

              {/* Premium Feature Callouts with continuous animation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8,
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-20 -left-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Clock className="text-white" size={16} />
                </div>
                <span className="text-sm font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">24/7 Available</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1,
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                className="absolute top-40 -right-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Zap className="text-white" size={16} />
                </div>
                <span className="text-sm font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Instant Reply</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: [0, 5, 0],
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.2,
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-32 -left-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Globe className="text-white" size={16} />
                </div>
                <span className="text-sm font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Multi-Language</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section - Premium with Flip & Pop-up Animations */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Ambient lighting with animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, rotateX: -60, scale: 0.5, y: 80 }}
                whileInView={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80,
                  damping: 12
                }}
                style={{ perspective: 1000 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 150
                    }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30"
                  >
                    <stat.icon size={32} />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: [0, 1.3, 1], opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15 + 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-5xl font-bold mb-2 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                  className="text-gray-400 font-medium text-lg"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section with Flip & Pop-up Animations */}
      <motion.section 
        id="features" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Velora AI?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to automate and scale your customer conversations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, rotateX: -90, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.12,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                style={{ perspective: 1000 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-2xl hover:border-emerald-500/30 transition-all group cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.12 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/30 group-hover:shadow-xl group-hover:shadow-emerald-500/40"
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 + 0.4 }}
                  className="text-xl font-bold text-gray-900 mb-2"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 + 0.5 }}
                  className="text-gray-600"
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Live Chat Simulation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <LiveDemoSection />
      </motion.div>

      {/* Analytics Section */}
      <motion.section 
        id="analytics" 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full blur-3xl"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + (i % 2) * 30}%`,
                background: i % 2 === 0 ? 'rgba(16,185,129,0.05)' : 'rgba(59,130,246,0.05)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Analytics Dashboard
            </h2>
            <p className="text-xl text-gray-600">
              Monitor performance and gain insights into your customer conversations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Total Conversations</span>
                  <TrendingUp className="text-emerald-500" size={20} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">24,589</div>
                <div className="text-emerald-500 text-sm">+12.5% from last month</div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Avg Response Time</span>
                  <Activity className="text-blue-500" size={20} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">1.2s</div>
                <div className="text-blue-500 text-sm">-0.3s improvement</div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Customer Satisfaction</span>
                  <BarChart3 className="text-purple-500" size={20} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">96.8%</div>
                <div className="text-purple-500 text-sm">+2.1% this week</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-gray-400 mb-4">Conversation Volume (Last 7 Days)</div>
              <div className="flex items-end gap-2 h-32">
                {[45, 62, 58, 71, 83, 78, 92].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-1 bg-emerald-500 rounded-t"
                  />
                ))}
              </div>
              <div className="flex justify-between text-gray-500 text-sm mt-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        id="pricing" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Pricing section background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/5 to-blue-400/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/5 to-emerald-400/5 rounded-full blur-3xl"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 ${
                  plan.popular
                    ? 'border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105'
                    : 'border border-gray-200/50 shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => window.open(WHATSAPP_URL, '_blank')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all shadow-lg ${
                    plan.popular
                      ? 'bg-[#25D366] text-white hover:bg-[#128C7E] shadow-green-500/30'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-xl'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Book on WhatsApp'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WhatsApp Live Demo Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <WhatsAppDemo />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => window.open(WHATSAPP_URL, '_blank')}
        className="fixed bottom-24 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Floating Action Button with animation */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/30"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </motion.button>
    </div>
    </ThemeProvider>
  );
}
