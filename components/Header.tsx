import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl tracking-wider font-semibold">APEX</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a
              href="#features"
              className="relative text-sm tracking-wide text-zinc-400 hover:text-zinc-100 transition-colors duration-300 group"
            >
              <span>Features</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-100 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#testimonials"
              className="relative text-sm tracking-wide text-zinc-400 hover:text-zinc-100 transition-colors duration-300 group"
            >
              <span>Testimonials</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-100 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contact"
              className="relative text-sm tracking-wide text-zinc-400 hover:text-zinc-100 transition-colors duration-300 group"
            >
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-100 group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 bg-zinc-100 text-zinc-950 text-sm tracking-wide hover:bg-white transition-colors duration-300"
          >
            Join Now
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
