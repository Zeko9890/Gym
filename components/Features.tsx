import { motion } from "motion/react";
import { Dumbbell, Users, TrendingUp } from "lucide-react";
import { useInView } from "./hooks/useInView";

const features = [
  {
    icon: Dumbbell,
    title: "Elite Equipment",
    description: "State-of-the-art machines and free weights. Premium gear for serious athletes.",
    image: "https://images.unsplash.com/photo-1658848507056-24ba67502b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjBibGFja3xlbnwxfHx8fDE3Njc3MjI1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Users,
    title: "Expert Coaching",
    description: "Personalized training plans crafted by certified professionals who care about your goals.",
    image: "https://images.unsplash.com/photo-1646178175472-1afddc71ea8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmclMjBtaW5pbWFsfGVufDF8fHx8MTc2NzcyMjUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Data-driven approach with detailed analytics. Measure every gain, optimize every session.",
    image: "https://images.unsplash.com/photo-1632063795682-9401b360ddc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHN0cmVuZ3RofGVufDF8fHx8MTc2NzcyMjUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Features() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="features" className="py-32 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="mb-4">Built for Performance</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-[2px] bg-zinc-100"
          />
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      className="group bg-zinc-900 border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-zinc-700"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 border border-zinc-700">
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <h3 className="mb-3">{feature.title}</h3>
        <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}
