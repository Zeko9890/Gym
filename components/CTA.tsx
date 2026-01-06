import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function CTA() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section id="cta" className="py-32 px-6 lg:px-12 bg-zinc-950 relative overflow-hidden">
      {/* Background accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-transparent to-transparent"
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="mb-6 text-balance">Ready to Elevate Your Training?</h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
          >
            Join APEX and experience training at the highest level.
            Limited memberships available.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-zinc-100 text-zinc-950 tracking-wide hover:bg-white transition-colors duration-300 flex items-center gap-3"
            >
              <span>Book a Tour</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 border border-zinc-600 text-zinc-100 tracking-wide hover:border-zinc-400 transition-colors duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>

          {/* Decorative dividers */}
          <div className="mt-20 flex items-center justify-center gap-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1px] w-24 bg-zinc-800 origin-right"
            />
            <div className="w-1 h-1 bg-zinc-700 rounded-full" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1px] w-24 bg-zinc-800 origin-left"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
