import { motion } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";
import { ExtensionCard } from "@/components/ExtensionCard";
import { FeatureCard } from "@/components/FeatureCard";

const ExtensionPage = () => {

  const features = [
    {
      icon: Zap,
      title: "Instant Analysis",
      description: "Get credibility scores without leaving the page",
    },
    {
      icon: Shield,
      title: "Real-time Protection",
      description: "Automatic warnings for suspicious content",
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Compatible with all major news websites",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="particles" />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Browser <span className="gradient-text">Extension</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Install our browser extension for instant credibility checking while you browse
            </p>
          </motion.div>

          {/* Extension Card - Moved to Top */}
          <ExtensionCard />

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.2 * index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExtensionPage;