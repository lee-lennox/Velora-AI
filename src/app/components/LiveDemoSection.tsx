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
    <section id="demo" className="relative py-32 bg-gradient-to-r from-[#4A5159] to-[#C4C9D0] overflow-hidden" style={{ position: 'relative' }}>
      {/* Background decoration - Subtle Silver Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C4C9D0]/[0.05] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#C4C9D0]/[0.05] rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-[#000000]">
            See VELORA AI in{" "}
            <span className="bg-gradient-to-r from-[#000000] via-[#4A5159] to-[#000000] bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-[#4A5159] max-w-2xl mx-auto">
            Watch how our AI handles real customer conversations and bookings
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Graphic - Moved to Darker Left side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow effect - Subtle Blue */}
            <div className="absolute -inset-4 bg-[#C4C9D0]/[0.1] rounded-3xl blur-2xl" />

            {/* Phone mockup - Dark theme */}
            <div className="relative bg-[#4A5159] rounded-3xl shadow-2xl border border-[#C4C9D0]/[0.1] overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#000000] to-[#4A5159] px-6 py-4 flex items-center gap-3 border-b border-[#C4C9D0]/[0.05]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#000000] to-[#4A5159] border border-[#C4C9D0]/[0.1] flex items-center justify-center text-[#C4C9D0] font-bold shadow-lg">
                  V
                </div>
                <div>
                  <div className="text-[#C4C9D0] font-semibold">VELORA AI</div>
                  <div className="text-[#C4C9D0] text-xs">Typically replies instantly</div>
                </div>
              </div>

              {/* Chat area - Dark theme */}
              <div className="h-[500px] min-h-[500px] overflow-y-auto bg-[#000000] p-6 space-y-3">
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
                            ? "bg-gradient-to-br from-[#C4C9D0] to-[#C4C9D0] border border-[#000000]/[0.1] text-[#000000] rounded-tr-sm"
                            : "bg-[#000000]/[0.1] backdrop-blur-sm text-[#C4C9D0] rounded-tl-sm border border-[#C4C9D0]/[0.05]"
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                        <div className="text-[10px] text-white/50 mt-1 text-right">
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
                    <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-white/5">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-[#C4C9D0] rounded-full"
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

              {/* Input area - Dark theme */}
              <div className="bg-[#000000] border-t border-[#C4C9D0]/[0.1] px-4 py-3 flex items-center gap-2">
                <div className="flex-1 bg-[#000000]/[0.1] rounded-full px-4 py-2 text-sm text-[#C4C9D0]">
                  Type a message...
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C4C9D0] to-[#C4C9D0] border border-[#000000]/[0.1] flex items-center justify-center shadow-lg">
                  <span className="text-[#000000] text-sm">▶</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text - Placed on Lighter Right side using Black ink */}
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
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#4A5159] border border-[#000000]/[0.1] flex items-center justify-center shadow-lg">
                    <span className="text-[#C4C9D0] font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#000000] mb-1">{item.title}</h3>
                    <p className="text-[#000000]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={startDemo}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-8 px-8 py-4 bg-[#4A5159] text-[#C4C9D0] font-bold rounded-xl shadow-lg hover:bg-[#000000] transition-all duration-300 flex items-center gap-3"
              disabled={isPlaying}
            >
              <Play className="w-5 h-5 fill-current text-[#C4C9D0]" />
              {isPlaying ? "Playing Demo..." : "Replay Demo"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}