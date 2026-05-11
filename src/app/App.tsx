import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Header } from './components/Header';
import { VeloraAIHero } from './components/VeloraAIHero';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { Testimonials } from './components/Testimonials';
import {
  Clock,
  Zap,
  Shield,
  Users,
  CheckCircle,
  MessageSquare,
  Activity,
  X as XIcon
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/27815424981?text=Hello%20VELORA%20AI,%20I'd%20like%20to%20make%20a%20booking.";
const CONTACT_PHONE = "081 542 4981";
const CONTACT_EMAIL = "veloraai.automations@gmail.com";

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const stats = [
    { label: 'Chats', value: '50K+', icon: MessageSquare },
    { label: 'Uptime', value: '99.9%', icon: Activity },
    { label: 'Response Rate', value: '100%', icon: Zap },
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
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security to protect your customer data'
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
      price: 'R1,500',
      setup: 'R2,499 setup',
      period: '/month',
      description: 'Perfect if you just want to stop missing messages and respond instantly.',
      features: [
        'WhatsApp AI assistant (basic setup)',
        'Answers FAQs (prices, services, location, hours)',
        'Basic booking link sharing (redirect to their system)',
        'Business hours automation (auto replies after hours)',
        'Up to 50–100 conversations/month'
      ],
      notIncluded: [
        'Advanced booking logic',
        'Follow-ups',
        'Deep personalization'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: 'R2,300',
      setup: 'R3,400 setup',
      period: '/month',
      description: 'Advanced AI that qualifies leads and handles the entire booking flow.',
      features: [
        'Everything in Starter PLUS:',
        'Smart booking flow (guides client to book step-by-step)',
        'Lead qualification (asks questions before booking)',
        'Follow-ups (if client doesn\'t book)',
        'After-hours conversion (pushes bookings overnight)',
        'Priority responses (faster & smarter AI)',
        'Unlimited or higher conversation limit',
        'Custom tone (trained to sound like the business owner)',
        'Monthly optimization (you improve responses)'
      ],
      notIncluded: [],
      popular: true
    }
  ];

  return (
      <div className="min-h-screen bg-[#4A5159] text-[#C4C9D0] font-['Inter']" ref={containerRef}>
        {/* Scroll Progress Bar - Light Silver to Dark Slate Gray gradient */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C4C9D0] to-[#4A5159] z-[60]"
          style={{ scaleX, originX: 0 }}
        />
        
        <Header />

        {/* Hero Section - New 3D Phone Hero */}
        <VeloraAIHero onVideoClick={() => setIsVideoModalOpen(true)} />

        {/* Stats Section - Premium Dark with Flip & Pop-up Animations */}
        <motion.section 
          className="py-20 bg-[#4A5159] relative overflow-hidden border-y border-[#C4C9D0]/[0.1]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Ambient lighting with animation - Subtle Blue */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-1/4 w-96 h-96 bg-[#C4C9D0]/[0.05] rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C4C9D0]/[0.05] rounded-full blur-3xl"
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
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{ 
                        duration: 0.7, 
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 150
                      }}
                    className="w-16 h-16 bg-gradient-to-br from-[#000000] to-[#4A5159] border border-[#C4C9D0]/[0.1] rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <motion.div
                        animate={{
                          rotateZ: [0, 360],
                        }}
                        transition={{
                          duration: 6 + index * 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      > 
                      <stat.icon size={32} className="text-[#C4C9D0]" />
                      </motion.div>
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
                    className="text-5xl font-bold mb-2 text-[#C4C9D0] font-['Space_Grotesk']"
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                    className="text-[#C4C9D0] font-medium text-lg"
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section with Flip & Pop-up Animations - Dark Theme */}
        <motion.section 
          id="features" 
          className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-r from-[#4A5159] to-[#C4C9D0]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"
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
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 font-['Space_Grotesk']">
                Why Choose Velora AI?
              </h2>
              <p className="text-xl text-[#4A5159]">
                Everything you need to automate and scale your customer conversations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="bg-[#000000]/[0.1] backdrop-blur-xl border border-[#4A5159]/[0.2] rounded-2xl p-8 hover:shadow-2xl hover:border-[#C4C9D0]/[0.3] transition-all group cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.12 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="w-16 h-16 bg-gradient-to-br from-[#000000] to-[#4A5159] border border-[#C4C9D0]/[0.1] rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                  >
                    <motion.div
                      animate={{
                        rotateZ: [0, 360],
                      }}
                      transition={{
                        duration: 8 + index * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    > 
                      <feature.icon className="text-[#C4C9D0]" size={32} />
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 + 0.4 }}
                    className="text-xl font-bold text-[#C4C9D0] mb-2 font-['Space_Grotesk']"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 + 0.5 }}
                    className="text-[#C4C9D0]"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Section - Dark Theme */}
        <motion.section 
          id="pricing" 
          className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#C4C9D0]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Pricing section background effects - Subtle Silver/Blue */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#4A5159]/[0.05] to-[#000000]/[0.05] rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-[#000000]/[0.05] to-[#4A5159]/[0.05] rounded-full blur-3xl"
            />
          </div>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4 font-['Space_Grotesk']">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-[#4A5159]">
                Choose the plan that fits your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border ${
                    plan.popular
                      ? 'border-[#4A5159]/[0.2] shadow-2xl scale-105 z-10'
                      : 'border-[#4A5159]/[0.1] shadow-xl'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4A5159] to-[#000000] text-[#C4C9D0] px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-[#000000] mb-2 font-['Space_Grotesk']">
                    {plan.name}
                  </h3>
                  <p className="text-[#4A5159] mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#000000]">{plan.price}</span>
                    <span className="text-[#4A5159]">{plan.period}</span>
                    {plan.setup && (
                      <div className="text-sm font-medium text-[#4A5159] mt-1">
                        {plan.setup}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-[#000000]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="mb-8 pt-4 border-t border-[#4A5159]/[0.1]">
                      <p className="text-xs font-semibold text-[#4A5159] mb-3 uppercase tracking-wide">
                        What's not included
                      </p>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 opacity-50">
                            <XIcon className="flex-shrink-0 mt-0.5" size={16} />
                            <span className="text-sm text-[#4A5159]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <motion.button
                    onClick={() => window.open(WHATSAPP_URL, '_blank')}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold transition-all shadow-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#4A5159] to-[#000000] text-[#C4C9D0] hover:shadow-[#4A5159]/[0.1]'
                        : 'bg-[#4A5159] text-[#C4C9D0] hover:bg-[#000000] border border-[#4A5159]'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Book on WhatsApp'}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

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
        
        {/* Floating WhatsApp Button - Graphite/Blue theme */}
        <motion.button
          onClick={() => window.open(WHATSAPP_URL, '_blank')}
          className="fixed bottom-24 right-8 z-50 bg-[#C4C9D0] border border-[#000000]/[0.1] text-[#000000] p-4 rounded-full shadow-2xl hover:border-[#4A5159]/[0.5]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <MessageSquare size={24} className="text-[#000000]" />
        </motion.button>

        {/* Floating Action Button with animation - Graphite theme */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-[#C4C9D0] border border-[#000000]/[0.1] text-[#000000] p-4 rounded-full shadow-2xl"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#000000]"><path d="m18 15-6-6-6 6"/></svg>
        </motion.button>
      </div>
  );
}