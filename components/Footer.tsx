import { motion } from "motion/react";
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function Footer() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <footer id="contact" className="py-20 px-6 lg:px-12 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-3 gap-12 mb-16"
        >
          {/* Brand */}
          <div>
            <h3 className="mb-4 tracking-wider">APEX</h3>
            <p className="text-zinc-500 leading-relaxed mb-6">
              Premium fitness facilities for those who demand excellence.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:border-zinc-600 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:border-zinc-600 transition-colors duration-300"
              >
                <Twitter className="w-4 h-4" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:border-zinc-600 transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed">
                  123 Elite Boulevard<br />
                  San Francisco, CA 94105
                </span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                <span>(415) 555-0100</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                <span>hello@apexgym.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-6">Hours</h3>
            <div className="space-y-3 text-zinc-400">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-zinc-500">5AM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-zinc-500">7AM - 9PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-zinc-500">8AM - 8PM</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-zinc-600">
            © 2026 APEX Fitness. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
