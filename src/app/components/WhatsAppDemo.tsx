import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function WhatsAppDemo() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSendDemo = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber || !message) return;

    setIsLoading(true);
    setStatus('idle');

    // Simulate a delay to show loading state
    setTimeout(() => {
      // For now, show error until Supabase is connected
      setStatus('error');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#4A5159]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#C4C9D0] mb-4">
            Try VELORA AI Right Now
          </h2>
          <p className="text-xl text-[#C4C9D0]">
            Send yourself a demo message and see the AI in action on WhatsApp
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#000000]/[0.1] backdrop-blur-xl border border-[#C4C9D0]/[0.1] rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSendDemo} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#C4C9D0] mb-2">
                WhatsApp Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+27 XX XXX XXXX"
                className="w-full px-4 py-3 bg-[#000000]/[0.1] border border-[#C4C9D0]/[0.1] rounded-lg text-[#C4C9D0] placeholder-[#C4C9D0] focus:ring-2 focus:ring-[#C4C9D0] focus:border-[#C4C9D0] outline-none transition-all"
                required
              />
              <p className="mt-2 text-sm text-[#C4C9D0]">
                Include country code (e.g., +27 for South Africa)
              </p>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#C4C9D0] mb-2">
                Test Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Try asking: What are your business hours?"
                rows={4}
                className="w-full px-4 py-3 bg-[#000000]/[0.1] border border-[#C4C9D0]/[0.1] rounded-lg text-[#C4C9D0] placeholder-[#C4C9D0] focus:ring-2 focus:ring-[#C4C9D0] focus:border-[#C4C9D0] outline-none transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !phoneNumber || !message}
              className="w-full bg-[#C4C9D0] text-[#000000] px-6 py-4 rounded-xl hover:shadow-lg hover:shadow-[#C4C9D0]/[0.3] transition-all font-semibold text-lg flex items-center justify-center gap-2 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending Demo...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Live Demo
                </>
              )}
            </button>
          </form>

          <AnimatePresence>
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 bg-[#C4C9D0]/[0.1] border border-[#C4C9D0]/[0.2] rounded-lg"
              >
                <p className="text-[#C4C9D0] font-semibold mb-2">
                  💡 Live Demo Coming Soon
                </p>
                <p className="text-[#C4C9D0] text-sm">
                  Connect Supabase and configure WhatsApp API credentials to enable real-time demos. See WHATSAPP_SETUP.md for instructions.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="font-semibold text-[#C4C9D0] mb-3">
              What happens when you send a demo:
            </h4>
            <ul className="space-y-2 text-[#C4C9D0]">
              <li className="flex items-start gap-2">
                <span className="text-[#C4C9D0] font-bold">1.</span>
                <span>You'll receive a WhatsApp message from VELORA AI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C4C9D0] font-bold">2.</span>
                <span>The AI will respond to your question instantly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C4C9D0] font-bold">3.</span>
                <span>Continue the conversation to see the AI in action</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C4C9D0] font-bold">4.</span>
                <span>No signup required - just a free demo</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}