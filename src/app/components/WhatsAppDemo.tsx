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

    // When Supabase is connected, this code will work:
    // try {
    //   const response = await fetch('YOUR_SUPABASE_URL/functions/v1/whatsapp-api', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer YOUR_ANON_KEY'
    //     },
    //     body: JSON.stringify({
    //       phoneNumber: phoneNumber.replace(/\D/g, ''),
    //       message
    //     })
    //   });
    //
    //   if (response.ok) {
    //     setStatus('success');
    //     setMessage('');
    //   } else {
    //     setStatus('error');
    //   }
    // } catch (error) {
    //   setStatus('error');
    //   console.error('Error sending demo:', error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try VELORA AI Right Now
          </h2>
          <p className="text-xl text-gray-600">
            Send yourself a demo message and see the AI in action on WhatsApp
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSendDemo} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                WhatsApp Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+27 XX XXX XXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required
              />
              <p className="mt-2 text-sm text-gray-600">
                Include country code (e.g., +27 for South Africa)
              </p>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Test Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Try asking: What are your business hours?"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !phoneNumber || !message}
              className="w-full bg-emerald-500 text-white px-6 py-4 rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-lg flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
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
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg"
              >
                <p className="text-emerald-800 font-semibold">
                  ✓ Demo sent successfully! Check your WhatsApp.
                </p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg"
              >
                <p className="text-amber-800 font-semibold mb-2">
                  💡 Live Demo Coming Soon
                </p>
                <p className="text-amber-700 text-sm">
                  Connect Supabase and configure WhatsApp API credentials to enable real-time demos. See WHATSAPP_SETUP.md for instructions.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">
              What happens when you send a demo:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">1.</span>
                <span>You'll receive a WhatsApp message from VELORA AI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">2.</span>
                <span>The AI will respond to your question instantly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">3.</span>
                <span>Continue the conversation to see the AI in action</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">4.</span>
                <span>No signup required - just a free demo</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
