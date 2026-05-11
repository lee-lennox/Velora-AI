import  { motion, useAnimation, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import { Star, Quote, Heart, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Owner, Bloom Hair & Beauty',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: 'VELORA AI transformed my salon. We used to miss so many bookings after hours, but now the AI handles them instantly. It feels like having a receptionist that never sleeps!'
  },
  {
    name: 'Michael Chen',
    role: 'Master Barber, The Razor Edge',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The AI handles all our pricing and location queries on WhatsApp. My team can focus on the clients in the chair while the assistant handles the rest. Best investment for the shop.'
  },
  {
    name: 'Thandi Ndlovu',
    role: 'Founder, Elite Lash Academy',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Training inquiries used to pile up. Now, the AI qualifies leads and pushes them to book their training slots overnight. Our conversion rate for new students has doubled.'
  },
  {
    name: 'David Botha',
    role: 'Owner, Cape Barber Shop',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The business hours automation is a lifesaver. Customers get replies at 2 AM and book for the next morning without me lifting a finger. It paid for itself in the first week.'
  },
  {
    name: 'Amara Okafor',
    role: 'Director, Sparkle Lash & Training',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The custom tone is amazing—it sounds exactly like me! My clients love the instant response, and I love that I dont have to spend all evening on WhatsApp anymore.'
  },
  {
    name: 'Johan van der Merwe',
    role: 'Owner, Van Der Merwe Aesthetics',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Seamless integration with our booking links. It answers FAQs perfectly, freeing up my time for procedures. High-quality service and very reliable.'
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={controls}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 }
      }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      style={{ perspective: 1000 }}
      className="bg-white/[0.5] backdrop-blur-xl border border-[#4A5159]/[0.1] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-[#4A5159]/[0.1] transition-all relative overflow-hidden group"
    >
      {/* Animated gradient border on hover - Silver/Blue */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4A5159] via-[#000000] to-[#4A5159] p-[1px]">
          <div className="w-full h-full rounded-2xl bg-[#C4C9D0]" />
        </div>
      </div>

      {/* Floating quote icon - Silver */}
      <motion.div
        className="absolute top-4 right-4 text-white/[0.05] group-hover:text-white/[0.1] transition-colors"
        animate={{
          y: [0, -5, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
      >
        <Quote size={50} />
      </motion.div>

      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover ring-4 ring-[#4A5159]/[0.1]"
            />
            <motion.div
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#4A5159] to-[#000000] border border-[#C4C9D0]/[0.2] rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={12} className="text-[#C4C9D0]" />
            </motion.div>
          </motion.div>
          <div>
            <h4 className="font-bold text-[#000000] group-hover:text-[#4A5159] transition-colors">
              {testimonial.name}
            </h4>
            <p className="text-sm text-[#4A5159]">{testimonial.role}</p>
          </div>
        </div>

        <motion.div 
          className="flex gap-1 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1 + 0.3 + i * 0.05,
                type: "spring",
                stiffness: 200
              }}
            > 
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className="text-[#000000] leading-relaxed"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          "{testimonial.text}"
        </motion.p>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#C4C9D0] relative overflow-hidden border-t border-[#4A5159]/[0.1]">
      {/* Animated background elements - Graphite/Blue */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 3) * 25}%`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              background: i % 3 === 0 ? 'rgba(0,0,0,0.05)' : i % 3 === 1 ? 'rgba(74,81,89,0.05)' : 'rgba(0,0,0,0.05)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
              x: [0, i % 2 === 0 ? 30 : -30, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4 text-[#000000]"
            style={{ 
              background: 'linear-gradient(90deg, #000000, #4A5159, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            What Our Customers Say
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#4A5159] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            See what our customers are saying about VELORA AI
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div 
            className="inline-flex items-center gap-4 bg-[#4A5159]/[0.1] backdrop-blur-xl border border-[#4A5159]/[0.2] rounded-full px-8 py-4 shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex -space-x-3">
              {testimonials.slice(0, 5).map((t, i) => (
                <motion.img
                  key={i}
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-4 border-[#C4C9D0] object-cover"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
            <div className="text-left">
              <motion.div 
                className="font-bold text-[#000000] text-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Join 1,000+ happy customers
              </motion.div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                  ))}
                </div>
                <span className="text-sm text-[#4A5159] font-medium">4.9/5 Average</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust badges - Dark theme */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { icon: TrendingUp, label: '99.9% Uptime', value: 'Guaranteed' },
            { icon: Heart, label: 'Customer Love', value: '4.9/5 Rating' },
          ].map((badge, index) => (
            <motion.div
              key={badge.label}
              className="flex items-center gap-3 bg-[#4A5159]/[0.1] backdrop-blur-xl border border-[#4A5159]/[0.2] px-6 py-3 rounded-full shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <badge.icon className="text-[#000000]" size={20} />
              <div>
                <div className="font-semibold text-[#000000] text-sm">{badge.label}</div>
                <div className="text-xs text-[#4A5159]">{badge.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}