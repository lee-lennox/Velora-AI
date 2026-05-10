import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { AnimatedPhone } from './components/AnimatedPhone';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { Testimonials } from './components/Testimonials';
import { WhatsAppDemo } from './components/WhatsAppDemo';
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

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Automate Customer Conversations with AI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your customer service with intelligent AI responses on WhatsApp. Available 24/7, multilingual, and incredibly fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const element = document.getElementById('pricing');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors text-lg font-semibold"
                >
                  Get Started Free
                </button>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-colors text-lg font-semibold"
                >
                  Watch Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <AnimatedPhone />

              {/* Feature Callouts */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-20 -left-8 bg-white rounded-lg shadow-lg p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Clock className="text-emerald-600" size={16} />
                </div>
                <span className="text-sm font-semibold text-gray-900">24/7 Available</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-40 -right-8 bg-white rounded-lg shadow-lg p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="text-blue-600" size={16} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Instant Reply</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute bottom-32 -left-8 bg-white rounded-lg shadow-lg p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Globe className="text-purple-600" size={16} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Multi-Language</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <stat.icon size={24} />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-emerald-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
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
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-2 border-emerald-500 shadow-xl scale-105'
                    : 'border border-gray-200 shadow-lg'
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

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Live Demo Section */}
      <WhatsAppDemo />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

      <Footer />
    </div>
  );
}