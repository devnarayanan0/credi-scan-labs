import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      className="card-feature group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <Icon className="w-8 h-8 text-primary-foreground" />
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-4 text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <motion.div
        className="absolute -inset-px rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  );
};