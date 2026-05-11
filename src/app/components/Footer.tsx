import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import logoImage from '../../styles/VELORA AI LOGO.png';

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: footerRef });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = ['features', 'pricing', 'contact'];
  const contactInfo = [
    { icon: Mail, value: 'veloraai.automations@gmail.com', href: 'mailto:veloraai.automations@gmail.com' },
    { icon: Phone, value: '066 252 1757', href: 'tel:0662521757' },
    { icon: MapPin, value: 'Cape Town, South Africa', href: '#' },
  ];
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <motion.footer 
      ref={footerRef}
      id="contact" 
      className="bg-[#090909] text-[#71717A] py-16 relative overflow-hidden border-t border-white/[0.05]"
      initial={{ opacity: 0 }}
      style={{ position: 'relative' }} // Added position: 'relative' for explicit clarity
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated background gradient - Cinematic Graphite */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(209,213,219,0.02) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(107,114,128,0.02) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(209,213,219,0.02) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <img src={logoImage} alt="VELORA AI" className="h-12 w-auto object-contain" />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={18} className="text-[#D1D5DB]" />
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-[#71717A] text-sm leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Automate customer conversations with intelligent AI-powered responses available 24/7.
            </motion.p>
            {/* Social Links */}
            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-[#E5E7EB]" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3 
              className="font-bold text-lg mb-6 flex items-center gap-2 text-[#F5F5F5] font-['Space_Grotesk']"
              whileHover={{ x: 5 }}
            >
              <span className="w-1 h-6 bg-gradient-to-b from-[#D1D5DB] to-[#6B7280] rounded-full" />
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link}>
                  <motion.button
                    onClick={() => scrollToSection(link)}
                    className="text-[#71717A] hover:text-[#F5F5F5] transition-colors capitalize flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-[#D1D5DB] to-[#6B7280] group-hover:w-4 transition-all duration-300" />
                    {link}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.h3 
              className="font-bold text-lg mb-6 flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <span className="w-1 h-6 bg-gradient-to-b from-[#D1D5DB] to-[#6B7280] rounded-full" />
              Contact Us
            </motion.h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li key={item.value}>
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-3 text-[#94A3B8] hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <item.icon size={16} className="text-[#D1D5DB]" />
                    </motion.div>
                    <span className="text-sm">{item.value}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-[#94A3B8] text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              &copy; 2026 VELORA AI. All rights reserved. | Developed by Tech On Peak (TOP)
            </motion.p>
            <div className="flex gap-6 text-sm text-[#94A3B8]">
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >RUN BUILD
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Animated wave decoration - Silver to Graphite gradient */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A5159] via-[#000000] to-[#4A5159]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </motion.footer>
  );
}