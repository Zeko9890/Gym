import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Hero() {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    "Train Hard. Stay Humble.",
    "Discipline Over Motivation.",
    "Progress, Not Perfection."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603665409265-bdc00027c217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwZGFya3xlbnwxfHx8fDE3Njc2OTYyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gym background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/60 to-zinc-950" />
        
        {/* Subtle animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(63, 63, 70, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(63, 63, 70, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(63, 63, 70, 0.3) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Quote */}
          <div className="h-32 md:h-40 flex items-center justify-center mb-8">
            {quotes.map((quote, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentQuote === index ? 1 : 0,
                  y: currentQuote === index ? 0 : 20
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute text-4xl md:text-6xl lg:text-7xl text-balance"
              >
                {quote}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
          >
            Elevate your performance in a space designed for champions.
            Premium facilities, expert coaching, measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-zinc-100 text-zinc-950 tracking-wide hover:bg-white transition-colors duration-300"
            >
              Start Your Journey
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-zinc-600 text-zinc-100 tracking-wide hover:border-zinc-400 transition-colors duration-300"
            >
              Explore Features
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-zinc-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
