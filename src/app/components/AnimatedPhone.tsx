import { motion, useMotionValue, animate, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { MessageCircle, Check } from "lucide-react";

/* =========================================================
   CHAT DATA
========================================================= */

const chatMessages = [
  {
    id: 1,
    type: "user",
    message: "Hi, I'd like to book an appointment.",
    time: "10:23 AM",
  },
  {
    id: 2,
    type: "bot",
    message:
      "Absolutely — what day works best for you?",
    time: "10:23 AM",
  },
  {
    id: 3,
    type: "user",
    message: "Do you operate after hours?",
    time: "10:24 AM",
  },
  {
    id: 4,
    type: "bot",
    message:
      "Yes — Velora AI is available 24/7.",
    time: "10:24 AM",
  },
  {
    id: 5,
    type: "user",
    message: "Can customers book instantly?",
    time: "10:25 AM",
  },
  {
    id: 6,
    type: "bot",
    message:
      "Instant bookings are fully automated.",
    time: "10:25 AM",
  },
];
/* =========================================================
   TYPES
========================================================= */

interface FloatingMessage {
  id: number;
  message: (typeof chatMessages)[0];
  x: number;
  y: number;
  rotation: number;
}

/* =========================================================
   COMPONENT
========================================================= */

export function AnimatedPhone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleMessages, setVisibleMessages] = useState([0]);

  const [floatingMessages, setFloatingMessages] =
    useState<FloatingMessage[]>([]);

  const [showTyping, setShowTyping] = useState(false);

  /* =========================================================
     SCROLL-BASED 3D TRANSFORMS
  ========================================================= */
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll-based 3D rotations and transforms
  const scrollRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-30, 0, 30]);
  const scrollRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]);
  const scrollRotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-12, 0, 12]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.8]);
  const scrollX = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 50]);
  const scrollYOffset = useTransform(scrollYProgress, [0, 0.5, 1], [-30, 0, 30]);
  const scrollPerspective = useTransform(scrollYProgress, [0, 1], ["2000px", "4000px"]);

  /* =========================================================
     MOTION VALUES
  ========================================================= */

  const rotateY = useMotionValue(35);

  const rotateX = useMotionValue(18);

  const rotateZ = useMotionValue(-12);

  const scale = useMotionValue(0.8);

  const y = useMotionValue(0);

  /* =========================================================
     PHONE LOOP ANIMATION
  ========================================================= */

  useEffect(() => {
    let mounted = true;

    const runLoop = async () => {
      while (mounted) {
        /* RESET */

        rotateY.set(35);
        rotateX.set(18);
        rotateZ.set(-12);
        scale.set(0.8);

        setVisibleMessages([0]);
        setFloatingMessages([]);
        setShowTyping(false);

        /* FLOATING PHONE */

        animate(y, [0, -20, 0], {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        });

        /* SPIN */

        await animate(rotateY, [35, -180, 0], {
          duration: 4,
          ease: [0.16, 1, 0.3, 1],
        });

        /* FORWARD FLIP */

        await animate(rotateX, [18, -25, 0], {
          duration: 2.5,
          ease: [0.34, 1.56, 0.64, 1],
        });

        /* SIDE ROTATION */

        await animate(rotateZ, [-12, 8, 0], {
          duration: 2.5,
          ease: [0.34, 1.56, 0.64, 1],
        });

        /* POP OUT */

        await animate(scale, [0.8, 1.2, 1], {
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        });

        /* WAIT */

        await new Promise((resolve) =>
          setTimeout(resolve, 2500)
        );
      }
    };

    runLoop();

    return () => {
      mounted = false;
    };
  }, []);

  /* =========================================================
     MESSAGE LOOP
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev.length < chatMessages.length) {
          const nextIndex = prev.length;

          if (chatMessages[nextIndex].type === "bot") {
            setShowTyping(true);

            setTimeout(() => {
              setShowTyping(false);

              setVisibleMessages((current) => [
                ...current,
                nextIndex,
              ]);

              /* FLOATING MESSAGE */

              const floatingId =
                Date.now() + Math.random();

              setFloatingMessages((prevFloating) => [
                ...prevFloating,
                {
                  id: floatingId,
                  message: chatMessages[nextIndex],
                  x:
                    Math.random() * 200 - 100,
                  y:
                    Math.random() * 150 - 75,
                  rotation:
                    Math.random() * 50 - 25,
                },
              ]);

              setTimeout(() => {
                setFloatingMessages((prevFloating) =>
                  prevFloating.filter(
                    (f) => f.id !== floatingId
                  )
                );
              }, 4500);
            }, 1200);

            return prev;
          }

          return [...prev, nextIndex];
        }

        return prev;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     UI
  ========================================================= */

  return (
    <motion.div
      ref={containerRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#070B14]"
      style={{
        perspective: scrollPerspective,
        position: 'relative', // Added position: 'relative' for explicit clarity
        transformStyle: "preserve-3d" as const,
      }}
    >
      {/* =====================================================
          PURE WHITE PREMIUM BACKGROUND
      ===================================================== */}

     <div className="absolute inset-0 bg-[#000000]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_50%)]" />

      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[900px] h-[900px] rounded-full bg-[#3B82F6]/5 blur-[140px]"
      />

      {/* =====================================================
          LIGHT STREAKS
      ===================================================== */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      > 
        <div className="absolute top-1/3 -left-20 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-[#B8B8B8]/40 to-transparent blur-md" />

        <div className="absolute bottom-1/3 -right-20 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-[#B8B8B8]/40 to-transparent blur-md" />
      </motion.div>

      {/* =====================================================
          FLOATING MESSAGES
      ===================================================== */}

      {floatingMessages.map((floating) => (
        <motion.div
          key={floating.id}
          initial={{
            opacity: 0,
            scale: 0.5,
            x: 0,
            y: 0,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            filter: "blur(0px)",
          }}
          animate={{
            opacity: [0, 1, 1, 0],

            scale: [0.5, 1, 1.2, 1.4],

            x: [0, floating.x * 6],

            y: [0, floating.y * 4],

            z: [0, 200, 400, 700],

            rotateX: [0, 25, 55],

            rotateY: [0, -25, -65],

            rotateZ: [0, floating.rotation],

            filter: [
              "blur(0px)",
              "blur(0px)",
              "blur(2px)",
              "blur(8px)",
            ],
          }}
          transition={{
            duration: 4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute pointer-events-none z-50"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="bg-white backdrop-blur-xl border border-gray-100 rounded-3xl px-5 py-4 max-w-[240px] shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
            <p className="text-sm text-gray-800 font-medium">
              {floating.message.message}
            </p>
          </div>
        </motion.div>
      ))}

      {/* =====================================================
          PHONE
      ===================================================== */}

      <motion.div
        initial={{
          scale: 0.3,
          opacity: 0,
          rotateY: 180,
          filter: "blur(20px)",
        }}
        animate={{
          scale: 1,
          opacity: 1,
          rotateY: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          rotateX: useTransform([rotateX, scrollRotateX], (values: number[]) => values[0] + values[1]),
          rotateY: useTransform([rotateY, scrollRotateY], (values: number[]) => values[0] + values[1]),
          rotateZ: useTransform([rotateZ, scrollRotateZ], (values: number[]) => values[0] + values[1]),
          scale: useTransform([scale, scrollScale], (values: number[]) => values[0] * values[1]),
          y: useTransform([y, scrollYOffset], (values: number[]) => values[0] + values[1]),
          x: scrollX,
          transformStyle: "preserve-3d" as const,
        }}
        className="relative"
      >
        {/* PHONE OPACITY LOOP */}

        <motion.div
          animate={{
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* PHONE GLOW */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-20 bg-gradient-to-r from-[#3B82F6]/5 via-[#93C5FD]/5 to-[#1A1A1A]/5 rounded-full blur-[100px]"
          />

          {/* PHONE BODY */}

          <div className="relative w-[300px] h-[620px] rounded-[48px] bg-gradient-to-b from-gray-900 via-gray-800 to-black border-[14px] border-black overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
            {/* SCREEN */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1E293B]" />

            {/* GLASS SWEEP */}

            <motion.div
              animate={{
                x: [-500, 500],
                opacity: [0, 0.25, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 w-24 h-full bg-white/20 blur-2xl rotate-12 z-20"
            />

            {/* NOTCH */}

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-3xl z-30" />

            {/* HEADER */}

            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#111111] via-[#1A1A1A] to-[#3B82F6] pt-10 pb-4 px-4 z-10 shadow-2xl">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-xl"
                > 
                  <MessageCircle
                    className="text-emerald-600"
                    size={22}
                  />
                </motion.div>

                <div>
                  <div className="text-white font-bold tracking-wide">
                    VELORA AI
                  </div>

                  <div className="text-[#B8B8B8] text-xs flex items-center gap-2">
                    <motion.div
                      animate={{
                        opacity: [1, 0.4, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="w-2 h-2 bg-green-300 rounded-full"
                    />

                    AI Receptionist Online
                  </div>
                </div>
              </div>
            </div>

            {/* CHAT AREA */}

            <div className="absolute top-[100px] bottom-20 left-0 right-0 px-4 overflow-hidden bg-transparent">
              <div className="flex flex-col gap-3">
                {visibleMessages.map((index) => {
                  const msg = chatMessages[index];

                  const isBot = msg.type === "bot";

                  return (
                    <motion.div
                      key={msg.id}
                      initial={{
                        opacity: 0,
                        scale: 0.6,
                        y: 40,
                        z: -100,
                        rotateX: 45,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        z: 0,
                        rotateX: 0,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`flex ${
                        isBot
                          ? "justify-start"
                          : "justify-end"
                      }`}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.03,
                          y: -2,
                        }}
                        className={`relative max-w-[80%] rounded-3xl px-4 py-3 shadow-lg ${
                          isBot
                            ? "bg-white/10 backdrop-blur-xl text-white border border-white/10"
                            : "bg-gradient-to-br from-[#111111] to-[#1A1A1A] border border-white/10 text-white"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">
                          {msg.message}
                        </p>

                        <div
                          className={`flex justify-end items-center gap-1 mt-1 text-[10px] ${
                            isBot ? "text-[#9CA3AF]" : "text-[#D1D5DB]"
                          }`}
                        >
                          <span>{msg.time}</span>

                          {!isBot && (
                            <Check size={11} />
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* TYPING */}

                {showTyping && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="flex justify-start"
                  >
                    <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-100">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -6, 0],
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.12,
                            }}
                            className="w-2 h-2 rounded-full bg-gray-400"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* INPUT */}

            <div className="absolute bottom-0 left-0 right-0 bg-white backdrop-blur-xl border-t border-gray-100 p-3 flex items-center gap-2">
              <div className="flex-1 rounded-full bg-gray-50 px-4 py-3 text-sm text-gray-400 shadow-inner border border-gray-100">
                Type a message...
              </div>

              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(16,185,129,0.4)",
                    "0 0 35px rgba(16,185,129,0.7)",
                    "0 0 20px rgba(16,185,129,0.4)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#111111] to-[#1A1A1A] border border-white/10 flex items-center justify-center cursor-pointer"
              >
                <MessageCircle
                  className="text-[#B8B8B8]"
                  size={20}
                />
              </motion.div>
            </div> 
          </div>

          {/* SHADOW */}

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[320px] h-16 bg-black/20 blur-3xl rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
