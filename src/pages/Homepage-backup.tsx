import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Globe, ArrowRight, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { LaptopShowcase } from "@/components/LaptopShowcase";
import { FeatureCard } from "@/components/FeatureCard";

const Homepage = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Analysis",
      description: "Get comprehensive credibility scores in seconds using advanced AI algorithms",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Real-time Protection",
      description: "Stay protected with automatic warnings for suspicious and misleading content",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Universal Coverage",
      description: "Works seamlessly across all major news platforms and social media sites",
      gradient: "from-blue-400 to-indigo-500",
    },
  ];

  const stats = [
    { label: "Articles Analyzed", value: "1M+", icon: TrendingUp },
    { label: "Accuracy Rate", value: "95%", icon: Star },
    { label: "Active Users", value: "50K+", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Modern Particle Background */}
      <div className="particles" />

      {/* Hero Section */}
      <HeroSection />

      {/* Scroll Indicator - Modern Design */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="text-center mt-20"
      >
        <p className="text-muted-foreground mb-6 text-sm font-medium tracking-wide">
          SCROLL TO EXPLORE
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-muted-foreground/20 rounded-full mx-auto relative bg-white/10 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-primary rounded-full mx-auto mt-1.5"
          />
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="card-glass text-center group hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* 3D Laptop Showcase */}
      <LaptopShowcase />

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of news verification with our advanced AI-powered platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
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
            className="text-muted-foreground text-lg font-medium"
          >
            <a href="https://nexbitx.vercel.app/" className="gradient-text shadow-grey/400">&copy;NexBit</a> 2025 Build
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;