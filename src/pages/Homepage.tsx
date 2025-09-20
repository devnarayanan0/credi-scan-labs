import { motion } from "framer-motion";
import { Search, Shield, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";

const Homepage = () => {
  const features = [
    {
      icon: Search,
      title: "Paste Article URL",
      description: "Simply paste any news article URL from any website or social media platform.",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "AI Analysis",
      description: "Our advanced AI system analyzes credibility using multiple verification sources.",
      delay: 0.4,
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get credibility scores with detailed explanations in seconds, not minutes.",
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Particle Background */}
      <div className="particles" />
      
      {/* Hero Section */}
      <HeroSection />

  {/* How It Works Section */}
  <section className="pt-0 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered system analyzes news articles in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Verify Your News?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our AI-powered fact-checking system
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/mobile">
              <Button className="btn-hero group">
                Start Checking Now
                <CheckCircle className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 glass border-t border-glass-border">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="-black/40 text-lg font-medium"
          >
            <a href="https://nexbitx.vercel.app/" className="gradient-text shadow-grey/400">&copy;NexBit</a> 2025 Build
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;