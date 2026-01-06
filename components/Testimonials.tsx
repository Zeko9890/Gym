import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useInView } from "./hooks/useInView";

const testimonials = [
  {
    quote: "APEX transformed not just my body, but my entire mindset. The attention to detail and professional environment is unmatched.",
    author: "Marcus Chen",
    role: "Entrepreneur"
  },
  {
    quote: "I've trained at gyms around the world. APEX's combination of equipment quality and coaching expertise stands alone.",
    author: "Sarah Martinez",
    role: "Professional Athlete"
  },
  {
    quote: "The data-driven approach helped me break through plateaus I've struggled with for years. Results speak for themselves.",
    author: "David Kim",
    role: "Software Engineer"
  }
];

export function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="testimonials" className="py-32 px-6 lg:px-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="mb-4">Trusted by Champions</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-[2px] bg-zinc-100"
          />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative p-8 border border-zinc-800 bg-zinc-950/50"
    >
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-zinc-700 mb-6" strokeWidth={1.5} />

      {/* Quote Text */}
      <p className="text-zinc-300 mb-8 leading-relaxed">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="border-t border-zinc-800 pt-6">
        <p className="tracking-wide mb-1">{testimonial.author}</p>
        <p className="text-sm text-zinc-500 tracking-wide">{testimonial.role}</p>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent origin-left"
      />
    </motion.div>
  );
}
