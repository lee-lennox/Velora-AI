import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";

const demoConversation = [
  { type: "customer", text: "Hi! What are your opening hours?", delay: 0 },
  { type: "ai", text: "Hello! We're open Monday-Friday 9AM-6PM, and Saturday 10AM-4PM. How can I assist you today?", delay: 1.5 },
  { type: "customer", text: "I'd like to book a haircut for this Thursday", delay: 3.5 },
  { type: "ai", text: "Great! I have these available slots for Thursday:\n• 10:00 AM\n• 2:30 PM\n• 4:00 PM\n\nWhich works best for you?", delay: 5 },
  { type: "customer", text: "2:30 PM please", delay: 7.5 },
  { type: "ai", text: "Perfect! ✓ Your Session is booked for Thursday at 2:30 PM with Sarah. You'll receive a reminder 2 hours before. See you then!", delay: 9 }
];

export function LiveDemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [typingIndex, setTypingIndex] = useState<number | null>(null);

  const startDemo = () => {
    setVisibleMessages([]);
    setIsPlaying(true);

    demoConversation.forEach((msg, index) => {
      setTimeout(() => {
        if (msg.type === "ai") {
          setTypingIndex(index);
          setTimeout(() => {
            setTypingIndex(null);
            setVisibleMessages(prev => [...prev, index]);
          }, 800);
        } else {
          setVisibleMessages(prev => [...prev, index]);
        }
      }, msg.delay * 1000);
    });

    setTimeout(() => {
      setIsPlaying(false);
    }, (demoConversation[demoConversation.length - 1].delay + 2) * 1000);
  };

  useEffect(() => {
    if (isInView && !isPlaying && visibleMessages.length === 0) {
      setTimeout(() => startDemo(), 500);
    }
  }, [isInView, isPlaying, visibleMessages.length]);

  return (
    <section id="demo" className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden" style={{ position: 'relative' }}>
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
            See VELORA AI in{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our AI handles real customer conversations and bookings
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              {[
                {
                  title: "Instant Responses",
                  description: "AI responds to customers in real-time, no waiting required"
                },
                {
                  title: "Smart Context Understanding",
                  description: "VELORA AI understands intent and provides relevant information"
                },
                {
                  title: "Automated Booking",
                  description: "Appointments are scheduled automatically with calendar sync"
                },
                {
                  title: "Natural Conversations",
                  description: "Feels like talking to a real person, not a bot"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={startDemo}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-8 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              disabled={isPlaying}
            >
              <Play className="w-5 h-5 fill-current" />
              {isPlaying ? "Playing Demo..." : "Replay Demo"}
            </motion.button>
          </motion.div>

          {/* Right - Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-3xl blur-2xl" />

            {/* Phone mockup */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-[#075E54] px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold shadow-lg">
                  V
                </div>
                <div>
                  <div className="text-white font-semibold">VELORA AI</div>
                  <div className="text-green-200 text-xs">Typically replies instantly</div>
                </div>
              </div>

              {/* Chat area */}
              <div className="h-[500px] min-h-[500px] overflow-y-auto bg-[#ECE5DD] p-6 space-y-3">
                {visibleMessages.map((msgIndex) => {
                  const msg = demoConversation[msgIndex];
                  const isCustomer = msg.type === "customer";

                  return (
                    <motion.div
                      key={msgIndex}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className={`flex ${isCustomer ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-sm ${
                          isCustomer
                            ? "bg-[#DCF8C6] text-gray-900 rounded-tr-sm"
                            : "bg-white text-gray-900 rounded-tl-sm"
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                        <div className="text-[10px] text-gray-500 mt-1 text-right">
                          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Typing indicator */}
                {typingIndex !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input area */}
              <div className="bg-gray-100 border-t border-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-400">
                  Type a message...
                </div>
                <div className="w-10 h-10 rounded-full bg-[#075E54] flex items-center justify-center">
                  <span className="text-white text-sm">▶</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
