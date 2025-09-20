import { motion } from "framer-motion";
import { TypingText } from "@/components/TypingText";
import { Search, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">News Credibility</span>
              <br />
              <TypingText 
                text="Checker" 
                className="text-6xl md:text-7xl font-bold text-foreground"
              />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <TypingText 
              text="Is this news real or fake?" 
              className="text-2xl md:text-3xl text-muted-foreground font-medium"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/mobile">
              <Button className="btn-hero group">
                Try Mobile Version
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/extension">
              <Button variant="outline" className="glass border-primary/50 hover:bg-primary/10 text-foreground px-8 py-4">
                Get Extension
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered system analyzes news articles in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="card-feature group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
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
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute -inset-px rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              );
            })}
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
            className="gradient-text text-lg font-medium"
          >
            Built with AI • Powered by Truth • Designed for Everyone
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;